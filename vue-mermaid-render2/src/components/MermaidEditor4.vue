
<script setup lang="ts">

import { ref } from 'vue';
import { VueMermaidRender } from 'vue-mermaid-render';
import { CodeEditor } from 'monaco-editor-vue3';
// Import the CSS styles
import 'monaco-editor-vue3/dist/style.css';
//import {Tabs, Tab} from 'vue3-tabs-component';


import VueSplitter from '@rmp135/vue-splitter'

import BaseDemo from './BaseDemo.vue'
import { GenLorum } from './Helpers'

const lorumipsum = GenLorum()

const config = ref(`
{
  theme: "forest"
  //theme: "dark"
};
`);

const code = ref(`
%%{init:{'theme':'forest'}}%%

sequenceDiagram
        Site->>mermaid: initialize
        Site->>mermaid: content loaded
        mermaid->>mermaidAPI: init
`)

const editorOptions = {
  fontSize: 14,
  minimap: { enabled: false },
  automaticLayout: true
};

</script>



<template>


  <base-demo  
  >
    <template #left-pane>
       <VueMermaidRender :config="config" :content="code" />
    </template>
    <template #right-pane>
      <vue-splitter
        class="container"
        is-horizontal
      >
        <template #top-pane>
          <div style="height: 100%;">
             <CodeEditor
               v-model:value="code"
               language="javascript"
               theme="vs-white"
               :options="editorOptions"
             />
	     </div>
	</template>
        <template #bottom-pane>
          <div>{{lorumipsum}}</div>
        </template>
      </vue-splitter>
    </template>
  </base-demo>
</template>

<style>
</style>

