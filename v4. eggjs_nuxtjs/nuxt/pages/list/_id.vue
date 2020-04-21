<template>
  <div>
    {{ data.data.detail ? data.data.detail : "没东西" }}
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    let { data } = await $axios.get(
      `${process.env.baseUrl}detail/${params.id}`
    );
    return { data };
  },
  components: {},
  validate({ params }) {
    // 必须是number类型
    return /^\d+$/.test(params.id);
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 1140px;
  margin: 0 auto;
  display: block;
  @include clear;
}
.header {
  height: 60px;
  position: sticky;
  top: 0;
  color: #fff;
  background-color: #222831;
  font-size: 18px;
  ul {
    @include clear;
    line-height: 60px;
    text-align: center;
    li {
      float: left;
      margin: 0 20px;
    }
  }
}

.personal {
  @include clear;
  // background-color: $bg-color;
  color: #fff;
  &-left {
    padding: 10px;
    width: 60%;
    float: left;
    text-align: center;
  }
  &-right {
    padding: 10px;
    width: 100px;
    float: left;
    > img {
      border-radius: 50%;
      width: 100%;
      border: 4px solid #fff;
    }
  }
}

.history {
  box-shadow: inset 0px 1px 0px 0px rgba(0, 0, 0, 0.05),
    inset 0px 2px 3px 0px rgba(0, 0, 0, 0.1);
  height: 500px;
}
</style>
