
<script setup lang="ts">

import { ref, computed } from 'vue';
//import { VueMermaidRender } from 'vue-mermaid-render';
import  VueMermaidRender  from './VueMermaidRender.vue';

import { CodeEditor } from 'monaco-editor-vue3';
// Import the CSS styles
import 'monaco-editor-vue3/dist/style.css';
import { Tabs, Tab } from 'super-vue3-tabs'

import VueSplitter from '@rmp135/vue-splitter'

import BaseDemo from './BaseDemo.vue'
import { GenLorum } from './Helpers'

const lorumipsum = GenLorum()

const config_json = ref(`
{ 
  "theme" : "dark",
  "startOnLoad" : true, 
  "flowchart" : { "useMaxWidth" : false, "htmlLabels" : true }
}

`);

/*
const config = ref(
{ 
  //theme : "dark",
  theme : "forest",
  startOnLoad: true, 
  flowchart: { useMaxWidth: false, htmlLabels: true }
 }
);
*/

const config = computed(() => {
  return  JSON.parse(config_json.value);
})


//%%{init:{'theme':'forest'}}%%
const code = ref(`
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
        <template #top-pane  >
            <Tabs  >
              <Tab value="code"  class="code " style="height:100vh;" >
                       <CodeEditor
                         v-model:value="code"
                         language="javascript"
                         theme="vs-white"
                         :options="editorOptions"
                       />
              </Tab>
              <Tab value="config" class="config"  style="height:100vh;" >
                       <CodeEditor
                         v-model:value="config_json"
                         language="javascript"
                         theme="vs-white"
                         :options="editorOptions"
                       />
              </Tab>
              <Tab value="setting">
                <p>This is the content of Tab 3</p>
              </Tab>
            </Tabs>
	</template>
        <template #bottom-pane>
          <div>{{lorumipsum}}</div>
        </template>
      </vue-splitter>
    </template>
  </base-demo>
</template>

<style>
.vue-splitter .splitter-pane {
  overflow-y:hidden;
  overflow-x:hidden;
}
</style>

