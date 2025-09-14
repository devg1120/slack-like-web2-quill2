
<script setup lang="ts">
import { defineExpose, ref, computed, useTemplateRef, onMounted } from 'vue'

import  Quill  from 'quill'                   
import  QuillEditor  from './QuillEditor.vue'

import EmojiPicker from 'vue3-emoji-picker'
import 'vue3-emoji-picker/css'
import EmojiSelect from './EmojiSelect.vue'

//import  quillEmoji from "quill-emoji";
//import 'quill-emoji/dist/quill-emoji.css';

//Quill.register("modules/emoji", quillEmoji);


let fonts = Quill.import("attributors/style/font");
fonts.whitelist = ["noto-sans-jp", "sans-serif", "serif", "monospace", "arial"];
Quill.register(fonts, true);

    const model = defineModel()

    const qeditor  = useTemplateRef('qeditor')


    //受け取るデータの型を定義
    interface Props {
      placeholder?: string|null;
    }
    //withDefaults: propsのデフォルト値を定義
    const props = withDefaults(defineProps<Props>(), {
      placeholder: null
    });

const showCommentEmojiPicker = ref(false)

let S = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let N = 8;
let ID = Array.from(crypto.getRandomValues(new Uint8Array(N))).map((n)=>S[n%S.length]).join('');
console.log(ID);

let editor_id = "q-editor-" + ID;
let editor_sid = "#" + editor_id;
let toolbar_id = "my-toolbar-" + ID;
let toolbar_sid = "#" + toolbar_id;




//const qeditor  = ref();
let isFocus = ref(false);

const handleMouseEnter = () => {
  console.log('focus in', editor_id);
  isFocus.value = true;
  console.log(qeditor.value.getToolbar());
  let ele = qeditor.value.getToolbar();
  ele.style.display = "inline-block"
};
const handleMouseLeave = () => {
  console.log('focus out', editor_id);
  isFocus.value = false;
  let ele = qeditor.value.getToolbar();
  ele.style.display = "none"
};

//const classObject = computed(() => (  isFocus ? "toolbar-show" : "toolbar-hidden"));
const classObject = computed(() => {
   if (isFocus.value) {
      return "toolbar-show" ;
   } else {
      return "toolbar-hidden";
   }
});

let toolbar_option_all =  [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],
  ['link', 'image', 'video', 'formula'],

  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  [{ 'direction': 'rtl' }],                         // text direction

  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
  [{ 'align': [] }],

  ['clean']
];

let toolbar_option =  [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],
 // ['link', 'image', 'video', 'formula'],
  ['link', 'image', 'video' ],

 // [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
 // [{ 'direction': 'rtl' }],                         // text direction

  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
 // [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  //[{ 'font': [] }],
  [{ 'font': fonts.whitelist }],
  [{ 'align': [] }],

  ['clean']
];

let options = {
  //debug: 'info',
  debug: 'none',
  modules: {
    //toolbar: ['bold', 'italic', 'underline']
    toolbar: toolbar_option,
  },
  
  //placeholder: 'Compose an epic...',
  placeholder: props.placeholder,
  readOnly: false,
  theme: 'snow'
}
 
let options2 = {
          theme: 'snow',
          modules: {
            "emoji-toolbar": true,
            "emoji-shortname": true,
	    "emoji-textarea": true,

            toolbar: {
              container: [
	      ['emoji'],
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],
 // ['link', 'image', 'video', 'formula'],
  ['link', 'image', 'video' ],

 // [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
 // [{ 'direction': 'rtl' }],                         // text direction

  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
 // [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
  [{ 'align': [] }],

  ['clean']

              ],
  handlers: {'emoji': function() { console.log("emoji")}}

            },
	    }
    };




function call() {
  console.log("conponent call...OK");

}
function content_reset() {
  console.log("content_reset call...OK");
  //let qe = quilleditor.getEditor();
  qeditor.value.setHTML("");

}
const comment_insertEmoji2 = (emoji) => {
  // Get the emoji from the event detail
  console.log("Emoji", emoji);
  //console.log("comment_rte", comment_rte.value);
  //comment_rte.value.insert_emoji(emoji);
  insert_emoji(emoji.i);

  showCommentEmojiPicker.value = false
}

const comment_insertEmoji = (event: CustomEvent) => {
  // Get the emoji from the event detail
  const emoji = event.detail.unicode
  console.log("Emoji", emoji);
  //console.log("comment_rte", comment_rte.value);
  //comment_rte.value.insert_emoji(emoji);
  insert_emoji(emoji);

  showCommentEmojiPicker.value = false
}

function insert_emoji(emoji) {
  console.log("insert emoji call...OK",emoji);
  //let qe = qeditor.value.getEditor();
  //qeditor.value.setHTML("");
  let quill = qeditor.value.getQuill()
  let selection = quill.getSelection( );
  //quill.insertText(range.anchorOffset,emoji);
  if (selection != null) {
      quill.insertText(selection.index,emoji);
  } else {
      quill.insertText(0,emoji);
  }

}
/*
    const call = () => {
      console.log("conponent call...OK");
    }
*/

defineExpose({
    call,
    content_reset,
    insert_emoji,
});

</script>

<template>
	<!--
  <QuillEditor theme="snow"   toolbar="full" />
        //v-model="props.model"
	content="ptops.model"
	v-model:content="model"

	-->

  <QuillEditor 
	ref="qeditor"
	:options="options"
        v-model:modelValue="model"
	contentType="html"
	/>
<!--
              <emoji-picker v-if="showCommentEmojiPicker" class="comment-emoji-picker" @emoji-click="comment_insertEmoji"></emoji-picker>
-->
<!--
    <EmojiSelect v-if="showCommentEmojiPicker" top="20px" left="20px"    @selectEmoji="comment_insertEmoji2" />
-->
    <EmojiSelect v-if="showCommentEmojiPicker" position="relative" top="0px" left="0px"    @selectEmoji="comment_insertEmoji2" />

<!--
    <EmojiSelect v-if="showCommentEmojiPicker"  top="50px" left="50px"  @selectEmoji="comment_insertEmoji2" />
    -->
<!--
      <EmojiPicker v-if="showCommentEmojiPicker" :native="true" :display-recent="true" @select="comment_insertEmoji2" 
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
-->
              <button class="emoji-button" @click="showCommentEmojiPicker = !showCommentEmojiPicker">😊</button>



</template>
<style scoped>

.emoji-button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  padding: 4px 8px;
  display: flex;
  align-items: center;
}

.ql-snow .ql-picker.ql-font .ql-picker-label[data-value]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value]::before {
  content: attr(data-value) !important;
} 
  
.ql-snow .ql-picker.ql-font {
  width: 150px !important;
  white-space: nowrap;
}

.ql-editor blockquote {
  border-left: solid 6px #0080ff  !important;

}
.ql-editor pre {
 background-color: #606060  !important;
 font-family: Consolas, 'Courier New', Courier, Monaco, monospace;
 font-size: 14px;
 line-height: 1.2;

}
/*
.message-content {
 min-height: 3rem !important;
}
.comment-content {
 min-height: 3rem !important;
}
.ql-container {
 min-height: 3rem !important;
}

element.style {
    min-height: 3rem;
}
*/

</style>

