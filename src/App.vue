<template>
  <v-app>
    <AppDrawer />
    <v-app-bar 
      v-if="$vuetify.breakpoint.xsOnly"
      app  
      flat 
      fixed 
      color="primary" 
      class="py-2" 
      height="auto"
      max-height="72"
      style="position: relative"
    >
      <v-app-bar-nav-icon dark></v-app-bar-nav-icon>
      <Logotipo :isMobile="true" class="ma-auto" style="transform: translateX(-18px);"/>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main id="mainContent">
        <!-- If using vue-router -->
        <router-view :key="$route.fullPath"></router-view>
    </v-main>
  </v-app>
</template>
<script>
import AppDrawer from '@/components/AppDrawer';
import Logotipo from "@/components/Logotipo";

export default {
  components: {
    AppDrawer,
    Logotipo
  },
}
</script>
<style scoped lang="scss">
#mainContent::v-deep {
  background: #E5E5E5;
}
</style>
