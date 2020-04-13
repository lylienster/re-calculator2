(this["webpackJsonpre-calculator2"]=this["webpackJsonpre-calculator2"]||[]).push([[0],{24:function(e,a,t){e.exports=t(34)},29:function(e,a,t){},30:function(e,a,t){},34:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(8),i=t.n(l),u=(t(29),t(11)),c=t(12),s=t(9),o=(t(30),t(37)),m=function(e){return e.toLocaleString(void 0,{maximumFractionDigits:2})},p=function(e){return(e.purchasePrice||0)+(e.estimatedRepairs||0)+(e.purchaseClosingCosts||0)+(e.preRentHoldingCosts||0)},d=function(e,a){var t=Object(n.useState)((function(){try{var t=window.localStorage.getItem(e);return t?JSON.parse(t):a}catch(n){return console.log(n),a}})),r=Object(s.a)(t,2),l=r[0],i=r[1];return[l,function(a){try{var t=a instanceof Function?a(l):a;i(t),window.localStorage.setItem(e,JSON.stringify(t))}catch(n){console.log(n)}}]},g=function(e){var a=e.label,t=e.inputName,n=e.inputValue,l=e.additionalInfoText,i=e.handleOnChange,u=e.disabled,c=e.prefix,s=e.suffix,o=e.required,p=e.roundValue,d=void 0===p||p,g=e.isNumberInput,h="";o&&!n&&(h="is-invalid");var f=d?Math.ceil(n):n,E=f?m(Number(f)):"";return r.a.createElement("div",{className:"input-group row py-1 "},r.a.createElement("label",{className:"col-md-2"},a),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},c)),r.a.createElement("input",{className:"form-control "+h,name:t,value:E,onChange:i,disabled:u,type:g?"number":""}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("span",{className:"input-group-text"},s)))),r.a.createElement("div",{className:"col-md-2"},l))},h=function(e){var a=e.form,t=e.handleOnChange,n=a.purchasePrice,l=a.purchaseClosingCosts,i=a.preRentHoldingCosts,u=a.estimatedRepairs;return r.a.createElement("div",null,r.a.createElement("h2",null,"1) Total Project Cost: $",m(p(a))),r.a.createElement(g,{label:"Purchase Price",inputValue:n,inputName:"purchasePrice",handleOnChange:t,prefix:"$",required:!0}),r.a.createElement(g,{label:"Purchase Closing Costs",inputValue:l,inputName:"purchaseClosingCosts",handleOnChange:t,prefix:"$"}),r.a.createElement(g,{label:"Pre-Rent Holding Costs",inputValue:i,inputName:"preRentHoldingCosts",handleOnChange:t,prefix:"$"}),r.a.createElement(g,{label:"Estimated Repairs",inputValue:u,inputName:"estimatedRepairs",handleOnChange:t,prefix:"$"}),r.a.createElement(g,{label:"Total Project Cost",inputValue:p(a),prefix:"$",disabled:!0}))},f=function(e){var a=e.form,t=e.handleOnChange,n=e.handleTextOnChange,l=a.askingPrice;return r.a.createElement("div",null,r.a.createElement("div",{className:"input-group row py-1"},r.a.createElement("label",{className:"col-md-2"},"Address"),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{className:"form-control",name:"address",value:a.address,onChange:n,type:"text"})))),r.a.createElement(g,{label:"Asking Price",inputName:"askingPrice",inputValue:l,handleOnChange:t,prefix:"$"}))},E=t(36),b=function(e){var a=e.defaults,t=e.handleOnSubmit,n=r.a.useState(Object(c.a)({},a)),l=Object(s.a)(n,2),i=l[0],m=l[1],p=function(e){var a=e.target.value.replace(/,/g,"");isNaN(Number(a))||m(Object(c.a)({},i,Object(u.a)({},e.target.name,Number(a))))},d=r.a.useState(!1),h=Object(s.a)(d,2),f=h[0],b=h[1],N=function(){return b(!1)},C=i.purchaseClosingCosts,v=i.loanPeriod,O=i.interestRate,x=i.downPaymentPercentage,R=i.vacancyRate,V=i.repairsRate,P=i.capitalExpendituresRate,y=i.insuranceRate,j=i.taxRate,w=i.propertyManagementRate,I=i.projectionYear,S=i.appreciation;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{variant:"primary",onClick:function(){return b(!0)},className:"float-right"},"Edit Defaults"),r.a.createElement(E.a,{show:f,onHide:N,size:"lg"},r.a.createElement(E.a.Header,{closeButton:!0},r.a.createElement(E.a.Title,null,"Defaults")),r.a.createElement(E.a.Body,null,r.a.createElement("form",null,r.a.createElement("div",null,r.a.createElement(g,{label:"Purchase Closing Costs",inputName:"purchaseClosingCosts",inputValue:C,handleOnChange:p,prefix:"$"}),r.a.createElement(g,{label:"Loan Period",inputName:"loanPeriod",inputValue:v,handleOnChange:p,suffix:"years",roundValue:!1,isNumberInput:!0}),r.a.createElement(g,{label:"Interest Rate",inputName:"interestRate",inputValue:O,handleOnChange:p,suffix:"%",roundValue:!1,isNumberInput:!0}),r.a.createElement(g,{label:"Down Payment Percentage",inputName:"downPaymentPercentage",inputValue:x,handleOnChange:p,suffix:"%",roundValue:!1,isNumberInput:!0}),r.a.createElement(g,{label:"Vacancy Rate",inputName:"vacancyRate",inputValue:R,handleOnChange:p,suffix:"%",roundValue:!1,isNumberInput:!0}),r.a.createElement(g,{label:"Repair Percentage",inputName:"repairsRate",inputValue:V,handleOnChange:p,suffix:"%",roundValue:!1,isNumberInput:!0}),r.a.createElement(g,{label:"Capital Expenditure Percentage",inputName:"capitalExpendituresRate",inputValue:P,handleOnChange:p,suffix:"%",roundValue:!1,isNumberInput:!0}),r.a.createElement(g,{label:"Insurance Rate",inputName:"insuranceRate",inputValue:y,handleOnChange:p,suffix:"%",roundValue:!1,isNumberInput:!0}),r.a.createElement(g,{label:"Tax Rate",inputName:"taxRate",inputValue:j,handleOnChange:p,suffix:"%",roundValue:!1,isNumberInput:!0}),r.a.createElement(g,{label:"Property Management Rate",inputName:"propertyManagementRate",inputValue:w,handleOnChange:p,suffix:"%",roundValue:!1,isNumberInput:!0}),r.a.createElement(g,{label:"Projection Year",inputName:"projectionYear",inputValue:I,handleOnChange:p,suffix:"years",roundValue:!1,isNumberInput:!0}),r.a.createElement(g,{label:"Appreciation",inputName:"appreciation",inputValue:S,handleOnChange:p,suffix:"%",roundValue:!1,isNumberInput:!0})))),r.a.createElement(E.a.Footer,null,r.a.createElement(o.a,{variant:"primary",onClick:function(){t(i),N()}},"Save Changes"))))},N=function(){var e={address:"",purchaseClosingCosts:5e3,loanPeriod:30,interestRate:5,downPaymentPercentage:20,vacancyRate:5,repairsRate:5,capitalExpendituresRate:12.5,insuranceRate:.5,taxRate:1.06,propertyManagementRate:11,projectionYear:5,appreciation:4.4},a=d("defaults",e),t=Object(s.a)(a,2),n=t[0],l=t[1],i=d("form",e),m=Object(s.a)(i,2),p=m[0],g=m[1],E=r.a.useState(p||e),N=Object(s.a)(E,2),C=N[0],v=N[1],O=function(e){var a=e.target.value.replace(/,/g,"");if(!isNaN(Number(a))){var t=Object(c.a)({},C,Object(u.a)({},e.target.name,Number(a)));v(t),g(t)}};return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"text-center"},"RE Calculator"),r.a.createElement("hr",{className:"solid"}),r.a.createElement(b,{defaults:n,handleOnSubmit:function(e){l(e);var a=Object(c.a)({},C,{},e);v(a),g(a)}}),r.a.createElement("div",null,r.a.createElement(o.a,{variant:"primary",onClick:function(){},className:"float-right clear-fix",style:{marginRight:"10px"}},"Reset Numbers"),r.a.createElement("br",null)),r.a.createElement("form",null,r.a.createElement(f,{form:C,handleOnChange:O,handleTextOnChange:function(e){var a=Object(c.a)({},C,Object(u.a)({},e.target.name,e.target.value));v(a),g(a)}}),r.a.createElement(h,{form:C,handleOnChange:O}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(33);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.4cb92588.chunk.js.map