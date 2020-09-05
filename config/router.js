import Vue from 'vue';
import VueRouter from 'vue-router';


//这种路由懒加载的本质就是通过调用Promise.resolve()来强制按需要加载路由组件使用的
const Home = () => import('../components/Home');
const NotFound = () => import('../components/NotFound');
const CallMe = import('../components/CallMe');
const Find = import('../components/Find');
const GoodsDetail = import('../components/GoodsDetail');
const GoodsList = import('../components/GoodsList');
const NewsDetail = import('../components/NewsDetail');
const NewsList = import('../components/NewsList');
const PhotoShareDetail = import('../components/PhotoShareDetail');
const PhotoShareList = import('../components/PhotoShareList');
const Search = import('../components/Search');

Vue.use(VueRouter);
export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: { name: 'home' }
        },
        {
            name: 'home',
            path: '/home',
            component: Home
        },
        {
            name: 'callme',
            path: '/callme',
            component: CallMe
        },
        {
            name: 'find',
            path: '/find',
            component: Find
        },
        {
            name: 'goods-detail',
            path: '/goods-detail',
            component: GoodsDetail
        },
        {
            name: 'goods-list',
            path: '/goods-list',
            component: GoodsList
        },
        {
            name: 'news-detail',
            path: '/news-detail',
            component: NewsDetail
        },
        {
            name: 'home',
            path: '/home',
            component: NewsList
        },
        {
            name: 'photo-share-detail',
            path: '/photo-share-detail',
            component: PhotoShareDetail
        },
        {
            name: 'photo-share-list',
            path: '/photo-share-list',
            component: PhotoShareList
        },
        {
            name: 'search',
            path: '/search',
            component: Search
        },
        {
            path: '*',
            component: NotFound
        }
    ]
})