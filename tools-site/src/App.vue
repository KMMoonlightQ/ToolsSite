<script setup lang="ts">
import { SITE_LIST } from './site-config'
import CategoryArea from './components/CategoryArea.vue'
</script>

<template>
  <n-tabs
    type="line"
    default-value="efficient_office"
    justify-content="space-evenly"
  >
    <n-tab-pane
      v-for="item in SITE_LIST"
      :key="item.value"
      :name="item.value"
      :tab="item.label"
    >
      <category-area
        v-for="cell in item.category_setting"
        :key="cell.value"
        :category="cell"
      />
    </n-tab-pane>
  </n-tabs>
</template>

<style></style>
