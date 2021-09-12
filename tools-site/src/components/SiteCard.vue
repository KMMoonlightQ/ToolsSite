<script setup lang="ts">
const props = defineProps({
  site: Object,
})

const jumpToTarget = () => {
  window.open(props.site.target, '_blank')
}
</script>

<template>
  <n-card class="card-container" hoverable @click="jumpToTarget">
    <div class="title-area">
      <n-avatar round size="medium" :src="`${site.target}favicon.ico`" />
      <div class="title-wrapper">
        <div class="title-font">
          {{ site.label }}
        </div>
        <div id="underline" />
      </div>
    </div>
    <div class="content-wrapper">
      {{ site.description }}
    </div>
  </n-card>
</template>

<style scoped>
.n-card {
  max-width: 380px;
  height: 200px;
  margin: 10px;
  cursor: pointer;
}

.title-area {
  display: flex;
  align-items: center;
}

.title-wrapper {
  display: flex;
  flex-direction: column;
}

#underline {
  height: 2px;
  background-color: darkgray;
  width: 30px;
  margin-left: 20px;
  transition: 0.6s ease-in-out;
}

.title-font {
  font-size: 20px;
  margin-left: 20px;
}

.content-wrapper {
  margin-top: 20px;
}

.card-container:hover #underline {
  width: 220px;
}
</style>
