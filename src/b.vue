<template>
  <div class="hello">Hello {{who}}

           <h1>b.vue</h1>
  </div>

</template>

<script>
module.exports = {
  data: function() {
    return {
      who: "world"
    };
  }
};
</script>

<style>
.hello {
  background-color: #ffe;
}
</style>
