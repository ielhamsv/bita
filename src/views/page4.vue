<script setup>
const music = `${import.meta.env.BASE_URL}music/anotherlove.mp3`
</script>

<template>
  <section class="background">
    <div class="container pt-5">
      <div class="row justify-content-center align-items-center pt-5 text-center">
        <div class="col-8 maincard">
          <h1>زادروزت مبارک</h1>
          <h3> بابت بزرگترین درسای زندگیم ازت ممنونم و این یدونه تبریکم از قبل بهت بدهکار بودم کم و کاستش رو ببخش</h3>
          <br>
          <audio controls :src=music >
            مرورگر شما از پخش صدا پشتیبانی نمی‌کند.
          </audio>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>