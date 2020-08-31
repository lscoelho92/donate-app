<template>
  <div id="logotipo" class="big mt-6" v-if="!isMobile">
    LOGOTIPO
  </div>
  <div id="logotipo" class="small" v-else>
    LOGOTIPO
  </div>
</template>
<script>
export default {
  name: "Logotipo",
  props: {
    isMobile: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style scoped lang="scss">
#logotipo::v-deep {
  display: inline-block;
  font-weight: bold;
  color: #059D42;
  background-color: #FFFFFF;
  opacity: 0.6;

  &.big {
    font-size: 28px;
    padding: 24px;
    border-radius: 34px;
  }

  &.small {
    font-size: 14px;
    padding: 12px;
    border-radius: 17px;
  }
}
</style>