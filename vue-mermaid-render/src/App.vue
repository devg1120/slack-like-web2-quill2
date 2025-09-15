<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'

import { ref } from 'vue'

import { VueMermaidRender } from 'vue-mermaid-render'

/*
https://mermaid.js.org/syntax/flowchart.html
*/

const config = 
{
  theme: "forest"
  //theme: "dark"
};

const content1 = `

flowchart
	Hello --> World


`

const content2 = ref(`
graph TD;
  A-->B;
  A-->C;
  B-->D;
  C-->D;
`)


const content3 = ref(`
%%{init:{'theme':'forest'}}%%

sequenceDiagram
	Site->>mermaid: initialize
	Site->>mermaid: content loaded
	mermaid->>mermaidAPI: init
`)

/*
setTimeout(() => {
  content.value = `
  sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!
`
}, 2000)
*/

</script>

<template>
<!--
  <HelloWorld msg="Vite + Vue" />
-->
  <VueMermaidRender :config="config" :content="content1" />
  <VueMermaidRender :config="config" :content="content2" />
  <VueMermaidRender :config="config" :content="content3" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
