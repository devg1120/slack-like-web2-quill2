<script setup lang="ts">

import { defineEmits, defineProps } from 'vue'

import EmojiPicker from 'vue3-emoji-picker'
import 'vue3-emoji-picker/css'

const emit = defineEmits(['selectEmoji']);

const selectEmoji = (emoji) => {
  console.log("Emoji", emoji.i);
  emit("selectEmoji", emoji);
  // emit
}

let top = "-260px";
let left = "20px";
let height = "320px";
let width = "300px";

const props = defineProps({
  top: {
    type: String,
    required: true
  },
  left: {
    type: String,
    required: true
  },
  height: {
    type: String,
    default: "320px"
  },
  width: {
    type: String,
    default: "300px"
  },
  position: {
    type: String,
    default: "absolute"
  },
});
</script>

<template>

<EmojiPicker 
  @select="selectEmoji" 
  :native="true" 
  :display-recent="true" 
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

.v3-emoji-picker  {

/*
    position: absolute;
    */
    position: v-bind(props.position);
    /*float: left;*/

    
    /*
    position: relative;
    */
    z-index: 999;
    /*
    top:-260px;
    left:20px;
    height: 320px;
    width: 280px;
    */
    /*
    top:v-bind(top);
    left:v-bind(left);
    height:v-bind(height);
    width:v-bind(width);
    */
    top:v-bind(props.top);
    left:v-bind(props.left);
    height:v-bind(props.height);
    width:v-bind(props.width);
    /*
    box-shadow: 0 2px 10px #0003;
    box-shadow: 0 2px 20px #004c99;
    */
    box-shadow: 4px 4px #0003;

    border-radius: 0px;
    border: 1px dotted #0003;
    margin: 0 auto;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    text-align: left;
}

/*
.modal-container {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
  overflow: auto;
  opacity: 0;
  visibility: hidden;
  transition: .3s ease-out;
  z-index: 9;
}
 
.modal-container::before {
  content: "";
  display: inline-block;
  vertical-align: middle;
  height: 100%;
}
 
.modal-container.active {
  opacity: 1;
  visibility: visible;
}
*/
</style>
