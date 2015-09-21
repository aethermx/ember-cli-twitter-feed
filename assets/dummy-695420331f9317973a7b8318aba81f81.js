"use strict";define("dummy/app",["exports","ember","ember/resolver","ember/load-initializers","dummy/config/environment"],function(e,t,n,a,r){var d;t["default"].MODEL_FACTORY_INJECTIONS=!0,d=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:n["default"]}),a["default"](d,r["default"].modulePrefix),e["default"]=d}),define("dummy/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy/config/environment"],function(e,t,n){var a=n["default"].APP,r=a.name,d=a.version;e["default"]=t["default"].extend({version:d,name:r})}),define("dummy/components/twitter-feed",["exports","ember-cli-twitter-feed/components/twitter-feed"],function(e,t){e["default"]=t["default"]}),define("dummy/controllers/array",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("dummy/controllers/object",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,n){var a=n["default"].APP,r=a.name,d=a.version;e["default"]={name:"App Version",initialize:t["default"](r,d)}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){function a(){var e=arguments[1]||arguments[0];if(n["default"].exportApplicationGlobal!==!1){var a,r=n["default"].exportApplicationGlobal;a="string"==typeof r?r:t["default"].String.classify(n["default"].modulePrefix),window[a]||(window[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[a]}}))}}e.initialize=a,e["default"]={name:"export-application-global",initialize:a}}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,n){var a=t["default"].Router.extend({location:n["default"].locationType});a.map(function(){this.route("no-feed"),this.route("faq")}),e["default"]=a}),define("dummy/routes/faq",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({})}),define("dummy/routes/no-feed",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({})}),define("dummy/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.7",loc:{source:null,start:{line:1,column:0},end:{line:12,column:0}},moduleName:"dummy/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h2");e.setAttribute(n,"id","title");var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("a");e.setAttribute(a,"href","https://github.com/aethermx/ember-cli-twitter-feed");var r=e.createTextNode("\n    ember-cli-twitter-feed");e.appendChild(a,r),e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("nav"),a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[2]),r=new Array(4);return r[0]=e.createMorphAt(a,1,1),r[1]=e.createMorphAt(a,3,3),r[2]=e.createMorphAt(a,5,5),r[3]=e.createMorphAt(t,4,4,n),r},statements:[["inline","link-to",["show feed","index"],["id","feed"],["loc",[null,[6,2],[6,43]]]],["inline","link-to",["no feed","no-feed"],["id","nofeed"],["loc",[null,[7,2],[7,45]]]],["inline","link-to",["FAQ","faq"],[],["loc",[null,[8,2],[8,25]]]],["content","outlet",["loc",[null,[11,0],[11,10]]]]],locals:[],templates:[]}}())}),define("dummy/templates/faq",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.7",loc:{source:null,start:{line:1,column:0},end:{line:18,column:0}},moduleName:"dummy/templates/faq.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h1"),a=e.createTextNode("FAQ");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("p"),a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("b"),r=e.createTextNode("What Ember versions are supported?");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("ul"),r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("li"),d=e.createTextNode("1.13.X - yes");e.appendChild(r,d),e.appendChild(a,r);var r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("li"),d=e.createTextNode("2.0.0 - no (WIP)");e.appendChild(r,d),e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("p"),a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("b"),r=e.createTextNode("What do I do with all the Content Security Policy (CSP) warnings?");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("br");e.appendChild(n,a);var a=e.createTextNode("\n  You can copy the CSPs from here:\n  ");e.appendChild(n,a);var a=e.createElement("a");e.setAttribute(a,"href","https://github.com/aethermx/ember-cli-twitter-feed/blob/master/tests/dummy/config/environment.js#L46"),e.setAttribute(a,"target","_blank");var r=e.createTextNode("\n    config/environment.js");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}())}),define("dummy/templates/index",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@1.13.7",loc:{source:null,start:{line:26,column:2},end:{line:28,column:2}},moduleName:"dummy/templates/index.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("    ");e.appendChild(t,n);var n=e.createElement("a");e.setAttribute(n,"class","twitter-timeline"),e.setAttribute(n,"href","https://twitter.com/hashtag/emberjs"),e.setAttribute(n,"data-widget-id","639895199179767808");var a=e.createTextNode("#emberjs Tweets");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{revision:"Ember@1.13.7",loc:{source:null,start:{line:1,column:0},end:{line:30,column:0}},moduleName:"dummy/templates/index.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("\nInstall the addon:\n\n");e.appendChild(t,n);var n=e.createElement("pre");e.setAttribute(n,"class","code");var a=e.createTextNode("ember install ember-cli-twitter-feed");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("p"),a=e.createTextNode("\n  Go to\n  ");e.appendChild(n,a);var a=e.createElement("a");e.setAttribute(a,"href","https://twitter.com/settings/widgets"),e.setAttribute(a,"target","_blank");var r=e.createTextNode("\n    https://twitter.com/settings/widgets");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode(",\n  get your code snippet and use it in your template:\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("pre");e.setAttribute(n,"class","code");var a=e.createTextNode("\n");e.appendChild(n,a);var a=e.createTextNode('{{#twitter-feed}}\n  <!-- paste only the HTML line here -->\n  <a class="twitter-timeline"  href="https://twitter.com/hashtag/emberjs" data-widget-id="639895199179767808">#emberjs Tweets</a>\n');e.appendChild(n,a);var a=e.createTextNode("{{/twitter-feed}}\n\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("p"),a=e.createTextNode("\n  Result:\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","text_center");var a=e.createTextNode("\n");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(e.childAt(t,[9]),1,1),a},statements:[["block","twitter-feed",[],[],0,null,["loc",[null,[26,2],[28,19]]]]],locals:[],templates:[e]}}())}),define("dummy/templates/no-feed",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.7",loc:{source:null,start:{line:1,column:0},end:{line:5,column:0}},moduleName:"dummy/templates/no-feed.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("p"),a=e.createTextNode("\n  Transition back to the route with the twitter-feed component and it should\n  reload the widget.\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var n=t+"/config/environment",a=e["default"].$('meta[name="'+n+'"]').attr("content"),r=JSON.parse(unescape(a));return{"default":r}}catch(d){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests?require("dummy/tests/test-helper"):require("dummy/app")["default"].create({name:"ember-cli-twitter-feed",version:"0.1.0+0c5afbd6"});