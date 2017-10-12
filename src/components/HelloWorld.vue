<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    测试MadDragon
    <br /> {{test}}
  </div>
</template>

<script scoped>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  computed: {
    ...mapState({
      test: store => store.Public.test
    })
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.$ajax.get('custom/operateproblem/getOperateProblemList').then((e) => {
       console.log(e)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
