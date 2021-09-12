<script setup lang="ts">
import SiteCard from './SiteCard.vue'

//定义一个上面是标题 下面是卡片区域的组件
const props = defineProps({
  category: Object,
})
</script>

<template>
  <div class="container">
    <div class="title">
      {{ category.label }}
    </div>

    <div class="category-flow">
      <site-card
        v-for="item in category.site_setting"
        :key="item.label"
        :site="item"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: 20px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.category-flow {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
}
</style>
