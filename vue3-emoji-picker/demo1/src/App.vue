<script setup>
import HelloWorld from './components/HelloWorld.vue'
import EmojiPicker from 'vue3-emoji-picker'
import 'vue3-emoji-picker/css'

function onSelectEmoji(emoji) {
  console.log(emoji)

}

</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <EmojiPicker :native="true" :display-recent="true" @select="onSelectEmoji" 
  :additional-groups="{
    my_custom_group: [
      { n: ['ok'], u: '1f197' },
      { n: ['NG'], u: '1f196' },
      { n: ['ok'], u: '1f44C' },
      { n: ['good'], u: '1f44D' },
      { n: ['check'], u: '2705' },
      { n: ['cross'], u: '274E' },
      { n: ['maru'],  u: '2B55' },
      { n: ['batu'],  u: '274C' },
    ],
  }"
  :group-names="{ my_custom_group: 'Frequently used' }"


  />

</template>

<style scoped>
</style>
