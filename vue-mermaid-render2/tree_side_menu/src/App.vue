
<script setup>
  import { ref, defineProps, defineModel, watch, watchEffect } from 'vue';
  import TreeMenu from "./components/TreeMenu.vue"; 
  import Content from "./components/Content.vue"; 

 let content_dic = {

   _00001: "AAAAA",
   _00002: "BBBBB",
   _00003: "CCCCC",
   _00004: "DDDDD",
   _00005: "EEEEE",
   _00006: "FFFFF",

 };

 let tree= [
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
        }
      ];

let select_element = null;

const selectElement = (ele) => {
     console.log("Select:",ele);
     console.log("Select:",ele.getAttribute("docid"));
     let docid = ele.getAttribute("docid");
     //content.value = "<<<" + docid + ">>>";
     content.value = "<<<" + content_dic['_' + docid] + ">>>";

     if (select_element != null) {
           select_element.classList.remove("select");
     }

     select_element = ele;

};

let content = ref("CONTENT A");

</script>


<template>
  <div class="main">
     <div class="sidemenu">
        <TreeMenu
          v-for="(list, index) in tree"
          :label="list.label"
          :docid="list.docid"
          :nodes="list.nodes"
          :depth="0"
          :key="index"
	  @selectElement="selectElement"
        ></TreeMenu>
     </div>
     <div class="content">
            <Content v-model="content"/>
     </div>
  </div>
</template>
<style scoped>

.main {
 display:flex;

}
.sidemenu {
  width: 300px;
  height:90vh;
  padding: 8px;
  background-color: #e0e0e0;
  background-color: #f5f5f5;
}

.content {
  padding: 8px;
  width:100%;
  background-color: #e0e0e0;
}

</style>
