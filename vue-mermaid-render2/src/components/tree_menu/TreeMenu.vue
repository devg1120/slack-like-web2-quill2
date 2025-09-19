
<!--

<template>
  <BaseTree class="mtl-tree" v-model="treeData" treeLine>
    <template #default="{ node, stat }">
    <div    @click="select" style="width:100%">
      <OpenIcon
        v-if="stat.children.length"
        :open="stat.open"
        class="mtl-mr"
        @click.native="stat.open = !stat.open"
      />
      <span class="mtl-ml"
	      >{{ node.text }}</span>
    </div>
    </template>
  </BaseTree>
</template>
-->

<template>
  <div class="tree-menu" :docid="props.docid" :label="props.label">
   <div class="item" @click="toggleChildren" >
     <div v-if="props.nodes">
        <div v-if="showChildren">
          <MinusIcon class="icon" />
        </div>
        <div v-else>
          <PlusIcon class="icon" />
        </div>
     
     </div>
     <div v-else>
           <DocumentIcon class="icon"/>
     </div>

     <div  class="label" >{{props.label }}</div>

   </div>
    <tree-menu
      v-show="showChildren"
      v-for="(node, index) in props.nodes"
      :nodes="node.nodes"
      :label="node.label"
      :docid="node.docid"
      :depth="props.depth + 1"
      :key="index"
       @selectElement="selectElement"
    >
    </tree-menu>
  </div>
</template>

<script>
export default {
  name: 'tree-menu',
}
</script>

<script setup>

import { ref, defineProps, defineModel  } from 'vue';
import { CalendarIcon } from './@heroicons/vue/24/outline'
import { MinusIcon } from './@heroicons/vue/24/outline'
import { PlusIcon } from './@heroicons/vue/24/outline'
import { DocumentIcon } from './@heroicons/vue/24/outline'


const props = defineProps(["label", "docid", "nodes", "depth", "select_element"]);

//const select_element = defineModel()

const emit = defineEmits(['selectElement'])

//let select_element = null;
let showChildren = ref(false);

function   toggleChildren(e) {
     showChildren.value  = !showChildren.value;
     if ( !props.nodes ) {
/*
	 console.log("class:",e.target.parentElement.classList) ;
           e.target.parentElement.classList.add("select");
	   emit('selectElement', e.target.parentElement);
*/
	 if(e.target.parentElement.classList.contains == "item") {
           e.target.parentElement.classList.add("select");
	   emit('selectElement', e.target.parentElement);
	 } else {
           e.target.parentElement.parentElement.classList.add("select");
	   emit('selectElement', e.target.parentElement.parentElement);
	 }

/*
	 console.log("class:",e.target.parentElement.classList) ;
	 if(e.target.parentElement.classList.contains == "item") {
           e.target.parentElement.classList.add("select");
	   emit('selectElement', e.target.parentElement);
	 }
	 if(e.target.parentElement.classList.contains == "icon") {
           e.target.parentElement.classList.add("select");
	   emit('selectElement', e.target.parentElement);
	 }
	 */
     }
}

const selectElement = (ele) => {
     //console.log("selectElement");
     //console.log(ele);
     //console.log(select_element);
     emit('selectElement', ele);

};

/*
export default {
  props: ["label", "nodes", "depth"],
  data() {
    return { showChildren: false };
  },
  name: "tree-menu",
  methods: {
    toggleChildren() {
      this.showChildren = !this.showChildren;
    },
  },
};
*/

/*
  import  BaseTree   from './BaseTree.vue'
  import  OpenIcon   from './OpenIcon.vue'
  import '@he-tree/vue/style/default.css'
  import '@he-tree/vue/style/material-design.css'

  let select_element = null;

  function select(e) {
     console.log("selet", e.target);

     if (select_element != null ) {
         select_element.classList.remove("select");
     }
     e.target.classList.add("select");
     select_element = e.target;

  }
   const treeData= [
          {
            text: 'Projects',
            children: [
              {
                text: 'Frontend',
                children: [
                  {
                    text: 'Vue',
                    children: [
                      {
                        text: 'Nuxt',
                      },
                    ],
                  },
                  {
                    text: 'React',
                    children: [
                      {
                        text: 'Next',
                      },
                    ],
                  },
                  {
                    text: 'Angular',
                  },
                ],
              },
              {
                text: 'Backend',
              },
            ],
          },
          { text: 'Photos' },
          { text: 'Videos' },
        ];
*/

  
</script>
<style scoped>
.select {
   background-color: #cce5ff;
}
.tree-menu {
 margin-left: calc(16px * v-bind(depth));
}

.icon {
 width : 22px;
 height : 22px;
 cursor: pointer;

}

.item {
  display: flex;
  padding: 3px 0px;
}
.label {
  margin-left: 5px;
  padding: 0px 5px;
  width: 100%;
}
</style>
