<template>
  <div class="right-container">
    <h3>Right 组件</h3>
    <hr />
    <MyCount :init="6"></MyCount>
  </div>
</template><script>
import MyCount from "@/components/Count.vue";

export default {
  components: {
    MyCount: MyCount,
  },
};
</script><style lang="less">
.right-container {
  padding: 0 20px 20px;
  background-color: lightskyblue;
  min-height: 250px;
  flex: 1;
}
</style>