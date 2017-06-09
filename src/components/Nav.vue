<template>
  <ul class="nav">
    <li>
      <router-link exact to="/">Home</router-link>
    </li>
    <li>
      <router-link to="/battle">Battle</router-link>
    </li>
    <li>
      <router-link to="/popular">Popular</router-link>
    </li>
  </ul>
</template>

<style>
  ul {
    list-style: none;
    padding: 0;
    display: flex;
  }

  a {
    text-decoration: none;
    color: #d0021b;
  }

  .nav {
    font-size: 120%;
    margin: 15px;
  }

  .router-link-active {
    font-weight: bold;
  }

  .nav li {
    margin-right: 20px;
  }
</style>
