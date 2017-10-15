<template>
  <div class="components-container">
    <button @click="getUEContent()">获取内容</button>
    <div class="editor-container">
      <UE :defaultMsg=defaultMsg :config=config :id=ue1 ref="ue"></UE>
    </div>
  </div>
</template>
<style>
  .info{
    border-radius: 10px;
    line-height: 20px;
    padding: 10px;
    margin: 10px;
    background-color: #ffffff;
  }
</style>
<script>
  // import UE from '@/components/ue/ue.vue';
  import UE from '../../components/ue'
  export default {
    components: {UE},
    data() {
      return {
        defaultMsg: '这里是UE测试',
        config: {
          initialFrameWidth: null,
          initialFrameHeight: 350
        },
        ue1: "ue1", // 不同编辑器必须不同的id
      }
    },
    methods: {
      getUEContent() {
        let content = this.$refs.ue.getUEContent(); // 调用子组件方法
        // this.$notify({
        //   title: '获取成功，可在控制台查看！',
        //   message: content,
        //   type: 'success'
        // });
        console.log(content)
      }
    }
  };
</script>



