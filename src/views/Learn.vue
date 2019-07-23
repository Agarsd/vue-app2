<template>

    <div>
        <course-list></course-list>   
        <!-- 因为需要切换路由，所以要使用router-link -->
        <!-- <button class="change-course-btn">修改课程</button> -->
        <router-link 
            :to="{name: 'changecourse'}" 
            tag="button" 
            class="change-course-btn"
        >
                修改课程
        </router-link>
    </div>
</template>

<script>

import CourseList from '@/components/learn/CourseList'

export default {
    // 对象情况要有 s
    components: {
        CourseList
    }
}
</script>

<style scoped>

    .change-course-btn {
        display: block;
        margin: 20px auto;
        width: 200px;
        line-height: 40px;
        background-color: #000;
        color: #fff;
    }

</style>