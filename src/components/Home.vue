<template>
  <div class="home">
    <h1>Go to github battle</h1>
    <router-link to="/battle" class="battle-link">Battle</router-link>
  </div>
</template>

<style>
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .home h1 {
    margin-top: 50px;
  }

  .home .battle-link {
    width: 200px;
    height: 50px;
    background: #222;
    color: #fff;
    font-size: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    border-radius: 5px;
  }

  .battle-link:hover {
    background: #000;
  }
</style>
