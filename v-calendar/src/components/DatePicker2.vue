<script setup lang="ts">

import { ref } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
//import { CalendarIcon } from './@heroicons/vue/24/outline'

const date = ref(new Date());

const handleDate = (modelData) => {
  date.value = modelData;
  console.log(modelData);
  // do something else with the data
}

const dayNames = [
"日", 
"月", 
"火", 
"水", 
"木", 
"金", 
"土", 
];

const format = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const week_index = date.getDay();
  const week = dayNames[week_index];
  return `${year}/${month}/${day} (${week})`;
  
}

</script>

<template>
  <VueDatePicker 
     v-model="date"  
     auto-apply
     :enable-time-picker="false" 
     :format="format"  
     @update:model-value="handleDate"
  >
        <template #trigger>
            <p class="clickable-text">DATE</p>

        </template>
  </VueDatePicker>
</template>

