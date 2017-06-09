import axios from 'axios'

const id = ''
const secret = ''
const params = `client_id=${id}&client_secret=${secret}`

function getProfile (username) {
  return axios.get(`https://api.github.com/users/${username}?${params}`).then(user => {
    return user.data
  })
}

function getRepos (username) {
  return axios.get(`https://api.github.com/users/${username}/repos?${params}&per_page=100`)
}

function getStarCount (repos) {
  return repos.data.reduce((count, repo) => {
    return count + repo.stargazers_count
  }, 0)
}

function calculateScore (profile, repos) {
  let followers = profile.followers
  let totalStars = getStarCount(repos)
  return followers * 3 + totalStars
}

function handleError (error) {
  console.warn(error)
  return null
}

function getUserData (player) {
  return axios.all([
    getProfile(player),
    getRepos(player)
  ]).then(data => {
    let profile = data[0]
    let repos = data[1]
    return {
      profile,
      score: calculateScore(profile, repos)
    }
  })
}

function sortPlayers (players) {
  return players.sort((a, b) => {
    return b.score - a.score
  })
}

export default {
  fetchPopularReps (language) {
    let encodeURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:' + language + '&sort=stars&order=desc&type=Repositories')
    return axios.get(encodeURI).then((response) => {
      return response.data.items
    })
  },
  battle (players) {
    return axios.all(players.map(getUserData))
        .then(sortPlayers)
        .catch(handleError)
  }
}

