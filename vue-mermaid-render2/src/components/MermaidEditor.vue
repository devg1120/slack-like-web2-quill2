<script setup lang="ts">

import { ref } from 'vue';
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'

const date = ref(new Date());


</script>

<template>
<splitpanes style="height: 400px">
  <pane min-size="20">1</pane>
  <pane>
    <splitpanes horizontal>
      <pane>2</pane>
      <pane>3</pane>
      <pane>4</pane>
    </splitpanes>
  </pane>
  <pane>5</pane>
</splitpanes>
</template>

<style>
/*
.splitpanes__pane {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Helvetica, Arial, sans-serif;
  color: rgba(255, 255, 255, 0.6);
  font-size: 5em;
}
*/
/*
.splitpanes__splitter {
  background-color: red;
}
*/
/*
.splitpanes__pane {
  color: red;
  border: solid 0.1px blue;
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 12px;
}
*/


.splitpanes__pane {
  box-shadow: 0 0 3px rgba(0, 0, 0, .2) inset;
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
}

em.specs {
  font-size: 0.2em;
  line-height: 1;
  position: absolute;
  color: #bbb;
  bottom: 0.5em;
  left: 0;
  right: 0;
  text-align: center;
}

html, body, #app {height: 100%;margin: 0;}
body {
  font-family: Helvetica, Arial, sans-serif;
  color: rgba(255, 255, 255, 0.6);
  font-size: 5em;
}

</style>
