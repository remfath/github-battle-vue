<template>
  <div class="user-result">
    <h1>{{ label }}</h1>
    <h2 class="user-score">Score: {{ data.score }}</h2>
    <img class="user-avatar" :src="avatar" :alt="data.profile.name"/>
    <h3 class="user-name"> {{ data.profile.name }}</h3>
    <div class="user-detail">
      <p>Public Repos: {{ data.profile.public_repos }}</p>
      <p>Followers: {{ data.profile.followers }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    props: ['data', 'label'],
    computed: {
      avatar () {
        return `https://github.com/${this.data.profile.login}.png?size=200`
      }
    }
  }
</script>

<style scoped>
  .user-result {
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 25px;
  }

  .user-avatar {
    border-radius: 50%;
    width: 250px;
  }

  .user-detail {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 30px;
  }

  .user-detail p {
    margin: 2px 0;
  }
</style>
