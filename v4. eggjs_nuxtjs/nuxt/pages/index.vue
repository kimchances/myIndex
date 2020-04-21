<template>
  <section @scroll="scrollToTop">
    <!-- 顶部 -->
    <header class="top">
      <div
        class="el-col-xs-24 el-col-sm-20 el-col-md-20 el-col-lg-20 el-col-xl-20"
      >
        <article v-html="indexData.userInfo.desc"></article>
      </div>
    </header>
    <!-- 中间 -->
    <main
      class="mid  el-col-xs-24 el-col-sm-20 el-col-md-20 el-col-lg-20 el-col-xl-20"
    >
      <el-collapse v-model="activeNames">
        <el-collapse-item
          v-for="(company, index) in indexData.companyInfo"
          :title="company.name"
          :name="index"
          :key="company.name"
        >
          <el-row :gutter="24">
            <el-col
              :xs="24"
              :sm="8"
              :md="6"
              :lg="4"
              :xl="4"
              v-for="project in company.list"
              :key="project.name"
            >
              <el-card
                shadow="hover"
                :body-style="{ padding: '0px', marginBottom: '10px' }"
              >
                <nuxt-link :to="`/list/${project.id}`" no-prefetch>
                  <img :src="project.pic" class="image" />
                  <div style="padding: 14px;">
                    <span>{{ project.name }}</span>
                    <div class="bottom clearfix">
                      <time class="time">{{ project.desc }}</time>
                    </div>
                  </div>
                </nuxt-link>
              </el-card>
            </el-col>
          </el-row>
        </el-collapse-item>
      </el-collapse>
    </main>
    <footer class="bot">
      {{ indexData }}
    </footer>
  </section>
</template>

<script>
import axios from "axios";
export default {
  async asyncData({ $axios }) {
    let { data } = await $axios.get(`${process.env.baseUrl}`);
    return { indexData: data.data };
  },
  data() {
    return {
      loading: true,
      activeNames: [0, 1, 2, 3]
    };
  },
  components: {},
  methods: {
    scrollToTop() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      console.log(scrollTop);
    }
  }
};
</script>

<style lang="scss" scoped>
.top {
  position: sticky;
  top: 0;
  color: #fff;
  background-color: #222831;
  font-size: 18px;
  line-height: 30px;
  z-index: 1;
  padding: 25px 0;
  letter-spacing: 2px;
  ul {
    @include clear;
    line-height: 60px;
    margin: 0 auto;
    float: none;
    li {
      display: inline;
      margin: 0 20px;
    }
  }
  > div {
    margin: 0 auto;
    float: none;
  }
}
.mid {
  margin: 0 auto;
  float: none;
  /deep/ .el-card {
    margin-bottom: 25px;
    padding: 0;
    a:link,
    a:visited {
      text-decoration: none;
      color: #000;
    }
    .bottom {
      margin-top: 13px;
      line-height: 12px;
    }

    .image {
      width: 100%;
      display: block;
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
</style>
