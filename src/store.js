// 引入
import Vue from 'vue'
import Vuex from 'vuex'


import student from '@/modules/student'
import course from '@/modules/course'


// 使用vuex
Vue.use(Vuex)



// 是在Vuex里面的store的方法的实例
export default new Vuex.Store({
  strict: true,
  state: {
    name: 'cgx',
    age: '18',
    look: 'hansome',

    // studentList: [],

    // courseList: [
    //   {
    //     name: 'Web前端开发之JavaScript(Js)精英课堂【渡一教育】',
    //     price: 9.9,
    //     poster: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLBsSud06XlZnJACsTWd7OSA5phIFPRTNibFBeuT8jRjy00Jb5ticSEKYUnpUYdBCicH2U/356'
    //   },
    //   {
    //       name: 'Web前端开发之HTML+CSS精英课堂【渡一教育】',
    //       price: 68,
    //       poster: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLBDFLdArBwf70PjMrL6bq0OI9LesEsskk1iamJKibriaic0QkBZhINoDuN0DicaojkqyQjk/356'
    //   },
    //   {
    //       name: '淘宝商城项目实战开发【渡一教育】',
    //       price: 398,
    //       poster: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLDBpXKL1sgAOKcbSz0Od2abiaqdJibiaDDQWfmrVNBCFrIpbTQKlNyWbPg5Uo1dnT7Znk/356'
    //   },
    //   {
    //       name: '零基础WEB前端入门',
    //       price: 9.9,
    //       poster: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLCRlDgtxVbmyclxP9fDUYmnuqAFbN5mYsncrPrVyQbtA3fNfuZ3qicSe1r7Ppt7tICs/356'
    //   },
    //   {
    //       name: 'React顶级企业实战，全流程制作淘票票WebApp【渡一教育】',
    //       price: 399,
    //       poster: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLB2CyXIxsb8iaAUibBB9mzlkSgKNU7GiciaYxG1SicoLjkiahZ3ia54eZWbtCGDkFyvMo0uKk/356'
    //   },
    //   {
    //       name: '原生JS贪吃蛇游戏实战开发【渡一教育】',
    //       price: 19,
    //       poster: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLCfsOGnxjhUXFA6SHMOu0fMUicuucRlIVNo9zBnnLiacovMnePD6586QlRj2qvwudbn8/356'
    //   },
    //   {
    //       name: '原生JS扫雷游戏实战开发【渡一教育】',
    //       price: 38,
    //       poster: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLDaTljUSVGk2eqS1MCT3DwDqxgs7KhfMf3411SXQkRvmiaicIuz47ydO27zGPWK97wicw/356'
    //   },
    //   {
    //       name: '你不知道的Javascript【渡一教育】',
    //       price: 55,
    //       poster: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLCelo2lyibtrxDia7aq7tC0LE1Lcz2LVoDqhQy5tnOHicTzWhLuvPekL35rEmwTdgNuwI/356'
    //   },
    // ]
  },

  // 一个使用modules的字段
  modules: {
    course: course,
    // course
    student: student
    // student
  }

  // 涉及到修改和判断数据池里面的值时，是需要用getters
  // getters: {
  //   // 相当与computed的计算属性
  //   // getters里面的函数可以传两个值
  //   newStudent(state, getters) {
  //     return state.studentList.map((item, index) => {
  //       if (index == 0 ) {
  //         return '**' + item + getters.a
  //       }else if (index < 3) {
  //         return item + '**'
  //       }else {
  //         return '++' + item + '++'
  //       }
  //     })
  //   },
  //   // a () {
  //   //   return 111
  //   // }
  // },
  // mutations: {
  //   // 可以接受两个参数，第二个参数可以为{}
  //   changeStudent (state, {name, number}) {
  //     // 这里setTimeout执行了一些异步的操作，不方便调试
  //     // setTimeout( () => {
  //       state.studentList.push(name + number)        
  //     // },1000 )
  //     // state.studentList.push(name + number)
  //   },

  //   changeCourse (state, {index, name, price}) {
  //     state.courseList[index].name = name;
  //     state.courseList[index].price = price;
  //   }

  // },
  // actions: {
  //   // 存在的意义就是要执行一些异步的操作
  //   // ctx为上下文对象
  //  changeStudent (ctx, {name, number}) {
  //   setTimeout(() => {
  //     ctx.commit('changeStudent', {name, number})
  //   },1000)
  //  }
  // }
})
