<script setup>
import { computed, onMounted, ref, watch } from "vue";
import Quill from "quill";

import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

const props = defineProps({
    modelValue: String,
    //disabled: Boolean,
    readOnly: Boolean,
    theme: {
       type: String,
       default: 'snow',
    },
});


defineExpose({
    setHTML,
    getQuill,
    getEditor,
});

const emits = defineEmits(["update:modelValue"]);
let editor = ref(null);
let quillInstance = null;



function getQuill() {
   return quillInstance;
}
function getEditor() {
   return editor;
}
const toolbar = computed(() => {
    // ここは好きな用にツールバーをカスタマイズしてね♥
    return [
        [{ color: [] }, { background: [] }],
        ["bold", "italic", "underline"],
        ["link", "image"],
        [{ align: [] }, { list: "ordered" }, { list: "bullet" }],
        [{ size: ["small", false, "large", "huge"] }, "clean"],
    ];
});

function setHTML(value) {
}

const content = computed({
    get: () => {
        return props.modelValue ? props.modelValue : "<p><br></p>";
    },
    set: (value) => {
        emits("update:modelValue", value);
    },
});

onMounted(() => {
    quillInstance = new Quill(editor.value, {
        //theme: "snow",
        theme: props.theme,
        modules: {
            toolbar: toolbar.value,
        },
        readOnly: props.readOnly,
    });
    quillInstance.root.innerHTML = content.value;
    quillInstance.on("text-change", () => {
        emits("update:modelValue", quillInstance.root.innerHTML);
    });
});

watch(
    () => props.modelValue,
    (value) => {
        if (quillInstance && quillInstance.root.innerHTML !== value) {
            quillInstance.root.innerHTML = value || "<p><br></p>";
        }
    }
);
</script>
<template>
    <div
        ref="editor"
        :style="{ minHeight: '6rem' }"
        class="bg-white"
    ></div>
</template>

<style>
.ql-editor .ql-size-small {
    font-size: 0.9em;
}
.ql-editor .ql-size-large {
    font-size: 1.3em;
}
.ql-editor .ql-size-huge {
    font-size: 2.1em;
}

          /* none   block */
	  /*
.ql-toolbar.ql-snow {
  display:block;          

}
*/
          /* none  1px solid #ccc*/
	  /*
.ql-container.ql-snow {
    border: 1px solid #ccc;         
}
  display:v-bind(toolbar_style);
  display:v-bind(toolbar_enable.value);
*/


.ql-toolbar-hidden.ql-toolbar.ql-snow {
  display:none;
}

.ql-disabled.ql-container.ql-snow {
    border: none;         
}
</style>


