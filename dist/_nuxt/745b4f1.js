(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{170:function(t,e,n){},171:function(t,e,n){"use strict";function r(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}n.d(e,"a",(function(){return r}))},172:function(t,e,n){t.exports=n.p+"img/logo.7e381e0.svg"},173:function(t,e,n){"use strict";n(170)},174:function(t,e,n){"use strict";var r=n(87),o={data:function(){return{isDark:!1,progress:0}},props:{dark:{type:Boolean}},components:{Fragment:r.a},methods:{handleScroll:function(){var t=this.$refs.nav;console.log(window.scrollY),window.scrollY>66&&!t.classList.contains("bg-dark")?t.classList.add("bg-dark"):window.scrollY<67&&t.classList.contains("bg-dark")&&t.classList.remove("bg-dark")},closeModal:function(){this.$refs.closeModal.click()}},mounted:function(){!0===this.dark?this.$refs.nav.classList.add("bg-dark"):window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){this.$refs.closeModal.click()},destroyed:function(){!0==!this.dark&&window.removeEventListener("scroll",this.handleScroll)}},l=(n(173),n(29)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Fragment",[r("nav",{ref:"nav",staticClass:"navbar navbar-expand-lg sticky-top navbar-dark"},[r("div",{staticClass:"container"},[r("NuxtLink",{staticClass:"navbar-brand",attrs:{to:"/"}},[r("img",{attrs:{src:n(172),alt:"Michael Halstead"}})]),t._v(" "),r("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"modal","data-bs-target":"#mobileNav"}},[r("span",{staticClass:"navbar-toggler-icon"})]),t._v(" "),r("div",{staticClass:"collapse navbar-collapse"},[r("ul",{staticClass:"navbar-nav ms-auto mb-2 mb-lg-0 font-weight-medium"},[r("li",{staticClass:"nav-item"},[r("NuxtLink",{staticClass:"nav-link",attrs:{to:"/",exact:""}},[t._v("Home")])],1),t._v(" "),r("li",{staticClass:"nav-item"},[r("NuxtLink",{staticClass:"nav-link",attrs:{to:"/blog"}},[t._v("Blog")])],1),t._v(" "),r("li",{staticClass:"nav-item"},[r("NuxtLink",{staticClass:"nav-link",attrs:{to:"/art"}},[t._v("Art")])],1)])])],1)]),t._v(" "),r("div",{staticClass:"modal modal-fullscreen fade",attrs:{id:"mobileNav",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[r("div",{staticClass:"modal-dialog modal-dialog-scrollable"},[r("div",{staticClass:"modal-content"},[r("div",{staticClass:"modal-header"},[r("button",{ref:"closeModal",staticClass:"text-white btn p-0",attrs:{"data-bs-dismiss":"modal","aria-label":"Close"}},[r("span",{staticClass:"display-4",attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),r("div",{staticClass:"modal-body text-center"},[r("NuxtLink",{staticClass:"nav-link text-white display-5",attrs:{to:"/",exact:""}},[t._v("Home")]),t._v(" "),r("NuxtLink",{staticClass:"nav-link text-white display-5",attrs:{to:"/blog"}},[t._v("Blog")]),t._v(" "),r("NuxtLink",{staticClass:"nav-link text-white display-5",attrs:{to:"/art"}},[t._v("Art")])],1)])])])])}),[],!1,null,"19267f12",null);e.a=component.exports},176:function(t,e,n){t.exports=n.p+"img/og-default.b916e02.jpg"},177:function(t,e,n){"use strict";var r=n(176),o={props:{title:{type:String,required:!0},description:{type:String,required:!0},image:{type:String,default:"https://michaelhalstead.com"+n.n(r).a}},head:function(){var title="Home"!==this.title?this.title+" | Michael Halstead":"Michael Halstead";return{title:title,meta:[{hid:"twitter:title",name:"twitter:title",content:title},{hid:"twitter:description",name:"twitter:description",content:this.description},{hid:"twitter:image",name:"twitter:image",content:this.image},{hid:"twitter:image:alt",name:"twitter:image:alt",content:title},{hid:"og:title",property:"og:title",content:title},{hid:"og:description",property:"og:description",content:this.description},{hid:"og:image",property:"og:image",content:this.image},{hid:"og:image:secure_url",property:"og:image:secure_url",content:this.image},{hid:"og:image:alt",property:"og:image:alt",content:title}]}}},l=n(29),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;t._self._c;return t._e()}),[],!1,null,null,null);e.a=component.exports},184:function(t,e,n){},185:function(t,e,n){},186:function(t,e,n){},187:function(t,e,n){},196:function(t,e,n){"use strict";n(184)},197:function(t,e,n){"use strict";n(185)},198:function(t,e,n){"use strict";n(186)},199:function(t,e,n){t.exports=n.p+"img/absolutely-remarkable-thing.3458bf6.jpg"},200:function(t,e,n){t.exports=n.p+"img/ruthless-elimination.2fe8959.jpg"},201:function(t,e,n){t.exports=n.p+"img/chamber-of-secrets.f33a2ef.jpg"},202:function(t,e,n){"use strict";n(187)},203:function(t,e,n){"use strict";n.r(e);var r,o=n(171),l=n(2),c=(n(30),n(88)),d=n(87),m=n(177),h=n(174),v={data:function(){return{textArray:["developer","writer","Christian","cook","math geek","dog lover","beer nerd","coffee lover","human"],typingDelay:200,erasingDelay:100,newTextDelay:2e3,textArrayIndex:0,charIndex:0,cursorSpan:"",scrollY:0}},methods:{type:function(){var t=this.$refs.cursorSpan,e=this.$refs.typedTextSpan;this.charIndex<this.textArray[this.textArrayIndex].length?(t.classList.contains("typing")||t.classList.add("typing"),e.textContent+=this.textArray[this.textArrayIndex].charAt(this.charIndex),this.charIndex++,setTimeout(this.type,this.typingDelay)):(t.classList.remove("typing"),setTimeout(this.erase,this.newTextDelay))},erase:function(){var t=this.$refs.cursorSpan,e=this.$refs.typedTextSpan;this.charIndex>0?(t.classList.contains("typing")||t.classList.add("typing"),e.textContent=this.textArray[this.textArrayIndex].substring(0,this.charIndex-1),this.charIndex--,setTimeout(this.erase,this.erasingDelay)):(t.classList.remove("typing"),this.textArrayIndex++,this.textArrayIndex>=this.textArray.length&&(this.textArrayIndex=0),setTimeout(this.type,this.typingDelay+1100))},setOffset:function(){var t=-.1*window.pageYOffset;if(t<160){var e="".concat(t,"px");this.$refs.header.style.backgroundPositionY=e}}},mounted:function(){this.type(),window.addEventListener("scroll",this.setOffset)},destroyed:function(){window.removeEventListener("scroll",this.setOffset)}},f=(n(196),n(29)),y=Object(f.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{ref:"header",staticClass:"pt-5"},[n("div",{staticClass:"container text-center py-5 d-flex align-items-center justify-content-center"},[n("h1",{staticClass:"display-1 mb-1 font-weight-normal"},[t._v("\n      I'm a "),n("span",{ref:"typedTextSpan",staticClass:"typed-text"}),n("span",{ref:"cursorSpan",staticClass:"cursor"},[t._v(" ")])])]),t._v(" "),n("div",{staticClass:"icon-scroll"})])}),[],!1,null,"20e3393d",null).exports,x={props:{data:{type:Array,required:!0}},methods:{formatDate:function(t){return new Intl.DateTimeFormat("default",{year:"numeric",month:"short",day:"numeric"}).format(new Date(t))}}},w=(n(197),Object(f.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"pb-1"},[n("div",{staticClass:"container py-5"},[n("div",{staticClass:"d-flex justify-content-between align-items-center mb-3 flex-wrap"},[n("h1",{staticClass:"font-weight-normal text-center display-5"},[t._v("Recent Posts")]),t._v(" "),n("p",{staticClass:"mb-0 small"},[n("NuxtLink",{staticClass:"text-dark",staticStyle:{"text-decoration":"none"},attrs:{to:"/blog"}},[t._v("See All 🠒\n        ")])],1)]),t._v(" "),n("div",{staticClass:"row"},t._l(t.data,(function(e){return n("NuxtLink",{key:e.slug,staticClass:"col-12 col-sm-4 mb-3",attrs:{to:{name:"blog-category-slug",params:{category:e.category.slug,slug:e.slug}}}},[n("div",{staticClass:"post-card",style:"--background: url("+(e.featuredImage?e.featuredImage.url:"https://via.placeholder.com/1920x800?text="+e.title)+")"},[n("span",{staticClass:"badge bg-dark",domProps:{textContent:t._s(e.category.title)}}),t._v(" "),n("div",{staticClass:"content text-white"},[n("p",{staticClass:"h4 mb-0 font-weight-bold",domProps:{textContent:t._s(e.title)}}),t._v(" "),n("small",{domProps:{textContent:t._s(t.formatDate(e.date))}})])])])})),1)])])}),[],!1,null,"73e34cdc",null).exports),_=(n(198),Object(f.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"bg-light py-5"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"mb-5 text-center display-5 font-weight-normal"},[t._v("About Me")]),t._v(" "),n("h4",[t._v("I'm a developer living in the great state of Washington.")]),t._v(" "),n("p",[t._v("\n      In a past life, I attended university and got my Bachelor's in\n      Elementary Education. After spending some time teaching in a variety of\n      grade levels and schools as a sub, I decided to try something entirely\n      different and made the leap into Digital Analytics and Full Stack Web\n      Development - starting my own company, Redmane Digital.\n    ")]),t._v(" "),n("h4",{staticClass:"mt-5 mt-md-4"},[t._v("I've got many different hobbies.")]),t._v(" "),n("p",[t._v("\n      Code and technology are a given, but I also enjoy finding new craft\n      breweries and craft beers, traveling to new places, dabbling in music\n      production, writing, and learning new things - no matter what the\n      subject. My 4 year old mixed-breed pup, Harley, is my ever-ready\n      adventure buddy. She's basically the best.\n    ")]),t._v(" "),n("div",{staticClass:"row gx-5 mt-5"},[n("div",{staticClass:"col-12 col-md-4"},[n("h4",{staticClass:"mb-3"},[t._v("I'm a Christian.")]),t._v(" "),n("p",[t._v("\n          I was raised in the church, attending services each Sunday where my\n          grandfather was pastor.\n        ")]),t._v(" "),n("p",[t._v("\n          Though my faith was strong, high school brought about doubt around\n          what and how I believed. After going to college and having the\n          opportunity to explore the Bible and my faith, I solidified my\n          understanding of God, the Bible, and his free gift of grace to all\n          who are willing to receive it.\n        ")])]),t._v(" "),n("div",{staticClass:"col-12 col-md-4 mt-4 mt-md-0"},[n("h4",{staticClass:"mb-3"},[t._v("I'm a learner.")]),t._v(" "),n("p",[t._v("\n          “The more that you read, the more things you will know. The more\n          that you learn, the more places you'll go.”\n          "),n("br"),t._v(" "),n("small",{staticClass:"text-right"},[n("em",[t._v("-Dr. Seuss")])])]),t._v(" "),n("p",[t._v("\n          I believe that you never stop moving forward until you stop\n          learning. One of my primary drives in life is to gain new knowledge\n          and to expand the knowledge I already have.\n        ")])]),t._v(" "),n("div",{staticClass:"col-12 col-md-4 mt-4 mt-md-0"},[n("h4",{staticClass:"mb-3"},[t._v("I'm a creator.")]),t._v(" "),n("p",[t._v("\n          In my life, I've found that creative output is a powerful form of\n          self-expression and introspection.\n        ")]),t._v(" "),n("p",[t._v("\n          My primary means of expression are in the form of poetry and essays,\n          as well as digital paintings and music. Each piece on here is\n          cataloged because it's a glimpse of me at any given time throughout\n          my life.\n        ")])])])])])}],!1,null,"c4f98b04",null).exports),C=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row gx-md-5 gy-4"},[r("div",{staticClass:"col-6 col-sm-6 col-md-3"},[r("img",{staticClass:"w-100",attrs:{src:n(199),alt:"An Absolutely Remarkable Thing by Hank Green"}})]),t._v(" "),r("div",{staticClass:"col-6 col-sm-6 col-md-3"},[r("img",{staticClass:"w-100",attrs:{src:n(200),alt:"The Ruthless Elimination of Hurry by John Mark Comer"}})]),t._v(" "),r("div",{staticClass:"col-6 col-sm-6 col-md-3"},[r("img",{staticClass:"w-100",attrs:{src:n(201),alt:"Harry Potter and the CHamber of Secrets by J.K. Rowling"}})]),t._v(" "),r("div",{staticClass:"col-6 col-sm-6 col-md-3"},[r("img",{staticClass:"w-100",attrs:{src:"https://images-na.ssl-images-amazon.com/images/I/81-349iYbfL.jpg",alt:"Where The Crawdads Sing cover"}})])])}],k=(n(202),Object(f.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"py-5"},[n("div",{staticClass:"container pb-3 px-5 px-md-3"},[n("div",{staticClass:"d-flex justify-content-between align-items-center mb-4 flex-wrap"},[n("h1",{staticClass:"font-weight-normal text-white text-center display-5"},[t._v("\n        Recent Reads\n      ")]),t._v(" "),n("p",{staticClass:"mb-0 small"},[n("a",{staticClass:"text-white",staticStyle:{"text-decoration":"none"},attrs:{href:"https://www.goodreads.com/user/show/17461770-michael",target:"_blank",rel:"noopener noreferrer"}},[t._v("Follow me on GoodReads\n          "),n("svg",{staticClass:"feather feather-external-link",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"#fff","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[n("path",{attrs:{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}}),t._v(" "),n("polyline",{attrs:{points:"15 3 21 3 21 9"}}),t._v(" "),n("line",{attrs:{x1:"10",y1:"14",x2:"21",y2:"3"}})])])])]),t._v(" "),t._m(0)])])}),C,!1,null,"911ec390",null).exports),I={asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$graphcms,e.next=3,n.request(Object(c.gql)(r||(r=Object(o.a)(["\n        {\n          posts(first: 3) {\n            title\n            slug\n            excerpt\n            date\n            category {\n              title\n              slug\n            }\n            featuredImage {\n              url\n            }\n          }\n        }\n      "]))));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))()},components:{Header:y,Navbar:h.a,RecentPosts:w,Fragment:d.a,SEO:m.a,About:_,CurrentlyReading:k}},L=Object(f.a)(I,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("fragment",[n("SEO",{attrs:{title:"Home",description:"The website for Michael Halstead. Web Developer and sometimes blogger living in the great state of Washington."}}),t._v(" "),n("Navbar"),t._v(" "),n("Header"),t._v(" "),n("About"),t._v(" "),n("CurrentlyReading"),t._v(" "),n("RecentPosts",{attrs:{data:t.posts}})],1)}),[],!1,null,null,null);e.default=L.exports}}]);