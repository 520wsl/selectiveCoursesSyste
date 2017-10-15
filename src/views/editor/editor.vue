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
        defaultMsg: 'editor.vue?5c45:42 <p style="text-align: left; margin-bottom: 5px;">这里是U</p><p style="text-align: center; margin-bottom: 5px;"><img src="/ueditor/php/upload/image/20171015/1508063519822204.jpg" title="1508063519822204.jpg"/></p><ol class=" list-paddingleft-2" style="list-style-type: decimal;"><li><p style="line-height: normal; margin-bottom: 10px;"><img src="/ueditor/php/upload/image/20171015/1508063519100952.jpg" title="1508063519100952.jpg"/><img src="http://img.baidu.com/hi/jx2/j_0047.gif"/><img src="http://img.baidu.com/hi/jx2/j_0029.gif"/>szdfs18:44:04</p></li><li><p style="margin-bottom: 5px;">sdfsd</p></li><li><p style="margin-bottom: 5px;">sdf</p></li></ol><p style="margin-bottom: 5px;">sdf<br/></p><pre class="brush:php;toolbar:false;">h</pre><p style="margin-bottom: 5px;"><br/></p><p style="margin-bottom: 5px;"><br/></p><pre class="brush:diff;toolbar:false">sssfsdsdfsdfsdfsdf</pre><p><br/></p><p><br/></p><p style="margin-bottom: 5px;">E测试<br/></p>',
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



