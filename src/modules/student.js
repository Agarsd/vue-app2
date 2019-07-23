
// export default 导出
export default {
    // 一定需要加一个命名空间
    namespaced: true,
    state: {
      studentList: [1,2,3],
    },
    getters: {
      newStudent(state, getters) {
        return state.studentList.map((item, index) => {
          if (index == 0 ) {
            return '**' + item
          }else if (index < 3) {
            return item + '**'
          }else {
            return '++' + item + '++'
          }
        })
      }
    },
    mutations: {
      changeStudent (state, {name, number}) {
          state.studentList.push(name + number)   
      }
    },
    actions: {
      changeStudent (ctx, {name, number}) {
        setTimeout(() => {
          ctx.commit('changeStudent', {name, number})
        },1000)
       }
    }
  }