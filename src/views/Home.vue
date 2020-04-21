<template>
  <div class="home">
    <div class="test-box1">
      <div class="test-box2">this is content</div>
    </div>
    <!-- <van-button type="primary" size="large">大号按钮</van-button>
    <van-button type="primary" size="normal">普通按钮</van-button>
    <van-button type="primary" size="small">小型按钮</van-button>
    <van-button type="primary" size="mini">迷你按钮</van-button>-->
    <van-button>单色按钮</van-button>
    <div id="id123" class="hello123" title="123"></div>
  </div>
</template>

<script>
import { Button } from 'vant'
export default {
  name: 'Home',
  components: {
    [Button.name]: Button
  },
  mounted() {
    console.log(process.env)
    const obj = {
      a: 1,
      b: 2
    }
    if (obj.a === 1) {
      console.log(true)
    }
    function foo() {
      return true
    } // ✗ avoid

    foo()
    console.log(obj?.a)
    console.log(obj?.b)
    console.log(obj?.c?.d ?? 'hello')
    console.log(obj.a === 1 ? 1 : 2)
  },
  methods: {
    getElement() {
      console.log(111)
    }
  }
}
</script>

<style lang="scss" scoped>
.test-box1 {
  width: 375px;
  height: 100px;
  background: #cccccc;
  box-sizing: border-box;
  padding: 20px;
}
.test-box2 {
  width: 200px;
  height: 100%;
  background: red;
}
</style>
