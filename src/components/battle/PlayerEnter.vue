<template>
  <div class="player">
    <h1 class="player-name">
      {{ playerLabel.toUpperCase() }}
    </h1>
    <input class="player-input" type="text"
           placeholder="Enter github name"
           autoComplete="off"
           v-model="username"
           onChange/>
    <button class="player-submit" @click="submit" :disabled="!this.username">
      Submit
    </button>
  </div>
</template>

<script>
  export default {
    props: ['playerId', 'playerLabel'],
    data () {
      return {
        username: ''
      }
    },
    methods: {
      submit () {
        this.$emit('onSubmit', this.playerId, this.username)
      }
    }
  }
</script>

<style scoped>
  .player {
    height: 300px;
    width: 400px;
    margin: 20px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }

  .player-input {
    width: 90%;
    height: 35px;
    line-height: 40px;
    padding: 7px;
    font-size: 17px;
    border-radius: 3px;
    box-shadow: none;
  }

  .player-submit {
    width: 150px;
    height: 40px;
    background: #222;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    cursor: pointer;
  }

  .player-submit:hover {
    background: #000;
  }
</style>
