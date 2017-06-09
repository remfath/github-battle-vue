<template>
  <div>
    <loading v-if="loading"></loading>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="!loading && !error" class="battle-result-container">
      <div class="result-show">
        <user-result label="Winner" :data="users[0]"/>
        <user-result label="Loser" :data="users[1]"/>
      </div>
      <router-link to="/battle" class="battle-again">Battle Again</router-link>
    </div>
  </div>
</template>

<script>
  import api from '../utils/api'
  import Loading from './Loading.vue'
  import UserResult from './battle/UserResult.vue'
  export default {
    data () {
      return {
        playerOneName: this.$route.query.playerOneName,
        playerTwoName: this.$route.query.playerTwoName,
        loading: true,
        error: '',
        users: ''
      }
    },
    components: {
      Loading,
      UserResult
    },
    mounted () {
      const that = this
      api.battle([this.playerOneName, this.playerTwoName]).then((res) => {
        if (res === null) {
          that.loading = false
          that.error = 'Error, checkout your network or the github name'
        } else {
          that.users = res
          that.loading = false
        }
      })
    }
  }
</script>

<style scoped>
  .error {
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: red;
    font-weight: bold;
  }

  .battle-result-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .result-show {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .battle-again {
    width: 200px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000;
    color: #fff;
    border-radius: 5px;
    margin-top: 50px;
  }
</style>
