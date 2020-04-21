<template>
  <div class="code">
    <div class="code-area">
      <span class="notes"> // {{ error.message }}. </span>
      <span>
        <span class="if">
          if
        </span>
        (
        <span class="compare">status == {{ error.statusCode }}</span>
        ) {
      </span>
      <span>
        <span class="throw"> <i></i>throw </span>
        <span> (<span class="smile">"(╯°□°)╯︵ ┻━┻"</span>); </span>
        <span style="display:block">}</span>
        <span class="notes">
          // <nuxt-link :to="`/`" no-prefetch>Go home!</nuxt-link>
        </span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"]
};
</script>
<style lang="scss" scoped>
a {
  color: #fff;
}

.code {
  height: 100vh;
  width: 100vw;
  position: relative;
  background: #081421;
  color: #d3d7de;
  font-family: "Courier new";
  font-size: 18px;
  line-height: 1.5em;
  cursor: default;
  &-area {
    position: relative;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    display: inline-block;
    > span {
      display: block;
    }
    .notes {
      color: #777;
      font-style: italic;
    }
    .throw {
      padding-left: 15px;
      color: #2796ec;
      > i {
        width: 10px;
        display: inline-block;
      }
    }
    .if {
      color: #d65562;
    }
    .compare {
      font-style: italic;
      color: #bdbdbd;
    }
    .smile {
      color: #a6a61f;
    }
  }
}

@media screen and (max-width: 320px) {
  .code-area {
    font-size: 5vw;
    min-width: auto;
    width: 95%;
    margin: auto;
    padding: 5px;
    padding-left: 10px;
    line-height: 6.5vw;
  }
}
</style>
