

<template>
	<!--
 <p>{{mermaidString}}</p>
	-->
 <pre ref="el" class="mermaid" v-html="mermaidString" />

</template>


<script setup lang="ts">
import { ref, watchEffect,  defineProps, defineModel } from 'vue'
import mermaid from 'mermaid'
import type { MermaidConfig } from 'mermaid'

const mermaidString = defineModel()

const el = ref()

// init mermaid
watchEffect(() => {
  if (!el.value)
    return

  if (props.config)
    mermaid.initialize({ startOnLoad: false, ...props.config })
  else
    mermaid.initialize({ startOnLoad: false })


})


</script>
<style scoped>
</style>
