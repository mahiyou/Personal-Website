<template>
  <v-main>
    <router-view class="base" v-slot="{ Component }">
      <transition name="slide" mode="out-in">
        <component :is="Component" :key="$route.path" />
      </transition>
    </router-view>
  </v-main>
</template>

<script lang="ts" setup>
//
</script>
<style>
.base {
  background-color: #34353a;
  height: 100%;
  color: white;
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.9s, transform 0.9s;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-10%);
}
</style>