import{g as s,S as b,a as r,b as i,f as d}from"./index-2df84ebf.js";s.registerPlugin(b);const y=({element:o,background:t})=>{s.to(t,{yPercent:20,scrollTrigger:{trigger:o,scrub:0,start:"top top",end:"bottom top"}})},g=({background:o,title:t})=>{const e=s.timeline();e.fromTo(o,{scale:1.2},{scale:1,duration:1.5}),e.fromTo(t,{yPercent:30,opacity:0},{yPercent:0,opacity:1,duration:1.5},"<")},u=({element:o,properties:t})=>{const e=o.querySelector(".js-sostenibility-hero-background"),n=o.querySelector(".js-sostenibility-hero-title");return g({background:e,title:n}),y({element:o,background:e}),{}},N=".js-sostenibility-hero",c="SostenibilityHero",S=()=>r({componentName:c,className:N}).map(t=>{const e={...t.dataset},n=u({element:t,properties:e});return i({componentName:c,element:t,properties:e,methods:n}),n});s.registerPlugin(b);const $=({element:o,properties:t})=>{const e=o.querySelector(".js-sostenibility-title");return s.fromTo(e,{yPercent:50},{yPercent:0,scrollTrigger:{trigger:e,scrub:1,start:"top bottom",end:"top center"}}),{}},h=".js-sostenibility-competence",a="IntroSostenibility",P=()=>r({componentName:a,className:h}).map(t=>{const e={...t.dataset},n=$({element:t,properties:e});return i({componentName:a,element:t,properties:e,methods:n}),n});const j=({element:o,properties:t})=>([...o.querySelectorAll(".js-sostenibility-image")].forEach(n=>{s.matchMedia().add("(min-width: 768px)",()=>{s.fromTo(n,{yPercent:20},{yPercent:0,scrollTrigger:{trigger:n,scrub:1,start:"top bottom",end:"top center"}})})}),{}),C=".js-sostenibility-cards",m="SostenibilityCards",T=()=>r({componentName:m,className:C}).map(t=>{const e={...t.dataset},n=j({element:t,properties:e});return i({componentName:m,element:t,properties:e,methods:n}),n});const f=({element:o,properties:t})=>(console.log("blocks"),{}),x=".js-sostenibility-blocks",p="SostenibilityBlocks",k=()=>r({componentName:p,className:x}).map(t=>{const e={...t.dataset},n=f({element:t,properties:e});return i({componentName:p,element:t,properties:e,methods:n}),n});const B=({element:o,properties:t})=>{const e=o.querySelector(".js-sostenibility-bottom-banner-container");return s.matchMedia().add("(min-width: 768px)",()=>{s.fromTo(e,{yPercent:-50},{yPercent:0,scrollTrigger:{trigger:o,start:"top bottom",end:"bottom bottom",scrub:0}})}),{}},q=".js-sostenibility-bottom-banner",l="SostenibilityBottomBanner",w=()=>r({componentName:l,className:q}).map(t=>{const e={...t.dataset},n=B({element:t,properties:e});return i({componentName:l,element:t,properties:e,methods:n}),n});d();S();P();T();k();w();