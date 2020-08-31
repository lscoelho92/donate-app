<template>
  <div id="donatedBox" :class="donatedValue > 0 ? 'primary' : 'error'">
    <v-img src="@/assets/icon-money.png" class="mr-3" max-width="22" max-height="22" contain></v-img>
    <strong v-if="donatedValue > 0">Você já adicionou R$ {{ donatedValue }},00</strong>
    <strong v-else>Você não adicionou nada</strong>
  </div>
</template>
<script>
export default {
  name: 'DonatedLabel',
  props: {
    donatedValue: {
      type: Number,
      default: 0,
    },
  },
};
</script>
<style scoped lang="scss">
#donatedBox::v-deep {
  position: absolute;
  display: flex;
  align-content: center;
  justify-content: center;
  top: 0;
  right: 0;
  color: #FFFFFF;
  font-size: 16px;
  padding: 7px 14px;
  border-radius: 0;
  transform: translate(10%, -50%);
}
</style>