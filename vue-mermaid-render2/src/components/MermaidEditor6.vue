
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
import  Ref  from './Ref.vue'

//import initEditor from 'monaco-mermaid';
//initEditor(monacoEditor); 

import { onErrorCaptured } from "vue";

onErrorCaptured((error, insttance, info) => {
  // error: エラーのインスタンス
  // instance: ソースコンポーネント
  // info: なんかの情報

  // errorの情報をもとにハンドリング
  console.log("エラーが発生しました。")
});

const lorumipsum = GenLorum()

const config_json = ref(`
{ 
  "theme" : "forest",
  "startOnLoad" : false, 
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
const code_ = ref(`
sequenceDiagram
        Site->>mermaid: initialize
        Site->>mermaid: content loaded
        mermaid->>mermaidAPI: init
`)


const code2 = ref(`
%%{
 init: { 'layout':'elk',
          'theme': 'forest' 
       } 
}%%

flowchart TB
  A[Start] --> B{Decision}
  B -->|Yes| C[Continue]
  B -->|No| D[Stop]



`)

const code = ref(`---
title: Hello Title
config:
  theme: forest
---
flowchart
	Hello --> World
`)

const editorOptions = {
  fontSize: 14,
  minimap: { enabled: false },
  automaticLayout: true
};


function handleError(error) {
 console.log("Error:", error);
}
function handleLoading() {
 console.log("Loading:" );
}
function handleReady() {
 console.log("Redy:" );
}
function err_mermaid(msg) {
 console.log("Err Mermaid:", msg );
}
</script>



<template>


  <base-demo  initial-Percent=40
  >
    <template #left-pane>
    
       <VueMermaidRender :config="config" :content="code" @err-mermaid="err_mermaid"/>
	   
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
                         language="mermaid"
                         theme="vs-white"
                         :options="editorOptions"
                         @error="handleError"
			 @ready="handleReady"
                         @loading="handleLoading"

                       >

                       </CodeEditor>

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
<!--
          <div>{{lorumipsum}}</div>
-->
	  <Ref />
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

