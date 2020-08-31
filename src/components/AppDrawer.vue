<template>
  <v-navigation-drawer app color="primary">
    <v-row>
      <v-col cols="12" class="d-flex justify-center" >
        <Logotipo :isMobile="false" />
      </v-col>
      <v-col cols="12">
        <v-list dense>
          <v-list-item-group v-model="item" color="white">
            <v-list-item
              v-for="(item, i) in menu"
              :key="i"
              class="white--text"
            >
              <v-list-item-content>
                <v-list-item-title class="white--text">{{ item.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>

          <v-subheader class="submenu--text text-subtitle-1 font-weight-medium ml-2 mt-2">Submenu</v-subheader>
          <v-list-item-group v-model="itemSubmenu" color="white">
            <v-list-item
              v-for="(item, i) in menu"
              :key="i"
              class="white--text"
            >
              <v-list-item-content>
                <v-list-item-title class="white--text">{{ item.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>

          <v-subheader class="submenu--text text-subtitle-1 font-weight-medium ml-2 mt-2">Submenu</v-subheader>
          <v-list-item-group v-model="itemSubmenu2" color="white">
            <v-list-item
              v-for="(item, i) in menu"
              :key="i"
              class="white--text"
            >
              <v-list-item-content>
                <v-list-item-title class="white--text">{{ item.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
    </v-row>
  </v-navigation-drawer>
</template>
<script>
import Logotipo from "@/components/Logotipo";
export default {
  components: {
    Logotipo
  },

  data() {
    return {
      item: null,
      itemSubmenu: null,
      itemSubmenu2: null,
      menu: [
        { text: 'Link', icon: 'mdi-clock' },
        { text: 'Link', icon: 'mdi-account' },
        { text: 'Link', icon: 'mdi-flag' },
      ],
    };
  }
}
</script>