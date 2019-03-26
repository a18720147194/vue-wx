<template>
  <div id="app">
    <router-view/>
    <footer class="footer">
      <ul class="bar">
        <li><router-link to='/'>流行</router-link></li>
        <li><router-link to='/books'>书籍</router-link></li>
        <li><router-link to='/my'>喜欢</router-link></li>
      </ul>
    </footer>
  </div>
</template>

<style>
*{
  margin: 0;
  padding: 0;
}
a,a:visited{
  text-decoration:none;
  color:black
}
.footer{
  border-top: #f5f5f5 1px solid;
  height: 44px;
  width: 100%;
  position: fixed;
  bottom: 0;
}
.bar{
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100%;
}
</style>
