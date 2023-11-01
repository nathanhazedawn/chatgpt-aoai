(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[959],{3959:function(e,t,n){"use strict";n.d(t,{vn:function(){return eE},a7:function(){return ek},qI:function(){return ey},El:function(){return eo},Gp:function(){return ef},X1:function(){return tT},KM:function(){return ez},A:function(){return ep},Li:function(){return eg},gM:function(){return eO},yB:function(){return eS},N1:function(){return eb},C2:function(){return ew},sO:function(){return eC},cL:function(){return eu},$d:function(){return eT},AM:function(){return eN},Mo:function(){return ec},gX:function(){return eA},CH:function(){return em},tj:function(){return ev},l8:function(){return eh},Iw:function(){return ed},_E:function(){return ea},CJ:function(){return e_},Gi:function(){return eP},kD:function(){return t_},sZ:function(){return tU},V9:function(){return tL},ZC:function(){return tM},aC:function(){return e$},ll:function(){return eV},jS:function(){return tA},o8:function(){return tE},eW:function(){return tj},qi:function(){return tP},kP:function(){return eB},xo:function(){return eJ},zq:function(){return eK},QS:function(){return eD},aF:function(){return eR},r0:function(){return es},NA:function(){return eU},ns:function(){return ej}}),n(8820);let r=e=>"undefined"!=typeof atob&&"function"==typeof atob?atob(e):void 0!==n.g&&n.g.Buffer?new n.g.Buffer(e,"base64").toString():e,i="pk_live_";function o(e){if(!s(e=e||""))return null;let t=e.startsWith(i)?"production":"development",n=r(e.split("_")[2]);return n.endsWith("$")?{instanceType:t,frontendApi:n=n.slice(0,-1)}:null}function s(e){e=e||"";let t=e.startsWith(i)||e.startsWith("pk_test_"),n=r(e.split("_")[2]||"").endsWith("$");return t&&n}var a,l,u,c,d,h=n(6006);let p="Clerk: Child of WithClerk must be a function.",f=e=>`Clerk: You've passed multiple children components to <${e}/>. You can only pass a single child component or text.`,g="Unsupported usage of domain or proxyUrl. The usage of domain or proxyUrl as function is not supported in non-browser environments.",m=Object.freeze({InvalidFrontendApiErrorMessage:"The frontendApi passed to Clerk is invalid. You can get your Frontend API key at https://dashboard.clerk.com/last-active?path=api-keys. (key={{key}})",InvalidProxyUrlErrorMessage:"The proxyUrl passed to Clerk is invalid. The expected value for proxyUrl is an absolute URL or a relative path with a leading '/'. (key={{url}})",InvalidPublishableKeyErrorMessage:"The publishableKey passed to Clerk is invalid. You can get your Publishable key at https://dashboard.clerk.com/last-active?path=api-keys. (key={{key}})",MissingPublishableKeyErrorMessage:"Missing publishableKey. You can get your key at https://dashboard.clerk.com/last-active?path=api-keys."}),v=function({packageName:e,customMessages:t}){let n=e,r={...m,...t};function i(e,t){if(!t)return`${n}: ${e}`;let r=e,i=e.matchAll(/{{([a-zA-Z0-9-_]+)}}/g);for(let e of i){let n=(t[e[1]]||"").toString();r=r.replace(`{{${e[1]}}}`,n)}return`${n}: ${r}`}return{setPackageName({packageName:e}){return"string"==typeof e&&(n=e),this},setMessages({customMessages:e}){return Object.assign(r,e||{}),this},throwInvalidPublishableKeyError(e){throw Error(i(r.InvalidPublishableKeyErrorMessage,e))},throwInvalidFrontendApiError(e){throw Error(i(r.InvalidFrontendApiErrorMessage,e))},throwInvalidProxyUrl(e){throw Error(i(r.InvalidProxyUrlErrorMessage,e))},throwMissingPublishableKeyError(){throw Error(i(r.MissingPublishableKeyErrorMessage))}}}({packageName:"@clerk/react"}),k=new Map;var y=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)},b=(e,t,n)=>(y(e,t,"read from private field"),n?n.call(e):t.get(e)),w=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},C=(e,t,n,r)=>(y(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n);let S=()=>"undefined"!=typeof window;function O(e,t,n){return"function"==typeof e?e(t):void 0!==e?e:void 0!==n?n:void 0}async function E(e="",t){let{async:n,defer:r,beforeLoad:i,crossOrigin:o}=t||{};return new Promise((t,s)=>{e||s("loadScript cannot be called without a src"),document&&document.body||s("loadScript cannot be called when document does not exist");let a=document.createElement("script");o&&a.setAttribute("crossorigin",o),a.async=n||!1,a.defer=r||!1,a.addEventListener("load",()=>{a.remove(),t(a)}),a.addEventListener("error",()=>{a.remove(),s()}),a.src=e,i?.(a),document.body.appendChild(a)})}function z(e){return e.startsWith("/")}let{isDevOrStagingUrl:j}=function(){let e=[".lcl.dev",".stg.dev",".lclstage.dev",".stgstage.dev",".dev.lclclerk.com",".stg.lclclerk.com",".accounts.lclclerk.com","accountsstage.dev","accounts.dev"],t=new Map;return{isDevOrStagingUrl:n=>{if(!n)return!1;let r="string"==typeof n?n:n.hostname,i=t.get(r);return void 0===i&&(i=e.some(e=>r.endsWith(e)),t.set(r,i)),i}}}(),P=async e=>{let{frontendApi:t,publishableKey:n}=e;return n||t||v.throwMissingPublishableKeyError(),E(U(e),{async:!0,crossOrigin:"anonymous",beforeLoad:_(e)}).catch(()=>{throw Error("Clerk: Failed to load Clerk")})},U=e=>{let{clerkJSUrl:t,clerkJSVariant:n,clerkJSVersion:r,proxyUrl:i,domain:s,publishableKey:a,frontendApi:l}=e;if(t)return t;let u="";u=i&&(!i||/^http(s)?:\/\//.test(i||"")||z(i))?(i?z(i)?new URL(i,window.location.origin).toString():i:"").replace(/http(s)?:\/\//,""):s&&!j(o(a)?.frontendApi||l||"")?function(e){let t;if(!e)return"";if(e.match(/^(clerk\.)+\w*$/))t=/(clerk\.)*(?=clerk\.)/;else{if(e.match(/\.clerk.accounts/))return e;t=/^(clerk\.)*/gi}let n=e.replace(t,"");return`clerk.${n}`}(s):o(a)?.frontendApi||l||"";let c=n?`${n.replace(/\.+$/,"")}.`:"",d=r||M("4.23.2")||I("4.23.2");return`https://${u}/npm/@clerk/clerk-js@${d}/dist/clerk.${c}browser.js`},_=e=>t=>{let{publishableKey:n,frontendApi:r,proxyUrl:i,domain:o}=e;n?t.setAttribute("data-clerk-publishable-key",n):r&&t.setAttribute("data-clerk-frontend-api",r),i&&t.setAttribute("data-clerk-proxy-url",i),o&&t.setAttribute("data-clerk-domain",o)},M=e=>e.match(/-(.*)\./)?.[1],I=e=>e.split(".")[0],L=class{constructor(e){this.clerkjs=null,this.preopenSignIn=null,this.preopenSignUp=null,this.preopenUserProfile=null,this.preopenOrganizationProfile=null,this.preopenCreateOrganization=null,this.premountSignInNodes=new Map,this.premountSignUpNodes=new Map,this.premountUserProfileNodes=new Map,this.premountUserButtonNodes=new Map,this.premountOrganizationProfileNodes=new Map,this.premountCreateOrganizationNodes=new Map,this.premountOrganizationSwitcherNodes=new Map,this.premountMethodCalls=new Map,this.loadedListeners=[],w(this,l,!1),w(this,u,void 0),w(this,c,void 0),this.addOnLoaded=e=>{this.loadedListeners.push(e)},this.emitLoaded=()=>{this.loadedListeners.forEach(e=>e()),this.loadedListeners=[]},this.hydrateClerkJS=e=>{if(!e)throw Error("Failed to hydrate latest Clerk JS");return this.clerkjs=e,this.premountMethodCalls.forEach(e=>e()),null!==this.preopenSignIn&&e.openSignIn(this.preopenSignIn),null!==this.preopenSignUp&&e.openSignUp(this.preopenSignUp),null!==this.preopenUserProfile&&e.openUserProfile(this.preopenUserProfile),null!==this.preopenOrganizationProfile&&e.openOrganizationProfile(this.preopenOrganizationProfile),null!==this.preopenCreateOrganization&&e.openCreateOrganization(this.preopenCreateOrganization),this.premountSignInNodes.forEach((t,n)=>{e.mountSignIn(n,t)}),this.premountSignUpNodes.forEach((t,n)=>{e.mountSignUp(n,t)}),this.premountUserProfileNodes.forEach((t,n)=>{e.mountUserProfile(n,t)}),this.premountUserButtonNodes.forEach((t,n)=>{e.mountUserButton(n,t)}),C(this,l,!0),this.emitLoaded(),this.clerkjs},this.__unstable__updateProps=e=>{this.clerkjs&&"__unstable__updateProps"in this.clerkjs&&this.clerkjs.__unstable__updateProps(e)},this.setActive=({session:e,organization:t,beforeEmit:n})=>this.clerkjs?this.clerkjs.setActive({session:e,organization:t,beforeEmit:n}):Promise.reject(),this.setSession=(e,t)=>this.setActive({session:e,beforeEmit:t}),this.openSignIn=e=>{this.clerkjs&&b(this,l)?this.clerkjs.openSignIn(e):this.preopenSignIn=e},this.closeSignIn=()=>{this.clerkjs&&b(this,l)?this.clerkjs.closeSignIn():this.preopenSignIn=null},this.openUserProfile=e=>{this.clerkjs&&b(this,l)?this.clerkjs.openUserProfile(e):this.preopenUserProfile=e},this.closeUserProfile=()=>{this.clerkjs&&b(this,l)?this.clerkjs.closeUserProfile():this.preopenUserProfile=null},this.openOrganizationProfile=e=>{this.clerkjs&&b(this,l)?this.clerkjs.openOrganizationProfile(e):this.preopenOrganizationProfile=e},this.closeOrganizationProfile=()=>{this.clerkjs&&b(this,l)?this.clerkjs.closeOrganizationProfile():this.preopenOrganizationProfile=null},this.openCreateOrganization=e=>{this.clerkjs&&b(this,l)?this.clerkjs.openCreateOrganization(e):this.preopenCreateOrganization=e},this.closeCreateOrganization=()=>{this.clerkjs&&b(this,l)?this.clerkjs.closeCreateOrganization():this.preopenCreateOrganization=null},this.openSignUp=e=>{this.clerkjs&&b(this,l)?this.clerkjs.openSignUp(e):this.preopenSignUp=e},this.closeSignUp=()=>{this.clerkjs&&b(this,l)?this.clerkjs.closeSignUp():this.preopenSignUp=null},this.mountSignIn=(e,t)=>{this.clerkjs&&b(this,l)?this.clerkjs.mountSignIn(e,t):this.premountSignInNodes.set(e,t)},this.unmountSignIn=e=>{this.clerkjs&&b(this,l)?this.clerkjs.unmountSignIn(e):this.premountSignInNodes.delete(e)},this.mountSignUp=(e,t)=>{this.clerkjs&&b(this,l)?this.clerkjs.mountSignUp(e,t):this.premountSignUpNodes.set(e,t)},this.unmountSignUp=e=>{this.clerkjs&&b(this,l)?this.clerkjs.unmountSignUp(e):this.premountSignUpNodes.delete(e)},this.mountUserProfile=(e,t)=>{this.clerkjs&&b(this,l)?this.clerkjs.mountUserProfile(e,t):this.premountUserProfileNodes.set(e,t)},this.unmountUserProfile=e=>{this.clerkjs&&b(this,l)?this.clerkjs.unmountUserProfile(e):this.premountUserProfileNodes.delete(e)},this.mountOrganizationProfile=(e,t)=>{this.clerkjs&&b(this,l)?this.clerkjs.mountOrganizationProfile(e,t):this.premountOrganizationProfileNodes.set(e,t)},this.unmountOrganizationProfile=e=>{this.clerkjs&&b(this,l)?this.clerkjs.unmountOrganizationProfile(e):this.premountOrganizationProfileNodes.delete(e)},this.mountCreateOrganization=(e,t)=>{this.clerkjs&&b(this,l)?this.clerkjs.mountCreateOrganization(e,t):this.premountCreateOrganizationNodes.set(e,t)},this.unmountCreateOrganization=e=>{this.clerkjs&&b(this,l)?this.clerkjs.unmountCreateOrganization(e):this.premountCreateOrganizationNodes.delete(e)},this.mountOrganizationSwitcher=(e,t)=>{this.clerkjs&&b(this,l)?this.clerkjs.mountOrganizationSwitcher(e,t):this.premountOrganizationSwitcherNodes.set(e,t)},this.unmountOrganizationSwitcher=e=>{this.clerkjs&&b(this,l)?this.clerkjs.unmountOrganizationSwitcher(e):this.premountOrganizationSwitcherNodes.delete(e)},this.mountUserButton=(e,t)=>{this.clerkjs&&b(this,l)?this.clerkjs.mountUserButton(e,t):this.premountUserButtonNodes.set(e,t)},this.unmountUserButton=e=>{this.clerkjs&&b(this,l)?this.clerkjs.unmountUserButton(e):this.premountUserButtonNodes.delete(e)},this.addListener=e=>{let t=()=>this.clerkjs?.addListener(e);return this.clerkjs?t():(this.premountMethodCalls.set("addListener",t),()=>this.premountMethodCalls.delete("addListener"))},this.navigate=e=>{let t=()=>this.clerkjs?.navigate(e);this.clerkjs&&b(this,l)?t():this.premountMethodCalls.set("navigate",t)},this.redirectWithAuth=(...e)=>{let t=()=>this.clerkjs?.redirectWithAuth(...e);this.clerkjs&&b(this,l)?t():this.premountMethodCalls.set("redirectWithAuth",t)},this.redirectToSignIn=e=>{let t=()=>this.clerkjs?.redirectToSignIn(e);this.clerkjs&&b(this,l)?t():this.premountMethodCalls.set("redirectToSignIn",t)},this.redirectToSignUp=e=>{let t=()=>this.clerkjs?.redirectToSignUp(e);this.clerkjs&&b(this,l)?t():this.premountMethodCalls.set("redirectToSignUp",t)},this.redirectToUserProfile=()=>{let e=()=>this.clerkjs?.redirectToUserProfile();this.clerkjs&&b(this,l)?e():this.premountMethodCalls.set("redirectToUserProfile",e)},this.redirectToHome=()=>{let e=()=>this.clerkjs?.redirectToHome();this.clerkjs&&b(this,l)?e():this.premountMethodCalls.set("redirectToHome",e)},this.redirectToOrganizationProfile=()=>{let e=()=>this.clerkjs?.redirectToOrganizationProfile();this.clerkjs&&b(this,l)?e():this.premountMethodCalls.set("redirectToOrganizationProfile",e)},this.redirectToCreateOrganization=()=>{let e=()=>this.clerkjs?.redirectToCreateOrganization();this.clerkjs&&b(this,l)?e():this.premountMethodCalls.set("redirectToCreateOrganization",e)},this.handleRedirectCallback=e=>{let t=()=>this.clerkjs?.handleRedirectCallback(e);this.clerkjs&&b(this,l)?t()?.catch(()=>{}):this.premountMethodCalls.set("handleRedirectCallback",t)},this.handleMagicLinkVerification=async e=>{let t=()=>this.clerkjs?.handleMagicLinkVerification(e);if(this.clerkjs&&b(this,l))return t();this.premountMethodCalls.set("handleMagicLinkVerification",t)},this.authenticateWithMetamask=async e=>{let t=()=>this.clerkjs?.authenticateWithMetamask(e);if(this.clerkjs&&b(this,l))return t();this.premountMethodCalls.set("authenticateWithMetamask",t)},this.createOrganization=async e=>{let t=()=>this.clerkjs?.createOrganization(e);if(this.clerkjs&&b(this,l))return t();this.premountMethodCalls.set("createOrganization",t)},this.getOrganizationMemberships=async()=>{let e=()=>this.clerkjs?.getOrganizationMemberships();if(this.clerkjs&&b(this,l))return e();this.premountMethodCalls.set("getOrganizationMemberships",e)},this.getOrganization=async e=>{let t=()=>this.clerkjs?.getOrganization(e);if(this.clerkjs&&b(this,l))return t();this.premountMethodCalls.set("getOrganization",t)},this.signOut=async(e,t)=>{let n=()=>this.clerkjs?.signOut(e,t);if(this.clerkjs&&b(this,l))return n();this.premountMethodCalls.set("signOut",n)};let{Clerk:t=null,frontendApi:n,publishableKey:r}=e||{};this.frontendApi=n,this.publishableKey=r,C(this,c,e?.proxyUrl),C(this,u,e?.domain),this.options=e,this.Clerk=t,this.mode=S()?"browser":"server",this.loadClerkJS()}get loaded(){return b(this,l)}static getOrCreateInstance(e){return S()&&b(this,d)||C(this,d,new L(e)),b(this,d)}get domain(){if("undefined"!=typeof window&&window.location)return O(b(this,u),new URL(window.location.href),"");if("function"==typeof b(this,u))throw Error(g);return b(this,u)||""}get proxyUrl(){if("undefined"!=typeof window&&window.location)return O(b(this,c),new URL(window.location.href),"");if("function"==typeof b(this,c))throw Error(g);return b(this,c)||""}async loadClerkJS(){if(!("browser"!==this.mode||b(this,l))){"undefined"!=typeof window&&(window.__clerk_frontend_api=this.frontendApi,window.__clerk_publishable_key=this.publishableKey,window.__clerk_proxy_url=this.proxyUrl,window.__clerk_domain=this.domain);try{if(this.Clerk){var e;let t;(e=this.Clerk,"function"==typeof e)?(t=new this.Clerk(this.publishableKey||this.frontendApi||"",{proxyUrl:this.proxyUrl,domain:this.domain}),await t.load(this.options)):(t=this.Clerk).isReady()||await t.load(this.options),n.g.Clerk=t}else{if(n.g.Clerk||await P({...this.options,frontendApi:this.frontendApi,publishableKey:this.publishableKey,proxyUrl:this.proxyUrl,domain:this.domain}),!n.g.Clerk)throw Error("Failed to download latest ClerkJS. Contact support@clerk.com.");await n.g.Clerk.load(this.options)}if(n.g.Clerk?.loaded||n.g.Clerk?.isReady())return this.hydrateClerkJS(n.g.Clerk);return}catch(e){console.error(e.stack||e.message||e);return}}}get version(){return this.clerkjs?.version}get client(){return this.clerkjs?this.clerkjs.client:void 0}get session(){return this.clerkjs?this.clerkjs.session:void 0}get user(){return this.clerkjs?this.clerkjs.user:void 0}get organization(){return this.clerkjs?this.clerkjs.organization:void 0}get __unstable__environment(){return this.clerkjs?this.clerkjs.__unstable__environment:void 0}__unstable__setEnvironment(...e){this.clerkjs&&"__unstable__setEnvironment"in this.clerkjs&&this.clerkjs.__unstable__setEnvironment(e)}};l=new WeakMap,u=new WeakMap,c=new WeakMap,w(L,d=new WeakMap,void 0);let T=(e,t,n)=>!e&&n?A(n):N(t),A=e=>{let t=e.userId,n=e.user,r=e.sessionId,i=e.session,o=e.organization,s=e.orgId,a=e.orgRole,l=e.orgSlug,u=e.actor;return{userId:t,user:n,sessionId:r,session:i,organization:o,orgId:s,orgRole:a,orgSlug:l,actor:u,lastOrganizationInvitation:null,lastOrganizationMember:null}},N=e=>{let t=e.user?e.user.id:e.user,n=e.user,r=e.session?e.session.id:e.session,i=e.session,o=i?.actor,s=e.organization,a=e.organization?e.organization.id:e.organization,l=s?.slug,u=s?n?.organizationMemberships?.find(e=>e.organization.id===a):s,c=u?u.role:u,d=e.lastOrganizationInvitation,h=e.lastOrganizationMember;return{userId:t,user:n,sessionId:r,session:i,organization:s,orgId:a,orgRole:c,orgSlug:l,actor:o,lastOrganizationInvitation:d,lastOrganizationMember:h}};function R(e,t){if(!e)throw"string"==typeof t?Error(t):Error(`${t.displayName} not found`)}let x=(e,t)=>{let{assertCtxFn:n=R}=t||{},r=h.createContext(void 0);return r.displayName=e,[r,()=>{let t=h.useContext(r);return n(t,`${e} not found`),t.value},()=>{let e=h.useContext(r);return e?e.value:{}}]},[W,F]=x("AuthContext"),[$,B]=x("ClerkInstanceContext"),[V,K]=x("UserContext"),[D,J]=x("ClientContext"),[Y,G]=x("SessionContext"),[q,H]=x("OrganizationContext"),[Z,X]=[$,B];function Q(e){let{isomorphicClerkOptions:t,initialState:n,children:r}=e,{isomorphicClerk:i,loaded:o}=ee(t),[s,a]=h.useState({client:i.client,session:i.session,user:i.user,organization:i.organization,lastOrganizationInvitation:null,lastOrganizationMember:null});h.useEffect(()=>i.addListener(e=>a({...e})),[]);let l=T(o,s,n),u=h.useMemo(()=>({value:i}),[o]),c=h.useMemo(()=>({value:s.client}),[s.client]),{sessionId:d,session:p,userId:f,user:g,orgId:m,actor:v,lastOrganizationInvitation:k,lastOrganizationMember:y,organization:b,orgRole:w,orgSlug:C}=l,S=h.useMemo(()=>({value:{sessionId:d,userId:f,actor:v,orgId:m,orgRole:w,orgSlug:C}}),[d,f,v,m,w,C]),O=h.useMemo(()=>({value:g}),[f,g]),E=h.useMemo(()=>({value:p}),[d,p]),z=h.useMemo(()=>({value:{organization:b,lastOrganizationInvitation:k,lastOrganizationMember:y}}),[m,b,k,y]);return h.createElement(Z.Provider,{value:u},h.createElement(D.Provider,{value:c},h.createElement(Y.Provider,{value:E},h.createElement(q.Provider,{value:z},h.createElement(W.Provider,{value:S},h.createElement(V.Provider,{value:O},r))))))}let ee=e=>{let[t,n]=h.useState(!1),r=h.useMemo(()=>L.getOrCreateInstance(e),[]);return h.useEffect(()=>{r.__unstable__updateProps({appearance:e.appearance})},[e.appearance]),h.useEffect(()=>{r.__unstable__updateProps({options:e})},[e.localization]),h.useEffect(()=>{r.addOnLoaded(()=>n(!0))},[]),{isomorphicClerk:r,loaded:t}},et=Object.freeze({noGuarantees:Object.freeze({guaranteedLoaded:!1}),guaranteedLoaded:Object.freeze({guaranteedLoaded:!0})}),en=h.createContext(void 0);en.displayName="StructureContext";let er=()=>{let e=h.useContext(en);return!function(e){if(!e)throw Error("Clerk: You must wrap your application in a <ClerkProvider> component.")}(e),e},ei=({children:e})=>{let t=er();return t.guaranteedLoaded?h.createElement(h.Fragment,null,e):h.createElement(en.Provider,{value:et.guaranteedLoaded},e)};!function(e){v.setMessages(e).setPackageName(e)}({packageName:"@clerk/clerk-react"});let eo=function(e,t,n){let r=e.displayName||e.name||t||"Component",i=r=>(!function(e,t,n=1){h.useEffect(()=>{let r=k.get(e)||0;if(r==n)throw Error(t);return k.set(e,r+1),()=>{k.set(e,(k.get(e)||1)-1)}},[])}(t,n),h.createElement(e,{...r}));return i.displayName=`withMaxAllowedInstancesGuard(${r})`,i}(function(e){let{initialState:t,children:n,...r}=e,{frontendApi:i="",publishableKey:o="",Clerk:a}=r;return!a&&(o||i?o&&!s(o)?v.throwInvalidPublishableKeyError({key:o}):o||!i||(i||"").startsWith("clerk.")||v.throwInvalidFrontendApiError({key:i}):v.throwMissingPublishableKeyError()),h.createElement(en.Provider,{value:et.noGuarantees},h.createElement(Q,{initialState:t,isomorphicClerkOptions:r},n))},"ClerkProvider","Clerk: You've added multiple <ClerkProvider> components in your React component tree. Wrap your components in a single <ClerkProvider>.");eo.displayName="ClerkProvider";let es=(e,t)=>{t=t||e.displayName||e.name||"Component",e.displayName=t;let n=t=>{let n=X();return n.loaded?h.createElement(ei,null,h.createElement(e,{...t,clerk:n})):null};return n.displayName=`withClerk(${t})`,n},ea=({children:e})=>{let t=X();if("function"!=typeof e)throw Error(p);return t.loaded?h.createElement(ei,null,e(t)):null};class el extends h.PureComponent{constructor(){super(...arguments),this.portalRef=h.createRef()}componentDidUpdate(e){e.props.appearance!==this.props.props.appearance&&this.props.updateProps({node:this.portalRef.current,props:this.props.props})}componentDidMount(){this.portalRef.current&&this.props.mount(this.portalRef.current,this.props.props)}componentWillUnmount(){this.portalRef.current&&this.props.unmount(this.portalRef.current)}render(){return h.createElement("div",{ref:this.portalRef})}}let eu=es(({clerk:e,...t})=>h.createElement(el,{mount:e.mountSignIn,unmount:e.unmountSignIn,updateProps:e.__unstable__updateProps,props:t}),"SignIn"),ec=es(({clerk:e,...t})=>h.createElement(el,{mount:e.mountSignUp,unmount:e.unmountSignUp,updateProps:e.__unstable__updateProps,props:t}),"SignUp"),ed=es(({clerk:e,...t})=>h.createElement(el,{mount:e.mountUserProfile,unmount:e.unmountUserProfile,updateProps:e.__unstable__updateProps,props:t}),"UserProfile"),eh=es(({clerk:e,...t})=>h.createElement(el,{mount:e.mountUserButton,unmount:e.unmountUserButton,updateProps:e.__unstable__updateProps,props:t}),"UserButton"),ep=es(({clerk:e,...t})=>h.createElement(el,{mount:e.mountOrganizationProfile,unmount:e.unmountOrganizationProfile,updateProps:e.__unstable__updateProps,props:t}),"OrganizationProfile"),ef=es(({clerk:e,...t})=>h.createElement(el,{mount:e.mountCreateOrganization,unmount:e.unmountCreateOrganization,updateProps:e.__unstable__updateProps,props:t}),"CreateOrganization"),eg=es(({clerk:e,...t})=>h.createElement(el,{mount:e.mountOrganizationSwitcher,unmount:e.unmountOrganizationSwitcher,updateProps:e.__unstable__updateProps,props:t}),"OrganizationSwitcher"),em=({children:e})=>{let{userId:t}=F();return t?h.createElement(h.Fragment,null,e):null},ev=({children:e})=>{let{userId:t}=F();return null===t?h.createElement(h.Fragment,null,e):null},ek=({children:e})=>{let t=X();return t.loaded?h.createElement(ei,null,e):null},ey=({children:e})=>{let t=X();return t.loaded?null:h.createElement(h.Fragment,null,e)},eb=es(({clerk:e,...t})=>{let{client:n,session:r}=e,{__unstable__environment:i}=e,o=n.activeSessions&&n.activeSessions.length>0;return h.useEffect(()=>{if(null===r&&o&&i){let{afterSignOutOneUrl:t}=i.displayConfig;e.navigate(t)}else e.redirectToSignIn(t)},[]),null},"RedirectToSignIn"),ew=es(({clerk:e,...t})=>(h.useEffect(()=>{e.redirectToSignUp(t)},[]),null),"RedirectToSignUp"),eC=es(({clerk:e})=>(h.useEffect(()=>{e.redirectToUserProfile()},[]),null),"RedirectToUserProfile"),eS=es(({clerk:e})=>(h.useEffect(()=>{e.redirectToOrganizationProfile()},[]),null),"RedirectToOrganizationProfile"),eO=es(({clerk:e})=>(h.useEffect(()=>{e.redirectToCreateOrganization()},[]),null),"RedirectToCreateOrganization"),eE=es(({clerk:e,...t})=>(h.useEffect(()=>{e.handleRedirectCallback(t)},[]),null),"AuthenticateWithRedirectCallback"),ez=({children:e})=>{let t=G();return h.createElement(h.Fragment,{key:t?t.id:"no-users"},e)},ej=(e,t)=>{t=t||e.displayName||e.name||"Component",e.displayName=t;let n=t=>{let n=K();return n?h.createElement(e,{...t,user:n}):null};return n.displayName=`withUser(${t})`,n},eP=({children:e})=>{let t=K();if("function"!=typeof e)throw Error(p);return t?h.createElement(h.Fragment,null,e(t)):null},eU=(e,t)=>{t=t||e.displayName||e.name||"Component",e.displayName=t;let n=t=>{let n=G();return n?h.createElement(e,{...t,session:n}):null};return n.displayName=`withSession(${t})`,n},e_=({children:e})=>{let t=G();if("function"!=typeof e)throw Error(p);return t?h.createElement(h.Fragment,null,e(t)):null},eM=e=>t=>{try{return h.Children.only(e)}catch(e){throw Error(f(t))}},eI=(e,t)=>(e||(e=t),"string"==typeof e&&(e=h.createElement("button",null,e)),e),eL=e=>(...t)=>{if(e&&"function"==typeof e)return e(...t)},eT=es(({clerk:e,children:t,...n})=>{let{afterSignInUrl:r,afterSignUpUrl:i,redirectUrl:o,mode:s,...a}=n;t=eI(t,"Sign in");let l=eM(t)("SignInButton"),u=()=>{let t={afterSignInUrl:r,afterSignUpUrl:i,redirectUrl:o};return"modal"===s?e.openSignIn(t):e.redirectToSignIn(t)},c=async e=>(await eL(l.props.onClick)(e),u()),d={...a,onClick:c};return h.cloneElement(l,d)},"SignInButton"),eA=es(({clerk:e,children:t,...n})=>{let{afterSignInUrl:r,afterSignUpUrl:i,redirectUrl:o,mode:s,unsafeMetadata:a,...l}=n;t=eI(t,"Sign up");let u=eM(t)("SignUpButton"),c=()=>{let t={afterSignInUrl:r,afterSignUpUrl:i,redirectUrl:o,unsafeMetadata:a};return"modal"===s?e.openSignUp(t):e.redirectToSignUp(t)},d=async e=>(await eL(u.props.onClick)(e),c()),p={...l,onClick:d};return h.cloneElement(u,p)},"SignUpButton"),eN=es(({clerk:e,children:t,...n})=>{let{signOutCallback:r,signOutOptions:i,...o}=n;t=eI(t,"Sign out");let s=eM(t)("SignOutButton"),a=()=>e.signOut(r,i),l=async e=>(await eL(s.props.onClick)(e),a()),u={...o,onClick:l};return h.cloneElement(s,u)},"SignOutButton");function eR(){let e=K();return void 0===e?{isLoaded:!1,isSignedIn:void 0,user:void 0}:null===e?{isLoaded:!0,isSignedIn:!1,user:null}:{isLoaded:!0,isSignedIn:!0,user:e}}let ex=e=>new Promise(t=>{e.loaded&&t(),e.addOnLoaded(t)}),eW=e=>async t=>(await ex(e),e.session)?e.session.getToken(t):null,eF=e=>async(...t)=>(await ex(e),e.signOut(...t)),e$=()=>{let{sessionId:e,userId:t,actor:n,orgId:r,orgRole:i,orgSlug:o}=F(),s=X(),a=(0,h.useCallback)(eW(s),[s]),l=(0,h.useCallback)(eF(s),[s]);if(void 0===e&&void 0===t)return{isLoaded:!1,isSignedIn:void 0,sessionId:e,userId:t,actor:void 0,orgId:void 0,orgRole:void 0,orgSlug:void 0,signOut:l,getToken:a};if(null===e&&null===t)return{isLoaded:!0,isSignedIn:!1,sessionId:e,userId:t,actor:null,orgId:null,orgRole:null,orgSlug:null,signOut:l,getToken:a};if(e&&t&&r&&i)return{isLoaded:!0,isSignedIn:!0,sessionId:e,userId:t,actor:n||null,orgId:r,orgRole:i,orgSlug:o||null,signOut:l,getToken:a};if(e&&t&&!r)return{isLoaded:!0,isSignedIn:!0,sessionId:e,userId:t,actor:n||null,orgId:null,orgRole:null,orgSlug:null,signOut:l,getToken:a};throw Error("Invalid state. Feel free to submit a bug or reach out to support here: https://clerk.com/support")},eB=()=>{let e=G();return void 0===e?{isLoaded:!1,isSignedIn:void 0,session:void 0}:null===e?{isLoaded:!0,isSignedIn:!1,session:null}:{isLoaded:!0,isSignedIn:!0,session:e}},eV=()=>{let e=X();return e},eK=()=>{let e=X(),t=J();return t?{isLoaded:!0,signIn:t.signIn,setSession:e.setSession,setActive:e.setActive}:{isLoaded:!1,signIn:void 0,setSession:void 0,setActive:void 0}},eD=()=>{let e=X(),t=J();return t?{isLoaded:!0,signUp:t.signUp,setSession:e.setSession,setActive:e.setActive}:{isLoaded:!1,signUp:void 0,setSession:void 0,setActive:void 0}},eJ=()=>{let e=X(),t=J();return t?{isLoaded:!0,sessions:t.sessions,setSession:e.setSession,setActive:e.setActive}:{isLoaded:!1,sessions:void 0,setSession:void 0,setActive:void 0}};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function eY(e,t,n,r){return new(n||(n=Promise))(function(i,o){function s(e){try{l(r.next(e))}catch(e){o(e)}}function a(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(s,a)}l((r=r.apply(e,t||[])).next())})}function eG(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}}var eq=function(){},eH=eq(),eZ=Object,eX=function(e){return e===eH},eQ=function(e){return"function"==typeof e},e0=function(e,t){return eZ.assign({},e,t)},e1="undefined",e2=function(){return typeof window!=e1},e3=new WeakMap,e4=0,e5=function(e){var t,n,r=typeof e,i=e&&e.constructor,o=i==Date;if(eZ(e)!==e||o||i==RegExp)t=o?e.toJSON():"symbol"==r?e.toString():"string"==r?JSON.stringify(e):""+e;else{if(t=e3.get(e))return t;if(t=++e4+"~",e3.set(e,t),i==Array){for(n=0,t="@";n<e.length;n++)t+=e5(e[n])+",";e3.set(e,t)}if(i==eZ){t="#";for(var s=eZ.keys(e).sort();!eX(n=s.pop());)eX(e[n])||(t+=n+":"+e5(e[n])+",");e3.set(e,t)}}return t},e6=!0,e8=e2(),e9=typeof document!=e1,e7=e8&&window.addEventListener?window.addEventListener.bind(window):eq,te=e9?document.addEventListener.bind(document):eq,tt=e8&&window.removeEventListener?window.removeEventListener.bind(window):eq,tn=e9?document.removeEventListener.bind(document):eq,tr={initFocus:function(e){return te("visibilitychange",e),e7("focus",e),function(){tn("visibilitychange",e),tt("focus",e)}},initReconnect:function(e){var t=function(){e6=!0,e()},n=function(){e6=!1};return e7("online",t),e7("offline",n),function(){tt("online",t),tt("offline",n)}}},ti=!e2()||"Deno"in window,to=ti?h.useEffect:h.useLayoutEffect,ts="undefined"!=typeof navigator&&navigator.connection,ta=!ti&&ts&&(["slow-2g","2g"].includes(ts.effectiveType)||ts.saveData),tl=function(e){if(eQ(e))try{e=e()}catch(t){e=""}var t=[].concat(e),n=(e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?e5(e):"")?"$swr$"+e:"";return[e,t,n]},tu=new WeakMap,tc=function(e,t,n,r,i,o,s){void 0===s&&(s=!0);var a=tu.get(e),l=a[3],u=a[0][t],c=a[1][t];if(s&&c)for(var d=0;d<c.length;++d)c[d](n,r,i);return o&&(delete l[t],u&&u[0])?u[0](2).then(function(){return e.get(t)}):e.get(t)},td=0,th=function(){return++td},tp=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return eY(void 0,void 0,void 0,function(){var t,n,r,i,o,s,a,l,u,c,d,h,p,f,g,m,v,k,y,b;return eG(this,function(w){switch(w.label){case 0:if(t=e[0],n=e[1],r=e[2],s=!!eX((o="boolean"==typeof(i=e[3])?{revalidate:i}:i||{}).populateCache)||o.populateCache,a=!1!==o.revalidate,l=!1!==o.rollbackOnError,u=o.optimisticData,d=(c=tl(n))[0],h=c[2],!d)return[2];if(p=tu.get(t)[2],e.length<3)return[2,tc(t,d,t.get(d),eH,eH,a,!0)];if(f=r,m=th(),p[d]=[m,0],v=!eX(u),k=t.get(d),v&&(y=eQ(u)?u(k):u,t.set(d,y),tc(t,d,y)),eQ(f))try{f=f(t.get(d))}catch(e){g=e}if(!(f&&eQ(f.then)))return[3,2];return[4,f.catch(function(e){g=e})];case 1:if(f=w.sent(),m!==p[d][0]){if(g)throw g;return[2,f]}g&&v&&l&&(s=!0,f=k,t.set(d,k)),w.label=2;case 2:return s&&(g||(eQ(s)&&(f=s(f,k)),t.set(d,f)),t.set(h,e0(t.get(h),{error:g}))),p[d][1]=th(),[4,tc(t,d,f,g,eH,a,!!s)];case 3:if(b=w.sent(),g)throw g;return[2,s?b:f]}})})},tf=function(e,t){for(var n in e)e[n][0]&&e[n][0](t)},tg=function(e,t){if(!tu.has(e)){var n=e0(tr,t),r={},i=tp.bind(eH,e),o=eq;if(tu.set(e,[r,{},{},{},i]),!ti){var s=n.initFocus(setTimeout.bind(eH,tf.bind(eH,r,0))),a=n.initReconnect(setTimeout.bind(eH,tf.bind(eH,r,1)));o=function(){s&&s(),a&&a(),tu.delete(e)}}return[e,i,o]}return[e,tu.get(e)[4]]},tm=tg(new Map),tv=tm[0],tk=e0({onLoadingSlow:eq,onSuccess:eq,onError:eq,onErrorRetry:function(e,t,n,r,i){var o=n.errorRetryCount,s=i.retryCount,a=~~((Math.random()+.5)*(1<<(s<8?s:8)))*n.errorRetryInterval;(eX(o)||!(s>o))&&setTimeout(r,a,i)},onDiscarded:eq,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:ta?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:ta?5e3:3e3,compare:function(e,t){return e5(e)==e5(t)},isPaused:function(){return!1},cache:tv,mutate:tm[1],fallback:{}},{isOnline:function(){return e6},isVisible:function(){var e=e9&&document.visibilityState;return eX(e)||"hidden"!==e}}),ty=function(e,t){var n=e0(e,t);if(t){var r=e.use,i=e.fallback,o=t.use,s=t.fallback;r&&o&&(n.use=r.concat(o)),i&&s&&(n.fallback=e0(i,s))}return n},tb=(0,h.createContext)({}),tw=function(e,t){var n=(0,h.useState)({})[1],r=(0,h.useRef)(e),i=(0,h.useRef)({data:!1,error:!1,isValidating:!1}),o=(0,h.useCallback)(function(e){var o=!1,s=r.current;for(var a in e)s[a]!==e[a]&&(s[a]=e[a],i.current[a]&&(o=!0));o&&!t.current&&n({})},[]);return to(function(){r.current=e}),[r,i.current,o]},tC=function(e,t,n){var r=t[e]||(t[e]=[]);return r.push(n),function(){var e=r.indexOf(n);e>=0&&(r[e]=r[r.length-1],r.pop())}},tS={dedupe:!0};eZ.defineProperty(function(e){var t=e.value,n=ty((0,h.useContext)(tb),t),r=t&&t.provider,i=(0,h.useState)(function(){return r?tg(r(n.cache||tv),t):eH})[0];return i&&(n.cache=i[0],n.mutate=i[1]),to(function(){return i?i[2]:eH},[]),(0,h.createElement)(tb.Provider,e0(e,{value:n}))},"default",{value:tk});var tO=(a=function(e,t,n){var r=n.cache,i=n.compare,o=n.fallbackData,s=n.suspense,a=n.revalidateOnMount,l=n.refreshInterval,u=n.refreshWhenHidden,c=n.refreshWhenOffline,d=tu.get(r),p=d[0],f=d[1],g=d[2],m=d[3],v=tl(e),k=v[0],y=v[1],b=v[2],w=(0,h.useRef)(!1),C=(0,h.useRef)(!1),S=(0,h.useRef)(k),O=(0,h.useRef)(t),E=(0,h.useRef)(n),z=function(){return E.current},j=function(){return z().isVisible()&&z().isOnline()},P=function(e){return r.set(b,e0(r.get(b),e))},U=r.get(k),_=eX(o)?n.fallback[k]:o,M=eX(U)?_:U,I=r.get(b)||{},L=I.error,T=!w.current,A=function(){return T&&!eX(a)?a:!z().isPaused()&&(s?!eX(M)&&n.revalidateIfStale:eX(M)||n.revalidateIfStale)},N=!!k&&!!t&&(!!I.isValidating||T&&A()),R=tw({data:M,error:L,isValidating:N},C),x=R[0],W=R[1],F=R[2],$=(0,h.useCallback)(function(e){return eY(void 0,void 0,void 0,function(){var t,o,s,a,l,u,c,d,h,p,f,v,b;return eG(this,function(E){switch(E.label){case 0:if(t=O.current,!k||!t||C.current||z().isPaused())return[2,!1];a=!0,l=e||{},u=!m[k]||!l.dedupe,c=function(){return!C.current&&k===S.current&&w.current},d=function(){var e=m[k];e&&e[1]===s&&delete m[k]},h={isValidating:!1},p=function(){P({isValidating:!1}),c()&&F(h)},P({isValidating:!0}),F({isValidating:!0}),E.label=1;case 1:return E.trys.push([1,3,,4]),u&&(tc(r,k,x.current.data,x.current.error,!0),n.loadingTimeout&&!r.get(k)&&setTimeout(function(){a&&c()&&z().onLoadingSlow(k,n)},n.loadingTimeout),m[k]=[t.apply(void 0,y),th()]),o=(b=m[k])[0],s=b[1],[4,o];case 2:if(o=E.sent(),u&&setTimeout(d,n.dedupingInterval),!m[k]||m[k][1]!==s)return u&&c()&&z().onDiscarded(k),[2,!1];if(P({error:eH}),h.error=eH,!eX(f=g[k])&&(s<=f[0]||s<=f[1]||0===f[1]))return p(),u&&c()&&z().onDiscarded(k),[2,!1];return i(x.current.data,o)?h.data=x.current.data:h.data=o,i(r.get(k),o)||r.set(k,o),u&&c()&&z().onSuccess(o,k,n),[3,4];case 3:return v=E.sent(),d(),!z().isPaused()&&(P({error:v}),h.error=v,u&&c()&&(z().onError(v,k,n),("boolean"==typeof n.shouldRetryOnError&&n.shouldRetryOnError||eQ(n.shouldRetryOnError)&&n.shouldRetryOnError(v))&&j()&&z().onErrorRetry(v,k,n,$,{retryCount:(l.retryCount||0)+1,dedupe:!0}))),[3,4];case 4:return a=!1,p(),c()&&u&&tc(r,k,h.data,h.error,!1),[2,!0]}})})},[k]),B=(0,h.useCallback)(tp.bind(eH,r,function(){return S.current}),[]);if(to(function(){O.current=t,E.current=n}),to(function(){if(k){var e=k!==S.current,t=$.bind(eH,tS),n=0,r=tC(k,f,function(e,t,n){F(e0({error:t,isValidating:n},i(x.current.data,e)?eH:{data:e}))}),o=tC(k,p,function(e){if(0==e){var r=Date.now();z().revalidateOnFocus&&r>n&&j()&&(n=r+z().focusThrottleInterval,t())}else if(1==e)z().revalidateOnReconnect&&j()&&t();else if(2==e)return $()});return C.current=!1,S.current=k,w.current=!0,e&&F({data:M,error:L,isValidating:N}),A()&&(eX(M)||ti?t():e2()&&typeof window.requestAnimationFrame!=e1?window.requestAnimationFrame(t):setTimeout(t,1)),function(){C.current=!0,r(),o()}}},[k,$]),to(function(){var e;function t(){var t=eQ(l)?l(M):l;t&&-1!==e&&(e=setTimeout(n,t))}function n(){!x.current.error&&(u||z().isVisible())&&(c||z().isOnline())?$(tS).then(t):t()}return t(),function(){e&&(clearTimeout(e),e=-1)}},[l,u,c,$]),(0,h.useDebugValue)(M),s&&eX(M)&&k)throw O.current=t,E.current=n,C.current=!1,eX(L)?$(tS):L;return{mutate:B,get data(){return W.data=!0,M},get error(){return W.error=!0,L},get isValidating(){return W.isValidating=!0,N}}},function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=e0(tk,(0,h.useContext)(tb)),r=eQ(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}],i=r[0],o=r[1],s=ty(n,r[2]),l=a,u=s.use;if(u)for(var c=u.length;c-- >0;)l=u[c](l);return l(i,o||s.fetcher,s)});let tE=e=>{var t,n;let{invitationList:r,membershipList:i}=e||{},{organization:o,lastOrganizationMember:s,lastOrganizationInvitation:a}=H(),l=G(),u=B(),c=u.loaded&&l&&o,d=u.loaded?()=>u.organization?.getPendingInvitations(r):()=>[],h=u.loaded?()=>u.organization?.getMemberships(i):()=>[],{data:p,isValidating:f,mutate:g}=tO(c&&r?tz("invites",o,a,r):null,d),{data:m,isValidating:v,mutate:k}=tO(c&&i?tz("memberships",o,s,i):null,h);return void 0===o?{isLoaded:!1,organization:void 0,invitationList:void 0,membershipList:void 0,membership:void 0}:null===o?{isLoaded:!0,organization:null,invitationList:null,membershipList:null,membership:null}:!u.loaded&&o?{isLoaded:!0,organization:o,invitationList:void 0,membershipList:void 0,membership:void 0}:{isLoaded:!v&&!f,organization:o,membershipList:m,membership:(t=l.user.organizationMemberships,n=o.id,t.find(e=>e.organization.id===n)),invitationList:p,unstable__mutate:()=>{k(),g()}}};function tz(e,t,n,r){return[e,t.id,n?.id,n?.updatedAt,r.offset,r.limit].filter(Boolean).join("-")}let tj=()=>{let e=B(),t=K();return e.loaded&&t?{isLoaded:!0,organizationList:t.organizationMemberships.map(e=>({membership:e,organization:e.organization})),setActive:e.setActive,createOrganization:e.createOrganization}:{isLoaded:!1,organizationList:void 0,createOrganization:void 0,setActive:void 0}},tP=()=>{let e=B();return e.loaded?{isLoaded:!0,createOrganization:e.createOrganization,getOrganizationMemberships:e.getOrganizationMemberships,getOrganization:e.getOrganization}:{isLoaded:!1,createOrganization:void 0,getOrganizationMemberships:void 0,getOrganization:void 0}};function tU(e){return t_(e)||tM(e)}function t_(e){return"clerkError"in e}function tM(e){return"code"in e&&[4001,32602,32603].includes(e.code)&&"message"in e}class tI extends Error{constructor(e){super(e),this.code=e,Object.setPrototypeOf(this,tI.prototype)}}function tL(e){return e instanceof tI}let tT={Expired:"expired",Failed:"failed"};function tA(e){let{startMagicLinkFlow:t,cancelMagicLinkFlow:n}=h.useMemo(()=>e.createMagicLinkFlow(),[e]);return h.useEffect(()=>n,[]),{startMagicLinkFlow:t,cancelMagicLinkFlow:n}}},8820:function(e,t,n){"undefined"==typeof window||window.global||(window.global=void 0===n.g?window:n.g)}}]);