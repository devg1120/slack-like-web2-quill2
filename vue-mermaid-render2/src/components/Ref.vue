
<script setup>
  import { ref, defineProps, defineModel, watch, watchEffect } from 'vue';
  import TreeMenu from "./tree_menu/TreeMenu.vue"; 
  import Content from "./tree_menu/Content.vue"; 
  //import  MermaidContent from "./tree_menu/MermaidContent.vue"; 
  import  VueMermaidRender  from './VueMermaidRender.vue';
  import{ content_dic }  from "./reference/content.ts"; 
  import{ menu_tree }  from "./reference/menu.ts"; 
  import { CodeEditor } from 'monaco-editor-vue3';
  import VueSplitter from '@rmp135/vue-splitter'

const editorOptions = {
  fontSize: 14,
  minimap: { enabled: false },
  automaticLayout: true,
  /* overviewRulerLanes: 0,*/
    scrollbar: {
        vertical:"hidden",
        horizontal: "hidden",
        handleMouseWheel:true,
    },
    wordWrap: 'on',
};


/*
https://www.npmjs.com/package/@mermaid-js/layout-elk

elk: The default layout, which is elk.layered.
elk.layered: Layered layout
elk.stress: Stress layout
elk.force: Force layout
elk.mrtree: Multi-root tree layout
elk.sporeOverlap: Spore overlap layout
*/

/*
 let content_dic = {

   _00001: "AAAAA",
   _00002: "BBBBB",
   _00003: "CCCCC",
   _00004: "DDDDD",
   _00005: "EEEEE",
   _00006: "FFFFF",

 };
*/
/*
 let menu_tree= [
        {
          label: "root",
          nodes: [
            {
              label: "item1",
              nodes: [
                {
                  label: "item1.1",
		  docid:    "00001",
                },
                {
                  label: "item1.2",
                  nodes: [
                    {
                      label: "item1.2.1",
		      docid:    "00002",
                    },
                  ],
                },
              ],
            },
            {
              label: "item2",
		 docid:    "00003",
            },
          ],
        },
        {
          label: "root2",
          nodes: [
            {
              label: "item1",
              nodes: [
                {
                  label: "item1.1",
		  docid:    "00004",
                },
                {
                  label: "item1.2",
                  nodes: [
                    {
                      label: "item1.2.1",
		       docid:    "00005",
                    },
                  ],
                },
              ],
            },
            {
              label: "item2",
		 docid:    "00006",
            },
          ],
        },
        {
          label: "root3",
          nodes: [
            {
              label: "item1",
              nodes: [
                {
                  label: "item1.1",
		  docid:    "00004",
                },
                {
                  label: "item1.2",
                  nodes: [
                    {
                      label: "item1.2.1",
		       docid:    "00005",
                    },
                  ],
                },
              ],
            },
            {
              label: "item2",
		 docid:    "00006",
            },
          ],
        },
        {
          label: "root4",
          nodes: [
            {
              label: "item1",
              nodes: [
                {
                  label: "item1.1",
		  docid:    "00004",
                },
                {
                  label: "item1.2",
                  nodes: [
                    {
                      label: "item1.2.1",
		       docid:    "00005",
                    },
                  ],
                },
              ],
            },
            {
              label: "item2",
		 docid:    "00006",
            },
          ],
        },
        {
          label: "root5",
          nodes: [
            {
              label: "item1",
              nodes: [
                {
                  label: "item1.1",
		  docid:    "00004",
                },
                {
                  label: "item1.2",
                  nodes: [
                    {
                      label: "item1.2.1",
		       docid:    "00005",
                    },
                  ],
                },
              ],
            },
            {
              label: "item2",
		 docid:    "00006",
            },
          ],
        },
        {
          label: "root6",
          nodes: [
            {
              label: "item1",
              nodes: [
                {
                  label: "item1.1",
		  docid:    "00004",
                },
                {
                  label: "item1.2",
                  nodes: [
                    {
                      label: "item1.2.1",
		       docid:    "00005",
                    },
                  ],
                },
              ],
            },
            {
              label: "item2",
		 docid:    "00006",
            },
          ],
        }
      ];
*/

let select_element = null;

const selectElement = (ele) => {
     console.log("Select:",ele);
     console.log("Select:",ele.getAttribute("docid"));
     let docid = ele.getAttribute("docid");
     let label = ele.getAttribute("label");
     //content.value = "<<<" + docid + ">>>";
     //content.value = "<<<" + content_dic['_' + docid] + ">>>";
     content.value =  content_dic['_' + docid].code ;
     title.value =  label + "  " + docid + "     -- " + content_dic['_' + docid].title + " --";
     set_content.value = true;

     console.log(content.value);

     if (select_element != null) {
           select_element.classList.remove("select");
     }

     select_element = ele;

};


let content = ref(`
flowchart LR
    A[Hard edge] -->|Link text| B(Round edge)
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]

`);

/*
basis
bumpX
bumpY
cardinal
catmullRom
linear
monotoneX
monotoneY
natural
step
stepAfter
StepBefore
*/
const config = ref(
{
  //theme : "dark",
  theme : "forest",
  startOnLoad: true,
  //layout: "tidy-tree",
  //layout: "elk.layered",
  //  layout: elk.stress

  //layout: "elk.mrtree",
  //layout: "elk",
  layout: "dagre",
  //flowchart: { useMaxWidth: false, htmlLabels: true }
  //flowchart: { curve: "linear" }
 }
);


//const content = ref("");
//let config = null;

let set_content = ref(false);
let title = ref("TEST TITLE");

</script>


<template>
  <div class="main">
     <div class="sidemenu">
        <TreeMenu
          v-for="(list, index) in menu_tree"
          :label="list.label"
          :docid="list.docid"
          :nodes="list.nodes"
          :depth="0"
          :key="index"
	  @selectElement="selectElement"
        ></TreeMenu>
     </div>
     <div class="content">
	    <div v-if="set_content">
                 <strong class="title" >{{title}}</strong>
	         <div class="panel">
<vue-splitter>
  <template #left-pane>
	             <VueMermaidRender :config="config"  :content="content" class="mermaid"/>
  </template>
  <template #right-pane>
	             <div class="editor">
		     <!--
                     <CodeEditor
                                  v-model:value="content"
                                  language="mermaid"
                                  theme="vs-dark"
                                  :options="editorOptions"
                      />
		      -->
		           <p class="plain" >{{content}}</p>

	             </div>
  </template>
</vue-splitter>

	         </div>
	    </div>
     </div>
  </div>
</template>
<style scoped>

.content {
   /*display:flex;*/
   height:100vh;
   width:100%;
   overflow: clip;
}
.panel {
   display:flex;
}
.editor {
   /*width:50vw;*/
   height:90vh;
}
.plain {
 width:100%;
 height:100%;
 font-family: monospace;


}
.mermaid {
   /*width:50vw;*/
   height:60vh;
   overflow-y: auto;
}

.title {
   font-size: 20px;

}
.main {
 display:flex;
 height:100%;

}
.sidemenu {
  width: 300px;
  height:100%;
  padding: 8px;
  background-color: #e0e0e0;
  background-color: #f5f5f5;
  overflow: auto;
}

.content {
  padding: 8px;
  width:100%;
  background-color: #e0e0e0;
  background-color:#f8f8ff;
  overflow: auto;
}

</style>
