<template>
  <div class="battle-container">
    <div class="battle-users">
      <player-enter v-if="!players.playerOneName"
                    playerId="playerOne"
                    playerLabel="player one"
                    @onSubmit="updateUserInfo">
      </player-enter>
      <player-show v-else @onReset="resetUserInfo"
                   playerId="playerOne"
                   :username="players.playerOneName"
                   :avatar="players.playerOneAvatar">
      </player-show>

      <player-enter v-if="!players.playerTwoName"
                    playerId="playerTwo"
                    playerLabel="player two"
                    @onSubmit="updateUserInfo">
      </player-enter>
      <player-show v-else
                   @onReset="resetUserInfo"
                   playerId="playerTwo"
                   :username="players.playerTwoName"
                   :avatar="players.playerTwoAvatar">
      </player-show>
    </div>
    <router-link v-if="players.playerOneName && players.playerTwoName"
                 :to="'/battle/result?playerOneName=' + players.playerOneName + '&playerTwoName=' + players.playerTwoName"
                 class="battle-btn">
      Battle
    </router-link>
  </div>
</template>

<script>
  import Loading from './Loading.vue'
  import PlayerEnter from './battle/PlayerEnter.vue'
  import PlayerShow from './battle/PlayerShow.vue'

  export default {
    name: 'Battle',
    data () {
      return {
        players: {
          playerOneName: '',
          playerOneAvatar: null,
          playerTwoName: '',
          playerTwoAvatar: null
        }
      }
    },
    components: {
      Loading,
      PlayerEnter,
      PlayerShow
    },
    methods: {
      updateUserInfo (id, name) {
        this.players[id + 'Name'] = name
        this.players[id + 'Avatar'] = `https://github.com/${name}.png?size=200`
      },
      resetUserInfo (id) {
        this.players[id + 'Name'] = ''
        this.players[id + 'Avatar'] = null
      }
    }
  }
</script>

<style>
  .battle-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .battle-users {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .battle-btn {
    width: 200px;
    height: 40px;
    background: #000;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
  }
</style>
