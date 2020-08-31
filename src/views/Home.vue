<template>
  <!-- Provides the application the proper gutter -->
  <v-container id="home" v-if="!apiError">
    <div class="text-center" v-if="loading">
      <v-progress-circular
        indeterminate
        color="primary"
      ></v-progress-circular>
    </div>
    <div v-else>
      <h2 class="mb-12 mt-7">Pessoas que vão ganhar dinheiro</h2>

      <template v-for="person in persons">
        <v-row :key="'box-' + person.employee_name" justify="center">
          <v-col>
            <DonateCard :person="person" />
          </v-col>
        </v-row>
      </template>
    </div>
  </v-container>
  <v-container id="home" v-else>
    <h2 class="mb-12 mt-7 error--text">Erro na API</h2>
  </v-container>
</template>
<script>
import DonateCard from '@/components/DonateCard';
import axios from 'axios';

export default {
  components: {
    DonateCard
  },

  data() {
    return {
      persons: [],
      loading: true,
      apiError: false,
    };
  },

  mounted() {
    this.getPersons();
  },

  methods: {
    getPersons() {
      axios.get('http://dummy.restapiexample.com/api/v1/employees')
        .then(response => (
          this.persons = response.data.data,
          this.persons.forEach(function (person) {
            person.currentAmount = 0;
          }),
          this.loading = false
        ))
        .catch(function (error) {
          this.apiError = true;
          console.log('erro api: ', error);
          this.loading = false
        });

    },
  }

};
</script>
<style scoped lang="scss">
#home::v-deep {
  h2 {
    font-size: 28.3666px;
  }
}
</style>
