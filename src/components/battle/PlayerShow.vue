<template>
  <div class="player-info">
    <img class="player-avatar" :src="avatar" :alt="username"/>
    <div class="player-name">@{{ username }}</div>
    <div class="player-reset" @click="reset">reset</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    props: ['avatar', 'username', 'playerId'],
    methods: {
      reset () {
        this.$emit('onReset', this.playerId)
      }
    }
  }
</script>

<style scoped>
  .player-info {
    height: 300px;
    width: 400px;
    margin: 20px 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .player-avatar {
    border-radius: 50%;
    width: 200px;
    height: 200px;
  }

  .player-name {
    margin: 25px 0;
  }

  .player-reset {
    color: red;
    cursor: pointer;
  }
</style>
