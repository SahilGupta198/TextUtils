(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){},18:function(e,a,t){},20:function(e,a,t){"use strict";t.r(a);var l=t(1),o=t.n(l),n=t(6),c=t.n(n),r=(t(16),t(3)),s=t(4);function i(e){return o.a.createElement("nav",{className:"navbar navbar-".concat(e.mode," navbar-expand-lg bg-").concat(e.mode)},o.a.createElement("div",{className:"container-fluid"},o.a.createElement(s.b,{className:"navbar-brand",to:"/"},e.title),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},o.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},o.a.createElement("li",{className:"nav-item"},o.a.createElement(s.b,{className:"nav-link active","aria-current":"page",to:"/"},"Home")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(s.b,{className:"nav-link",to:"/about"},e.aboutText))),o.a.createElement("div",{className:"form-check form-switch mx-4 ".concat("light"===e.mode?"dark":"ligth")},o.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode2,type:"checkbox",role:"switch","aria-checked":"false",id:"flexSwitchCheckDefault"}),o.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Gray Mode")),o.a.createElement("div",{className:"form-check form-switch ".concat("light"===e.mode?"dark":"ligth")},o.a.createElement("input",{className:"form-check-input ",onClick:e.toggleMode,type:"checkbox",role:"switch","aria-checked":"false",id:"flexSwitchCheckDefault"}),o.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Dark Mode")))))}function d(){var e=Object(l.useState)({color:"whitesmoke",backgroundColor:"#171717"}),a=Object(r.a)(e,2),t=a[0],n=a[1],c=Object(l.useState)("Light Mode"),s=Object(r.a)(c,2),i=s[0],d=s[1];return o.a.createElement("div",null,o.a.createElement("div",{className:"container",style:t},o.a.createElement("h1",{className:"my-3"},"About us"),o.a.createElement("div",{className:"accordion",id:"accordionExample"},o.a.createElement("div",{className:"accordion-item"},o.a.createElement("h2",{className:"accordion-header",id:"headingOne"},o.a.createElement("button",{className:"accordion-button",style:t,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},"Accordion Item #1")),o.a.createElement("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"},o.a.createElement("div",{className:"accordion-body",style:t},o.a.createElement("strong",null,"This is the first item's accordion body.")," It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",o.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),o.a.createElement("div",{className:"accordion-item"},o.a.createElement("h2",{className:"accordion-header",id:"headingTwo"},o.a.createElement("button",{className:"accordion-button collapsed",style:t,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"},"Accordion Item #2")),o.a.createElement("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample"},o.a.createElement("div",{className:"accordion-body",style:t},o.a.createElement("strong",null,"This is the second item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",o.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),o.a.createElement("div",{className:"accordion-item"},o.a.createElement("h2",{className:"accordion-header",id:"headingThree"},o.a.createElement("button",{className:"accordion-button collapsed",style:t,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"},"Accordion Item #3")),o.a.createElement("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample"},o.a.createElement("div",{className:"accordion-body",style:t},o.a.createElement("strong",null,"This is the third item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",o.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))))),o.a.createElement("div",{className:"container my-4"},o.a.createElement("button",{onClick:function(){"white"===t.color?(n({color:"black",backgroundColor:"whitesmoke"}),d("Dark Mode")):(n({color:"white",backgroundColor:"#171717"}),d("Light Mode"))},type:"button",className:"btn darkBtn btn-dark",id:"darkBtn"},i)))}function m(e){var a=Object(l.useState)(""),t=Object(r.a)(a,2),n=t[0],c=t[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"container"},o.a.createElement("h3",{className:"my-3"},e.heading),o.a.createElement("div",{className:"mb-3"},o.a.createElement("textarea",{className:"form-control",style:{backgroundColor:"light"===e.mode?"white":"#22303c00",color:"light"===e.mode?"black":"whitesmoke"},id:"exampleFormControlTextarea1",value:n,onChange:function(e){c(e.target.value)},rows:"8"})),o.a.createElement("button",{className:"btn btn-".concat("light"===e.mode?"dark":"primary"," mx-3"),onClick:function(){var a=n.toUpperCase();c(a),e.showAlert('converted to "Uppercase"',"success")}},e.buttonText),o.a.createElement("button",{className:"btn btn-".concat("light"===e.mode?"dark":"primary"," mx-3"),onClick:function(){var a=n.toLowerCase();c(a),e.showAlert('converted to "Lowercase"',"success")}},e.buttonText2),o.a.createElement("button",{className:"btn btn-".concat("light"===e.mode?"dark":"primary"," mx-3"),onClick:function(){var a=n.trim();c(a),e.showAlert('"Trimmed" Extra space from starting and ending of text',"success")}},e.buttonText3),o.a.createElement("button",{className:"btn btn-".concat("light"===e.mode?"dark":"primary"," mx-3"),onClick:function(){c(""),e.showAlert('text is "Cleared"',"success")}},e.buttonText4)),o.a.createElement("div",{className:"container my-3"},o.a.createElement("h3",null,"Your text summary"),o.a.createElement("p",null,n.split(" ").length-1," Words and ",n.length," Characters"),o.a.createElement("p",null,"Reading Time: ",.008*(n.split(" ").length-1)," Mins"),o.a.createElement("h4",{className:"my-2"},"Preview"),o.a.createElement("p",null,n)))}i.defaultProps={title:"Default-Title",aboutText:"Default-About"};t(18);var u=function(e){return e.alert&&o.a.createElement("div",{className:"alert alert-small alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},o.a.createElement("strong",null,function(e){var a=e.toLowerCase();return a.charAt(0).toUpperCase()+a.slice(1)}(e.alert.type),"  "),e.alert.msg)},h=t(0);var b=function(){var e=Object(l.useState)("light"),a=Object(r.a)(e,2),t=a[0],n=a[1],c=Object(l.useState)(null),b=Object(r.a)(c,2),g=b[0],p=b[1],E=function(e,a){p({msg:e,type:a}),setTimeout(function(){p(null)},500)},y=function(){"light"===t?(n("dark"),document.body.style.backgroundColor="#22303c",document.body.style.color="white",E("Dark Mode has been enabled","success"),document.title="TextUtils - Dark"):(n("light"),document.body.style.backgroundColor="white",document.body.style.color="#171717",E("Light mode has been enabled","success"),document.title="TextUtils - Home")};return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,null,o.a.createElement(i,{title:"TextUtils",aboutText:"About-us",mode:t,toggleMode:y,toggleMode2:function(){"light"===t?(n("secondary"),document.body.style.backgroundColor="#343A40",document.body.style.color="whitesmoke",E("Gray Mode has been enabled","success"),document.title="TextUtils - Gray"):(n("light"),document.body.style.backgroundColor="white",document.body.style.color="#171717",E("Light mode has been enabled","success"),document.title="TextUtils - Home")}}),o.a.createElement(u,{alert:g}),o.a.createElement("div",{className:"container"},o.a.createElement(h.c,null,o.a.createElement(h.a,{exact:!0,path:"/about",element:o.a.createElement(d,null)}),o.a.createElement(h.a,{exact:!0,path:"/",element:o.a.createElement(m,{heading:"Enter the text to analyze:",mode:t,showAlert:E,buttonText:"UpperCase",buttonText2:"LowerCase",buttonText3:"Trim Spaces",buttonText4:"Clear Text",toggleMode:y})})))))},g=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,21)).then(function(a){var t=a.getCLS,l=a.getFID,o=a.getFCP,n=a.getLCP,c=a.getTTFB;t(e),l(e),o(e),n(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null))),g()},7:function(e,a,t){e.exports=t(20)}},[[7,3,2]]]);
//# sourceMappingURL=main.e4ce5fdb.chunk.js.map