import {debounce} from "common/utils";
// 通过混入，把相同的代码封装到这里，然后在不同的组件中使用
export const itemListenerMixin = {
  date() {
    return {
      itemImgListener: null
    }
  },
  mounted() {
    // 调用防抖函数，返回的还是一个函数
    const refresh = debounce(this.$refs.scroll.refresh, 50);
    /*监听事件总线里的事件*/
    this.itemImgListener = () => {
      // 调用防抖函数的返回值
      refresh();
    };
    this.$bus.$on('itemImageLoad', this.itemImgListener);
  }
};
// 回到顶部按钮
export const backTopMixin = {
  data() {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    /*回到顶部：通过$refs拿到自己封装的scroll组件对象，然后在调用自己封装的scrollTo方法*/
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    listenShowBackTop(position){
      //屏幕向上滚动超过1000像素，显示回到顶部按钮
      this.isShowBackTop = (-position.y) > 1000;
    }
  }
};
