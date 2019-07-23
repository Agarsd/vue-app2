<template>
  <div id="app">

    <div class="header">
      <div class="center">
        <div class="logo">
          <img src="./assets/images/logo.png" alt="">
          <!-- <img src="./assets/images/logo2.png" alt=""> -->
        </div>

        <ul class="nav">
            <router-link tag="li" to="/home">首页</router-link>
            <router-link tag="li" to="/learn">课堂学习</router-link>
            <router-link tag="li" to="/student">学员展示</router-link>
            <router-link tag="li" to="/about">关于</router-link>
            <router-link tag="li" to="/community">社区</router-link>
        </ul>
      </div>
    </div>

    <router-view class="router-view"/>
    <!-- router-view的复用 -->
    <!-- <router-view class="router-view" name = 'academic'></router-view> -->

    <div class="footer"></div>

  </div>
</template>

<style>

/* 这一个另外写再了css初始化样式那 */
/* *{
  margin: 0;
  list-style: none;
} */


/* .router-link-exact-active {

} */

/* .router-link-active {
  border-bottom: 2px solid #fff;
} */
.active {
  border-bottom: 2px solid #fff;
}

.header {
  background-color: #000;
  line-height: 70px;
  padding-bottom: 2px;
}
.header .center {
  display: flex;
  justify-content: space-between;
  width: 1000px;
  margin: 0 auto;
}
.header .center img {
  width: 50px;
  height: 50px;
  vertical-align: middle;
} 
.header .center .logo {
  line-height: 70px;
}
.header .center ul {
  display: flex;
}
.header .center ul li {
  color: #fff;
  padding: 0 30px;
  cursor: pointer;
}
.footer {
  /* position: fixed;
  bottom: 0; */
  width: 100%;
  height: 150px;
  background-color: #000;
}
.router-view {
  width: 1000px;
  margin: 0 auto;
  padding-top: 40px;
  min-height: 500px;
}
</style>
