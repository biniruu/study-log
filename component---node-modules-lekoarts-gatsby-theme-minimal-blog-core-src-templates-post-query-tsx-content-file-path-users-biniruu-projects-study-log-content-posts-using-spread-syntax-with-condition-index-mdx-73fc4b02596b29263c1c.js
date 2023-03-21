"use strict";(self.webpackChunkstudy_log=self.webpackChunkstudy_log||[]).push([[575],{4765:function(e,t,n){n.d(t,{F:function(){return u},Z:function(){return g}});var a=n(7294),r=n(8733),l=n(795),c=n(6920),o=n(6799),i=n(8871);var m=e=>{let{post:t}=e;return null};const s=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var p=e=>{let{data:{post:t},children:n}=e;return(0,r.tZ)(c.Z,null,(0,r.tZ)(l.X6,{as:"h1",variant:"styles.h1"},t.title),(0,r.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,r.tZ)("time",null,t.date),t.tags&&(0,r.tZ)(a.Fragment,null," — ",(0,r.tZ)(o.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,r.tZ)("span",null,t.timeToRead," min read")),(0,r.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:s.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,r.tZ)(m,{post:t}))};const u=e=>{var t,n,a;let{data:{post:l}}=e;return(0,r.tZ)(i.Z,{title:l.title,description:l.description?l.description:l.excerpt,image:l.banner?null===(t=l.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(a=n.resize)||void 0===a?void 0:a.src:void 0,pathname:l.slug,canonicalUrl:l.canonicalUrl})};function g(e){let{...t}=e;return a.createElement(p,t)}},6799:function(e,t,n){var a=n(8733),r=n(7294),l=n(1883),c=n(3494),o=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:i}=(0,c.Z)();return(0,a.tZ)(r.Fragment,null,t.map(((e,t)=>(0,a.tZ)(r.Fragment,{key:e.slug},!!t&&", ",(0,a.tZ)(l.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,o.Z)("/"+i+"/"+n+"/"+e.slug)},e.name)))))}},8871:function(e,t,n){var a=n(7294),r=n(1883),l=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:c="",image:o="",children:i=null,canonicalUrl:m=""}=e;const s=(0,l.Z)(),{siteTitle:p,siteTitleAlt:u,siteUrl:g,siteDescription:d,siteImage:E,author:b,siteLanguage:h}=s,f={title:t?t+" | "+p:u,description:n||d,url:""+g+(c||""),image:""+g+(o||E)};return a.createElement(a.Fragment,null,a.createElement("html",{lang:h}),a.createElement("title",null,f.title),a.createElement("meta",{name:"description",content:f.description}),a.createElement("meta",{name:"image",content:f.image}),a.createElement("meta",{property:"og:title",content:f.title}),a.createElement("meta",{property:"og:url",content:f.url}),a.createElement("meta",{property:"og:description",content:f.description}),a.createElement("meta",{property:"og:image",content:f.image}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:image:alt",content:f.description}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:title",content:f.title}),a.createElement("meta",{name:"twitter:url",content:f.url}),a.createElement("meta",{name:"twitter:description",content:f.description}),a.createElement("meta",{name:"twitter:image",content:f.image}),a.createElement("meta",{name:"twitter:image:alt",content:f.description}),a.createElement("meta",{name:"twitter:creator",content:b}),a.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,r.withPrefix)("/favicon-32x32.png")}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,r.withPrefix)("/favicon-16x16.png")}),a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,r.withPrefix)("/apple-touch-icon.png")}),m?a.createElement("link",{rel:"canonical",href:m}):null,i)}},2376:function(e,t,n){n.r(t),n.d(t,{Head:function(){return o.F},default:function(){return i}});var a=n(7294),r=n(1151);function l(e){const t=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code"},(0,r.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.h2,null,"사건의 발단"),"\n",a.createElement(t.p,null,"조건에 따라 객체의 프로퍼티를 변경해야 하는 상황이 있었다. 둘 다 동일한 프로퍼티를 가지고 있지만, 특정 조건에서는 프로퍼티를 추가해야 했다."),"\n",a.createElement("br"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-javascript"},"const num = 1;\n\nlet obj = { apple: \"🍎\", banana: \"🍌\" };\n\nif (num > 0) {\n  obj = { ...obj, grape: \"🍇\" };\n}\n\nconst func = (obj) => console.log(obj);\nfunc(obj); // { apple: '🍎', banana: '🍌', grape: '🍇' }\n")),"\n",a.createElement("br"),"\n",a.createElement(t.p,null,a.createElement(t.code,null,"let"),"으로 변수를 만들고 재할당하는 게 영 마음에 안 든다. ",a.createElement(t.code,null,"obj")," 변수를 ",a.createElement(t.code,null,"const"),"로 선언하고 싶은데 어떻게 안 될까?"),"\n",a.createElement("br"),"\n",a.createElement(t.h2,null,"사건 해결"),"\n",a.createElement(t.p,null,"전개 구문에 조건을 붙이면 ",a.createElement(t.code,null,"const"),"를 사용할 수 있다. 이렇게 하면 ",a.createElement(t.code,null,"obj")," 변수에 다른 값을 재할당할 필요도 없다."),"\n",a.createElement("br"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-javascript"},"const num = 1;\n\nconst obj = {\n  apple: \"🍎\",\n  banana: \"🍌\",\n  ...(num > 0 && { grape: \"🍇\" }),\n};\n\nconst func = (obj) => console.log(obj);\nfunc(obj); // { apple: '🍎', banana: '🍌', grape: '🍇' }\n")),"\n",a.createElement("br"),"\n",a.createElement(t.p,null,"조건을 통과하지 못하면 전개 구문으로 추가하려는 프로퍼티는 추가되지 않는다."),"\n",a.createElement("br"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-javascript"},'const num = 1;\n\nconst obj = {\n  apple: "🍎",\n  banana: "🍌",\n  ...(num <= 0 && { grape: "🍇" }),\n};\n\nconst func = (obj) => console.log(obj);\nfunc(obj); // { apple: \'🍎\', banana: \'🍌\' }\n')))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?a.createElement(t,e,a.createElement(l,e)):l(e)},o=n(4765);function i(e){return a.createElement(o.Z,e,a.createElement(c,e))}o.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-users-biniruu-projects-study-log-content-posts-using-spread-syntax-with-condition-index-mdx-73fc4b02596b29263c1c.js.map