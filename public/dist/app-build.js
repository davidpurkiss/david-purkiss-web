"bundle";!function(){var a=System.amdDefine;a("app.html!github:systemjs/plugin-text@0.0.3.js",[],function(){return'<template> <require from="masthead.html"></require> <require from="footer"></require> <require from="bootstrap/css/bootstrap.css"></require> <require from="semantic-ui/semantic.min.css"></require> <masthead router.bind="router"></masthead> <div> <router-view></router-view> </div> <footer></footer> </template>'})}(),function(){var a=System.amdDefine;a("app.js",["require","exports","jquery","semantic-ui"],function(a,b){"use strict";var c=function(){function a(){}return a.prototype.configureRouter=function(a,b){a.title="David Purkiss",a.map([{route:["","landing"],name:"landing",moduleId:"landing",nav:!0,title:"Home"},{route:"welcome",name:"welcome",moduleId:"welcome",nav:!0,title:"Welcome",href:"#welcome"},{route:"current-tech",name:"current-tech",moduleId:"current-tech",nav:!0,title:"Current Tech",href:"#current-tech"},{route:"skills",name:"skills",moduleId:"skills",nav:!0,title:"Skills",href:"#skills"},{route:"current-interests",name:"current-interests",moduleId:"current-interests",nav:!0,title:"Current Interests",href:"#current-interests"},{route:"bedside-reading",name:"bedside-reading",moduleId:"bedside-reading",nav:!0,title:"Bedside Reading",href:"#bedside-reading"}]),this.router=b},a.prototype.attached=function(){$(".masthead").visibility({once:!1,onBottomPassed:function(){$(".fixed.menu").transition("fade in")},onBottomPassedReverse:function(){$(".fixed.menu").transition("fade out")}}),$(".ui.sidebar").sidebar("attach events",".toc.item")},a}();b.App=c})}(),function(){var a=System.amdDefine;a("bedside-reading.html!github:systemjs/plugin-text@0.0.3.js",[],function(){return'<template> <section id="bedside-reading" class="au-animate"> <h2>Bedside Reading</h2> </section> </template>'})}(),function(){var a=System.amdDefine;a("bedside-reading.js",["require","exports"],function(a,b){"use strict";var c=function(){function a(a){}return a}();b.BedsideReading=c})}(),function(){var a=System.amdDefine;a("current-interests.html!github:systemjs/plugin-text@0.0.3.js",[],function(){return'<template> <section id="current-interests" class="au-animate"> <h2>Current Interests</h2> </section> </template>'})}(),function(){var a=System.amdDefine,b=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},c=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0};a("current-interests.js",["require","exports","aurelia-framework","aurelia-fetch-client","fetch"],function(a,d,e,f){"use strict";var g=function(){function a(a){this.http=a,this.heading="Github Users",this.users=[],a.configure(function(a){a.useStandardConfiguration().withBaseUrl("https://api.github.com/")})}return a.prototype.activate=function(){var a=this;return this.http.fetch("users").then(function(a){return a.json()}).then(function(b){return a.users=b})},a=b([e.autoinject,c("design:paramtypes",[f.HttpClient])],a)}();d.Users=g})}(),function(){var a=System.amdDefine;a("current-tech.html!github:systemjs/plugin-text@0.0.3.js",[],function(){return'<template> <div id="current-tech" class="ui vertical stripe segment inverted"> <div class="ui middle aligned stackable grid container"> <div class="row"> <div class="center aligned column"> <h3 class="ui inverted header">Tech I\'m currently working with</h3> </div> </div> <div class="row"> <div class="fourteen wide column"> <div class="ui four cards"> <div class="card" repeat.for="tech of currentTech"> <div class="content"> <a href.bind="tech.link"> <img class="ui medium bordered" src.bind="tech.imageSrc"> </a> </div> <div class="extra content"> <div class="meta"> ${tech.description} </div> <h4>Type: ${tech.type}</h4> </div> </div> </div> </div> </div> <div class="row"> <div class="center aligned column"> <a class="ui huge button">Check Them Out</a> </div> </div> </div> </div> </template>'})}(),function(){var a=System.amdDefine;a("current-tech.js",["require","exports"],function(a,b){"use strict";var c=function(){function a(a){this.currentTech=[],this.loadCurrentTech()}return a.prototype.loadCurrentTech=function(){this.currentTech.push(new d("Aurelia","Aurelia is a JavaScript client framework for mobile, desktop and web leveraging simple conventions and empowering creativity","http://aurelia.io","http://aurelia.io/images/main-logo.svg","ui/frontend"))},a}();b.CurrentTech=c;var d=function(){function a(a,b,c,d,e){this.name=a,this.description=b,this.link=c,this.imageSrc=d,this.type=e}return a}();b.Tech=d})}(),function(){var a=System.amdDefine;a("footer.html!github:systemjs/plugin-text@0.0.3.js",[],function(){return'<template> <div class="ui inverted vertical footer segment"> <div class="ui container"> <div class="ui stackable inverted divided equal height stackable grid"> <div class="three wide column"> <h4 class="ui inverted header">About</h4> <div class="ui inverted link list"> <a href="#" class="item">Sitemap</a> <a href="#" class="item">Contact Us</a> <a href="#" class="item">Religious Ceremonies</a> <a href="#" class="item">Gazebo Plans</a> </div> </div> <div class="three wide column"> <h4 class="ui inverted header">Services</h4> <div class="ui inverted link list"> <a href="#" class="item">Banana Pre-Order</a> <a href="#" class="item">DNA FAQ</a> <a href="#" class="item">How To Access</a> <a href="#" class="item">Favorite X-Men</a> </div> </div> <div class="seven wide column"> <h4 class="ui inverted header">Footer Header</h4> <p>Extra space for a call to action inside the footer that could help re-engage users.</p> </div> </div> </div> </div> </template>'})}(),function(){var a=System.amdDefine;a("footer.js",["require","exports"],function(a,b){"use strict";var c=function(){function a(){}return a}();b.Footer=c})}(),function(){var a=System.amdDefine;a("landing.html!github:systemjs/plugin-text@0.0.3.js",[],function(){return'<template> <compose view-model="welcome"></compose> <compose view-model="current-tech"></compose> <compose view-model="skills"></compose> <compose view-model="current-interests"></compose> <compose view-model="bedside-reading"></compose> </template>'})}(),function(){var a=System.amdDefine;a("landing.js",["require","exports"],function(a,b){"use strict";var c=function(){function a(a){}return a}();b.Landing=c})}(),function(){var a=System.amdDefine;a("main.js",["require","exports","bootstrap"],function(a,b){"use strict";function c(a){a.use.standardConfiguration().developmentLogging(),a.start().then(function(){return a.setRoot()})}b.configure=c})}(),function(){var a=System.amdDefine;a("masthead.html!github:systemjs/plugin-text@0.0.3.js",[],function(){return'<template bindable="router"> <div class="ui large top fixed hidden menu"> <div class="ui container"> <template repeat.for="row of router.navigation"> <a class="item ${row.isActive ? \'active\' : \'\'}" href.bind="row.href">${row.title}</a> </template> </div> </div> <div class="ui vertical inverted sidebar menu"> <template repeat.for="row of router.navigation"> <a class="item ${row.isActive ? \'active\' : \'\'}" href.bind="row.href">${row.title}</a> </template> </div> <div class="ui inverted vertical masthead center aligned segment"> <div class="ui container"> <div class="ui large secondary inverted pointing menu"> <a class="toc item"> <i class="sidebar icon"></i> </a> <template repeat.for="row of router.navigation"> <a class="item ${row.isActive ? \'active\' : \'\'}" href.bind="row.href">${row.title}</a> </template> </div> </div> <div class="ui text container"> <h1 class="ui inverted header"> David Purkiss </h1> <h2>Some info about me. Please have a look around.</h2> <div class="ui huge primary button">Get Started <i class="right arrow icon"></i></div> </div> </div> </template>'})}(),function(){var a=System.amdDefine;a("skills.html!github:systemjs/plugin-text@0.0.3.js",[],function(){return'<template> <section id="skills" class="au-animate"> <h2>SKills</h2> </section> </template>'})}(),function(){var a=System.amdDefine;a("skills.js",["require","exports"],function(a,b){"use strict";var c=function(){function a(){}return a}();b.Skills=c})}(),function(){var a=System.amdDefine;a("welcome.html!github:systemjs/plugin-text@0.0.3.js",[],function(){return'<template> <section id="welcome" class="au-animate"> <div class="ui vertical stripe segment"> <div class="ui middle aligned stackable grid container"> <div class="row"> <div class="eight wide column"> <h3 class="ui header">About me</h3> <p>I currently live and work in Joahnnesburg, South Africa as a Software Developer.</p> <h3 class="ui header">What I care about</h3> <p>I care about my work and how it contributes to the World. I want to help make a difference and do it by doing what I love. That just happens to be Software Development, but not just any kind of Software Development. I love building large, complex systems, breaking them down into their simplest components and weaving it back together in a way that is elegant.</p> </div> <div class="six wide right floated column"> <img src="/assets/images/profile.jpg" class="ui large bordered rounded image"> </div> </div> </div> </div> </section> </template>'})}(),function(){var a=System.amdDefine;a("welcome.js",["require","exports"],function(a,b){"use strict";var c=function(){function a(a){}return a}();b.Welcome=c})}();