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
/*
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
*/

let fonts = Quill.import("attributors/style/font");
fonts.whitelist = ["noto-sans-jp", "sans-serif", "serif", "monospace", "arial"];
Quill.register(fonts, true);

let toolbar_option =  [
  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],

 // [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
 // [{ 'direction': 'rtl' }],                         // text direction
  [{ 'align': [] }],
 // ['link', 'image', 'video', 'formula'],
  ['link', 'image', 'video' ],

  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
 // [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

 // [{ 'font': [] }],
  [{ 'font': fonts.whitelist }],

  //['clean']
];


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

/*
function showTooltips(){
//	let toolbarElement = document.querySelector('.ql-toolbar');
       const toolbarElement = editor.value.parentElement.getElementsByClassName("ql-toolbar")[0];

	if (toolbarElement) {
		let matches = toolbarElement.querySelectorAll('button');
		for (let btnEl of matches) {
			let btnName = btnEl.className.replace('ql-', '');
			btnName = btnName.charAt(0).toUpperCase() + btnName.slice(1)
			btnEl.setAttribute("title", btnName)
		}
	}
}
*/

let toolbarTooltips = {
	'font': 'Select a font',
	'size': 'Select a font size',
	'header': 'Select the text style',
	'bold': 'Bold',
	'italic': 'Italic',
	'underline': 'Underline',
	'strike': 'Strikethrough',
	'blockquote': 'Blockquote',
	'code-block': 'Code block',
	'color': 'Select a text color',
	'background': 'Select a background color',
	'script': {
		'sub': 'Subscript',
		'super': 'Superscript'
	},
	'list': {
		'ordered': 'Numbered list',
		'bullet': 'Bulleted list',
		'check': 'Checked list'
	},
	'indent': {
		'-1': 'Decrease indent',
		'+1': 'Increase indent'
	},
	'direction': {
		'rtl': 'Text direction (right to left | left to right)',
		'ltr': 'Text direction (left ro right | right to left)'
	},
	'align': 'Text alignment',
	'link': 'Insert a link',
	'image': 'Insert an image',
	'video': 'Insert an video',
	'formula': 'Insert a formula',
	'clean': 'Clear format',
	'add-table': 'Add a new table',
	'table-row': 'Add a row to the selected table',
	'table-column': 'Add a column to the selected table',
	'remove-table': 'Remove selected table',
	'help': 'Show help'
};

function showTooltips() {
	let showTooltip = (which, el) => {
		if (which == 'button') {
			var tool = el.className.replace('ql-', '');
		}
		else if (which == 'span') {
			var tool = el.className.replace('ql-', '');
			tool = tool.substr(0, tool.indexOf(' '));
		}
		if (tool) {
			//if element has value attribute.. handling is different
			//buttons without value
			if (el.value == '') {
				if (toolbarTooltips[tool]) {
					el.setAttribute('title', toolbarTooltips[tool]);
                                } 
			}
			//buttons with value
			else if (typeof el.value !== 'undefined') {
				if (toolbarTooltips[tool][el.value]) {
					el.setAttribute('title', toolbarTooltips[tool][el.value]);
                                }
			}
			//default
			else
				if (toolbarTooltips[tool]) {
				    el.setAttribute('title', toolbarTooltips[tool]);
                                } 
		}
	};

	//let toolbarElement = document.querySelector('.ql-toolbar');
        const toolbarElement = editor.value.parentElement.getElementsByClassName("ql-toolbar")[0];
	if (toolbarElement) {
		let matchesButtons = toolbarElement.querySelectorAll('button');
		for (let el of matchesButtons) {
			showTooltip('button', el);
		}
		//for submenus inside 
		let matchesSpans = toolbarElement.querySelectorAll('.ql-toolbar > span > span');
		for (let el of matchesSpans) {
			showTooltip('span', el);
		}
	}
}


onMounted(() => {
    quillInstance = new Quill(editor.value, {
        //theme: "snow",
        theme: props.theme,
        modules: {
            //toolbar: toolbar.value,
            toolbar: toolbar_option,
        },
        readOnly: props.readOnly,
    });
    quillInstance.root.innerHTML = content.value;
    quillInstance.on("text-change", () => {
        emits("update:modelValue", quillInstance.root.innerHTML);
    });
    showTooltips()
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

.ql-container {
 min-height: 3rem !important;
}

</style>


