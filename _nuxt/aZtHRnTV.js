import{s}from"./BTIGVBPF.js";import{Q as r,o as u,c as p,a as d,X as n}from"./Cz-VxLtf.js";var o={root:{position:"relative"}},c={root:function(a){var l=a.instance,i=a.props;return["p-inputswitch p-component",{"p-highlight":l.checked,"p-disabled":i.disabled,"p-invalid":i.invalid}]},input:"p-inputswitch-input",slider:"p-inputswitch-slider"},h=r.extend({name:"inputswitch",classes:c,inlineStyles:o}),f={name:"BaseInputSwitch",extends:s,props:{modelValue:{type:null,default:!1},trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},invalid:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:h,provide:function(){return{$parentInstance:this}}},b={name:"InputSwitch",extends:f,inheritAttrs:!1,emits:["update:modelValue","change","focus","blur"],methods:{getPTOptions:function(a){var l=a==="root"?this.ptmi:this.ptm;return l(a,{context:{checked:this.checked,disabled:this.disabled}})},onChange:function(a){if(!this.disabled&&!this.readonly){var l=this.checked?this.falseValue:this.trueValue;this.$emit("update:modelValue",l),this.$emit("change",a)}},onFocus:function(a){this.$emit("focus",a)},onBlur:function(a){this.$emit("blur",a)}},computed:{checked:function(){return this.modelValue===this.trueValue}}},y=["data-p-highlight","data-p-disabled"],m=["id","checked","tabindex","disabled","readonly","aria-checked","aria-labelledby","aria-label","aria-invalid"];function g(e,a,l,i,v,t){return u(),p("div",n({class:e.cx("root"),style:e.sx("root")},t.getPTOptions("root"),{"data-p-highlight":t.checked,"data-p-disabled":e.disabled}),[d("input",n({id:e.inputId,type:"checkbox",role:"switch",class:[e.cx("input"),e.inputClass],style:e.inputStyle,checked:t.checked,tabindex:e.tabindex,disabled:e.disabled,readonly:e.readonly,"aria-checked":t.checked,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-invalid":e.invalid||void 0,onFocus:a[0]||(a[0]=function(){return t.onFocus&&t.onFocus.apply(t,arguments)}),onBlur:a[1]||(a[1]=function(){return t.onBlur&&t.onBlur.apply(t,arguments)}),onChange:a[2]||(a[2]=function(){return t.onChange&&t.onChange.apply(t,arguments)})},t.getPTOptions("input")),null,16,m),d("span",n({class:e.cx("slider")},t.getPTOptions("slider")),null,16)],16,y)}b.render=g;export{b as default};
