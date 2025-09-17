<script setup lang="ts">

import { ref } from 'vue'

//import { VueMermaidRender } from 'vue-mermaid-render'
//import MermaidEditor from  "./components/MermaidEditor2.vue"
//import MermaidEditor from  "./components/MermaidEditor5.vue"
import MermaidEditor from  "./components/MermaidEditor6.vue"

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
<!--
  <VueMermaidRender :config="config" :content="content1" />
  <VueMermaidRender :config="config" :content="content2" />
  <VueMermaidRender :config="config" :content="content3" />
  -->
  <MermaidEditor />
</template>

<style scoped>
</style>
