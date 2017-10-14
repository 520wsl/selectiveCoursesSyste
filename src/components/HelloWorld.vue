<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    测试MadDragon
    <div>{{test}}</div>
    <ul>
      <li v-for="item in operateProblemList.list" :key="item.id">
        <p>id:{{item.id}}</p>
        <p>name:{{item.kfname}}</p>
      </li>
    </ul>
  </div>
</template>

<script scoped>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  computed: {
    ...mapState({
      test: store => store.Public.test,
      operateProblemList:store => store.Public.operateProblemList,
    })
  },
  mounted() {
    console.log(this.operateProblemList.list)
    console.log(this.$moment().format('YYYY-MM-DD'))
    console.log(this.$moment().format('x'))
    this.getOperateProblemList();
    this.getData();
  },
  methods: {
    ...mapActions(['getOperateProblemList']),
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
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
