<template>

    <div>
        学生列表：
        <ul>
            <!-- <li v-for="(item, index) in studentList" :key="index + item"> -->
            <li v-for="(item, index) in student" 
                :key="index + item">
                {{index}}.{{item}}
            </li>
        </ul>
    </div>

</template>

<script>
// vuex 是一个仓库 共享数据的仓库 vue add vuex

import {mapState, mapGetters} from 'vuex'

export default {
    // props:['student-list']
    data() {
        return {
            // studentList: []
        }
    },
    computed: {
        ...mapState('student', ['studentList']),
        
        // 该方法麻烦
        // newStudent () {
        //     return this.$store.getters.newStudent
        // }

        // ...mapGetters(['newStudent'])

        // 也可以传入对象
        ...mapGetters('student',{
            // 直接传入在getters中的命名就可以了
            student: 'newStudent'
        })

    },
    created() {
        this.bus.$on('add', name => {
            this.studentList.push(name)
        })
    }
}
</script>

<style scoped>

</style>