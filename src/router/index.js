import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 懒加载的方式加载组件
// const Home = ()=> import ('views/home/Home');


const routes =[
  // {path:'',redirect:"/home"},
];


const router = new VueRouter({
  routes,
  mode:'history'
});


export default router;
