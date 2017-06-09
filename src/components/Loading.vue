<template>
  <div class="loading">
    <p>{{ loadingText }}</p>
  </div>
</template>

<script>
  export default {
    name: 'Loading',
    props: ['text'],
    data () {
      return {
        interval: '',
        loadingText: this.text ? this.text : 'Loading'
      }
    },
    mounted () {
      const stopper = this.loadingText + '...'
      const that = this
      const originalText = this.loadingText
      this.interval = window.setInterval(() => {
        if (this.loadingText === stopper) {
          that.loadingText = originalText
        } else {
          that.loadingText = that.loadingText + '.'
        }
      }, 300)
    },
    destroyed () {
      window.clearInterval(this.interval)
    }
  }
</script>

<style>
  .loading {
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: darkblue;
    font-weight: bold;
    font-size: 20px;
  }
</style>
