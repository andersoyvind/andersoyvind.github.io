import{s as p}from"./DtbnQ24d.js";import{Q as h,R as o,E as f,o as s,c as b,a as d,X as r,Y as m,$ as y,s as v,a1 as g}from"./Cz-VxLtf.js";import{s as k}from"./BTIGVBPF.js";import"./uHnIY7u3.js";var C={root:function(t){var a=t.instance,l=t.props;return["p-checkbox p-component",{"p-highlight":a.checked,"p-disabled":l.disabled,"p-invalid":l.invalid,"p-variant-filled":l.variant?l.variant==="filled":a.$primevue.config.inputStyle==="filled"}]},box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},S=h.extend({name:"checkbox",classes:C}),B={name:"BaseCheckbox",extends:k,props:{value:null,modelValue:null,binary:Boolean,name:{type:String,default:null},trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},variant:{type:String,default:null},invalid:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:S,provide:function(){return{$parentInstance:this}}};function A(e){return T(e)||O(e)||I(e)||V()}function V(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function I(e,t){if(e){if(typeof e=="string")return i(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return i(e,t)}}function O(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function T(e){if(Array.isArray(e))return i(e)}function i(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,l=new Array(t);a<t;a++)l[a]=e[a];return l}var x={name:"Checkbox",extends:B,inheritAttrs:!1,emits:["update:modelValue","change","focus","blur"],methods:{getPTOptions:function(t){var a=t==="root"?this.ptmi:this.ptm;return a(t,{context:{checked:this.checked,disabled:this.disabled}})},onChange:function(t){var a=this;if(!this.disabled&&!this.readonly){var l;this.binary?l=this.checked?this.falseValue:this.trueValue:this.checked?l=this.modelValue.filter(function(u){return!o.equals(u,a.value)}):l=this.modelValue?[].concat(A(this.modelValue),[this.value]):[this.value],this.$emit("update:modelValue",l),this.$emit("change",t)}},onFocus:function(t){this.$emit("focus",t)},onBlur:function(t){this.$emit("blur",t)}},computed:{checked:function(){return this.binary?this.modelValue===this.trueValue:o.contains(this.value,this.modelValue)}},components:{CheckIcon:p}},P=["data-p-highlight","data-p-disabled"],j=["id","value","name","checked","tabindex","disabled","readonly","required","aria-labelledby","aria-label","aria-invalid"];function q(e,t,a,l,u,n){var c=f("CheckIcon");return s(),b("div",r({class:e.cx("root")},n.getPTOptions("root"),{"data-p-highlight":n.checked,"data-p-disabled":e.disabled}),[d("input",r({id:e.inputId,type:"checkbox",class:[e.cx("input"),e.inputClass],style:e.inputStyle,value:e.value,name:e.name,checked:n.checked,tabindex:e.tabindex,disabled:e.disabled,readonly:e.readonly,required:e.required,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-invalid":e.invalid||void 0,onFocus:t[0]||(t[0]=function(){return n.onFocus&&n.onFocus.apply(n,arguments)}),onBlur:t[1]||(t[1]=function(){return n.onBlur&&n.onBlur.apply(n,arguments)}),onChange:t[2]||(t[2]=function(){return n.onChange&&n.onChange.apply(n,arguments)})},n.getPTOptions("input")),null,16,j),d("div",r({class:e.cx("box")},n.getPTOptions("box")),[m(e.$slots,"icon",{checked:n.checked,class:g(e.cx("icon"))},function(){return[n.checked?(s(),y(c,r({key:0,class:e.cx("icon")},n.getPTOptions("icon")),null,16,["class"])):v("",!0)]})],16)],16,P)}x.render=q;export{x as default};
