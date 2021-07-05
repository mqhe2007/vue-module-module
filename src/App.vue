<template>
  <div class="frame">
    <header>
      <img src="./assets/logo.svg" />
      <h1>vue-module-loader</h1>
      <h2>微前端架构</h2>
      <router-link to="/">本地模块</router-link> |
      <router-link to="/module-page">远程模块</router-link>
    </header>

    <router-view></router-view>
  </div>
</template>
<style>
body {
  margin: 0;
}
.frame {
  text-align: center;
}
.frame img {
  width: 200px;
}
.frame a {
  color: #49b883;
}
header {
  padding: 100px 0;
  background: #fff;
}
</style>
