<template>
  <div>
    <ul class="lang">
      <li v-for="lang in languages" :key="lang" :class="{ 'lang-active': lang === selectedLang }" @click="selectedLang = lang">{{ lang }}</li>
    </ul>
    <loading v-if="!repos"></loading>
    <ul v-else class="repos">
      <li v-for="(repo,index) in repos" :key="repo.id">
        <div class="repo-rank">#{{ index + 1 }}</div>
        <img class="repo-avatar" :src="repo.owner.avatar_url" :alt="repo.full_name"/>
        <a class="repo-name" :href="repo.html_url">{{ repo.name }}</a>
        <a :href="repo.owner.html_url" class="repo-author">@{{ repo.owner.login }}</a>
        <div class="repo-stars">{{ repo.stargazers_count }} stars</div>
      </li>
    </ul>
  </div>
</template>

<script>
  import Loading from './Loading.vue'
  import api from '../utils/api'
  export default {
    data () {
      return {
        languages: ['All', 'PHP', 'JavaScript', 'Python', 'Java', 'C', 'Go', 'Ruby', 'CSS'],
        selectedLang: 'All',
        repos: null
      }
    },
    components: {
      Loading
    },
    watch: {
      selectedLang () {
        this.repos = null
        const that = this
        api.fetchPopularReps(this.selectedLang).then((repos) => {
          that.repos = repos
        })
      }
    }
  }
</script>

<style scoped>
  .lang {
    list-style: none;
    display: flex;
    justify-content: center;
    padding: 0;
    margin-top: 25px;
  }

  .lang li {
    margin: 15px;
    font-weight: bold;
    cursor: pointer;
    font-size: 110%;
  }

  .lang li:hover {
    color: #d0021b;
  }

  .lang-active {
    color: #d0021b;
  }

  .repos {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    list-style: none;
    padding: 20px 50px;
  }

  .repos:after {
    content: "";
    flex: auto;
  }

  .repos li {
    margin: 30px 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    overflow: hidden;
  }

  .repo-rank {
    font-size: 18px;
    font-weight: bold;
  }

  .repo-avatar {
    width: 160px;
    border-radius: 50%;
    font-weight: bold;
    margin: 8px 0;
  }

  .repo-name {
    text-decoration: none;
    color: #000;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }

  .repo-author {
    margin: 7px 0;
  }
</style>
