

<template>
	<p>{{content}}</p>
</template>


<script setup>

import { ref, defineProps, defineModel  } from 'vue';
const content = defineModel()


</script>
<style scoped>
</style>
