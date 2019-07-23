import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
// import About from './views/About.vue'
// import Student from './views/Student.vue'
// import Learn from './views/Learn.vue'
// import Community from './views/Community.vue'

// import Academic from './components/community/Academic'
// import Download from './components/community/Download'
// import Personal from './components/community/Personal'

// import Err from './components/Err'
// import Question from './components/Question'

// 首先是首屏加载，js文件，存在disk cache中，
// 实现路由懒加载，在跳转过程中在disk cache中直接获取

const Home = () => import('./views/Home')
const Learn = () => import('./views/Learn')
const Student = () => import('./views/Student')
const About = () => import('./views/About')
const Community = () => import('./views/Community')

const Academic = () => import('./components/community/Academic')
const Download = () => import('./components/community/Download')
const Personal = () => import('./components/community/Personal')

const Question = () => import('./components/Question')
const Err = () => import('./components/Err')
const ChangeCourse = () => import('./components/ChangeCourse')


Vue.use(Router)

// export default new Router({
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact',
  routes: [
    // {
    //   path: '/',
    //   redirect: '/home'
    // },
    {
      path: '/home',
      name: 'home',
      // 路由别名
      // alias: '/home'
      // redirect: '/home',
      // component: Home
      // 可以复数的components
      components: {
        // 默认显示的信息
        default: Home,
        // 自定义名字的组件信息
        // 'academic': Academic
      }
    },
    {
      path: '/learn',
      name: 'learn',
      component: Learn
    },
    {
      path: '/student',
      name: 'student',
      component: Student
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/community',
      name: 'community',
      redirect: '/community/academic',
      component: Community,
      // 路由源信息
      meta: {
        login: false
      },
      children: [
        {
          // path: '/community/academic',
          path: 'academic',
          name: 'academic',
          component: Academic,
          // 路由独享守卫
          // beforeEnter (to, from, next) {
          //   const answer = confirm('你还没有登陆，要登陆后才能浏览信息，要登陆嘛?');
          //   if (answer) {
          //     next({name: 'personal'})
          //   }else {
          //     next(false)
          //   }
          // }
        },
        {
          path: 'download',
          name: 'download',
          component: Download
        },
        {
          path: 'personal',
          name: 'personal',
          component: Personal
        }
      ]
    },
    {
      path: '/question/:id',
      name: 'question',
      component: Question
    },
    {
      path: '/err.html',
      name: 'err',
      component: Err
    },
    
    //不能使用children的属性加载learn的下面，因为这样用了的话，
    // 它不能跳转而且还需要在learn.vue中用到router-view标签来显示，在learn的下面

    {
      path: '/learn/changecourse',
      name: 'changecourse',
      component: ChangeCourse
    },


    // 路由重定向
    {
      path: '*',
      // redirect 可以是string 也可以是方法
      // redirect: '/home'
      redirect (to) {
        console.log(to);
        if (to.path == '/') {
          return '/home'
        }else {
          return {name: 'err'}
        }
      }
    }

  ]
})

// 导航守卫
// 全局守卫

// router.beforeEach( (to, from, next) => {
//   // to 要到哪里去？
//   // from 从哪里来？
//   // console.log(to);
//   // console.log(from);

//   if (to.path === '/community/academic') {
//     // alert('去社区')
//     const answer = confirm('你还没有登陆，要登陆后才能浏览信息，要登陆嘛?')
//     if (answer) {
//       // next ({name: 'personal'})
//       next ('/community/personal')
//     }
//   }
//   else {
//     next();
//   }

// } )
export default router;

