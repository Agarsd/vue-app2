<template>

    <div>
        添加学生：
        <input type="text" v-model="name">
        <!-- <button @click="add">确认添加</button> -->
        <button @click="changeStudent({name, number: 1})">确认添加</button>
    </div>

</template>  

<script>
// 快速的拿到公共数据池中的数据，方便简洁
import { mapState, mapActions} from 'vuex'


export default {
    data() {
        return {
            name: '',
            // storenName: this.$store.state.names
        }
    },
    computed: {
        // ...扩展运算符
        ...mapState({
            storeName: state => state.name,
            storeAge: state => state.age,
            storeLook: state => state.look
        }),
        // a () {
        //     return 111
        // }
    },
    methods: {
        ...mapActions('student', ['changeStudent']),
        // add() {
            // this.$store.dispatch('changeStudent', {name:this.name, number:1})
            // this.$store.commit('changeStudent', {name: this.name, number: '111'})
            
            // this.$store.state.studentList.push(this.name)
            // console.log(this.$store.state.studentList)
            // this.$emit('add', this.name)
            // console.log(this.bus)
            // console.log(this)
            // this.bus.$emit('add', this.name)
            // 这个修改的数据和data中的storeName没有关系
            // this.$store.state.name = 'cgx +1'
        // }
    }
    // computed: {
    //     storenName() {
    //         return this.$store.state.name   
    //     },
    //     storeAge() {
    //         return this.$store.state.age
    //     },
    //     storeLook() {
    //         return this.$store.state.look
    //     }
    // },


    // 这一种会与data中的属性重名，给mapState中的name重命名好一点
    // computed: mapState(['name', 'age', 'look']),
    // 这个避免对象名字的冲突
    // computed: mapState({
    //     storeName: state => state.name,
    //     storeAge: state => state.age,
    //     storeLook(state) {
    //         return state=state.look
    //     }
    // }),

    // 解决computed中使用自身的属性

}
</script>

<style scoped>

button {
    margin-left: 20px;
    line-height: 25px;
    width: 80px;
}

</style>