<template>
    <div>
        <!-- <add-student @add="add"></add-student>
        <student-list :student-list="studentList"></student-list> -->
        <add-student></add-student>
        <student-list></student-list>
    </div>

</template>

<script>
// @ 表示上级中的components文件路径
import AddStudent from '@/components/student/AddStudent'
import StudentList from '@/components/student/StudentList'

export default {
    components: {
        AddStudent,
        StudentList
    },
    data() {
        return {
            studentList: []
        }
    },
    methods: {
        add(name) {
            // console.log(this.studentList)
            this.studentList.push(name)
            
        }
    }
    
}
</script>

<style scoped>

</style>