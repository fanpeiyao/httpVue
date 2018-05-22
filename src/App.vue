<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>

        <router-link to="/bb"  tag="li">bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb</router-link>
        <router-link to="/aa"  tag="li">httpVueLoader</router-link>
        <router-link to="/b"  tag="li">原始</router-link>


        <router-link to="/test-add"  tag="li">addRouter</router-link>

        <router-view></router-view>

    </ul>

  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  components: {
    test: httpVueLoader("src/a.vue")
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
