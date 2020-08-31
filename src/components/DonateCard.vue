<template>
  <v-card id="donateCard" max-width="905" class="my-6" v-if="Object.keys(person).length > 0">
    
    <DonatedLabel :donatedValue="copyPerson.currentAmount" />

    <v-card-text>
      <v-row no-gutters>
        <v-col cols="1" class="d-flex justify-center pr-3" v-if="!$vuetify.breakpoint.xsOnly">
          <v-img src="@/assets/Money.png" max-width="42" max-height="42" contain></v-img>
        </v-col>
        <v-col cols="12" sm="12" md="11" class="pr-6">
          <h3 class="primary--text mb-3">{{ person.employee_name }}</h3>
          <p class="mb-6">
            Ao clicar no link abaixo, uma dialog irá aparecer perguntando quantos reais você deseja adicionar a barra de progresso. A barra deve começar em 0.
          </p>
          <div id="progressBarContainer">
            <span id="maxAmountLabel">Total R$ 200,00</span>
            <div id="maxAmountLimiter"></div>
            <v-progress-linear
              v-model="donatePercent"
              height="16"
              background-color="#E9E9E9"
              color="primary"
              rounded
            >
              <strong id="percentLabel" :class="donatePercent > 55 && 'whiteLabel'">{{ donatePercent }}%</strong>
            </v-progress-linear>
          </div>
          <v-btn depressed rounded  dark color="primary" @click="donateDialog = true" class="add-button mt-6">
            <v-icon size="25" class="mr-1">mdi-plus</v-icon>
            <span>Clique aqui para adicionar reais</span>
          </v-btn>
        </v-col>
      </v-row>
    </v-card-text>

    <v-dialog
      v-model="donateDialog"
      max-width="600"
      id="donateDialog"
    >
      <v-card>
        <v-card-title class="d-flex justify-space-between primary white--text">
          <strong>Quantos reais adicionar para {{ person.employee_name }}?</strong>
          <v-btn icon color="white" @click="donateDialog = false" >
            <v-icon size="25">fa-times</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="py-6">
          <v-row>
            <template v-for="value in valueOptions">
              <v-col 
                cols="12" 
                xs="12" 
                md="6" 
                class="d-flex justify-center align-center" 
                :key="value"
              >
                <v-btn 
                  color="secondary" 
                  class="money-button" 
                  depressed 
                  width="212" 
                  height="96"
                  @click="add(value)"
                >
                  <span class="primary--text text-h4 font-weight-bold">R$ {{ value }}</span>
                </v-btn>
              </v-col>
            </template>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-card>
</template>
<script>
import DonatedLabel from '@/components/DonatedLabel';

export default {
  name: 'DonateCard',
  props: {
    person: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  components: {
    DonatedLabel
  },

  data() {
    return {
      copyPerson: this.person,
      maxAmount: 200,
      donateDialog: false,
      valueOptions: [25, 50, 75, 125],
      donatePercent: 0
    };
  },

  methods: {
    add(value) {
      this.copyPerson.currentAmount = this.copyPerson.currentAmount + value;
      this.donatePercent = (this.copyPerson.currentAmount / this.maxAmount) * 100;
      this.donateDialog = false;
    }
  }
};
</script>
<style scoped lang="scss">
#donateCard::v-deep {
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.15);

  h3 {
    font-size: 16px;
  }

  p {
    font-size: 12px;
    max-width: 85%;
  }

  .v-progress-linear--rounded {
    border-radius: 10px;
  }

  .add-button {
    span {
      font-size: 12px;
      text-transform: initial;
    }
  }
  #progressBarContainer {
    position: relative;
    display: block;

    #maxAmountLabel {
      position: absolute;
      right: -20px;
      margin-top: -20px;
      font-size: 10px;
      color: #778489;
    }

    #maxAmountLimiter {
      position: absolute;
      display: block;
      width: 1px;
      height: 19px;
      top: -1px;
      right: 10px;
      border-left: 1px dashed #63666A;
      opacity: 0.6;
      z-index: 10;
    }

    #percentLabel {
      font-size: 10px;
      font-weight: normal;
      margin-top: 2.5px;

      &.whiteLabel {
        color: #FFFFFF;
      }
    }
  }
}

</style>