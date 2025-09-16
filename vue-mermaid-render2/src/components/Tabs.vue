<script setup lang="ts">

import { ref , useSlots, computed } from 'vue'

const active: Ref<number> = ref(0)
const slots = useSlots().default?.()
const transform = computed(() =>
  `translate3d(-${active.value * 100}%, 0px, 0px)`,
)
</script>

<template>
  <div class="overflow-hidden">
    <span
      v-for="(slot, index) in slots" :key="slot.props?.title"
      @click="active = index"
    >
      {{ slot.props?.title }}
    </span>
    <div
      class="flex transition-transform [&>*]:w-full [&>*]:shrink-0"
      :style="{ transform }"
    >
      <slot />
    </div>
  </div>
</template>
