(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();const mg=()=>{};var ou={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg={SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CB=function(n,e){if(!n)throw _g(e)},_g=function(n){return new Error("Firebase Database ("+Eg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Dg=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=n[t++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=n[t++],o=n[t++],B=n[t++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|B&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],o=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},jB={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const i=n[r],o=r+1<n.length,B=o?n[r+1]:0,c=r+2<n.length,l=c?n[r+2]:0,f=i>>2,C=(i&3)<<4|B>>4;let m=(B&15)<<2|l>>6,v=l&63;c||(v=64,o||(m=64)),s.push(t[f],t[C],t[m],t[v])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(yf(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Dg(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const i=t[n.charAt(r++)],B=r<n.length?t[n.charAt(r)]:0;++r;const l=r<n.length?t[n.charAt(r)]:64;++r;const C=r<n.length?t[n.charAt(r)]:64;if(++r,i==null||B==null||l==null||C==null)throw new wg;const m=i<<2|B>>4;if(s.push(m),l!==64){const v=B<<4&240|l>>2;if(s.push(v),C!==64){const R=l<<6&192|C;s.push(R)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class wg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ig=function(n){const e=yf(n);return jB.encodeByteArray(e,!0)},ao=function(n){return Ig(n).replace(/\./g,"")},Tf=function(n){try{return jB.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JB(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg=()=>JB().__FIREBASE_DEFAULTS__,Tg=()=>{if(typeof process>"u"||typeof ou>"u")return;const n=ou.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ag=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Tf(n[1]);return e&&JSON.parse(e)},xo=()=>{try{return mg()||yg()||Tg()||Ag()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Af=n=>xo()?.emulatorHosts?.[n],Rg=n=>{const e=Af(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Rf=()=>xo()?.config,vf=n=>xo()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vg(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",r=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[ao(JSON.stringify(t)),ao(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xe())}function Sg(){const n=xo()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Og(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Pg(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Ng(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Fg(){const n=Xe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Lg(){return!Sg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Vo(){try{return typeof indexedDB=="object"}catch{return!1}}function kg(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{e(r.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg="FirebaseError";class Dt extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Mg,Object.setPrototypeOf(this,Dt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mn.prototype.create)}}class Mn{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?xg(i,s):"Error",B=`${this.serviceName}: ${o} (${r}).`;return new Dt(r,B,s)}}function xg(n,e){try{let t=0,s="";for(;t<n.length;){const r=n.indexOf("{$",t);if(r===-1){s+=n.substring(t);break}const i=n.indexOf("}",r+2);if(i===-1){s+=n.substring(t);break}const o=n.substring(r+2,i),B=e[o];s+=n.substring(t,r)+(B!=null?String(B):`<${o}?>`),t=i+1}return s}catch{return n}}function Vg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function An(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const i=n[r],o=e[r];if(au(i)&&au(o)){if(!An(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function au(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Gg(n,e){const t=new Hg(n,e);return t.subscribe.bind(t)}class Hg{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let r;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Ug(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:s},r.next===void 0&&(r.next=Ma),r.error===void 0&&(r.error=Ma),r.complete===void 0&&(r.complete=Ma);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ug(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ma(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg=1e3,Jg=2,$g=14400*1e3,Kg=.5;function $B(n,e=jg,t=Jg){const s=e*Math.pow(t,n),r=Math.round(Kg*s*(Math.random()-.5)*2);return Math.min($g,s+r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function bf(n){return(await fetch(n,{credentials:"include"})).ok}class Et{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Sr;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Qg(e))try{this.getOrInitializeService({instanceIdentifier:Kn})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Kn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Kn){return this.instances.has(e)}getOptions(e=Kn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[i,o]of this.instancesDeferred.entries()){const B=this.normalizeInstanceIdentifier(i);s===B&&o.resolve(r)}return r}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&e(i,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:zg(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Kn){return this.component?this.component.multipleInstances?e:Kn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zg(n){return n===Kn?void 0:n}function Qg(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new qg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Be;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Be||(Be={}));const Yg={debug:Be.DEBUG,verbose:Be.VERBOSE,info:Be.INFO,warn:Be.WARN,error:Be.ERROR,silent:Be.SILENT},Xg=Be.INFO,Zg={[Be.DEBUG]:"log",[Be.VERBOSE]:"log",[Be.INFO]:"info",[Be.WARN]:"warn",[Be.ERROR]:"error"},em=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=Zg[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $s{constructor(e){this.name=e,this._logLevel=Xg,this._logHandler=em,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Yg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Be.DEBUG,...e),this._logHandler(this,Be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Be.VERBOSE,...e),this._logHandler(this,Be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Be.INFO,...e),this._logHandler(this,Be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Be.WARN,...e),this._logHandler(this,Be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Be.ERROR,...e),this._logHandler(this,Be.ERROR,...e)}}const tm=(n,e)=>e.some(t=>n instanceof t);let Bu,cu;function nm(){return Bu||(Bu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sm(){return cu||(cu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sf=new WeakMap,dB=new WeakMap,Of=new WeakMap,xa=new WeakMap,KB=new WeakMap;function rm(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(_n(n.result)),r()},o=()=>{s(n.error),r()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Sf.set(t,n)}).catch(()=>{}),KB.set(e,n),e}function im(n){if(dB.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});dB.set(n,e)}let pB={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return dB.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Of.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return _n(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function om(n){pB=n(pB)}function am(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Va(this),e,...t);return Of.set(s,e.sort?e.sort():[e]),_n(s)}:sm().includes(n)?function(...e){return n.apply(Va(this),e),_n(Sf.get(this))}:function(...e){return _n(n.apply(Va(this),e))}}function Bm(n){return typeof n=="function"?am(n):(n instanceof IDBTransaction&&im(n),tm(n,nm())?new Proxy(n,pB):n)}function _n(n){if(n instanceof IDBRequest)return rm(n);if(xa.has(n))return xa.get(n);const e=Bm(n);return e!==n&&(xa.set(n,e),KB.set(e,n)),e}const Va=n=>KB.get(n);function Pf(n,e,{blocked:t,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(n,e),B=_n(o);return s&&o.addEventListener("upgradeneeded",c=>{s(_n(o.result),c.oldVersion,c.newVersion,_n(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),B.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),B}const cm=["get","getKey","getAll","getAllKeys","count"],lm=["put","add","delete","clear"],Ga=new Map;function lu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ga.get(e))return Ga.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=lm.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||cm.includes(t)))return;const i=async function(o,...B){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(B.shift())),(await Promise.all([l[t](...B),r&&c.done]))[0]};return Ga.set(e,i),i}om(n=>({...n,get:(e,t,s)=>lu(e,t)||n.get(e,t,s),has:(e,t)=>!!lu(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(hm(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function hm(n){return n.getComponent()?.type==="VERSION"}const gB="@firebase/app",uu="0.16.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt=new $s("@firebase/app"),fm="@firebase/app-compat",Cm="@firebase/analytics-compat",dm="@firebase/analytics",pm="@firebase/app-check-compat",gm="@firebase/app-check",mm="@firebase/auth",Em="@firebase/auth-compat",_m="@firebase/database",Dm="@firebase/data-connect",wm="@firebase/database-compat",Im="@firebase/functions",ym="@firebase/functions-compat",Tm="@firebase/installations",Am="@firebase/installations-compat",Rm="@firebase/messaging",vm="@firebase/messaging-compat",bm="@firebase/performance",Sm="@firebase/performance-compat",Om="@firebase/remote-config",Pm="@firebase/remote-config-compat",Nm="@firebase/storage",Fm="@firebase/storage-compat",Lm="@firebase/firestore",km="@firebase/ai",Mm="@firebase/firestore-compat",xm="firebase",Vm="12.19.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mB="[DEFAULT]",Gm={[gB]:"fire-core",[fm]:"fire-core-compat",[dm]:"fire-analytics",[Cm]:"fire-analytics-compat",[gm]:"fire-app-check",[pm]:"fire-app-check-compat",[mm]:"fire-auth",[Em]:"fire-auth-compat",[_m]:"fire-rtdb",[Dm]:"fire-data-connect",[wm]:"fire-rtdb-compat",[Im]:"fire-fn",[ym]:"fire-fn-compat",[Tm]:"fire-iid",[Am]:"fire-iid-compat",[Rm]:"fire-fcm",[vm]:"fire-fcm-compat",[bm]:"fire-perf",[Sm]:"fire-perf-compat",[Om]:"fire-rc",[Pm]:"fire-rc-compat",[Nm]:"fire-gcs",[Fm]:"fire-gcs-compat",[Lm]:"fire-fst",[Mm]:"fire-fst-compat",[km]:"fire-vertex","fire-js":"fire-js",[xm]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bo=new Map,Hm=new Map,EB=new Map;function hu(n,e){try{n.container.addComponent(e)}catch(t){Xt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function At(n){const e=n.name;if(EB.has(e))return Xt.debug(`There were multiple attempts to register component ${e}.`),!1;EB.set(e,n);for(const t of Bo.values())hu(t,n);for(const t of Hm.values())hu(t,n);return!0}function sn(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function yt(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Kt=new Mn("app","Firebase",Um);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Et("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Kt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn=Vm;function Nf(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:mB,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw Kt.create("bad-app-name",{appName:String(r)});if(t||(t=Rf()),!t)throw Kt.create("no-options");const i=Bo.get(r);if(i)if(An(t,i.options)){if(An(s,i.config))return i;throw Kt.create("duplicate-app",{appName:r,mismatchedParam:"config",oldValue:JSON.stringify(i.config),newValue:JSON.stringify(s)})}else throw Kt.create("duplicate-app",{appName:r,mismatchedParam:"options",oldValue:JSON.stringify(i.options),newValue:JSON.stringify(t)});const o=new Wg(r);for(const c of EB.values())o.addComponent(c);const B=new jm(t,s,o);return Bo.set(r,B),B}function Zr(n=mB){const e=Bo.get(n);if(!e&&n===mB&&Rf())return Nf();if(!e)throw Kt.create("no-app",{appName:n});return e}function rt(n,e,t){let s=Gm[n]??n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const o=[`Unable to register library "${s}" with version "${e}":`];r&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xt.warn(o.join(" "));return}At(new Et(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm="firebase-heartbeat-database",$m=1,Or="firebase-heartbeat-store";let Ha=null;function Ff(){return Ha||(Ha=Pf(Jm,$m,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Or)}catch(t){console.warn(t)}}}}).catch(n=>{throw Kt.create("idb-open",{originalErrorMessage:n.message})})),Ha}async function Km(n){try{const t=(await Ff()).transaction(Or),s=await t.objectStore(Or).get(Lf(n));return await t.done,s}catch(e){if(e instanceof Dt)Xt.warn(e.message);else{const t=Kt.create("idb-get",{originalErrorMessage:e?.message});Xt.warn(t.message)}}}async function fu(n,e){try{const s=(await Ff()).transaction(Or,"readwrite");await s.objectStore(Or).put(e,Lf(n)),await s.done}catch(t){if(t instanceof Dt)Xt.warn(t.message);else{const s=Kt.create("idb-set",{originalErrorMessage:t?.message});Xt.warn(s.message)}}}function Lf(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qm=1024,zm=30;class Qm{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ym(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Cu();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats.length>zm){const r=Xm(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(r,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Xt.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Cu(),{heartbeatsToSend:t,unsentEntries:s}=Wm(this._heartbeatsCache.heartbeats),r=ao(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return Xt.warn(e),""}}}function Cu(){return new Date().toISOString().substring(0,10)}function Wm(n,e=qm){const t=[];let s=n.slice();for(const r of n){const i=t.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),du(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),du(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Ym{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Vo()?kg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Km(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return fu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return fu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function du(n){return ao(JSON.stringify({version:2,heartbeats:n})).length}function Xm(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zm(n){At(new Et("platform-logger",e=>new um(e),"PRIVATE")),At(new Et("heartbeat",e=>new Qm(e),"PRIVATE")),rt(gB,uu,n),rt(gB,uu,"esm2020"),rt("fire-js","")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zm("");var eE="firebase",tE="12.19.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rt(eE,tE,"app");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _B=new Map,kf={activated:!1,tokenObservers:[]},nE={initialized:!1,enabled:!1};function Se(n){return _B.get(n)||{...kf}}function sE(n,e){return _B.set(n,e),_B.get(n)}function Go(){return nE}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf="https://content-firebaseappcheck.googleapis.com/v1",rE="exchangeRecaptchaEnterpriseToken",iE="exchangeDebugToken",pu={RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:960*1e3},oE=1440*60*1e3;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(e,t,s,r,i){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=s,this.lowerBound=r,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=r,r>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Sr,this.pending.promise.catch(t=>{}),await BE(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Sr,this.pending.promise.catch(t=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(t){this.retryPolicy(t)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const t=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),t}}}function BE(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cE={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.","initial-throttle":"{$httpStatus} error. Attempts allowed again after {$time}",throttled:"Requests throttled due to previous {$httpStatus} error. Attempts allowed again after {$time}"},lt=new Mn("appCheck","AppCheck",cE);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gu(n=!1){return n?self.grecaptcha?.enterprise:self.grecaptcha}function qB(n){if(!Se(n).activated)throw lt.create("use-before-activation",{appName:n.name})}function xf(n){const e=Math.round(n/1e3),t=Math.floor(e/(3600*24)),s=Math.floor((e-t*3600*24)/3600),r=Math.floor((e-t*3600*24-s*3600)/60),i=e-t*3600*24-s*3600-r*60;let o="";return t&&(o+=vi(t)+"d:"),s&&(o+=vi(s)+"h:"),o+=vi(r)+"m:"+vi(i)+"s",o}function vi(n){return n===0?"00":n>=10?n.toString():"0"+n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zB({url:n,body:e},t){const s={"Content-Type":"application/json"},r=t.getImmediate({optional:!0});if(r){const C=await r.getHeartbeatsHeader();C&&(s["X-Firebase-Client"]=C)}const i={method:"POST",body:JSON.stringify(e),headers:s};let o;try{o=await fetch(n,i)}catch(C){throw lt.create("fetch-network-error",{originalErrorMessage:C?.message})}if(o.status!==200)throw lt.create("fetch-status-error",{httpStatus:o.status});let B;try{B=await o.json()}catch(C){throw lt.create("fetch-parse-error",{originalErrorMessage:C?.message})}const c=B.ttl.match(/^([\d.]+)(s)$/);if(!c||!c[2]||isNaN(Number(c[1])))throw lt.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${B.ttl}`});const l=Number(c[1])*1e3,f=Date.now();return{token:B.token,expireTimeMillis:f+l,issuedAtTimeMillis:f}}function lE(n,e){const{projectId:t,appId:s,apiKey:r}=n.options;return{url:`${Mf}/projects/${t}/apps/${s}:${rE}?key=${r}`,body:{recaptcha_enterprise_token:e}}}function Vf(n,e){const{projectId:t,appId:s,apiKey:r}=n.options;return{url:`${Mf}/projects/${t}/apps/${s}:${iE}?key=${r}`,body:{debug_token:e}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uE="firebase-app-check-database",hE=1,Pr="firebase-app-check-store",Gf="debug-token";let bi=null;function Hf(){return bi||(bi=new Promise((n,e)=>{try{const t=indexedDB.open(uE,hE);t.onsuccess=s=>{n(s.target.result)},t.onerror=s=>{e(lt.create("storage-open",{originalErrorMessage:s.target.error?.message}))},t.onupgradeneeded=s=>{const r=s.target.result;switch(s.oldVersion){case 0:r.createObjectStore(Pr,{keyPath:"compositeKey"})}}}catch(t){e(lt.create("storage-open",{originalErrorMessage:t?.message}))}}),bi)}function fE(n){return jf(Jf(n))}function CE(n,e){return Uf(Jf(n),e)}function dE(n){return Uf(Gf,n)}function pE(){return jf(Gf)}async function Uf(n,e){const s=(await Hf()).transaction(Pr,"readwrite"),i=s.objectStore(Pr).put({compositeKey:n,value:e});return new Promise((o,B)=>{i.onsuccess=c=>{o()},s.onerror=c=>{B(lt.create("storage-set",{originalErrorMessage:c.target.error?.message}))}})}async function jf(n){const t=(await Hf()).transaction(Pr,"readonly"),r=t.objectStore(Pr).get(n);return new Promise((i,o)=>{r.onsuccess=B=>{const c=B.target.result;i(c?c.value:void 0)},t.onerror=B=>{o(lt.create("storage-get",{originalErrorMessage:B.target.error?.message}))}})}function Jf(n){return`${n.options.appId}-${n.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En=new $s("@firebase/app-check");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gE(n){if(Vo()){let e;try{e=await fE(n)}catch(t){En.warn(`Failed to read token from IndexedDB. Error: ${t}`)}return e}}function Ua(n,e){return Vo()?CE(n,e).catch(t=>{En.warn(`Failed to write token to IndexedDB. Error: ${t}`)}):Promise.resolve()}async function mE(n){let e;try{e=await pE()}catch{}if(e)return e;{const t=crypto.randomUUID();let s=`To use this token for app debugging, register it with your project.

Firebase App Check debug token: ${t}

`;const r=n?.options.appId,i=n?.options.projectId;return i&&r?s+=`You can do so in the Firebase Console:
https://console.firebase.google.com/project/${i}/appcheck/apps?selectedAppId=${r}

Or using the Firebase CLI:
firebase appcheck:debugtokens:create ${t} --project ${i} --app ${r}

`:s+=`You will need to add it to your app's App Check settings in the Firebase Console for it to work.

`,s+=`Note: To keep your project secure, please revoke and delete this token using the
Firebase Console or the CLI (\`firebase appcheck:debugtokens:delete\`) when you finish debugging.

Warning: This debug token is a secret and should not be shared or uploaded to source code.

Debug Token Guide: https://firebase.google.com/docs/app-check/web/debug-provider
Firebase CLI install instructions: https://firebase.google.com/docs/cli
`,console.log(s),dE(t).catch(o=>En.warn(`Failed to persist debug token to IndexedDB. Error: ${o}`)),t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QB(){return Go().enabled}async function WB(){const n=Go();if(n.enabled&&n.token)return n.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)}function EE(n){const e=JB(),t=Go();if(t.initialized=!0,typeof e.FIREBASE_APPCHECK_DEBUG_TOKEN!="string"&&e.FIREBASE_APPCHECK_DEBUG_TOKEN!==!0)return;t.enabled=!0;const s=new Sr;t.token=s,typeof e.FIREBASE_APPCHECK_DEBUG_TOKEN=="string"?s.resolve(e.FIREBASE_APPCHECK_DEBUG_TOKEN):s.resolve(mE(n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E={error:"UNKNOWN_ERROR"};function DE(n){return jB.encodeString(JSON.stringify(n),!1)}async function DB(n,e=!1,t=!1){const s=n.app;qB(s);const r=Se(s);let i=r.token,o;if(i&&!bs(i)&&(r.token=void 0,i=void 0),!i){const l=await r.cachedTokenPromise;l&&(bs(l)?i=l:await Ua(s,void 0))}if(!e&&i&&bs(i))return{token:i.token};let B=!1;if(QB())try{const l=await WB();r.exchangeTokenPromise||(r.exchangeTokenPromise=zB(Vf(s,l),n.heartbeatServiceProvider).finally(()=>{r.exchangeTokenPromise=void 0}),B=!0);const f=await r.exchangeTokenPromise;return await Ua(s,f),r.token=f,{token:f.token}}catch(l){return l.code==="appCheck/throttled"||l.code==="appCheck/initial-throttle"?En.warn(l.message):t&&En.error(l),ja(l)}try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),B=!0),i=await Se(s).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"||l.code==="appCheck/initial-throttle"?En.warn(l.message):t&&En.error(l),o=l}let c;return i?o?bs(i)?c={token:i.token,internalError:o}:c=ja(o):(c={token:i.token},r.token=i,await Ua(s,i)):c=ja(o),B&&qf(s,c),c}async function wE(n){const e=n.app;qB(e);const{provider:t}=Se(e);if(QB()){const s=await WB(),r=Vf(e,s);r.body.limited_use=!0;const{token:i}=await zB(r,n.heartbeatServiceProvider);return{token:i}}else{const{token:s}=await t.getToken(!0);return{token:s}}}function $f(n,e,t,s){const{app:r}=n,i=Se(r),o={next:t,error:s,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&bs(i.token)){const B=i.token;Promise.resolve().then(()=>{t({token:B.token}),mu(n)}).catch(()=>{})}i.cachedTokenPromise.then(()=>mu(n))}function Kf(n,e){const t=Se(n),s=t.tokenObservers.filter(r=>r.next!==e);s.length===0&&t.tokenRefresher&&t.tokenRefresher.isRunning()&&t.tokenRefresher.stop(),t.tokenObservers=s}function mu(n){const{app:e}=n,t=Se(e);let s=t.tokenRefresher;s||(s=IE(n),t.tokenRefresher=s),!s.isRunning()&&t.isTokenAutoRefreshEnabled&&s.start()}function IE(n){const{app:e}=n;return new aE(async()=>{const t=Se(e);let s;if(t.token?s=await DB(n,!0):s=await DB(n),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const t=Se(e);if(t.token){let s=t.token.issuedAtTimeMillis+(t.token.expireTimeMillis-t.token.issuedAtTimeMillis)*.5+3e5;const r=t.token.expireTimeMillis-300*1e3;return s=Math.min(s,r),Math.max(0,s-Date.now())}else return 0},pu.RETRIAL_MIN_WAIT,pu.RETRIAL_MAX_WAIT)}function qf(n,e){const t=Se(n).tokenObservers;for(const s of t)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function bs(n){return n.expireTimeMillis-Date.now()>0}function ja(n){return{token:DE(_E),error:n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(e,t){this.app=e,this.heartbeatServiceProvider=t}_delete(){const{tokenObservers:e}=Se(this.app);for(const t of e)Kf(this.app,t.next);return Promise.resolve()}}function TE(n,e){return new yE(n,e)}function AE(n){return{getToken:e=>DB(n,e),getLimitedUseToken:()=>wE(n),addTokenListener:e=>$f(n,"INTERNAL",e),removeTokenListener:e=>Kf(n.app,e)}}const RE="@firebase/app-check",vE="0.13.1",bE="https://www.google.com/recaptcha/enterprise.js";function SE(n,e){const t=new Sr,s=Se(n);s.reCAPTCHAState={initialized:t};const r=OE(n),i=gu(!0);return i?Eu(n,e,i,r,t):FE(()=>{const o=gu(!0);if(!o)throw new Error("no recaptcha");Eu(n,e,o,r,t)}),t.promise}function Eu(n,e,t,s,r){t.ready(()=>{NE(n,e,t,s),r.resolve(t)})}function OE(n){const e=`fire_app_check_${n.name}`,t=document.createElement("div");return t.id=e,t.style.display="none",document.body.appendChild(t),e}async function PE(n){qB(n);const t=await Se(n).reCAPTCHAState.initialized.promise;return new Promise((s,r)=>{const i=Se(n).reCAPTCHAState;t.ready(()=>{s(t.execute(i.widgetId,{action:"fire_app_check"}))})})}function NE(n,e,t,s){const r=t.render(s,{sitekey:e,size:"invisible",callback:()=>{Se(n).reCAPTCHAState.succeeded=!0},"error-callback":()=>{Se(n).reCAPTCHAState.succeeded=!1}}),i=Se(n);i.reCAPTCHAState={...i.reCAPTCHAState,widgetId:r}}function FE(n){const e=document.createElement("script");e.src=bE+"?render=explicit",e.onload=n,document.head.appendChild(e)}class YB{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(e=!1){kE(this._throttleData);const t=await PE(this._app).catch(r=>{throw lt.create("recaptcha-error")});if(!Se(this._app).reCAPTCHAState?.succeeded)throw lt.create("recaptcha-error");let s;try{const r=lE(this._app,t);e&&(r.body.limited_use=!0),s=await zB(r,this._heartbeatServiceProvider)}catch(r){throw r.code?.includes("fetch-status-error")?(this._throttleData=LE(Number(r.customData?.httpStatus),this._throttleData),lt.create("initial-throttle",{time:xf(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):r}return this._throttleData=null,s}initialize(e){this._app=e,this._heartbeatServiceProvider=sn(e,"heartbeat"),SE(e,this._siteKey).catch(()=>{})}isEqual(e){return e instanceof YB?this._siteKey===e._siteKey:!1}}function LE(n,e){if(n===404||n===403)return{backoffCount:1,allowRequestsAfter:Date.now()+oE,httpStatus:n};{const t=e?e.backoffCount:0,s=$B(t,1e3,2);return{backoffCount:t+1,allowRequestsAfter:Date.now()+s,httpStatus:n}}}function kE(n){if(n&&Date.now()-n.allowRequestsAfter<=0)throw lt.create("throttled",{time:xf(n.allowRequestsAfter-Date.now()),httpStatus:n.httpStatus})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ME(n=Zr(),e){n=Ge(n);const t=sn(n,"app-check");if(Go().initialized||EE(n),QB()&&WB().then(r=>{console.log(`Firebase App Check debug token: ${r}`)}),t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(i&&!!i.isTokenAutoRefreshEnabled==!!e.isTokenAutoRefreshEnabled&&i.provider?.isEqual(e.provider))return r;throw lt.create("already-initialized",{appName:n.name})}const s=t.initialize({options:e});return xE(n,e.provider,e.isTokenAutoRefreshEnabled),Se(n).isTokenAutoRefreshEnabled&&$f(s,"INTERNAL",()=>{}),s}function xE(n,e,t=!1){const s=sE(n,{...kf});s.activated=!0,s.provider=e,s.cachedTokenPromise=gE(n).then(r=>(r&&bs(r)&&(s.token=r,qf(n,{token:r.token})),r)),s.isTokenAutoRefreshEnabled=t&&n.automaticDataCollectionEnabled,!n.automaticDataCollectionEnabled&&t&&En.warn("`isTokenAutoRefreshEnabled` is true but `automaticDataCollectionEnabled` was set to false during `initializeApp()`. This blocks automatic token refresh."),s.provider.initialize(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE="app-check",_u="app-check-internal";function GE(){At(new Et(VE,n=>{const e=n.getProvider("app").getImmediate(),t=n.getProvider("heartbeat");return TE(e,t)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((n,e,t)=>{n.getProvider(_u).initialize()})),At(new Et(_u,n=>{const e=n.getProvider("app-check").getImmediate();return AE(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),rt(RE,vE)}GE();var Du="@firebase/ai",wB="2.16.0";/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn="AI",HE="us-central1",UE="global",jE="firebasevertexai.googleapis.com",Ms="v1beta",wu=wB,JE="gl-js",$E="hybrid",KE=180*1e3,qE="gemini-2.5-flash-lite";/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee extends Dt{constructor(e,t,s){const r=Zn,i=`${r}/${e}`,o=`${r}: ${t} (${i})`;super(e,o),this.code=e,this.customErrorData=s,Error.captureStackTrace&&Error.captureStackTrace(this,ee),Object.setPrototypeOf(this,ee.prototype),this.toString=()=>o}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu=["user","model","function","system"],zf={HARM_SEVERITY_UNSUPPORTED:"HARM_SEVERITY_UNSUPPORTED"},qe={SAFETY:"SAFETY",RECITATION:"RECITATION",BLOCKLIST:"BLOCKLIST",PROHIBITED_CONTENT:"PROHIBITED_CONTENT",SPII:"SPII",MALFORMED_FUNCTION_CALL:"MALFORMED_FUNCTION_CALL",IMAGE_SAFETY:"IMAGE_SAFETY",IMAGE_PROHIBITED_CONTENT:"IMAGE_PROHIBITED_CONTENT",IMAGE_OTHER:"IMAGE_OTHER",NO_IMAGE:"NO_IMAGE",IMAGE_RECITATION:"IMAGE_RECITATION",LANGUAGE:"LANGUAGE",UNEXPECTED_TOOL_CALL:"UNEXPECTED_TOOL_CALL",TOO_MANY_TOOL_CALLS:"TOO_MANY_TOOL_CALLS",MISSING_THOUGHT_SIGNATURE:"MISSING_THOUGHT_SIGNATURE",MALFORMED_RESPONSE:"MALFORMED_RESPONSE"},Ye={PREFER_ON_DEVICE:"prefer_on_device",ONLY_ON_DEVICE:"only_on_device",ONLY_IN_CLOUD:"only_in_cloud",PREFER_IN_CLOUD:"prefer_in_cloud"},hn={ON_DEVICE:"on_device",IN_CLOUD:"in_cloud"};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z={ERROR:"error",REQUEST_ERROR:"request-error",RESPONSE_ERROR:"response-error",FETCH_ERROR:"fetch-error",SESSION_CLOSED:"session-closed",INVALID_CONTENT:"invalid-content",API_NOT_ENABLED:"api-not-enabled",INVALID_SCHEMA:"invalid-schema",NO_API_KEY:"no-api-key",NO_APP_ID:"no-app-id",NO_MODEL:"no-model",NO_PROJECT_ID:"no-project-id",PARSE_FAILED:"parse-failed",UNSUPPORTED:"unsupported"};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja={STRING:"string",NUMBER:"number",INTEGER:"integer",BOOLEAN:"boolean",ARRAY:"array",OBJECT:"object"};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt={AGENT_PLATFORM:"AGENT_PLATFORM",VERTEX_AI:"VERTEX_AI",GOOGLE_AI:"GOOGLE_AI"};/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XB{constructor(e){this.backendType=e}}class Ho extends XB{constructor(){super(Jt.GOOGLE_AI)}_getModelPath(e,t){return`/${Ms}/projects/${e}/${t}`}_getTemplatePath(e,t){return`/${Ms}/projects/${e}/templates/${t}`}}class ZB extends XB{constructor(e){super(Jt.VERTEX_AI),this.location=HE,e&&(this.location=e)}_getModelPath(e,t){return`/${Ms}/projects/${e}/locations/${this.location}/${t}`}_getTemplatePath(e,t){return`/${Ms}/projects/${e}/locations/${this.location}/templates/${t}`}}class ec extends XB{constructor(e){super(Jt.AGENT_PLATFORM),this.location=UE,e&&(this.location=e)}_getModelPath(e,t){return`/${Ms}/projects/${e}/locations/${this.location}/${t}`}_getTemplatePath(e,t){return`/${Ms}/projects/${e}/locations/${this.location}/templates/${t}`}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zE(n){if(n instanceof Ho)return`${Zn}/googleai`;if(n instanceof ZB)return`${Zn}/vertexai/${n.location}`;if(n instanceof ec)return`${Zn}/agentplatform/${n.location}`;throw new ee(Z.ERROR,`Invalid backend: ${JSON.stringify(n.backendType)}`)}function QE(n){const e=n.split("/");if(e[0]!==Zn)throw new ee(Z.ERROR,`Invalid instance identifier, unknown prefix '${e[0]}'`);switch(e[1]){case"vertexai":const s=e[2];if(!s)throw new ee(Z.ERROR,`Invalid instance identifier, unknown location '${n}'`);return new ZB(s);case"agentplatform":const r=e[2];if(!r)throw new ee(Z.ERROR,`Invalid instance identifier, unknown location '${n}'`);return new ec(r);case"googleai":return new Ho;default:throw new ee(Z.ERROR,`Invalid instance identifier string: '${n}'`)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be=new $s("@firebase/vertexai");var $t;(function(n){n.UNAVAILABLE="unavailable",n.DOWNLOADABLE="downloadable",n.DOWNLOADING="downloading",n.AVAILABLE="available"})($t||($t={}));/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf={type:"text",languages:["en"]},$a=[Qf,{type:"image"}],Ka=[Qf];class bt{constructor(e,t,s){this.languageModelProvider=e,this.mode=t,this.downloadPromise=null,this.onDeviceParams={createOptions:{expectedInputs:$a,expectedOutputs:Ka}},s&&(this.onDeviceParams=s,this.onDeviceParams.createOptions?(this.onDeviceParams.createOptions.expectedInputs||(this.onDeviceParams.createOptions.expectedInputs=$a),this.onDeviceParams.createOptions.expectedOutputs||(this.onDeviceParams.createOptions.expectedOutputs=Ka)):this.onDeviceParams.createOptions={expectedInputs:$a,expectedOutputs:Ka})}async isAvailable(e){if(!this.mode)return be.debug("On-device inference unavailable because mode is undefined."),!1;if(this.mode===Ye.ONLY_IN_CLOUD)return be.debug('On-device inference unavailable because mode is "only_in_cloud".'),!1;const t=await this.languageModelProvider?.availability(this.onDeviceParams.createOptions);if(this.mode===Ye.ONLY_ON_DEVICE){if(t===$t.UNAVAILABLE)throw new ee(Z.API_NOT_ENABLED,"Local LanguageModel API not available in this environment.");if(t===$t.DOWNLOADABLE||t===$t.DOWNLOADING){be.debug("Waiting for download of LanguageModel to complete.");try{await this.downloadPromise}catch(s){throw new ee(Z.ERROR,s.message)}return!0}return!0}return t!==$t.AVAILABLE?(be.debug(`On-device inference unavailable because availability is "${t}".`),!1):bt.isOnDeviceRequest(e)?!0:(be.debug("On-device inference unavailable because request is incompatible."),!1)}async generateContent(e){const t=await this.createSession(),s=await Promise.all(e.contents.map(bt.toLanguageModelMessage)),r=await t.prompt(s,this.onDeviceParams.promptOptions);return bt.toResponse(r)}async generateContentStream(e){const t=await this.createSession(),s=await Promise.all(e.contents.map(bt.toLanguageModelMessage)),r=t.promptStreaming(s,this.onDeviceParams.promptOptions);return bt.toStreamResponse(r)}async countTokens(e){throw new ee(Z.REQUEST_ERROR,"Count Tokens is not yet available for on-device model.")}static isOnDeviceRequest(e){if(e.contents.length===0)return be.debug("Empty prompt rejected for on-device inference."),!1;for(const t of e.contents){if(t.parts.some(s=>"functionResponse"in s))return be.debug("Content with a function response part rejected for on-device inference."),!1;for(const s of t.parts)if(s.inlineData&&bt.SUPPORTED_MIME_TYPES.indexOf(s.inlineData.mimeType)===-1)return be.debug(`Unsupported mime type "${s.inlineData.mimeType}" rejected for on-device inference.`),!1}return!0}async downloadIfAvailable(e){const t=await this.languageModelProvider?.availability(this.onDeviceParams.createOptions);return(t===$t.DOWNLOADABLE||t===$t.DOWNLOADING)&&this.download(e),t}download(e){if(this.downloadPromise)return;const t={...this.onDeviceParams.createOptions};t&&!t.monitor&&e&&(t.monitor=s=>{s.addEventListener("downloadprogress",r=>{e(r.loaded)})}),this.downloadPromise=this.languageModelProvider?.create(t).finally(()=>{this.downloadPromise=null})}static async toLanguageModelMessage(e){const t=await Promise.all(e.parts.map(bt.toLanguageModelMessageContent));return{role:bt.toLanguageModelMessageRole(e.role),content:t}}static async toLanguageModelMessageContent(e){if(e.text)return{type:"text",value:e.text};if(e.inlineData){const s=await(await fetch(`data:${e.inlineData.mimeType};base64,${e.inlineData.data}`)).blob();return{type:"image",value:await createImageBitmap(s)}}throw new ee(Z.REQUEST_ERROR,"Processing of this Part type is not currently supported.")}static toLanguageModelMessageRole(e){return e==="model"?"assistant":"user"}async createSession(){if(!this.languageModelProvider)throw new ee(Z.UNSUPPORTED,"Chrome AI requested for unsupported browser version.");const e=await this.languageModelProvider.create(this.onDeviceParams.createOptions);return this.oldSession&&this.oldSession.destroy(),this.oldSession=e,e}static toResponse(e){return{json:async()=>({candidates:[{content:{parts:[{text:e}]}}]})}}static toStreamResponse(e){const t=new TextEncoder;return{body:e.pipeThrough(new TransformStream({transform(s,r){const i=JSON.stringify({candidates:[{content:{role:"model",parts:[{text:s}]}}]});r.enqueue(t.encode(`data: ${i}

`))}}))}}}bt.SUPPORTED_MIME_TYPES=["image/jpeg","image/png"];function WE(n,e,t){const r=(e||JB()).LanguageModel;if(r&&n)return new bt(r,n,t)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(e,t,s,r,i){this.app=e,this.backend=t,this.chromeAdapterFactory=i;const o=r?.getImmediate({optional:!0}),B=s?.getImmediate({optional:!0});this.auth=B||null,this.appCheck=o||null,t instanceof ZB||t instanceof ec?this.location=t.location:this.location=""}_delete(){return Promise.resolve()}set options(e){this._options=e}get options(){return this._options}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XE(n,{instanceIdentifier:e}){if(!e)throw new ee(Z.ERROR,"AIService instance identifier is undefined.");const t=QE(e),s=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new YE(s,t,r,i,WE)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZE(n){if(n.app?.options?.apiKey)if(n.app?.options?.projectId){if(!n.app?.options?.appId)throw new ee(Z.NO_APP_ID,'The "appId" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid app ID.')}else throw new ee(Z.NO_PROJECT_ID,'The "projectId" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid project ID.');else throw new ee(Z.NO_API_KEY,'The "apiKey" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid API key.');const e={apiKey:n.app.options.apiKey,project:n.app.options.projectId,appId:n.app.options.appId,automaticDataCollectionEnabled:n.app.automaticDataCollectionEnabled,location:n.location,backend:n.backend};if(yt(n.app)&&n.app.settings.appCheckToken){const t=n.app.settings.appCheckToken;e.getAppCheckToken=()=>Promise.resolve({token:t})}else n.appCheck&&(n.options?.useLimitedUseAppCheckTokens?e.getAppCheckToken=()=>n.appCheck.getLimitedUseToken():e.getAppCheckToken=()=>n.appCheck.getToken());return n.auth&&(e.getAuthToken=()=>n.auth.getToken()),e}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,t){this._apiSettings=ZE(e),this.model=Dr.normalizeModelName(t,this._apiSettings.backend.backendType)}static normalizeModelName(e,t){return t===Jt.GOOGLE_AI?Dr.normalizeGoogleAIModelName(e):Dr.normalizeVertexAIModelName(e)}static normalizeGoogleAIModelName(e){return`models/${e}`}static normalizeVertexAIModelName(e){let t;return e.includes("/")?e.startsWith("models/")?t=`publishers/google/${e}`:t=e:t=`publishers/google/models/${e}`,t}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_="Timeout has expired.",qa="AbortError";class t_{constructor(e){this.params=e}toString(){const e=new URL(this.baseUrl);return e.pathname=this.pathname,e.search=this.queryParams.toString(),e.toString()}get pathname(){return this.params.templateId?`${this.params.apiSettings.backend._getTemplatePath(this.params.apiSettings.project,this.params.templateId)}:${this.params.task}`:`${this.params.apiSettings.backend._getModelPath(this.params.apiSettings.project,this.params.model)}:${this.params.task}`}get baseUrl(){return this.params.singleRequestOptions?.baseUrl??`https://${jE}`}get queryParams(){const e=new URLSearchParams;return this.params.stream&&e.set("alt","sse"),e}}function n_(n){const e=[];return e.push(`${JE}/${wu}`),e.push(`fire/${wu}`),(n.params.apiSettings.inferenceMode===Ye.PREFER_ON_DEVICE||n.params.apiSettings.inferenceMode===Ye.PREFER_IN_CLOUD)&&e.push($E),e.join(" ")}async function s_(n){const e=new Headers;if(e.append("Content-Type","application/json"),e.append("x-goog-api-client",n_(n)),e.append("x-goog-api-key",n.params.apiSettings.apiKey),n.params.apiSettings.automaticDataCollectionEnabled&&e.append("X-Firebase-Appid",n.params.apiSettings.appId),n.params.apiSettings.getAppCheckToken){const t=await n.params.apiSettings.getAppCheckToken();t&&(e.append("X-Firebase-AppCheck",t.token),t.error&&be.warn(`Unable to obtain a valid App Check token: ${t.error.message}`))}if(n.params.apiSettings.getAuthToken){const t=await n.params.apiSettings.getAuthToken();t&&e.append("Authorization",`Firebase ${t.accessToken}`)}return e}async function tc(n,e){const t=new t_(n);let s;const r=n.singleRequestOptions?.signal,i=n.singleRequestOptions?.timeout!=null&&n.singleRequestOptions.timeout>=0?n.singleRequestOptions.timeout:KE,o=new AbortController,B=setTimeout(()=>{o.abort(new DOMException(e_,qa)),be.debug(`Aborting request to ${t} due to timeout (${i}ms)`)},i),c=AbortSignal.any(r?[r,o.signal]:[o.signal]);if(r&&r.aborted)throw clearTimeout(B),new DOMException(r.reason??"Aborted externally before fetch",qa);try{const l={method:"POST",headers:await s_(t),signal:c,body:e};if(s=await fetch(t.toString(),l),!s.ok){let f="",C;try{const m=await s.json();f=m.error.message,m.error.details&&(f+=` ${JSON.stringify(m.error.details)}`,C=m.error.details)}catch{}throw s.status===403&&C&&C.some(m=>m.reason==="SERVICE_DISABLED")&&C.some(m=>m.links?.[0]?.description.includes("Google developers console API activation"))?new ee(Z.API_NOT_ENABLED,`The Firebase AI SDK requires the Firebase AI API ('firebasevertexai.googleapis.com') to be enabled in your Firebase project. Enable this API by visiting the Firebase Console at https://console.firebase.google.com/project/${t.params.apiSettings.project}/ailogic/ and clicking "Get started". If you enabled this API recently, wait a few minutes for the action to propagate to our systems and then retry.`,{status:s.status,statusText:s.statusText,errorDetails:C}):new ee(Z.FETCH_ERROR,`Error fetching from ${t}: [${s.status} ${s.statusText}] ${f}`,{status:s.status,statusText:s.statusText,errorDetails:C})}}catch(l){let f=l;throw l.code!==Z.FETCH_ERROR&&l.code!==Z.API_NOT_ENABLED&&l instanceof Error&&l.name!==qa&&(f=new ee(Z.ERROR,`Error fetching from ${t.toString()}: ${l.message}`),f.stack=l.stack),f}finally{clearTimeout(B)}return s}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(n){if(n.candidates&&n.candidates.length>0){if(n.candidates.length>1&&be.warn(`This response had ${n.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),Yf(n.candidates[0]))throw new ee(Z.RESPONSE_ERROR,`Response error: ${Qn(n)}. Response body stored in error.response`,{response:n});return!0}else return!1}function co(n,e=hn.IN_CLOUD){n.candidates&&!n.candidates[0].hasOwnProperty("index")&&(n.candidates[0].index=0);const t=r_(n);return t.inferenceSource=e,t}function r_(n){return n.text=()=>{if(Si(n))return yu(n,e=>!e.thought);if(n.promptFeedback)throw new ee(Z.RESPONSE_ERROR,`Text not available. ${Qn(n)}`,{response:n});return""},n.thoughtSummary=()=>{if(Si(n)){const e=yu(n,t=>!!t.thought);return e===""?void 0:e}else if(n.promptFeedback)throw new ee(Z.RESPONSE_ERROR,`Thought summary not available. ${Qn(n)}`,{response:n})},n.inlineDataParts=()=>{if(Si(n))return i_(n);if(n.promptFeedback)throw new ee(Z.RESPONSE_ERROR,`Data not available. ${Qn(n)}`,{response:n})},n.functionCalls=()=>{if(Si(n))return Wf(n);if(n.promptFeedback)throw new ee(Z.RESPONSE_ERROR,`Function call not available. ${Qn(n)}`,{response:n})},n}function yu(n,e){const t=[];if(n.candidates?.[0].content?.parts)for(const s of n.candidates?.[0].content?.parts)s.text&&e(s)&&t.push(s.text);return t.length>0?t.join(""):""}function Wf(n){if(!n)return;const e=[];if(n.candidates?.[0].content?.parts)for(const t of n.candidates?.[0].content?.parts)t.functionCall&&e.push(t.functionCall);if(e.length>0)return e}function i_(n){const e=[];if(n.candidates?.[0].content?.parts)for(const t of n.candidates?.[0].content?.parts)t.inlineData&&e.push(t);if(e.length>0)return e}const o_=[qe.RECITATION,qe.SAFETY,qe.BLOCKLIST,qe.PROHIBITED_CONTENT,qe.SPII,qe.MALFORMED_FUNCTION_CALL,qe.IMAGE_SAFETY,qe.IMAGE_PROHIBITED_CONTENT,qe.IMAGE_OTHER,qe.NO_IMAGE,qe.IMAGE_RECITATION,qe.LANGUAGE,qe.UNEXPECTED_TOOL_CALL,qe.TOO_MANY_TOOL_CALLS,qe.MISSING_THOUGHT_SIGNATURE,qe.MALFORMED_RESPONSE];function Yf(n){return!!n.finishReason&&o_.some(e=>e===n.finishReason)}function Qn(n){let e="";if((!n.candidates||n.candidates.length===0)&&n.promptFeedback)e+="Response was blocked",n.promptFeedback?.blockReason&&(e+=` due to ${n.promptFeedback.blockReason}`),n.promptFeedback?.blockReasonMessage&&(e+=`: ${n.promptFeedback.blockReasonMessage}`);else if(n.candidates?.[0]){const t=n.candidates[0];Yf(t)&&(e+=`Candidate was blocked due to ${t.finishReason}`,t.finishMessage&&(e+=`: ${t.finishMessage}`))}return e}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xf(n){if(n.safetySettings?.forEach(e=>{if(e.method)throw new ee(Z.UNSUPPORTED,"SafetySetting.method is not supported in the the Gemini Developer API. Please remove this property.")}),n.generationConfig?.topK){const e=Math.round(n.generationConfig.topK);e!==n.generationConfig.topK&&(be.warn("topK in GenerationConfig has been rounded to the nearest integer to match the format for requests to the Gemini Developer API."),n.generationConfig.topK=e)}return n}function nc(n){return{candidates:n.candidates?B_(n.candidates):void 0,prompt:n.promptFeedback?c_(n.promptFeedback):void 0,usageMetadata:n.usageMetadata}}function a_(n,e){return{generateContentRequest:{model:e,...n}}}function B_(n){const e=[];let t;return e&&n.forEach(s=>{let r;if(s.citationMetadata&&(r={citations:s.citationMetadata.citationSources}),s.safetyRatings&&(t=s.safetyRatings.map(o=>({...o,severity:o.severity??zf.HARM_SEVERITY_UNSUPPORTED,probabilityScore:o.probabilityScore??0,severityScore:o.severityScore??0}))),s.content?.parts?.some(o=>o?.videoMetadata))throw new ee(Z.UNSUPPORTED,"Part.videoMetadata is not supported in the Gemini Developer API. Please remove this property.");const i={index:s.index,content:s.content,finishReason:s.finishReason,finishMessage:s.finishMessage,safetyRatings:t,citationMetadata:r,groundingMetadata:s.groundingMetadata,urlContextMetadata:s.urlContextMetadata};e.push(i)}),e}function c_(n){const e=[];return n.safetyRatings.forEach(s=>{e.push({category:s.category,probability:s.probability,severity:s.severity??zf.HARM_SEVERITY_UNSUPPORTED,probabilityScore:s.probabilityScore??0,severityScore:s.severityScore??0,blocked:s.blocked})}),{blockReason:n.blockReason,safetyRatings:e,blockReasonMessage:n.blockReasonMessage}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tu=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;async function l_(n,e,t){const s=n.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),r=C_(s),[i,o]=r.tee(),{response:B,firstValue:c}=await u_(o,e,t);return{stream:f_(i,e,t),response:B,firstValue:c}}async function u_(n,e,t){const[s,r]=n.tee(),i=s.getReader(),{value:o}=await i.read();return{firstValue:o,response:h_(r,e,t)}}async function h_(n,e,t){const s=[],r=n.getReader();for(;;){const{done:i,value:o}=await r.read();if(i){let B=d_(s);return e.backend.backendType===Jt.GOOGLE_AI&&(B=nc(B)),co(B,t)}s.push(o)}}async function*f_(n,e,t){const s=n.getReader();for(;;){const{value:r,done:i}=await s.read();if(i)break;let o;e.backend.backendType===Jt.GOOGLE_AI?o=co(nc(r),t):o=co(r,t);const B=o.candidates?.[0];!B?.content?.parts&&!B?.finishReason&&!B?.citationMetadata&&!B?.urlContextMetadata||(yield o)}}function C_(n){const e=n.getReader();return new ReadableStream({start(s){let r="";return i();function i(){return e.read().then(({value:o,done:B})=>{if(B){if(r.trim()){s.error(new ee(Z.PARSE_FAILED,"Failed to parse stream"));return}s.close();return}r+=o;let c=r.match(Tu),l;for(;c;){try{l=JSON.parse(c[1])}catch{s.error(new ee(Z.PARSE_FAILED,`Error parsing JSON response: "${c[1]}`));return}s.enqueue(l),r=r.substring(c[0].length),c=r.match(Tu)}return i()})}}})}function d_(n){const t={promptFeedback:n[n.length-1]?.promptFeedback};for(const s of n)if(s.candidates)for(const r of s.candidates){const i=r.index||0;t.candidates||(t.candidates=[]),t.candidates[i]||(t.candidates[i]={index:r.index}),t.candidates[i].citationMetadata=r.citationMetadata,t.candidates[i].finishReason=r.finishReason,t.candidates[i].finishMessage=r.finishMessage,t.candidates[i].safetyRatings=r.safetyRatings,t.candidates[i].groundingMetadata=r.groundingMetadata;const o=r.urlContextMetadata;if(typeof o=="object"&&o!==null&&Object.keys(o).length>0&&(t.candidates[i].urlContextMetadata=o),r.content){if(!r.content.parts)continue;t.candidates[i].content||(t.candidates[i].content={role:r.content.role||"user",parts:[]});for(const B of r.content.parts){const c={...B};B.text!==""&&Object.keys(c).length>0&&t.candidates[i].content.parts.push(c)}}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p_=[Z.FETCH_ERROR,Z.ERROR,Z.API_NOT_ENABLED];async function Zf(n,e,t,s){if(!e)return{response:await s(),inferenceSource:hn.IN_CLOUD};switch(e.mode){case Ye.ONLY_ON_DEVICE:if(await e.isAvailable(n))return{response:await t(),inferenceSource:hn.ON_DEVICE};throw new ee(Z.UNSUPPORTED,"Inference mode is ONLY_ON_DEVICE, but an on-device model is not available.");case Ye.ONLY_IN_CLOUD:return{response:await s(),inferenceSource:hn.IN_CLOUD};case Ye.PREFER_IN_CLOUD:try{return{response:await s(),inferenceSource:hn.IN_CLOUD}}catch(r){if(r instanceof ee&&p_.includes(r.code)&&await e.isAvailable(n))return{response:await t(),inferenceSource:hn.ON_DEVICE};throw r}case Ye.PREFER_ON_DEVICE:return await e.isAvailable(n)?{response:await t(),inferenceSource:hn.ON_DEVICE}:{response:await s(),inferenceSource:hn.IN_CLOUD};default:throw new ee(Z.ERROR,`Unexpected infererence mode: ${e.mode}`)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g_(n,e,t,s){return n.backend.backendType===Jt.GOOGLE_AI&&(t=Xf(t)),tc({task:"streamGenerateContent",model:e,apiSettings:n,stream:!0,singleRequestOptions:s},JSON.stringify(t))}async function eC(n,e,t,s,r){const i=await Zf(t,s,()=>s.generateContentStream(t),()=>g_(n,e,t,r));return l_(i.response,n,i.inferenceSource)}async function m_(n,e,t,s){return n.backend.backendType===Jt.GOOGLE_AI&&(t=Xf(t)),tc({model:e,task:"generateContent",apiSettings:n,stream:!1,singleRequestOptions:s},JSON.stringify(t))}async function tC(n,e,t,s,r){const i=await Zf(t,s,()=>s.generateContent(t),()=>m_(n,e,t,r)),o=await E_(i.response,n);return{response:co(o,i.inferenceSource)}}async function E_(n,e){const t=await n.json();return e.backend.backendType===Jt.GOOGLE_AI?nc(t):t}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sc(n){if(n!=null){if(typeof n=="string")return{role:"system",parts:[{text:n}]};if(n.text)return{role:"system",parts:[n]};if(n.parts)return n.role?n:{role:"system",parts:n.parts}}}function mr(n){let e=[];if(typeof n=="string")e=[{text:n}];else for(const t of n)typeof t=="string"?e.push({text:t}):e.push(t);return __(e)}function __(n){const e={role:"user",parts:[]};let t=!1,s=!1;for(const r of n)"functionResponse"in r?s=!0:t=!0,e.parts.push(r);if(t&&s)throw new ee(Z.INVALID_CONTENT,"Within a single message, FunctionResponse cannot be mixed with other type of Part in the request for sending chat message.");if(!t&&!s)throw new ee(Z.INVALID_CONTENT,"No Content is provided for sending chat message.");return e}function za(n){let e;return n.contents?e=n:e={contents:[mr(n)]},n.systemInstruction&&(e.systemInstruction=sc(n.systemInstruction)),e}/**
 * @license
 * Copyright 2026 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au="SILENT_ERROR",Ru=10;class D_{constructor(e,t,s){this.params=t,this.requestOptions=s,this._history=[],this._sendPromise=Promise.resolve(),this._apiSettings=e}async getHistory(){return await this._sendPromise,this._history}async _sendMessage(e,t){let s={};await this._sendPromise;const r=[];return this._sendPromise=this._sendPromise.then(async()=>{let i,o=0;const B=this.requestOptions?.maxSequentialFunctionCalls??Ru;do{let c;if(i){o++;const C=await this._callFunctionsAsNeeded(i);c=mr(C)}else c=mr(e);const l=this._formatRequest(c,[...r]);r.push(c);const f=await this._callGenerateContent(l,t);if(f)if(s=f,i=this._getCallableFunctionCalls(f.response),f.response.candidates&&f.response.candidates.length>0){const C={parts:f.response.candidates?.[0].content.parts||[],role:f.response.candidates?.[0].content.role||"model"};r.push(C)}else{const C=Qn(f.response);C&&be.warn(`sendMessage() was unsuccessful. ${C}. Inspect response object for details.`)}else i=void 0}while(i&&o<B);i&&o>=B&&be.warn(`Automatic function calling exceeded the limit of ${B} function calls. Returning last model response.`)}),await this._sendPromise,this._history=this._history.concat(r),s}async _sendMessageStream(e,t){await this._sendPromise;const s=[],i=(async()=>{let o,B=0;const c=this.requestOptions?.maxSequentialFunctionCalls??Ru;let l;do{let f;if(o){B++;const m=await this._callFunctionsAsNeeded(o);f=mr(m)}else f=mr(e);const C=this._formatRequest(f,[...s]);if(s.push(f),l=await this._callGenerateContentStream(C,t),o=this._getCallableFunctionCalls(l.firstValue),o&&l.firstValue&&l.firstValue.candidates&&l.firstValue.candidates.length>0){const m={...l.firstValue.candidates[0].content};m.role||(m.role="model"),s.push(m)}}while(o&&B<c);return o&&B>=c&&be.warn(`Automatic function calling exceeded the limit of ${c} function calls. Returning last model response.`),{stream:l.stream,response:l.response}})();return this._sendPromise=this._sendPromise.then(async()=>i).catch(o=>{throw new Error(Au)}).then(o=>o.response).then(o=>{if(o.candidates&&o.candidates.length>0){this._history=this._history.concat(s);const B={...o.candidates[0].content};B.role||(B.role="model"),this._history.push(B)}else{const B=Qn(o);B&&be.warn(`sendMessageStream() was unsuccessful. ${B}. Inspect response object for details.`)}}).catch(o=>{o.message!==Au&&o.name!=="AbortError"&&be.error(o)}),i}_getCallableFunctionCalls(e){const t=this.params?.tools?.find(r=>r.functionDeclarations);if(!t?.functionDeclarations)return;const s=Wf(e);if(s){for(const r of s)if(!t.functionDeclarations?.some(o=>o.name===r.name&&typeof o.functionReference=="function"))return;return s}}async _callFunctionsAsNeeded(e){const t=[],s=[],r=this.params?.tools?.find(i=>i.functionDeclarations);if(r&&r.functionDeclarations){for(const o of e){const B=r.functionDeclarations.find(c=>c.name===o.name);if(B?.functionReference){const c=Promise.resolve(B.functionReference(o.args)).catch(l=>{const f=new ee(Z.ERROR,`Error in user-defined function "${B.name}": ${l.message}`);throw f.stack=l.stack,f});t.push({name:o.name,id:o.id,results:c}),s.push(c)}}await Promise.all(s);const i=[];for(const{name:o,id:B,results:c}of t){const l={name:o,response:await c};B&&(l.id=B),i.push({functionResponse:l})}return i}else throw new ee(Z.REQUEST_ERROR,'No function declarations were provided in "tools".')}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vu=["text","inlineData","functionCall","functionResponse","thought","thoughtSignature"],w_={user:["text","inlineData","functionResponse"],function:["functionResponse"],model:["text","functionCall","thought","thoughtSignature"],system:["text"]},bu={user:["model"],function:["model"],model:["user","function"],system:[]};function I_(n){let e=null;for(const t of n){const{role:s,parts:r}=t;if(!e&&s!=="user")throw new ee(Z.INVALID_CONTENT,`First Content should be with role 'user', got ${s}`);if(!Iu.includes(s))throw new ee(Z.INVALID_CONTENT,`Each item should include role field. Got ${s} but valid roles are: ${JSON.stringify(Iu)}`);if(!Array.isArray(r))throw new ee(Z.INVALID_CONTENT,"Content should have 'parts' property with an array of Parts");if(r.length===0)throw new ee(Z.INVALID_CONTENT,"Each Content should have at least one part");const i={text:0,inlineData:0,functionCall:0,functionResponse:0,thought:0,thoughtSignature:0,executableCode:0,codeExecutionResult:0};for(const B of r)for(const c of vu)c in B&&(i[c]+=1);const o=w_[s];for(const B of vu)if(!o.includes(B)&&i[B]>0)throw new ee(Z.INVALID_CONTENT,`Content with role '${s}' can't contain '${B}' part`);if(e&&!bu[s].includes(e.role))throw new ee(Z.INVALID_CONTENT,`Content with role '${s}' can't follow '${e.role}'. Valid previous roles: ${JSON.stringify(bu)}`);e=t}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_ extends D_{constructor(e,t,s,r,i){super(e,r,i),this.model=t,this.chromeAdapter=s,this.params=r,this.requestOptions=i,r?.history&&(I_(r.history),this._history=r.history),this.params?.systemInstruction!=null&&(this.params={...this.params,systemInstruction:sc(this.params.systemInstruction)})}_formatRequest(e,t){return{safetySettings:this.params?.safetySettings,generationConfig:this.params?.generationConfig,tools:this.params?.tools,toolConfig:this.params?.toolConfig,systemInstruction:this.params?.systemInstruction,contents:[...this._history,...t,e]}}_callGenerateContent(e,t){return tC(this._apiSettings,this.model,e,this.chromeAdapter,{...this.requestOptions,...t})}_callGenerateContentStream(e,t){return eC(this._apiSettings,this.model,e,this.chromeAdapter,{...this.requestOptions,...t})}async sendMessage(e,t){return this._sendMessage(e,t)}async sendMessageStream(e,t){return this._sendMessageStream(e,t)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T_(n,e,t,s){let r="";if(n.backend.backendType===Jt.GOOGLE_AI){const o=a_(t,e);r=JSON.stringify(o)}else r=JSON.stringify(t);return(await tc({model:e,task:"countTokens",apiSettings:n,stream:!1,singleRequestOptions:s},r)).json()}async function A_(n,e,t,s,r){if(s?.mode===Ye.ONLY_ON_DEVICE)throw new ee(Z.UNSUPPORTED,"countTokens() is not supported for on-device models.");return T_(n,e,t,r)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_ extends Dr{constructor(e,t,s,r){super(e,t.model),this.chromeAdapter=r,this.generationConfig=t.generationConfig||{},v_(this.generationConfig),this.safetySettings=t.safetySettings||[],this.tools=t.tools,this.toolConfig=t.toolConfig,this.systemInstruction=sc(t.systemInstruction),this.requestOptions=s||{}}async initializeDeviceModel(e){if(!this.chromeAdapter||this.chromeAdapter.mode===Ye.ONLY_IN_CLOUD)return;if(await this.chromeAdapter.downloadIfAvailable(e)===$t.UNAVAILABLE){const s=new ee(Z.API_NOT_ENABLED,"Local LanguageModel API not available in this environment.");if(this.chromeAdapter.mode===Ye.ONLY_ON_DEVICE)throw s;be.debug(s.message)}await this.chromeAdapter.downloadPromise}async generateContent(e,t){const s=za(e);return tC(this._apiSettings,this.model,{generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,...s},this.chromeAdapter,{...this.requestOptions,...t})}async generateContentStream(e,t){const s=za(e),{stream:r,response:i}=await eC(this._apiSettings,this.model,{generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,...s},this.chromeAdapter,{...this.requestOptions,...t});return{stream:r,response:i}}startChat(e){return new y_(this._apiSettings,this.model,this.chromeAdapter,{tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,generationConfig:this.generationConfig,safetySettings:this.safetySettings,...e},this.requestOptions)}async countTokens(e,t){const s=za(e);return A_(this._apiSettings,this.model,s,this.chromeAdapter,{...this.requestOptions,...t})}}function v_(n){if(n.thinkingConfig?.thinkingBudget!=null&&n.thinkingConfig?.thinkingLevel)throw new ee(Z.UNSUPPORTED,"Cannot set both thinkingBudget and thinkingLevel in a config.");if(n.responseSchema!=null&&n.responseJsonSchema!=null)throw new ee(Z.UNSUPPORTED,"Cannot set both responseSchema and responseJsonSchema in a config.");if((n.responseSchema!=null||n.responseJsonSchema!=null)&&n.responseMimeType!=="application/json"&&n.responseMimeType!=="text/x.enum")throw new ee(Z.UNSUPPORTED,'responseMimeType must be set to "application/json" or "text/x.enum" if responseSchema or responseJsonSchema are set.')}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b_(n=Zr(),e){n=Ge(n);const t=sn(n,Zn),s=e?.backend??new Ho,r={useLimitedUseAppCheckTokens:e?.useLimitedUseAppCheckTokens??!1},i=zE(s),o=t.getImmediate({identifier:i});return o.options=r,o}const S_=["mode","onDeviceParams","inCloudParams"];function nC(n,e,t){const s=e;let r;if(s.mode){for(const B of Object.keys(e))S_.includes(B)||be.warn(`When a hybrid inference mode is specified (mode is currently set to ${s.mode}), "${B}" cannot be configured at the top level. Configuration for in-cloud and on-device must be done separately in inCloudParams and onDeviceParams. Configuration values set outside of inCloudParams and onDeviceParams will be ignored.`);r=s.inCloudParams||{model:qE}}else r=e;if(!r.model)throw new ee(Z.NO_MODEL,"Must provide a model name. Example: getGenerativeModel({ model: 'my-model-name' })");const i=n.chromeAdapterFactory?.(s.mode,typeof window>"u"?void 0:window,s.onDeviceParams),o=new R_(n,r,t,i);return o._apiSettings.inferenceMode=s.mode,o}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O_(){At(new Et(Zn,XE,"PUBLIC").setMultipleInstances(!0)),rt(Du,wB),rt(Du,wB,"esm2020")}O_();const _s={apiKey:"AIzaSyCQ48hSbAQ3OHMwVgMjw5PwzJwZKLkSqIk",authDomain:"offgrid-2deda.firebaseapp.com",projectId:"offgrid-2deda",storageBucket:"offgrid-2deda.firebasestorage.app",messagingSenderId:"939570123611",appId:"1:939570123611:web:d832079a29a9f95f4a807e"},Su="6LdaNjAuAAAAAKuMlcVNIuPKlCHqHG_tc0lKgYt1",P_=!1;let Ds=null,xs=null,IB=null;function sC(){return!!(_s&&_s.apiKey&&_s.apiKey!=="YOUR_API_KEY"&&_s.projectId&&_s.projectId!=="YOUR_PROJECT_ID")}function rC(){return IB}function iC(){return Ds}function N_(){if(Ds)return!0;if(!sC())return IB="Firebase is not configured yet. Copy src/firebase-config.example.js to src/firebase-config.js and fill in your project values (see NOTES.md section 5).",!1;try{return Ds=Nf(_s),Su&&ME(Ds,{provider:new YB(Su),isTokenAutoRefreshEnabled:!0}),xs=b_(Ds,{backend:new Ho}),!0}catch(n){return IB=Uo(n),Ds=null,xs=null,!1}}async function Ou(){try{return typeof LanguageModel>"u"?"unavailable":await LanguageModel.availability()||"unknown"}catch{return"unknown"}}async function F_(n){if(!xs)throw new Error("Firebase AI Logic is not initialized.");return await nC(xs,{mode:Ye.PREFER_ON_DEVICE}).initializeDeviceModel(t=>{typeof n=="function"&&n(t)}),!0}function lo(n,e){if(!xs)throw new Error("Firebase AI Logic is not initialized.");const t={mode:n};return e&&(t.generationConfig=e),nC(xs,t)}function Uo(n){const e=String(n&&n.message||n||"Unknown error");return/app-check/i.test(e)?"App Check blocked this request. Make sure the Fraud Defense (reCAPTCHA Enterprise) site key is set and the deployed domain is allowed for that key (reCAPTCHA admin console), and (for localhost) the debug token is registered in the Firebase console.":/on-device|device model|not available/i.test(e)?"The on-device model isn't available on this browser. Enable chrome://flags/#prompt-api-for-gemini-nano-multimodal-input, use Chrome 139+ on desktop, and let the model download finish — or switch the mode to Cloud.":/quota|429|resource-exhausted/i.test(e)?"The cloud quota was exceeded. Wait a bit and try again, or switch the mode to On-device.":/permission|api key|api-key|api_key/i.test(e)?"The Firebase API key or project setup looks wrong. Check src/firebase-config.js and that the Gemini Developer API is enabled for the project.":e}async function $i(n,{mode:e,onToken:t}={}){const s=Date.now();try{const i=await lo(e||Ye.PREFER_ON_DEVICE).generateContentStream(n);let o="";for await(const c of i.stream){const l=c.text();l&&(o+=l,typeof t=="function"&&t(o))}const B=await i.response;return{text:o||B.text(),source:B.inferenceSource||"unknown",ms:Date.now()-s}}catch(r){if(/stream/i.test(String(r&&r.message||""))){const o=await lo(e||Ye.PREFER_ON_DEVICE).generateContent(n);return{text:o.response.text(),source:o.response.inferenceSource||"unknown",ms:Date.now()-s}}throw new Error(Uo(r))}}async function L_(n,e,{mode:t}={}){const s=Date.now(),r=lo(t||Ye.PREFER_ON_DEVICE,{responseMimeType:"application/json",responseSchema:e});try{const i=await r.generateContent(n),o=i.response.text();let B;try{B=JSON.parse(o)}catch{throw new Error(`The model returned text that is not valid JSON: ${o.slice(0,200)}`)}return{data:B,source:i.response.inferenceSource||"unknown",ms:Date.now()-s}}catch(i){throw new Error(Uo(i))}}async function k_(n,e,{mode:t}={}){const s=Date.now(),i={inlineData:{data:await new Promise((o,B)=>{const c=new FileReader;c.onloadend=()=>o(String(c.result).split(",")[1]),c.onerror=()=>B(new Error("Could not read the image file.")),c.readAsDataURL(e)}),mimeType:e.type}};try{const B=await lo(t||Ye.PREFER_ON_DEVICE).generateContent([n,i]);return{text:B.response.text(),source:B.response.inferenceSource||"unknown",ms:Date.now()-s}}catch(o){throw new Error(Uo(o))}}const es=1500,Jn={PREFER_ON_DEVICE:"prefer_on_device",ONLY_ON_DEVICE:"only_on_device",PREFER_IN_CLOUD:"prefer_in_cloud",ONLY_IN_CLOUD:"only_in_cloud"};function M_(n){const{noteChars:e=0,task:t="summarize",online:s=!0,deviceStatus:r="unknown",mode:i="auto",longNoteChars:o=es}=n||{},B=r==="available"||r==="downloading";return i==="on-device"?{route:"on-device",mode:Jn.ONLY_ON_DEVICE,reason:"Manual mode: on-device only. Your text never leaves this device."}:i==="cloud"?{route:"cloud",mode:Jn.ONLY_IN_CLOUD,reason:"Manual mode: cloud only. Answered by Gemini in the cloud."}:t==="ask-many"?{route:"cloud",mode:Jn.PREFER_IN_CLOUD,reason:"Multi-note question needs the cloud model — it reasons across many notes at once."}:s?e>o?{route:"cloud",mode:Jn.PREFER_IN_CLOUD,reason:`Long note (${e.toLocaleString("en-US")} chars, over the ${o.toLocaleString("en-US")}-char threshold) — handed to the cloud model for deeper reasoning.`}:B?{route:"on-device",mode:Jn.PREFER_ON_DEVICE,reason:"Short note, device model ready — answered on-device. Private, free, instant."}:{route:"cloud",mode:Jn.PREFER_IN_CLOUD,reason:"On-device model isn't ready on this browser yet, so the cloud model answered (fallback is automatic)."}:{route:"on-device",mode:Jn.PREFER_ON_DEVICE,reason:"You're offline — answered on-device. Nothing was sent anywhere."}}function x_(n){return n==="on-device"||n==="on_device"?"On-device":n==="in-cloud"||n==="in_cloud"||n==="cloud"?"Cloud":"Unknown"}const V_="offgrid-notes",G_=1,uo="notes";function jo(){return new Promise((n,e)=>{const t=indexedDB.open(V_,G_);t.onupgradeneeded=()=>{const s=t.result;s.objectStoreNames.contains(uo)||s.createObjectStore(uo,{keyPath:"id"}).createIndex("updatedAt","updatedAt",{unique:!1})},t.onsuccess=()=>n(t.result),t.onerror=()=>e(t.error)})}function Jo(n,e){return n.transaction(uo,e).objectStore(uo)}function $o(n){return new Promise((e,t)=>{n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error)})}function H_(){return`n_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,8)}`}function oC(){const n=Date.now();return{id:H_(),title:"",body:"",tags:[],imageDataUrl:null,imageName:null,ai:{},createdAt:n,updatedAt:n,syncedAt:null}}async function U_(){const n=await jo();return(await $o(Jo(n,"readonly").getAll())).sort((t,s)=>s.updatedAt-t.updatedAt)}async function j_(n){const e=await jo();return $o(Jo(e,"readonly").get(n))}async function ts(n){const e=await jo(),t={...n,updatedAt:Date.now()};return await $o(Jo(e,"readwrite").put(t)),t}async function J_(n){const e=await jo();await $o(Jo(e,"readwrite").delete(n))}function $_(){const n=oC();return n.title="SAMPLE — Field notes, campus visit",n.body=["Visited the campus library at 9am. The reading room was full — students","queue for the group study rooms from 8:30. The librarian said the new","silent zone on floor 3 opens next month.","","Ideas: run a short survey about study-room booking. Ask 10 students what","time slots they miss most. Check if the student council already collects","this data — don't duplicate their work.","","Follow up: email the librarian about the silent zone rules, and ask the","council about their survey results before Friday."].join(`
`),n.tags=["sample","field-notes"],n}function aC(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const K_=aC,BC=new Mn("auth","Firebase",aC());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho=new $s("@firebase/auth");function Ki(n,...e){ho.logLevel<=Be.WARN&&ho.warn(`Auth (${Rn}): ${n}`,...e)}function qi(n,...e){ho.logLevel<=Be.ERROR&&ho.error(`Auth (${Rn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(n,...e){throw ic(n,...e)}function Ht(n,...e){return ic(n,...e)}function rc(n,e,t){const s={...K_(),[e]:t};return new Mn("auth","Firebase",s).create(e,{appName:n.name})}function Dn(n){return rc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ic(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return BC.create(n,...e)}function te(n,e,...t){if(!n)throw ic(e,...t)}function qt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw qi(e),new Error(e)}function en(n,e){n||qt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yB(){return typeof self<"u"&&self.location?.href||""}function q_(){return Pu()==="http:"||Pu()==="https:"}function Pu(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(q_()||Pg()||"connection"in navigator)?navigator.onLine:!0}function Q_(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,t){this.shortDelay=e,this.longDelay=t,en(t>e,"Short delay should be less than long delay!"),this.isMobile=bg()||Ng()}get(){return z_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oc(n,e){en(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;qt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;qt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;qt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y_=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],X_=new ei(3e4,6e4);function Ko(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Ks(n,e,t,s,r={}){return lC(n,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const B=Yr({...o,key:n.config.apiKey}).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const l={method:e,headers:c,...i};return Og()||(l.referrerPolicy="strict-origin-when-cross-origin"),n.emulatorConfig&&Xr(n.emulatorConfig.host)&&(l.credentials="include"),cC.fetch()(await hC(n,n.config.apiHost,t,B),l)})}async function lC(n,e,t){n._canInitEmulator=!1;const s={...W_,...e};try{const r=new Z_(n),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Oi(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const B=i.ok?o.errorMessage:o.error.message,[c,l]=B.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Oi(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Oi(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw Oi(n,"user-disabled",o);const f=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw rc(n,f,l);Zt(n,f)}}catch(r){if(r instanceof Dt)throw r;Zt(n,"network-request-failed",{message:String(r)})}}async function uC(n,e,t,s,r={}){const i=await Ks(n,e,t,s,r);return"mfaPendingCredential"in i&&Zt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function hC(n,e,t,s){const r=`${e}${t}?${s}`,i=n,o=i.config.emulator?oc(n.config,r):`${n.config.apiScheme}://${r}`;return Y_.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class Z_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Ht(this.auth,"network-request-failed")),X_.get())})}}function Oi(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const r=Ht(n,e,s);return r.customData._tokenResponse=t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eD(n,e){return Ks(n,"POST","/v1/accounts:delete",e)}async function fo(n,e){return Ks(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function tD(n,e=!1){const t=Ge(n),s=await t.getIdToken(e),r=ac(s);te(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i?.sign_in_provider;return{claims:r,token:s,authTime:wr(Qa(r.auth_time)),issuedAtTime:wr(Qa(r.iat)),expirationTime:wr(Qa(r.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Qa(n){return Number(n)*1e3}function ac(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return qi("JWT malformed, contained fewer than 3 sections"),null;try{const r=Tf(t);return r?JSON.parse(r):(qi("Failed to decode base64 JWT payload"),null)}catch(r){return qi("Caught error parsing JWT payload as JSON",r?.toString()),null}}function Nu(n){const e=ac(n);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nr(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Dt&&nD(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function nD({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TB{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=wr(this.lastLoginAt),this.creationTime=wr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Co(n){const e=n.auth,t=await n.getIdToken(),s=await Nr(n,fo(e,{idToken:t}));te(s?.users.length,e,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const i=r.providerUserInfo?.length?fC(r.providerUserInfo):[],o=iD(n.providerData,i),B=n.isAnonymous,c=!(n.email&&r.passwordHash)&&!o?.length,l=B?c:!1,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new TB(r.createdAt,r.lastLoginAt),isAnonymous:l};Object.assign(n,f)}async function rD(n){const e=Ge(n);await Co(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function iD(n,e){return[...n.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function fC(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oD(n,e){const t=await lC(n,{},async()=>{const s=Yr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=n.config,o=await hC(n,r,"/v1/token",`key=${i}`),B=await n._getAdditionalHeaders();B["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:B,body:s};return n.emulatorConfig&&Xr(n.emulatorConfig.host)&&(c.credentials="include"),cC.fetch()(o,c)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function aD(n,e){return Ks(n,"POST","/v2/accounts:revokeToken",Ko(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Nu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){te(e.length!==0,"internal-error");const t=Nu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:r,expiresIn:i}=await oD(e,t);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:r,expirationTime:i}=t,o=new Os;return s&&(te(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(te(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(te(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Os,this.toJSON())}_performRefresh(){return qt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(n,e){te(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Pt{constructor({uid:e,auth:t,stsTokenManager:s,...r}){this.providerId="firebase",this.proactiveRefresh=new sD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new TB(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Nr(this,this.stsTokenManager.getToken(this.auth,e));return te(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return tD(this,e)}reload(){return rD(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Pt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Co(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(yt(this.auth.app))return Promise.reject(Dn(this.auth));const e=await this.getIdToken();return await Nr(this,eD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,r=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,B=t.tenantId??void 0,c=t._redirectEventId??void 0,l=t.createdAt??void 0,f=t.lastLoginAt??void 0,{uid:C,emailVerified:m,isAnonymous:v,providerData:R,stsTokenManager:N}=t;te(C&&N,e,"internal-error");const x=Os.fromJSON(this.name,N);te(typeof C=="string",e,"internal-error"),un(s,e.name),un(r,e.name),te(typeof m=="boolean",e,"internal-error"),te(typeof v=="boolean",e,"internal-error"),un(i,e.name),un(o,e.name),un(B,e.name),un(c,e.name),un(l,e.name),un(f,e.name);const J=new Pt({uid:C,auth:e,email:r,emailVerified:m,displayName:s,isAnonymous:v,photoURL:o,phoneNumber:i,tenantId:B,stsTokenManager:x,createdAt:l,lastLoginAt:f});return R&&Array.isArray(R)&&(J.providerData=R.map(K=>({...K}))),c&&(J._redirectEventId=c),J}static async _fromIdTokenResponse(e,t,s=!1){const r=new Os;r.updateFromServerResponse(t);const i=new Pt({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Co(i),i}static async _fromGetAccountInfoResponse(e,t,s){const r=t.users[0];te(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?fC(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!i?.length,B=new Os;B.updateFromIdToken(s);const c=new Pt({uid:r.localId,auth:e,stsTokenManager:B,isAnonymous:o}),l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new TB(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!i?.length};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fu=new Map;function zt(n){en(n instanceof Function,"Expected a class definition");let e=Fu.get(n);return e?(en(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Fu.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}CC.type="NONE";const Lu=CC;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(n,e,t){return`firebase:${n}:${e}:${t}`}class ns{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=zi(this.userKey,r.apiKey,i),this.fullPersistenceKey=zi("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t);try{this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}catch{}}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await fo(this.auth,{idToken:e}).catch(()=>{});return t?Pt._fromGetAccountInfoResponse(this.auth,t,e):null}return Pt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){try{this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}catch{}}static async create(e,t,s="authUser"){if(!t.length)return new ns(zt(Lu),e,s);const r=(await Promise.all(t.map(async l=>{try{if(await l._isAvailable())return l}catch{return}}))).filter(l=>l);let i=r[0]||zt(Lu);const o=zi(s,e.config.apiKey,e.name);let B=null;for(const l of t)try{const f=await l._get(o);if(f){let C;if(typeof f=="string"){const m=await fo(e,{idToken:f}).catch(()=>{});if(!m)break;C=await Pt._fromGetAccountInfoResponse(e,m,f)}else C=Pt._fromJSON(e,f);l!==i&&(B=C),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ns(i,e,s):(i=c[0],B&&await i._set(o,B.toJSON()),await Promise.all(t.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new ns(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(mC(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(dC(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_C(e))return"Blackberry";if(DC(e))return"Webos";if(pC(e))return"Safari";if((e.includes("chrome/")||gC(e))&&!e.includes("edge/"))return"Chrome";if(EC(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if(s?.length===2)return s[1]}return"Other"}function dC(n=Xe()){return/firefox\//i.test(n)}function pC(n=Xe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gC(n=Xe()){return/crios\//i.test(n)}function mC(n=Xe()){return/iemobile/i.test(n)}function EC(n=Xe()){return/android/i.test(n)}function _C(n=Xe()){return/blackberry/i.test(n)}function DC(n=Xe()){return/webos/i.test(n)}function Bc(n=Xe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function BD(n=Xe()){return Bc(n)&&!!window.navigator?.standalone}function cD(){return Fg()&&document.documentMode===10}function wC(n=Xe()){return Bc(n)||EC(n)||DC(n)||_C(n)||/windows phone/i.test(n)||mC(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IC(n,e=[]){let t;switch(n){case"Browser":t=ku(Xe());break;case"Worker":t=`${ku(Xe())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Rn}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=i=>new Promise((o,B)=>{try{const c=e(i);o(c)}catch(c){B(c)}});s.onAbort=t,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uD(n,e={}){return Ks(n,"GET","/v2/passwordPolicy",Ko(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hD=6;class fD{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??hD,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CD{constructor(e,t,s,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Mu(this),this.idTokenSubscription=new Mu(this),this.beforeStateQueue=new lD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=BC,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=zt(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted){try{this.persistenceManager=await ns.create(this,e)}catch(s){Ki(`Failed to initialize persistence: ${s}`),this.persistenceManager=await ns.create(this,[])}finally{this._resolvePersistenceManagerAvailable?.()}if(!this._deleted){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}try{await this.initializeCurrentUser(t)}catch(s){Ki(`Failed to initialize current user: ${s}`),await this.directlySetCurrentUser(null).catch(()=>{})}this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await fo(this,{idToken:e}),s=await Pt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(yt(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=s?._redirectEventId,B=await this.tryRedirectSignIn(e);(!i||i===o)&&B?.user&&(s=B.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(i){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Co(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Q_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(yt(this.app))return Promise.reject(Dn(this));const t=e?Ge(e):null;return t&&te(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return yt(this.app)?Promise.reject(Dn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return yt(this.app)?Promise.reject(Dn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(zt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await uD(this),t=new fD(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Mn("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await aD(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&zt(e)||this._popupRedirectResolver;te(t,this,"argument-error"),this.redirectPersistenceManager=await ns.create(this,[zt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const B=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(B,this,"internal-error"),B.then(()=>{o||i(this.currentUser)}).catch(c=>{if(!o)if(typeof t!="function"&&t.error)t.error(c);else if(s)s(c);else throw c}),typeof t=="function"){const c=e.addObserver(t,s,r);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){if(this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,this.persistenceManager)try{e?await this.persistenceManager.setCurrentUser(e):await this.persistenceManager.removeCurrentUser()}catch(t){const s=t?.message||String(t),r=rc(this,"internal-error",`An internal AuthError has occurred: ${s}`);throw r.customData={originalError:t},r}}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=IC(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(yt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Ki(`Error while retrieving App Check token: ${e.error}`),e?.token}}function qo(n){return Ge(n)}class Mu{constructor(e){this.auth=e,this.observer=null,this.addObserver=Gg(t=>this.observer=t)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function dD(n){cc=n}function pD(n){return cc.loadJS(n)}function gD(){return cc.gapiScript}function mD(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ED(n,e){const t=sn(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(An(i,e??{}))return r;Zt(r,"already-initialized")}return t.initialize({options:e})}function _D(n,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(zt);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e?.popupRedirectResolver)}function DD(n,e,t){const s=qo(n);te(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=yC(e),{host:o,port:B}=wD(e),c=B===null?"":`:${B}`,l={url:`${i}//${o}${c}/`},f=Object.freeze({host:o,port:B,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){te(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),te(An(l,s.config.emulator)&&An(f,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=l,s.emulatorConfig=f,s.settings.appVerificationDisabledForTesting=!0,Xr(o)?bf(`${i}//${o}${c}`):ID()}function yC(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function wD(n){const e=yC(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:xu(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:xu(o)}}}function xu(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function ID(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return qt("not implemented")}_getIdTokenResponse(e){return qt("not implemented")}_linkToIdToken(e,t){return qt("not implemented")}_getReauthenticationResolver(e){return qt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ps(n,e){return uC(n,"POST","/v1/accounts:signInWithIdp",Ko(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yD="http://localhost";class os extends TC{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new os(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Zt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,...i}=t;if(!s||!r)return null;const o=new os(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Ps(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Ps(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ps(e,t)}buildRequest(){const e={requestUri:yD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Yr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends AC{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends ti{constructor(){super("facebook.com")}static credential(e){return os._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cn.credential(e.oauthAccessToken)}catch{return null}}}Cn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Cn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends ti{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return os._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return dn.credential(t,s)}catch{return null}}}dn.GOOGLE_SIGN_IN_METHOD="google.com";dn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends ti{constructor(){super("github.com")}static credential(e){return os._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pn.credential(e.oauthAccessToken)}catch{return null}}}pn.GITHUB_SIGN_IN_METHOD="github.com";pn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends ti{constructor(){super("twitter.com")}static credential(e,t){return os._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return gn.credential(t,s)}catch{return null}}}gn.TWITTER_SIGN_IN_METHOD="twitter.com";gn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TD(n,e){return uC(n,"POST","/v1/accounts:signUp",Ko(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,r=!1){const i=await Pt._fromIdTokenResponse(e,s,r),o=Vu(s);return new vn({user:i,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const r=Vu(s);return new vn({user:e,providerId:r,_tokenResponse:s,operationType:t})}}function Vu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AD(n){if(yt(n.app))return Promise.reject(Dn(n));const e=qo(n);if(await e._initializationPromise,e.currentUser?.isAnonymous)return new vn({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await TD(e,{returnSecureToken:!0}),s=await vn._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po extends Dt{constructor(e,t,s,r){super(t.code,t.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,po.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,r){return new po(e,t,s,r)}}function RC(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?po._fromErrorAndOperation(n,i,e,s):i})}async function RD(n,e,t=!1){const s=await Nr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return vn._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vD(n,e,t=!1){const{auth:s}=n;if(yt(s.app))return Promise.reject(Dn(s));const r="reauthenticate";try{const i=await Nr(n,RC(s,r,e,n),t);te(i.idToken,s,"internal-error");const o=ac(i.idToken);te(o,s,"internal-error");const{sub:B}=o;return te(n.uid===B,s,"user-mismatch"),vn._forOperation(n,r,i)}catch(i){throw i?.code==="auth/user-not-found"&&Zt(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bD(n,e,t=!1){if(yt(n.app))return Promise.reject(Dn(n));const s="signIn",r=await RC(n,s,e),i=await vn._fromIdTokenResponse(n,s,r);return t||await n._updateCurrentUser(i.user),i}function SD(n,e,t,s){return Ge(n).onIdTokenChanged(e,t,s)}function OD(n,e,t){return Ge(n).beforeAuthStateChanged(e,t)}const go="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(go,"1"),this.storage.removeItem(go),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PD=1e3,ND=10;class bC extends vC{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=wC(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),r=this.localCache[t];s!==r&&e(t,r,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,B,c)=>{this.notifyListeners(o,c)});return}const s=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);cD()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,ND):r()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},PD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}bC.type="LOCAL";const FD=bC;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC extends vC{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}SC.type="SESSION";const OC=SC;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LD(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const s=new zo(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!o?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const B=Array.from(o).map(async l=>l(t.origin,i)),c=await LD(B);t.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((B,c)=>{const l=lc("",20);r.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(C){const m=C;if(m.data.eventId===l)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),B(m.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(){return window}function MD(n){Ut().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PC(){return typeof Ut().WorkerGlobalScope<"u"&&typeof Ut().importScripts=="function"}async function xD(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function VD(){return navigator?.serviceWorker?.controller||null}function GD(){return PC()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC="firebaseLocalStorageDb",HD=1,mo="firebaseLocalStorage",FC="fbase_key";class ni{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Qo(n,e){return n.transaction([mo],e?"readwrite":"readonly").objectStore(mo)}function UD(){const n=indexedDB.deleteDatabase(NC);return new ni(n).toPromise()}function LC(){const n=indexedDB.open(NC,HD);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(mo,{keyPath:FC})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(mo)?e(s):(s.close(),await UD(),e(await LC()))})})}async function Gu(n,e,t){const s=Qo(n,!0).put({[FC]:e,value:t});return new ni(s).toPromise()}async function jD(n,e){const t=Qo(n,!1).get(e),s=await new ni(t).toPromise();return s===void 0?null:s.value}function Hu(n,e){const t=Qo(n,!0).delete(e);return new ni(t).toPromise()}const JD=800,$D=3;class kC{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow))}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=LC(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>$D)throw s;if(this.dbPromise){const r=this.dbPromise;this.dbPromise=null;try{(await r).close()}catch{}}}}async initializeServiceWorkerMessaging(){return PC()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zo._getInstance(GD()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await xD(),!this.activeServiceWorker)return;this.sender=new kD(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||VD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await Gu(e,go,"1"),await Hu(e,go)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Gu(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>jD(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Hu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isClosing)return[];try{const e=await this._withRetries(r=>{const i=Qo(r,!1).getAll();return new ni(i).toPromise()});if(this.isClosing)return[];if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}catch(e){return this.isClosing||Ki(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),JD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}kC.type="LOCAL";const KD=kC;new ei(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qD(n,e){return e?zt(e):(te(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc extends TC{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ps(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ps(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ps(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function zD(n){return bD(n.auth,new uc(n),n.bypassAuthState)}function QD(n){const{auth:e,user:t}=n;return te(t,e,"internal-error"),vD(t,new uc(n),n.bypassAuthState)}async function WD(n){const{auth:e,user:t}=n;return te(t,e,"internal-error"),RD(t,new uc(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(e,t,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:r,tenantId:i,error:o,type:B}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(B)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zD;case"linkViaPopup":case"linkViaRedirect":return WD;case"reauthViaPopup":case"reauthViaRedirect":return QD;default:Zt(this.auth,"internal-error")}}resolve(e){en(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){en(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YD=new ei(2e3,1e4);class Ss extends MC{constructor(e,t,s,r,i){super(e,t,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Ss.currentPopupAction&&Ss.currentPopupAction.cancel(),Ss.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){en(this.filter.length===1,"Popup operations only handle one event");const e=lc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ht(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Ht(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ss.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ht(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,YD.get())};e()}}Ss.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XD="pendingRedirect",Qi=new Map;class ZD extends MC{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Qi.get(this.auth._key());if(!e){try{const s=await ew(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Qi.set(this.auth._key(),e)}return this.bypassAuthState||Qi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ew(n,e){const t=sw(e),s=nw(n);if(!await s._isAvailable())return!1;const r=await s._get(t)==="true";return await s._remove(t),r}function tw(n,e){Qi.set(n._key(),e)}function nw(n){return zt(n._redirectPersistence)}function sw(n){return zi(XD,n.config.apiKey,n.name)}async function rw(n,e,t=!1){if(yt(n.app))return Promise.reject(Dn(n));const s=qo(n),r=qD(s,e),o=await new ZD(s,r,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw=600*1e3;class ow{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!aw(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!xC(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";t.onError(Ht(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=iw&&this.cachedEventUids.clear(),this.cachedEventUids.has(Uu(e))}saveEventToCache(e){this.cachedEventUids.add(Uu(e)),this.lastProcessedEventTime=Date.now()}}function Uu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function xC({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function aw(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xC(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bw(n,e={}){return Ks(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,lw=/^https?/;async function uw(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Bw(n);for(const t of e)try{if(hw(t))return}catch{}Zt(n,"unauthorized-domain")}function hw(n){const e=yB(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!lw.test(t))return!1;if(cw.test(n))return s===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw=new ei(3e4,6e4);function ju(){const n=Ut().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Cw(n){return new Promise((e,t)=>{function s(){ju(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ju(),t(Ht(n,"network-request-failed"))},timeout:fw.get()})}if(Ut().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Ut().gapi?.load)s();else{const r=mD("iframefcb");return Ut()[r]=()=>{gapi.load?s():t(Ht(n,"network-request-failed"))},pD(`${gD()}?onload=${r}`).catch(i=>t(i))}}).catch(e=>{throw Wi=null,e})}let Wi=null;function dw(n){return Wi=Wi||Cw(n),Wi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pw=new ei(5e3,15e3),gw="__/auth/iframe",mw="emulator/auth/iframe",Ew={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_w=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Dw(n){const e=n.config;te(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?oc(e,mw):`https://${n.config.authDomain}/${gw}`,s={apiKey:e.apiKey,appName:n.name,v:Rn},r=_w.get(n.config.apiHost);r&&(s.eid=r);const i=n._getFrameworks();return i.length&&(s.fw=i.join(",")),`${t}?${Yr(s).slice(1)}`}async function ww(n){const e=await dw(n),t=Ut().gapi;return te(t,n,"internal-error"),e.open({where:document.body,url:Dw(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ew,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Ht(n,"network-request-failed"),B=Ut().setTimeout(()=>{i(o)},pw.get());function c(){Ut().clearTimeout(B),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yw=500,Tw=600,Aw="_blank",Rw="http://localhost";class Ju{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vw(n,e,t,s=yw,r=Tw){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let B="";const c={...Iw,width:s.toString(),height:r.toString(),top:i,left:o},l=Xe().toLowerCase();t&&(B=gC(l)?Aw:t),dC(l)&&(e=e||Rw,c.scrollbars="yes");const f=Object.entries(c).reduce((m,[v,R])=>`${m}${v}=${R},`,"");if(BD(l)&&B!=="_self")return bw(e||"",B),new Ju(null);const C=window.open(e||"",B,f);te(C,n,"popup-blocked");try{C.focus()}catch{}return new Ju(C)}function bw(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sw="__/auth/handler",Ow="emulator/auth/handler",Pw=encodeURIComponent("fac");async function $u(n,e,t,s,r,i){te(n.config.authDomain,n,"auth-domain-config-required"),te(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Rn,eventId:r};if(e instanceof AC){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Vg(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,C]of Object.entries({}))o[f]=C}if(e instanceof ti){const f=e.getScopes().filter(C=>C!=="");f.length>0&&(o.scopes=f.join(","))}n.tenantId&&(o.tid=n.tenantId);const B=o;for(const f of Object.keys(B))B[f]===void 0&&delete B[f];const c=await n._getAppCheckToken(),l=c?`#${Pw}=${encodeURIComponent(c)}`:"";return`${Nw(n)}?${Yr(B).slice(1)}${l}`}function Nw({config:n}){return n.emulator?oc(n,Ow):`https://${n.authDomain}/${Sw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa="webStorageSupport";class Fw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=OC,this._completeRedirectFn=rw,this._overrideRedirectResult=tw}async _openPopup(e,t,s,r){en(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await $u(e,t,s,yB(),r);return vw(e,i,lc())}async _openRedirect(e,t,s,r){await this._originValidation(e);const i=await $u(e,t,s,yB(),r);return MD(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(en(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await ww(e),s=new ow(e);return t.register("authEvent",r=>(te(r?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Wa,{type:Wa},r=>{const i=r?.[0]?.[Wa];i!==void 0&&t(!!i),Zt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=uw(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return wC()||pC()||Bc()}}const Lw=Fw;var Ku="@firebase/auth",qu="1.13.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mw(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function xw(n){At(new Et("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:B}=s.options;te(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:B,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:IC(n)},l=new CD(s,r,i,c);return _D(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),At(new Et("auth-internal",e=>{const t=qo(e.getProvider("auth").getImmediate());return(s=>new kw(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),rt(Ku,qu,Mw(n)),rt(Ku,qu,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vw=300,Gw=vf("authIdTokenMaxAge")||Vw;let zu=null;const Hw=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>Gw)return;const r=t?.token;zu!==r&&(zu=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Uw(n=Zr()){const e=sn(n,"auth");if(e.isInitialized())return e.getImmediate();const t=ED(n,{popupRedirectResolver:Lw,persistence:[KD,FD,OC]}),s=vf("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=Hw(i.toString());OD(t,o,()=>o(t.currentUser)),SD(t,B=>o(B))}}const r=Af("auth");return r&&DD(t,`http://${r}`),t}function jw(){return document.getElementsByTagName("head")?.[0]??document}dD({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=r=>{const i=Ht("internal-error");i.customData=r,t(i)},s.type="text/javascript",s.charset="UTF-8",jw().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});xw("Browser");var Qu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hc;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,E){function D(){}D.prototype=E.prototype,T.F=E.prototype,T.prototype=new D,T.prototype.constructor=T,T.D=function(A,y,S){for(var _=Array(arguments.length-2),it=2;it<arguments.length;it++)_[it-2]=arguments[it];return E.prototype[y].apply(A,_)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(T,E,D){D||(D=0);const A=Array(16);if(typeof E=="string")for(var y=0;y<16;++y)A[y]=E.charCodeAt(D++)|E.charCodeAt(D++)<<8|E.charCodeAt(D++)<<16|E.charCodeAt(D++)<<24;else for(y=0;y<16;++y)A[y]=E[D++]|E[D++]<<8|E[D++]<<16|E[D++]<<24;E=T.g[0],D=T.g[1],y=T.g[2];let S=T.g[3],_;_=E+(S^D&(y^S))+A[0]+3614090360&4294967295,E=D+(_<<7&4294967295|_>>>25),_=S+(y^E&(D^y))+A[1]+3905402710&4294967295,S=E+(_<<12&4294967295|_>>>20),_=y+(D^S&(E^D))+A[2]+606105819&4294967295,y=S+(_<<17&4294967295|_>>>15),_=D+(E^y&(S^E))+A[3]+3250441966&4294967295,D=y+(_<<22&4294967295|_>>>10),_=E+(S^D&(y^S))+A[4]+4118548399&4294967295,E=D+(_<<7&4294967295|_>>>25),_=S+(y^E&(D^y))+A[5]+1200080426&4294967295,S=E+(_<<12&4294967295|_>>>20),_=y+(D^S&(E^D))+A[6]+2821735955&4294967295,y=S+(_<<17&4294967295|_>>>15),_=D+(E^y&(S^E))+A[7]+4249261313&4294967295,D=y+(_<<22&4294967295|_>>>10),_=E+(S^D&(y^S))+A[8]+1770035416&4294967295,E=D+(_<<7&4294967295|_>>>25),_=S+(y^E&(D^y))+A[9]+2336552879&4294967295,S=E+(_<<12&4294967295|_>>>20),_=y+(D^S&(E^D))+A[10]+4294925233&4294967295,y=S+(_<<17&4294967295|_>>>15),_=D+(E^y&(S^E))+A[11]+2304563134&4294967295,D=y+(_<<22&4294967295|_>>>10),_=E+(S^D&(y^S))+A[12]+1804603682&4294967295,E=D+(_<<7&4294967295|_>>>25),_=S+(y^E&(D^y))+A[13]+4254626195&4294967295,S=E+(_<<12&4294967295|_>>>20),_=y+(D^S&(E^D))+A[14]+2792965006&4294967295,y=S+(_<<17&4294967295|_>>>15),_=D+(E^y&(S^E))+A[15]+1236535329&4294967295,D=y+(_<<22&4294967295|_>>>10),_=E+(y^S&(D^y))+A[1]+4129170786&4294967295,E=D+(_<<5&4294967295|_>>>27),_=S+(D^y&(E^D))+A[6]+3225465664&4294967295,S=E+(_<<9&4294967295|_>>>23),_=y+(E^D&(S^E))+A[11]+643717713&4294967295,y=S+(_<<14&4294967295|_>>>18),_=D+(S^E&(y^S))+A[0]+3921069994&4294967295,D=y+(_<<20&4294967295|_>>>12),_=E+(y^S&(D^y))+A[5]+3593408605&4294967295,E=D+(_<<5&4294967295|_>>>27),_=S+(D^y&(E^D))+A[10]+38016083&4294967295,S=E+(_<<9&4294967295|_>>>23),_=y+(E^D&(S^E))+A[15]+3634488961&4294967295,y=S+(_<<14&4294967295|_>>>18),_=D+(S^E&(y^S))+A[4]+3889429448&4294967295,D=y+(_<<20&4294967295|_>>>12),_=E+(y^S&(D^y))+A[9]+568446438&4294967295,E=D+(_<<5&4294967295|_>>>27),_=S+(D^y&(E^D))+A[14]+3275163606&4294967295,S=E+(_<<9&4294967295|_>>>23),_=y+(E^D&(S^E))+A[3]+4107603335&4294967295,y=S+(_<<14&4294967295|_>>>18),_=D+(S^E&(y^S))+A[8]+1163531501&4294967295,D=y+(_<<20&4294967295|_>>>12),_=E+(y^S&(D^y))+A[13]+2850285829&4294967295,E=D+(_<<5&4294967295|_>>>27),_=S+(D^y&(E^D))+A[2]+4243563512&4294967295,S=E+(_<<9&4294967295|_>>>23),_=y+(E^D&(S^E))+A[7]+1735328473&4294967295,y=S+(_<<14&4294967295|_>>>18),_=D+(S^E&(y^S))+A[12]+2368359562&4294967295,D=y+(_<<20&4294967295|_>>>12),_=E+(D^y^S)+A[5]+4294588738&4294967295,E=D+(_<<4&4294967295|_>>>28),_=S+(E^D^y)+A[8]+2272392833&4294967295,S=E+(_<<11&4294967295|_>>>21),_=y+(S^E^D)+A[11]+1839030562&4294967295,y=S+(_<<16&4294967295|_>>>16),_=D+(y^S^E)+A[14]+4259657740&4294967295,D=y+(_<<23&4294967295|_>>>9),_=E+(D^y^S)+A[1]+2763975236&4294967295,E=D+(_<<4&4294967295|_>>>28),_=S+(E^D^y)+A[4]+1272893353&4294967295,S=E+(_<<11&4294967295|_>>>21),_=y+(S^E^D)+A[7]+4139469664&4294967295,y=S+(_<<16&4294967295|_>>>16),_=D+(y^S^E)+A[10]+3200236656&4294967295,D=y+(_<<23&4294967295|_>>>9),_=E+(D^y^S)+A[13]+681279174&4294967295,E=D+(_<<4&4294967295|_>>>28),_=S+(E^D^y)+A[0]+3936430074&4294967295,S=E+(_<<11&4294967295|_>>>21),_=y+(S^E^D)+A[3]+3572445317&4294967295,y=S+(_<<16&4294967295|_>>>16),_=D+(y^S^E)+A[6]+76029189&4294967295,D=y+(_<<23&4294967295|_>>>9),_=E+(D^y^S)+A[9]+3654602809&4294967295,E=D+(_<<4&4294967295|_>>>28),_=S+(E^D^y)+A[12]+3873151461&4294967295,S=E+(_<<11&4294967295|_>>>21),_=y+(S^E^D)+A[15]+530742520&4294967295,y=S+(_<<16&4294967295|_>>>16),_=D+(y^S^E)+A[2]+3299628645&4294967295,D=y+(_<<23&4294967295|_>>>9),_=E+(y^(D|~S))+A[0]+4096336452&4294967295,E=D+(_<<6&4294967295|_>>>26),_=S+(D^(E|~y))+A[7]+1126891415&4294967295,S=E+(_<<10&4294967295|_>>>22),_=y+(E^(S|~D))+A[14]+2878612391&4294967295,y=S+(_<<15&4294967295|_>>>17),_=D+(S^(y|~E))+A[5]+4237533241&4294967295,D=y+(_<<21&4294967295|_>>>11),_=E+(y^(D|~S))+A[12]+1700485571&4294967295,E=D+(_<<6&4294967295|_>>>26),_=S+(D^(E|~y))+A[3]+2399980690&4294967295,S=E+(_<<10&4294967295|_>>>22),_=y+(E^(S|~D))+A[10]+4293915773&4294967295,y=S+(_<<15&4294967295|_>>>17),_=D+(S^(y|~E))+A[1]+2240044497&4294967295,D=y+(_<<21&4294967295|_>>>11),_=E+(y^(D|~S))+A[8]+1873313359&4294967295,E=D+(_<<6&4294967295|_>>>26),_=S+(D^(E|~y))+A[15]+4264355552&4294967295,S=E+(_<<10&4294967295|_>>>22),_=y+(E^(S|~D))+A[6]+2734768916&4294967295,y=S+(_<<15&4294967295|_>>>17),_=D+(S^(y|~E))+A[13]+1309151649&4294967295,D=y+(_<<21&4294967295|_>>>11),_=E+(y^(D|~S))+A[4]+4149444226&4294967295,E=D+(_<<6&4294967295|_>>>26),_=S+(D^(E|~y))+A[11]+3174756917&4294967295,S=E+(_<<10&4294967295|_>>>22),_=y+(E^(S|~D))+A[2]+718787259&4294967295,y=S+(_<<15&4294967295|_>>>17),_=D+(S^(y|~E))+A[9]+3951481745&4294967295,T.g[0]=T.g[0]+E&4294967295,T.g[1]=T.g[1]+(y+(_<<21&4294967295|_>>>11))&4294967295,T.g[2]=T.g[2]+y&4294967295,T.g[3]=T.g[3]+S&4294967295}s.prototype.v=function(T,E){E===void 0&&(E=T.length);const D=E-this.blockSize,A=this.C;let y=this.h,S=0;for(;S<E;){if(y==0)for(;S<=D;)r(this,T,S),S+=this.blockSize;if(typeof T=="string"){for(;S<E;)if(A[y++]=T.charCodeAt(S++),y==this.blockSize){r(this,A),y=0;break}}else for(;S<E;)if(A[y++]=T[S++],y==this.blockSize){r(this,A),y=0;break}}this.h=y,this.o+=E},s.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var E=1;E<T.length-8;++E)T[E]=0;E=this.o*8;for(var D=T.length-8;D<T.length;++D)T[D]=E&255,E/=256;for(this.v(T),T=Array(16),E=0,D=0;D<4;++D)for(let A=0;A<32;A+=8)T[E++]=this.g[D]>>>A&255;return T};function i(T,E){var D=B;return Object.prototype.hasOwnProperty.call(D,T)?D[T]:D[T]=E(T)}function o(T,E){this.h=E;const D=[];let A=!0;for(let y=T.length-1;y>=0;y--){const S=T[y]|0;A&&S==E||(D[y]=S,A=!1)}this.g=D}var B={};function c(T){return-128<=T&&T<128?i(T,function(E){return new o([E|0],E<0?-1:0)}):new o([T|0],T<0?-1:0)}function l(T){if(isNaN(T)||!isFinite(T))return C;if(T<0)return x(l(-T));const E=[];let D=1;for(let A=0;T>=D;A++)E[A]=T/D|0,D*=4294967296;return new o(E,0)}function f(T,E){if(T.length==0)throw Error("number format error: empty string");if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(T.charAt(0)=="-")return x(f(T.substring(1),E));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const D=l(Math.pow(E,8));let A=C;for(let S=0;S<T.length;S+=8){var y=Math.min(8,T.length-S);const _=parseInt(T.substring(S,S+y),E);y<8?(y=l(Math.pow(E,y)),A=A.j(y).add(l(_))):(A=A.j(D),A=A.add(l(_)))}return A}var C=c(0),m=c(1),v=c(16777216);n=o.prototype,n.m=function(){if(N(this))return-x(this).m();let T=0,E=1;for(let D=0;D<this.g.length;D++){const A=this.i(D);T+=(A>=0?A:4294967296+A)*E,E*=4294967296}return T},n.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(R(this))return"0";if(N(this))return"-"+x(this).toString(T);const E=l(Math.pow(T,6));var D=this;let A="";for(;;){const y=ue(D,E).g;D=J(D,y.j(E));let S=((D.g.length>0?D.g[0]:D.h)>>>0).toString(T);if(D=y,R(D))return S+A;for(;S.length<6;)S="0"+S;A=S+A}},n.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function R(T){if(T.h!=0)return!1;for(let E=0;E<T.g.length;E++)if(T.g[E]!=0)return!1;return!0}function N(T){return T.h==-1}n.l=function(T){return T=J(this,T),N(T)?-1:R(T)?0:1};function x(T){const E=T.g.length,D=[];for(let A=0;A<E;A++)D[A]=~T.g[A];return new o(D,~T.h).add(m)}n.abs=function(){return N(this)?x(this):this},n.add=function(T){const E=Math.max(this.g.length,T.g.length),D=[];let A=0;for(let y=0;y<=E;y++){let S=A+(this.i(y)&65535)+(T.i(y)&65535),_=(S>>>16)+(this.i(y)>>>16)+(T.i(y)>>>16);A=_>>>16,S&=65535,_&=65535,D[y]=_<<16|S}return new o(D,D[D.length-1]&-2147483648?-1:0)};function J(T,E){return T.add(x(E))}n.j=function(T){if(R(this)||R(T))return C;if(N(this))return N(T)?x(this).j(x(T)):x(x(this).j(T));if(N(T))return x(this.j(x(T)));if(this.l(v)<0&&T.l(v)<0)return l(this.m()*T.m());const E=this.g.length+T.g.length,D=[];for(var A=0;A<2*E;A++)D[A]=0;for(A=0;A<this.g.length;A++)for(let y=0;y<T.g.length;y++){const S=this.i(A)>>>16,_=this.i(A)&65535,it=T.i(y)>>>16,xn=T.i(y)&65535;D[2*A+2*y]+=_*xn,K(D,2*A+2*y),D[2*A+2*y+1]+=S*xn,K(D,2*A+2*y+1),D[2*A+2*y+1]+=_*it,K(D,2*A+2*y+1),D[2*A+2*y+2]+=S*it,K(D,2*A+2*y+2)}for(T=0;T<E;T++)D[T]=D[2*T+1]<<16|D[2*T];for(T=E;T<2*E;T++)D[T]=0;return new o(D,0)};function K(T,E){for(;(T[E]&65535)!=T[E];)T[E+1]+=T[E]>>>16,T[E]&=65535,E++}function se(T,E){this.g=T,this.h=E}function ue(T,E){if(R(E))throw Error("division by zero");if(R(T))return new se(C,C);if(N(T))return E=ue(x(T),E),new se(x(E.g),x(E.h));if(N(E))return E=ue(T,x(E)),new se(x(E.g),E.h);if(T.g.length>30){if(N(T)||N(E))throw Error("slowDivide_ only works with positive integers.");for(var D=m,A=E;A.l(T)<=0;)D=He(D),A=He(A);var y=ye(D,1),S=ye(A,1);for(A=ye(A,2),D=ye(D,2);!R(A);){var _=S.add(A);_.l(T)<=0&&(y=y.add(D),S=_),A=ye(A,1),D=ye(D,1)}return E=J(T,y.j(E)),new se(y,E)}for(y=C;T.l(E)>=0;){for(D=Math.max(1,Math.floor(T.m()/E.m())),A=Math.ceil(Math.log(D)/Math.LN2),A=A<=48?1:Math.pow(2,A-48),S=l(D),_=S.j(E);N(_)||_.l(T)>0;)D-=A,S=l(D),_=S.j(E);R(S)&&(S=m),y=y.add(S),T=J(T,_)}return new se(y,T)}n.B=function(T){return ue(this,T).h},n.and=function(T){const E=Math.max(this.g.length,T.g.length),D=[];for(let A=0;A<E;A++)D[A]=this.i(A)&T.i(A);return new o(D,this.h&T.h)},n.or=function(T){const E=Math.max(this.g.length,T.g.length),D=[];for(let A=0;A<E;A++)D[A]=this.i(A)|T.i(A);return new o(D,this.h|T.h)},n.xor=function(T){const E=Math.max(this.g.length,T.g.length),D=[];for(let A=0;A<E;A++)D[A]=this.i(A)^T.i(A);return new o(D,this.h^T.h)};function He(T){const E=T.g.length+1,D=[];for(let A=0;A<E;A++)D[A]=T.i(A)<<1|T.i(A-1)>>>31;return new o(D,T.h)}function ye(T,E){const D=E>>5;E%=32;const A=T.g.length-D,y=[];for(let S=0;S<A;S++)y[S]=E>0?T.i(S+D)>>>E|T.i(S+D+1)<<32-E:T.i(S+D);return new o(y,T.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=l,o.fromString=f,hc=o}).apply(typeof Qu<"u"?Qu:typeof self<"u"?self:typeof window<"u"?window:{});var Pi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var VC,Er,GC,Yi,AB,HC,UC,jC;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Pi=="object"&&Pi];for(var u=0;u<a.length;++u){var h=a[u];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var s=t(this);function r(a,u){if(u)e:{var h=s;a=a.split(".");for(var d=0;d<a.length-1;d++){var b=a[d];if(!(b in h))break e;h=h[b]}a=a[a.length-1],d=h[a],u=u(d),u!=d&&u!=null&&e(h,a,{configurable:!0,writable:!0,value:u})}}r("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(a){return a||function(u){var h=[],d;for(d in u)Object.prototype.hasOwnProperty.call(u,d)&&h.push([d,u[d]]);return h}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function B(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function c(a,u,h){return a.call.apply(a.bind,arguments)}function l(a,u,h){return l=c,l.apply(null,arguments)}function f(a,u){var h=Array.prototype.slice.call(arguments,1);return function(){var d=h.slice();return d.push.apply(d,arguments),a.apply(this,d)}}function C(a,u){function h(){}h.prototype=u.prototype,a.Z=u.prototype,a.prototype=new h,a.prototype.constructor=a,a.Ob=function(d,b,O){for(var U=Array(arguments.length-2),ie=2;ie<arguments.length;ie++)U[ie-2]=arguments[ie];return u.prototype[b].apply(d,U)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function v(a){const u=a.length;if(u>0){const h=Array(u);for(let d=0;d<u;d++)h[d]=a[d];return h}return[]}function R(a,u){for(let d=1;d<arguments.length;d++){const b=arguments[d];var h=typeof b;if(h=h!="object"?h:b?Array.isArray(b)?"array":h:"null",h=="array"||h=="object"&&typeof b.length=="number"){h=a.length||0;const O=b.length||0;a.length=h+O;for(let U=0;U<O;U++)a[h+U]=b[U]}else a.push(b)}}class N{constructor(u,h){this.i=u,this.j=h,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function x(a){o.setTimeout(()=>{throw a},0)}function J(){var a=T;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class K{constructor(){this.h=this.g=null}add(u,h){const d=se.get();d.set(u,h),this.h?this.h.next=d:this.g=d,this.h=d}}var se=new N(()=>new ue,a=>a.reset());class ue{constructor(){this.next=this.g=this.h=null}set(u,h){this.h=u,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let He,ye=!1,T=new K,E=()=>{const a=Promise.resolve(void 0);He=()=>{a.then(D)}};function D(){for(var a;a=J();){try{a.h.call(a.g)}catch(h){x(h)}var u=se;u.j(a),u.h<100&&(u.h++,a.next=u.g,u.g=a)}ye=!1}function A(){this.u=this.u,this.C=this.C}A.prototype.u=!1,A.prototype.dispose=function(){this.u||(this.u=!0,this.N())},A.prototype[Symbol.dispose]=function(){this.dispose()},A.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function y(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}y.prototype.h=function(){this.defaultPrevented=!0};var S=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const h=()=>{};o.addEventListener("test",h,u),o.removeEventListener("test",h,u)}catch{}return a})();function _(a){return/^[\s\xa0]*$/.test(a)}function it(a,u){y.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,u)}C(it,y),it.prototype.init=function(a,u){const h=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget,u||(h=="mouseover"?u=a.fromElement:h=="mouseout"&&(u=a.toElement)),this.relatedTarget=u,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&it.Z.h.call(this)},it.prototype.h=function(){it.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var xn="closure_listenable_"+(Math.random()*1e6|0),Gp=0;function Hp(a,u,h,d,b){this.listener=a,this.proxy=null,this.src=u,this.type=h,this.capture=!!d,this.ha=b,this.key=++Gp,this.da=this.fa=!1}function fi(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ci(a,u,h){for(const d in a)u.call(h,a[d],d,a)}function Up(a,u){for(const h in a)u.call(void 0,a[h],h,a)}function il(a){const u={};for(const h in a)u[h]=a[h];return u}const ol="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function al(a,u){let h,d;for(let b=1;b<arguments.length;b++){d=arguments[b];for(h in d)a[h]=d[h];for(let O=0;O<ol.length;O++)h=ol[O],Object.prototype.hasOwnProperty.call(d,h)&&(a[h]=d[h])}}function di(a){this.src=a,this.g={},this.h=0}di.prototype.add=function(a,u,h,d,b){const O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);const U=Ca(a,u,d,b);return U>-1?(u=a[U],h||(u.fa=!1)):(u=new Hp(u,this.src,O,!!d,b),u.fa=h,a.push(u)),u};function fa(a,u){const h=u.type;if(h in a.g){var d=a.g[h],b=Array.prototype.indexOf.call(d,u,void 0),O;(O=b>=0)&&Array.prototype.splice.call(d,b,1),O&&(fi(u),a.g[h].length==0&&(delete a.g[h],a.h--))}}function Ca(a,u,h,d){for(let b=0;b<a.length;++b){const O=a[b];if(!O.da&&O.listener==u&&O.capture==!!h&&O.ha==d)return b}return-1}var da="closure_lm_"+(Math.random()*1e6|0),pa={};function Bl(a,u,h,d,b){if(Array.isArray(u)){for(let O=0;O<u.length;O++)Bl(a,u[O],h,d,b);return null}return h=ul(h),a&&a[xn]?a.J(u,h,B(d)?!!d.capture:!1,b):jp(a,u,h,!1,d,b)}function jp(a,u,h,d,b,O){if(!u)throw Error("Invalid event type");const U=B(b)?!!b.capture:!!b;let ie=ma(a);if(ie||(a[da]=ie=new di(a)),h=ie.add(u,h,d,U,O),h.proxy)return h;if(d=Jp(),h.proxy=d,d.src=a,d.listener=h,a.addEventListener)S||(b=U),b===void 0&&(b=!1),a.addEventListener(u.toString(),d,b);else if(a.attachEvent)a.attachEvent(ll(u.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Jp(){function a(h){return u.call(a.src,a.listener,h)}const u=$p;return a}function cl(a,u,h,d,b){if(Array.isArray(u))for(var O=0;O<u.length;O++)cl(a,u[O],h,d,b);else d=B(d)?!!d.capture:!!d,h=ul(h),a&&a[xn]?(a=a.i,O=String(u).toString(),O in a.g&&(u=a.g[O],h=Ca(u,h,d,b),h>-1&&(fi(u[h]),Array.prototype.splice.call(u,h,1),u.length==0&&(delete a.g[O],a.h--)))):a&&(a=ma(a))&&(u=a.g[u.toString()],a=-1,u&&(a=Ca(u,h,d,b)),(h=a>-1?u[a]:null)&&ga(h))}function ga(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[xn])fa(u.i,a);else{var h=a.type,d=a.proxy;u.removeEventListener?u.removeEventListener(h,d,a.capture):u.detachEvent?u.detachEvent(ll(h),d):u.addListener&&u.removeListener&&u.removeListener(d),(h=ma(u))?(fa(h,a),h.h==0&&(h.src=null,u[da]=null)):fi(a)}}}function ll(a){return a in pa?pa[a]:pa[a]="on"+a}function $p(a,u){if(a.da)a=!0;else{u=new it(u,this);const h=a.listener,d=a.ha||a.src;a.fa&&ga(a),a=h.call(d,u)}return a}function ma(a){return a=a[da],a instanceof di?a:null}var Ea="__closure_events_fn_"+(Math.random()*1e9>>>0);function ul(a){return typeof a=="function"?a:(a[Ea]||(a[Ea]=function(u){return a.handleEvent(u)}),a[Ea])}function Ke(){A.call(this),this.i=new di(this),this.M=this,this.G=null}C(Ke,A),Ke.prototype[xn]=!0,Ke.prototype.removeEventListener=function(a,u,h,d){cl(this,a,u,h,d)};function et(a,u){var h,d=a.G;if(d)for(h=[];d;d=d.G)h.push(d);if(a=a.M,d=u.type||u,typeof u=="string")u=new y(u,a);else if(u instanceof y)u.target=u.target||a;else{var b=u;u=new y(d,a),al(u,b)}b=!0;let O,U;if(h)for(U=h.length-1;U>=0;U--)O=u.g=h[U],b=pi(O,d,!0,u)&&b;if(O=u.g=a,b=pi(O,d,!0,u)&&b,b=pi(O,d,!1,u)&&b,h)for(U=0;U<h.length;U++)O=u.g=h[U],b=pi(O,d,!1,u)&&b}Ke.prototype.N=function(){if(Ke.Z.N.call(this),this.i){var a=this.i;for(const u in a.g){const h=a.g[u];for(let d=0;d<h.length;d++)fi(h[d]);delete a.g[u],a.h--}}this.G=null},Ke.prototype.J=function(a,u,h,d){return this.i.add(String(a),u,!1,h,d)},Ke.prototype.K=function(a,u,h,d){return this.i.add(String(a),u,!0,h,d)};function pi(a,u,h,d){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();let b=!0;for(let O=0;O<u.length;++O){const U=u[O];if(U&&!U.da&&U.capture==h){const ie=U.listener,Re=U.ha||U.src;U.fa&&fa(a.i,U),b=ie.call(Re,d)!==!1&&b}}return b&&!d.defaultPrevented}function Kp(a,u){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=l(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:o.setTimeout(a,u||0)}function hl(a){a.g=Kp(()=>{a.g=null,a.i&&(a.i=!1,hl(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class qp extends A{constructor(u,h){super(),this.m=u,this.l=h,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:hl(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Zs(a){A.call(this),this.h=a,this.g={}}C(Zs,A);var fl=[];function Cl(a){Ci(a.g,function(u,h){this.g.hasOwnProperty(h)&&ga(u)},a),a.g={}}Zs.prototype.N=function(){Zs.Z.N.call(this),Cl(this)},Zs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var _a=o.JSON.stringify,zp=o.JSON.parse,Qp=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function dl(){}function pl(){}var er={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Da(){y.call(this,"d")}C(Da,y);function wa(){y.call(this,"c")}C(wa,y);var Vn={},gl=null;function gi(){return gl=gl||new Ke}Vn.Ia="serverreachability";function ml(a){y.call(this,Vn.Ia,a)}C(ml,y);function tr(a){const u=gi();et(u,new ml(u))}Vn.STAT_EVENT="statevent";function El(a,u){y.call(this,Vn.STAT_EVENT,a),this.stat=u}C(El,y);function tt(a){const u=gi();et(u,new El(u,a))}Vn.Ja="timingevent";function _l(a,u){y.call(this,Vn.Ja,a),this.size=u}C(_l,y);function nr(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},u)}function sr(){this.g=!0}sr.prototype.ua=function(){this.g=!1};function Wp(a,u,h,d,b,O){a.info(function(){if(a.g)if(O){var U="",ie=O.split("&");for(let Ce=0;Ce<ie.length;Ce++){var Re=ie[Ce].split("=");if(Re.length>1){const Pe=Re[0];Re=Re[1];const kt=Pe.split("_");U=kt.length>=2&&kt[1]=="type"?U+(Pe+"="+Re+"&"):U+(Pe+"=redacted&")}}}else U=null;else U=O;return"XMLHTTP REQ ("+d+") [attempt "+b+"]: "+u+`
`+h+`
`+U})}function Yp(a,u,h,d,b,O,U){a.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+b+"]: "+u+`
`+h+`
`+O+" "+U})}function ps(a,u,h,d){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+Zp(a,h)+(d?" "+d:"")})}function Xp(a,u){a.info(function(){return"TIMEOUT: "+u})}sr.prototype.info=function(){};function Zp(a,u){if(!a.g)return u;if(!u)return null;try{const O=JSON.parse(u);if(O){for(a=0;a<O.length;a++)if(Array.isArray(O[a])){var h=O[a];if(!(h.length<2)){var d=h[1];if(Array.isArray(d)&&!(d.length<1)){var b=d[0];if(b!="noop"&&b!="stop"&&b!="close")for(let U=1;U<d.length;U++)d[U]=""}}}}return _a(O)}catch{return u}}var mi={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Dl={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},wl;function Ia(){}C(Ia,dl),Ia.prototype.g=function(){return new XMLHttpRequest},wl=new Ia;function rr(a){return encodeURIComponent(String(a))}function eg(a){var u=1;a=a.split(":");const h=[];for(;u>0&&a.length;)h.push(a.shift()),u--;return a.length&&h.push(a.join(":")),h}function rn(a,u,h,d){this.j=a,this.i=u,this.l=h,this.S=d||1,this.V=new Zs(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Il}function Il(){this.i=null,this.g="",this.h=!1}var yl={},ya={};function Ta(a,u,h){a.M=1,a.A=_i(Lt(u)),a.u=h,a.R=!0,Tl(a,null)}function Tl(a,u){a.F=Date.now(),Ei(a),a.B=Lt(a.A);var h=a.B,d=a.S;Array.isArray(d)||(d=[String(d)]),xl(h.i,"t",d),a.C=0,h=a.j.L,a.h=new Il,a.g=nu(a.j,h?u:null,!a.u),a.P>0&&(a.O=new qp(l(a.Y,a,a.g),a.P)),u=a.V,h=a.g,d=a.ba;var b="readystatechange";Array.isArray(b)||(b&&(fl[0]=b.toString()),b=fl);for(let O=0;O<b.length;O++){const U=Bl(h,b[O],d||u.handleEvent,!1,u.h||u);if(!U)break;u.g[U.key]=U}u=a.J?il(a.J):{},a.u?(a.v||(a.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,u)):(a.v="GET",a.g.ea(a.B,a.v,null,u)),tr(),Wp(a.i,a.v,a.B,a.l,a.S,a.u)}rn.prototype.ba=function(a){a=a.target;const u=this.O;u&&Bn(a)==3?u.j():this.Y(a)},rn.prototype.Y=function(a){try{if(a==this.g)e:{const ie=Bn(this.g),Re=this.g.ya(),Ce=this.g.ca();if(!(ie<3)&&(ie!=3||this.g&&(this.h.h||this.g.la()||$l(this.g)))){this.K||ie!=4||Re==7||(Re==8||Ce<=0?tr(3):tr(2)),Aa(this);var u=this.g.ca();this.X=u;var h=tg(this);if(this.o=u==200,Yp(this.i,this.v,this.B,this.l,this.S,ie,u),this.o){if(this.U&&!this.L){t:{if(this.g){var d,b=this.g;if((d=b.g?b.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(d)){var O=d;break t}}O=null}if(a=O)ps(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ra(this,a);else{this.o=!1,this.m=3,tt(12),Gn(this),ir(this);break e}}if(this.R){a=!0;let Pe;for(;!this.K&&this.C<h.length;)if(Pe=ng(this,h),Pe==ya){ie==4&&(this.m=4,tt(14),a=!1),ps(this.i,this.l,null,"[Incomplete Response]");break}else if(Pe==yl){this.m=4,tt(15),ps(this.i,this.l,h,"[Invalid Chunk]"),a=!1;break}else ps(this.i,this.l,Pe,null),Ra(this,Pe);if(Al(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ie!=4||h.length!=0||this.h.h||(this.m=1,tt(16),a=!1),this.o=this.o&&a,!a)ps(this.i,this.l,h,"[Invalid Chunked Response]"),Gn(this),ir(this);else if(h.length>0&&!this.W){this.W=!0;var U=this.j;U.g==this&&U.aa&&!U.P&&(U.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),La(U),U.P=!0,tt(11))}}else ps(this.i,this.l,h,null),Ra(this,h);ie==4&&Gn(this),this.o&&!this.K&&(ie==4?Xl(this.j,this):(this.o=!1,Ei(this)))}else pg(this.g),u==400&&h.indexOf("Unknown SID")>0?(this.m=3,tt(12)):(this.m=0,tt(13)),Gn(this),ir(this)}}}catch{}finally{}};function tg(a){if(!Al(a))return a.g.la();const u=$l(a.g);if(u==="")return"";let h="";const d=u.length,b=Bn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Gn(a),ir(a),"";a.h.i=new o.TextDecoder}for(let O=0;O<d;O++)a.h.h=!0,h+=a.h.i.decode(u[O],{stream:!(b&&O==d-1)});return u.length=0,a.h.g+=h,a.C=0,a.h.g}function Al(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function ng(a,u){var h=a.C,d=u.indexOf(`
`,h);return d==-1?ya:(h=Number(u.substring(h,d)),isNaN(h)?yl:(d+=1,d+h>u.length?ya:(u=u.slice(d,d+h),a.C=d+h,u)))}rn.prototype.cancel=function(){this.K=!0,Gn(this)};function Ei(a){a.T=Date.now()+a.H,Rl(a,a.H)}function Rl(a,u){if(a.D!=null)throw Error("WatchDog timer not null");a.D=nr(l(a.aa,a),u)}function Aa(a){a.D&&(o.clearTimeout(a.D),a.D=null)}rn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Xp(this.i,this.B),this.M!=2&&(tr(),tt(17)),Gn(this),this.m=2,ir(this)):Rl(this,this.T-a)};function ir(a){a.j.I==0||a.K||Xl(a.j,a)}function Gn(a){Aa(a);var u=a.O;u&&typeof u.dispose=="function"&&u.dispose(),a.O=null,Cl(a.V),a.g&&(u=a.g,a.g=null,u.abort(),u.dispose())}function Ra(a,u){try{var h=a.j;if(h.I!=0&&(h.g==a||va(h.h,a))){if(!a.L&&va(h.h,a)&&h.I==3){try{var d=h.Ba.g.parse(u)}catch{d=null}if(Array.isArray(d)&&d.length==3){var b=d;if(b[0]==0){e:if(!h.v){if(h.g)if(h.g.F+3e3<a.F)Ti(h),Ii(h);else break e;Fa(h),tt(18)}}else h.xa=b[1],0<h.xa-h.K&&b[2]<37500&&h.F&&h.A==0&&!h.C&&(h.C=nr(l(h.Va,h),6e3));Sl(h.h)<=1&&h.ta&&(h.ta=void 0)}else Un(h,11)}else if((a.L||h.g==a)&&Ti(h),!_(u))for(b=h.Ba.g.parse(u),u=0;u<b.length;u++){let Ce=b[u];const Pe=Ce[0];if(!(Pe<=h.K))if(h.K=Pe,Ce=Ce[1],h.I==2)if(Ce[0]=="c"){h.M=Ce[1],h.ba=Ce[2];const kt=Ce[3];kt!=null&&(h.ka=kt,h.j.info("VER="+h.ka));const jn=Ce[4];jn!=null&&(h.za=jn,h.j.info("SVER="+h.za));const cn=Ce[5];cn!=null&&typeof cn=="number"&&cn>0&&(d=1.5*cn,h.O=d,h.j.info("backChannelRequestTimeoutMs_="+d)),d=h;const ln=a.g;if(ln){const Ri=ln.g?ln.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ri){var O=d.h;O.g||Ri.indexOf("spdy")==-1&&Ri.indexOf("quic")==-1&&Ri.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(ba(O,O.h),O.h=null))}if(d.G){const ka=ln.g?ln.g.getResponseHeader("X-HTTP-Session-Id"):null;ka&&(d.wa=ka,ge(d.J,d.G,ka))}}h.I=3,h.l&&h.l.ra(),h.aa&&(h.T=Date.now()-a.F,h.j.info("Handshake RTT: "+h.T+"ms")),d=h;var U=a;if(d.na=tu(d,d.L?d.ba:null,d.W),U.L){Ol(d.h,U);var ie=U,Re=d.O;Re&&(ie.H=Re),ie.D&&(Aa(ie),Ei(ie)),d.g=U}else Wl(d);h.i.length>0&&yi(h)}else Ce[0]!="stop"&&Ce[0]!="close"||Un(h,7);else h.I==3&&(Ce[0]=="stop"||Ce[0]=="close"?Ce[0]=="stop"?Un(h,7):Na(h):Ce[0]!="noop"&&h.l&&h.l.qa(Ce),h.A=0)}}tr(4)}catch{}}var sg=class{constructor(a,u){this.g=a,this.map=u}};function vl(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function bl(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Sl(a){return a.h?1:a.g?a.g.size:0}function va(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function ba(a,u){a.g?a.g.add(u):a.h=u}function Ol(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}vl.prototype.cancel=function(){if(this.i=Pl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Pl(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const h of a.g.values())u=u.concat(h.G);return u}return v(a.i)}var Nl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rg(a,u){if(a){a=a.split("&");for(let h=0;h<a.length;h++){const d=a[h].indexOf("=");let b,O=null;d>=0?(b=a[h].substring(0,d),O=a[h].substring(d+1)):b=a[h],u(b,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function on(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;a instanceof on?(this.l=a.l,or(this,a.j),this.o=a.o,this.g=a.g,ar(this,a.u),this.h=a.h,Sa(this,Vl(a.i)),this.m=a.m):a&&(u=String(a).match(Nl))?(this.l=!1,or(this,u[1]||"",!0),this.o=Br(u[2]||""),this.g=Br(u[3]||"",!0),ar(this,u[4]),this.h=Br(u[5]||"",!0),Sa(this,u[6]||"",!0),this.m=Br(u[7]||"")):(this.l=!1,this.i=new lr(null,this.l))}on.prototype.toString=function(){const a=[];var u=this.j;u&&a.push(cr(u,Fl,!0),":");var h=this.g;return(h||u=="file")&&(a.push("//"),(u=this.o)&&a.push(cr(u,Fl,!0),"@"),a.push(rr(h).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.u,h!=null&&a.push(":",String(h))),(h=this.h)&&(this.g&&h.charAt(0)!="/"&&a.push("/"),a.push(cr(h,h.charAt(0)=="/"?ag:og,!0))),(h=this.i.toString())&&a.push("?",h),(h=this.m)&&a.push("#",cr(h,cg)),a.join("")},on.prototype.resolve=function(a){const u=Lt(this);let h=!!a.j;h?or(u,a.j):h=!!a.o,h?u.o=a.o:h=!!a.g,h?u.g=a.g:h=a.u!=null;var d=a.h;if(h)ar(u,a.u);else if(h=!!a.h){if(d.charAt(0)!="/")if(this.g&&!this.h)d="/"+d;else{var b=u.h.lastIndexOf("/");b!=-1&&(d=u.h.slice(0,b+1)+d)}if(b=d,b==".."||b==".")d="";else if(b.indexOf("./")!=-1||b.indexOf("/.")!=-1){d=b.lastIndexOf("/",0)==0,b=b.split("/");const O=[];for(let U=0;U<b.length;){const ie=b[U++];ie=="."?d&&U==b.length&&O.push(""):ie==".."?((O.length>1||O.length==1&&O[0]!="")&&O.pop(),d&&U==b.length&&O.push("")):(O.push(ie),d=!0)}d=O.join("/")}else d=b}return h?u.h=d:h=a.i.toString()!=="",h?Sa(u,Vl(a.i)):h=!!a.m,h&&(u.m=a.m),u};function Lt(a){return new on(a)}function or(a,u,h){a.j=h?Br(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function ar(a,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);a.u=u}else a.u=null}function Sa(a,u,h){u instanceof lr?(a.i=u,lg(a.i,a.l)):(h||(u=cr(u,Bg)),a.i=new lr(u,a.l))}function ge(a,u,h){a.i.set(u,h)}function _i(a){return ge(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Br(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function cr(a,u,h){return typeof a=="string"?(a=encodeURI(a).replace(u,ig),h&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function ig(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Fl=/[#\/\?@]/g,og=/[#\?:]/g,ag=/[#\?]/g,Bg=/[#\?@]/g,cg=/#/g;function lr(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Hn(a){a.g||(a.g=new Map,a.h=0,a.i&&rg(a.i,function(u,h){a.add(decodeURIComponent(u.replace(/\+/g," ")),h)}))}n=lr.prototype,n.add=function(a,u){Hn(this),this.i=null,a=gs(this,a);let h=this.g.get(a);return h||this.g.set(a,h=[]),h.push(u),this.h+=1,this};function Ll(a,u){Hn(a),u=gs(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function kl(a,u){return Hn(a),u=gs(a,u),a.g.has(u)}n.forEach=function(a,u){Hn(this),this.g.forEach(function(h,d){h.forEach(function(b){a.call(u,b,d,this)},this)},this)};function Ml(a,u){Hn(a);let h=[];if(typeof u=="string")kl(a,u)&&(h=h.concat(a.g.get(gs(a,u))));else for(a=Array.from(a.g.values()),u=0;u<a.length;u++)h=h.concat(a[u]);return h}n.set=function(a,u){return Hn(this),this.i=null,a=gs(this,a),kl(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},n.get=function(a,u){return a?(a=Ml(this,a),a.length>0?String(a[0]):u):u};function xl(a,u,h){Ll(a,u),h.length>0&&(a.i=null,a.g.set(gs(a,u),v(h)),a.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(let d=0;d<u.length;d++){var h=u[d];const b=rr(h);h=Ml(this,h);for(let O=0;O<h.length;O++){let U=b;h[O]!==""&&(U+="="+rr(h[O])),a.push(U)}}return this.i=a.join("&")};function Vl(a){const u=new lr;return u.i=a.i,a.g&&(u.g=new Map(a.g),u.h=a.h),u}function gs(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function lg(a,u){u&&!a.j&&(Hn(a),a.i=null,a.g.forEach(function(h,d){const b=d.toLowerCase();d!=b&&(Ll(this,d),xl(this,b,h))},a)),a.j=u}function ug(a,u){const h=new sr;if(o.Image){const d=new Image;d.onload=f(an,h,"TestLoadImage: loaded",!0,u,d),d.onerror=f(an,h,"TestLoadImage: error",!1,u,d),d.onabort=f(an,h,"TestLoadImage: abort",!1,u,d),d.ontimeout=f(an,h,"TestLoadImage: timeout",!1,u,d),o.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=a}else u(!1)}function hg(a,u){const h=new sr,d=new AbortController,b=setTimeout(()=>{d.abort(),an(h,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:d.signal}).then(O=>{clearTimeout(b),O.ok?an(h,"TestPingServer: ok",!0,u):an(h,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(b),an(h,"TestPingServer: error",!1,u)})}function an(a,u,h,d,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),d(h)}catch{}}function fg(){this.g=new Qp}function Oa(a){this.i=a.Sb||null,this.h=a.ab||!1}C(Oa,dl),Oa.prototype.g=function(){return new Di(this.i,this.h)};function Di(a,u){Ke.call(this),this.H=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}C(Di,Ke),n=Di.prototype,n.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=u,this.readyState=1,hr(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(u.body=a),(this.H||o).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ur(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,hr(this)),this.g&&(this.readyState=3,hr(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Gl(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Gl(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?ur(this):hr(this),this.readyState==3&&Gl(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,ur(this))},n.Na=function(a){this.g&&(this.response=a,ur(this))},n.ga=function(){this.g&&ur(this)};function ur(a){a.readyState=4,a.l=null,a.j=null,a.B=null,hr(a)}n.setRequestHeader=function(a,u){this.A.append(a,u)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var h=u.next();!h.done;)h=h.value,a.push(h[0]+": "+h[1]),h=u.next();return a.join(`\r
`)};function hr(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Di.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Hl(a){let u="";return Ci(a,function(h,d){u+=d,u+=":",u+=h,u+=`\r
`}),u}function Pa(a,u,h){e:{for(d in h){var d=!1;break e}d=!0}d||(h=Hl(h),typeof a=="string"?h!=null&&rr(h):ge(a,u,h))}function we(a){Ke.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}C(we,Ke);var Cg=/^https?$/i,dg=["POST","PUT"];n=we.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,u,h,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():wl.g(),this.g.onreadystatechange=m(l(this.Ca,this));try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(O){Ul(this,O);return}if(a=h||"",h=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var b in d)h.set(b,d[b]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const O of d.keys())h.set(O,d.get(O));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(h.keys()).find(O=>O.toLowerCase()=="content-type"),b=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(dg,u,void 0)>=0)||d||b||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,U]of h)this.g.setRequestHeader(O,U);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(O){Ul(this,O)}};function Ul(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.o=5,jl(a),wi(a)}function jl(a){a.A||(a.A=!0,et(a,"complete"),et(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,et(this,"complete"),et(this,"abort"),wi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),wi(this,!0)),we.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Jl(this):this.Xa())},n.Xa=function(){Jl(this)};function Jl(a){if(a.h&&typeof i<"u"){if(a.v&&Bn(a)==4)setTimeout(a.Ca.bind(a),0);else if(et(a,"readystatechange"),Bn(a)==4){a.h=!1;try{const O=a.ca();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var h;if(!(h=u)){var d;if(d=O===0){let U=String(a.D).match(Nl)[1]||null;!U&&o.self&&o.self.location&&(U=o.self.location.protocol.slice(0,-1)),d=!Cg.test(U?U.toLowerCase():"")}h=d}if(h)et(a,"complete"),et(a,"success");else{a.o=6;try{var b=Bn(a)>2?a.g.statusText:""}catch{b=""}a.l=b+" ["+a.ca()+"]",jl(a)}}finally{wi(a)}}}}function wi(a,u){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const h=a.g;a.g=null,u||et(a,"ready");try{h.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Bn(a){return a.g?a.g.readyState:0}n.ca=function(){try{return Bn(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),zp(u)}};function $l(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function pg(a){const u={};a=(a.g&&Bn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<a.length;d++){if(_(a[d]))continue;var h=eg(a[d]);const b=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const O=u[b]||[];u[b]=O,O.push(h)}Up(u,function(d){return d.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function fr(a,u,h){return h&&h.internalChannelParams&&h.internalChannelParams[a]||u}function Kl(a){this.za=0,this.i=[],this.j=new sr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=fr("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=fr("baseRetryDelayMs",5e3,a),this.Za=fr("retryDelaySeedMs",1e4,a),this.Ta=fr("forwardChannelMaxRetries",2,a),this.va=fr("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new vl(a&&a.concurrentRequestLimit),this.Ba=new fg,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Kl.prototype,n.ka=8,n.I=1,n.connect=function(a,u,h,d){tt(0),this.W=a,this.H=u||{},h&&d!==void 0&&(this.H.OSID=h,this.H.OAID=d),this.F=this.X,this.J=tu(this,null,this.W),yi(this)};function Na(a){if(ql(a),a.I==3){var u=a.V++,h=Lt(a.J);if(ge(h,"SID",a.M),ge(h,"RID",u),ge(h,"TYPE","terminate"),Cr(a,h),u=new rn(a,a.j,u),u.M=2,u.A=_i(Lt(h)),h=!1,o.navigator&&o.navigator.sendBeacon)try{h=o.navigator.sendBeacon(u.A.toString(),"")}catch{}!h&&o.Image&&(new Image().src=u.A,h=!0),h||(u.g=nu(u.j,null),u.g.ea(u.A)),u.F=Date.now(),Ei(u)}eu(a)}function Ii(a){a.g&&(La(a),a.g.cancel(),a.g=null)}function ql(a){Ii(a),a.v&&(o.clearTimeout(a.v),a.v=null),Ti(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function yi(a){if(!bl(a.h)&&!a.m){a.m=!0;var u=a.Ea;He||E(),ye||(He(),ye=!0),T.add(u,a),a.D=0}}function gg(a,u){return Sl(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=u.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=nr(l(a.Ea,a,u),Zl(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const b=new rn(this,this.j,a);let O=this.o;if(this.U&&(O?(O=il(O),al(O,this.U)):O=this.U),this.u!==null||this.R||(b.J=O,O=null),this.S)e:{for(var u=0,h=0;h<this.i.length;h++){t:{var d=this.i[h];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break t}d=void 0}if(d===void 0)break;if(u+=d,u>4096){u=h;break e}if(u===4096||h===this.i.length-1){u=h+1;break e}}u=1e3}else u=1e3;u=Ql(this,b,u),h=Lt(this.J),ge(h,"RID",a),ge(h,"CVER",22),this.G&&ge(h,"X-HTTP-Session-Id",this.G),Cr(this,h),O&&(this.R?u="headers="+rr(Hl(O))+"&"+u:this.u&&Pa(h,this.u,O)),ba(this.h,b),this.Ra&&ge(h,"TYPE","init"),this.S?(ge(h,"$req",u),ge(h,"SID","null"),b.U=!0,Ta(b,h,null)):Ta(b,h,u),this.I=2}}else this.I==3&&(a?zl(this,a):this.i.length==0||bl(this.h)||zl(this))};function zl(a,u){var h;u?h=u.l:h=a.V++;const d=Lt(a.J);ge(d,"SID",a.M),ge(d,"RID",h),ge(d,"AID",a.K),Cr(a,d),a.u&&a.o&&Pa(d,a.u,a.o),h=new rn(a,a.j,h,a.D+1),a.u===null&&(h.J=a.o),u&&(a.i=u.G.concat(a.i)),u=Ql(a,h,1e3),h.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),ba(a.h,h),Ta(h,d,u)}function Cr(a,u){a.H&&Ci(a.H,function(h,d){ge(u,d,h)}),a.l&&Ci({},function(h,d){ge(u,d,h)})}function Ql(a,u,h){h=Math.min(a.i.length,h);const d=a.l?l(a.l.Ka,a.l,a):null;e:{var b=a.i;let ie=-1;for(;;){const Re=["count="+h];ie==-1?h>0?(ie=b[0].g,Re.push("ofs="+ie)):ie=0:Re.push("ofs="+ie);let Ce=!0;for(let Pe=0;Pe<h;Pe++){var O=b[Pe].g;const kt=b[Pe].map;if(O-=ie,O<0)ie=Math.max(0,b[Pe].g-100),Ce=!1;else try{O="req"+O+"_"||"";try{var U=kt instanceof Map?kt:Object.entries(kt);for(const[jn,cn]of U){let ln=cn;B(cn)&&(ln=_a(cn)),Re.push(O+jn+"="+encodeURIComponent(ln))}}catch(jn){throw Re.push(O+"type="+encodeURIComponent("_badmap")),jn}}catch{d&&d(kt)}}if(Ce){U=Re.join("&");break e}}U=void 0}return a=a.i.splice(0,h),u.G=a,U}function Wl(a){if(!a.g&&!a.v){a.Y=1;var u=a.Da;He||E(),ye||(He(),ye=!0),T.add(u,a),a.A=0}}function Fa(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=nr(l(a.Da,a),Zl(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,Yl(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=nr(l(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,tt(10),Ii(this),Yl(this))};function La(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Yl(a){a.g=new rn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var u=Lt(a.na);ge(u,"RID","rpc"),ge(u,"SID",a.M),ge(u,"AID",a.K),ge(u,"CI",a.F?"0":"1"),!a.F&&a.ia&&ge(u,"TO",a.ia),ge(u,"TYPE","xmlhttp"),Cr(a,u),a.u&&a.o&&Pa(u,a.u,a.o),a.O&&(a.g.H=a.O);var h=a.g;a=a.ba,h.M=1,h.A=_i(Lt(u)),h.u=null,h.R=!0,Tl(h,a)}n.Va=function(){this.C!=null&&(this.C=null,Ii(this),Fa(this),tt(19))};function Ti(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Xl(a,u){var h=null;if(a.g==u){Ti(a),La(a),a.g=null;var d=2}else if(va(a.h,u))h=u.G,Ol(a.h,u),d=1;else return;if(a.I!=0){if(u.o)if(d==1){h=u.u?u.u.length:0,u=Date.now()-u.F;var b=a.D;d=gi(),et(d,new _l(d,h)),yi(a)}else Wl(a);else if(b=u.m,b==3||b==0&&u.X>0||!(d==1&&gg(a,u)||d==2&&Fa(a)))switch(h&&h.length>0&&(u=a.h,u.i=u.i.concat(h)),b){case 1:Un(a,5);break;case 4:Un(a,10);break;case 3:Un(a,6);break;default:Un(a,2)}}}function Zl(a,u){let h=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(h*=2),h*u}function Un(a,u){if(a.j.info("Error code "+u),u==2){var h=l(a.bb,a),d=a.Ua;const b=!d;d=new on(d||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||or(d,"https"),_i(d),b?ug(d.toString(),h):hg(d.toString(),h)}else tt(2);a.I=0,a.l&&a.l.pa(u),eu(a),ql(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function eu(a){if(a.I=0,a.ja=[],a.l){const u=Pl(a.h);(u.length!=0||a.i.length!=0)&&(R(a.ja,u),R(a.ja,a.i),a.h.i.length=0,v(a.i),a.i.length=0),a.l.oa()}}function tu(a,u,h){var d=h instanceof on?Lt(h):new on(h);if(d.g!="")u&&(d.g=u+"."+d.g),ar(d,d.u);else{var b=o.location;d=b.protocol,u=u?u+"."+b.hostname:b.hostname,b=+b.port;const O=new on(null);d&&or(O,d),u&&(O.g=u),b&&ar(O,b),h&&(O.h=h),d=O}return h=a.G,u=a.wa,h&&u&&ge(d,h,u),ge(d,"VER",a.ka),Cr(a,d),d}function nu(a,u,h){if(u&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Aa&&!a.ma?new we(new Oa({ab:h})):new we(a.ma),u.Fa(a.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function su(){}n=su.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Ai(){}Ai.prototype.g=function(a,u){return new Ct(a,u)};function Ct(a,u){Ke.call(this),this.g=new Kl(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(a?a["X-WebChannel-Client-Profile"]=u.sa:a={"X-WebChannel-Client-Profile":u.sa}),this.g.U=a,(a=u&&u.Qb)&&!_(a)&&(this.g.u=a),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!_(u)&&(this.g.G=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new ms(this)}C(Ct,Ke),Ct.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ct.prototype.close=function(){Na(this.g)},Ct.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var h={};h.__data__=a,a=h}else this.v&&(h={},h.__data__=_a(a),a=h);u.i.push(new sg(u.Ya++,a)),u.I==3&&yi(u)},Ct.prototype.N=function(){this.g.l=null,delete this.j,Na(this.g),delete this.g,Ct.Z.N.call(this)};function ru(a){Da.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const h in u){a=h;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}C(ru,Da);function iu(){wa.call(this),this.status=1}C(iu,wa);function ms(a){this.g=a}C(ms,su),ms.prototype.ra=function(){et(this.g,"a")},ms.prototype.qa=function(a){et(this.g,new ru(a))},ms.prototype.pa=function(a){et(this.g,new iu)},ms.prototype.oa=function(){et(this.g,"b")},Ai.prototype.createWebChannel=Ai.prototype.g,Ct.prototype.send=Ct.prototype.o,Ct.prototype.open=Ct.prototype.m,Ct.prototype.close=Ct.prototype.close,jC=function(){return new Ai},UC=function(){return gi()},HC=Vn,AB={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},mi.NO_ERROR=0,mi.TIMEOUT=8,mi.HTTP_ERROR=6,Yi=mi,Dl.COMPLETE="complete",GC=Dl,pl.EventType=er,er.OPEN="a",er.CLOSE="b",er.ERROR="c",er.MESSAGE="d",Ke.prototype.listen=Ke.prototype.J,Er=pl,we.prototype.listenOnce=we.prototype.K,we.prototype.getLastError=we.prototype.Ha,we.prototype.getLastErrorCode=we.prototype.ya,we.prototype.getStatus=we.prototype.ca,we.prototype.getResponseJson=we.prototype.La,we.prototype.getResponseText=we.prototype.la,we.prototype.send=we.prototype.ea,we.prototype.setWithCredentials=we.prototype.Fa,VC=we}).apply(typeof Pi<"u"?Pi:typeof self<"u"?self:typeof window<"u"?window:{});/*!
* re2js
* RE2JS is the JavaScript port of RE2, a regular expression engine that provides linear time matching
*
* @version v2.10.0
* @author Oleksii Vasyliev
* @homepage https://github.com/le0pard/re2js#readme
* @repository [object Object]
* @license MIT
*/var M=class qn{static FOLD_CASE=1;static LITERAL=2;static CLASS_NL=4;static DOT_NL=8;static ONE_LINE=16;static NON_GREEDY=32;static PERL_X=64;static UNICODE_GROUPS=128;static WAS_DOLLAR=256;static LOOKBEHIND=512;static MATCH_NL=qn.CLASS_NL|qn.DOT_NL;static PERL=qn.CLASS_NL|qn.ONE_LINE|qn.PERL_X|qn.UNICODE_GROUPS;static POSIX=0;static UNANCHORED=0;static ANCHOR_START=1;static ANCHOR_BOTH=2};const Es={CASE_INSENSITIVE:1,DOTALL:2,MULTILINE:4,DISABLE_UNICODE_GROUPS:8,LONGEST_MATCH:16,LOOKBEHINDS:512},Fr=128,RB=new Int32Array(Fr),vB=new Int32Array(Fr),Ni=65535;for(let n=0;n<Fr;n++)n>=97&&n<=122?RB[n]=n-32:RB[n]=n,n>=65&&n<=90?vB[n]=n+32:vB[n]=n;var L=class{static CODES=Object.freeze({"\x07":7,"\b":8,"	":9,"\n":10,"\v":11,"\f":12,"\r":13," ":32,'"':34,$:36,"&":38,"'":39,"(":40,")":41,"*":42,"+":43,"-":45,".":46,0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,":":58,"<":60,">":62,"?":63,A:65,B:66,C:67,F:70,P:80,Q:81,U:85,Z:90,"[":91,"\\":92,"]":93,"^":94,_:95,"`":96,a:97,b:98,f:102,i:105,m:109,n:110,r:114,s:115,t:116,v:118,x:120,z:122,"{":123,"|":124,"}":125});static toUpperCase(n){if(n<Fr)return RB[n];const e=String.fromCodePoint(n).toUpperCase(),t=e.codePointAt(0)>Ni?2:1;if(e.length>t)return n;const s=String.fromCodePoint(e.codePointAt(0)).toLowerCase(),r=s.codePointAt(0)>Ni?2:1;return s.length>r||s.codePointAt(0)!==n?n:e.codePointAt(0)}static toLowerCase(n){if(n<Fr)return vB[n];const e=String.fromCodePoint(n).toLowerCase(),t=e.codePointAt(0)>Ni?2:1;if(e.length>t)return n;const s=String.fromCodePoint(e.codePointAt(0)).toUpperCase(),r=s.codePointAt(0)>Ni?2:1;return s.length>r||s.codePointAt(0)!==n?n:e.codePointAt(0)}},p=class{constructor(n,e=!1){this.data=n,this.isStride1=e,this.SIZE=e?2:3}getLo(n){return this.data[n*this.SIZE]}getHi(n){return this.data[n*this.SIZE+1]}getStride(n){return this.isStride1?1:this.data[n*this.SIZE+2]}get length(){return this.data.length/this.SIZE}};const Jw="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-",JC=new Uint8Array(256);for(let n=0;n<64;n++)JC[Jw.charCodeAt(n)]=n;const $C=n=>{const e=[];let t=0,s=0;for(let r=0;r<n.length;r++){const i=JC[n.charCodeAt(r)];t|=(i&31)<<s,(i&32)===0?(e.push(t),t=0,s=0):s+=5}return e},g=(n,e)=>{const t=$C(n),s=e?t.length/2:t.length/3,r=new Uint32Array(s*3);let i=0,o=0;for(let B=0;B<s;B++)i+=t[o++],r[B*3]=i,i+=t[o++],r[B*3+1]=i,r[B*3+2]=e?1:t[o++];return r},$w=n=>{const e=$C(n),t=new Map;let s=0;for(let r=0;r<e.length;r+=2){s+=e[r];const i=e[r+1],o=i>>>1^-(i&1);t.set(s,s+o)}return t};var Fi=class{constructor(n){this.initializer=n,this.cache=new Map}has(n){return Object.hasOwn(this.initializer,n)}get(n){if(this.cache.has(n))return this.cache.get(n);const e=this.has(n)?this.initializer[n]():null;return this.cache.set(n,e),e}},dt=class{static _CASE_ORBIT=null;static get CASE_ORBIT(){return this._CASE_ORBIT||(this._CASE_ORBIT=$w("rCgCIgCY+rQI4QiCuuBLgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCCgCBgCBgCBgCBgCBgCBgCB+7OB-BB-BB-BB-BB-BBskQB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BC-BB-BB-BB-BB-BB-BB-BByHBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBDCBBBCBBBCBBCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBxHBCBBBCBBBCBBB3SBmMBkNBCBBBCBBB8MBCBBB6MB6MBCBBC+EB0MB2MBCBBB6MB+MBiGBmNBiNBCBBBmKBikzCBmNBqNBkIBsNBCBBBCBBBCBBB0NBCBBB0NDCBBB0NBCBBByNByNBCBBBCBBB2NBCBBDCBBCwDFCBCBDBCBCBDBCBCBDBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBB9EBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCCBCBDBCBBBhGBvDBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBjICCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBH2iVBCBBBlKBwiVB+jVB+jVBCBBBlMBqEBuEBCBBBCBBBCBBBCBBBCBBB+hVB4hVB8hVBjNB7MC5MB5MCzMC1MB+0yCE5MB20yCC9MBu2yCBwyyCBo0yCChNBlNBo0yCBu-UBi0yCDlNC6-UBpNDrNIu+UDzNCm0yCBzNE0yyCBzNBpEBxNBxNBtEG1NLqxyCBkxyCnFoFrBCBBBCBBDCBBEkIBkIBkICoHHsCCqCBqCBqCCgEC+DB+DBmkOBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCC+BBgCBgCBgCBgCBgCBgCBgCBgCBrCBpCBpCBpCBmjOB-BB8BB-BB-BBgEB-BB-BByBBqgOBsDB-BBtwBB-BB-BB-BBsBBgDBCB-BB-BB-BBeB-BB-BB61OB-BB-BB-DB9DB9DBQB7DBmCE9CBrDBPBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBrFB-EBOBnHB3FB-FCCBBBNBCBBCjIBjIBjIBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB8kMB-BB6kMB-BB-BB-BB-BB-BB-BB-BB-BB-BBokMB-BB-BBkkMBkkMB-BB-BB-BB-BB-BB-BB-BB4jMB-BB-BB-BB-BB-BB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EBCBBBCBoiMBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBJCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBeBCBBBCBBBCBBBCBBBCBBBCBBBCBBBdBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDL-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-C64CgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOCgmOGgmODg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FDg8FBg8FBg8FhVg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBQBQBQBQBQBQDPBPBPBPBPBPjkC7mMB5mMBnmMBjmMBCBlmMB3lMBpiMBk8kCBCBBG-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FD-7FB-7FB-7F6FoglCEsuHRwjlCyDCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCB0DBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBG1DD97OCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQDPBPBPBPBPBPDQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQDPBPBPBPBPBPEQCQCQCQCPCPCPCPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPB0EB0EBsFBsFBsFBsFBoGBoGBgIBgIBgHBgHB8HB8HDQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQCSFPBPBzEBzEBRCxnOFSFrFBrFBrFBrFBREQBQClkOFPBPBnGBnGFQBQCljOCODPBPB-GB-GBNHSF-HB-HB7HB7HBRqJ53OE9tQBrmQH4Bc3BSgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBfBfBfBfBfBfBfBfBfBfBfBfBfBfBfBfECBByZ0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzB34BgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CBCBBBt-UBruHBt+UB1iVBviVBCBBBCBBBCBBB3hVB5-UB9hVB7hVCCBBCCBBI9jVB9jVBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBICBBBCBBECBBN-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOC-lOG-lOzoeCBBBCBBBCBBBCBBBCBBBCBl8kCBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBTCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBnECBBBCBBBCBBBCBBBCBBBCBBBCBBDCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBKCBBBCBBBnglCBCBBBCBBBCBBBCBBBCBBECBBBvyyCDCBBBCBBBgDCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBn0yCB90yCB10yCBh0yCBn0yCCjxyCBzyyCBpxyCBg6BBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBB-CBl0yCBvjlCBCBBBCBBBt2yCBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBhkzCZCBB9a-5Bd-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCm6TCBB7gBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCH-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BmlBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvChDwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCFvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvC1DuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCCuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCCuCBuCBuCBuCBuCBuCBuCCuCBuCCtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCCtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCCtCBtCBtCBtCBtCBtCBtCCtCBtCk2BgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEO-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-D+CgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCL-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-B74CgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BhrVgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BhB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BD1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BtxekCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjC")),this._CASE_ORBIT}static _Print=null;static get Print(){return this._Print||(this._Print=new p(g("hB9CBjBLBCpWBDFBFGBCCCBSBCsMBClBBDxBBDCBC2BBJaBFFBSVBC-FBCvBBD6BBDkDBP6BBDwBBDOBCbBDCCBJBGfBIqCBCgFBCHBDBBDVBCGBCEEBCBDIBDBBDDBJFFBCCBDBDYBDCBCFBFBBDVBCGBCBBCBBCBBDCCBDBFBBDCBEIIBCBCIIBPBLCBCIBCCBCVBCGBCBBCEBDJBCCBCCBDQQBCBDLBIGBCCBCHBDBBDVBCGBCBBCEBDIBDBBDCBICBFBBCEBDRBLBBCFBECBCDBEBBCCCBEEBEEBBBELBFEBECBCDBDHHPUBGMBCCBCWBCPBDIBCCBCDBIBBCCBCBBDDBDJBIVBCCBCWBCJBCEBDIBCCBCDBIBBGCBCDBDJBCCBNMBCCBCyBBCCBCFBFPBDZBCCBCRBEXBCIBCDDBFBEFFBEBCCCBGBHJBDCBN5BBFcBmBBBCCCBDBCXBCCCBVBDEBCCCBFBCJBDDBhBnCBCjBBFmBBCjBBCOBCMBmBlGBCGGD4LBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBDfBEZBH1CBDFBD-TBCbBE4CBIVBKXBKTBNMBCCBCBBN9CBDJBHJBHNBCKBH4CBIqBBGlCBLeBCLBFLBFEEBoBBDEBMrBBFZBHKBE9BBDgCBCcBDKBHJBHNBDtBBDLBVsCBClFBJ7BBEOBE9BBGqBBDKBJqBBG1QBDFBDlBBDFBDHBCGCBdBD0BBCOBCNBDFBCSBDCBCIBSXBJuBBSBBDaBCMBEhBBPgBBQrEBF5UBXKBWz4BBD9LBGsBBCGGD3BBIBBPXBKGBCGBCGBCGBCGBCGBCGBCGBC9DBjBZBC4CBN1GBbPBC+BBC1CBDmDBGqBBC9CBC1CBKvBBCszcBE2BBK7KBV3FBJ8GBV7BBEJBH3BBJlCBJLBHzDBMdBEtCBCKBFgBBC2BBKNBDJBDmDBZbBLFBDFBDFBKGBCGBC7BBF9DBDJBHj9KBNWBFwBBloItLBDpDBnBGBNEBGZBCEBCCCBCCBCCBoUBhBpBBHyBBCSBCDBFEBCmEBF9FBEFBDFBDFBDCBEGBCGBOBBDLBCZBCSBCBBCOBDNBjB6DBGCBFsBBE3CBCMBEwBwBBsBBjEcBEwBBQbBFjBBKdBGqBBGdBCkBBFNBrB9EBDJBHjBBFjBBFnBBJzBBMLBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBCnCBJIBxBSBCBBGgBBEaBGaBnB3BBFTBDxBBCBBGHBCCBCcBDCBFJBIIBI-BBhBmBBFLBK1BBEcBDaBGZBIDBNGBxCoCB4ByBBOyBBItBBJJBHlBBEcBJBBxGeBCpBBCCBDBBRFBJIBiBtBBJpBBXZBnBbBVWBKtCBFjBBK9BBCEBOYBIJBH0BBCRBJmBBK-CBCTBMRBCuBB-BGBCCCBCBCOBCKBH6BBGJBHDBCHBDBBDVBCGBCBBCEBCJBDBBDCBDHHGGBDGBEEBMJBCDDClBBCJBCDDCDBCJBCBBJBBe7CBCEBfnCBJJBnF1BBDlBBjBkCBMJBHMBU5BBHJBHTBdaBDOBFWB6F7BBlDyCBNHBDDDBGBCBBCdBCBBDLBKJBnCHBDtBBDKBcnCBJyCBOoCBIJB3CHB5ChBBPJBHIBCsBBCNBLcBEfBDVBCNBqCGBCBBCrBBECCBCCBHBJJBHFBCBBCkBBCBBCFBIJBHrBBFJB3HYBIQBCoBBEcB2CQQBwBBO6cBnDuDBCEBMjGBtyCiDBOvhBBRVBL68DBGmSB61G5BBn2B4RBIeBCJBFwCBCJBHdBDFBLlCBLJBCGBCUBGSBxN5BBnG6CBGYBDYBtBqCBF4BBIQBhCEBMGBK1mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBDDBh7D8HBEzNBHWBQQBQtBBDWBKzDB9B1HBLmBBDpCBJvDBWlCB7DTBNTBN2CBKYBoE0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBD9VBQEBCOBxiBeBHFB2GGBCQBDGBCBBCEBG9BBiBxDxDBrBBENBDJBFBBhKeBS5BBGxOxOBoBB3GqBBFhGhGBdBCVBJBBhHGBCDBCBBCOBCkGBDPBqBrCBFJBFBByYjCBtC8BBjGDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBBvIrBBFjDBNOBDOBCOBCkBBLtFB5BcBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBCmDBmgB-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIBnkzVvHB",!1))),this._Print}static CATEGORIES=new Fi({C:()=>new p(g("AfBgDgBBOrWrWBHHBCBICCVuMuMnBBBzBBBE4B4BBGBcDBHQBXhGhGxBBB8BBBmDNB8BBByBBBQddBCCMEBhBGBsCiFiFJBBDBBXIICCBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBPMMBEB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKMMBDBbEByBPBDBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBjoIBvLBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCB-FCBHBBHBBHBBECBIIIBLBDBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIB-BGGBLBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMBxhBPBXJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBF-6DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBrCHBxDUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIlkzVBxHvw-FB",!1)),Cc:()=>new p(g("AfgDgB",!0)),Cf:()=>new p(g("tFzqBzqBBEBXhGhGyBhMhMBxCxCs5D9-B9-BBDBbEByBEBCJBw03B6H6HBBBimEQQj7IPBhjiBDBwmFHBn0rYffB+CB",!1)),Cn:()=>new p(g("4bBBHDBICCVuMuMnBBBzBBBE4B4BBGBcDBHKBvI9B9BBmDmDBMB8BBByBBBQddBCCMEBjBEBuHJJBDDBXXICCBBBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBbFB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKmDmDNBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBDBvzIBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCC-FCBHBBHBBHBBECBIIIBIBGBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIBlCJBCBBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMB3iBJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBJ76DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBjGUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIm8yVBCdBhD-DBxHvw-BB---BBB---BBB",!1)),Co:()=>new p(g("gg4B-nGh4hc9--BD9--B",!0)),Cs:()=>new p(g("gg2B--B",!0)),L:()=>new p(g("hCZBHZBwBLLFGGBVBCeBCpOBFLBPEBICCiEEBCBBDDBCHHCCBCCCBSBCyCBCqEBJlFBClBBDHHBnBBoCaBFDBuBqBBkBBBCiDBCQQBIIBLLBBBDRRCdBe4CBMZZBfBKBBFGGBUBFKKEYYBXBIKBGXBCGBRpBB7B1BBETTIJBQPBFHBDBBDVBCGBCEEBCBERROBBCCBPBBLJJBEBFBBDVBCGBCBBCBBCBBgBDBCUUBBBRIBCCBCVBCGBCBBCEBETTQBBYMMBGBDBBDVBCGBCBBCEBEffBCCBBBQSSCFBECBCDBEBBCCCBEEBEEBBBELBX1B1BBGBCCBCWBCPBEbbBBBCBBDBBfFFBGBCCBCWBCJBCEBEffBBBCBBQBBSIBCCBCoBBDRRGCBJCBZFBGRBEXBCIBCDDBFB7BvBBCBBNGB7BBBCCCBDBCXBCCCBIBCBBKDDBDBCWWBCBhBgCgCBGBCjBBcEB0DqBBVRRBEBFDBEEEBIIBBBFMBNSSBkBBCGGDqBBCsKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPBR1CBDFBErTBDQBCZBGqCBHHBIRBOSBPRBPMBCCBQzBBkBFFkC4CBIEBDhBBCGGBkCBLeByBdBDEBMrBBFZB3BWBK0BBzC+C+CBtBBSHB3BdBOBBLrBBbjBBqBCBLjBBDKBGqBBDCBqBDBCFBCBBEGGB+FBhC1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGB1DOORMBmDFFDJBCEEBDBHGCBCBCKBDDBGEBF1B1BB8zC8zCBjHBHDBEBBNlBBCGGD3BBIRRBVBKGBCGBCGBCGBCGBCGBCGBCGBxC2O2OBrBrBBDBGBBF1CBHCBC5CBCDBGqBBC9CBSfBxBPBhQ-tGBhCs0VBkCtBBDsIBEPBLBBVuBBReBDlCByBIBDmDBDxCBVQBCCBCDBCWBezBBPxBB-BFBECCBMMBaBLWBacBIuBBdRRBDBCJBLEBCoBBYCBCHBVWBEEEBwBBCEEBDDBDBDCCZCBDKBICBNFBDFBDFBKGBCGBCqBBCNBHyDBej9KBNWBFwBBloItLBDpDBnBGBNEBGCCBIBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBlBZBHZBM4CBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmMcBEwBBwBfBOTBCHBHlBBLdBDjBBFHBxB9EBTjBBFjBBFnBBJzBBNKBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCQQBCBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4ByBBOyBBOjBBnBbBKWB7HpBBHBBRFB5BcBLJJBUBrBRBvBUBcWBN0BB6BBBDOOBrBBhBYBbjBBeDDJiBBENNBuBBPDBWCCkBRBCYBUBBgCGBCCCBCBCOBCJBIuBBnBHBDBBDVBCGBCBBCEBETTNEBfJBCDDClBBCaaCtBtBBzBBTDBVCBfvBBVBBC5F5FBtBBqBDBlBvBBV8B8BBpBBOoCoCBZBmBGB6FrBB1D-BBgBHBDDDBGBCBBCXBQCC-CHBDmBBRCCdLLBmBBIWWMtBBUTTBnCBoGgBBgBIBCkBBSyByBBcBxDGBCBBClBBWaaBEBCBBCfBPYYBqBBlISBQCCBLBChBB9DwCwCB4cBnHjGBtyCgDBQvhBBSFBa68DBGmSB61GdBj3B4RBIeBSuCBSdBTvBBRDBgBUBGSBxNsBB0G-BBhBYBDYBtBqCBGjCjCBLBhCBBCPPBNNB0mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBn7F0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BeBHFBmI9BBzEsBBLGBRiKiKBcBTrBBlPbBlHdBDwGwGBdBCCBCBBCGBDEBKBBhHGBCDBCBBCOBCkGB8BjCBI1lB1lBBCBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQBlqE-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),LC:()=>new p(g("hCZBHZB7BLLBVBCeBCiGBCDBFvGBDZBhGDBDBBECBCHHCCBCCCBSBCyCBCqEBJlFBClBBKoBB44ClBBCGGDqBBDCBhV1CBDFBjkCKBGqBBDCBhCrBBgCMBChBBmD1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGBmIFFDJBCEEBDBHGCBCBCFBFDDBCBGEBF1B1BB8zC8zCB6DBDmDBHDBEBBNlBBCGGzoetBBTbBnEtCBCWBEDBCsCBZBBE2Z2ZBpBBGIBIvCBh6TGBNEBqgBZBHZBmlBvCBhDjBBFjBB1DKBCOBCGBCBBCKBCOBCGBCBBk2ByBBOyBB+CVBLVB74C-BBhrV-BBhBYBDYBtpZ0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BJBCTBHFB2uCjCB",!1)),Ll:()=>new p(g("hDZB7BqBqBBWBCHBC2BCBQCBuBCDECBBBDCCDEEBFFDEEBBBDDDCCCDCCBCCDEECDDBDDBBBHGDCOCBSCBDDCEEC4BCBFBDDDBCCFICBjCBDZBiGCCEEEBBBTccBhBBCBBECBCWCBDBCGDB0B0BBuBBCgBCK0BCDMCBgDCxBoBBo6CqBBDCB5XFBjkCIBC2D2DBqBBgCMBChBBnD0ECBHBCgDCBHBJFBLHBJHBJFBLHBJHBJNBDHBJHBJHBJEBCBBHEEBBBCBBJDBDBBJHBLCBCBBzIEEBEEcKFDBBJDBF2B2Bs1CvBBCEEBGCFCCBCCBEBGiDCBIICFFNlBBCGG0oesBCUaCoEMCBBBC+BCBGBCCCDICFCCDCCBBBCSCGGGCMCFCCDOCbEE2ZqBBGIBIvCBh6TGBNEBqhBZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBnqZZBbGBCRBbZBbDBCCCBFBCKBbZBbZBbZBbZBbZBbZBbZBbZBbbBdYBCFBbYBCFBbYBCFBbYBCFBbYBCFBC15B15BBIBCTBHFB4vChBB",!1)),Lm:()=>new p(g("wVRBFLBPEBICCmEGG-OnHnHlFBBuIBBFgBgBKEEhFoFoF1mBgEgE2R72B72BsDkTkTxOFBvF+BBOjBjBBjBByVOORMBg-CBByHgGgG2OsBsBBDBGiDiDB+C+CBBB34bjnBjnBBEBvIzDzDdBB6DIBxCYYpDDBEBB2OXXqEtDtDWBBoDDBKngVngVuBBBh-BFBCpBBCIB0sBhBhB2K04D04DnrTDB9PCBpBBBnRMBhCBBCPPB9-P9-PBCBCGBCBByhM9BBqGGBud0Q0QsSAB",!1)),Lo:()=>new p(g("qFQQhIFFBCBxGBB7ZaBFDBuBfBCJBkBBBCiDBCZZBLLBBBDRRCdBe4CBMZZBfBWVBrBYBIKBGXBCGBRoBB8B1BBETTIJBROBFHBDBBDVBCGBCEEBCBERROBBCCBPBBLJJBEBFBBDVBCGBCBBCBBCBBgBDBCUUBBBRIBCCBCVBCGBCBBCEBETTQBBYMMBGBDBBDVBCGBCBBCEBEffBCCBBBQSSCFBECBCDBEBBCCCBEEBEEBBBELBX1B1BBGBCCBCWBCPBEbbBBBCBBDBBfFFBGBCCBCWBCJBCEBEffBBBCBBQBBSIBCCBCoBBDRRGCBJCBZFBGRBEXBCIBCDDBFB7BvBBCBBNFB8BBBCCCBDBCXBCCCBIBCBBKDDBDBYDBhBgCgCBGBCjBBcEB0DqBBVRRBEBFDBEEEBIIBBBFMBNyDyDBnKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPByDrTBDQBCZBGqCBHHBIRBOSBPRBPMBCCBQzBBpBkCkCBhBBC0BBIEBDhBBCGGBkCBLeByBdBDEBMrBBFZB3BWBK0BBxFuBBSHB3BdBOBBLrBBbjBBqBCBLdByDDBCFBCBBE7hB7hBBCB4-C3BBZWBKGBCGBCGBCGBCGBCGBCGBCGBoR2B2BF1CBJCCB4CBFGGBpBBC9CBSfBxBPBhQ-tGBhC0wUBC2jBBkCnBBJrIBFPBLBBjCyByBBkCBqFoDoDEGBCCBCDBCWBezBBPxBB-BFBECCBMMBaBLWBacBIuBBuBEBDIBLEBCoBBYCBCHBVPBCFBEEEBwBBCEEBDDBDBDCCZBBEKBIPPBEBDFBDFBKGBCGByEiBBej9KBNWBFwBBloItLBDpDBkCCCBIBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBqDJBCsBBDeBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmMcBEwBBwBfBOTBCHBHlBBLdBDjBBFHBhEtCBjDnBBJzBB9CzBBN2JBKVBLHB5EFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCQQBCBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4FjBBnBDBCxJxJBoBBHBBRCBCBB5BcBLJJBUBrBRBvBUBcWBN0BB6BBBDOOBrBBhBYBbjBBeDDJiBBENNBuBBPDBWCCkBRBCYBUBBgCGBCCCBCBCOBCJBIuBBnBHBDBBDVBCGBCBBCEBETTNEBfJBCDDClBBCaaCtBtBBzBBTDBVCBfvBBVBBC5F5FBtBBqBDBlBvBBV8B8BBpBBOoCoCBZBmBGB6FrBB0GHBDDDBGBCBBCXBQCC-CHBDmBBRCCdLLBmBBIWWMtBBUTTBnCBoGgBBgBIBCkBBSyByBBcBxDGBCBBClBBWaaBEBCBBCfBPYYBnBBCBBlISBQCCBLBChBB9DwCwCB4cBnHjGBtyCgDBQvhBBSFBa68DBGmSB61GdBj3B4RBIeBSuCBSdBTvBB0BUBGSB0NnBB2MqCBGwFwFB0mHBqBfBiDyDBuwIiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBxzI2P2PBrBBiBiKiKBcBTrBBlPaBmHdBDwGwGBdBCCBCBBCGBDEBKiHiHBFBCDBCBBCOBCkGB8pBDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQBlqE-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Lt:()=>new p(g("lOGDnB2sH2sHBGBJHBJHBNQQwBAB",!1)),Lu:()=>new p(g("hCZBmDWBCGBiB2BCDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIJDCMCDQCDDDCCBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBDDBBBEWCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBpCDBNDBNDBNEBMDBnIFFECBDCBDEEBDBHGCBCBDDBLBBG+B+B9zCvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoqZZBbZBbZBbCCBGDBDDBCBCHBbZBbBBCDBDHBCGBcBBCDBCEBCEEBFBcZBbZBbZBbZBbZBbZBfYBiBYBiBYBiBYBiBYBiB2pE2pEBgBB",!1)),M:()=>new p(g("gYvDB0IGBoIsBBCCCBCCBCCpCKBxBUBRmDmDBFBDFBDBBCDBkBffBZB8CKB7BIBKZZBCBCIBCCBCEBsBCB8BIBrBXBCgBB3BCBCRBCGBLBBeCB5BCCBFBDBBDCBKLLBbbDCB5BCCBDBFBBDCBEffBEEMCB5BCCBGBCCBCCBVBBXFBCCB5BCCBFBDBBDCBICBLBBf8B8BBDBECBCDBKpBpBBDB4BCCBFBCCBCDBIBBMBBeCB5BCCBFBCCBCDBIBBMBBQNNBCB4BBBCGBCCBCDBKLLBeeBBBnCFFBEBCCCBGBTBB+BDDBFBNHBjDDDBHBMGBqCBBcECFBByBTBCBBGKBCjBBKlDlDBSBYDBFCBCCBDGBEDBOLBCLLBCBgWCBzdDBdCBeBBfBBhCfBKuBuBBBBC2D2DBjBjB3DLBFLB8GEB6BJBCcBDxBxBBsBBDLBVEBwBQBnBIBNCBfMB5BNBxBTB5ECBCUBFHHDCBnG-BBxWgBB--CCBuEhDhDBeBrRFBqDBB1udDBCJBhBBBxCBBxIEEFYYBDBF0C0CBzBzBBQBbRBOnBnBBGBaMBtBDBwBNBlBkCkCBMBNJJBuBuBBBBzBCCBBBDBBGBBCqBqBBDBGBBtHHBCBBx5TiXiXBOBRPBuejHjH2EEBn0BCBCBBGDBpBCBFmFmFB+R+RBCBiCEB+JBBuCFBnCKByBDB7DCB2BOBqBDDBLLBCBuBKBI+B+BBBBlBNBRBBtBNNBBBxBNBJDBCBB9CLBHDD+ELBWDB4BBBCGBDBBDCBKLLBDDBFBEEBkCIBCDDCDBCEBCPPBzCzCBQBYyCyCBSBsHGBDIBcBBzCQBrDMBmDOBhIOB2HFBCBBDDBCCCBuEuEBFBDGBEddBIBpBGBCDBJKKBJBvBPBnGHBoGHBCHBzCVBCNB7DFBECCBCCBFBCjCjCBDBCBBCEB8KDBKBBCxBxBBFBEEBYmnFmnFHOBpmLRBhuCEB8BGB5gBCCB1BBIDByCMMBslTslTBizEizEBsBBDWB-QEBEFBJHBDGBfDB1ECB89B2BBFxBBJPPXEBCOBxqBGBCQBDGBCBBCEBlDhFhFBFB4L+B+BBCB9PDB-HBB0HDDIBBG7O7OBFBuDGB29lYvHB",!1)),Mc:()=>new p(g("joC4B4BDCBJDBCBBzBBB7BCBHBBDBBLsBsB7BCBjC7B7BBBBJCCB2B2BB7B7BCHHBDDBLLnDBBCBBECBCCBLqBqBBBB+BDB+BBB7BCCBDBDBBCBBKBBdPPB7B7BBBBGCBCCBLrBrBBsCsCBBBHHBTBBrKBBgCsFsFBFFHDDBaaBLLBBBDGBWBBDFBDLLBBB5zBffiEIIBGBCBB7KDBDCBFBBCFBhHBB7BCCKCCBJJBEByExBxBGCCBDBCBB+BffFBBD9B9BDCBCEEBxBxBBGBJBBsFWW35EBB0-dBBD5C5CBzBzBBOBvEBBwBxBxBBFFBDDBBBvDBBDBBZuBuBCuDuDDBBGuHuHBCCBCCBCC0gZCCgEuBuBBBBFBB0DZZB8B8BxBCBKBBO+C+CBBBEBBCrFrFBBBgBBB7BBBCDBDBBDCBKLLB1C1CBBBIDDCDBCBBCmDmDBBBJBBErDrDBBBHCCBCBDuHuHBBBHDBDyDyDBBBJBBCuDuDCBBHoDoDCBBFmImIBBBK4H4HBEBCBBFDDCvEvEBBBJDBF1C1CeBB-BqGqGECCoGPPrDIID2G2GBDBFBBC-K-KBNNxBBBJBBCpvQpvQBBBlxD2BBpDBB0rYBBHFB",!1)),Me:()=>new p(g("okBBB1xF-wB-wBBCBCCBsshBCB",!1)),Mn:()=>new p(g("gYvDB0IEBqIsBBCCCBCCBCCpCKBxBUBRmDmDBFBDFBDBBCDBkBffBZB8CKB7BIBKZZBCBCIBCCBCEBsBCB8BIBrBXBCfB4BCCFHBFEEBFBLBBe7B7BFDBJVVBbbDBB6BFFBFFBDDBBBEffBEEMBB6BFFBDBCBBFVVBXXBEBC7B7BDCCBCBJIIBMMBff+BNNzBEE4BCCBBBGCBCDBIBBMBBe7B7BDHHGBBVBBdBB6BBBFDBJVVBeepCIIBBBC7C7CDGBNHBjDDDBHBMGBqCBBcEC4BNBCEBCBBGKBCjBBKnDnDBCBCFBCBBDBBaBBFCBRDBODDBHHQgWgWBBBzdCBeBBfBBfBBhCBBCGBJDDBJBKuBuBBBBC2D2DBjBjB3DCBFBBKHHBBB8GBBD7B7BCGBCCCDHBHJBDxBxBBMBCeBDLBVDBxBCCBDBCGGpBIBNBBhBDBDBBCCB5BCCBEECCB7BHBDBB5ECBCMBCGBFHHEBBnG-BBxWMBFEEBKB--CCBuEhDhDBeBrRDBsDBB1udFFBIBhBBBxCBBxIEEFaaBGG4EBBbRBOnBnBBGBaKBvBCBxBDDBCBDBBoBkCkCBEBDBBDBBNJJwB0B0BCCBDBBGBBCrBrBBJJvHDDFx5Tx5TiXPBRPBuejHjH2EEBn0BCBCBBGDBpBCBFmFmFB+R+RBCBiCEB+JBBuCFBnCKByBDB8D3B3BBNBqBDDBLLBBByBDBDBBI+B+BBBBlBEBCHB-BNNB1B1BBHBLDBDgDgDBBBDCCBHHD+E+EEHBWBB6BBBEmBmBBFBEEBnCFBOECPBB2CHBDCBCYY1CFBCFFBCCBvHvHBCBHBBCBBcBB2CHBDCCBrDrDCDDBEBCmDmDCDDBCBCEBkIIBCBBhIBBCFFxEDBDBBFhBhBBIBpBFBDDBJKKBEBDCBvBMBCBBnGCCBBBCqGqGBFBCFBCzCzCBUBDGBCBBCBB7DFBECCBCCBFBCpCpCBEEC8K8KBMMB1B1BBDBGCCYmnFmnFHOBpmLLBECBhuCEB8BGB5gBgCgCBCByC5lT5lTBizEizEBsBBDWBhRCBSHBDGBfDB1ECB89B2BBFxBBJPPXEBCOBxqBGBCQBDGBCBBCEBlDhFhFBFB4L+B+BBCB9PDB-HBB0HDDIBBG7O7OBFBuDGB29lYvHB",!1)),N:()=>new p(g("wBJB5DBBGDDBBBitBJBnEJBnGJB9MJB3DJBFFBtDJB3DJB3DJBDFBvDMB0DJBJGBoDJBpDGBISBuDJBhDJB3DJBnCTBtIJBnCJBwWTBybCBwHJBHJBXJBtJJBhEKBmFJBHJB3FJB3CJBnEJBHJB3gBEEBEBHJBnGyBBDEB3W7BBvCVB3TdBqrBqYqYaIBPCB4KDBrEJBfHBCOBhBJBoBOBh7cJB9FJBhKFB7EJBnBJBnGJBXJB3CJB3MJB34UJBuPsBBN4BBSBB2KaBlBDBeJJnEEBrGJBvdHBaGBoBIBsCEBXFBhFBBDPBDtBBhCIB1BBBfCBsCEBpDHBZHBqBGBrKFBxBJBHJB3IeB-EJBrBDBxDGBnEdBhEJB9BJBxEJBITB8HJB3KJB3DJB3LJBnDJBHTBtCLBlNSB+CJB3UJB3CcBkHJBnCJB3BJBnLJBnDUBshBuDBimPJBnpCJB3CJBnEJBCGBvQJBnIWB+KCB6nXJBnuBTBNTBtDYB2iBxBBhqCJBnNJB3PJB4HJBtWIBhEJB4Y6BBCCBCDBtCsBBCOBjeMBk3CJB",!1)),Nd:()=>new p(g("wBJnxBJnEJnGJ9MJ3DJ3DJ3DJ3DJ3DJ3DJ3DJ3DJ3DJhDJ3DJnCJ3IJnCJn6BJnBJtJJhEJnFJHJ3FJ3CJnEJHJnuiBJnVJnBJnGJXJ3CJ3MJ34UJnsBJnkCJHJ9YJhEJ9BJxEJ3IJ3KJ3DJ3LJnDJHTtCJnNJnDJ3UJ3CJ3HJnCJ3BJnLJ3uQJnpCJ3CJnEJ3QJ37XJ12CxBhqCJnNJ3PJ4HJ2aJ30EJ",!0)),Nl:()=>new p(g("u3FCBwzCiBBDDB-zDaaBHBPCBs1dJBxyW0BBtOJJnEEBrhIuDBm8SCB",!1)),No:()=>new p(g("yFBBGDDBBB2pCFB5LFB5DCBmEGB6GGBSIByNJB2hBTB0jBJBhP20B20BEFBHJBnGPBqB3W3WB6BBvCVB3TdBqrB1kB1kBBCBrEJBfHBCOBhBJBoBOBxrdFBymWsBBiCDBSBB2KaBlBDB1pBHBaGBoBIBsCEBXFBhFBBDPBDtBBhCIB1BBBfCBsCEBpDHBZHBqBGBrKFBhLeB-EJBrBDBxDGBnETB8LTBmqBBBvNIBobSB0aUBn8SGB-YWBqhZTBNTBtDYBvqFIBid6BBCCBCDBtCsBBCOBjeMB",!1)),P:()=>new p(g("hBCBCFBCDBLBBEBBbCBCccCkBkBGEELBBEEE-VJJzOFBqBBB0BCCDDDtBBBVBBCBBOCCBBBrCDBnDsBsBBMBqHCB3BOBgBmImIBLLtE5D5D6DnMnMNwLwL7CLLBpFpFBNBCmBmBBCBoCrCrCBDBFBBwDFBsFlTlTBHB4EuTuTtBBBvCCBoCBB+ECBCCBmBKB6JBB5GBBhEGBCFBhFBBLGBdCB9DDB8BEB-BBBhCHBM9Z9ZBWBJTBCMBCLBfBBPBB6TDBeBB+hBNBwCBBgBJB0MVBgCDBhBBB8XDBCBBxDwEwEBtBBCfBDLBkNCBFJBDLBRNNjD7C7CjgdBBuICBkDLL0DFB9LDB3CBBpBCBCyByBBwBwBiDMBRBB9DDB-DBBRBB6HzqUzqUBxGxGBIBXiBBCNBCFFCBB2ECBCFBCDBLBBEBBbCBCccCCCBFB7MCB9UxBxB-MoXoXoGgBgBxIIBnBxDxDBFBjCGB6CDByO-J-JjBlElEBDBtBDB+FGBuDBBCDB-DDBxBBBwCDBFOOCCB5CFBsDrJrJBCCBzDzDBDBLBBCpDpD7HWBqDCBdMBtCjEjEBBB9HpIpIBBB8E9C9CBGB0CCBCEB+CJB4GgDgDBDBrBBBmUBBrCMBwFxjBxjBBDB97CBB8zOBBmEiCiCBDBJpRpRBBBoJDBoK9lT9lTovHEB07C-a-aBAB",!1)),Pc:()=>new p(g("-Cg-Hg-HBUU-u3BBBZCBwHAB",!1)),Pd:()=>new p(g("tB9qB9qB0BiyDiyDmgBqgCqgCBEBiwDDDgBBBFdd-NUUwDxszBxszBBmBmBLqFqFhzD-J-J",!1)),Pe:()=>new p(g("pB0B0BgB+1D+1DC-6B-6BqtC4B4BQ7T7TCff-hBMCxChBhBCGC1MUChCCCiBmhBmhBCECtBGCtNICEGCDBB-ozB6G6GeOCESSCCCrF0B0BgBGD",!1)),Pf:()=>new p(g("7F+6H+6HEddpuDCCFDDQEE",!1)),Pi:()=>new p(g("rFt7Ht7HDBBDaapuDCCFDDQEE",!1)),Po:()=>new p(g("hBCBCCBDECBLLBEEBcclCGGPBBI-V-VJzOzOBEBqB3B3BDDDtBBBVBBCBBOCCBBBrCDBnDsBsBBMBqHCB3BOBgBmImIBLLtE5D5D6DnMnMNwLwL7CLLBpFpFBNBCxDxDrCEBFBBwDFBsFlTlTBHBmY9D9DBBBoCBB+ECBCCBmBFBCDB6JBB5GBBhEGBCFBhFBBLGBdCB9DDB8BEB-BBBhCHBMjajaBJJBGBJIBDDBDCBEKBCCCBIB7kDDBCBBxDwEwEBFFBBBDDDBHBCBBCDDBLLBDBCJBDDBCCCBLBDCBtNCB6B+F+FjgdBBuICBkDLL0DFB9LDB3CBBpBCBCyByBBwBwBiDMBRBB9DDB-DBBRBB6HlxUlxUBFBDXXVBBDDBECBCDBICBHCCB2E2EBBBCCBDECBLLBEEBcclBDDB7M7MBBB9UxBxB-MoXoXoGgBgBxIIBnBxDxDBFBjCGB6CDB0ZlElEBDBtBDB+FGBuDBBCDB-DDBxBBBwCDBFOOCCB5CFBsDrJrJBCCBzDzDBDBLBBCpDpD7HWBqDCBdMBtCjEjEBBB9HpIpIBBB8E9C9CBGB0CCBCEB+CJB4GgDgDBDBrBBBmUBBrCMBwFxjBxjBBDB97CBB8zOBBmEiCiCBDBJpRpRBBBoJDBoK9lT9lTovHEB07C-a-aBAB",!1)),Ps:()=>new p(g("oBzBzBgB-1D-1DC-6B-6B-rCEEnB4B4BQ7T7TCff-hBMCxChBhBCGC1MUChCCCiBmhBmhBCECaTTCECtNICEGCDipzBipzB4GeeCMCESSCCCrFzBzBgBEEDAB",!1)),S:()=>new p(g("kBHHRCBgBCCcCCkBEBCBBDCCBCBDEEfgBgBrODBNNBGGBCCCBPB2DPPBxDxDsErIrIBBB3DCBDDDBvGvGLUUB4H4HIBBpEqLqLBHHB2H2H-DjEjEBGBlEwGwGqBmGmGiGCBQCCBBBDFBVECmEHBCFBCBBGDBmGBBxXJB0WuLuLlL+E+EBgBBiLJBKIBhiBCCBBBMCBOCBOCBOBBmCOOoBCBOCBUhBB-BBBCDBCBBLCCBBBGFBCECFMMBFFBDBGDBC7B7BBFFB2LBFcBD+HBXKByCtCBXnTBtBwBBDeBLyMBX+BBFfBD1LBDpEBmHFBmLBBvBZBC4CBN1GBbPBFOOBNNWBBHBB8CBB0HBBFJBhBlBBKRRBdBMdBJQQBeBLmBBQ-JBhuG-BBx0V2BB6RWBKBBoDBB+EDBLDB+RCBiHPPB+9T+9TpEgBBuLPBhCBB3BHBtBDBjDCCBBBD7E7EHRRBBBgBCCcCCiEGBCGBOBB6JIB6BQBDCBCMBEwBwBBrBB7zBBBwSmWmWBiKiKBGBnjC2kC2kCBbBr6SDBG3qU3qUk7DvHBLCBEzNBHWBQQBgDzDB9B1HBLmBBD7BBGCBXBBIdBF8BBWhCBE7F7FB1CBrbaagBaagBaagBaagBaa9B-PB4BDBzBHBCNBCBBp2BwNwNttCEE+DiOiOBvIvIBqBBFjDBNOBDOBCOBCkBBYgFB5BcBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBC7CBLAB",!1)),Sc:()=>new p(g("kB+D+DBCBqnB8D8DzPBBzPBBI2H2HoImSmS8sClmClmCBgBB37hBkuVkuVtD7E7E8GBBEBB3-HDB-4wBxtCxtC",!1)),Sk:()=>new p(g("+CCCoCHHFEEqQDBNNBGGBCCCBPB2DPPBjoBjoB15FCCBBBMCBOCBOCBOBB9kEBBkzdWBKBBoDBBxePPBniUniUBPB8bCCjF4g9B4g9BBDB",!1)),Sm:()=>new p(g("rBRRBBB+BCCuBFFmBgBgB-XwQwQBBB8xGOOoBCBOCBsEoBoBBDBHlClCBDBGBBFGDIgBgBBDDCgBgBBqIBhBBB7CffBXBpBFB2OKK3BHBwDxKxKBDBDeBLPBhIiEBX+BBFfBDhIBxBUBDFB9+zB5Z5ZCCBlFRRBBB+BCCkEHHBCBitDBBhrwBx+Bx+BagBgBagBgBagBgBagBgBat5Ft5FB-uC-uCBHB",!1)),So:()=>new p(g("mFDDFCCyerIrIBgEgEBvGvGLUUB4H4HkQ2L2LjEFBClElEwGqBqBoMCBQCCBBBDFBVECmEHBCFBCBBGDBmGBBxXJB0WzWzW+EhBBiLJBKIBksBBBCDBCBBLCCBHHBEBCECFMMBPPCBBC7B7BBKKBDBDDBCBBCBBCGBCeBDBBCCCBdBtIHBFTBDGBDwCBCdBanBBHnCBXKByCtCBX2FBCIBC1BBJuDBC3HBtBrBBhC-HBhQvBBWBBHmBBDpEBmHFBmLBBvBZBC4CBN1GBbPBFOOBNNWBBHBBxKBBFJBhBlBBKRRBdBMdBJQQBeBLmBBQ-JBhuG-BBx0V2BBibDBLBBC+R+RBBBqqUPBuLPBhCBB3BHBuBCBlPEEFBBOBB6JIB6BQBDCBCMBEwBwBBrBB7zBBBwSpgBpgBBGBnjC2kC2kCBGBFQBr6SDBG3qU3qUk7DvHBLCBEzNBHWBQPBhDzDB9B1HBLmBBD7BBGCBXBBIdBF8BBWhCBE7F7FB1CBqlB-PB4BDBzBHBCNBCBBp2B96C96CiEyWyWBqBBFjDBNOBDOBCOBCkBBYgFB5BcBOrBBFIBIBBPFB7E6HBG4WBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBB-B3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBC7CBLAB",!1)),Z:()=>new p(g("gBgEgEgvFgsCgsCBJBeBBGwBwBh9DAB",!1)),Zl:()=>new p(g("ohIA",!0)),Zp:()=>new p(g("phIA",!0)),Zs:()=>new p(g("gBgEgEgvFgsCgsCBJBlBwBwBh9DAB",!1)),ASCII_Hex_Digit:()=>new p(g("wBJIFbF",!0)),Alphabetic:()=>new p(g("hCZBHZBwBLLFGGBVBCeBCpOBFLBPEBICC3CeeBQBCBBDDBCHHCCBCCCBSBCyCBCqEBJlFBClBBDHHBnBBoBNBCCCBCCBCCJaBFDBeKBG3BBCGBPlDBCHBFHBFCBLCBDRRBuBBOkDBZgBBKBBFGGBWBDSBUYBIKBGXBCGBIJJBoBBLLBEGBHrCBCPBCCBFOBOSBCHBDBBDVBCGBCEEBCBEHBDBBDBBCJJFBBCEBNBBLFFBBBCFBFBBDVBCGBCBBCBBCBBFEBFBBDBBFIIBCBCSSBEBMCBCIBCCBCVBCGBCBBCEBEIBCCBCBBEQQBCBWDBFCBCHBDBBDVBCGBCBBCEBEHBDBBDBBKBBFBBCEBORRBCCBEBECBCDBEBBCCCBEEBEEBBBELBFEBECBCCBEHHpBMBCCBCWBCPBEHBCCBCCBJBBCCBCBBDDBdDBCHBCCBCWBCJBCEBEHBCCBCCBJBBGCBCDBOCBNMBCCBCoBBDHBCCBCCBCGGBCBIEBXFBCCBCRBEXBCIBCDDBFBJFBCCCBGBTBBO5BBGGBH0B0BBECBDBCXBCCCBRBCCBDEBCHHPDBhBgCgCBGBCjBBFSBFPBCjBBkC2BBCDDBDBR-BBLDBDlBBCGGDqBBCsKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPBR1CBDFBErTBDQBCZBGqCBEKBITBMUBNTBNMBCCBCBBNzBBDSBPFFkC4CBIqBBGlCBLeBCLBFIBYdBDEBMrBBFZB3BbBF+BBDTBzBYYBMMBBByBzBBCOBCHB0BpBBDDBLrBBCKBP2BBXCBLjBBDKBGqBBDCBqBDBCFBCBBEGGB+FBUhBBM1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGB1DOORMBmDFFDJBCEEBDBHGCBCBCKBDDBGEBFSSBnBBuZzBB34BkHBHDBEBBNlBBCGGD3BBIRRBVBKGBCGBCGBCGBCGBCGBCGBCGBCfBwB2O2OBBBaIBIEBDEBF1CBHCBC5CBCDBGqBBC9CBSfBxBPBhQ-tGBhCs0VBkCtBBDsIBEPBLBBVuBBGHBEwDBoBIBDmDBDxCBVUBCgBBZzBBNjCBCtBtBBEBECCBBBLgBBGiBBOcBEyBBCLBQRRBOBLEBC2BBKNBTWBEkCBCCCZCBDPBDDBMFBDFBDFBKGBCGBCqBBCNBH6DBWj9KBNWBFwBBloItLBDpDBnBGBNEBGLBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBlBZBHZBM4CBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmC0BBsIcBEwBBwBfBOdBGqBBGdBDjBBFHBCEBrB9EBTjBBFjBBFnBBJzBBNKBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCDBCBBGHBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4ByBBOyBBOnBBjBbBEGGBVB7HpBBCBBEBBRFBzBCBEcBLJJBUBrBRBvBUBcWBKlCBsBEBL4BBKOOBXBYyBBSDBJiBBEKKB+BBCDBKBBLCCkBRBChBBDHHBCB-BGBCCCBCBCOBCJBI4BBYDBCHBDBBDVBCGBCBBCEBEHBDBBDBBEHHGGBdJBCDDClBBCJBCDDCDBCBBECCtBhCBCCBCDBVCBfhCBDBBC5F5FB0BBDGBaFBjB+BBCEE8B1BBDoCoCBZBDNBWGB6F4BBoD-BBgBHBDDDBGBCBBCdBCBBDBBDDB+CHBDtBBDFBCCCBccBxBBDJBSnCBGTTBnCBoDHB5CgBBgBIBCsBBCGBCyByBBcBDVBCNBqCGBCBBCrBBECCBCCBBBCDDBZZBEBCBBCkBBCBBCDBCYYBqBBlIWBKQBCoBBECBwDwCwCB4cBnDuDBSjGBtyCgDBQvhBBSFBa68DBGmSB61GuBBy2B4RBIeBSuCBSdBTvBBRDBgBUBGSBxNsBB0G-BBhBYBDYBtBqCBF4BBIQBhCBBCNNBFBK1mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBFi7Fi7FBzCBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BeBHFB2GGBCQBDGBCBBCEBG9BBiBxDxDBrBBLGBRiKiKBcBTrBBlPbBlHdBDwGwGBdBCVBJBBhHGBCDBCBBCOBCkGB8BjCBEEE1lBDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1TZBHZBHZB3zD-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Dash:()=>new p(g("tB9qB9qB0BiyDiyDmgBqgCqgCBEB+BoBoBQnMnMlgDDDgBBBFdd-NUUwDxszBxszBBmBmBLqFqFhzD-J-J",!1)),Emoji:()=>new p(g("jBHHGJBwDFFu8HNN5GXX7CFBQBBwLBBNnFnFaKBFCBoGoHoHBLLK7B7BBCBCEBKGDBDDFDDCBBDIEBJJBBBGCCGLBMBBDCCBCCTDDBTTBEBCCCBEEBGGDBBFBBMBBGBBDGGBECBVVBGGBEBCDBDFFDDDBEBCDDCCCHEEHLLBQQDFFCFFBBBCMMBxBxBBBBKeP1LBBwOCBUBB0BFF7mBNN6SCCrrvDrGrGhFBBNBBPDDBIBsCZBCBBYVVDIBWBBvFhBBDvDBDBBCCBDyCBDCBCmIBC+BBMFBCXBIBBDHBNDDBCBDFFBOOBDDJBBKGGBBBNCBJCBDCCFHHEHHB0CBxBlCBGHBDDBEJBECCBEEDJBkHLBF8I8IBtBBCJBC4FBxDMBEKBE4BBCFFBOBDLBFJB",!1)),Emoji_Component:()=>new p(g("jBHHGJB0+H2G2Gsp3B3+8B3+8BBYB8PEBxtBDBtzhY-CB",!1)),Emoji_Modifier:()=>new p(g("7-8DE",!0)),Emoji_Modifier_Base:()=>new p(g("9wJ8G8GRDB4jzD9B9BBBBDDDBBB2DBBDKBWSBEFFBBBCCBICCZqGqGBFFWFFBvFvFBBBEEB0CRRBBBKMMgSDDJHBHKKBIBDCB5B+B+BBCCBCCSCBCMBmHCBrBIB",!1)),Emoji_Presentation:()=>new p(g("64IBBuGDBEDDqQBBWBBzBLBsBUUOJJBSSBGGBJJGWWIBBCFFDIIFBBdkBkBCFFBBBC+B+BBBBZPP8aBB0BFFvlxDrGrG-FDDBIBsCZBCZZVDDBDBCCBWBBvFgBBNIBClCBCVBNqBBFEBNQBEEEBlCBCCCB5FBD+BBODBCXBTbbBOO3C0CBxBlCBHEEBBBDDBEDBMBBIIBkHLBF8I8IBtBBCJBC4FBxDMBEKBE4BBCFFBOBDLBFJB",!1)),Extended_Pictographic:()=>new p(g("pFFFu8HNN5GXX7CFBQBBwLBBNnFnFaKBFCBoGoHoHBLLK7B7BBCBCEBKGDBDDFDDCBBDIEBJJBBBGCCGLBMBBDCCBCCTDDBTTBEBCCCBEEBGGDBBFBBMBBGBBDGGBECBVVBGGBEBCDBDFFDDDBEBCDDCCCHEEHLLBQQDFFCFFBBBCMMBxBxBBBBKeP1LBBwOCBUBB0BFF7mBNN6SCCrrvDoBoBBCBlDLBQBBQPPBmBmBBIBxDBBNBBPDDBIBU3BBcOBLVVDIBCDBKWBH7FBDvDBDBBCCBDyCBDCBCDBG9HBC+BBMFBCXBIBBDHBNDDBCBDFFBOOBDDJBBKGGBBBNCBJCBDCCFHHEHHB0CBxBlCBGHBDQBECCBEBDMB7GlBBNDB5BHBLFBpBHBfBBNDBDNBKmBBNuBBCJBC4FB5CHBPxEBhI9fB",!1)),Hex_Digit:()=>new p(g("wBJIFbFq1-BJIFbF",!0)),Lowercase:()=>new p(g("hDZBwBLLFlBlBBWBCHBC2BCBQCBuBCDECBBBDCCDEEBFFDEEBBBDDDCCCDCCBCCDEECDDBDDBBBHGDCOCBSCBDDCEEC4BCBFBDDDBCCFICBjCBDiBBIBBfEBhDsBsBCEEDDBTccBhBBCBBECBCWCBDBCGDB0B0BBuBBCgBCK0BCDMCBgDCxBoBBo6CqBBCDB5XFBjkCIBC2D2DB+FBiC0ECBHBCgDCBHBJFBLHBJHBJFBLHBJHBJNBDHBJHBJHBJEBCBBHEEBBBCBBJDBDBBJHBLCBCBB6DOORMBuDEEBEEcKFDBBJDBFiBiBBOBFsasaBYBn6BvBBCEEBGCFCCBCCBGBEiDCBIICFFNlBBCGG0oesBCUaCBBBmEMCBBBC8BCBIBCCCDICFCCDCCBBBCSCGGGCMCFCCDOCWDBCCCBBB2ZqBBCNBHvCBh6TGBNEBqhBZBumBnBBpEjBB8EKBCOBCGBCBBkODDBBBCpBBCIBmoByBB+DVB75CfBhsVfB8BYBnqZZBbGBCRBbZBbDBCCCBFBCKBbZBbZBbZBbZBbZBbZBbZBbZBbbBdYBCFBbYBCFBbYBCFBbYBCFBbYBCFBC15B15BBIBCTBHFBmI9BB1lChBB",!1)),Math:()=>new p(g("rBRRBBBgBeeCuBuBFmBmBgB5W5WBBBDbbBDDBBBwQCBuwGccBBBMEEOPPBCBWEBMEBiCMBFEEBFFBDBTFFDJBCDDBEBHEEBDDBCCBBBCFBENBClClCBWBCFBCBBFBBFfBCHHBPPBqIBJDBVBB7CffBZBCZZMGB+NBBNJBFFBFBBDBBEEBPCCDFBMHBGBB6BCCeDBKCBxK-BBhI-PBxBUBDFB9+zB4Z4ZBEBCjFjFRCBeCCeCCkEHHBCBitDBBhrwBwoBwoBBzCBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBDxBBhwFDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBB-uCIB",!1)),Quotation_Mark:()=>new p(g("iBFFkEQQ96HHBaBBowDqOqOBCBOCBixzBDB+FFF7CBB",!1)),Terminal_Punctuation:()=>new p(g("hBLLCMMBEE-ZJJiQ6B6BpCPPCCB1FsBsBBJBCsHsHB3B3BBEBCHBgBmImIB1nB1nBBtFtFFFB4JBB2YHBmY9D9DBBBoCBB+ECBEoBoBBCBDBB7JBBjLDBjFBBLBBCCBeCB8FEB-BBBldYYBKKBBBwlDCBzJOOFLLCBBEBBtNBB8ndBBuICBkHEB-LBB3CBBgD4E4EBBB0ECBgERRB6H6HnxUDDB6B6BBBBCDBqFLLCMMBEEiCDD7hBxBxBnkBoGoG3JBB5EFBlCFB6CDB5dEBtBDB+FGBxDDBgECBiEBBHRRB5C5CBDBtDrJrJB2D2DBBBNBBnLDBEOBqDBB6HCBmQCC8HBB4CBBFBB-MCBuBmUmUBrCrCBspBspBBDB6vRBBmEiCiCBBBLqRqRBoJoJBnwTnwTovHDB",!1)),Uppercase:()=>new p(g("hCZBmDWBCGBiB2BCDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIJDCMCDQCDDDCCBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBDDBBBEWCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBpCDBNDBNDBNEBMDBnIFFECBDCBDEEBDBHGCBCBDDBLBBGbbBOBUzZzZBYBx5BvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoqZZBbZBbZBbCCBGDBDDBCBCHBbZBbBBCDBDHBCGBcBBCDBCEBCEEBFBcZBbZBbZBbZBbZBbZBfYBiBYBiBYBiBYBiBYBiB2pE2pEBgBBvgCZBHZBHZB",!1)),White_Space:()=>new p(g("JEBTlDlDbgvFgvFgsCKBeBBGwBwBh9DAB",!1))});static SCRIPTS=new Fi({Adlam:()=>new p(g("go6DrCFJFB",!0)),Ahom:()=>new p(g("g4lCaDOFW",!0)),Anatolian_Hieroglyphs:()=>new p(g("ggxCmS",!0)),Arabic:()=>new p(g("gwBEBCFBCNBCCBCfBCJBMZBCrDBChBBxCvBBxHhBBGqCBCcBxy8BtPBDvEBhBPBxDEBCmEBk7DeBkCFBJIBiBFBh43BDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBB",!1)),Armenian:()=>new p(g("xpBlBDxBDCks9BE",!0)),Avestan:()=>new p(g("g4iC1BEG",!0)),Balinese:()=>new p(g("g4GsCCxB",!0)),Bamum:()=>new p(g("g1pB3CpowB4R",!0)),Bassa_Vah:()=>new p(g("w26CdDF",!0)),Batak:()=>new p(g("g+GzBJD",!0)),Bengali:()=>new p(g("gsCDBCHBDBBDVBCGBCEEBCBDIBDBBDDBJFFBCCBDBDYB",!1)),Beria_Erfe:()=>new p(g("g17CYDY",!0)),Bhaiksuki:()=>new p(g("ggnCICsBCNLc",!0)),Bopomofo:()=>new p(g("qXB6wLqBxDf",!0)),Brahmi:()=>new p(g("ggkCtCFjBKA",!0)),Braille:()=>new p(g("ggK-H",!0)),Buginese:()=>new p(g("gwGbDB",!0)),Buhid:()=>new p(g("g6FT",!0)),Canadian_Aboriginal:()=>new p(g("ggF-TxRlC7tgCP",!0)),Carian:()=>new p(g("g1gCwB",!0)),Caucasian_Albanian:()=>new p(g("wphCzBMA",!0)),Chakma:()=>new p(g("gokC0BCR",!0)),Cham:()=>new p(g("gwqB2BKNDJDD",!0)),Cherokee:()=>new p(g("g9E1CDFz7lBvC",!0)),Chorasmian:()=>new p(g("w9jCb",!0)),Common:()=>new p(g("AgCBbFBbuBBCOBCEBYgBgBiOmBBGEBDTB1DKKHCC+THHPEEhB9E9ElQiEiEB6mB6mB2MDBjJwvBwvBBBBoCBBsGBBCumBumBOIIBCBCFBCCBDmYmYBKBD2CBCKBEKBCOBShBB-BlBBCCBDFBCaBCQBqBCBF5UBXKBW-cBhIzTBDpEBhQ9CBzMUBCCCBXBQHBFDB8CBBE7C7CB0E0EBOBhBlBBKxBxBB+BBgBwCBwB5C5CBmFBhuG-BBhoWhBBnDCBmFJB1HhFhFsMPPBzuUzuUBxGxGBIBXiBBCSBCDB0ECCBeBbFBbKBLuBuBBhChCBFBCGBLEBjICBFsBBEIBxCMB0BsBBlHaBltuBDB96D8HBEzNBHWBQQBgDzDB9B1HBLmBBD9BBEQBJBBIdBF8BB2GTBNTBN2CBKYBoE0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBDxBByjFjCBtC8BBjWrBBFjDBNOBDOBCOBCkBBLtFB5BZBCBBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBCmDBnghYffB+CB",!1)),Coptic:()=>new p(g("ifNxkKzDGG",!0)),Cuneiform:()=>new p(g("ggoC5cnDuDCEMjG",!0)),Cypriot:()=>new p(g("ggiCFBDCCBqBBCBBEDD",!1)),Cypro_Minoan:()=>new p(g("w8rCiD",!0)),Cyrillic:()=>new p(g("ggBkEBDoFBx6FKBhFtCtCojEfBhie-CBv8VBBhw4B9BBiBAB",!1)),Deseret:()=>new p(g("gghCvC",!0)),Devanagari:()=>new p(g("goCwCFODZh7nBfhwcJ",!0)),Dives_Akuru:()=>new p(g("gomCGBDDDBGBCBBCdBCBBDLBKJB",!1)),Dogra:()=>new p(g("ggmC7B",!0)),Duployan:()=>new p(g("ggvDqDGMEIIJDD",!0)),Egyptian_Hieroglyphs:()=>new p(g("ggsC1iBL68D",!0)),Elbasan:()=>new p(g("gohCnB",!0)),Elymaic:()=>new p(g("g-jCW",!0)),Ethiopic:()=>new p(g("gwEoCBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBDfBEZBnvGWBKGBCGBCGBCGBCGBCGBCGBCGBjpfFBDFBDFBKGBCGBylvCGBCDBCBBCOB",!1)),Garay:()=>new p(g("gqjClBEcJB",!0)),Georgian:()=>new p(g("glElBBCGGDqBBCDBx8CqBBDCBhiElBBCGG",!1)),Glagolitic:()=>new p(g("ggL-Ch9sDGCQDGCBCE",!0)),Gothic:()=>new p(g("w5gCa",!0)),Grantha:()=>new p(g("g4kCDBCHBDBBDVBCGBCBBCEBDIBDBBDCBDHHGGBDGBEEB",!1)),Greek:()=>new p(g("wbDBCCBDDBCFFCCCBBBCCCBSBC+BBPPBnpGEBzBEBFEB1ChKhKBUBDFBDlBBDFBDHBCGCBdBD0BBCOBCNBDFBCSBDCBCIBoJ-xiB-xiB7uVuCBSgj0Bgj0BBkCB",!1)),Gujarati:()=>new p(g("h0CCBCIBCCBCVBCGBCBBCEBDJBCCBCCBDQQBCBDLBIGB",!1)),Gunjala_Gondi:()=>new p(g("grnCFCBCkBCBCFIJ",!0)),Gurmukhi:()=>new p(g("hwCCBCFBFBBDVBCGBCBBCBBCBBDCCBDBFBBDCBEIIBCBCIIBPB",!1)),Gurung_Khema:()=>new p(g("go4C5B",!0)),Han:()=>new p(g("g0LZBC4CBN1GBwBCCaIBPDBle-tGBhC-vUBhoWtLBDpDBpodBBNGBqgkB-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Hangul:()=>new p(g("goE-HvxHBiI9CyDeiCei3dckUj9KNWFwBl9JeEFDFDFDC",!0)),Hanifi_Rohingya:()=>new p(g("gojCnBJJ",!0)),Hanunoo:()=>new p(g("g5FU",!0)),Hatran:()=>new p(g("gniCSCBGE",!0)),Hebrew:()=>new p(g("xsB2BBJaBFFBpp9BZBCEBCCCBCCBCCBIB",!1)),Hiragana:()=>new p(g("hiM1CBHCBi7-C+IBTeeBBBulQAB",!1)),Imperial_Aramaic:()=>new p(g("giiCVCI",!0)),Inherited:()=>new p(g("gYvDB2IBBlOKBbhXhXBCB8qEtBBDLBlPCBCMBCGBFHHEBBnG-BBtQBBjGgBB65DDBsDBBmrzBPBRNBwejHjH7iEl+uBl+uBBsBBDWBhRCBSHBDGBfDBz6rYvHB",!1)),Inscriptional_Pahlavi:()=>new p(g("g7iCSGH",!0)),Inscriptional_Parthian:()=>new p(g("g6iCVDH",!0)),Javanese:()=>new p(g("gsqBtCDJFB",!0)),Kaithi:()=>new p(g("gkkCiCLA",!0)),Kannada:()=>new p(g("gkDMCCCWCJCEDICCCDIBGCCDDJCC",!0)),Katakana:()=>new p(g("hlM5CBDCBxHPBxGuBBC3CBvgzBJBCsBBzisBDBCGBCBBCgJgJBBBzBPPBCB",!1)),Kawi:()=>new p(g("g4nCQCoBEc",!0)),Kayah_Li:()=>new p(g("goqBtBCA",!0)),Kharoshthi:()=>new p(g("gwiCDCBGHCCCcDCFJII",!0)),Khitan_Small_Script:()=>new p(g("k-7C84G84GB0OBqBAB",!1)),Khmer:()=>new p(g("g8F9CDJHJnPf",!0)),Khojki:()=>new p(g("gwkCRCuB",!0)),Khudawadi:()=>new p(g("w1kC6BGJ",!0)),Kirat_Rai:()=>new p(g("gq7C5B",!0)),Lao:()=>new p(g("h0DBBCCCBDBCXBCCCBVBDEBCCCBFBCJBDDB",!1)),Latin:()=>new p(g("hCZBHZBwBQQGWBCeBCgOBoBEB8wGlBBHwBBGDBGMBClCBiC-HByLOORMBuEBBHccSoBB42CfBj1elDBExCBVOBxZqBBCIBCDB38TGB7gBZBHZBmhCFBCpBBCIBm61BeBHFB",!1)),Lepcha:()=>new p(g("ggH3BEOEC",!0)),Limbu:()=>new p(g("goGeBCLBFLBFEEBKB",!1)),Linear_A:()=>new p(g("gwhC2JKVLH",!0)),Linear_B:()=>new p(g("gggCLCZCSCBCODNjB6D",!0)),Lisu:()=>new p(g("wmpBvBx1eA",!0)),Lycian:()=>new p(g("g0gCc",!0)),Lydian:()=>new p(g("gpiCZGA",!0)),Mahajani:()=>new p(g("wqkCmB",!0)),Makasar:()=>new p(g("g3nCY",!0)),Malayalam:()=>new p(g("goDMCCCyBCCCFFPDZ",!0)),Mandaic:()=>new p(g("giCbDA",!0)),Manichaean:()=>new p(g("g2iCmBFL",!0)),Marchen:()=>new p(g("wjnCfDVCN",!0)),Masaram_Gondi:()=>new p(g("gonCGBCBBCrBBECCBCCBHBJJB",!1)),Medefaidrin:()=>new p(g("gy7C6C",!0)),Meetei_Mayek:()=>new p(g("g3qBWqGtBDJ",!0)),Mende_Kikakui:()=>new p(g("gg6DkGDP",!0)),Meroitic_Cursive:()=>new p(g("gtiCXFTDtB",!0)),Meroitic_Hieroglyphs:()=>new p(g("gsiCf",!0)),Miao:()=>new p(g("g47CqCF4BIQ",!0)),Modi:()=>new p(g("gwlCkCMJ",!0)),Mongolian:()=>new p(g("ggGBBDCCBSBH4CBIqBB2t-BMB",!1)),Mro:()=>new p(g("gy6CeCJFB",!0)),Multani:()=>new p(g("g0kCGBCCCBCBCOBCKB",!1)),Myanmar:()=>new p(g("ggE-EhqmBeiDfxibT",!0)),Nabataean:()=>new p(g("gkiCeJI",!0)),Nag_Mundari:()=>new p(g("wm5DpB",!0)),Nandinagari:()=>new p(g("gtmCHDtBDK",!0)),New_Tai_Lue:()=>new p(g("gsGrBFZHKEB",!0)),Newa:()=>new p(g("gglC7CCE",!0)),Nko:()=>new p(g("g+B6BDC",!0)),Nushu:()=>new p(g("h-7CvsQvsQBqMB",!1)),Nyiakeng_Puachue_Hmong:()=>new p(g("go4DsBENDJFB",!0)),Ogham:()=>new p(g("g0Fc",!0)),Ol_Chiki:()=>new p(g("wiHvB",!0)),Ol_Onal:()=>new p(g("wu5DqBFA",!0)),Old_Hungarian:()=>new p(g("gkjCyBOyBIF",!0)),Old_Italic:()=>new p(g("g4gCjBKC",!0)),Old_North_Arabian:()=>new p(g("g0iCf",!0)),Old_Permic:()=>new p(g("w6gCqB",!0)),Old_Persian:()=>new p(g("g9gCjBFN",!0)),Old_Sogdian:()=>new p(g("g4jCnB",!0)),Old_South_Arabian:()=>new p(g("gziCf",!0)),Old_Turkic:()=>new p(g("ggjCoC",!0)),Old_Uyghur:()=>new p(g("w7jCZ",!0)),Oriya:()=>new p(g("h4CCCHDBDVCGCBCEDIDBDCICFBCEDR",!0)),Osage:()=>new p(g("wlhCjBFjB",!0)),Osmanya:()=>new p(g("gkhCdDJ",!0)),Pahawh_Hmong:()=>new p(g("g46ClCLJCGCUGS",!0)),Palmyrene:()=>new p(g("gjiCf",!0)),Pau_Cin_Hau:()=>new p(g("g2mC4B",!0)),Phags_Pa:()=>new p(g("giqB3B",!0)),Phoenician:()=>new p(g("goiCbEA",!0)),Psalter_Pahlavi:()=>new p(g("g8iCRIDNG",!0)),Rejang:()=>new p(g("wpqBjBMA",!0)),Runic:()=>new p(g("g1FqCEK",!0)),Samaritan:()=>new p(g("ggCtBDO",!0)),Saurashtra:()=>new p(g("gkqBlCJL",!0)),Sharada:()=>new p(g("gskC-ChsCH",!0)),Shavian:()=>new p(g("wihCvB",!0)),Siddham:()=>new p(g("gslC1BDlB",!0)),Sidetic:()=>new p(g("gqiCZ",!0)),SignWriting:()=>new p(g("gg2DrUQECO",!0)),Sinhala:()=>new p(g("hsDCBCRBEXBCIBCDDBFBEFFBEBCCCBGBHJBDCBt-gCTB",!1)),Sogdian:()=>new p(g("w5jCpB",!0)),Sora_Sompeng:()=>new p(g("wmkCYIJ",!0)),Soyombo:()=>new p(g("wymCyC",!0)),Sundanese:()=>new p(g("g8G-BhIH",!0)),Sunuwar:()=>new p(g("g+mChBPJ",!0)),Syloti_Nagri:()=>new p(g("ggqBsB",!0)),Syriac:()=>new p(g("g4BNC7BDCxIK",!0)),Tagalog:()=>new p(g("g4FVKA",!0)),Tagbanwa:()=>new p(g("g7FMCCCB",!0)),Tai_Le:()=>new p(g("wqGdDE",!0)),Tai_Tham:()=>new p(g("gxG+BCcDKHJHN",!0)),Tai_Viet:()=>new p(g("g0qBiCZE",!0)),Tai_Yo:()=>new p(g("g25DeCVJB",!0)),Takri:()=>new p(g("g0lC5BHJ",!0)),Tamil:()=>new p(g("i8CBBCFBECBCDBEBBCCCBEEBEEBBBELBFEBECBCDBDHHPUBm+kCxBBOAB",!1)),Tangsa:()=>new p(g("wz6CuCCJ",!0)),Tangut:()=>new p(g("g-7CgBgBB+3GBhQeBiDyDB",!1)),Telugu:()=>new p(g("ggDMCCCWCPDICCCDIBCCCBDDDJII",!0)),Thaana:()=>new p(g("g8BxB",!0)),Thai:()=>new p(g("hwD5BGb",!0)),Tibetan:()=>new p(g("g4DnCCjBFmBCjBCOCGFB",!0)),Tifinagh:()=>new p(g("wpL3BIBPA",!0)),Tirhuta:()=>new p(g("gklCnCJJ",!0)),Todhri:()=>new p(g("guhCzB",!0)),Tolong_Siki:()=>new p(g("wtnCrBFJ",!0)),Toto:()=>new p(g("w04De",!0)),Tulu_Tigalari:()=>new p(g("g8kCJBCDDClBBCJBCDDCDBCJBCBBJBB",!1)),Ugaritic:()=>new p(g("g8gCdCA",!0)),Unknown:()=>new p(g("4bBBHDBICCVuMuMnBBBzBBBE4B4BBGBcDBHKBvI9B9BBmDmDBMB8BBByBBBQddBCCMEBjBEBuHJJBDDBXXICCBBBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBbFB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKmDmDNBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBjoIBvLBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCC-FCBHBBHBBHBBECBIIIBIBGBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIBlCJBCBBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMB3iBJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBJ76DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBjGUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIm8yVBCdBhD-DBxHvw-FB",!1)),Vai:()=>new p(g("gopBrJ",!0)),Vithkuqi:()=>new p(g("wrhCKCOCGCBCKCOCGCB",!0)),Wancho:()=>new p(g("g24D5BGA",!0)),Warang_Citi:()=>new p(g("glmCyCNA",!0)),Yezidi:()=>new p(g("g0jCpBCCDB",!0)),Yi:()=>new p(g("ggoBskBE2B",!0)),Zanabazar_Square:()=>new p(g("gwmCnC",!0))});static FOLD_CATEGORIES=new Fi({L:()=>new p(g("laA",!0)),LC:()=>new p(g("laA",!0)),Ll:()=>new p(g("hCZBmDWBCGBiBuBCEECDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIBBCBBCBBCOCDQCDBBCCCBBBC4BCIBBCBBDCCBCBCGC3HrBrBCEEJHHCCBCCCBCCBPBCIBkBJJCUCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBZHBJHBJHBJEBMEBMDBNEBMEBqJEEBHHxC9zC9zCBuBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoyehBB",!1)),Lt:()=>new p(g("kOCCBCCBCClBCCtsHHBJHBJHBMQQwBAB",!1)),Lu:()=>new p(g("hDZB7BqBqBBWBCHBCuBCEECDOCDsBCDECBBBDCCDEEGDDECBDDDCCCDFFDEECDDECCGBBCBBCBBCOCBSCDBBCEECkBCEQCJDDBCCFICBEBCBBCCCBEEBCCBCBCEBDCCBDDIDDCBBEFBGLLBnFnFsBCCEEEBBBvBDBCdBCBBECBCWCBDBCGD1BvBBCgBCK0BCDMCBgDCyBlBBq6CqBBDCB5XFBjkCIBCvHvHERRzD0ECGGGC8CCBHBJFBLHBJHBJFBMGCJHBJNBzBBBNSSBPPBEEpL2B2Bs1CvBBCEEBGCHDDLiDCJCCFNNBkBBCGG0oesBCUaCoEMCE8BCLCCDICFFFCBBDSCMOCFCCDOCb9a9advCBi8UZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBvyehBB",!1)),M:()=>new p(g("5cgBgBlgHAB",!1)),Mn:()=>new p(g("5cgBgBlgHAB",!1)),Emoji:()=>new p(g("8mJA",!0)),Extended_Pictographic:()=>new p(g("8mJA",!0)),Lowercase:()=>new p(g("hCZBmDWBCGBiBuBCEECDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIBBCBBCBBCOCDQCDBBCCCBBBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBJJCUCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBZHBJHBJHBJEBMEBMDBNEBMEBqJEEBHHuBPBUzZzZBYBx5BvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoyehBB",!1)),Math:()=>new p(g("ycGDCHHFMMDDDCHHFAB",!1)),Uppercase:()=>new p(g("hDZB7BqBqBBWBCHBCuBCEECDOCDsBCDECBBBDCCDEEGDDECBDDDCCCDFFDEECDDECCGBBCBBCBBCOCBSCDBBCEECkBCEQCJDDBCCFICBEBCBBCCCBEEBCCBCBCEBDCCBDDIDDCBBEFBGLLBnFnFsBCCEEEBBBvBDBCdBCBBECBCWCBDBCGD1BvBBCgBCK0BCDMCBgDCyBlBBq6CqBBDCB5XFBjkCIBCvHvHERRzD0ECGGGC8CCBHBJFBLHBJHBJFBMGCJHBJNBzBBBNSSBPPBEEpLiBiBBOBFsasaBYBn6BvBBCEEBGCHDDLiDCJCCFNNBkBBCGG0oesBCUaCoEMCE8BCLCCDICFFFCBBDSCMOCFCCDOCb9a9advCBi8UZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBvyehBB",!1))});static FOLD_SCRIPT=new Fi({Common:()=>new p(g("8cgBgB",!1)),Greek:()=>new p(g("1FwUwU",!1)),Inherited:()=>new p(g("5cgBgBlgHAB",!1))})},$=class at{static MAX_RUNE=1114111;static RUNE_ERROR=65533;static isUnsearchable(e){return e===at.RUNE_ERROR||e>=at.MIN_HIGH_SURROGATE&&e<=at.MAX_LOW_SURROGATE}static MAX_ASCII=127;static MAX_LATIN1=255;static MAX_BMP=65535;static MIN_FOLD=65;static MAX_FOLD=125251;static MIN_HIGH_SURROGATE=55296;static MAX_HIGH_SURROGATE=56319;static MIN_LOW_SURROGATE=56320;static MAX_LOW_SURROGATE=57343;static MIN_SUPPLEMENTARY_CODE_POINT=65536;static is32(e,t){let s=0,r=e.length;for(;s<r;){const i=s+Math.floor((r-s)/2),o=e.getLo(i),B=e.getHi(i);if(o<=t&&t<=B){const c=e.getStride(i);return(t-o)%c===0}t<o?r=i:s=i+1}return!1}static is(e,t){if(t<=at.MAX_LATIN1){for(let s=0;s<e.length;s++){if(t>e.getHi(s))continue;const r=e.getLo(s);if(t<r)return!1;const i=e.getStride(s);return(t-r)%i===0}return!1}return e.length>0&&t>=e.getLo(0)&&at.is32(e,t)}static isPrint(e){return e<=at.MAX_LATIN1?e>=32&&e<at.MAX_ASCII||e>=161&&e!==173:at.is(dt.Print,e)}static simpleFold(e){if(dt.CASE_ORBIT.has(e))return dt.CASE_ORBIT.get(e);if(e<=at.MAX_ASCII){const t=L.toLowerCase(e);return t!==e?t:L.toUpperCase(e)}return e}static equalsIgnoreCase(e,t){if(e===t)return!0;if(e<0||t<0)return!1;if(e<=at.MAX_ASCII&&t<=at.MAX_ASCII)return 65<=e&&e<=90&&(e|=32),65<=t&&t<=90&&(t|=32),e===t;for(let s=at.simpleFold(e);s!==e;s=at.simpleFold(s))if(s===t)return!0;return!1}},si=class extends Error{constructor(n){super(n),this.name="RE2JSException"}},de=class extends si{constructor(n,e=null){let t=`error parsing regexp: ${n}`;e&&(t+=`: \`${e}\``),super(t),this.name="RE2JSSyntaxException",this.message=t,this.error=n,this.input=e}getDescription(){return this.error}getPattern(){return this.input}},Ya=class extends si{constructor(n){super(n),this.name="RE2JSCompileException"}},ot=class extends si{constructor(n){super(n),this.name="RE2JSGroupException"}},Kw=class extends si{constructor(n){super(n),this.name="RE2JSFlagsException"}},Eo=class extends si{constructor(n){super(n),this.name="RE2JSInternalException"}};const fc=256,KC=new Uint8Array(fc);for(let n=0;n<fc;n++)KC[n]=97<=n&&n<=122||65<=n&&n<=90||48<=n&&n<=57||n===95?1:0;let Xa=null,Za=null;var H=class Ne{static METACHARACTERS="\\.+*?()|[]{}^$";static EMPTY_BEGIN_LINE=1;static EMPTY_END_LINE=2;static EMPTY_BEGIN_TEXT=4;static EMPTY_END_TEXT=8;static EMPTY_WORD_BOUNDARY=16;static EMPTY_NO_WORD_BOUNDARY=32;static EMPTY_ALL=-1;static emptyInts(){return[]}static isString(e){return typeof e=="string"||Object.prototype.toString.call(e)==="[object String]"}static typeName(e){return e===null||typeof e!="object"&&typeof e!="function"?e===null?"null":typeof e:Object.prototype.toString.call(e).slice(8,-1)}static checkPattern(e){if(!Ne.isString(e))throw new TypeError(`The pattern must be a string, not ${Ne.typeName(e)} (RE2JS.translateRegExp() converts a RegExp)`)}static checkInput(e){if(!Ne.isString(e)&&!Ne.isByteArray(e))throw new TypeError(`The input must be a string or a byte array (Uint8Array or number[]), not ${Ne.typeName(e)}`)}static checkFlags(e){if(!Number.isInteger(e)||(e&-544)!==0)throw new Kw("Flags should only be a combination of MULTILINE, DOTALL, CASE_INSENSITIVE, DISABLE_UNICODE_GROUPS, LONGEST_MATCH, LOOKBEHINDS")}static isByteArray(e){return Array.isArray(e)||Object.prototype.toString.call(e)==="[object Uint8Array]"}static isalnum(e){return L.CODES[0]<=e&&e<=L.CODES[9]||L.CODES.a<=e&&e<=L.CODES.z||L.CODES.A<=e&&e<=L.CODES.Z}static unhex(e){return L.CODES[0]<=e&&e<=L.CODES[9]?e-L.CODES[0]:L.CODES.a<=e&&e<=L.CODES.f?e-L.CODES.a+10:L.CODES.A<=e&&e<=L.CODES.F?e-L.CODES.A+10:-1}static escapeRune(e){let t="";if($.isPrint(e))Ne.METACHARACTERS.indexOf(String.fromCodePoint(e))>=0&&(t+="\\"),t+=String.fromCodePoint(e);else switch(e){case L.CODES['"']:t+='\\"';break;case L.CODES["\\"]:t+="\\\\";break;case L.CODES["	"]:t+="\\t";break;case L.CODES[`
`]:t+="\\n";break;case L.CODES["\r"]:t+="\\r";break;case L.CODES["\b"]:t+="\\b";break;case L.CODES["\f"]:t+="\\f";break;default:{let s=e.toString(16);e<256?(t+="\\x",s.length===1&&(t+="0"),t+=s):t+=`\\x{${s}}`;break}}return t}static stringToRunes(e){const t=String(e),s=[];let r=0;for(;r<t.length;){const i=t.codePointAt(r);s.push(i),r+=i>$.MAX_BMP?2:1}return new Int32Array(s)}static runeToString(e){return String.fromCodePoint(e)}static isWordRune(e){return e<fc?KC[e]===1:!1}static emptyOpContext(e,t){let s=0;return e<0&&(s|=Ne.EMPTY_BEGIN_TEXT|Ne.EMPTY_BEGIN_LINE),e===10&&(s|=Ne.EMPTY_BEGIN_LINE),t<0&&(s|=Ne.EMPTY_END_TEXT|Ne.EMPTY_END_LINE),t===10&&(s|=Ne.EMPTY_END_LINE),Ne.isWordRune(e)!==Ne.isWordRune(t)?s|=Ne.EMPTY_WORD_BOUNDARY:s|=Ne.EMPTY_NO_WORD_BOUNDARY,s}static quoteMeta(e){return e.split("").map(t=>Ne.METACHARACTERS.indexOf(t)>=0?`\\${t}`:t).join("")}static charCount(e){return e>$.MAX_BMP?2:1}static toArray(e){const t=e.length,s=new Array(t);for(let r=0;r<t;r++)s[r]=e[r];return s}static stringToUtf8ByteArray(e){if(globalThis.TextEncoder)return Xa||(Xa=new TextEncoder),Xa.encode(e);{let t=[],s=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[s++]=i:i<2048?(t[s++]=i>>6|192,t[s++]=i&63|128):(i&64512)===$.MIN_HIGH_SURROGATE&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===$.MIN_LOW_SURROGATE?(i=$.MIN_SUPPLEMENTARY_CODE_POINT+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[s++]=i>>18|240,t[s++]=i>>12&63|128,t[s++]=i>>6&63|128,t[s++]=i&63|128):(t[s++]=i>>12|224,t[s++]=i>>6&63|128,t[s++]=i&63|128)}return t}}static utf8ByteArrayToString(e){if(globalThis.TextDecoder){Za||(Za=new TextDecoder("utf-8"));const t=e instanceof Uint8Array?e:new Uint8Array(e);return Za.decode(t)}else{let t=[],s=0,r=0;for(;s<e.length;){let i=e[s++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){let o=e[s++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){let o=e[s++],B=e[s++],c=e[s++],l=((i&7)<<18|(o&63)<<12|(B&63)<<6|c&63)-$.MIN_SUPPLEMENTARY_CODE_POINT;t[r++]=String.fromCharCode($.MIN_HIGH_SURROGATE+(l>>10)),t[r++]=String.fromCharCode($.MIN_LOW_SURROGATE+(l&1023))}else{let o=e[s++],B=e[s++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|B&63)}}return t.join("")}}};const qC=(n=[],e=0)=>{const t=Object.create(null);for(let s=0;s<n.length;s++){const r=n[s],i=e+s;t[r]=i,t[i]=r}return Object.freeze(t)};var as=class bB{static Encoding=qC(["UTF_16","UTF_8"]);getEncoding(){throw Error("not implemented")}asCharSequence(){throw Error("not implemented")}asBytes(){throw Error("not implemented")}length(){throw Error("not implemented")}isUTF8Encoding(){return this.getEncoding()===bB.Encoding.UTF_8}isUTF16Encoding(){return this.getEncoding()===bB.Encoding.UTF_16}},Wu=class extends as{constructor(n=null){super(),this.bytes=n}getEncoding(){return as.Encoding.UTF_8}asCharSequence(){return H.utf8ByteArrayToString(this.bytes)}asBytes(){return this.bytes}length(){return this.bytes.length}},qw=class extends as{constructor(n=null){super(),this.charSequence=n}getEncoding(){return as.Encoding.UTF_16}asCharSequence(){return this.charSequence}asBytes(){return H.stringToUtf8ByteArray(this.charSequence.toString())}length(){return this.charSequence.length}},Wn=class{static utf16(n){return H.checkInput(n),new qw(n)}static utf8(n){return H.isByteArray(n)?new Wu(n):new Wu(H.stringToUtf8ByteArray(n))}},nt=class{static EOF(){return-8}constructor(){this.start=0,this.end=0}canCheckPrefix(){return!0}endPos(){return this.end-this.start}hasString(){return!1}hasAnyString(){return!1}prefixLength(){return 0}},zw=class ws extends nt{static RUNE_ERROR_STEP=$.RUNE_ERROR<<3|1;constructor(e,t=0,s=e.length){super(),this.bytes=e,this.start=t,this.end=s}hasString(e,t){const s=e.bytes;if(s.length===0)return!0;const r=this.indexOf(this.bytes,s,this.start+t);return r!==-1&&r<=this.end-s.length}hasAnyString(e,t){return e.automaton8().searchUTF8(this.bytes,this.start+t,this.end)}step(e){if(e+=this.start,e>=this.end)return nt.EOF();const t=this.bytes[e]&255;if(t<128)return t<<3|1;let s,r,i=128,o=191;if(t>=194&&t<=223)s=2,r=t&31;else if(t>=224&&t<=239)s=3,r=t&15,t===224?i=160:t===237&&(o=159);else if(t>=240&&t<=244)s=4,r=t&7,t===240?i=144:t===244&&(o=143);else return ws.RUNE_ERROR_STEP;if(e+s>this.end)return ws.RUNE_ERROR_STEP;const B=this.bytes[e+1]&255;if(B<i||B>o)return ws.RUNE_ERROR_STEP;if(r=r<<6|B&63,s>2){const c=this.bytes[e+2]&255;if((c&192)!==128)return ws.RUNE_ERROR_STEP;if(r=r<<6|c&63,s>3){const l=this.bytes[e+3]&255;if((l&192)!==128)return ws.RUNE_ERROR_STEP;r=r<<6|l&63}}return r<<3|s}index(e,t){t+=this.start;const s=this.indexOf(this.bytes,e.prefixUTF8,t);return s<0?s:s-t}context(e){e+=this.start;let t=-1;if(e>this.start&&e<=this.end){let r=e-1;if(t=this.bytes[r--],t>=128){let i=e-4;for(i<this.start&&(i=this.start);r>=i&&(this.bytes[r]&192)===128;)r--;r<this.start&&(r=this.start);const o=this.step(r-this.start);t=r+(o&7)===e?o>>3:$.RUNE_ERROR}}const s=e<this.end?this.step(e-this.start)>>3:-1;return H.emptyOpContext(t,s)}indexOf(e,t,s=0){let r=t.length;if(r===0)return s<=this.end?s:-1;const i=t[0];let o=this.end-r;const B=typeof e.indexOf=="function";let c=s;for(;c<=o;){if(B){if(c=e.indexOf(i,c),c===-1||c>o)return-1}else{for(;c<=o&&e[c]!==i;)c++;if(c>o)return-1}let l=!0;for(let f=1;f<r;f++)if(e[c+f]!==t[f]){l=!1;break}if(l)return c;c++}return-1}prefixLength(e){return e.prefixUTF8.length}},Qw=class extends nt{constructor(n,e=0,t=n.length){super(),this.charSequence=n,this.start=e,this.end=t}hasString(n,e){const t=this.charSequence.indexOf(n.str,this.start+e);return t!==-1&&t<=this.end-n.str.length}hasAnyString(n,e){return n.automaton16().searchUTF16(this.charSequence,this.start+e,this.end)}step(n){if(n+=this.start,n>=this.end)return nt.EOF();const e=this.charSequence.charCodeAt(n);if(e<$.MIN_HIGH_SURROGATE||e>$.MAX_HIGH_SURROGATE||n+1>=this.end)return e<<3|1;const t=this.charSequence.charCodeAt(n+1);return t>=$.MIN_LOW_SURROGATE&&t<=$.MAX_LOW_SURROGATE?(e-$.MIN_HIGH_SURROGATE)*1024+(t-$.MIN_LOW_SURROGATE)+$.MIN_SUPPLEMENTARY_CODE_POINT<<3|2:e<<3|1}index(n,e){e+=this.start;const t=this.charSequence.indexOf(n.prefix,e);return t<0||t>this.end-n.prefix.length?-1:t-e}context(n){n+=this.start;const e=n>this.start&&n<=this.end?this.charSequence.charCodeAt(n-1):-1,t=n<this.end?this.charSequence.charCodeAt(n):-1;return H.emptyOpContext(e,t)}prefixLength(n){return n.prefix.length}},me=class{static fromUTF8(n,e=0,t=n.length){return new zw(n,e,t)}static fromUTF16(n,e=0,t=void 0){return H.checkInput(n),new Qw(n,e,t??n.length)}},Yu=class zC{static MAX_REPLACER_ARGS=65535;static quoteReplacement(e,t=!1){return t?e.indexOf("\\")<0&&e.indexOf("$")<0?e:e.split("").map(s=>{const r=s.codePointAt(0);return r===L.CODES["\\"]||r===L.CODES.$?`\\${s}`:s}).join(""):e.indexOf("$")<0?e:e.split("").map(s=>s.codePointAt(0)===L.CODES.$?"$$":s).join("")}constructor(e,t){if(e===null)throw new Error("pattern is null");this.patternInput=e;const s=this.patternInput.re2();this.patternGroupCount=s.numberOfCapturingGroups(),this.groups=[],this.namedGroups=s.namedGroups,this.hasNamedGroups=Object.keys(this.namedGroups).length>0,this.numberOfInstructions=s.numberOfInstructions(),this.lookbehindState=null,t instanceof as?this.resetMatcherInput(t):H.isByteArray(t)?this.resetMatcherInput(Wn.utf8(t)):this.resetMatcherInput(Wn.utf16(t))}pattern(){return this.patternInput}reset(){return this.matcherInputLength=this.matcherInput.length(),this.appendPos=0,this.hasMatch=!1,this.hasGroups=!1,this.anchorFlag=0,this}resetMatcherInput(e){if(e===null)throw new Error("input is null");return e instanceof as||(H.isByteArray(e)?e=Wn.utf8(e):e=Wn.utf16(e)),this.matcherInput=e,this.lookbehindState!==null?this.lookbehindState.reset():this.lookbehindState=this.patternInput.re2().createLookbehindState(),this.reset(),this}start(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new ot(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e]}end(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new ot(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e+1]}programSize(){return this.numberOfInstructions}group(e=0){if(typeof e=="string"){const r=this.namedGroups[e];if(!Number.isFinite(r))throw new ot(`group '${e}' not found`);e=r}const t=this.start(e),s=this.end(e);return t<0&&s<0?null:this.substring(t,s)}getNamedGroups(){if(!this.hasMatch)throw new ot("perhaps no match attempted");const e=Object.create(null);for(const t of Object.keys(this.namedGroups))e[t]=this.group(t);return e}groupCount(){return this.patternGroupCount}loadGroup(e){if(!Number.isInteger(e)||e<0||e>this.patternGroupCount)throw new ot(`Group index out of bounds: ${e}`);if(!this.hasMatch)throw new ot("perhaps no match attempted");if(e===0||this.hasGroups)return;const t=this.matcherInputLength,s=this.patternInput.re2().matchMachineInput(this.matcherInput,this.groups[0],t,this.anchorFlag,1+this.patternGroupCount,this.lookbehindState);if(!s[0])throw new ot("inconsistency in matching group data");this.groups=s[1],this.hasGroups=!0}matches(){return this.genMatch(0,M.ANCHOR_BOTH)}lookingAt(){return this.genMatch(0,M.ANCHOR_START)}find(e=null){if(e!==null){if(!Number.isInteger(e)||e<0||e>this.matcherInputLength)throw new ot(`start index out of bounds: ${e}`);return this.reset(),this.genMatch(e,0)}if(e=0,this.hasMatch&&(e=this.groups[1],this.groups[0]===this.groups[1])){const t=(this.matcherInput.isUTF16Encoding()?me.fromUTF16(this.matcherInput.asCharSequence(),0,this.matcherInputLength):me.fromUTF8(this.matcherInput.asBytes(),0,this.matcherInputLength)).step(e);t<0?e++:e+=t&7}return this.genMatch(e,M.UNANCHORED)}genMatch(e,t){const s=this.patternInput.re2().matchMachineInput(this.matcherInput,e,this.matcherInputLength,t,1,this.lookbehindState);return s[0]?(this.groups=s[1],this.hasMatch=!0,this.hasGroups=this.patternGroupCount===0,this.anchorFlag=t,!0):(this.hasMatch=!1,!1)}substring(e,t){return this.matcherInput.isUTF8Encoding()?H.utf8ByteArrayToString(this.matcherInput.asBytes().slice(e,t)):this.matcherInput.asCharSequence().substring(e,t).toString()}inputLength(){return this.matcherInputLength}appendReplacement(e,t=!1){let s="";const r=this.start(),i=this.end();return this.appendPos<r&&(s+=this.substring(this.appendPos,r)),this.appendPos=i,s+=t?this.appendReplacementInternalJava(e):this.appendReplacementInternalJs(e),s}appendReplacementInternalJava(e){let t="",s=0;const r=e.length;let i=0;for(;i<r;){const o=e.codePointAt(i);if(o===L.CODES["\\"]){if(s<i&&(t+=e.substring(s,i)),i++,i>=r)throw new ot("character to be escaped is missing");s=i,i++;continue}if(o===L.CODES.$){if(s<i&&(t+=e.substring(s,i)),i+1>=r)throw new ot("Illegal group reference: group index is missing");const B=e.codePointAt(i+1);if(L.CODES[0]<=B&&B<=L.CODES[9]){let c=B-L.CODES[0],l=i+2;for(;l<r;l++){const C=e.codePointAt(l);if(C<L.CODES[0]||C>L.CODES[9]||c*10+C-L.CODES[0]>this.patternGroupCount)break;c=c*10+C-L.CODES[0]}if(c>this.patternGroupCount)throw new ot(`n > number of groups: ${c}`);const f=this.group(c);f!==null&&(t+=f),i=l,s=i}else if(B===L.CODES["{"]){let c=i+2;for(;c<r&&e.codePointAt(c)!==L.CODES["}"];)c++;if(c>=r)throw new ot("named capture group is missing trailing '}'");const l=e.substring(i+2,c),f=this.group(l);f!==null&&(t+=f),i=c+1,s=i}else throw new ot("Illegal group reference");continue}i++}return s<r&&(t+=e.substring(s,r)),t}appendReplacementInternalJs(e){const t=o=>o>=48&&o<=57,s=this.patternGroupCount;let r="",i=0;for(;i<e.length;){const o=e.indexOf("$",i);if(o<0)break;r+=e.substring(i,o),i=o;const B=e.charCodeAt(i+1);if(B===L.CODES.$)r+="$",i+=2;else if(B===L.CODES["&"])r+=this.group(0),i+=2;else if(B===L.CODES["`"])r+=this.substring(0,this.start(0)),i+=2;else if(B===L.CODES["'"])r+=this.substring(this.end(0),this.matcherInputLength),i+=2;else if(t(B)){let c=1,l=B-48;const f=e.charCodeAt(i+2);if(t(f)&&l*10+f-48<=s&&(c=2,l=l*10+f-48),l>=1&&l<=s){const C=this.group(l);C!==null&&(r+=C)}else r+=e.substring(i,i+1+c);i+=1+c}else if(B===L.CODES["<"]&&this.hasNamedGroups){const c=e.indexOf(">",i+2);if(c<0)r+="$<",i+=2;else{const l=e.substring(i+2,c);if(Object.hasOwn(this.namedGroups,l)){const f=this.group(l);f!==null&&(r+=f)}i=c+1}}else r+="$",i+=1}return r+e.substring(i)}appendTail(){return this.substring(this.appendPos,this.matcherInputLength)}replaceAll(e,t=!1){return this.replace(e,!0,t)}replaceFirst(e,t=!1){return this.replace(e,!1,t)}replace(e,t=!0,s=!1){let r="";this.reset();const i=typeof e=="function";let o=null;if(i){if(this.groupCount()>=zC.MAX_REPLACER_ARGS)throw new ot("Too many capture groups to safely invoke replacer function");o=this.matcherInput.isUTF8Encoding()?this.matcherInput.asBytes():this.matcherInput.asCharSequence()}for(;this.find()&&(r+=i?this.appendReplacementFunc(e,o):this.appendReplacement(e,s),!!t););return r+=this.appendTail(),r}appendReplacementFunc(e,t){let s="";const r=this.start(),i=this.end();this.appendPos<r&&(s+=this.substring(this.appendPos,r)),this.appendPos=i;const o=this.matchArray();return o.push(r,t),this.hasNamedGroups&&o.push(this.namedGroupsObject()),s+=String(e(...o)),s}matchArray(){const e=[this.group(0)];for(let t=1;t<=this.patternGroupCount;t++){const s=this.group(t);e.push(s===null?void 0:s)}return e}namedGroupsObject(){if(!this.hasNamedGroups)return;const e=this.getNamedGroups();for(const t in e)e[t]===null&&(e[t]=void 0);return e}},P=class Fe{static ALT=1;static ALT_MATCH=2;static CAPTURE=3;static EMPTY_WIDTH=4;static FAIL=5;static MATCH=6;static NOP=7;static RUNE=8;static RUNE1=9;static RUNE_ANY=10;static RUNE_ANY_NOT_NL=11;static LB_WRITE=12;static LB_CHECK=13;static isRuneOp(e){return Fe.RUNE<=e&&e<=Fe.RUNE_ANY_NOT_NL}static escapeRunes(e){let t='"';for(let s of e)t+=H.escapeRune(s);return t+='"',t}constructor(e){this.op=e,this.out=0,this.arg=0,this.runes=new Int32Array(0),this.next=null}matchRune(e){if(this.runes.length===1){const o=this.runes[0];return(this.arg&M.FOLD_CASE)!==0?$.equalsIgnoreCase(o,e):e===o}const t=this.runes.length;if(t===0)return!1;if(t===2||t===4||t===6||t===8){for(let o=0;o<t;o+=2){if(e<this.runes[o])return!1;if(e<=this.runes[o+1])return!0}return!1}let s=0,r=t>>1;for(;r>1;){const o=r>>1;s+=this.runes[s+o<<1]<=e?o:0,r-=o}s+=this.runes[s<<1]<=e?1:0;const i=s-1;return i>=0&&e<=this.runes[i<<1|1]}matchRunePos(e){if(this.runes.length===1){const o=this.runes[0];return(this.arg&M.FOLD_CASE)!==0?$.equalsIgnoreCase(o,e)?0:-1:e===o?0:-1}const t=this.runes.length;if(t===0)return-1;if(t===2||t===4||t===6||t===8){for(let o=0;o<t;o+=2){if(e<this.runes[o])return-1;if(e<=this.runes[o+1])return Math.floor(o/2)}return-1}let s=0,r=t>>1;for(;r>1;){const o=r>>1;s+=this.runes[s+o<<1]<=e?o:0,r-=o}s+=this.runes[s<<1]<=e?1:0;const i=s-1;return i>=0&&e<=this.runes[i<<1|1]?i:-1}toString(){switch(this.op){case Fe.ALT:return`alt -> ${this.out}, ${this.arg}`;case Fe.ALT_MATCH:return`altmatch -> ${this.out}, ${this.arg}`;case Fe.CAPTURE:return`cap ${this.arg} -> ${this.out}`;case Fe.EMPTY_WIDTH:return`empty ${this.arg} -> ${this.out}`;case Fe.MATCH:return`match${this.arg!==0?` ${this.arg}`:""}`;case Fe.FAIL:return"fail";case Fe.NOP:return`nop -> ${this.out}`;case Fe.LB_WRITE:return`lbwrite ${this.arg} -> ${this.out}`;case Fe.LB_CHECK:return`lbcheck ${this.arg} -> ${this.out}`;case Fe.RUNE:return this.runes===null?"rune <null>":["rune ",Fe.escapeRunes(this.runes),(this.arg&M.FOLD_CASE)!==0?"/i":""," -> ",this.out].join("");case Fe.RUNE1:return`rune1 ${Fe.escapeRunes(this.runes)} -> ${this.out}`;case Fe.RUNE_ANY:return`any -> ${this.out}`;case Fe.RUNE_ANY_NOT_NL:return`anynotnl -> ${this.out}`;default:throw new Error("unhandled case in Inst.toString")}}},Xu=class QC{constructor(e){this.sparse=new Int32Array(e),this.densePcs=new Int32Array(e),this.denseCaps=null,this.size=0,this.ncap=0,this.mainThreads=0}static INITIAL_THREADS=32;init(e){this.ncap=e;const t=Math.min(this.densePcs.length,QC.INITIAL_THREADS)*e;(!this.denseCaps||this.denseCaps.length<t)&&(this.denseCaps=new Int32Array(t))}growCaps(e){const t=this.densePcs.length*this.ncap,s=new Int32Array(Math.min(t,Math.max(e,2*this.denseCaps.length)));s.set(this.denseCaps),this.denseCaps=s}contains(e){const t=this.sparse[e];return t<this.size&&this.densePcs[t]===e}isEmpty(){return this.size===0}add(e){const t=this.size++;return this.sparse[e]=t,this.densePcs[t]=e,t}clear(){this.size=0,this.mainThreads=0}toString(){let e="{";for(let t=0;t<this.size;t++)t!==0&&(e+=", "),e+=this.densePcs[t];return e+="}",e}},Ww=class{constructor(n){this.pos=-1,this.pcs=new Int32Array(n.numInst()),this.size=0,this.lbTable=new Int32Array(n.numLb+1)}reset(){this.pos=-1,this.size=0}},Yw=class WC{static fromRE2(e){const t=new WC;return t.prog=e.prog,t.re2=e,t.q0=new Xu(t.prog.numInst()),t.q1=new Xu(t.prog.numInst()),t.addStack=new Int32Array(2*(t.prog.numInst()+1)),t.matched=!1,t.matchcap=new Int32Array(t.prog.numCap<2?2:t.prog.numCap),t.ncap=0,t}constructor(){this.prog=null,this.re2=null,this.q0=null,this.q1=null,this.addStack=null,this.matched=!1,this.matchcap=null,this.ncap=0,this.lbTable=null}init(e){this.ncap=e,e>this.matchcap.length?this.matchcap=new Int32Array(e).fill(-1):this.matchcap.fill(-1),this.q0.init(e),this.q1.init(e),this.prog.numLb>0&&((!this.lbTable||this.lbTable.length<this.prog.numLb+1)&&(this.lbTable=new Int32Array(this.prog.numLb+1)),this.lbTable.fill(-1))}submatches(){return this.ncap===0?H.emptyInts():H.toArray(this.matchcap.subarray(0,this.ncap))}match(e,t,s,r=null){const i=this.re2.cond;if(i===H.EMPTY_ALL||(s===M.ANCHOR_START||s===M.ANCHOR_BOTH)&&t!==0)return!1;this.matched=!1,this.matchcap.fill(-1);const o=this.prog.numLb>0,B=t;let c=t,l=!1;o&&(r!==null&&r.pos>=0&&r.pos<=t?(c=r.pos,l=!0):c=0);let f=o&&r!==null,C=this.q0,m=this.q1,v=e.step(c),R=v>>3,N=v&7,x=-1,J=0;v!==nt.EOF()&&(v=e.step(c+N),x=v>>3,J=v&7);let K;for(c===0?K=H.emptyOpContext(-1,R):K=e.context(c),o&&(l?this.restoreLookbehinds(r,C,K):this.spawnLookbehinds(C,c,K));;){if(C.mainThreads===0){if((i&H.EMPTY_BEGIN_TEXT)!==0&&c!==0||(s===M.ANCHOR_START||s===M.ANCHOR_BOTH)&&c!==0||this.matched)break;if(this.prog.numLb===0&&C.isEmpty()&&this.re2.prefix.length!==0&&x!==this.re2.prefixRune&&e.canCheckPrefix()){const He=e.index(this.re2,c);if(He<0)break;c+=He,v=e.step(c),R=v>>3,N=v&7,v=e.step(c+N),x=v>>3,J=v&7,K=e.context(c)}}c>=B&&(f&&(this.saveLookbehinds(r,C,c),f=!1),!this.matched&&(c===0||s===M.UNANCHORED)&&(this.ncap>0&&(this.matchcap[0]=c),this.add(C,this.prog.start,c,this.matchcap,0,K)));const se=c+N;if(K=e.context(se),this.step(C,m,c,se,R,K,s,c===e.endPos()),N===0||this.ncap===0&&this.matched)break;c+=N,R=x,N=J,R!==-1&&(v=e.step(c+N),x=v>>3,J=v&7);const ue=C;C=m,m=ue}return C.clear(),m.clear(),this.matched}matchSet(e,t,s){const r=this.re2.cond;if(r===H.EMPTY_ALL)return[];if((s===M.ANCHOR_START||s===M.ANCHOR_BOTH)&&t!==0)return[];let i=this.prog.numLb>0?0:t,o=t,B=this.q0,c=this.q1,l=e.step(i),f=l>>3,C=l&7,m=-1,v=0;l!==nt.EOF()&&(l=e.step(i+C),m=l>>3,v=l&7);let R=i===0?H.emptyOpContext(-1,f):e.context(i);const N=new Set;for(this.prog.numLb>0&&this.spawnLookbehinds(B,i,R);!(B.mainThreads===0&&((r&H.EMPTY_BEGIN_TEXT)!==0&&i!==0||(s===M.ANCHOR_START||s===M.ANCHOR_BOTH)&&i!==0));){(i===0||s===M.UNANCHORED)&&i>=o&&this.add(B,this.prog.start,i,this.matchcap,0,R);const x=i+C;R=e.context(x);for(let K=0;K<B.size;K++){const se=B.densePcs[K],ue=this.prog.inst[se],He=K*this.ncap;let ye=!1;switch(ue.op){case P.MATCH:if(s===M.ANCHOR_BOTH&&i!==e.endPos())break;N.add(ue.arg);break;case P.RUNE:ye=ue.matchRune(f);break;case P.RUNE1:ye=f===ue.runes[0];break;case P.RUNE_ANY:ye=!0;break;case P.RUNE_ANY_NOT_NL:ye=f!==10;break;default:continue}ye&&this.add(c,ue.out,x,B.denseCaps,He,R)}if(B.clear(),C===0)break;i+=C,f=m,C=v,f!==-1&&(l=e.step(i+C),m=l>>3,v=l&7);const J=B;B=c,c=J}return c.clear(),Array.from(N).sort((x,J)=>x-J)}step(e,t,s,r,i,o,B,c){const l=this.re2.longest;for(let f=0;f<e.size;f++){const C=e.densePcs[f],m=f*this.ncap;if(l&&this.matched&&this.ncap>0&&this.matchcap[0]<e.denseCaps[m])continue;const v=this.prog.inst[C];let R=!1;switch(v.op){case P.MATCH:if(B===M.ANCHOR_BOTH&&!c)break;if(this.ncap>0&&(!l||!this.matched||this.matchcap[1]<s)){e.denseCaps[m+1]=s;for(let N=0;N<this.ncap;N++)this.matchcap[N]=e.denseCaps[m+N]}l||(e.size=0),this.matched=!0;break;case P.RUNE:R=v.matchRune(i);break;case P.RUNE1:R=i===v.runes[0];break;case P.RUNE_ANY:R=!0;break;case P.RUNE_ANY_NOT_NL:R=i!==10;break;default:continue}R&&this.add(t,v.out,r,e.denseCaps,m,o)}e.clear()}spawnLookbehinds(e,t,s){for(let r=0;r<this.prog.lbStarts.length;r++)this.add(e,this.prog.lbStarts[r],t,this.matchcap,0,s)}restoreLookbehinds(e,t,s){this.lbTable.set(e.lbTable);for(let r=0;r<e.size;r++)this.add(t,e.pcs[r],e.pos,this.matchcap,0,s)}saveLookbehinds(e,t,s){let r=0;for(let i=0;i<t.size;i++){const o=t.densePcs[i];this.prog.lbInst[o]===1&&P.isRuneOp(this.prog.inst[o].op)&&(e.pcs[r++]=o)}e.size=r,e.pos=s,e.lbTable.set(this.lbTable)}add(e,t,s,r,i,o){const B=this.addStack;let c=0;for(;;){for(;t!==0&&!e.contains(t);){const f=e.add(t),C=this.prog.inst[t];switch(C.op){case P.FAIL:t=0;break;case P.ALT:case P.ALT_MATCH:B[c++]=C.arg,B[c++]=0,t=C.out;break;case P.EMPTY_WIDTH:t=(C.arg&~o)===0?C.out:0;break;case P.NOP:t=C.out;break;case P.CAPTURE:C.arg<this.ncap&&(B[c++]=-C.arg-1,B[c++]=r[i+C.arg],r[i+C.arg]=s),t=C.out;break;case P.LB_WRITE:this.lbTable[Math.abs(C.arg)]=s,t=C.out;break;case P.LB_CHECK:C.arg>0?t=this.lbTable[C.arg]===s?C.out:0:t=this.lbTable[-C.arg]!==s?C.out:0;break;case P.MATCH:case P.RUNE:case P.RUNE1:case P.RUNE_ANY:case P.RUNE_ANY_NOT_NL:if(this.prog.lbInst[t]===0&&e.mainThreads++,this.ncap>0){const m=f*this.ncap;m+this.ncap>e.denseCaps.length&&e.growCaps(m+this.ncap);for(let v=0;v<this.ncap;v++)e.denseCaps[m+v]=r[i+v]}t=0;break;default:throw new Eo("unhandled")}}if(c===0)return;c-=2;const l=B[c];l<0?(r[i-l-1]=B[c+1],t=0):t=l}}};const Xw=(n,e,t)=>{let s=-2128831035;for(let r=0;r<n.length;r++)s^=n[r],s=Math.imul(s,16777619);s^=e,s=Math.imul(s,16777619);for(let r=0;r<t.length;r++)s^=t[r],s=Math.imul(s,16777619);return s},Zu=(n,e)=>{if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0},eh=(n,e,t,s)=>n.flag===t&&Zu(n.nfaStates,e)&&Zu(n.matchIDs,s),eB=[],dr=-1;var Li=class{constructor(n,e,t){this.nfaStates=n,this.flag=e,this.isMatch=(e&YC.FLAG_MATCH)!==0,this.matchIDs=t,this.next=null,this.nextAnchored=null}},YC=class Le{static FLAG_EMPTY_MASK=255;static FLAG_MATCH=256;static FLAG_LAST_WORD=512;static FLAG_NEED_SHIFT=16;static STATE_OVERHEAD=150;static ARRAY_OVERHEAD=40;static ELEMENT_SIZE=8;static TABLE_OVERHEAD=48;static PROGRESS_PER_STATE=10;constructor(e,t=8388608){this.prog=e,this.maxMem=t,this.stateCache=new Map,this.stateCount=0,this.startStates=new Map,this.failed=!1;for(let s=0;s<e.numInst();s++){const r=e.getInst(s).op;if(r===P.LB_WRITE||r===P.LB_CHECK){this.failed=!0;break}}this.computeRuneClasses(),this.stateBudget=t,this.memBudget=t}computeRuneClasses(){const e=new Set,t=(r,i)=>{e.add(r),e.add(i+1)};for(let r=0;r<this.prog.numInst();r++){const i=this.prog.getInst(r);switch(i.op){case P.RUNE:case P.RUNE1:if(i.runes.length===1){if(t(i.runes[0],i.runes[0]),(i.arg&M.FOLD_CASE)!==0)for(let o=$.simpleFold(i.runes[0]);o!==i.runes[0];o=$.simpleFold(o))t(o,o)}else for(let o=0;o<i.runes.length;o+=2)t(i.runes[o],i.runes[o+1]);break;case P.RUNE_ANY_NOT_NL:t(10,10);break;case P.EMPTY_WIDTH:(i.arg&(H.EMPTY_BEGIN_LINE|H.EMPTY_END_LINE))!==0&&t(10,10),(i.arg&(H.EMPTY_WORD_BOUNDARY|H.EMPTY_NO_WORD_BOUNDARY))!==0&&(t(48,57),t(65,90),t(95,95),t(97,122))}}e.delete(0),this.classBounds=Int32Array.from(e).sort(),this.numClasses=this.classBounds.length+1;const s=new Int32Array($.MAX_LATIN1+1);for(let r=0;r<=$.MAX_LATIN1;r++)s[r]=this.searchClass(r);this.latin1Class=s}runeClass(e){return e<=$.MAX_LATIN1?this.latin1Class[e]:this.searchClass(e)}searchClass(e){const t=this.classBounds;let s=0,r=t.length;for(;s<r;){const i=s+r>>1;t[i]<=e?s=i+1:r=i}return s}closure(e,t){const s=new Set,r=Array.from(e);let i=0;for(;r.length>0;){const o=r.pop();if(o===0||s.has(o))continue;s.add(o);const B=this.prog.getInst(o);switch(B.op){case P.ALT:case P.ALT_MATCH:r.push(B.out),r.push(B.arg);break;case P.NOP:case P.CAPTURE:r.push(B.out);break;case P.EMPTY_WIDTH:i|=B.arg,(B.arg&~t)===0&&r.push(B.out)}}return{pcs:Array.from(s).sort((o,B)=>o-B),needflags:i}}getState(e,t,s){const r=Xw(e,t,s),i=this.stateCache.get(r);if(i instanceof Li){if(eh(i,e,t,s))return i}else if(i!==void 0){for(let c=0;c<i.length;c++)if(eh(i[c],e,t,s))return i[c]}const o=Le.stateCost(e,s);if(this.memBudget<o)return null;this.memBudget-=o;const B=new Li(e,t,s);return i===void 0?this.stateCache.set(r,B):i instanceof Li?this.stateCache.set(r,[i,B]):i.push(B),this.stateCount++,B}static stateCost(e,t){const s=t.length===0?0:Le.ARRAY_OVERHEAD+Le.ELEMENT_SIZE*t.length;return Le.STATE_OVERHEAD+Le.ELEMENT_SIZE*e.length+s}*cachedStates(){for(const e of this.stateCache.values())e instanceof Li?yield e:yield*e}makeState(e,t,s){const r=this.closure(e,t&Le.FLAG_EMPTY_MASK);let i=t;return r.needflags===0&&(i&=Le.FLAG_MATCH),i|=r.needflags<<Le.FLAG_NEED_SHIFT,this.getState(r.pcs,i,s)}allocTable(e,t){const s=this.numClasses+1,r=Le.TABLE_OVERHEAD+Le.ELEMENT_SIZE*s;if(this.memBudget<r)return null;this.memBudget-=r;const i=new Array(s).fill(null);return t===M.UNANCHORED?e.next=i:e.nextAnchored=i,i}clearCache(){this.stateCache.clear(),this.stateCount=0,this.startStates.clear(),this.memBudget=this.stateBudget}resetCache(e){return this.clearCache(),this.getState(e.nfaStates,e.flag,e.matchIDs)}step(e,t,s,r){let i=r===M.UNANCHORED?e.next:e.nextAnchored;if(i!==null){const K=i[t];if(K!==null)return K}else if(i=this.allocTable(e,r),i===null)return null;const o=e.flag>>>Le.FLAG_NEED_SHIFT,B=e.flag&Le.FLAG_EMPTY_MASK;let c=B,l=0;s===10&&(c|=H.EMPTY_END_LINE,l|=H.EMPTY_BEGIN_LINE),s===dr&&(c|=H.EMPTY_END_LINE|H.EMPTY_END_TEXT);const f=(e.flag&Le.FLAG_LAST_WORD)!==0,C=s!==dr&&H.isWordRune(s);c|=C===f?H.EMPTY_NO_WORD_BOUNDARY:H.EMPTY_WORD_BOUNDARY;let m=e.nfaStates;(c&~B&o)!==0&&(m=this.closure(m,c).pcs);const v=[];let R=!1,N=eB;for(let K=0;K<m.length;K++){const se=this.prog.getInst(m[K]);se.op===P.MATCH?(R||(R=!0,N=[]),N.push(se.arg)):s!==dr&&P.isRuneOp(se.op)&&se.matchRune(s)&&v.push(se.out)}N.length>1&&N.sort((K,se)=>K-se),r===M.UNANCHORED&&s!==dr&&v.push(this.prog.start);let x=l;R&&(x|=Le.FLAG_MATCH),C&&(x|=Le.FLAG_LAST_WORD);const J=this.makeState(v,x,N);return J===null?null:(i[t]=J,J)}start(e,t){const s=e.context(t);let r;if((s&H.EMPTY_BEGIN_TEXT)!==0)r=H.EMPTY_BEGIN_TEXT|H.EMPTY_BEGIN_LINE;else if((s&H.EMPTY_BEGIN_LINE)!==0)r=H.EMPTY_BEGIN_LINE;else{const o=e.step(t),B=o>=0&&H.isWordRune(o>>3);r=(s&H.EMPTY_WORD_BOUNDARY)!==0!==B?Le.FLAG_LAST_WORD:0}let i=this.startStates.get(r);if(i===void 0){if(i=this.makeState([this.prog.start],r,eB),i===null&&(this.clearCache(),i=this.makeState([this.prog.start],r,eB),i===null))return null;this.startStates.set(r,i)}return i}stepOrReset(e,t,s,r,i,o){let B=this.step(e,t,s,r);if(B!==null)return B;if(o.resetPos>=0&&i-o.resetPos<Le.PROGRESS_PER_STATE*this.stateCount)return null;o.resetPos=i;const c=this.resetCache(e);return c===null?null:(B=this.step(c,t,s,r),B)}run(e,t,s,r,i){const o=e.endPos(),B=this.latin1Class,c=s===M.UNANCHORED,l={resetPos:-1};let f=t;for(;f<o;){const C=e.step(f),m=C>>3,v=C&7;if(v===0)break;const R=m<=$.MAX_LATIN1?B[m]:this.runeClass(m);let N=c&&r.next!==null?r.next[R]:null;if(N===null&&(N=this.stepOrReset(r,R,m,s,f,l),N===null))return null;if(r=N,r.isMatch&&i(r,!1))return!0;if(!c&&r.nfaStates.length===0)return!1;f+=v}return r=this.stepOrReset(r,this.numClasses,dr,s,f,l),r===null?null:r.isMatch&&i(r,!0)}match(e,t,s){if(this.failed)return null;if((s===M.ANCHOR_START||s===M.ANCHOR_BOTH)&&t!==0)return!1;const r=this.start(e,t);return r===null?null:this.run(e,t,s,r,(i,o)=>s!==M.ANCHOR_BOTH||o)}matchSet(e,t,s){if(this.failed)return null;if((s===M.ANCHOR_START||s===M.ANCHOR_BOTH)&&t!==0)return[];const r=this.start(e,t);if(r===null)return null;const i=new Set,o=(B,c)=>{if(s!==M.ANCHOR_BOTH||c)for(let l=0;l<B.matchIDs.length;l++)i.add(B.matchIDs[l]);return!1};return this.run(e,t,s,r,o)===null?null:Array.from(i).sort((B,c)=>B-c)}};const Zw=32,eI=500,tB=256,tI=262144;var nI=class{constructor(){this.end=0,this.cap=new Int32Array(0),this.matchcap=new Int32Array(0),this.ncap=0,this.jobPc=new Int32Array(tB),this.jobArg=new Uint8Array(tB),this.jobPos=new Int32Array(tB),this.jobLen=0,this.visited=new Uint32Array(0)}reset(n,e,t){this.end=e,this.jobLen=0,this.ncap=t;const s=n.numInst()*(e+1)+Zw-1>>>5;this.visited.length<s?this.visited=new Uint32Array(s):this.visited.fill(0,0,s),this.cap.length<t?this.cap=new Int32Array(t).fill(-1):this.cap.fill(-1,0,t),this.matchcap.length<t?this.matchcap=new Int32Array(t).fill(-1):this.matchcap.fill(-1,0,t)}shouldVisit(n,e){const t=n*(this.end+1)+e,s=t>>>5,r=1<<(t&31);return(this.visited[s]&r)!==0?!1:(this.visited[s]|=r,!0)}push(n,e,t,s){if(n.prog.getInst(e).op!==P.FAIL&&(s||this.shouldVisit(e,t))){if(this.jobLen>=this.jobPc.length){const r=this.jobPc.length*2,i=new Int32Array(r);i.set(this.jobPc),this.jobPc=i;const o=new Uint8Array(r);o.set(this.jobArg),this.jobArg=o;const B=new Int32Array(r);B.set(this.jobPos),this.jobPos=B}this.jobPc[this.jobLen]=e,this.jobArg[this.jobLen]=s?1:0,this.jobPos[this.jobLen]=t,this.jobLen++}}tryBacktrack(n,e,t,s,r){const i=n.longest;for(this.push(n,t,s,!1);this.jobLen>0;){this.jobLen--;let o=this.jobPc[this.jobLen],B=this.jobArg[this.jobLen]===1,c=this.jobPos[this.jobLen],l=!0;for(;!(!l&&!this.shouldVisit(o,c));){l=!1;const f=n.prog.getInst(o);switch(f.op){case P.FAIL:break;case P.ALT:if(B){B=!1,o=f.arg;continue}else{this.push(n,o,c,!0),o=f.out;continue}case P.ALT_MATCH:{const C=n.prog.getInst(f.out);if(P.isRuneOp(C.op)){this.push(n,f.arg,c,!1),o=f.arg,c=this.end;continue}this.push(n,f.out,this.end,!1),o=f.out;continue}case P.RUNE:{const C=e.step(c);if(C===nt.EOF()||!f.matchRune(C>>3))break;c+=C&7,o=f.out;continue}case P.RUNE1:{const C=e.step(c);if(C===nt.EOF()||C>>3!==f.runes[0])break;c+=C&7,o=f.out;continue}case P.RUNE_ANY_NOT_NL:{const C=e.step(c);if(C===nt.EOF()||C>>3===10)break;c+=C&7,o=f.out;continue}case P.RUNE_ANY:{const C=e.step(c);if(C===nt.EOF())break;c+=C&7,o=f.out;continue}case P.CAPTURE:if(B){this.cap[f.arg]=c;break}else{f.arg<this.ncap&&(this.push(n,o,this.cap[f.arg],!0),this.cap[f.arg]=c),o=f.out;continue}case P.EMPTY_WIDTH:{const C=e.context(c);if((f.arg&~C)!==0)break;o=f.out;continue}case P.NOP:o=f.out;continue;case P.MATCH:{if(r===M.ANCHOR_BOTH&&c!==this.end)break;if(this.ncap===0)return!0;this.ncap>1&&(this.cap[1]=c);const C=this.matchcap[1];if((C===-1||i&&c>0&&c>C)&&this.matchcap.set(this.cap),!i||c===this.end)return!0;break}case P.LB_WRITE:case P.LB_CHECK:throw new Eo("Backtracker cannot evaluate Lookbehind instructions");default:throw new Eo("bad inst")}break}}return i&&this.matchcap.length>1&&this.matchcap[1]>=0}};const ki=[];var Mi=class XC{static shouldBacktrack(e){return e.numInst()<=eI}static maxBitStateLen(e){return XC.shouldBacktrack(e)?Math.floor(tI/e.numInst()):0}static execute(e,t,s,r,i){const o=e.cond;if(o===H.EMPTY_ALL||(r===M.ANCHOR_START||r===M.ANCHOR_BOTH)&&s!==0||(o&H.EMPTY_BEGIN_TEXT)!==0&&s!==0)return null;const B=ki.length>0?ki.pop():new nI,c=t.endPos();B.reset(e.prog,c,i);let l=!1;if((o&H.EMPTY_BEGIN_TEXT)!==0||r===M.ANCHOR_START||r===M.ANCHOR_BOTH)B.ncap>0&&(B.cap[0]=s),B.tryBacktrack(e,t,e.prog.start,s,r)&&(l=!0);else{let C=-1;for(;s<=c&&C!==0;s+=C){if(e.prefix.length>0){const v=t.index(e,s);if(v<0)break;s+=v}if(B.ncap>0&&(B.cap[0]=s),B.tryBacktrack(e,t,e.prog.start,s,r)){l=!0;break}const m=t.step(s);C=m===nt.EOF()?0:m&7}}if(!l)return ki.push(B),null;const f=i===0?[]:H.toArray(B.matchcap.subarray(0,i));return ki.push(B),f}},th=class{constructor(n){this.sparse=new Uint32Array(n),this.dense=new Uint32Array(n),this.size=0,this.nextIndex=0}empty(){return this.nextIndex>=this.size}next(){return this.dense[this.nextIndex++]}clear(){this.size=0,this.nextIndex=0}contains(n){return n<this.sparse.length&&this.sparse[n]<this.size&&this.dense[this.sparse[n]]===n}insert(n){this.contains(n)||this.insertNew(n)}insertNew(n){n>=this.sparse.length||(this.sparse[n]=this.size,this.dense[this.size]=n,this.size++)}};const sI=(n,e,t,s)=>{const r=n.length,i=e.length;let o=0,B=0;const c=[],l=[];let f=!0,C=-1;const m=v=>{const R=v?n:e,N=v?o:B,x=v?t:s;return C>0&&R[N]<=c[C]?!1:(c.push(R[N],R[N+1]),v?o+=2:B+=2,C+=2,l.push(x),!0)};for(;o<r||B<i;)if(B>=i?f=m(!0):o>=r||e[B]<n[o]?f=m(!1):f=m(!0),!f)return null;return{merged:c,next:l}};var rI=class{constructor(n){this.start=n.start,this.numCap=n.numCap,this.inst=new Array(n.inst.length);for(let e=0;e<n.inst.length;e++){const t=n.inst[e],s=new P(t.op);s.out=t.out,s.arg=t.arg,s.runes=t.runes?new Int32Array(t.runes):new Int32Array(0),s.next=null,this.inst[e]=s}}};const iI=n=>{const e=new rI(n);for(let t=0;t<e.inst.length;t++){const s=e.inst[t];if(s.op!==P.ALT&&s.op!==P.ALT_MATCH)continue;let r="out",i="arg",o=e.inst[s[i]];if(o.op!==P.ALT&&o.op!==P.ALT_MATCH&&(r="arg",i="out",o=e.inst[s[i]],o.op!==P.ALT&&o.op!==P.ALT_MATCH))continue;const B=e.inst[s[r]];if(B.op===P.ALT||B.op===P.ALT_MATCH)continue;let c="out",l="arg",f=!1;o.out===t?f=!0:o.arg===t&&(f=!0,c="arg",l="out"),f&&(o[c]=s[r]),s[r]===o[c]&&(s[i]=o[l])}return e},oI=n=>{if(n.inst.length>=1e3)return null;const e=new th(n.inst.length),t=new th(n.inst.length),s=new Array(n.inst.length),r=new Array(n.inst.length).fill(!1),i=o=>{let B=!0;const c=n.inst[o];if(t.contains(o))return!0;switch(t.insert(o),c.op){case P.ALT:case P.ALT_MATCH:{B=i(c.out)&&i(c.arg);let l=r[c.out],f=r[c.arg];if(l&&f)return!1;if(f){const R=c.out;c.out=c.arg,c.arg=R;const N=l;l=f,f=N}l&&(r[o]=!0,c.op=P.ALT_MATCH);const C=s[c.out]||[],m=s[c.arg]||[],v=sI(C,m,c.out,c.arg);if(!v)return!1;s[o]=new Int32Array(v.merged),c.next=new Uint32Array(v.next);break}case P.CAPTURE:case P.EMPTY_WIDTH:case P.NOP:B=i(c.out),r[o]=r[c.out],s[o]=s[c.out]?new Int32Array(s[c.out]):new Int32Array(0),c.next=new Uint32Array(Math.floor(s[o].length/2)+1).fill(c.out);break;case P.MATCH:case P.FAIL:r[o]=c.op===P.MATCH;break;case P.RUNE:{if(r[o]=!1,c.next&&c.next.length>0)break;if(e.insert(c.out),!c.runes||c.runes.length===0){s[o]=new Int32Array(0),c.next=new Uint32Array([c.out]);break}let l=[];if(c.runes.length===1&&(c.arg&M.FOLD_CASE)!==0){const f=c.runes[0];l.push(f,f);for(let C=$.simpleFold(f);C!==f;C=$.simpleFold(C))l.push(C,C);l.sort((C,m)=>C-m)}else for(let f=0;f<c.runes.length;f++)l.push(c.runes[f]);s[o]=new Int32Array(l),c.next=new Uint32Array(Math.floor(l.length/2)+1).fill(c.out),c.op=P.RUNE;break}case P.RUNE1:{if(r[o]=!1,c.next&&c.next.length>0)break;e.insert(c.out);let l=[];if((c.arg&M.FOLD_CASE)!==0){const f=c.runes[0];l.push(f,f);for(let C=$.simpleFold(f);C!==f;C=$.simpleFold(C))l.push(C,C);l.sort((C,m)=>C-m)}else l.push(c.runes[0],c.runes[0]);s[o]=new Int32Array(l),c.next=new Uint32Array(Math.floor(l.length/2)+1).fill(c.out),c.op=P.RUNE;break}case P.RUNE_ANY:if(r[o]=!1,c.next&&c.next.length>0)break;e.insert(c.out),s[o]=new Int32Array([0,$.MAX_RUNE]),c.next=new Uint32Array([c.out]);break;case P.RUNE_ANY_NOT_NL:if(r[o]=!1,c.next&&c.next.length>0)break;e.insert(c.out),s[o]=new Int32Array([0,9,11,$.MAX_RUNE]),c.next=new Uint32Array(Math.floor(s[o].length/2)+1).fill(c.out)}return B};for(e.clear(),e.insert(n.start);!e.empty();)if(t.clear(),!i(e.next()))return null;for(let o=0;o<n.inst.length;o++)s[o]&&(n.inst[o].runes=s[o]);return n},aI=(n,e)=>{for(let t=0;t<e.inst.length;t++){const s=e.inst[t];switch(s.op){case P.ALT:case P.ALT_MATCH:case P.RUNE:break;case P.CAPTURE:case P.EMPTY_WIDTH:case P.NOP:case P.MATCH:case P.FAIL:n.inst[t].next=null;break;case P.RUNE1:case P.RUNE_ANY:case P.RUNE_ANY_NOT_NL:n.inst[t].next=null,n.inst[t].op=s.op,n.inst[t].runes=s.runes?new Int32Array(s.runes):new Int32Array(0)}}};var nh=class ZC{static compile(e){if(e.start===0||e.numLb>0)return null;const t=e.inst[e.start];if(t.op!==P.EMPTY_WIDTH||(t.arg&H.EMPTY_BEGIN_TEXT)===0)return null;let s=!1;for(let i=0;i<e.inst.length;i++)if(e.inst[i].op===P.ALT||e.inst[i].op===P.ALT_MATCH){s=!0;break}for(let i=0;i<e.inst.length;i++){const o=e.inst[i],B=e.inst[o.out].op;switch(o.op){case P.ALT:case P.ALT_MATCH:if(B===P.MATCH||e.inst[o.arg].op===P.MATCH)return null;break;case P.EMPTY_WIDTH:if(B===P.MATCH){if((o.arg&H.EMPTY_END_TEXT)===H.EMPTY_END_TEXT)continue;return null}break;default:if(B===P.MATCH&&s)return null}}let r=iI(e);return r=oI(r),r!==null&&aI(r,e),r}static next(e,t){const s=e.matchRunePos(t);return s>=0?e.next[s]:e.op===P.ALT_MATCH?e.out:0}static execute(e,t,s,r,i){const o=e.onepass;if(!o)return null;const B=new Int32Array(i).fill(-1);let c=!1,l=t.step(s),f=l>>3,C=l&7,m=nt.EOF(),v=-1,R=0;l!==nt.EOF()&&(m=t.step(s+C),m!==nt.EOF()&&(v=m>>3,R=m&7));let N=s===0?H.emptyOpContext(-1,f):t.context(s),x=o.start,J;for(;;){switch(J=o.inst[x],x=J.out,J.op){case P.MATCH:return r===M.ANCHOR_BOTH&&s!==t.endPos()?null:(c=!0,B.length>0&&(B[0]=0,B[1]=s),i===0?[]:H.toArray(B));case P.RUNE:if(!J.matchRune(f))return null;break;case P.RUNE1:if(f!==J.runes[0])return null;break;case P.RUNE_ANY:break;case P.RUNE_ANY_NOT_NL:if(f===10)return null;break;case P.ALT:case P.ALT_MATCH:x=ZC.next(J,f);continue;case P.FAIL:return null;case P.NOP:continue;case P.EMPTY_WIDTH:if((J.arg&~N)!==0)return null;continue;case P.CAPTURE:J.arg<B.length&&(B[J.arg]=s);continue;default:throw new Eo("bad inst")}if(C===0)break;N=H.emptyOpContext(f,v),s+=C,f=v,C=R,f!==-1&&(m=t.step(s+C),m!==nt.EOF()?(v=m>>3,R=m&7):(v=-1,R=0))}return c?i===0?[]:H.toArray(B):null}},w=class Y{static Op=qC(["NO_MATCH","EMPTY_MATCH","LITERAL","CHAR_CLASS","ANY_CHAR_NOT_NL","ANY_CHAR","BEGIN_LINE","END_LINE","BEGIN_TEXT","END_TEXT","WORD_BOUNDARY","NO_WORD_BOUNDARY","CAPTURE","STAR","PLUS","QUEST","REPEAT","CONCAT","ALTERNATE","PLB","NLB","LEFT_PAREN","VERTICAL_BAR"]);static isPseudoOp(e){return e>=Y.Op.LEFT_PAREN}static emptySubs(){return[]}static quoteIfHyphen(e){return e===L.CODES["-"]?"\\":""}static fromRegexp(e){const t=new Y(e.op);return t.flags=e.flags,t.subs=e.subs,t.runes=e.runes,t.cap=e.cap,t.min=e.min,t.max=e.max,t.name=e.name,t.namedGroups=e.namedGroups,t.lb=e.lb,t}constructor(e){this.op=e,this.flags=0,this.subs=Y.emptySubs(),this.runes=new Int32Array(0),this.min=0,this.max=0,this.cap=0,this.name=null,this.namedGroups=Object.create(null),this.lb=0}reinit(){this.flags=0,this.subs=Y.emptySubs(),this.runes=new Int32Array(0),this.cap=0,this.min=0,this.max=0,this.name=null,this.namedGroups=Object.create(null),this.lb=0}toString(){return this.appendTo()}appendTo(){let e="";switch(this.op){case Y.Op.NO_MATCH:e+="[^\\x00-\\x{10FFFF}]";break;case Y.Op.EMPTY_MATCH:e+="(?:)";break;case Y.Op.STAR:case Y.Op.PLUS:case Y.Op.QUEST:case Y.Op.REPEAT:{const t=this.subs[0];switch(t.op>Y.Op.CAPTURE||t.op===Y.Op.LITERAL&&t.runes.length>1?e+=`(?:${t.appendTo()})`:e+=t.appendTo(),this.op){case Y.Op.STAR:e+="*";break;case Y.Op.PLUS:e+="+";break;case Y.Op.QUEST:e+="?";break;case Y.Op.REPEAT:e+=`{${this.min}`,this.min!==this.max&&(e+=",",this.max>=0&&(e+=this.max)),e+="}"}(this.flags&M.NON_GREEDY)!==0&&(e+="?");break}case Y.Op.CONCAT:for(let t of this.subs)t.op===Y.Op.ALTERNATE?e+=`(?:${t.appendTo()})`:e+=t.appendTo();break;case Y.Op.ALTERNATE:{let t="";for(let s of this.subs)e+=t,t="|",e+=s.appendTo();break}case Y.Op.LITERAL:(this.flags&M.FOLD_CASE)!==0&&(e+="(?i:");for(let t of this.runes)e+=H.escapeRune(t);(this.flags&M.FOLD_CASE)!==0&&(e+=")");break;case Y.Op.ANY_CHAR_NOT_NL:e+="(?-s:.)";break;case Y.Op.ANY_CHAR:e+="(?s:.)";break;case Y.Op.PLB:e+=`(?<=${this.subs[0].appendTo()})`;break;case Y.Op.NLB:e+=`(?<!${this.subs[0].appendTo()})`;break;case Y.Op.CAPTURE:this.name===null||this.name.length===0?e+="(":e+=`(?P<${this.name}>`,this.subs[0].op!==Y.Op.EMPTY_MATCH&&(e+=this.subs[0].appendTo()),e+=")";break;case Y.Op.BEGIN_TEXT:e+="\\A";break;case Y.Op.END_TEXT:(this.flags&M.WAS_DOLLAR)!==0?e+="(?-m:$)":e+="\\z";break;case Y.Op.BEGIN_LINE:e+="^";break;case Y.Op.END_LINE:e+="$";break;case Y.Op.WORD_BOUNDARY:e+="\\b";break;case Y.Op.NO_WORD_BOUNDARY:e+="\\B";break;case Y.Op.CHAR_CLASS:if(this.runes.length%2!==0){e+="[invalid char class]";break}if(e+="[",this.runes.length===0)e+="^\\x00-\\x{10FFFF}";else if(this.runes[0]===0&&this.runes[this.runes.length-1]===$.MAX_RUNE){e+="^";for(let t=1;t<this.runes.length-1;t+=2){const s=this.runes[t]+1,r=this.runes[t+1]-1;e+=Y.quoteIfHyphen(s),e+=H.escapeRune(s),s!==r&&(e+="-",e+=Y.quoteIfHyphen(r),e+=H.escapeRune(r))}}else for(let t=0;t<this.runes.length;t+=2){const s=this.runes[t],r=this.runes[t+1];e+=Y.quoteIfHyphen(s),e+=H.escapeRune(s),s!==r&&(e+="-",e+=Y.quoteIfHyphen(r),e+=H.escapeRune(r))}e+="]";break;default:e+=this.op}return e}maxCap(){let e=0;if(this.op===Y.Op.CAPTURE&&(e=this.cap),this.subs!==null)for(let t of this.subs){const s=t.maxCap();e<s&&(e=s)}return e}equals(e){if(!(e!==null&&e instanceof Y)||this.op!==e.op)return!1;switch(this.op){case Y.Op.END_TEXT:if((this.flags&M.WAS_DOLLAR)!==(e.flags&M.WAS_DOLLAR))return!1;break;case Y.Op.LITERAL:case Y.Op.CHAR_CLASS:if((this.flags&M.FOLD_CASE)!==(e.flags&M.FOLD_CASE))return!1;if(this.runes===null&&e.runes===null)break;if(this.runes===null||e.runes===null||this.runes.length!==e.runes.length)return!1;for(let t=0;t<this.runes.length;t++)if(this.runes[t]!==e.runes[t])return!1;break;case Y.Op.ALTERNATE:case Y.Op.CONCAT:if(this.subs.length!==e.subs.length)return!1;for(let t=0;t<this.subs.length;++t)if(!this.subs[t].equals(e.subs[t]))return!1;break;case Y.Op.STAR:case Y.Op.PLUS:case Y.Op.QUEST:if((this.flags&M.NON_GREEDY)!==(e.flags&M.NON_GREEDY)||!this.subs[0].equals(e.subs[0]))return!1;break;case Y.Op.REPEAT:if((this.flags&M.NON_GREEDY)!==(e.flags&M.NON_GREEDY)||this.min!==e.min||this.max!==e.max||!this.subs[0].equals(e.subs[0]))return!1;break;case Y.Op.CAPTURE:if(this.cap!==e.cap||(this.name===null?e.name!==null:this.name!==e.name)||!this.subs[0].equals(e.subs[0]))return!1;break;case Y.Op.PLB:case Y.Op.NLB:if(this.lb!==e.lb||!this.subs[0].equals(e.subs[0]))return!1}return!0}},Cc=class{static walk(n,e){const t=[];let s=n,r;for(;;){if(s.subs.length===0)r=e.leaf(s);else{const i=e.enter(s);if(i.result===void 0){t.push({re:s,state:i,i:0}),s=s.subs[0];continue}r=i.result}for(;;){if(t.length===0)return r;const i=t[t.length-1];if(e.child(i.re,i.state,r,i.i),i.i++,i.state.result===void 0&&i.i<i.re.subs.length){s=i.re.subs[i.i];break}t.pop(),r=i.state.result!==void 0?i.state.result:e.leave(i.re,i.state)}}}},sh=class{constructor(n,e){const t=new Map,s=[0],r=[0],i=[0],o=[0];for(const R of n){let N=0;for(let x=0;x<R.length;x++){const J=N*e+R[x];let K=t.get(J);K===void 0&&(K=s.length,t.set(J,K),s.push(N),r.push(R[x]),i.push(i[N]+1),o.push(0)),N=K}o[N]=1}const B=s.length,c=new Int32Array(B-1);for(let R=1;R<B;R++)c[R-1]=R;c.sort((R,N)=>s[R]-s[N]||r[R]-r[N]);const l=new Int32Array(B+1);for(let R=1;R<B;R++)l[s[R]+1]++;for(let R=0;R<B;R++)l[R+1]+=l[R];const f=new Int32Array(B-1);for(let R=0;R<c.length;R++)f[R]=r[c[R]];this.childStart=l,this.childUnit=f,this.childNode=c;const C=new Int32Array(B);for(let R=0;R<B;R++)C[R]=R;C.sort((R,N)=>i[R]-i[N]);const m=new Int32Array(B),v=Uint8Array.from(o);for(let R=1;R<B;R++){const N=C[R],x=s[N];if(x!==0){let J=m[x],K=this.next(J,r[N]);for(;K<0&&J!==0;)J=m[J],K=this.next(J,r[N]);m[N]=K>=0?K:0}v[N]|=v[m[N]]}this.fail=m,this.match=v}next(n,e){let t=this.childStart[n],s=this.childStart[n+1];const r=this.childUnit;for(;t<s;){const i=t+s>>1,o=r[i];if(o===e)return this.childNode[i];o<e?t=i+1:s=i}return-1}advance(n,e){for(;;){const t=this.next(n,e);if(t>=0)return t;if(n===0)return 0;n=this.fail[n]}}searchUTF16(n,e,t){let s=0;for(let r=e;r<t;r++)if(s=this.advance(s,n.charCodeAt(r)),this.match[s]===1)return!0;return!1}searchUTF8(n,e,t){let s=0;for(let r=e;r<t;r++)if(s=this.advance(s,n[r]),this.match[s]===1)return!0;return!1}},oe=class Is{static Type={NONE:0,EXACT:1,AND:2,OR:3};static MAX_SCANS=32;static MAX_AC_UNITS=1<<18;constructor(e){this.type=e,this.subs=[],this.str="",this.bytes=null,this.cost=e===Is.Type.EXACT?1:0,this.allExact=!1,this.ac16=null,this.ac8=null}automaton16(){if(this.ac16===null){const e=this.subs.map(t=>{const s=new Array(t.str.length);for(let r=0;r<t.str.length;r++)s[r]=t.str.charCodeAt(r);return s});this.ac16=new sh(e,65536)}return this.ac16}automaton8(){return this.ac8===null&&(this.ac8=new sh(this.subs.map(e=>e.bytes),256)),this.ac8}eval(e,t){switch(this.type){case Is.Type.NONE:return!0;case Is.Type.EXACT:return e.hasString(this,t);case Is.Type.AND:for(let s=0;s<this.subs.length;s++)if(!this.subs[s].eval(e,t))return!1;return!0;case Is.Type.OR:if(this.allExact)return e.hasAnyString(this,t);for(let s=0;s<this.subs.length;s++)if(this.subs[s].eval(e,t))return!0;return!1;default:return!0}}},BI=class ys{static build(e){return e?Cc.walk(e,ys.WALKER):new oe(oe.Type.NONE)}static WALKER={leaf:e=>ys.leaf(e),enter:e=>ys.enter(e),child:(e,t,s)=>ys.child(e,t,s),leave:(e,t)=>ys.leave(e,t)};static leaf(e){if(e.op!==w.Op.LITERAL)return new oe(oe.Type.NONE);if(e.runes.length===0||(e.flags&M.FOLD_CASE)!==0)return new oe(oe.Type.NONE);let t="";for(let r=0;r<e.runes.length;r++){if($.isUnsearchable(e.runes[r]))return new oe(oe.Type.NONE);t+=String.fromCodePoint(e.runes[r])}const s=new oe(oe.Type.EXACT);return s.str=t,s.bytes=H.stringToUtf8ByteArray(s.str),s}static enter(e){switch(e.op){case w.Op.CAPTURE:case w.Op.PLUS:return{sub:null};case w.Op.REPEAT:return e.min>=1?{sub:null}:{result:new oe(oe.Type.NONE)};case w.Op.CONCAT:return{pf:new oe(oe.Type.AND),subs:[]};case w.Op.ALTERNATE:return{pf:new oe(oe.Type.OR),subs:[]};default:return{result:new oe(oe.Type.NONE)}}}static child(e,t,s){if(t.subs===void 0){t.sub=s;return}if(t.pf.type===oe.Type.AND){if(s.type===oe.Type.NONE)return;if(s.type===oe.Type.AND){for(let r=0;r<s.subs.length;r++)t.subs.push(s.subs[r]);return}t.subs.push(s);return}if(s.type===oe.Type.NONE){t.result=new oe(oe.Type.NONE);return}if(s.type===oe.Type.OR){for(let r=0;r<s.subs.length;r++)t.subs.push(s.subs[r]);return}t.subs.push(s)}static leave(e,t){if(t.subs===void 0)return t.sub;const s=t.pf,r=new Set,i=[];for(const l of t.subs){if(l.type===oe.Type.EXACT){if(r.has(l.str))continue;r.add(l.str)}i.push(l)}if(s.type===oe.Type.AND){const l=[];let f=0;for(const C of i)f+C.cost>oe.MAX_SCANS||(l.push(C),f+=C.cost);return l.length===0?new oe(oe.Type.NONE):l.length===1?l[0]:(s.subs=l,s.cost=f,s)}if(i.length===0)return new oe(oe.Type.NONE);if(i.length===1)return i[0];s.subs=i;let o=!0,B=0,c=0;for(const l of i)l.type!==oe.Type.EXACT?o=!1:c+=l.bytes.length,B+=l.cost;return o?c>oe.MAX_AC_UNITS?new oe(oe.Type.NONE):(s.allExact=!0,s.cost=1,s):B>oe.MAX_SCANS?new oe(oe.Type.NONE):(s.cost=B,s)}},It=class{constructor(n=0,e=0){this.head=n,this.tail=e}},cI=class{constructor(){this.inst=[],this.start=0,this.numCap=2,this.lbStarts=[],this.numLb=0,this.lbInst=null}getInst(n){return this.inst[n]}numInst(){return this.inst.length}addInst(n){this.inst.push(new P(n))}markLookbehindInsts(){const n=new Uint8Array(this.inst.length),e=this.lbStarts.slice();for(;e.length>0;){const t=e.pop();if(t===0||n[t]===1)continue;n[t]=1;const s=this.inst[t];switch(s.op){case P.ALT:case P.ALT_MATCH:e.push(s.out,s.arg);break;case P.MATCH:case P.FAIL:break;default:e.push(s.out)}}this.lbInst=n}skipNop(n){let e=this.inst[n];for(;e.op===P.NOP||e.op===P.CAPTURE;)e=this.inst[n],n=e.out;return e}prefix(){let n="",e=this.skipNop(this.start);if(!P.isRuneOp(e.op)||e.runes.length!==1)return[e.op===P.MATCH,n];for(;P.isRuneOp(e.op)&&e.runes.length===1&&(e.arg&M.FOLD_CASE)===0&&!$.isUnsearchable(e.runes[0]);)n+=String.fromCodePoint(e.runes[0]),e=this.skipNop(e.out);return[e.op===P.MATCH,n]}startCond(){let n=0,e=this.start;e:for(;;){const t=this.inst[e];switch(t.op){case P.EMPTY_WIDTH:n|=t.arg;break;case P.FAIL:return-1;case P.CAPTURE:case P.NOP:break;default:break e}e=t.out}return n}patch(n,e){let t=n.head;for(;t!==0;){const s=this.inst[t>>1];(t&1)===0?(t=s.out,s.out=e):(t=s.arg,s.arg=e)}}append(n,e){if(n.head===0)return e;if(e.head===0)return n;const t=this.inst[n.tail>>1];return(n.tail&1)===0?t.out=e.head:t.arg=e.head,new It(n.head,e.tail)}toString(){let n="";for(let e=0;e<this.inst.length;e++){const t=n.length;n+=e,e===this.start&&(n+="*"),n+="        ".substring(n.length-t),n+=this.inst[e],n+=`
`}return n}};const lI=new Int32Array([0,L.CODES[`
`]-1,L.CODES[`
`]+1,$.MAX_RUNE]),rh=new Int32Array([0,$.MAX_RUNE]);var xi=class{constructor(n=0,e=new It,t=!1){this.i=n,this.out=e,this.nullable=t}},uI=class SB{static compileRegexp(e){const t=new SB,s=t.compile(e);return t.prog.patch(s.out,t.newInst(P.MATCH).i),t.prog.start=s.i,t.prog.markLookbehindInsts(),t.prog}static compileSet(e){const t=new SB;if(e.length===0)return t.prog.start=t.newInst(P.FAIL).i,t.prog.markLookbehindInsts(),t.prog;let s=[];for(let i=0;i<e.length;i++){t.lbOffset=t.prog.numLb;const o=t.compile(e[i]),B=t.newInst(P.MATCH);t.prog.getInst(B.i).arg=i,t.prog.patch(o.out,B.i),s.push(o.i)}let r=s[0];for(let i=1;i<s.length;i++){const o=t.newInst(P.ALT),B=t.prog.getInst(o.i);B.out=r,B.arg=s[i],r=o.i}return t.prog.start=r,t.prog.markLookbehindInsts(),t.prog}constructor(){this.prog=new cI,this.newInst(P.FAIL),this.lbOffset=0,this.runeCache=new Map,this.walker={leaf:e=>this.leaf(e),enter:e=>this.enter(e),child:(e,t,s)=>this.child(e,t,s),leave:(e,t)=>this.leave(e,t)}}newInst(e){return this.prog.addInst(e),new xi(this.prog.numInst()-1,new It,!0)}nop(){const e=this.newInst(P.NOP);return e.out=new It(e.i<<1,e.i<<1),e}fail(){return new xi}cap(e){const t=this.newInst(P.CAPTURE);return t.out=new It(t.i<<1,t.i<<1),this.prog.getInst(t.i).arg=e,this.prog.numCap<e+1&&(this.prog.numCap=e+1),t}cat(e,t){return e.i===0||t.i===0?(this.prog.patch(e.out,0),this.prog.patch(t.out,0),this.fail()):(this.prog.patch(e.out,t.i),new xi(e.i,t.out,e.nullable&&t.nullable))}alt(e,t){if(e.i===0)return t;if(t.i===0)return e;const s=this.newInst(P.ALT),r=this.prog.getInst(s.i);return r.out=e.i,r.arg=t.i,s.out=this.prog.append(e.out,t.out),s.nullable=e.nullable||t.nullable,s}loop(e,t){const s=this.newInst(P.ALT),r=this.prog.getInst(s.i);return t?(r.arg=e.i,s.out=new It(s.i<<1,s.i<<1)):(r.out=e.i,s.out=new It(s.i<<1|1,s.i<<1|1)),this.prog.patch(e.out,s.i),s}quest(e,t){if(e.i===0)return this.nop();const s=this.newInst(P.ALT),r=this.prog.getInst(s.i);return t?(r.arg=e.i,s.out=new It(s.i<<1,s.i<<1)):(r.out=e.i,s.out=new It(s.i<<1|1,s.i<<1|1)),s.out=this.prog.append(s.out,e.out),s}star(e,t){return e.i===0?this.nop():e.nullable?this.quest(this.plus(e,t),t):this.loop(e,t)}plus(e,t){return e.i===0?this.fail():new xi(e.i,this.loop(e,t).out,e.nullable)}empty(e){const t=this.newInst(P.EMPTY_WIDTH);return this.prog.getInst(t.i).arg=e,t.out=new It(t.i<<1,t.i<<1),t}rune(e,t){const s=this.newInst(P.RUNE);s.nullable=!1;const r=this.prog.getInst(s.i);return r.runes=e,t&=M.FOLD_CASE,(e.length!==1||$.simpleFold(e[0])===e[0])&&(t&=-2),r.arg=t,s.out=new It(s.i<<1,s.i<<1),(t&M.FOLD_CASE)===0&&e.length===1||e.length===2&&e[0]===e[1]?r.op=P.RUNE1:e.length===2&&e[0]===0&&e[1]===$.MAX_RUNE?r.op=P.RUNE_ANY:e.length===4&&e[0]===0&&e[1]===L.CODES[`
`]-1&&e[2]===L.CODES[`
`]+1&&e[3]===$.MAX_RUNE&&(r.op=P.RUNE_ANY_NOT_NL),s}lookBehind(e,t){const s=Math.sign(t)*(Math.abs(t)+this.lbOffset),r=this.newInst(P.LB_WRITE);this.prog.getInst(r.i).arg=s;const i=this.rune(rh,0),o=this.star(i,!0),B=this.cat(o,e);this.prog.patch(B.out,r.i);const c=this.newInst(P.LB_CHECK);return this.prog.getInst(c.i).arg=s,this.prog.lbStarts.push(B.i),Math.abs(s)>this.prog.numLb&&(this.prog.numLb=Math.abs(s)),c.out=new It(c.i<<1,c.i<<1),c}compile(e){return Cc.walk(e,this.walker)}leaf(e){switch(e.op){case w.Op.NO_MATCH:return this.fail();case w.Op.EMPTY_MATCH:return this.nop();case w.Op.LITERAL:{if(e.runes.length===0)return this.nop();let t=null;for(let s of e.runes){let r=this.runeCache.get(s);r===void 0&&(r=new Int32Array([s]),this.runeCache.set(s,r));const i=this.rune(r,e.flags);t=t===null?i:this.cat(t,i)}return t}case w.Op.CHAR_CLASS:return this.rune(e.runes,e.flags);case w.Op.ANY_CHAR_NOT_NL:return this.rune(lI,0);case w.Op.ANY_CHAR:return this.rune(rh,0);case w.Op.BEGIN_LINE:return this.empty(H.EMPTY_BEGIN_LINE);case w.Op.END_LINE:return this.empty(H.EMPTY_END_LINE);case w.Op.BEGIN_TEXT:return this.empty(H.EMPTY_BEGIN_TEXT);case w.Op.END_TEXT:return this.empty(H.EMPTY_END_TEXT);case w.Op.WORD_BOUNDARY:return this.empty(H.EMPTY_WORD_BOUNDARY);case w.Op.NO_WORD_BOUNDARY:return this.empty(H.EMPTY_NO_WORD_BOUNDARY);case w.Op.CONCAT:case w.Op.ALTERNATE:return this.nop();default:throw new Ya("regexp: unhandled case in compile")}}enter(e){switch(e.op){case w.Op.PLB:case w.Op.NLB:case w.Op.STAR:case w.Op.PLUS:case w.Op.QUEST:return{sub:null};case w.Op.CAPTURE:return{bra:this.cap(e.cap<<1),sub:null};case w.Op.CONCAT:case w.Op.ALTERNATE:return{f:null};default:throw new Ya("regexp: unhandled case in compile")}}child(e,t,s){e.op===w.Op.CONCAT?t.f=t.f===null?s:this.cat(t.f,s):e.op===w.Op.ALTERNATE?t.f=t.f===null?s:this.alt(t.f,s):t.sub=s}leave(e,t){switch(e.op){case w.Op.PLB:case w.Op.NLB:return this.lookBehind(t.sub,e.lb);case w.Op.CAPTURE:{const s=this.cap(e.cap<<1|1);return this.cat(this.cat(t.bra,t.sub),s)}case w.Op.STAR:return this.star(t.sub,(e.flags&M.NON_GREEDY)!==0);case w.Op.PLUS:return this.plus(t.sub,(e.flags&M.NON_GREEDY)!==0);case w.Op.QUEST:return this.quest(t.sub,(e.flags&M.NON_GREEDY)!==0);case w.Op.CONCAT:case w.Op.ALTERNATE:return t.f;default:throw new Ya("regexp: unhandled case in compile")}}},hI=class Qe{static simplify(e){return e===null?null:Cc.walk(e,Qe.WALKER)}static WALKER={leaf:e=>Qe.leaf(e),enter:e=>Qe.enter(e),child:(e,t,s,r)=>Qe.child(e,t,s,r),leave:(e,t)=>Qe.leave(e,t)};static leaf(e){if(e.op===w.Op.CHAR_CLASS){if(e.runes===null)return e;if(e.runes.length===0)return new w(w.Op.NO_MATCH);if(e.runes.length===2&&e.runes[0]===0&&e.runes[1]===$.MAX_RUNE)return new w(w.Op.ANY_CHAR);if(e.runes.length===4&&e.runes[0]===0&&e.runes[1]===L.CODES[`
`]-1&&e.runes[2]===L.CODES[`
`]+1&&e.runes[3]===$.MAX_RUNE)return new w(w.Op.ANY_CHAR_NOT_NL)}return e}static enter(e){switch(e.op){case w.Op.PLB:case w.Op.NLB:case w.Op.CAPTURE:case w.Op.STAR:case w.Op.PLUS:case w.Op.QUEST:return{sub:null};case w.Op.CONCAT:case w.Op.ALTERNATE:return{subs:[],changed:!1};case w.Op.REPEAT:return e.min===0&&e.max===0?{result:new w(w.Op.EMPTY_MATCH)}:{sub:null};default:return{result:e}}}static child(e,t,s,r){if(t.subs===void 0){t.sub=s;return}if(s!==e.subs[r]&&(t.changed=!0),e.op===w.Op.CONCAT){if(s.op===w.Op.NO_MATCH){t.result=new w(w.Op.NO_MATCH);return}if(s.op===w.Op.EMPTY_MATCH){t.changed=!0;return}if(s.op===w.Op.CONCAT){t.changed=!0;for(let i=0;i<s.subs.length;i++)t.subs.push(s.subs[i]);return}}else{if(s.op===w.Op.NO_MATCH){t.changed=!0;return}if(s.op===w.Op.ALTERNATE){t.changed=!0;for(let i=0;i<s.subs.length;i++)t.subs.push(s.subs[i]);return}}t.subs.push(s)}static leave(e,t){switch(e.op){case w.Op.PLB:case w.Op.NLB:case w.Op.CAPTURE:{const s=t.sub;if(s!==e.subs[0]){const r=w.fromRegexp(e);return r.runes=new Int32Array(0),r.subs=[s],r}return e}case w.Op.CONCAT:case w.Op.ALTERNATE:if(t.changed){const s=t.subs;if(s.length===0)return new w(e.op===w.Op.CONCAT?w.Op.EMPTY_MATCH:w.Op.NO_MATCH);if(s.length===1)return s[0];const r=w.fromRegexp(e);return r.runes=new Int32Array(0),r.subs=s,r}return e;case w.Op.STAR:case w.Op.PLUS:case w.Op.QUEST:return Qe.simplify1(e.op,e.flags,t.sub,e);case w.Op.REPEAT:return Qe.simplifyRepeat(e,t.sub);default:return e}}static simplifyRepeat(e,t){if(e.max===-1){if(e.min===0)return Qe.simplify1(w.Op.STAR,e.flags,t,null);if(e.min===1)return Qe.simplify1(w.Op.PLUS,e.flags,t,null);const r=[];for(let i=0;i<e.min-1;i++)r.push(t);return r.push(Qe.simplify1(w.Op.PLUS,e.flags,t,null)),Qe.concat(r)}if(e.min===1&&e.max===1)return t;let s=null;if(e.min>0){s=[];for(let r=0;r<e.min;r++)s.push(t)}if(e.max>e.min){let r=Qe.simplify1(w.Op.QUEST,e.flags,t,null);for(let i=e.min+1;i<e.max;i++)r=Qe.simplify1(w.Op.QUEST,e.flags,Qe.concat([t,r]),null);if(s===null)return r;s.push(r)}return s!==null?Qe.concat(s):new w(w.Op.NO_MATCH)}static concat(e){const t=[];for(let r=0;r<e.length;r++){const i=e[r];if(i.op===w.Op.NO_MATCH)return new w(w.Op.NO_MATCH);if(i.op!==w.Op.EMPTY_MATCH){if(i.op===w.Op.CONCAT){for(let o=0;o<i.subs.length;o++)t.push(i.subs[o]);continue}t.push(i)}}if(t.length===0)return new w(w.Op.EMPTY_MATCH);if(t.length===1)return t[0];const s=new w(w.Op.CONCAT);return s.subs=t,s}static simplify1(e,t,s,r){if(s.op===w.Op.EMPTY_MATCH)return s;if(s.op===w.Op.NO_MATCH)return e===w.Op.PLUS?s:new w(w.Op.EMPTY_MATCH);if(e===s.op&&(t&M.NON_GREEDY)===(s.flags&M.NON_GREEDY))return s;if(r!==null&&r.op===e&&(r.flags&M.NON_GREEDY)===(t&M.NON_GREEDY)&&s===r.subs[0])return r;const i=new w(e);return i.flags=t,i.subs=[s],i}},le=class{constructor(n,e){this.sign=n,this.cls=e}};const ih=[48,57],oh=[9,10,12,13,32,32],ah=[48,57,65,90,95,95,97,122],Bh=new Map([["\\d",new le(1,ih)],["\\D",new le(-1,ih)],["\\s",new le(1,oh)],["\\S",new le(-1,oh)],["\\w",new le(1,ah)],["\\W",new le(-1,ah)]]),ch=[48,57,65,90,97,122],lh=[65,90,97,122],uh=[0,127],hh=[9,9,32,32],fh=[0,31,127,127],Ch=[48,57],dh=[33,126],ph=[97,122],gh=[32,126],mh=[33,47,58,64,91,96,123,126],Eh=[9,13,32,32],_h=[65,90],Dh=[48,57,65,90,95,95,97,122],wh=[48,57,65,70,97,102],Ih=new Map([["[:alnum:]",new le(1,ch)],["[:^alnum:]",new le(-1,ch)],["[:alpha:]",new le(1,lh)],["[:^alpha:]",new le(-1,lh)],["[:ascii:]",new le(1,uh)],["[:^ascii:]",new le(-1,uh)],["[:blank:]",new le(1,hh)],["[:^blank:]",new le(-1,hh)],["[:cntrl:]",new le(1,fh)],["[:^cntrl:]",new le(-1,fh)],["[:digit:]",new le(1,Ch)],["[:^digit:]",new le(-1,Ch)],["[:graph:]",new le(1,dh)],["[:^graph:]",new le(-1,dh)],["[:lower:]",new le(1,ph)],["[:^lower:]",new le(-1,ph)],["[:print:]",new le(1,gh)],["[:^print:]",new le(-1,gh)],["[:punct:]",new le(1,mh)],["[:^punct:]",new le(-1,mh)],["[:space:]",new le(1,Eh)],["[:^space:]",new le(-1,Eh)],["[:upper:]",new le(1,_h)],["[:^upper:]",new le(-1,_h)],["[:word:]",new le(1,Dh)],["[:^word:]",new le(-1,Dh)],["[:xdigit:]",new le(1,wh)],["[:^xdigit:]",new le(-1,wh)]]);var $n=class Xi{static charClassToString(e,t){let s="[";for(let r=0;r<t;r+=2){r>0&&(s+=" ");const i=e[r],o=e[r+1];i===o?s+=`0x${i.toString(16)}`:s+=`0x${i.toString(16)}-0x${o.toString(16)}`}return s+="]",s}static sortRanges(e,t){const s=t>>1,r=new Array(s);for(let o=0;o<s;o++)r[o]=o;r.sort((o,B)=>e[2*o]-e[2*B]||e[2*B+1]-e[2*o+1]);const i=e.slice(0,t);for(let o=0;o<s;o++)e[2*o]=i[2*r[o]],e[2*o+1]=i[2*r[o]+1]}constructor(e=H.emptyInts()){this.r=e,this.len=e.length}toArray(){return this.r instanceof Int32Array?this.len===this.r.length?this.r:this.r.subarray(0,this.len):new Int32Array(this.len===this.r.length?this.r:this.r.slice(0,this.len))}toGrowableArray(){return Array.isArray(this.r)?(this.r.length=this.len,this.r):Array.from(this.r.subarray(0,this.len))}cleanClass(){if(this.len<4)return this;Xi.sortRanges(this.r,this.len);let e=2;for(let t=2;t<this.len;t+=2){const s=this.r[t],r=this.r[t+1];if(s<=this.r[e-1]+1){r>this.r[e-1]&&(this.r[e-1]=r);continue}this.r[e]=s,this.r[e+1]=r,e+=2}return this.len=e,this}appendLiteral(e,t){return(t&M.FOLD_CASE)!==0?this.appendFoldedRange(e,e):this.appendRange(e,e)}appendRange(e,t){if(this.len>0){for(let s=2;s<=4;s+=2)if(this.len>=s){const r=this.r[this.len-s],i=this.r[this.len-s+1];if(e<=i+1&&r<=t+1)return e<r&&(this.r[this.len-s]=e),t>i&&(this.r[this.len-s+1]=t),this}}return this.r[this.len++]=e,this.r[this.len++]=t,this}appendFoldedRange(e,t){if(e<=$.MIN_FOLD&&t>=$.MAX_FOLD)return this.appendRange(e,t);if(t<$.MIN_FOLD||e>$.MAX_FOLD)return this.appendRange(e,t);e<$.MIN_FOLD&&(this.appendRange(e,$.MIN_FOLD-1),e=$.MIN_FOLD),t>$.MAX_FOLD&&(this.appendRange($.MAX_FOLD+1,t),t=$.MAX_FOLD);for(let s=e;s<=t;s++){this.appendRange(s,s);for(let r=$.simpleFold(s);r!==s;r=$.simpleFold(r))this.appendRange(r,r)}return this}appendClass(e){for(let t=0;t<e.length;t+=2)this.appendRange(e[t],e[t+1]);return this}appendFoldedClass(e){for(let t=0;t<e.length;t+=2)this.appendFoldedRange(e[t],e[t+1]);return this}appendNegatedClass(e){let t=0;for(let s=0;s<e.length;s+=2){const r=e[s],i=e[s+1];t<=r-1&&this.appendRange(t,r-1),t=i+1}return t<=$.MAX_RUNE&&this.appendRange(t,$.MAX_RUNE),this}appendTable(e){for(let t=0;t<e.length;++t){const s=e.getLo(t),r=e.getHi(t),i=e.getStride(t);if(i===1){this.appendRange(s,r);continue}for(let o=s;o<=r;o+=i)this.appendRange(o,o)}return this}appendNegatedTable(e){let t=0;for(let s=0;s<e.length;++s){const r=e.getLo(s),i=e.getHi(s),o=e.getStride(s);if(o===1){t<=r-1&&this.appendRange(t,r-1),t=i+1;continue}for(let B=r;B<=i;B+=o)t<=B-1&&this.appendRange(t,B-1),t=B+1}return t<=$.MAX_RUNE&&this.appendRange(t,$.MAX_RUNE),this}appendTableWithSign(e,t){return t<0?this.appendNegatedTable(e):this.appendTable(e)}negateClass(){let e=0,t=0;for(let s=0;s<this.len;s+=2){const r=this.r[s],i=this.r[s+1];e<=r-1&&(this.r[t]=e,this.r[t+1]=r-1,t+=2),e=i+1}return this.len=t,e<=$.MAX_RUNE&&(this.r[this.len++]=e,this.r[this.len++]=$.MAX_RUNE),this}appendClassWithSign(e,t){return t<0?this.appendNegatedClass(e):this.appendClass(e)}appendGroup(e,t){let s=e.cls;return t&&(s=new Xi().appendFoldedClass(s).cleanClass().toArray()),this.appendClassWithSign(s,e.sign)}toString(){return Xi.charClassToString(this.r,this.len)}},fI=class{constructor(n){this.str=n,this.position=0}pos(){return this.position}rewindTo(n){this.position=n}more(){return this.position<this.str.length}peek(){return this.str.codePointAt(this.position)}skip(n){this.position+=n}skipString(n){this.position+=n.length}pop(){const n=this.str.codePointAt(this.position);return this.position+=H.charCount(n),n}lookingAt(n){return this.str.startsWith(n,this.position)}rest(){return this.str.substring(this.position)}from(n){return this.str.substring(n,this.position)}toString(){return this.rest()}},CI=class q{static ERR_INTERNAL_ERROR="regexp/syntax: internal error";static ERR_INVALID_CHAR_RANGE="invalid character class range";static ERR_INVALID_ESCAPE="invalid escape sequence";static ERR_INVALID_NAMED_CAPTURE="invalid named capture";static ERR_INVALID_PERL_OP="invalid or unsupported Perl syntax";static ERR_INVALID_REPEAT_OP="invalid nested repetition operator";static ERR_INVALID_REPEAT_SIZE="invalid repeat count";static ERR_MISSING_BRACKET="missing closing ]";static ERR_MISSING_PAREN="missing closing )";static ERR_MISSING_REPEAT_ARGUMENT="missing argument to repetition operator";static ERR_TRAILING_BACKSLASH="trailing backslash at end of expression";static ERR_DUPLICATE_NAMED_CAPTURE="duplicate capture group name";static ERR_UNEXPECTED_PAREN="unexpected )";static ERR_NESTING_DEPTH="expression nests too deeply";static ERR_LARGE="expression too large";static ERR_INVALID_CAPTURE_IN_LOOKBEHIND="invalid capture in lookbehind";static MAX_HEIGHT=1e3;static MAX_SIZE=1398101;static MAX_RUNES=33554432;static ANY_TABLE=new p(new Uint32Array([0,$.MAX_RUNE,1]));static ASCII_TABLE=new p(new Uint32Array([0,127,1]));static ASCII_FOLD_TABLE=new p(new Uint32Array([0,127,1,383,383,1,8490,8490,1]));static unicodeTable(e){return e==="Any"?{tab:q.ANY_TABLE,fold:q.ANY_TABLE,sign:1}:e==="Ascii"?{tab:q.ASCII_TABLE,fold:q.ASCII_FOLD_TABLE,sign:1}:e==="Assigned"?{tab:dt.CATEGORIES.get("Cn"),fold:dt.CATEGORIES.get("Cn"),sign:-1}:e==="Lc"?{tab:dt.CATEGORIES.get("LC"),fold:dt.FOLD_CATEGORIES.get("LC"),sign:1}:dt.CATEGORIES.has(e)?{tab:dt.CATEGORIES.get(e),fold:dt.FOLD_CATEGORIES.get(e),sign:1}:dt.SCRIPTS.has(e)?{tab:dt.SCRIPTS.get(e),fold:dt.FOLD_SCRIPT.get(e),sign:1}:null}static minFoldRune(e){if(e<$.MIN_FOLD||e>$.MAX_FOLD)return e;let t=e;const s=e;for(e=$.simpleFold(e);e!==s;e=$.simpleFold(e))t>e&&(t=e);return t}static leadingRegexp(e){if(e.op===w.Op.EMPTY_MATCH)return null;if(e.op===w.Op.CONCAT&&e.subs.length>0){const t=e.subs[0];return t.op===w.Op.EMPTY_MATCH?null:t}return e}static literalRegexp(e,t){const s=new w(w.Op.LITERAL);return s.flags=t,s.runes=H.stringToRunes(e),s}static parse(e,t){return new q(e,t).parseInternal()}static parseRepeat(e){const t=e.pos();if(!e.more()||!e.lookingAt("{"))return-1;e.skip(1);const s=q.parseInt(e);if(s===-1||!e.more())return-1;let r;if(!e.lookingAt(","))r=s;else{if(e.skip(1),!e.more())return-1;if(e.lookingAt("}"))r=-1;else if((r=q.parseInt(e))===-1)return-1}if(!e.more()||!e.lookingAt("}"))return-1;if(e.skip(1),s<0||s>1e3||r===-2||r>1e3||r>=0&&s>r)throw new de(q.ERR_INVALID_REPEAT_SIZE,e.from(t));return s<<16|r&$.MAX_BMP}static isValidCaptureName(e){if(e.length===0)return!1;for(let t=0;t<e.length;t++){const s=e.codePointAt(t);if(s!==L.CODES._&&!H.isalnum(s))return!1}return!0}static parseInt(e){const t=e.pos();for(;e.more()&&e.peek()>=L.CODES[0]&&e.peek()<=L.CODES[9];)e.skip(1);const s=e.from(t);return s.length===0||s.length>1&&s.codePointAt(0)===L.CODES[0]?-1:s.length>8?-2:parseInt(s,10)}static isCharClass(e){return e.op===w.Op.LITERAL&&e.runes.length===1||e.op===w.Op.CHAR_CLASS||e.op===w.Op.ANY_CHAR_NOT_NL||e.op===w.Op.ANY_CHAR}static matchRune(e,t){switch(e.op){case w.Op.LITERAL:return e.runes.length===1&&e.runes[0]===t;case w.Op.CHAR_CLASS:for(let s=0;s<e.runes.length;s+=2)if(e.runes[s]<=t&&t<=e.runes[s+1])return!0;return!1;case w.Op.ANY_CHAR_NOT_NL:return t!==L.CODES[`
`];case w.Op.ANY_CHAR:return!0}return!1}static mergeCharClass(e,t){switch(e.op){case w.Op.ANY_CHAR:break;case w.Op.ANY_CHAR_NOT_NL:q.matchRune(t,L.CODES[`
`])&&(e.op=w.Op.ANY_CHAR);break;case w.Op.CHAR_CLASS:{const s=new $n(Array.isArray(e.runes)?e.runes:Array.from(e.runes));t.op===w.Op.LITERAL?s.appendLiteral(t.runes[0],t.flags):s.appendClass(t.runes),e.runes=s.toGrowableArray();break}case w.Op.LITERAL:if(t.runes[0]===e.runes[0]&&t.flags===e.flags)break;e.op=w.Op.CHAR_CLASS,e.runes=new $n().appendLiteral(e.runes[0],e.flags).appendLiteral(t.runes[0],t.flags).toGrowableArray()}}static parseEscape(e){const t=e.pos();if(e.skip(1),!e.more())throw new de(q.ERR_TRAILING_BACKSLASH);let s=e.pop();e:switch(s){case L.CODES[1]:case L.CODES[2]:case L.CODES[3]:case L.CODES[4]:case L.CODES[5]:case L.CODES[6]:case L.CODES[7]:if(!e.more()||e.peek()<L.CODES[0]||e.peek()>L.CODES[7])break;case L.CODES[0]:{let r=s-L.CODES[0];for(let i=1;i<3&&!(!e.more()||e.peek()<L.CODES[0]||e.peek()>L.CODES[7]);i++)r=r*8+e.peek()-L.CODES[0],e.skip(1);return r}case L.CODES.x:{if(!e.more())break;if(s=e.pop(),s===L.CODES["{"]){let o=0,B=0;for(;;){if(!e.more())break e;if(s=e.pop(),s===L.CODES["}"])break;const c=H.unhex(s);if(c<0||(B=B*16+c,B>$.MAX_RUNE))break e;o++}if(o===0)break e;return B}const r=H.unhex(s);if(!e.more())break;s=e.pop();const i=H.unhex(s);if(r<0||i<0)break;return r*16+i}case L.CODES.a:return L.CODES["\x07"];case L.CODES.f:return L.CODES["\f"];case L.CODES.n:return L.CODES[`
`];case L.CODES.r:return L.CODES["\r"];case L.CODES.t:return L.CODES["	"];case L.CODES.v:return L.CODES["\v"];default:if(s<=$.MAX_ASCII&&!H.isalnum(s))return s}throw new de(q.ERR_INVALID_ESCAPE,e.from(t))}static parseClassChar(e,t){if(!e.more())throw new de(q.ERR_MISSING_BRACKET,e.from(t));return e.lookingAt("\\")?q.parseEscape(e):e.pop()}static hasCapture(e){if(e===null)return!1;if(e.op===w.Op.CAPTURE)return!0;if(e.subs){for(let t of e.subs)if(q.hasCapture(t))return!0}return!1}constructor(e,t=0){this.wholeRegexp=e,this.flags=t,this.numCap=0,this.namedGroups=Object.create(null),this.stack=[],this.free=null,this.numRegexp=0,this.numRunes=0,this.repeats=0,this.height=null,this.size=null,this.nlb=0}newRegexp(e){let t=this.free;return t!==null&&t.subs!==null&&t.subs.length>0?(this.free=t.subs[0],t.reinit(),t.op=e):(t=new w(e),this.numRegexp+=1),t}reuse(e){this.height!==null&&this.height.has(e)&&this.height.delete(e),e.subs!==null&&e.subs.length>0&&(e.subs[0]=this.free),this.free=e}checkLimits(e){if(this.numRunes>q.MAX_RUNES)throw new de(q.ERR_LARGE);this.checkSize(e),this.checkHeight(e)}checkSize(e){if(this.size===null){if(this.repeats===0&&(this.repeats=1),e.op===w.Op.REPEAT){let t=e.max;t===-1&&(t=e.min),t<=0&&(t=1),t>Math.floor(q.MAX_SIZE/this.repeats)?this.repeats=q.MAX_SIZE:this.repeats*=t}if(this.numRegexp<Math.floor(q.MAX_SIZE/this.repeats))return;this.size=new Map;for(let t of this.stack)this.checkSize(t)}if(this.calcSize(e,!0)>q.MAX_SIZE)throw new de(q.ERR_LARGE)}calcSize(e,t=!1){if(!t&&this.size!==null&&this.size.has(e))return this.size.get(e);let s=0;switch(e.op){case w.Op.LITERAL:s=e.runes.length;break;case w.Op.PLB:case w.Op.NLB:case w.Op.CAPTURE:case w.Op.STAR:s=2+this.calcSize(e.subs[0]);break;case w.Op.PLUS:case w.Op.QUEST:s=1+this.calcSize(e.subs[0]);break;case w.Op.CONCAT:for(let r of e.subs)s=s+this.calcSize(r);break;case w.Op.ALTERNATE:for(let r of e.subs)s=s+this.calcSize(r);e.subs.length>1&&(s=s+e.subs.length-1);break;case w.Op.REPEAT:{let r=this.calcSize(e.subs[0]);if(e.max===-1){e.min===0?s=2+r:s=1+e.min*r;break}s=e.max*r+(e.max-e.min);break}}return s=Math.max(1,s),this.size===null&&(this.size=new Map),this.size.set(e,s),s}checkHeight(e){if(!(this.numRegexp<q.MAX_HEIGHT)){if(this.height===null){this.height=new Map;for(let t of this.stack)this.checkHeight(t)}if(this.calcHeight(e,!0)>q.MAX_HEIGHT)throw new de(q.ERR_NESTING_DEPTH)}}calcHeight(e,t=!1){if(!t&&this.height!==null&&this.height.has(e))return this.height.get(e);let s=1;for(let r of e.subs){const i=this.calcHeight(r);s<1+i&&(s=1+i)}return this.height===null&&(this.height=new Map),this.height.set(e,s),s}pop(){return this.stack.pop()}popToPseudo(){const e=this.stack.length;let t=e;for(;t>0&&!w.isPseudoOp(this.stack[t-1].op);)t--;return this.stack.splice(t,e-t)}push(e){if(this.numRunes+=e.runes.length,e.op===w.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]===e.runes[1]){if(this.maybeConcat(e.runes[0],this.flags&-2))return null;e.op=w.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags&-2}else if(e.op===w.Op.CHAR_CLASS&&e.runes.length===4&&e.runes[0]===e.runes[1]&&e.runes[2]===e.runes[3]&&$.simpleFold(e.runes[0])===e.runes[2]&&$.simpleFold(e.runes[2])===e.runes[0]||e.op===w.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]+1===e.runes[1]&&$.simpleFold(e.runes[0])===e.runes[1]&&$.simpleFold(e.runes[1])===e.runes[0]){if(this.maybeConcat(e.runes[0],this.flags|M.FOLD_CASE))return null;e.op=w.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags|M.FOLD_CASE}else this.maybeConcat(-1,0);return this.stack.push(e),this.checkLimits(e),e}maybeConcat(e,t){const s=this.stack.length;if(s<2)return!1;const r=this.stack[s-1],i=this.stack[s-2];if(r.op!==w.Op.LITERAL||i.op!==w.Op.LITERAL||(r.flags&M.FOLD_CASE)!==(i.flags&M.FOLD_CASE))return!1;Array.isArray(i.runes)||(i.runes=Array.from(i.runes));for(let o=0;o<r.runes.length;o++)i.runes.push(r.runes[o]);return e>=0?(r.runes=[e],r.flags=t,!0):(this.pop(),this.reuse(r),!1)}newLiteral(e,t){const s=this.newRegexp(w.Op.LITERAL);return s.flags=t,(t&M.FOLD_CASE)!==0&&(e=q.minFoldRune(e)),s.runes=[e],s}literal(e){this.push(this.newLiteral(e,this.flags))}op(e){const t=this.newRegexp(e);return t.flags=this.flags,this.push(t)}repeat(e,t,s,r,i,o){let B=this.flags;if((B&M.PERL_X)!==0&&(i.more()&&i.lookingAt("?")&&(i.skip(1),B^=M.NON_GREEDY),o!==-1))throw new de(q.ERR_INVALID_REPEAT_OP,i.from(o));const c=this.stack.length;if(c===0)throw new de(q.ERR_MISSING_REPEAT_ARGUMENT,i.from(r));const l=this.stack[c-1];if(w.isPseudoOp(l.op))throw new de(q.ERR_MISSING_REPEAT_ARGUMENT,i.from(r));const f=this.newRegexp(e);if(f.min=t,f.max=s,f.flags=B,f.subs=[l],this.stack[c-1]=f,this.checkLimits(f),e===w.Op.REPEAT&&(t>=2||s>=2)&&!this.repeatIsValid(f,1e3))throw new de(q.ERR_INVALID_REPEAT_SIZE,i.from(r))}repeatIsValid(e,t){if(e.op===w.Op.REPEAT){let s=e.max;if(s===0)return!0;if(s<0&&(s=e.min),s>t)return!1;s>0&&(t=Math.trunc(t/s))}for(let s of e.subs)if(!this.repeatIsValid(s,t))return!1;return!0}concat(){this.maybeConcat(-1,0);const e=this.popToPseudo();return e.length===0?this.push(this.newRegexp(w.Op.EMPTY_MATCH)):this.push(this.collapse(e,w.Op.CONCAT))}alternate(){const e=this.popToPseudo();return e.length>0&&this.cleanAlt(e[e.length-1]),e.length===0?this.push(this.newRegexp(w.Op.NO_MATCH)):this.push(this.collapse(e,w.Op.ALTERNATE))}cleanAlt(e){e.op===w.Op.CHAR_CLASS&&(e.runes=new $n(Array.from(e.runes)).cleanClass().toArray(),e.runes.length===2&&e.runes[0]===0&&e.runes[1]===$.MAX_RUNE?(e.runes=new Int32Array(0),e.op=w.Op.ANY_CHAR):e.runes.length===4&&e.runes[0]===0&&e.runes[1]===L.CODES[`
`]-1&&e.runes[2]===L.CODES[`
`]+1&&e.runes[3]===$.MAX_RUNE&&(e.runes=new Int32Array(0),e.op=w.Op.ANY_CHAR_NOT_NL))}collapse(e,t){if(e.length===1)return e[0];let s=0;for(let B of e)s+=B.op===t?B.subs.length:1;let r=new Array(s).fill(null),i=0;for(let B of e)if(B.op===t){for(let c=0;c<B.subs.length;c++)r[i++]=B.subs[c];this.reuse(B)}else r[i++]=B;let o=this.newRegexp(t);if(o.subs=r,t===w.Op.ALTERNATE&&(o.subs=this.factor(o.subs),o.subs.length===1)){const B=o;o=o.subs[0],this.reuse(B)}return o}factor(e){if(e.length<2)return e;let t=0,s=e.length,r=0,i=null,o=0,B=0,c=0;for(let f=0;f<=s;f++){let C=null,m=0,v=0;if(f<s){let R=e[t+f];if(R.op===w.Op.CONCAT&&R.subs.length>0&&(R=R.subs[0]),R.op===w.Op.LITERAL&&(C=R.runes,m=R.runes.length,v=R.flags&M.FOLD_CASE),v===B){let N=0;for(;N<o&&N<m&&i[N]===C[N];)N++;if(N>0){o=N;continue}}}if(f!==c)if(f===c+1)e[r++]=e[t+c];else{const R=this.newRegexp(w.Op.LITERAL);R.flags=B,R.runes=i.slice(0,o);for(let J=c;J<f;J++)e[t+J]=this.removeLeadingString(e[t+J],o),this.checkLimits(e[t+J]);const N=this.collapse(e.slice(t+c,t+f),w.Op.ALTERNATE),x=this.newRegexp(w.Op.CONCAT);x.subs=[R,N],e[r++]=x}c=f,i=C,o=m,B=v}s=r,t=0,c=0,r=0;let l=null;for(let f=0;f<=s;f++){let C=null;if(!(f<s&&(C=q.leadingRegexp(e[t+f]),l!==null&&l.equals(C)&&(q.isCharClass(l)||l.op===w.Op.REPEAT&&l.min===l.max&&q.isCharClass(l.subs[0]))))){if(f!==c)if(f===c+1)e[r++]=e[t+c];else{const m=l;for(let N=c;N<f;N++){const x=N!==c;e[t+N]=this.removeLeadingRegexp(e[t+N],x),this.checkLimits(e[t+N])}const v=this.collapse(e.slice(t+c,t+f),w.Op.ALTERNATE),R=this.newRegexp(w.Op.CONCAT);R.subs=[m,v],e[r++]=R}c=f,l=C}}s=r,t=0,c=0,r=0;for(let f=0;f<=s;f++)if(!(f<s&&q.isCharClass(e[t+f]))){if(f!==c)if(f===c+1)e[r++]=e[t+c];else{let C=c;for(let v=c+1;v<f;v++){const R=e[t+C],N=e[t+v];(R.op<N.op||R.op===N.op&&(R.runes!==null?R.runes.length:0)<(N.runes!==null?N.runes.length:0))&&(C=v)}const m=e[t+c];e[t+c]=e[t+C],e[t+C]=m;for(let v=c+1;v<f;v++)q.mergeCharClass(e[t+c],e[t+v]),this.reuse(e[t+v]);this.cleanAlt(e[t+c]),e[r++]=e[t+c]}f<s&&(e[r++]=e[t+f]),c=f+1}s=r,t=0,c=0,r=0;for(let f=0;f<s;++f)f+1<s&&e[t+f].op===w.Op.EMPTY_MATCH&&e[t+f+1].op===w.Op.EMPTY_MATCH||(e[r++]=e[t+f]);return s=r,t=0,e.slice(t,s)}removeLeadingString(e,t){if(e.op===w.Op.CONCAT&&e.subs.length>0){const s=this.removeLeadingString(e.subs[0],t);if(e.subs[0]=s,s.op===w.Op.EMPTY_MATCH)switch(this.reuse(s),e.subs.length){case 0:case 1:e.op=w.Op.EMPTY_MATCH,e.subs=w.emptySubs();break;case 2:{const r=e;e=e.subs[1],this.reuse(r);break}default:e.subs=e.subs.slice(1,e.subs.length)}return e}return e.op===w.Op.LITERAL&&(e.runes=e.runes.slice(t,e.runes.length),e.runes.length===0&&(e.op=w.Op.EMPTY_MATCH)),e}removeLeadingRegexp(e,t){if(e.op===w.Op.CONCAT&&e.subs.length>0){switch(t&&this.reuse(e.subs[0]),e.subs=e.subs.slice(1,e.subs.length),e.subs.length){case 0:e.op=w.Op.EMPTY_MATCH,e.subs=w.emptySubs();break;case 1:{const s=e;e=e.subs[0],this.reuse(s);break}}return e}return t&&this.reuse(e),this.newRegexp(w.Op.EMPTY_MATCH)}parseInternal(){if((this.flags&M.LITERAL)!==0)return q.literalRegexp(this.wholeRegexp,this.flags);let e=-1,t=-1,s=-1;const r=new fI(this.wholeRegexp);for(;r.more();){let i=-1;e:switch(r.peek()){case L.CODES["("]:if((this.flags&M.LOOKBEHIND)!==0){if(r.lookingAt("(?<=")){this.parsePosLookBehind(),r.skip(4);break}if(r.lookingAt("(?<!")){this.parseNegLookBehind(),r.skip(4);break}}if((this.flags&M.PERL_X)!==0&&r.lookingAt("(?")){this.parsePerlFlags(r);break}this.op(w.Op.LEFT_PAREN).cap=++this.numCap,r.skip(1);break;case L.CODES["|"]:this.parseVerticalBar(),r.skip(1);break;case L.CODES[")"]:this.parseRightParen(),r.skip(1);break;case L.CODES["^"]:(this.flags&M.ONE_LINE)!==0?this.op(w.Op.BEGIN_TEXT):this.op(w.Op.BEGIN_LINE),r.skip(1);break;case L.CODES.$:(this.flags&M.ONE_LINE)!==0?this.op(w.Op.END_TEXT).flags|=M.WAS_DOLLAR:this.op(w.Op.END_LINE),r.skip(1);break;case L.CODES["."]:(this.flags&M.DOT_NL)!==0?this.op(w.Op.ANY_CHAR):this.op(w.Op.ANY_CHAR_NOT_NL),r.skip(1);break;case L.CODES["["]:this.parseClass(r);break;case L.CODES["*"]:case L.CODES["+"]:case L.CODES["?"]:{i=r.pos();let o=null;switch(r.pop()){case L.CODES["*"]:o=w.Op.STAR;break;case L.CODES["+"]:o=w.Op.PLUS;break;case L.CODES["?"]:o=w.Op.QUEST}this.repeat(o,t,s,i,r,e);break}case L.CODES["{"]:{const o=r.pos(),B=q.parseRepeat(r);if(B<0){r.rewindTo(o),this.literal(r.pop());break}i=o,t=B>>16,s=(B&$.MAX_BMP)<<16>>16,this.repeat(w.Op.REPEAT,t,s,i,r,e);break}case L.CODES["\\"]:{const o=r.pos();if(r.skip(1),(this.flags&M.PERL_X)!==0&&r.more())switch(r.pop()){case L.CODES.A:this.op(w.Op.BEGIN_TEXT);break e;case L.CODES.b:this.op(w.Op.WORD_BOUNDARY);break e;case L.CODES.B:this.op(w.Op.NO_WORD_BOUNDARY);break e;case L.CODES.C:throw new de(q.ERR_INVALID_ESCAPE,"\\C");case L.CODES.Q:{let l=r.rest();const f=l.indexOf("\\E");f>=0?(l=l.substring(0,f),r.skipString(l),r.skipString("\\E")):r.skipString(l);let C=0;for(;C<l.length;){const m=l.codePointAt(C);this.literal(m),C+=H.charCount(m)}break e}case L.CODES.z:this.op(w.Op.END_TEXT);break e;default:r.rewindTo(o)}else r.rewindTo(o);const B=this.newRegexp(w.Op.CHAR_CLASS);if(B.flags=this.flags,r.lookingAt("\\p")||r.lookingAt("\\P")){const l=new $n;if(this.parseUnicodeClass(r,l)){B.runes=l.toArray(),this.push(B);break e}}const c=new $n;if(this.parsePerlClassEscape(r,c)){B.runes=c.toArray(),this.push(B);break e}r.rewindTo(o),this.reuse(B),this.literal(q.parseEscape(r));break}default:this.literal(r.pop())}e=i}if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length!==1)throw new de(q.ERR_MISSING_PAREN,this.wholeRegexp);return this.stack[0].namedGroups=this.namedGroups,this.stack[0]}parsePerlFlags(e){const t=e.pos(),s=e.rest();if(s.startsWith("(?P<")||s.startsWith("(?<")){const B=s.charAt(2)==="P"?4:3,c=s.indexOf(">");if(c<0)throw new de(q.ERR_INVALID_NAMED_CAPTURE,s);const l=s.substring(B,c);if(e.skipString(l),e.skip(B+1),!q.isValidCaptureName(l))throw new de(q.ERR_INVALID_NAMED_CAPTURE,s.substring(0,c+1));const f=this.op(w.Op.LEFT_PAREN);if(f.cap=++this.numCap,this.namedGroups[l])throw new de(q.ERR_DUPLICATE_NAMED_CAPTURE,l);this.namedGroups[l]=this.numCap,f.name=l;return}e.skip(2);let r=this.flags,i=1,o=!1;e:for(;e.more();){const B=e.pop();switch(B){case L.CODES.i:r|=M.FOLD_CASE,o=!0;break;case L.CODES.m:r&=-17,o=!0;break;case L.CODES.s:r|=M.DOT_NL,o=!0;break;case L.CODES.U:r|=M.NON_GREEDY,o=!0;break;case L.CODES["-"]:if(i<0)break e;i=-1,r=~r,o=!1;break;case L.CODES[":"]:case L.CODES[")"]:if(i<0){if(!o)break e;r=~r}B===L.CODES[":"]&&this.op(w.Op.LEFT_PAREN),this.flags=r;return;default:break e}}throw new de(q.ERR_INVALID_PERL_OP,e.from(t))}parsePosLookBehind(){const e=this.newRegexp(w.Op.LEFT_PAREN);return e.flags=this.flags,e.lb=++this.nlb,this.push(e)}parseNegLookBehind(){const e=this.newRegexp(w.Op.LEFT_PAREN);return e.flags=this.flags,e.lb=-++this.nlb,this.push(e)}parseVerticalBar(){this.concat(),this.swapVerticalBar()||this.op(w.Op.VERTICAL_BAR)}swapVerticalBar(){const e=this.stack.length;if(e>=3&&this.stack[e-2].op===w.Op.VERTICAL_BAR&&q.isCharClass(this.stack[e-1])&&q.isCharClass(this.stack[e-3])){let t=this.stack[e-1],s=this.stack[e-3];if(t.op>s.op){const r=s;s=t,t=r,this.stack[e-3]=s}return q.mergeCharClass(s,t),this.reuse(t),this.pop(),!0}if(e>=2){const t=this.stack[e-1],s=this.stack[e-2];if(s.op===w.Op.VERTICAL_BAR)return e>=3&&this.cleanAlt(this.stack[e-3]),this.stack[e-2]=t,this.stack[e-1]=s,!0}return!1}parseRightParen(){if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length<2)throw new de(q.ERR_UNEXPECTED_PAREN,this.wholeRegexp);const e=this.pop(),t=this.pop();if(t.op!==w.Op.LEFT_PAREN)throw new de(q.ERR_UNEXPECTED_PAREN,this.wholeRegexp);if(this.flags=t.flags,t.lb!==0){if(q.hasCapture(e))throw new de(q.ERR_INVALID_CAPTURE_IN_LOOKBEHIND,this.wholeRegexp);t.lb>0?t.op=w.Op.PLB:t.op=w.Op.NLB,t.subs=[e],this.push(t);return}t.cap===0?this.push(e):(t.op=w.Op.CAPTURE,t.subs=[e],this.push(t))}parsePerlClassEscape(e,t){const s=e.pos();if((this.flags&M.PERL_X)===0||!e.more()||e.pop()!==L.CODES["\\"]||!e.more())return!1;e.pop();const r=e.from(s),i=Bh.has(r)?Bh.get(r):null;return i===null?!1:(t.appendGroup(i,(this.flags&M.FOLD_CASE)!==0),!0)}parseNamedClass(e,t){const s=e.rest(),r=s.indexOf(":]");if(r<0)return!1;const i=s.substring(0,r+2);e.skipString(i);const o=Ih.has(i)?Ih.get(i):null;if(o===null)throw new de(q.ERR_INVALID_CHAR_RANGE,i);return t.appendGroup(o,(this.flags&M.FOLD_CASE)!==0),!0}parseUnicodeClass(e,t){const s=e.pos();if((this.flags&M.UNICODE_GROUPS)===0||!e.lookingAt("\\p")&&!e.lookingAt("\\P"))return!1;e.skip(1);let r=1,i=e.pop();if(i===L.CODES.P&&(r=-1),!e.more())throw e.rewindTo(s),new de(q.ERR_INVALID_CHAR_RANGE,e.rest());i=e.pop();let o;if(i!==L.CODES["{"])o=H.runeToString(i);else{const f=e.rest(),C=f.indexOf("}");if(C<0)throw e.rewindTo(s),new de(q.ERR_INVALID_CHAR_RANGE,e.rest());o=f.substring(0,C),e.skipString(o),e.skip(1)}o.length!==0&&o.codePointAt(0)===L.CODES["^"]&&(r=0-r,o=o.substring(1));const B=q.unicodeTable(o);if(B===null)throw new de(q.ERR_INVALID_CHAR_RANGE,e.from(s));B.sign<0&&(r=0-r);const c=B.tab,l=B.fold;if((this.flags&M.FOLD_CASE)===0||l===null)t.appendTableWithSign(c,r);else{const f=new $n().appendTable(c).appendTable(l).cleanClass().toArray();t.appendClassWithSign(Array.from(f),r)}return!0}parseClass(e){const t=e.pos();e.skip(1);const s=this.newRegexp(w.Op.CHAR_CLASS);s.flags=this.flags;const r=new $n;let i=1;e.more()&&e.lookingAt("^")&&(i=-1,e.skip(1),(this.flags&M.CLASS_NL)===0&&r.appendRange(L.CODES[`
`],L.CODES[`
`]));let o=!0;for(;!e.more()||e.peek()!==L.CODES["]"]||o;){if(e.more()&&e.lookingAt("-")&&(this.flags&M.PERL_X)===0&&!o){const f=e.rest();if(f==="-"||!f.startsWith("-]"))throw e.rewindTo(t),new de(q.ERR_INVALID_CHAR_RANGE,e.rest())}o=!1;const B=e.pos();if(e.lookingAt("[:")){if(this.parseNamedClass(e,r))continue;e.rewindTo(B)}if(this.parseUnicodeClass(e,r)||this.parsePerlClassEscape(e,r))continue;e.rewindTo(B);const c=q.parseClassChar(e,t);let l=c;if(e.more()&&e.lookingAt("-")){if(e.skip(1),e.more()&&e.lookingAt("]"))e.skip(-1);else if(l=q.parseClassChar(e,t),l<c)throw new de(q.ERR_INVALID_CHAR_RANGE,e.from(B))}(this.flags&M.FOLD_CASE)===0?r.appendRange(c,l):r.appendFoldedRange(c,l)}e.skip(1),r.cleanClass(),i<0&&r.negateClass(),s.runes=r.toArray(),this.push(s)}},dI=class zn{static initTest(e){const t=zn.compile(e),s=new zn(t.expr,t.prog,t.numSubexp,t.longest);return s.cond=t.cond,s.prefix=t.prefix,s.prefixUTF8=t.prefixUTF8,s.prefixComplete=t.prefixComplete,s.prefixRune=t.prefixRune,s.prefilter=t.prefilter,s.namedGroups=t.namedGroups,s}static compile(e){return zn.compileImpl(e,M.PERL,!1)}static compilePOSIX(e){return zn.compileImpl(e,M.POSIX,!0)}static compileImpl(e,t,s){let r=CI.parse(e,t);const i=r.maxCap(),o=r.namedGroups;r=hI.simplify(r);const B=BI.build(r),c=uI.compileRegexp(r),l=new zn(e,c,i,s);l.prefilter=B.type===oe.Type.NONE?null:B;const[f,C]=c.prefix();return l.prefixComplete=f,l.prefix=C,l.prefixUTF8=H.stringToUtf8ByteArray(l.prefix),l.prefix.length>0&&(l.prefixRune=l.prefix.codePointAt(0)),l.namedGroups=o,l}static match(e,t){return zn.compile(e).match(t)}constructor(e,t,s=0,r=0){this.expr=e,this.prog=t,this.numSubexp=s,this.longest=r,this.cond=t.startCond(),this.prefix=null,this.prefixUTF8=null,this.prefixComplete=!1,this.prefixRune=0,this.namedGroups=Object.create(null),this.machinePool=[],this.lazyDFA=null,this.onepass=nh.compile(this.prog),this.prefilter=null}get dfa(){return this.lazyDFA===null&&(this.lazyDFA=new YC(this.prog)),this.lazyDFA}matchPrefixComplete(e,t,s,r){if((s===M.ANCHOR_START||s===M.ANCHOR_BOTH)&&t!==0)return null;let i=-1,o=-1;const B=e.prefixLength(this);if(s===M.UNANCHORED){const c=e.index(this,t);if(c<0)return null;i=t+c,o=i+B}else if(s===M.ANCHOR_BOTH){if(e.endPos()!==B||e.index(this,0)!==0)return null;i=0,o=B}else if(s===M.ANCHOR_START){if(e.index(this,0)!==0)return null;i=0,o=B}if(i<0)return null;if(r>0){const c=new Int32Array(r).fill(-1);return c[0]=i,c[1]=o,Array.from(c)}return[]}createLookbehindState(){return this.prog.numLb>0?new Ww(this.prog):null}executeEngine(e,t,s,r,i=null){if(this.prefixComplete&&(r===0||this.numSubexp===0))return this.matchPrefixComplete(e,t,s,r);if(this.prefilter!==null&&s===M.UNANCHORED&&!this.prefilter.eval(e,t))return null;if(this.onepass!==null)return nh.execute(this,e,t,s,r);if(r>0)return this.prog.numLb===0&&e.endPos()<=Mi.maxBitStateLen(this.prog)?Mi.execute(this,e,t,s,r):this.doExecuteNFA(e,t,s,r,i);if(this.prog.numLb===0){const o=this.dfa.match(e,t,s);if(o!==null)return o?[]:null;if(e.endPos()<=Mi.maxBitStateLen(this.prog))return Mi.execute(this,e,t,s,r)}return this.doExecuteNFA(e,t,s,r,i)}numberOfCapturingGroups(){return this.numSubexp}numberOfInstructions(){return this.prog.numInst()}get(){return this.machinePool.length>0?this.machinePool.pop():null}reset(){this.machinePool.length=0}put(e){this.machinePool.push(e)}toString(){return this.expr}doExecuteNFA(e,t,s,r,i=null){let o=this.get();o||(o=Yw.fromRE2(this)),o.init(r);const B=o.match(e,t,s,i)?o.submatches():null;return this.put(o),B}match(e){return this.executeEngine(me.fromUTF16(e),0,M.UNANCHORED,0)!==null}matchWithGroup(e,t,s,r,i,o=null){return e instanceof as||(H.isByteArray(e)?e=Wn.utf8(e):e=Wn.utf16(e)),this.matchMachineInput(e,t,s,r,i,o)}matchMachineInput(e,t,s,r,i,o=null){if(t>s)return[!1,null];const B=e.isUTF16Encoding()?me.fromUTF16(e.asCharSequence(),0,s):me.fromUTF8(e.asBytes(),0,s),c=this.executeEngine(B,t,r,2*i,o);return c===null?[!1,null]:[!0,c]}matchUTF8(e){return this.executeEngine(me.fromUTF8(e),0,M.UNANCHORED,0)!==null}replaceAll(e,t){return this.replaceAllFunc(e,()=>t,2*e.length+1)}replaceFirst(e,t){return this.replaceAllFunc(e,()=>t,1)}replaceAllFunc(e,t,s){let r=0,i=0,o="";const B=me.fromUTF16(e),c=this.createLookbehindState();let l=0;for(;i<=e.length;){const f=this.executeEngine(B,i,M.UNANCHORED,2,c);if(f===null||f.length===0)break;o+=e.substring(r,f[0]),(f[1]>r||f[0]===0)&&(o+=t(e.substring(f[0],f[1])),l++),r=f[1];const C=B.step(i)&7;if(i+C>f[1]?i+=C:i+1>f[1]?i++:i=f[1],l>=s)break}return o+=e.substring(r),o}pad(e){if(e===null)return null;let t=(1+this.numSubexp)*2;if(e.length<t){let s=new Array(t).fill(-1);for(let r=0;r<e.length;r++)s[r]=e[r];e=s}return e}allMatches(e,t,s=r=>r){let r=[];const i=e.endPos();t<0&&(t=i+1);let o=0,B=0,c=-1;const l=this.createLookbehindState();for(;B<t&&o<=i;){const f=this.executeEngine(e,o,M.UNANCHORED,this.prog.numCap,l);if(f===null||f.length===0)break;let C=!0;if(f[1]===o){f[0]===c&&(C=!1);const m=e.step(o);m<0?o=i+1:o+=m&7}else o=f[1];c=f[1],C&&(r.push(s(this.pad(f))),B++)}return r}findUTF8(e){const t=this.executeEngine(me.fromUTF8(e),0,M.UNANCHORED,2);return t===null?null:e.slice(t[0],t[1])}findUTF8Index(e){const t=this.executeEngine(me.fromUTF8(e),0,M.UNANCHORED,2);return t===null?null:t.slice(0,2)}find(e){const t=this.executeEngine(me.fromUTF16(e),0,M.UNANCHORED,2);return t===null?"":e.substring(t[0],t[1])}findIndex(e){return this.executeEngine(me.fromUTF16(e),0,M.UNANCHORED,2)}findUTF8Submatch(e){const t=this.executeEngine(me.fromUTF8(e),0,M.UNANCHORED,this.prog.numCap);if(t===null)return null;const s=new Array(1+this.numSubexp).fill(null);for(let r=0;r<s.length;r++)2*r<t.length&&t[2*r]>=0&&(s[r]=e.slice(t[2*r],t[2*r+1]));return s}findUTF8SubmatchIndex(e){return this.pad(this.executeEngine(me.fromUTF8(e),0,M.UNANCHORED,this.prog.numCap))}findSubmatch(e){const t=this.executeEngine(me.fromUTF16(e),0,M.UNANCHORED,this.prog.numCap);if(t===null)return null;const s=new Array(1+this.numSubexp).fill(null);for(let r=0;r<s.length;r++)2*r<t.length&&t[2*r]>=0&&(s[r]=e.substring(t[2*r],t[2*r+1]));return s}findSubmatchIndex(e){return this.pad(this.executeEngine(me.fromUTF16(e),0,M.UNANCHORED,this.prog.numCap))}findAllUTF8(e,t){const s=this.allMatches(me.fromUTF8(e),t,r=>e.slice(r[0],r[1]));return s.length===0?null:s}findAllUTF8Index(e,t){const s=this.allMatches(me.fromUTF8(e),t,r=>r.slice(0,2));return s.length===0?null:s}findAll(e,t){const s=this.allMatches(me.fromUTF16(e),t,r=>e.substring(r[0],r[1]));return s.length===0?null:s}findAllIndex(e,t){const s=this.allMatches(me.fromUTF16(e),t,r=>r.slice(0,2));return s.length===0?null:s}findAllUTF8Submatch(e,t){const s=this.allMatches(me.fromUTF8(e),t,r=>{let i=new Array(r.length/2|0).fill(null);for(let o=0;o<i.length;o++)r[2*o]>=0&&(i[o]=e.slice(r[2*o],r[2*o+1]));return i});return s.length===0?null:s}findAllUTF8SubmatchIndex(e,t){const s=this.allMatches(me.fromUTF8(e),t);return s.length===0?null:s}findAllSubmatch(e,t){const s=this.allMatches(me.fromUTF16(e),t,r=>{let i=new Array(r.length/2|0).fill(null);for(let o=0;o<i.length;o++)r[2*o]>=0&&(i[o]=e.substring(r[2*o],r[2*o+1]));return i});return s.length===0?null:s}findAllSubmatchIndex(e,t){const s=this.allMatches(me.fromUTF16(e),t);return s.length===0?null:s}},pI=class Ts{static isHexadecimal(e){return"0"<=e&&e<="9"||"A"<=e&&e<="F"||"a"<=e&&e<="f"}static translate(e){let t="";if(Object.prototype.toString.call(e)==="[object RegExp]"&&(e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e=e.source),typeof e!="string")return e;let s="",r=!1,i=e.length;i===0&&(s="(?:)",r=!0);let o=!1,B=0;for(;B<i;){let l=e[B];if(l==="\\"){if(B+1<i)switch(l=e[B+1],l){case"\\":s+="\\\\",B+=2;continue;case"c":if(B+2<i){let m=e[B+2].charCodeAt(0);if(m>=65&&m<=90||m>=97&&m<=122){let v=m%32;s+="\\x",s+=(v>>4).toString(16).toUpperCase(),s+=(v&15).toString(16).toUpperCase(),B+=3,r=!0;continue}}s+="c",B+=2,r=!0;continue;case"u":if(B+2<i){if(e[B+2]==="{"){let m=B+3,v=!1,R=!1;for(;m<i;){const N=e[m];if(N==="}"){R=!0;break}if(!Ts.isHexadecimal(N))break;v=!0,m++}if(R&&v){s+="\\x",B+=2,r=!0;continue}}else if(B+5<i){let m=!0;for(let v=0;v<4;v++)if(!Ts.isHexadecimal(e[B+2+v])){m=!1;break}if(m){s+="\\x{"+e.substring(B+2,B+6)+"}",B+=6,r=!0;continue}}}s+="u",B+=2,r=!0;continue;case"x":{let m=!1;if(B+2<i&&e[B+2]==="{"){let v=B+3,R=!1,N=!1;for(;v<i;){const x=e[v];if(x==="}"){N=!0;break}if(!Ts.isHexadecimal(x))break;R=!0,v++}N&&R&&(m=!0)}else B+3<i&&Ts.isHexadecimal(e[B+2])&&Ts.isHexadecimal(e[B+3])&&(m=!0);m?(s+="\\x",B+=2):(s+="x",B+=2,r=!0);continue}case"n":case"r":case"t":case"a":case"f":case"v":case"d":case"D":case"s":case"S":case"w":case"W":case"b":case"B":case"p":case"P":case"A":case"z":case"Q":case"E":case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":s+="\\"+l,B+=2;continue;default:{let m=e.codePointAt(B+1);if(m>=48&&m<=57||m>=65&&m<=90||m>=97&&m<=122){let v=H.charCount(m);s+=e.substring(B+1,B+1+v),B+=v+1,r=!0}else{s+="\\";let v=H.charCount(m);s+=e.substring(B+1,B+1+v),B+=v+1}continue}}}else if(l==="/"){s+="\\/",B+=1,r=!0;continue}else if(l==="["){if(!o&&e[B+1]==="]"){s+="[^\\x00-\\x{10FFFF}]",B+=2,r=!0;continue}if(!o&&e[B+1]==="^"&&e[B+2]==="]"){s+="[\\x00-\\x{10FFFF}]",B+=3,r=!0;continue}o=!0}else if(l==="]")o=!1;else if(!o&&l==="("&&B+2<i&&e[B+1]==="?"&&e[B+2]==="<"&&B+3<i&&!"=!>)".includes(e[B+3])){s+="(?P<",B+=3,r=!0;continue}let f=e.codePointAt(B),C=H.charCount(f);s+=e.substring(B,B+C),B+=C}const c=r?s:e;return t.length>0?`(?${t})${c}`:c}};const yh=(n,e)=>{const t=n.matchArray();return t.index=n.start(0),t.input=e,t.groups=n.namedGroupsObject(),t};var dc=class Mt{static CASE_INSENSITIVE=Es.CASE_INSENSITIVE;static DOTALL=Es.DOTALL;static MULTILINE=Es.MULTILINE;static DISABLE_UNICODE_GROUPS=Es.DISABLE_UNICODE_GROUPS;static LONGEST_MATCH=Es.LONGEST_MATCH;static LOOKBEHINDS=Es.LOOKBEHINDS;static quote(e){return H.quoteMeta(e)}static quoteReplacement(e,t=!1){return Yu.quoteReplacement(e,t)}static translateRegExp(e){return pI.translate(e)}static compile(e,t=0){H.checkPattern(e),H.checkFlags(t);let s=e;(t&Mt.CASE_INSENSITIVE)!==0&&(s=`(?i)${s}`),(t&Mt.DOTALL)!==0&&(s=`(?s)${s}`),(t&Mt.MULTILINE)!==0&&(s=`(?m)${s}`);let r=M.PERL;(t&Mt.DISABLE_UNICODE_GROUPS)!==0&&(r&=-129),(t&Mt.LOOKBEHINDS)!==0&&(r|=M.LOOKBEHIND);const i=new Mt(e,t);return i.re2Input=dI.compileImpl(s,r,(t&Mt.LONGEST_MATCH)!==0),i}static matches(e,t){return Mt.compile(e).testExact(t)}static initTest(e,t,s){if(e==null)throw new Error("pattern is null");if(s==null)throw new Error("re2 is null");const r=new Mt(e,t);return r.re2Input=s,r}constructor(e,t){this.patternInput=e,this.flagsInput=t,this.re2Input=null}reset(){this.re2Input.reset()}flags(){return this.flagsInput}pattern(){return this.patternInput}re2(){return this.re2Input}matches(e){return this.testExact(e)}matcher(e){return H.isByteArray(e)&&(e=Wn.utf8(e)),new Yu(this,e)}test(e){return H.isByteArray(e)?this.re2Input.matchUTF8(e):this.re2Input.match(e)}testExact(e){const t=H.isByteArray(e)?me.fromUTF8(e):me.fromUTF16(e);return this.re2Input.executeEngine(t,0,M.ANCHOR_BOTH,0)!==null}exec(e){const t=this.matcher(e);return t.find()?yh(t,e):null}split(e,t=0){const s=this.matcher(e),r=[];let i=0,o=0;for(;s.find();){if(o===0&&s.end()===0){o=s.end();continue}if(t>0&&r.length===t-1)break;if(o===s.start()){if(t===0){i+=1,o=s.end();continue}}else for(;i>0;)r.push(""),i-=1;r.push(s.substring(o,s.start())),o=s.end()}if(t===0&&o!==s.inputLength()){for(;i>0;)r.push(""),i-=1;r.push(s.substring(o,s.inputLength()))}return(t!==0||r.length===0&&!(o===s.inputLength()&&o>0))&&r.push(s.substring(o,s.inputLength())),r}*matchAll(e){const t=this.matcher(e);for(;t.find();)yield yh(t,e)}toString(){return this.patternInput}programSize(){return this.re2Input.numberOfInstructions()}groupCount(){return this.re2Input.numberOfCapturingGroups()}namedGroups(){return this.re2Input.namedGroups}equals(e){return this===e?!0:e===null||this.constructor!==e.constructor?!1:this.flagsInput===e.flagsInput&&this.patternInput===e.patternInput}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qs="12.19.0";function gI(n){qs=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs=new $s("@firebase/firestore");function As(){return Bs.logLevel}function z(n,...e){if(Bs.logLevel<=Be.DEBUG){const t=e.map(pc);Bs.debug(`Firestore (${qs}): ${n}`,...t)}}function cs(n,...e){if(Bs.logLevel<=Be.ERROR){const t=e.map(pc);Bs.error(`Firestore (${qs}): ${n}`,...t)}}function tn(n,...e){if(Bs.logLevel<=Be.WARN){const t=e.map(pc);Bs.warn(`Firestore (${qs}): ${n}`,...t)}}function pc(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,ed(n,s,t)}function ed(n,e,t){let s=`FIRESTORE (${qs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw cs(s),new Error(s)}function W(n,e,t,s){let r="Unexpected state";typeof t=="string"?r=t:s=t,n||ed(e,r,s)}function pe(n,e){return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mI(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=mI(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<t&&(s+=e.charAt(r[i]%62))}return s}}function he(n,e){return n<e?-1:n>e?1:0}function OB(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const r=n.charAt(s),i=e.charAt(s);if(r!==i)return nB(r)===nB(i)?he(r,i):nB(r)?1:-1}return he(n.length,e.length)}const EI=55296,_I=57343;function nB(n){const e=n.charCodeAt(0);return e>=EI&&e<=_I}function Vs(n,e,t){return n.length===e.length&&n.every(((s,r)=>t(s,e[r])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,t){this.comparator=e,this.root=t||Ue.EMPTY}insert(e,t){return new ut(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ue.BLACK,null,null))}remove(e){return new ut(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ue.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Vi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Vi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Vi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Vi(this.root,e,this.comparator,!0)}}class Vi{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?s(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ue{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s??Ue.RED,this.left=r??Ue.EMPTY,this.right=i??Ue.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,i){return new Ue(e??this.key,t??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ue.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return Ue.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ne(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ne(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ne(27949);return e+(this.isRed()?0:1)}}Ue.EMPTY=null,Ue.RED=!0,Ue.BLACK=!1;Ue.EMPTY=new class{constructor(){this.size=0}get key(){throw ne(57766)}get value(){throw ne(16141)}get color(){throw ne(16727)}get left(){throw ne(29726)}get right(){throw ne(36894)}copy(e,t,s,r,i){return this}insert(e,t,s){return new Ue(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.comparator=e,this.data=new ut(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Th(this.data.getIterator())}getIteratorFrom(e){return new Th(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof Ve)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Ve(this.comparator);return t.data=e,t}}class Th{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Q extends Dt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gs="__name__";class xt{constructor(e,t,s){t===void 0?t=0:t>e.length&&ne(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&ne(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return xt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof xt?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const i=xt.compareSegments(e.get(r),t.get(r));if(i!==0)return i}return he(e.length,t.length)}static compareSegments(e,t){const s=xt.isNumericId(e),r=xt.isNumericId(t);return s&&!r?-1:!s&&r?1:s&&r?xt.extractNumericId(e).compare(xt.extractNumericId(t)):OB(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return hc.fromString(e.substring(4,e.length-2))}}class De extends xt{construct(e,t,s){return new De(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new Q(V.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((r=>r.length>0)))}return new De(t)}static emptyPath(){return new De([])}}const DI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;let gt=class Rs extends xt{construct(e,t,s){return new Rs(e,t,s)}static isValidIdentifier(e){return DI.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Rs.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Gs}static keyField(){return new Rs([Gs])}static fromServerFormat(e){const t=[];let s="",r=0;const i=()=>{if(s.length===0)throw new Q(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let o=!1;for(;r<e.length;){const B=e[r];if(B==="\\"){if(r+1===e.length)throw new Q(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Q(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else B==="`"?(o=!o,r++):B!=="."||o?(s+=B,r++):(i(),r++)}if(i(),o)throw new Q(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Rs(t)}static emptyPath(){return new Rs([])}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.fields=e,e.sort(gt.comparator)}static empty(){return new Nt([])}unionWith(e){let t=new Ve(gt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Nt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Vs(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function zs(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function wI(n,e){const t=[];for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&t.push(e(n[s],s,n));return t}function td(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.path=e}static fromPath(e){return new re(De.fromString(e))}static fromName(e){return new re(De.fromString(e).popFirst(5))}static empty(){return new re(De.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&De.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return De.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new re(new De(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function II(n,e,t){if(!t)throw new Q(V.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function yI(n,e,t,s){if(e===!0&&s===!0)throw new Q(V.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Ah(n){if(!re.isDocumentKey(n))throw new Q(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ri(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function mc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ne(12329,{type:typeof n})}function PB(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new Q(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=mc(n);throw new Q(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(n,e){const t={typeString:n};return e&&(t.value=e),t}function ii(n,e){if(!ri(n))throw new Q(V.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const r=e[s].typeString,i="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const o=n[s];if(r&&typeof o!==r){t=`JSON field '${s}' must be a ${r}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${s}' field to equal '${i.value}'`;break}}if(t)throw new Q(V.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh=-62135596800,vh=1e6;class fe{static now(){return fe.fromMillis(Date.now())}static fromDate(e){return fe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*vh);return new fe(t,s)}static fromInstant(e){if(!e||typeof e.t!="bigint")throw new Q(V.INVALID_ARGUMENT,"Invalid Temporal.Instant object provided.");return fe._fromEpochNanoseconds(e.t)}static _fromEpochNanoseconds(e){let t,s;if(e>=0n)t=Number(e/1000000000n),s=Number(e%1000000000n);else{const r=e%1000000000n;r===0n?(t=Number(e/1000000000n),s=0):(t=Number(e/1000000000n-1n),s=Number(r+1000000000n))}return new fe(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Q(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Q(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Rh)throw new Q(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Q(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/vh}toInstant(){if(typeof Temporal>"u"||!Temporal.Instant)throw new Q(V.FAILED_PRECONDITION,"The Temporal object is not available in the current environment.");const e=1000000000n*BigInt(this.seconds)+BigInt(this.nanoseconds);return Temporal.Instant.__PRIVATE_fromEpochNanoseconds(e)}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:fe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ii(e,fe._jsonSchema))return new fe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Rh;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}fe._jsonSchemaVersion="firestore/timestamp/1.0",fe._jsonSchema={type:Ae("string",fe._jsonSchemaVersion),seconds:Ae("number"),nanoseconds:Ae("number")};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new TI("Invalid base64 string: "+i):i}})(e);return new _t(t)}static fromUint8Array(e){const t=(function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i})(e);return new _t(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_t.EMPTY_BYTE_STRING=new _t("");const AI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ls(n){if(W(!!n,39018),typeof n=="string"){let e=0;const t=AI.exec(n);if(W(!!t,46558,{timestamp:n}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ve(n.seconds),nanos:ve(n.nanos)}}function ve(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Hs(n){return typeof n=="string"?_t.fromBase64String(n):_t.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nd="server_timestamp",sd="__type__",rd="__previous_value__",id="__local_write_time__";function Wo(n){return(n?.mapValue?.fields||{})[sd]?.stringValue===nd}function Yo(n){const e=n.mapValue.fields[rd];return Wo(e)?Yo(e):e}function Lr(n){const e=ls(n.mapValue.fields[id].timestampValue);return new fe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(e,t,s,r,i,o,B,c,l,f,C,m,v){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=B,this.longPollingOptions=c,this.useFetchStreams=l,this.isUsingEmulator=f,this.apiKey=C,this._customHeaders=m,this.grpcFlowControlWindow=v}}const Do="(default)";class wo{constructor(e,t){this.projectId=e,this.database=t||Do}static empty(){return new wo("","")}get isDefaultDatabase(){return this.database===Do}isEqual(e){return e instanceof wo&&e.projectId===this.projectId&&e.database===this.database}}function vI(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new Q(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wo(n.options.projectId,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec=-1;function _c(n){return n==null}function kr(n){return n===0&&1/n==-1/0}function bI(n){return typeof n=="number"&&Number.isInteger(n)&&!kr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}function SI(n){return typeof n=="string"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od="__type__",OI="__max__",Gi={mapValue:{}},ad="__vector__",Io="value",Us={nullValue:"NULL_VALUE"},ht={booleanValue:!0},xe={booleanValue:!1};function Oe(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Wo(n)?4:PI(n)?9007199254740991:yo(n)?10:11:ne(28295,{value:n})}function Rt(n,e,t){if(n===e)return!0;const s=Oe(n);if(s!==Oe(e))return!1;switch(s){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Lr(n).isEqual(Lr(e));case 3:return(function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const B=ls(i.timestampValue),c=ls(o.timestampValue);return B.seconds===c.seconds&&B.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(i,o){return Hs(i.bytesValue).isEqual(Hs(o.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(i,o){return ve(i.geoPointValue.latitude)===ve(o.geoPointValue.latitude)&&ve(i.geoPointValue.longitude)===ve(o.geoPointValue.longitude)})(n,e);case 2:return(function(i,o,B){if("integerValue"in i&&"integerValue"in o)return ve(i.integerValue)===ve(o.integerValue);let c,l;if("doubleValue"in i&&"doubleValue"in o)c=ve(i.doubleValue),l=ve(o.doubleValue);else{if(!B?.i)return!1;c=ve(i.integerValue??i.doubleValue),l=ve(o.integerValue??o.doubleValue)}return c===l?!!B?.o||kr(c)===kr(l):!!(B===void 0||B.u)&&isNaN(c)&&isNaN(l)})(n,e,t);case 9:return Vs(n.arrayValue.values||[],e.arrayValue.values||[],((r,i)=>Rt(r,i,t)));case 10:case 11:return(function(i,o,B){const c=i.mapValue.fields||{},l=o.mapValue.fields||{};if(_o(c)!==_o(l))return!1;for(const f in c)if(c.hasOwnProperty(f)&&(l[f]===void 0||!Rt(c[f],l[f],B)))return!1;return!0})(n,e,t);default:return ne(52216,{left:n})}}function Mr(n,e){return(n.values||[]).find((t=>Rt(t,e)))!==void 0}function ft(n,e){if(n===e)return 0;const t=Oe(n),s=Oe(e);if(t!==s)return he(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return he(n.booleanValue,e.booleanValue);case 2:return(function(i,o){const B=ve(i.integerValue||i.doubleValue),c=ve(o.integerValue||o.doubleValue);return B<c?-1:B>c?1:B===c?0:isNaN(B)?isNaN(c)?0:-1:1})(n,e);case 3:return bh(n.timestampValue,e.timestampValue);case 4:return bh(Lr(n),Lr(e));case 5:return OB(n.stringValue,e.stringValue);case 6:return(function(i,o){const B=Hs(i),c=Hs(o);return B.compareTo(c)})(n.bytesValue,e.bytesValue);case 7:return(function(i,o){const B=i.split("/"),c=o.split("/");for(let l=0;l<B.length&&l<c.length;l++){const f=he(B[l],c[l]);if(f!==0)return f}return he(B.length,c.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,o){const B=he(ve(i.latitude),ve(o.latitude));return B!==0?B:he(ve(i.longitude),ve(o.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Sh(n.arrayValue,e.arrayValue);case 10:return(function(i,o){const B=i.fields||{},c=o.fields||{},l=B[Io]?.arrayValue,f=c[Io]?.arrayValue,C=he(l?.values?.length||0,f?.values?.length||0);return C!==0?C:Sh(l,f)})(n.mapValue,e.mapValue);case 11:return(function(i,o){if(i===Gi.mapValue&&o===Gi.mapValue)return 0;if(i===Gi.mapValue)return 1;if(o===Gi.mapValue)return-1;const B=i.fields||{},c=Object.keys(B),l=o.fields||{},f=Object.keys(l);c.sort(),f.sort();for(let C=0;C<c.length&&C<f.length;++C){const m=OB(c[C],f[C]);if(m!==0)return m;const v=ft(B[c[C]],l[f[C]]);if(v!==0)return v}return he(c.length,f.length)})(n.mapValue,e.mapValue);default:throw ne(23264,{l:t})}}function bh(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return he(n,e);const t=ls(n),s=ls(e),r=he(t.seconds,s.seconds);return r!==0?r:he(t.nanos,s.nanos)}function Sh(n,e){const t=n.values||[],s=e.values||[];for(let r=0;r<t.length&&r<s.length;++r){const i=ft(t[r],s[r]);if(i!==void 0&&i!==0)return i}return he(t.length,s.length)}function js(n){return NB(n)}function NB(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=ls(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Hs(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return re.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",r=!0;for(const i of t.values||[])r?r=!1:s+=",",s+=NB(i);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let r="{",i=!0;for(const o of s)i?i=!1:r+=",",r+=`${o}:${NB(t.fields[o])}`;return r+"}"})(n.mapValue):ne(61005,{value:n})}function Zi(n){switch(Oe(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Yo(n);return e?16+Zi(e):16;case 5:return 2*n.stringValue.length;case 6:return Hs(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((r,i)=>r+Zi(i)),0)})(n.arrayValue);case 10:case 11:return(function(s){let r=0;return zs(s.fields,((i,o)=>{r+=i.length+Zi(o)})),r})(n.mapValue);default:throw ne(13486,{value:n})}}function Gt(n){return!!n&&"integerValue"in n}function Yn(n){return!!n&&"doubleValue"in n}function bn(n){return Gt(n)||Yn(n)}function Js(n){return!!n&&"arrayValue"in n}function Ft(n){return!!n&&"nullValue"in n}function vt(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ss(n){return!!n&&"mapValue"in n}function yo(n){return(n?.mapValue?.fields||{})[od]?.stringValue===ad}function FB(n){return(n?.mapValue?.fields||{})[Io]?.arrayValue}function Ir(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return zs(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Ir(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ir(n.arrayValue.values[t]);return e}return{...n}}function PI(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===OI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.value=e}static empty(){return new Tt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!ss(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ir(t)}setAll(e){let t=gt.emptyPath(),s={},r=[];e.forEach(((o,B)=>{if(!t.isImmediateParentOf(B)){const c=this.getFieldsMap(t);this.applyChanges(c,s,r),s={},r=[],t=B.popLast()}o?s[B.lastSegment()]=Ir(o):r.push(B.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,s,r)}delete(e){const t=this.field(e.popLast());ss(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Rt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];ss(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){zs(t,((r,i)=>e[r]=i));for(const r of s)delete e[r]}clone(){return new Tt(Ir(this.value))}}function Bd(n){const e=[];return zs(n.fields,((t,s)=>{const r=new gt([t]);if(ss(s)){const i=Bd(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)})),new Nt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:kr(e)?"-0":e}}function Dc(n){return{integerValue:""+n}}function wc(n,e,t){return bI(e)?Dc(e):Xo(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(){this._=void 0}}function NI(n,e,t){return n instanceof xr?(function(r,i){const o={fields:{[sd]:{stringValue:nd},[id]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Wo(i)&&(i=Yo(i)),i&&(o.fields[rd]=i),{mapValue:o}})(t,e):n instanceof Vr?ld(n,e):n instanceof Gr?ud(n,e):n instanceof Hr?(function(r,i){const o=cd(r,i),B=Ro(o)+Ro(r.h);return Gt(o)&&Gt(r.h)?Dc(B):Xo(r.serializer,B)})(n,e):n instanceof To?(function(r,i){return Oh(r,i,Math.min)})(n,e):n instanceof Ao?(function(r,i){return Oh(r,i,Math.max)})(n,e):void 0}function FI(n,e,t){return n instanceof Vr?ld(n,e):n instanceof Gr?ud(n,e):t}function cd(n,e){return n instanceof Hr?bn(e)?e:{integerValue:0}:null}class xr extends Zo{}class Vr extends Zo{constructor(e){super(),this.elements=e}}function ld(n,e){const t=hd(e);for(const s of n.elements)t.some((r=>Rt(r,s)))||t.push(s);return{arrayValue:{values:t}}}class Gr extends Zo{constructor(e){super(),this.elements=e}}function ud(n,e){let t=hd(e);for(const s of n.elements)t=t.filter((r=>!Rt(r,s)));return{arrayValue:{values:t}}}class Ic extends Zo{constructor(e,t){super(),this.serializer=e,this.h=t}}class Hr extends Ic{}class To extends Ic{}class Ao extends Ic{}function Oh(n,e,t){if(!bn(e))return n.h;const s=t(Ro(e),Ro(n.h));return Gt(e)&&Gt(n.h)?Dc(s):Xo(n.serializer,s)}function Ro(n){return ve(n.integerValue||n.doubleValue)}function hd(n){return Js(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(e,t){this.field=e,this.transform=t}}function kI(n,e){return n.field.isEqual(e.field)&&(function(s,r){return s instanceof Vr&&r instanceof Vr||s instanceof Gr&&r instanceof Gr?Vs(s.elements,r.elements,Rt):s instanceof Hr&&r instanceof Hr||s instanceof To&&r instanceof To||s instanceof Ao&&r instanceof Ao?Rt(s.h,r.h):s instanceof xr&&r instanceof xr})(n.transform,e.transform)}class MI{constructor(e,t){this.version=e,this.transformResults=t}}class Wt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Wt}static exists(e){return new Wt(void 0,e)}static updateTime(e){return new Wt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function eo(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ea{}function fd(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new dd(n.key,Wt.none()):new oi(n.key,n.data,Wt.none());{const t=n.data,s=Tt.empty();let r=new Ve(gt.comparator);for(let i of e.fields)if(!r.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new fs(n.key,s,new Nt(r.toArray()),Wt.none())}}function xI(n,e,t){n instanceof oi?(function(r,i,o){const B=r.value.clone(),c=Nh(r.fieldTransforms,i,o.transformResults);B.setAll(c),i.convertToFoundDocument(o.version,B).setHasCommittedMutations()})(n,e,t):n instanceof fs?(function(r,i,o){if(!eo(r.precondition,i))return void i.convertToUnknownDocument(o.version);const B=Nh(r.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Cd(r)),c.setAll(B),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(n,e,t):(function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function yr(n,e,t,s){return n instanceof oi?(function(i,o,B,c){if(!eo(i.precondition,o))return B;const l=i.value.clone(),f=Fh(i.fieldTransforms,c,o);return l.setAll(f),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null})(n,e,t,s):n instanceof fs?(function(i,o,B,c){if(!eo(i.precondition,o))return B;const l=Fh(i.fieldTransforms,c,o),f=o.data;return f.setAll(Cd(i)),f.setAll(l),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),B===null?null:B.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((C=>C.field)))})(n,e,t,s):(function(i,o,B){return eo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):B})(n,e,t)}function VI(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),i=cd(s.transform,r||null);i!=null&&(t===null&&(t=Tt.empty()),t.set(s.field,i))}return t||null}function Ph(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Vs(s,r,((i,o)=>kI(i,o)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class oi extends ea{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class fs extends ea{constructor(e,t,s,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Cd(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function Nh(n,e,t){const s=new Map;W(n.length===t.length,32656,{T:t.length,P:n.length});for(let r=0;r<t.length;r++){const i=n[r],o=i.transform,B=e.data.field(i.field);s.set(i.field,FI(o,B,t[r]))}return s}function Fh(n,e,t){const s=new Map;for(const r of n){const i=r.transform,o=t.data.field(r.field);s.set(r.field,NI(i,o,e))}return s}class dd extends ea{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class GI extends ea{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e,t){this.position=e,this.inclusive=t}}function Lh(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const i=e[r],o=n.position[r];if(i.field.isKeyField()?s=re.comparator(re.fromName(o.referenceValue),t.key):s=ft(o,t.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function kh(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Rt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{}class Me extends pd{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new UI(e,t,s):t==="array-contains"?new $I(e,s):t==="in"?new KI(e,s):t==="not-in"?new qI(e,s):t==="array-contains-any"?new zI(e,s):new Me(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new jI(e,s):new JI(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(ft(t,this.value)):t!==null&&Oe(this.value)===Oe(t)&&this.matchesComparison(ft(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ne(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Sn extends pd{constructor(e,t){super(),this.filters=e,this.op=t,this.I=null}static create(e,t){return new Sn(e,t)}matches(e){return gd(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.I!==null||(this.I=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.I}getFilters(){return Object.assign([],this.filters)}}function gd(n){return n.op==="and"}function md(n){return HI(n)&&gd(n)}function HI(n){for(const e of n.filters)if(e instanceof Sn)return!1;return!0}function LB(n){if(n instanceof Me)return n.field.canonicalString()+n.op.toString()+js(n.value);if(md(n))return n.filters.map((e=>LB(e))).join(",");{const e=n.filters.map((t=>LB(t))).join(",");return`${n.op}(${e})`}}function Ed(n,e){return n instanceof Me?(function(s,r){return r instanceof Me&&s.op===r.op&&s.field.isEqual(r.field)&&Rt(s.value,r.value)})(n,e):n instanceof Sn?(function(s,r){return r instanceof Sn&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce(((i,o,B)=>i&&Ed(o,r.filters[B])),!0):!1})(n,e):void ne(19439)}function _d(n){return n instanceof Me?(function(t){return`${t.field.canonicalString()} ${t.op} ${js(t.value)}`})(n):n instanceof Sn?(function(t){return t.op.toString()+" {"+t.getFilters().map(_d).join(" ,")+"}"})(n):"Filter"}class UI extends Me{constructor(e,t,s){super(e,t,s),this.key=re.fromName(s.referenceValue)}matches(e){const t=re.comparator(e.key,this.key);return this.matchesComparison(t)}}class jI extends Me{constructor(e,t){super(e,"in",t),this.keys=Dd("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class JI extends Me{constructor(e,t){super(e,"not-in",t),this.keys=Dd("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Dd(n,e){return(e.arrayValue?.values||[]).map((t=>re.fromName(t.referenceValue)))}class $I extends Me{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Js(t)&&Mr(t.arrayValue,this.value)}}class KI extends Me{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Mr(this.value.arrayValue,t)}}class qI extends Me{constructor(e,t){super(e,"not-in",t)}matches(e){if(Mr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Mr(this.value.arrayValue,t)}}class zI extends Me{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Js(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Mr(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,t="asc"){this.field=e,this.dir=t}}function QI(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{static fromTimestamp(e){return new _e(e)}static min(){return new _e(new fe(0,0))}static max(){return new _e(new fe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e,t,s,r,i,o,B){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=B}static newInvalidDocument(e){return new St(e,0,_e.min(),_e.min(),_e.min(),Tt.empty(),0)}static newFoundDocument(e,t,s,r){return new St(e,1,t,_e.min(),s,r,0)}static newNoDocument(e,t){return new St(e,2,t,_e.min(),_e.min(),Tt.empty(),0)}static newUnknownDocument(e,t){return new St(e,3,t,_e.min(),_e.min(),Tt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(_e.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Tt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=_e.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof St&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new St(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur=-1;function WI(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=_e.fromTimestamp(s===1e9?new fe(t+1,0):new fe(t,s));return new On(r,re.empty(),e)}function YI(n){return new On(n.readTime,n.key,Ur)}class On{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new On(_e.min(),re.empty(),Ur)}static max(){return new On(_e.max(),re.empty(),Ur)}}function XI(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=re.comparator(n.documentKey,e.documentKey),t!==0?t:he(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(e,t=null,s=[],r=[],i=null,o=null,B=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=B,this.R=null}}function Mh(n,e=null,t=[],s=[],r=null,i=null,o=null){return new ZI(n,e,t,s,r,i,o)}function wd(n){const e=pe(n);if(e.R===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>LB(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(i){return i.field.canonicalString()+i.dir})(s))).join(","),_c(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>js(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>js(s))).join(",")),e.R=t}return e.R}function Id(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!QI(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Ed(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!kh(n.startAt,e.startAt)&&kh(n.endAt,e.endAt)}function ey(n){return!!n.isCorePipeline}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,t=null,s=[],r=[],i=null,o="F",B=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=B,this.endAt=c,this.A=null,this.V=null,this.m=null,this.startAt,this.endAt}}function ty(n,e,t,s,r,i,o,B){return new ta(n,e,t,s,r,i,o,B)}function ny(n){return new ta(n)}function xh(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function sy(n){return re.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function ry(n){return n.collectionGroup!==null}function Tr(n){const e=pe(n);if(e.A===null){e.A=[];const t=new Set;for(const i of e.explicitOrderBy)e.A.push(i),t.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let B=new Ve(gt.comparator);return o.filters.forEach((c=>{c.getFlattenedFilters().forEach((l=>{l.isInequality()&&(B=B.add(l.field))}))})),B})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.A.push(new bo(i,s))})),t.has(gt.keyField().canonicalString())||e.A.push(new bo(gt.keyField(),s))}return e.A}function rs(n){const e=pe(n);return e.V||(e.V=iy(e,Tr(n))),e.V}function iy(n,e){if(n.limitType==="F")return Mh(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((r=>{const i=r.dir==="desc"?"asc":"desc";return new bo(r.field,i)}));const t=n.endAt?new vo(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new vo(n.startAt.position,n.startAt.inclusive):null;return Mh(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function kB(n,e,t){return new ta(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function oy(n,e){return Id(rs(n),rs(e))&&n.limitType===e.limitType}function to(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((r=>_d(r))).join(", ")}]`),_c(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((r=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(r))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((r=>js(r))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((r=>js(r))).join(",")),`Target(${s})`})(rs(n))}; limitType=${n.limitType})`}function yc(n,e){return e.isFoundDocument()&&(function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):re.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)})(n,e)&&(function(s,r){for(const i of Tr(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0})(n,e)&&(function(s,r){return!(s.startAt&&!(function(o,B,c){const l=Lh(o,B,c);return o.inclusive?l<=0:l<0})(s.startAt,Tr(s),r)||s.endAt&&!(function(o,B,c){const l=Lh(o,B,c);return o.inclusive?l>=0:l>0})(s.endAt,Tr(s),r))})(n,e)}function yd(n){return(e,t)=>{let s=!1;for(const r of Tr(n)){const i=ay(r,e,t);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function ay(n,e,t){const s=n.field.isKeyField()?re.comparator(e.key,t.key):(function(i,o,B){const c=o.data.field(i),l=B.data.field(i);return c!==null&&l!==null?ft(c,l):ne(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return ne(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te,ce;function By(n){switch(n){case V.OK:return ne(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return ne(15467,{code:n})}}function cy(n){if(n===void 0)return cs("GRPC error has no .code"),V.UNKNOWN;switch(n){case Te.OK:return V.OK;case Te.CANCELLED:return V.CANCELLED;case Te.UNKNOWN:return V.UNKNOWN;case Te.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Te.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Te.INTERNAL:return V.INTERNAL;case Te.UNAVAILABLE:return V.UNAVAILABLE;case Te.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Te.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Te.NOT_FOUND:return V.NOT_FOUND;case Te.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Te.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Te.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Te.ABORTED:return V.ABORTED;case Te.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Te.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Te.DATA_LOSS:return V.DATA_LOSS;default:return ne(39323,{code:n})}}(ce=Te||(Te={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){zs(this.inner,((t,s)=>{for(const[r,i]of s)e(r,i)}))}isEmpty(){return td(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ly=new ut(re.comparator);function Ar(){return ly}const Td=new ut(re.comparator);function pr(...n){let e=Td;for(const t of n)e=e.insert(t.key,t);return e}function Ad(n){let e=Td;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function mn(){return Rr()}function Rd(){return Rr()}function Rr(){return new Cs((n=>n.toString()),((n,e)=>n.isEqual(e)))}const uy=new ut(re.comparator),hy=new Ve(re.comparator);function je(...n){let e=hy;for(const t of n)e=e.add(t);return e}const fy=new Ve(he);function Cy(){return fy}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new hc([4294967295,4294967295],0);class dy{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function no(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Tc(n){const e=ls(n);return new fe(e.seconds,e.nanos)}function py(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function so(n,e){return no(n,e.toTimestamp())}function Ns(n){return W(!!n,49232),_e.fromTimestamp(Tc(n))}function vd(n,e){return MB(n,e).canonicalString()}function MB(n,e){const t=(function(r){return new De(["projects",r.projectId,"databases",r.database])})(n).child("documents");return e===void 0?t:t.child(e)}function gy(n){const e=De.fromString(n);return W(Ty(e),10190,{key:e.toString()}),e}function So(n,e){return vd(n.databaseId,e.path)}function my(n){const e=gy(n);return e.length===4?De.emptyPath():_y(e)}function Ey(n){return new De(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function _y(n){return W(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Vh(n,e,t){return{name:So(n,e),fields:t.value.mapValue.fields}}function Dy(n,e){let t;if(e instanceof oi)t={update:Vh(n,e.key,e.value)};else if(e instanceof dd)t={delete:So(n,e.key)};else if(e instanceof fs)t={update:Vh(n,e.key,e.data),updateMask:yy(e.fieldMask)};else{if(!(e instanceof GI))return ne(16599,{be:e.type});t={verify:So(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(i,o){const B=o.transform;if(B instanceof xr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(B instanceof Vr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:B.elements}};if(B instanceof Gr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:B.elements}};if(B instanceof Hr)return{fieldPath:o.field.canonicalString(),increment:B.h};if(B instanceof To)return{fieldPath:o.field.canonicalString(),minimum:B.h};if(B instanceof Ao)return{fieldPath:o.field.canonicalString(),maximum:B.h};throw ne(20930,{transform:o.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(r,i){return i.updateTime!==void 0?{updateTime:so(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ne(27497)})(n,e.precondition)),t}function wy(n,e){return n&&n.length>0?(W(e!==void 0,14353),n.map((t=>(function(r,i){let o=r.updateTime?Ns(r.updateTime):Ns(i);return o.isEqual(_e.min())&&(o=Ns(i)),new MI(o,r.transformResults||[])})(t,e)))):[]}function Iy(n){let e=my(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){W(s===1,65062);const f=t.from[0];f.allDescendants?r=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=(function(C){const m=bd(C);return m instanceof Sn&&md(m)?m.getFilters():[m]})(t.where));let o=[];t.orderBy&&(o=(function(C){return C.map((m=>(function(R){return new bo(vs(R.field),(function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(R.direction))})(m)))})(t.orderBy));let B=null;t.limit&&(B=(function(C){let m;return m=typeof C=="object"?C.value:C,_c(m)?null:m})(t.limit));let c=null;t.startAt&&(c=(function(C){const m=!!C.before,v=C.values||[];return new vo(v,m)})(t.startAt));let l=null;return t.endAt&&(l=(function(C){const m=!C.before,v=C.values||[];return new vo(v,m)})(t.endAt)),ty(e,r,o,i,B,"F",c,l)}function bd(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=vs(t.unaryFilter.field);return Me.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=vs(t.unaryFilter.field);return Me.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=vs(t.unaryFilter.field);return Me.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=vs(t.unaryFilter.field);return Me.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ne(61313);default:return ne(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Me.create(vs(t.fieldFilter.field),(function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ne(58110);default:return ne(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Sn.create(t.compositeFilter.filters.map((s=>bd(s))),(function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return ne(1026)}})(t.compositeFilter.op))})(n):ne(30097,{filter:n})}function vs(n){return gt.fromServerFormat(n.fieldPath)}function yy(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Ty(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Sd(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}function jr(n,e){const t={fields:{}};return e.forEach(((s,r)=>{if(typeof r!="string")throw new Error(`Cannot encode map with non-string key: ${r}`);t.fields[r]=s._toProto(n)})),{mapValue:t}}function Od(n){return{stringValue:n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(n){return new dy(n,!0)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ot(_t.fromBase64String(e))}catch(t){throw new Q(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ot(_t.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ot._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ii(e,Ot._jsonSchema))return Ot.fromBase64String(e.bytes)}}Ot._jsonSchemaVersion="firestore/bytes/1.0",Ot._jsonSchema={type:Ae("string",Ot._jsonSchemaVersion),bytes:Ae("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new Q(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function Ay(){return new Ac(Gs)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Q(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Q(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Yt._jsonSchemaVersion}}static fromJSON(e){if(ii(e,Yt._jsonSchema))return new Yt(e.latitude,e.longitude)}}Yt._jsonSchemaVersion="firestore/geoPoint/1.0",Yt._jsonSchema={type:Ae("string",Yt._jsonSchemaVersion),latitude:Ae("number"),longitude:Ae("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}We.UNAUTHENTICATED=new We(null),We.GOOGLE_CREDENTIALS=new We("google-credentials-uid"),We.FIRST_PARTY=new We("first-party-uid"),We.MOCK_USER=new We("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ry{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(We.UNAUTHENTICATED)))}shutdown(){}}class vy{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class by{constructor(e){this.De=e,this.currentUser=We.UNAUTHENTICATED,this.xe=0,this.forceRefresh=!1,this.auth=null}start(e,t){W(this.Ce===void 0,42304);let s=this.xe;const r=c=>this.xe!==s?(s=this.xe,t(c)):Promise.resolve();let i=new is;this.Ce=()=>{this.xe++,this.currentUser=this.Fe(),i.resolve(),i=new is,e.enqueueRetryable((()=>r(this.currentUser)))};const o=()=>{const c=i;e.enqueueRetryable((async()=>{await c.promise,await r(this.currentUser)}))},B=c=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.Ce&&(this.auth.addAuthTokenListener(this.Ce),o())};this.De.onInit((c=>B(c))),setTimeout((()=>{if(!this.auth){const c=this.De.getImmediate({optional:!0});c?B(c):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new is)}}),0),o()}getToken(){const e=this.xe,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.xe!==e?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(W(typeof s.accessToken=="string",31837,{Oe:s}),new Pd(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.Ce&&this.auth.removeAuthTokenListener(this.Ce),this.Ce=void 0}Fe(){const e=this.auth&&this.auth.getUid();return W(e===null||typeof e=="string",2055,{Me:e}),new We(e)}}class Sy{constructor(e,t,s){this.Ne=e,this.Le=t,this.Be=s,this.type="FirstParty",this.user=We.FIRST_PARTY,this.Ue=new Map}ke(){return this.Be?this.Be():null}get headers(){this.Ue.set("X-Goog-AuthUser",this.Ne);const e=this.ke();return e&&this.Ue.set("Authorization",e),this.Le&&this.Ue.set("X-Goog-Iam-Authorization-Token",this.Le),this.Ue}}class Oy{constructor(e,t,s){this.Ne=e,this.Le=t,this.Be=s}getToken(){return Promise.resolve(new Sy(this.Ne,this.Le,this.Be))}start(e,t){e.enqueueRetryable((()=>t(We.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Gh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Py{constructor(e,t){this.qe=t,this.forceRefresh=!1,this.appCheck=null,this.$e=null,this.Ke=null,yt(e)&&e.settings.appCheckToken&&(this.Ke=e.settings.appCheckToken)}start(e,t){W(this.Ce===void 0,3512);const s=i=>{i.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.$e;return this.$e=i.token,z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.Ce=i=>{e.enqueueRetryable((()=>s(i)))};const r=i=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.Ce&&this.appCheck.addTokenListener(this.Ce)};this.qe.onInit((i=>r(i))),setTimeout((()=>{if(!this.appCheck){const i=this.qe.getImmediate({optional:!0});i?r(i):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.Ke)return Promise.resolve(new Gh(this.Ke));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(W(typeof t.token=="string",44558,{tokenResult:t}),this.$e=t.token,new Gh(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.Ce&&this.appCheck.removeTokenListener(this.Ce),this.Ce=void 0}}function Nd(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{Qe(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hh="ConnectivityMonitor";class Uh{constructor(){this.We=()=>this.Ge(),this.ze=()=>this.je(),this.He=[],this.Je()}Qe(e){this.He.push(e)}shutdown(){window.removeEventListener("online",this.We),window.removeEventListener("offline",this.ze)}Je(){window.addEventListener("online",this.We),window.addEventListener("offline",this.ze)}Ge(){z(Hh,"Network connectivity changed: AVAILABLE");for(const e of this.He)e(0)}je(){z(Hh,"Network connectivity changed: UNAVAILABLE");for(const e of this.He)e(1)}static Ye(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hi=null;function xB(){return Hi===null?Hi=(function(){return 268435456+Math.round(2147483648*Math.random())})():Hi++,"0x"+Hi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sB="RestConnection",Fy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Ly{get Ze(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Xe=t+"://"+e.host,this.et=`projects/${s}/databases/${r}`,this.tt=this.databaseId.database===Do?`project_id=${s}`:`project_id=${s}&database_id=${r}`}nt(e,t,s,r,i){const o=xB(),B=this.rt(e,t.toUriEncodedString());z(sB,`Sending RPC '${e}' ${o}:`,B,s);const c={"google-cloud-resource-prefix":this.et,"x-goog-request-params":this.tt};this.it(c,r,i);const{host:l}=new URL(B),f=Xr(l);return this.st(e,B,c,s,f).then((C=>(z(sB,`Received RPC '${e}' ${o}: `,C),C)),(C=>{throw tn(sB,`RPC '${e}' ${o} failed with error: `,C,"url: ",B,"request:",s),C}))}_t(e,t,s,r,i,o){return this.nt(e,t,s,r,i)}it(e,t,s){if(e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+qs})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((r,i)=>e[i]=r)),s&&s.headers.forEach(((r,i)=>e[i]=r)),this.databaseInfo._customHeaders)for(const r of Object.keys(this.databaseInfo._customHeaders))e[r]=this.databaseInfo._customHeaders[r]}rt(e,t){const s=Fy[e];let r=`${this.Xe}/v1/${t}:${s}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e){this.ot=e.ot,this.ut=e.ut}ct(e){this.lt=e}Et(e){this.ht=e}Tt(e){this.Pt=e}onMessage(e){this.It=e}close(){this.ut()}send(e){this.ot(e)}Rt(){this.lt()}At(){this.ht()}Vt(e){this.Pt(e)}dt(e){this.It(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ze="WebChannelConnection",gr=(n,e,t)=>{n.listen(e,(s=>{try{t(s)}catch(r){setTimeout((()=>{throw r}),0)}}))};class Fs extends Ly{constructor(e){super(e),this.ft=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static gt(){if(!Fs.yt){const e=UC();gr(e,HC.STAT_EVENT,(t=>{t.stat===AB.PROXY?z(ze,"STAT_EVENT: detected buffering proxy"):t.stat===AB.NOPROXY&&z(ze,"STAT_EVENT: detected no buffering proxy")})),Fs.yt=!0}}st(e,t,s,r,i){const o=xB();return new Promise(((B,c)=>{const l=new VC;l.setWithCredentials(!0),l.listenOnce(GC.COMPLETE,(()=>{try{switch(l.getLastErrorCode()){case Yi.NO_ERROR:const C=l.getResponseJson();z(ze,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(C)),B(C);break;case Yi.TIMEOUT:z(ze,`RPC '${e}' ${o} timed out`),c(new Q(V.DEADLINE_EXCEEDED,"Request time out"));break;case Yi.HTTP_ERROR:const m=l.getStatus();if(z(ze,`RPC '${e}' ${o} failed with status:`,m,"response text:",l.getResponseText()),m>0){let v=l.getResponseJson();Array.isArray(v)&&(v=v[0]);const R=v?.error;if(R&&R.status&&R.message){const N=(function(J){const K=J.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(K)>=0?K:V.UNKNOWN})(R.status);c(new Q(N,R.message))}else c(new Q(V.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new Q(V.UNAVAILABLE,"Connection failed."));break;default:ne(9055,{wt:e,streamId:o,bt:l.getLastErrorCode(),St:l.getLastError()})}}finally{z(ze,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(r);z(ze,`RPC '${e}' ${o} sending request:`,r),l.send(t,"POST",f,s,15)}))}vt(e,t,s){const r=xB(),i=[this.Xe,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),B={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(B.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(B.useFetchStreams=!0),this.it(B.initMessageHeaders,t,s),B.encodeInitMessageHeaders=!0;const l=i.join("");z(ze,`Creating RPC '${e}' stream ${r}: ${l}`,B);const f=o.createWebChannel(l,B);this.Dt(f);let C=!1,m=!1;const v=new ky({ot:R=>{m?z(ze,`Not sending because RPC '${e}' stream ${r} is closed:`,R):(C||(z(ze,`Opening RPC '${e}' stream ${r} transport.`),f.open(),C=!0),z(ze,`RPC '${e}' stream ${r} sending:`,R),f.send(R))},ut:()=>f.close()});return gr(f,Er.EventType.OPEN,(()=>{m||(z(ze,`RPC '${e}' stream ${r} transport opened.`),v.Rt())})),gr(f,Er.EventType.CLOSE,(()=>{m||(m=!0,z(ze,`RPC '${e}' stream ${r} transport closed`),v.Vt(),this.xt(f))})),gr(f,Er.EventType.ERROR,(R=>{m||(m=!0,tn(ze,`RPC '${e}' stream ${r} transport errored. Name:`,R.name,"Message:",R.message),v.Vt(new Q(V.UNAVAILABLE,"The operation could not be completed")))})),gr(f,Er.EventType.MESSAGE,(R=>{if(!m){const N=R.data[0];W(!!N,16349);const x=N,J=x?.error||x[0]?.error;if(J){z(ze,`RPC '${e}' stream ${r} received error:`,J);const K=J.status;let se=(function(ye){const T=Te[ye];if(T!==void 0)return cy(T)})(K),ue=J.message;K==="NOT_FOUND"&&ue.includes("database")&&ue.includes("does not exist")&&ue.includes(this.databaseId.database)&&tn(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),se===void 0&&(se=V.INTERNAL,ue="Unknown error status: "+K+" with message "+J.message),m=!0,v.Vt(new Q(se,ue)),f.close()}else z(ze,`RPC '${e}' stream ${r} received:`,N),v.dt(N)}})),Fs.gt(),setTimeout((()=>{v.At()}),0),v}terminate(){this.ft.forEach((e=>e.close())),this.ft=[]}Dt(e){this.ft.push(e)}xt(e){this.ft=this.ft.filter((t=>t===e))}it(e,t,s){super.it(e,t,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return jC()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function My(n){return new Fs(n)}Fs.yt=!1;class Fd{constructor(e,t,s=1e3,r=1.5,i=6e4){this.Ct=e,this.timerId=t,this.Ft=s,this.Ot=r,this.Mt=i,this.Nt=0,this.Lt=null,this.Bt=Date.now(),this.reset()}reset(){this.Nt=0}Ut(){this.Nt=this.Mt}kt(e){this.cancel();const t=Math.floor(this.Nt+this.qt()),s=Math.max(0,Date.now()-this.Bt),r=Math.max(0,t-s);r>0&&z("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Nt} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Lt=this.Ct.enqueueAfterDelay(this.timerId,r,(()=>(this.Bt=Date.now(),e()))),this.Nt*=this.Ot,this.Nt<this.Ft&&(this.Nt=this.Ft),this.Nt>this.Mt&&(this.Nt=this.Mt)}$t(){this.Lt!==null&&(this.Lt.skipDelay(),this.Lt=null)}cancel(){this.Lt!==null&&(this.Lt.cancel(),this.Lt=null)}qt(){return(Math.random()-.5)*this.Nt}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh="PersistentStream";class xy{constructor(e,t,s,r,i,o,B,c){this.Ct=e,this.Kt=s,this.Qt=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=B,this.listener=c,this.state=0,this.Wt=0,this.Gt=null,this.zt=null,this.stream=null,this.jt=0,this.Ht=new Fd(e,t)}Jt(){return this.state===1||this.state===5||this.Yt()}Yt(){return this.state===2||this.state===3}start(){this.jt=0,this.state!==4?this.auth():this.Zt()}async stop(){this.Jt()&&await this.close(0)}Xt(){this.state=0,this.Ht.reset()}en(){this.Yt()&&this.Gt===null&&(this.Gt=this.Ct.enqueueAfterDelay(this.Kt,6e4,(()=>this.tn())))}nn(e){this.rn(),this.stream.send(e)}async tn(){if(this.Yt())return this.close(0)}rn(){this.Gt&&(this.Gt.cancel(),this.Gt=null)}sn(){this.zt&&(this.zt.cancel(),this.zt=null)}async close(e,t){this.rn(),this.sn(),this.Ht.cancel(),this.Wt++,e!==4?this.Ht.reset():t&&t.code===V.RESOURCE_EXHAUSTED?(cs(t.toString()),cs("Using maximum backoff delay to prevent overloading the backend."),this.Ht.Ut()):t&&t.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this._n(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Tt(t)}_n(){}auth(){this.state=1;const e=this.an(this.Wt),t=this.Wt;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,r])=>{this.Wt===t&&this.un(s,r)}),(s=>{e((()=>{const r=new Q(V.UNKNOWN,"Fetching auth token failed: "+s.message);return this.cn(r)}))}))}un(e,t){const s=this.an(this.Wt);this.stream=this.En(e,t),this.stream.ct((()=>{s((()=>this.listener.ct()))})),this.stream.Et((()=>{s((()=>(this.state=2,this.zt=this.Ct.enqueueAfterDelay(this.Qt,1e4,(()=>(this.Yt()&&(this.state=3),Promise.resolve()))),this.listener.Et())))})),this.stream.Tt((r=>{s((()=>this.cn(r)))})),this.stream.onMessage((r=>{s((()=>++this.jt==1?this.hn(r):this.onNext(r)))}))}Zt(){this.state=5,this.Ht.kt((async()=>{this.state=0,this.start()}))}cn(e){return z(jh,`close with error: ${e}`),this.stream=null,this.close(4,e)}an(e){return t=>{this.Ct.enqueueAndForget((()=>this.Wt===e?t():(z(jh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Vy extends xy{constructor(e,t,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,o),this.serializer=i}get Rn(){return this.jt>0}start(){this.lastStreamToken=void 0,super.start()}_n(){this.Rn&&this.An([])}En(e,t){return this.connection.vt("Write",e,t)}hn(e){return W(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,W(!e.writeResults||e.writeResults.length===0,55816),this.listener.Vn()}onNext(e){W(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.Ht.reset();const t=wy(e.writeResults,e.commitTime),s=Ns(e.commitTime);return this.listener.dn(s,t)}fn(){const e={};e.database=Ey(this.serializer),this.nn(e)}An(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>Dy(this.serializer,s)))};this.nn(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{}class Hy extends Gy{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=r,this.mn=!1}pn(){if(this.mn)throw new Q(V.FAILED_PRECONDITION,"The client has already been terminated.")}nt(e,t,s,r){return this.pn(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.nt(e,MB(t,s),r,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Q(V.UNKNOWN,i.toString())}))}_t(e,t,s,r,i){return this.pn(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,B])=>this.connection._t(e,MB(t,s),r,o,B,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Q(V.UNKNOWN,o.toString())}))}terminate(){this.mn=!0,this.connection.terminate()}}function Uy(n,e,t,s){return new Hy(n,e,t,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jy="ComponentProvider",Jh=new Map;function Jy(n,e,t,s,r){return new RI(n,e,t,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,Nd(r.experimentalLongPollingOptions),r.useFetchStreams,r.isUsingEmulator,s,r._customHeaders,r.grpcFlowControlWindow)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $h={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Ld=41943040;class Bt{static withCacheSize(e){return new Bt(e,Bt.DEFAULT_COLLECTION_PERCENTILE,Bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}Bt.DEFAULT_COLLECTION_PERCENTILE=10,Bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Bt.DEFAULT=new Bt(Ld,Bt.DEFAULT_COLLECTION_PERCENTILE,Bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Bt.DISABLED=new Bt(-1,0,0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.gn(s),this.yn=s=>t.writeSequenceNumber(s))}gn(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.yn&&this.yn(e),e}}vc.wn=-1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $y="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ky{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bc(n){if(n.code!==V.FAILED_PRECONDITION||n.message!==$y)throw n;z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ne(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new k(((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(s,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof k?t:k.resolve(t)}catch(t){return k.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):k.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):k.reject(t)}static resolve(e){return new k(((t,s)=>{t(e)}))}static reject(e){return new k(((t,s)=>{s(e)}))}static waitFor(e){return new k(((t,s)=>{let r=0,i=0,o=!1;e.forEach((B=>{++r,B.next((()=>{++i,o&&i===r&&t()}),(c=>s(c)))})),o=!0,i===r&&t()}))}static or(e){let t=k.resolve(!1);for(const s of e)t=t.next((r=>r?k.resolve(r):s()));return t}static forEach(e,t){const s=[];return e.forEach(((r,i)=>{s.push(t.call(this,r,i))})),this.waitFor(s)}static mapArray(e,t){return new k(((s,r)=>{const i=e.length,o=new Array(i);let B=0;for(let c=0;c<i;c++){const l=c;t(e[l]).next((f=>{o[l]=f,++B,B===i&&s(o)}),(f=>r(f)))}}))}static doWhile(e,t){return new k(((s,r)=>{const i=()=>{e()===!0?t().next((()=>{i()}),r):s()};i()}))}}function qy(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ai(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kh="LruGarbageCollector",zy=1048576;function qh([n,e],[t,s]){const r=he(n,t);return r===0?he(e,s):r}class Qy{constructor(e){this.Yn=e,this.buffer=new Ve(qh),this.Zn=0}Xn(){return++this.Zn}er(e){const t=[e,this.Xn()];if(this.buffer.size<this.Yn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();qh(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Wy{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.tr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.nr(6e4)}stop(){this.tr&&(this.tr.cancel(),this.tr=null)}get started(){return this.tr!==null}nr(e){z(Kh,`Garbage collection scheduled in ${e}ms`),this.tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ai(t)?z(Kh,"Ignoring IndexedDB error during garbage collection: ",t):await bc(t)}await this.nr(3e5)}))}}class Yy{constructor(e,t){this.rr=e,this.params=t}calculateTargetCount(e,t){return this.rr.ir(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return k.resolve(vc.wn);const s=new Qy(t);return this.rr.forEachTarget(e,(r=>s.er(r.sequenceNumber))).next((()=>this.rr.sr(e,(r=>s.er(r))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.rr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.rr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(z("LruGarbageCollector","Garbage collection skipped; disabled"),k.resolve($h)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(z("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),$h):this._r(e,t)))}getCacheSize(e){return this.rr.getCacheSize(e)}_r(e,t){let s,r,i,o,B,c,l;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((C=>(C>this.params.maximumSequenceNumbersToCollect?(z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${C}`),r=this.params.maximumSequenceNumbersToCollect):r=C,o=Date.now(),this.nthSequenceNumber(e,r)))).next((C=>(s=C,B=Date.now(),this.removeTargets(e,s,t)))).next((C=>(i=C,c=Date.now(),this.removeOrphanedDocuments(e,s)))).next((C=>(l=Date.now(),As()<=Be.DEBUG&&z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${r} in `+(B-o)+`ms
	Removed ${i} targets in `+(c-B)+`ms
	Removed ${C} documents in `+(l-c)+`ms
Total Duration: ${l-f}ms`),k.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:C}))))}}function Xy(n,e){return new Yy(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd="firestore.googleapis.com",zh=!0;class Qh{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new Q(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=kd,this.ssl=zh}else this.host=e.host,this.ssl=e.ssl??zh;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e._customHeaders&&(this._customHeaders={...e._customHeaders}),e.cacheSizeBytes===void 0)this.cacheSizeBytes=Ld;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<zy)throw new Q(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}if(yI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Nd(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new Q(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new Q(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new Q(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams,e.grpcFlowControlWindow!==void 0){if(typeof e.grpcFlowControlWindow!="number"||e.grpcFlowControlWindow<=0||e.grpcFlowControlWindow>2147483647||!Number.isInteger(e.grpcFlowControlWindow))throw new Q(V.INVALID_ARGUMENT,"grpcFlowControlWindow must be a positive integer and cannot exceed 2147483647");this.grpcFlowControlWindow=e.grpcFlowControlWindow}}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,r){return s.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams&&this.grpcFlowControlWindow===e.grpcFlowControlWindow&&(function(s,r){if(s===r)return!0;if(!s||!r)return!1;const i=Object.keys(s),o=Object.keys(r);if(i.length!==o.length)return!1;for(const B of i)if(s[B]!==r[B])return!1;return!0})(this._customHeaders,e._customHeaders)}}let Sc=class{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Q(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Q(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qh(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new Ry;switch(s.type){case"firstParty":return new Oy(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new Q(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=Jh.get(t);s&&(z(jy,"Removing Datastore"),Jh.delete(t),s.terminate())})(this),Promise.resolve()}};function Zy(n,e,t,s={}){n=PB(n,Sc);const r=Xr(e),i=n._getSettings(),o={...i,emulatorOptions:n._getEmulatorOptions()},B=`${e}:${t}`;r&&bf(`https://${B}`),i.host!==kd&&i.host!==B&&tn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:B,ssl:r,emulatorOptions:s};if(!An(c,o)&&(n._setSettings(c),s.mockUserToken)){let l,f;if(typeof s.mockUserToken=="string")l=s.mockUserToken,f=We.MOCK_USER;else{l=vg(s.mockUserToken,n._app?.options.projectId);const C=s.mockUserToken.sub||s.mockUserToken.user_id;if(!C)throw new Q(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new We(C)}n._authCredentials=new vy(new Pd(l,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Oc(this.firestore,e,this._query)}}class Je{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Je(this.firestore,e,this._key)}toJSON(){return{type:Je._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(ii(t,Je._jsonSchema))return new Je(e,s||null,new re(De.fromString(t.referencePath)))}}Je._jsonSchemaVersion="firestore/documentReference/1.0",Je._jsonSchema={type:Ae("string",Je._jsonSchemaVersion),referencePath:Ae("string")};class Jr extends Oc{constructor(e,t,s){super(e,t,ny(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Je(this.firestore,null,new re(e))}withConverter(e){return new Jr(this.firestore,e,this._path)}}function eT(n,e,...t){if(n=Ge(n),arguments.length===1&&(e=gc.newId()),II("doc","path",e),n instanceof Sc){const s=De.fromString(e,...t);return Ah(s),new Je(n,null,new re(s))}{if(!(n instanceof Je||n instanceof Jr))throw new Q(V.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(De.fromString(e,...t));return Ah(s),new Je(n.firestore,n instanceof Jr?n.converter:null,new re(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:mt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ii(e,mt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new mt(e.vectorValues);throw new Q(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}mt._jsonSchemaVersion="firestore/vectorValue/1.0",mt._jsonSchema={type:Ae("string",mt._jsonSchemaVersion),vectorValues:Ae("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tT=/^__.*__$/;class nT{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new fs(e,this.data,this.fieldMask,t,this.fieldTransforms):new oi(e,this.data,t,this.fieldTransforms)}}function Md(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ne(40011,{dataSource:n})}}class Pc{constructor(e,t,s,r,i,o){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new Pc({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){const t=this.path?.child(e),s=this.contextWith({path:t,arrayElement:!1});return s.validatePathSegment(e),s}childContextForFieldPath(e){const t=this.path?.child(e),s=this.contextWith({path:t,arrayElement:!1});return s.validatePath(),s}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Oo(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(Md(this.dataSource)&&tT.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class sT{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||na(e)}createContext(e,t,s,r=!1){return new Pc({dataSource:e,methodName:t,targetDoc:s,path:gt.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function rT(n){const e=n._freezeSettings(),t=na(n._databaseId);return new sT(n._databaseId,!!e.ignoreUndefinedProperties,t)}function iT(n,e,t,s,r,i={}){const o=n.createContext(i.merge||i.mergeFields?2:0,e,t,r);Hd("Data must be an object, but it was:",o,s);const B=xd(s,o);let c,l;if(i.merge)c=new Nt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const C of i.mergeFields){const m=sa(e,C,t);if(!o.contains(m))throw new Q(V.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);BT(f,m)||f.push(m)}c=new Nt(f),l=o.fieldTransforms.filter((C=>c.covers(C.field)))}else c=null,l=o.fieldTransforms;return new nT(new Tt(B),c,l)}class Nc extends Rc{_toFieldTransform(e){return new LI(e.path,new xr)}isEqual(e){return e instanceof Nc}}function $r(n,e,t){if(Gd(n=Ge(n)))return Hd("Unsupported field value:",e,n),xd(n,e);if(n instanceof Rc)return(function(r,i){if(!Md(i.dataSource))throw i.createError(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return(function(r,i){const o=[];let B=0;for(const c of r){let l=$r(c,i.childContextForArray(B));l==null&&(l={nullValue:"NULL_VALUE"}),o.push(l),B++}return{arrayValue:{values:o}}})(n,e)}return(function(r,i,o){if((r=Ge(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return wc(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const B=fe.fromDate(r);return{timestampValue:no(i.serializer,B)}}if(r instanceof fe){const B=new fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:no(i.serializer,B)}}if(Vd(r)){const B=fe.fromInstant(r),c=new fe(B.seconds,1e3*Math.floor(B.nanoseconds/1e3));return{timestampValue:no(i.serializer,c)}}if(r instanceof Yt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ot)return{bytesValue:py(i.serializer,r._byteString)};if(r instanceof Je){const B=i.databaseId,c=r.firestore._databaseId;if(!c.isEqual(B))throw i.createError(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${B.projectId}/${B.database}`);return{referenceValue:vd(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof mt)return(function(c,l){const f=c instanceof mt?c.toArray():c;return{mapValue:{fields:{[od]:{stringValue:ad},[Io]:{arrayValue:{values:f.map((m=>{if(typeof m!="number")throw l.createError("VectorValues must only contain numeric values.");return Xo(l.serializer,m)}))}}}}}})(r,i);if(Sd(r))return r._toProto(i.serializer);throw i.createError(`Unsupported field value: ${mc(r)}`)})(n,e)}function xd(n,e){const t={};return td(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):zs(n,((s,r)=>{const i=$r(r,e.childContextForField(s));i!=null&&(t[s]=i)})),{mapValue:{fields:t}}}function Vd(n){if(typeof n!="object"||n===null)return!1;if(typeof Temporal<"u"&&typeof Temporal.Instant=="function"&&n instanceof Temporal.Instant)return!0;const e=n;return e[Symbol.toStringTag]==="Temporal.Instant"&&typeof e.t=="bigint"}function Gd(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof fe||n instanceof Yt||n instanceof Ot||n instanceof Je||n instanceof Rc||n instanceof mt||Vd(n)||Sd(n))}function Hd(n,e,t){if(!Gd(t)||!ri(t)){const s=mc(t);throw s==="an object"?e.createError(n+" a custom object"):e.createError(n+" "+s)}}function sa(n,e,t){if((e=Ge(e))instanceof Ac)return e._internalPath;if(typeof e=="string")return aT(n,e);throw Oo("Field path arguments must be of type string or ",n,!1,void 0,t)}const oT=new RegExp("[~\\*/\\[\\]]");function aT(n,e,t){if(e.search(oT)>=0)throw Oo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ac(...e.split("."))._internalPath}catch{throw Oo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Oo(n,e,t,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let B=`Function ${e}() called with invalid data`;t&&(B+=" (via `toFirestore()`)"),B+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new Q(V.INVALID_ARGUMENT,B+n+c)}function BT(n,e){return n.some((t=>t.isEqual(e)))}function cT(n){return typeof n._readUserData=="function"}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.optionDefinitions=e}_getKnownOptions(e,t){const s=Tt.empty();for(const r in this.optionDefinitions)if(this.optionDefinitions.hasOwnProperty(r)){const i=this.optionDefinitions[r];if(r in e){const o=e[r];let B;i.nestedOptions&&ri(o)?B={mapValue:{fields:new Ze(i.nestedOptions).getOptionsProto(t,o)}}:o&&(B=$r(o,t)??void 0),B&&s.set(gt.fromServerFormat(i.serverName),B)}}return s}getOptionsProto(e,t,s){const r=this._getKnownOptions(t,e);if(s){const i=new Map(wI(s,((o,B)=>[gt.fromServerFormat(B),o!==void 0?$r(o,e):null])));r.setAll(i)}return r.value.mapValue.fields??{}}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lT(n){return typeof n=="object"&&n!==null&&!!("nullValue"in n&&(n.nullValue===null||n.nullValue==="NULL_VALUE")||"booleanValue"in n&&(n.booleanValue===null||typeof n.booleanValue=="boolean")||"integerValue"in n&&(n.integerValue===null||typeof n.integerValue=="number"||typeof n.integerValue=="string")||"doubleValue"in n&&(n.doubleValue===null||typeof n.doubleValue=="number")||"timestampValue"in n&&(n.timestampValue===null||(function(t){return typeof t=="object"&&t!==null&&"seconds"in t&&(t.seconds===null||typeof t.seconds=="number"||typeof t.seconds=="string")&&"nanos"in t&&(t.nanos===null||typeof t.nanos=="number")})(n.timestampValue))||"stringValue"in n&&(n.stringValue===null||typeof n.stringValue=="string")||"bytesValue"in n&&(n.bytesValue===null||n.bytesValue instanceof Uint8Array)||"referenceValue"in n&&(n.referenceValue===null||typeof n.referenceValue=="string")||"geoPointValue"in n&&(n.geoPointValue===null||(function(t){return typeof t=="object"&&t!==null&&"latitude"in t&&(t.latitude===null||typeof t.latitude=="number")&&"longitude"in t&&(t.longitude===null||typeof t.longitude=="number")})(n.geoPointValue))||"arrayValue"in n&&(n.arrayValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("values"in t)||t.values!==null&&!Array.isArray(t.values))})(n.arrayValue))||"mapValue"in n&&(n.mapValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("fields"in t)||t.fields!==null&&!ri(t.fields))})(n.mapValue))||"fieldReferenceValue"in n&&(n.fieldReferenceValue===null||typeof n.fieldReferenceValue=="string")||"functionValue"in n&&(n.functionValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("name"in t)||t.name!==null&&typeof t.name!="string"||!("args"in t)||t.args!==null&&!Array.isArray(t.args))})(n.functionValue))||"pipelineValue"in n&&(n.pipelineValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("stages"in t)||t.stages!==null&&!Array.isArray(t.stages))})(n.pipelineValue)))}function uT(){return new Nc("serverTimestamp")}function hT(n){return new mt(n)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(n){let e;return n instanceof ds?n:(e=ri(n)?mT(n):n instanceof Array?ET(n):Ud(n,void 0),e)}function rB(n){if(n instanceof ds)return n;if(n instanceof mt)return Kr(n);if(Array.isArray(n))return Kr(hT(n));throw new Error("Unsupported value: "+typeof n)}function Fc(n){return SI(n)?dT(n):G(n)}class ds{constructor(){this._protoValueType="ProtoValue"}add(e){return new F("add",[this,G(e)],"add")}asBoolean(){if(this instanceof Pn)return this;if(this instanceof Qs)return new Jd(this);if(this instanceof Bi)return new gT(this);if(this instanceof F)return new jd(this);throw new Q("invalid-argument",`Conversion of type ${typeof this} to BooleanExpression not supported.`)}subtract(e){return new F("subtract",[this,G(e)],"subtract")}multiply(e){return new F("multiply",[this,G(e)],"multiply")}divide(e){return new F("divide",[this,G(e)],"divide")}mod(e){return new F("mod",[this,G(e)],"mod")}equal(e){return new F("equal",[this,G(e)],"equal").asBoolean()}notEqual(e){return new F("not_equal",[this,G(e)],"notEqual").asBoolean()}lessThan(e){return new F("less_than",[this,G(e)],"lessThan").asBoolean()}lessThanOrEqual(e){return new F("less_than_or_equal",[this,G(e)],"lessThanOrEqual").asBoolean()}greaterThan(e){return new F("greater_than",[this,G(e)],"greaterThan").asBoolean()}greaterThanOrEqual(e){return new F("greater_than_or_equal",[this,G(e)],"greaterThanOrEqual").asBoolean()}arrayConcat(e,...t){const s=[e,...t].map((r=>G(r)));return new F("array_concat",[this,...s],"arrayConcat")}arrayContains(e){return new F("array_contains",[this,G(e)],"arrayContains").asBoolean()}arrayContainsAll(e){const t=Array.isArray(e)?new _r(e.map(G),"arrayContainsAll"):e;return new F("array_contains_all",[this,t],"arrayContainsAll").asBoolean()}arrayContainsAny(e){const t=Array.isArray(e)?new _r(e.map(G),"arrayContainsAny"):e;return new F("array_contains_any",[this,t],"arrayContainsAny").asBoolean()}arrayReverse(){return new F("array_reverse",[this])}arrayLength(){return new F("array_length",[this],"arrayLength")}equalAny(e){const t=Array.isArray(e)?new _r(e.map(G),"equalAny"):e;return new F("equal_any",[this,t],"equalAny").asBoolean()}notEqualAny(e){const t=Array.isArray(e)?new _r(e.map(G),"notEqualAny"):e;return new F("not_equal_any",[this,t],"notEqualAny").asBoolean()}exists(){return new F("exists",[this],"exists").asBoolean()}charLength(){return new F("char_length",[this],"charLength")}like(e){return new F("like",[this,G(e)],"like").asBoolean()}regexContains(e){return new F("regex_contains",[this,G(e)],"regexContains").asBoolean()}regexFind(e){return new F("regex_find",[this,G(e)],"regexFind")}regexFindAll(e){return new F("regex_find_all",[this,G(e)],"regexFindAll")}regexMatch(e){return new F("regex_match",[this,G(e)],"regexMatch").asBoolean()}stringContains(e){return new F("string_contains",[this,G(e)],"stringContains").asBoolean()}startsWith(e){return new F("starts_with",[this,G(e)],"startsWith").asBoolean()}endsWith(e){return new F("ends_with",[this,G(e)],"endsWith").asBoolean()}toLower(){return new F("to_lower",[this],"toLower")}toUpper(){return new F("to_upper",[this],"toUpper")}trim(e){const t=[this];return e&&t.push(G(e)),new F("trim",t,"trim")}ltrim(e){const t=[this];return e&&t.push(G(e)),new F("ltrim",t,"ltrim")}rtrim(e){const t=[this];return e&&t.push(G(e)),new F("rtrim",t,"rtrim")}type(){return new F("type",[this])}isType(e){return new F("is_type",[this,Kr(e)],"isType").asBoolean()}stringConcat(e,...t){const s=[e,...t].map(G);return new F("string_concat",[this,...s],"stringConcat")}stringIndexOf(e){return new F("string_index_of",[this,G(e)],"stringIndexOf")}stringRepeat(e){return new F("string_repeat",[this,G(e)],"stringRepeat")}stringReplaceAll(e,t){return new F("string_replace_all",[this,G(e),G(t)],"stringReplaceAll")}stringReplaceOne(e,t){return new F("string_replace_one",[this,G(e),G(t)],"stringReplaceOne")}concat(e,...t){const s=[e,...t].map(G);return new F("concat",[this,...s],"concat")}reverse(){return new F("reverse",[this],"reverse")}arrayFilter(e,t){return new F("array_filter",[this,G(e),t],"arrayFilter")}arrayTransform(e,t){return new F("array_transform",[this,G(e),t],"arrayTransform")}arrayTransformWithIndex(e,t,s){return new F("array_transform",[this,G(e),G(t),s],"arrayTransformWithIndex")}arraySlice(e,t){const s=[this,G(e)];return t!==void 0&&s.push(G(t)),new F("array_slice",s,"arraySlice")}arrayFirst(){return new F("array_first",[this],"arrayFirst")}arrayFirstN(e){return new F("array_first_n",[this,G(e)],"arrayFirstN")}arrayLast(){return new F("array_last",[this],"arrayLast")}arrayLastN(e){return new F("array_last_n",[this,G(e)],"arrayLastN")}arrayMaximum(){return new F("maximum",[this],"arrayMaximum")}arrayMaximumN(e){return new F("maximum_n",[this,G(e)],"arrayMaximumN")}arrayMinimum(){return new F("minimum",[this],"arrayMinimum")}arrayMinimumN(e){return new F("minimum_n",[this,G(e)],"arrayMinimumN")}arrayIndexOf(e){return new F("array_index_of",[this,G(e),G("first")],"arrayIndexOf")}arrayLastIndexOf(e){return new F("array_index_of",[this,G(e),G("last")],"arrayLastIndexOf")}arrayIndexOfAll(e){return new F("array_index_of_all",[this,G(e)],"arrayIndexOfAll")}byteLength(){return new F("byte_length",[this],"byteLength")}ceil(){return new F("ceil",[this])}floor(){return new F("floor",[this])}abs(){return new F("abs",[this])}exp(){return new F("exp",[this])}mapGet(e){return new F("map_get",[this,Kr(e)],"mapGet")}mapSet(e,t,...s){const r=[this,G(e),G(t),...s.map(G)];return new F("map_set",r,"mapSet")}mapKeys(){return new F("map_keys",[this],"mapKeys")}mapValues(){return new F("map_values",[this],"mapValues")}mapEntries(){return new F("map_entries",[this],"mapEntries")}getField(e){return new F("get_field",[this,G(e)],"get_field")}count(){return pt._create("count",[this],"count")}sum(){return pt._create("sum",[this],"sum")}average(){return pt._create("average",[this],"average")}minimum(){return pt._create("minimum",[this],"minimum")}maximum(){return pt._create("maximum",[this],"maximum")}first(){return pt._create("first",[this],"first")}last(){return pt._create("last",[this],"last")}arrayAgg(){return pt._create("array_agg",[this],"arrayAgg")}arrayAggDistinct(){return pt._create("array_agg_distinct",[this],"arrayAggDistinct")}countDistinct(){return pt._create("count_distinct",[this],"countDistinct")}logicalMaximum(e,...t){const s=[e,...t];return new F("maximum",[this,...s.map(G)],"logicalMaximum")}logicalMinimum(e,...t){const s=[e,...t];return new F("minimum",[this,...s.map(G)],"minimum")}vectorLength(){return new F("vector_length",[this],"vectorLength")}cosineDistance(e){return new F("cosine_distance",[this,rB(e)],"cosineDistance")}dotProduct(e){return new F("dot_product",[this,rB(e)],"dotProduct")}euclideanDistance(e){return new F("euclidean_distance",[this,rB(e)],"euclideanDistance")}unixMicrosToTimestamp(){return new F("unix_micros_to_timestamp",[this],"unixMicrosToTimestamp")}timestampToUnixMicros(){return new F("timestamp_to_unix_micros",[this],"timestampToUnixMicros")}unixMillisToTimestamp(){return new F("unix_millis_to_timestamp",[this],"unixMillisToTimestamp")}timestampToUnixMillis(){return new F("timestamp_to_unix_millis",[this],"timestampToUnixMillis")}unixSecondsToTimestamp(){return new F("unix_seconds_to_timestamp",[this],"unixSecondsToTimestamp")}timestampToUnixSeconds(){return new F("timestamp_to_unix_seconds",[this],"timestampToUnixSeconds")}timestampAdd(e,t){return new F("timestamp_add",[this,G(e),G(t)],"timestampAdd")}timestampSubtract(e,t){return new F("timestamp_subtract",[this,G(e),G(t)],"timestampSubtract")}timestampDiff(e,t){return new F("timestamp_diff",[this,Fc(e),G(t)],"timestampDiff")}timestampExtract(e,t){const s=[this,G(e)];return t&&s.push(G(t)),new F("timestamp_extract",s,"timestampExtract")}documentId(){return new F("document_id",[this],"documentId")}parent(){return new F("parent",[this],"parent")}substring(e,t){const s=G(e);return new F("substring",t===void 0?[this,s]:[this,s,G(t)],"substring")}arrayGet(e){return new F("array_get",[this,G(e)],"arrayGet")}isError(){return new F("is_error",[this],"isError").asBoolean()}ifError(e){const t=new F("if_error",[this,G(e)],"ifError");return e instanceof Pn?t.asBoolean():t}isAbsent(){return new F("is_absent",[this],"isAbsent").asBoolean()}mapRemove(e){return new F("map_remove",[this,G(e)],"mapRemove")}mapMerge(e,...t){const s=G(e),r=t.map(G);return new F("map_merge",[this,s,...r],"mapMerge")}pow(e){return new F("pow",[this,G(e)])}trunc(e){return e===void 0?new F("trunc",[this]):new F("trunc",[this,G(e)],"trunc")}round(e){return e===void 0?new F("round",[this]):new F("round",[this,G(e)],"round")}collectionId(){return new F("collection_id",[this])}length(){return new F("length",[this])}ln(){return new F("ln",[this])}sqrt(){return new F("sqrt",[this])}stringReverse(){return new F("string_reverse",[this])}ifAbsent(e){return new F("if_absent",[this,G(e)],"ifAbsent")}ifNull(e){return new F("if_null",[this,G(e)],"ifNull")}coalesce(e,...t){return new F("coalesce",[this,G(e),...t.map(G)],"coalesce")}join(e){return new F("join",[this,G(e)],"join")}log10(){return new F("log10",[this])}arraySum(){return new F("sum",[this])}split(e){return new F("split",[this,G(e)])}timestampTruncate(e,t){const s=[this,G(e)];return t&&s.push(G(t)),new F("timestamp_trunc",s)}ascending(){return _T(this)}descending(){return DT(this)}as(e){return new CT(this,e,"as")}}class pt{constructor(e,t){this.name=e,this.params=t,this.exprType="AggregateFunction",this._protoValueType="ProtoValue"}static _create(e,t,s){const r=new pt(e,t);return r._methodName=s,r}as(e){return new fT(this,e,"as")}_toProto(e){return{functionValue:{name:this.name,args:this.params.map((t=>t._toProto(e)))}}}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach((t=>t._readUserData(e)))}}class fT{constructor(e,t,s){this.aggregate=e,this.alias=t,this._methodName=s}_readUserData(e){this.aggregate._readUserData(e)}}class CT{constructor(e,t,s){this.expr=e,this.alias=t,this._methodName=s,this.exprType="AliasedExpression",this.selectable=!0}_readUserData(e){this.expr._readUserData(e)}}class _r extends ds{constructor(e,t){super(),this.cr=e,this._methodName=t,this.expressionType="ListOfExpressions"}_toProto(e){return{arrayValue:{values:this.cr.map((t=>t._toProto(e)))}}}_readUserData(e){this.cr.forEach((t=>t._readUserData(e)))}}class Bi extends ds{constructor(e,t){super(),this.fieldPath=e,this._methodName=t,this.expressionType="Field",this.selectable=!0}get _fieldPath(){return this.fieldPath}get fieldName(){return this.fieldPath.canonicalString()}get alias(){return this.fieldName}get expr(){return this}geoDistance(e){return new F("geo_distance",[this,G(e)],"geoDistance")}_toProto(e){return{fieldReferenceValue:this.fieldPath.canonicalString()}}_readUserData(e){}}function dT(n){return pT(n,"field")}function pT(n,e){return new Bi(typeof n=="string"?Gs===n?Ay()._internalPath:sa("field",n):n._internalPath,e)}class Qs extends ds{constructor(e,t){super(),this.value=e,this._methodName=t,this.expressionType="Constant"}static _fromProto(e){const t=new Qs(e,void 0);return t._protoValue=e,t}_toProto(e){return W(this._protoValue!==void 0,237),this._protoValue}_getValue(){return this._protoValue}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,lT(this._protoValue)||(this._protoValue=$r(this.value,e))}}function Kr(n,e){return Ud(n,"constant")}function Ud(n,e){const t=new Qs(n,e);return typeof n=="boolean"?new Jd(t):t}class F extends ds{constructor(e,t,s,r){super(),this.name=e,this.params=t,this.expressionType="Function",this._optionsProto=void 0,s!==void 0&&(this._methodName=s),r!==void 0&&(this._options=r)}get _optionsUtil(){return new Ze({})}_toProto(e){const t={functionValue:{name:this.name,args:this.params.map((s=>s._toProto(e)))}};return this._optionsProto&&(t.functionValue.options=this._optionsProto),t}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach((t=>t._readUserData(e))),this._options&&(this._optionsProto=this._optionsUtil.getOptionsProto(e,this._options))}}class Pn extends ds{get _methodName(){return this._expr._methodName}countIf(){return pt._create("count_if",[this],"countIf")}not(){return new F("not",[this],"not").asBoolean()}conditional(e,t){return new F("conditional",[this,e,t],"conditional")}ifError(e){const t=G(e),s=new F("if_error",[this,t],"ifError");return t instanceof Pn?s.asBoolean():s}_toProto(e){return this._expr._toProto(e)}_readUserData(e){this._expr._readUserData(e)}}class jd extends Pn{constructor(e){super(),this._expr=e,this.expressionType="Function"}}class Jd extends Pn{constructor(e){super(),this._expr=e,this.expressionType="Constant"}_getValue(){return this._expr._getValue()}}class gT extends Pn{constructor(e){super(),this._expr=e,this.expressionType="Field"}}function mT(n,e){const t=[];for(const s in n)if(Object.prototype.hasOwnProperty.call(n,s)){const r=n[s];t.push(Kr(s)),t.push(G(r))}return new F("map",t,"map")}function ET(n){return(function(t,s){return new F("array",t.map((r=>G(r))),s)})(n,"array")}function _T(n){return new $d(Fc(n),"ascending","ascending")}function DT(n){return new $d(Fc(n),"descending","descending")}class $d{constructor(e,t,s){this.expr=e,this.direction=t,this._methodName=s,this._protoValueType="ProtoValue"}_toProto(e){return{mapValue:{fields:{direction:Od(this.direction),expression:this.expr._toProto(e)}}}}_readUserData(e){this.expr._readUserData(e)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.optionsProto=void 0,{rawOptions:this.rawOptions,...this.knownOptions}=e}_readUserData(e){this.optionsProto=this._optionsUtil.getOptionsProto(e,this.knownOptions,this.rawOptions)}_toProto(e){return{name:this._name,options:this.optionsProto}}}class Kd extends wt{get _name(){return"add_fields"}get _optionsUtil(){return new Ze({})}constructor(e,t){super(t),this.fields=e}_toProto(e){return{...super._toProto(e),args:[jr(e,this.fields)]}}_readUserData(e){super._readUserData(e),Nn(this.fields,e)}}class qd extends wt{get _name(){return"aggregate"}get _optionsUtil(){return new Ze({})}constructor(e,t,s){super(s),this.groups=e,this.accumulators=t}_toProto(e){return{...super._toProto(e),args:[jr(e,this.accumulators),jr(e,this.groups)]}}_readUserData(e){super._readUserData(e),Nn(this.groups,e),Nn(this.accumulators,e)}}class zd extends wt{get _name(){return"distinct"}get _optionsUtil(){return new Ze({})}constructor(e,t){super(t),this.groups=e}_toProto(e){return{...super._toProto(e),args:[jr(e,this.groups)]}}_readUserData(e){super._readUserData(e),Nn(this.groups,e)}}class ra extends wt{get _name(){return"collection"}get _optionsUtil(){return new Ze({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.hr=e.startsWith("/")?e:"/"+e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:this.hr}]}}_readUserData(e){super._readUserData(e)}}class ia extends wt{get _name(){return"collection_group"}get _optionsUtil(){return new Ze({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.collectionId=e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:""},{stringValue:this.collectionId}]}}_readUserData(e){super._readUserData(e)}}class Lc extends wt{get _name(){return"database"}get _optionsUtil(){return new Ze({})}_toProto(e){return{...super._toProto(e)}}_readUserData(e){super._readUserData(e)}}class kc extends wt{get _name(){return"documents"}get _optionsUtil(){return new Ze({})}constructor(e,t){if(super(t),!e||e.length===0)throw new Q(V.INVALID_ARGUMENT,"Empty document paths are not allowed in DocumentsSource");const s=e.map((i=>i.startsWith("/")?i:"/"+i)),r=new Set(s);if(r.size!==s.length)throw new Q(V.INVALID_ARGUMENT,"Duplicate document paths are not allowed in DocumentsSource");this.Tr=s,this.Pr=r}_toProto(e){return{...super._toProto(e),args:this.Tr.map((t=>({referenceValue:t})))}}_readUserData(e){super._readUserData(e)}}class Mc extends wt{get _name(){return"where"}get _optionsUtil(){return new Ze({})}constructor(e,t){super(t),this.condition=e}_toProto(e){return{...super._toProto(e),args:[this.condition._toProto(e)]}}_readUserData(e){super._readUserData(e),Nn(this.condition,e)}}class Po extends wt{get _name(){return"limit"}get _optionsUtil(){return new Ze({})}constructor(e,t){W(!isNaN(e)&&e!==1/0&&e!==-1/0,34860),super(t),this.limit=e}_toProto(e){return{...super._toProto(e),args:[wc(e,this.limit)]}}}class Wh extends wt{get _name(){return"offset"}get _optionsUtil(){return new Ze({})}constructor(e,t){super(t),this.offset=e}_toProto(e){return{...super._toProto(e),args:[wc(e,this.offset)]}}}class wT extends wt{get _name(){return"select"}get _optionsUtil(){return new Ze({})}constructor(e,t){super(t),this.selections=e}_toProto(e){return{...super._toProto(e),args:[jr(e,this.selections)]}}_readUserData(e){super._readUserData(e),Nn(this.selections,e)}}class xc extends wt{get _name(){return"sort"}get _optionsUtil(){return new Ze({})}constructor(e,t){super(t),this.orderings=e}_toProto(e){return{...super._toProto(e),args:this.orderings.map((t=>t._toProto(e)))}}_readUserData(e){super._readUserData(e),Nn(this.orderings,e)}}let IT=class Qd extends wt{get _name(){return"replace_with"}get _optionsUtil(){return new Ze({})}constructor(e,t){super(t),this.map=e}_toProto(e){return{...super._toProto(e),args:[this.map._toProto(e),Od(Qd.Ir)]}}_readUserData(e){super._readUserData(e),Nn(this.map,e)}};IT.Ir="full_replace";function Nn(n,e){return cT(n)?n._readUserData(e):Array.isArray(n)?n.forEach((t=>t._readUserData(e))):n instanceof Map?n.forEach((t=>t._readUserData(e))):Object.values(n).forEach((t=>t._readUserData(e))),n}// Copyright 2024 Google LLC* @license
class ct{constructor(e,t,s){this.serializer=e,this.stages=t,this.listenOptions=s,this.isCorePipeline=!0}getPipelineCollection(){return oa(this)}getPipelineCollectionGroup(){return Vc(this)}getPipelineCollectionId(){return yT(this)}getPipelineDocuments(){return VB(this)}getPipelineFlavor(){return(function(t){let s="exact";return t.stages.forEach(((r,i)=>{r._name!==zd.name&&r._name!==qd.name||(s="keyless"),r._name===wT.name&&s==="exact"&&(s="augmented"),r._name===Kd.name&&i<t.stages.length-1&&s==="exact"&&(s="augmented")})),s})(this)}getPipelineSourceType(){return wn(this)}}function wn(n){const e=n.stages[0];return e instanceof ra||e instanceof ia||e instanceof Lc||e instanceof kc?e._name:"unknown"}function oa(n){if(wn(n)==="collection")return n.stages[0].hr}function Vc(n){if(wn(n)==="collection_group")return n.stages[0].collectionId}function yT(n){switch(wn(n)){case"collection":return De.fromString(oa(n)).lastSegment();case"collection_group":return Vc(n);default:return}}function VB(n){if(wn(n)==="documents")return n.stages[0].Tr}class I{constructor(e,t){this.type=e,this.value=t}static mr(){return new I("ERROR",void 0)}static pr(){return new I("UNSET",void 0)}static gr(){return new I("NULL",Us)}static newValue(e){return Ft(e)?new I("NULL",Us):(function(s){return!!s&&"booleanValue"in s})(e)?new I("BOOLEAN",e):Gt(e)?new I("INT",e):Yn(e)?new I("DOUBLE",e):(function(s){return!!s&&"timestampValue"in s&&!!s.timestampValue})(e)?new I("TIMESTAMP",e):(function(s){return!!s&&"stringValue"in s})(e)?new I("STRING",e):(function(s){return!!s&&"bytesValue"in s})(e)?new I("BYTES",e):e.referenceValue?new I("REFERENCE",e):e.geoPointValue?new I("GEO_POINT",e):Js(e)?new I("ARRAY",e):yo(e)?new I("VECTOR",e):ss(e)?new I("MAP",e):new I("ERROR",void 0)}yr(){return this.type==="ERROR"||this.type==="UNSET"}wr(){return this.type==="NULL"}}function vr(n){if(!n.yr())return n.value}function Wd(n){return n instanceof Pn?n._expr:n}function X(n){if((n=Wd(n))instanceof Bi)return new TT(n);if(n instanceof Qs)return new AT(n);if(n instanceof _r)return new RT(n);if(n instanceof F){if(n.name==="add")return new ST(n);if(n.name==="subtract")return new OT(n);if(n.name==="multiply")return new PT(n);if(n.name==="divide")return new NT(n);if(n.name==="mod")return new FT(n);if(n.name==="and")return new LT(n);if(n.name==="equal")return new qT(n);if(n.name==="not_equal")return new zT(n);if(n.name==="less_than")return new QT(n);if(n.name==="less_than_or_equal")return new WT(n);if(n.name==="greater_than")return new YT(n);if(n.name==="greater_than_or_equal")return new XT(n);if(n.name==="array_concat")return new ZT(n);if(n.name==="array_reverse")return new eA(n);if(n.name==="array_contains")return new tA(n);if(n.name==="array_contains_all")return new nA(n);if(n.name==="array_contains_any")return new sA(n);if(n.name==="array_length")return new rA(n);if(n.name==="array_element")return new iA(n);if(n.name==="equal_any")return new Yd(n);if(n.name==="not_equal_any")return new MT(n);if(n.name==="is_nan")return new xT(n);if(n.name==="is_not_nan")return new VT(n);if(n.name==="is_null")return new GT(n);if(n.name==="is_not_null")return new HT(n);if(n.name==="is_error")return new UT(n);if(n.name==="exists")return new jT(n);if(n.name==="not")return new aa(n);if(n.name==="or")return new kT(n);if(n.name==="xor")return new Gc(n);if(n.name==="conditional")return new JT(n);if(n.name==="maximum")return new $T(n);if(n.name==="minimum")return new KT(n);if(n.name==="reverse")return new oA(n);if(n.name==="replace_first")return new aA(n);if(n.name==="replace_all")return new BA(n);if(n.name==="char_length")return new cA(n);if(n.name==="byte_length")return new lA(n);if(n.name==="like")return new uA(n);if(n.name==="regex_contains")return new hA(n);if(n.name==="regex_match")return new fA(n);if(n.name==="string_contains")return new CA(n);if(n.name==="starts_with")return new dA(n);if(n.name==="ends_with")return new pA(n);if(n.name==="to_lower")return new gA(n);if(n.name==="to_upper")return new mA(n);if(n.name==="trim")return new EA(n);if(n.name==="string_concat")return new _A(n);if(n.name==="map_get")return new DA(n);if(n.name==="cosine_distance")return new wA(n);if(n.name==="dot_product")return new IA(n);if(n.name==="euclidean_distance")return new yA(n);if(n.name==="vector_length")return new TA(n);if(n.name==="unix_micros_to_timestamp")return new SA(n);if(n.name==="timestamp_to_unix_micros")return new NA(n);if(n.name==="unix_millis_to_timestamp")return new OA(n);if(n.name==="timestamp_to_unix_millis")return new FA(n);if(n.name==="unix_seconds_to_timestamp")return new PA(n);if(n.name==="timestamp_to_unix_seconds")return new LA(n);if(n.name==="timestamp_add")return new kA(n);if(n.name==="timestamp_subtract")return new MA(n)}throw new Error(`Unknown Expr : ${n}`)}class TT{constructor(e){this.expr=e}evaluate(e,t){if(this.expr.fieldName===Gs)return I.newValue({referenceValue:So(e.serializer,t.key)});if(this.expr.fieldName==="__update_time__")return I.newValue({timestampValue:so(e.serializer,t.version)});if(this.expr.fieldName==="__create_time__")return I.newValue({timestampValue:so(e.serializer,t.createTime)});const s=t.data.field(this.expr._fieldPath);return s?Wo(s)?I.newValue((function(i,o){if(i.serverTimestampBehavior==="estimate")return{timestampValue:so(i.serializer,_e.fromTimestamp(Lr(o)))};if(i.serverTimestampBehavior==="previous"){const B=Yo(o);if(B)return B}return{nullValue:"NULL_VALUE"}})(e,s)):I.newValue(s):I.pr()}}class AT{constructor(e){this.expr=e}evaluate(e,t){return I.newValue(this.expr._getValue())}}class RT{constructor(e){this.expr=e}evaluate(e,t){const s=this.expr.cr.map((r=>X(r).evaluate(e,t)));return s.some((r=>r.yr()))?I.mr():I.newValue({arrayValue:{values:s.map((r=>r.value))}})}}function $e(n){return Yn(n)?Number(n.doubleValue):Number(n.integerValue)}function jt(n){return BigInt(n.integerValue)}const vT=BigInt("0x7fffffffffffffff"),bT=-BigInt("0x8000000000000000");class ci{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length>=2,24778);const s=X(this.expr.params[0]).evaluate(e,t),r=X(this.expr.params[1]).evaluate(e,t);let i=this.br(s,r);for(const o of this.expr.params.slice(2)){const B=X(o).evaluate(e,t);i=this.br(i,B)}return i}br(e,t){if(e.yr()||t.yr())return I.mr();if(e.wr()||t.wr())return I.gr();const s=e.value,r=t.value;if(!Yn(s)&&!Gt(s)||!Yn(r)&&!Gt(r))return I.mr();if(Yn(s)||Yn(r)){const i=this.Sr(s,r);return i?I.newValue(i):I.mr()}if(Gt(s)&&Gt(r)){const i=this.vr(s,r);return i===void 0?I.mr():typeof i=="number"?I.newValue({doubleValue:i}):i<bT||i>vT?I.mr():I.newValue({integerValue:`${i}`})}return I.mr()}}function nn(n,e){return Oe(n)!==Oe(e)?"TYPE_MISMATCH":vt(n)||vt(e)?"NOT_EQ":Ft(n)&&Ft(e)?"EQ":Ft(n)||Ft(e)?"NULL":Js(n)&&Js(e)?(function(s,r){if(s.values?.length!==r.values?.length)return"NOT_EQ";let i=!1;for(let o=0;o<(s.values?.length??0);o++){const B=s.values[o],c=r.values[o];switch(nn(B,c)){case"EQ":break;case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":i=!0;break;default:ne(44609,{Dr:B,Cr:c})}}return i?"NULL":"EQ"})(n.arrayValue,e.arrayValue):yo(n)&&yo(e)||ss(n)&&ss(e)?(function(s,r){const i=s.fields||{},o=r.fields||{};if(_o(i)!==_o(o))return"NOT_EQ";let B=!1;for(const c in i)if(i.hasOwnProperty(c)){if(o[c]===void 0)return"NOT_EQ";switch(nn(i[c],o[c])){case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":B=!0}}return B?"NULL":"EQ"})(n.mapValue,e.mapValue):(function(s,r){return Rt(s,r,{u:!1,i:!0,o:!0})})(n,e)?"EQ":"NOT_EQ"}class ST extends ci{vr(e,t){return jt(e)+jt(t)}Sr(e,t){return{doubleValue:$e(e)+$e(t)}}}class OT extends ci{constructor(e){super(e),this.expr=e}vr(e,t){return jt(e)-jt(t)}Sr(e,t){return{doubleValue:$e(e)-$e(t)}}}class PT extends ci{constructor(e){super(e),this.expr=e}vr(e,t){return jt(e)*jt(t)}Sr(e,t){return{doubleValue:$e(e)*$e(t)}}}class NT extends ci{constructor(e){super(e),this.expr=e}vr(e,t){const s=jt(t);if(s!==BigInt(0))return jt(e)/s}Sr(e,t){const s=$e(t);return s===0?{doubleValue:kr(s)?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY}:{doubleValue:$e(e)/s}}}class FT extends ci{constructor(e){super(e),this.expr=e}vr(e,t){const s=jt(t);if(s!==BigInt(0))return jt(e)%s}Sr(e,t){const s=$e(t);if(s!==0)return{doubleValue:$e(e)%s}}}class LT{constructor(e){this.expr=e}evaluate(e,t){let s=!1,r=!1;for(const i of this.expr.params){const o=X(i).evaluate(e,t);switch(o.type){case"BOOLEAN":if(!o.value?.booleanValue)return I.newValue(xe);break;case"NULL":r=!0;break;default:s=!0}}return s?I.mr():r?I.gr():I.newValue(ht)}}class aa{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,9634);const s=X(this.expr.params[0]).evaluate(e,t);switch(s.type){case"BOOLEAN":return I.newValue({booleanValue:!s.value?.booleanValue});case"NULL":return I.gr();default:return I.mr()}}}class kT{constructor(e){this.expr=e}evaluate(e,t){let s=!1,r=!1;for(const i of this.expr.params){const o=X(i).evaluate(e,t);switch(o.type){case"BOOLEAN":if(o.value?.booleanValue)return I.newValue(ht);break;case"NULL":r=!0;break;default:s=!0}}return s?I.mr():r?I.gr():I.newValue(xe)}}class Gc{constructor(e){this.expr=e}evaluate(e,t){let s=!1,r=!1;for(const i of this.expr.params){const o=X(i).evaluate(e,t);switch(o.type){case"BOOLEAN":s=Gc.xor(s,!!o.value?.booleanValue);break;case"NULL":r=!0;break;default:return I.mr()}}return r?I.gr():I.newValue({booleanValue:s})}static xor(e,t){return(e||t)&&!(e&&t)}}class Yd{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===2,55094);let s=!1;const r=X(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":s=!0;break;case"ERROR":case"UNSET":return I.mr()}const i=X(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":s=!0;break;default:return I.mr()}if(s)return I.gr();for(const o of i.value?.arrayValue?.values??[])switch(Ft(r.value)&&Ft(o)?"EQ":nn(r.value,o)){case"EQ":return I.newValue(ht);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":s=!0;break;default:ne(44608,{value:r.value,candidate:o})}return s?I.gr():I.newValue(xe)}}class MT{constructor(e){this.expr=e}evaluate(e,t){return new aa(new F("not",[new F("equal_any",this.expr.params)])).evaluate(e,t)}}class xT{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,23322);const s=X(this.expr.params[0]).evaluate(e,t);switch(s.type){case"INT":return I.newValue(xe);case"DOUBLE":return I.newValue({booleanValue:isNaN($e(s.value))});case"NULL":return I.gr();default:return I.mr()}}}class VT{constructor(e){this.expr=e}evaluate(e,t){return W(this.expr.params.length===1,50406),new aa(new F("not",[new F("is_nan",this.expr.params)])).evaluate(e,t)}}class GT{constructor(e){this.expr=e}evaluate(e,t){switch(W(this.expr.params.length===1,23123),X(this.expr.params[0]).evaluate(e,t).type){case"NULL":return I.newValue(ht);case"UNSET":case"ERROR":return I.mr();default:return I.newValue(xe)}}}class HT{constructor(e){this.expr=e}evaluate(e,t){return W(this.expr.params.length===1,23167),new aa(new F("not",[new F("is_null",this.expr.params)])).evaluate(e,t)}}class UT{constructor(e){this.expr=e}evaluate(e,t){return W(this.expr.params.length===1,5228),X(this.expr.params[0]).evaluate(e,t).type==="ERROR"?I.newValue(ht):I.newValue(xe)}}class jT{constructor(e){this.expr=e}evaluate(e,t){switch(W(this.expr.params.length===1,6877),X(this.expr.params[0]).evaluate(e,t).type){case"ERROR":return I.mr();case"UNSET":return I.newValue(xe);default:return I.newValue(ht)}}}class JT{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===3,11706);const s=X(this.expr.params[0]).evaluate(e,t);switch(s.type){case"BOOLEAN":return s.value?.booleanValue?X(this.expr.params[1]).evaluate(e,t):X(this.expr.params[2]).evaluate(e,t);case"NULL":return X(this.expr.params[2]).evaluate(e,t);default:return I.mr()}}}class $T{constructor(e){this.expr=e}evaluate(e,t){const s=this.expr.params.map((i=>X(i).evaluate(e,t)));let r;for(const i of s)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:r=r===void 0||ft(i.value,r.value)>0?i:r}return r===void 0?I.gr():r}}class KT{constructor(e){this.expr=e}evaluate(e,t){const s=this.expr.params.map((i=>X(i).evaluate(e,t)));let r;for(const i of s)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:r=r===void 0||ft(i.value,r.value)<0?i:r}return r===void 0?I.gr():r}}class Ws{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===2,31033,`${this.expr.name}() function should have exactly 2 params`);const s=X(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ERROR":case"UNSET":return I.mr()}const r=X(this.expr.params[1]).evaluate(e,t);switch(r.type){case"ERROR":case"UNSET":return I.mr()}return this.Fr(s,r)}}class qT extends Ws{constructor(e){super(e),this.expr=e}Fr(e,t){if(e.wr()&&t.wr())return I.newValue(ht);if(e.wr()||t.wr()||vt(e.value)||vt(t.value)||Oe(e.value)!==Oe(t.value))return I.newValue(xe);switch(nn(e.value,t.value)){case"EQ":return I.newValue(ht);case"NOT_EQ":return I.newValue(xe);case"NULL":return I.gr();default:ne(44615,{left:e,right:t})}}}class zT extends Ws{constructor(e){super(e),this.expr=e}Fr(e,t){switch(nn(e.value,t.value)){case"EQ":return I.newValue(xe);case"NOT_EQ":case"TYPE_MISMATCH":return I.newValue(ht);case"NULL":return I.gr();default:ne(44614,{left:e,right:t})}}}class QT extends Ws{constructor(e){super(e),this.expr=e}Fr(e,t){return Oe(e.value)!==Oe(t.value)||vt(e.value)||vt(t.value)?I.newValue(xe):I.newValue({booleanValue:ft(e.value,t.value)<0})}}class WT extends Ws{constructor(e){super(e),this.expr=e}Fr(e,t){return Oe(e.value)!==Oe(t.value)||vt(e.value)||vt(t.value)?I.newValue(xe):nn(e.value,t.value)==="EQ"?I.newValue(ht):I.newValue({booleanValue:ft(e.value,t.value)<0})}}class YT extends Ws{constructor(e){super(e),this.expr=e}Fr(e,t){return Oe(e.value)!==Oe(t.value)||vt(e.value)||vt(t.value)?I.newValue(xe):I.newValue({booleanValue:ft(e.value,t.value)>0})}}class XT extends Ws{constructor(e){super(e),this.expr=e}Fr(e,t){return Oe(e.value)!==Oe(t.value)||vt(e.value)||vt(t.value)?I.newValue(xe):nn(e.value,t.value)==="EQ"?I.newValue(ht):I.newValue({booleanValue:ft(e.value,t.value)>0})}}class ZT{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class eA{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,216);const s=X(this.expr.params[0]).evaluate(e,t);switch(s.type){case"NULL":return I.gr();case"ARRAY":{const r=s.value.arrayValue?.values??[];return I.newValue({arrayValue:{values:[...r].reverse()}})}default:return I.mr()}}}class tA{constructor(e){this.expr=e}evaluate(e,t){return W(this.expr.params.length===2,52884),new Yd(new F("eq_any",[this.expr.params[1],this.expr.params[0]])).evaluate(e,t)}}class nA{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===2,1392);let s=!1;const r=X(this.expr.params[0]).evaluate(e,t);switch(r.type){case"ARRAY":break;case"NULL":s=!0;break;default:return I.mr()}const i=X(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":s=!0;break;default:return I.mr()}if(s)return I.gr();const o=i.value?.arrayValue?.values??[],B=r.value?.arrayValue?.values??[];for(const c of o){let l=!1;s=!1;for(const f of B){switch(Ft(c)&&Ft(f)?"EQ":nn(c,f)){case"EQ":l=!0;break;case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":s=!0;break;default:ne(44613,{value:f,search:c})}if(l)break}if(!l)return I.newValue(xe)}return I.newValue(ht)}}class sA{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===2,2680);let s=!1;const r=X(this.expr.params[0]).evaluate(e,t);switch(r.type){case"ARRAY":break;case"NULL":s=!0;break;default:return I.mr()}const i=X(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":s=!0;break;default:return I.mr()}if(s)return I.gr();const o=i.value?.arrayValue?.values??[],B=r.value?.arrayValue?.values??[];for(const c of B)for(const l of o)switch(Ft(c)&&Ft(l)?"EQ":nn(c,l)){case"EQ":return I.newValue(ht);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":s=!0;break;default:ne(60403,{value:c,search:l})}return s?I.gr():I.newValue(xe)}}class rA{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,38605);const s=X(this.expr.params[0]).evaluate(e,t);switch(s.type){case"NULL":return I.gr();case"ARRAY":return I.newValue({integerValue:`${s.value?.arrayValue?.values?.length??0}`});default:return I.mr()}}}class iA{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class oA{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,1508);const s=X(this.expr.params[0]).evaluate(e,t);switch(s.type){case"NULL":return I.gr();case"BYTES":{const r=s.value?.bytesValue;if(typeof r=="string"){const i=_t.fromBase64String(r).toUint8Array();return i.reverse(),I.newValue({bytesValue:_t.fromUint8Array(i).toBase64()})}return I.newValue({bytesValue:new Uint8Array(r).reverse()})}case"STRING":{const r=s.value?.stringValue,i=new Intl.__PRIVATE_Segmenter(void 0,{granularity:"grapheme"}).segment(r),o=Array.from(i,(B=>B.segment)).reverse();return I.newValue({stringValue:o.join("")})}default:return I.mr()}}}class aA{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class BA{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class cA{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,19400);const s=X(this.expr.params[0]).evaluate(e,t);switch(s.type){case"NULL":return I.gr();case"STRING":{const r=(function(o){let B=0;for(let c=0;c<o.length;c++){const l=o.codePointAt(c);if(l===void 0)return;if(l<=65535)if(l>=55296&&l<=57343)if(l<=56319){const f=o.codePointAt(c+1);f!==void 0&&f>=56320&&f<=57343?(B+=1,c++):B+=1}else B+=1;else B+=1;else{if(!(l<=1114111))return;B+=1,c++}}return B})(s.value.stringValue);return r===void 0?I.mr():I.newValue({integerValue:r})}default:return I.mr()}}}class lA{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,8486);const s=X(this.expr.params[0]).evaluate(e,t);switch(s.type){case"BYTES":{const r=s.value?.bytesValue;return typeof r=="string"?I.newValue({integerValue:_t.fromBase64String(r).toUint8Array().length}):I.newValue({integerValue:new Uint8Array(r).length})}case"STRING":{const r=(function(o){let B=0;for(let c=0;c<o.length;c++){const l=o.codePointAt(c);if(l===void 0)return;if(l>=55296&&l<=57343){if(!(l<=56319))return;{const f=o.codePointAt(c+1);if(f===void 0||!(f>=56320&&f<=57343))return;B+=4,c++}}else if(l<=127)B+=1;else if(l<=2047)B+=2;else if(l<=65535)B+=3;else{if(!(l<=1114111))return;B+=4,c++}}return B})(s.value?.stringValue);return r===void 0?I.mr():I.newValue({integerValue:r})}case"NULL":return I.gr();default:return I.mr()}}}class Ys{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===2,39773,`${this.expr.name}() function should have exactly two parameters`);let s=!1;const r=X(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":break;case"NULL":s=!0;break;default:return I.mr()}const i=X(this.expr.params[1]).evaluate(e,t);switch(i.type){case"STRING":break;case"NULL":s=!0;break;default:return I.mr()}return s?I.gr():this.Or(r.value?.stringValue,i.value?.stringValue)}}class uA extends Ys{Or(e,t){try{const s=(function(o){let B="";for(let c=0;c<o.length;c++){const l=o.charAt(c);switch(l){case"_":B+=".";break;case"%":B+=".*";break;case"\\":case".":case"*":case"?":case"+":case"^":case"$":case"|":case"(":case")":case"[":case"]":case"{":case"}":B+="\\"+l;break;default:B+=l}}return"^"+B+"$"})(t),r=dc.compile(s);return I.newValue({booleanValue:r.matches(e)})}catch(s){return tn(`Invalid LIKE pattern converted to regex: ${t}, returning error. Error: ${s}`),I.mr()}}}class hA extends Ys{Or(e,t){try{const s=dc.compile(t);return I.newValue({booleanValue:s.test(e)})}catch{return tn(`Invalid regex pattern found in regex_contains: ${t}, returning error`),I.mr()}}}class fA extends Ys{Or(e,t){try{return I.newValue({booleanValue:dc.compile(t).matches(e)})}catch{return tn(`Invalid regex pattern found in regex_match: ${t}, returning error`),I.mr()}}}class CA extends Ys{Or(e,t){return I.newValue({booleanValue:e.includes(t)})}}class dA extends Ys{Or(e,t){return I.newValue({booleanValue:e.startsWith(t)})}}class pA extends Ys{Or(e,t){return I.newValue({booleanValue:e.endsWith(t)})}}class gA{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,29079);const s=X(this.expr.params[0]).evaluate(e,t);switch(s.type){case"STRING":return I.newValue({stringValue:s.value?.stringValue?.toLowerCase()});case"NULL":return I.gr();default:return I.mr()}}}class mA{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,60487);const s=X(this.expr.params[0]).evaluate(e,t);switch(s.type){case"STRING":return I.newValue({stringValue:s.value?.stringValue?.toUpperCase()});case"NULL":return I.gr();default:return I.mr()}}}class EA{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,28544);const s=X(this.expr.params[0]).evaluate(e,t);switch(s.type){case"STRING":return I.newValue({stringValue:s.value?.stringValue?.trim()});case"NULL":return I.gr();default:return I.mr()}}}class _A{constructor(e){this.expr=e}evaluate(e,t){const s=this.expr.params.map((o=>X(o).evaluate(e,t)));let r="",i=!1;for(const o of s)switch(o.type){case"STRING":r+=o.value.stringValue;break;case"NULL":i=!0;break;default:return I.mr()}return i?I.gr():I.newValue({stringValue:r})}}class DA{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===2,4483);const s=X(this.expr.params[0]).evaluate(e,t);switch(s.type){case"UNSET":return I.pr();case"MAP":break;default:return I.mr()}const r=X(this.expr.params[1]).evaluate(e,t);if(r.type!=="STRING")return I.mr();const i=s.value?.mapValue?.fields?.[r.value?.stringValue];return i===void 0?I.pr():I.newValue(i)}}class Hc{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===2,25231,`${this.expr.name}() function should have exactly 2 params`);let s=!1;const r=X(this.expr.params[0]).evaluate(e,t);switch(r.type){case"VECTOR":break;case"NULL":s=!0;break;default:return I.mr()}const i=X(this.expr.params[1]).evaluate(e,t);switch(i.type){case"VECTOR":break;case"NULL":s=!0;break;default:return I.mr()}if(s)return I.gr();const o=FB(r.value),B=FB(i.value);if(o===void 0||B===void 0||o.values?.length!==B.values?.length)return I.mr();const c=this.Mr(o,B);return c===void 0||isNaN(c)?I.mr():I.newValue({doubleValue:c})}}class wA extends Hc{Mr(e,t){const s=e?.values??[],r=t?.values??[];if(s.length===0)return;let i=0,o=0,B=0;for(let l=0;l<s.length;l++){if(!bn(s[l])||!bn(r[l]))return;const f=$e(s[l]),C=$e(r[l]);i+=f*C,o+=f*f,B+=C*C}const c=Math.sqrt(o)*Math.sqrt(B);if(c!==0)return 1-Math.max(-1,Math.min(1,i/c))}}class IA extends Hc{Mr(e,t){const s=e?.values??[],r=t?.values??[];if(s.length===0)return 0;let i=0;for(let o=0;o<s.length;o++){if(!bn(s[o])||!bn(r[o]))return;i+=$e(s[o])*$e(r[o])}return i}}class yA extends Hc{Mr(e,t){const s=e?.values??[],r=t?.values??[];if(s.length===0)return 0;let i=0;for(let o=0;o<s.length;o++){if(!bn(s[o])||!bn(r[o]))return;const B=$e(s[o]),c=$e(r[o]);i+=Math.pow(B-c,2)}return Math.sqrt(i)}}class TA{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,39044);const s=X(this.expr.params[0]).evaluate(e,t);switch(s.type){case"VECTOR":{const r=FB(s.value);return I.newValue({integerValue:r?.values?.length??0})}case"NULL":return I.gr();default:return I.mr()}}}const qr=BigInt(-62135596800),zr=BigInt(253402300799),No=BigInt(1e3),In=BigInt(1e6),AA=qr*No,RA=zr*No+BigInt(999),vA=qr*In,bA=zr*In+BigInt(999999);function Uc(n){return n>=vA&&n<=bA}function Xd(n){return n>=qr&&n<=zr}function Qr(n,e){const t=BigInt(n);return!(t<qr||t>zr)&&!(e<0||e>=1e9)&&(t!==qr||e===0)&&!(t===zr&&e>999999999)}function Zd(n,e){return e<0?{seconds:n-1,nanos:e+1e9}:{seconds:n,nanos:e}}function jc(n){return BigInt(n.seconds)*In+BigInt(Math.trunc(n.nanoseconds/1e3))}class Jc{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,49262,`${this.expr.name}() function should have exactly one parameter`);const s=X(this.expr.params[0]).evaluate(e,t);switch(s.type){case"INT":return this.toTimestamp(BigInt(s.value.integerValue));case"NULL":return I.gr();default:return I.mr()}}}class SA extends Jc{toTimestamp(e){if(!Uc(e))return I.mr();let t=Number(e/In),s=Number(e%In*BigInt(1e3));const r=Zd(t,s);return t=r.seconds,s=r.nanos,Qr(t,s)?I.newValue({timestampValue:{seconds:t,nanos:s}}):I.mr()}}class OA extends Jc{toTimestamp(e){if(!(function(o){return o>=AA&&o<=RA})(e))return I.mr();let t=Number(e/No),s=Number(e%No*BigInt(1e6));const r=Zd(t,s);return t=r.seconds,s=r.nanos,Qr(t,s)?I.newValue({timestampValue:{seconds:t,nanos:s}}):I.mr()}}class PA extends Jc{toTimestamp(e){if(!Xd(e))return I.mr();const t=Number(e);return I.newValue({timestampValue:{seconds:t,nanos:0}})}}class $c{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,1265,`${this.expr.name}() function should have exactly one parameter`);const s=X(this.expr.params[0]).evaluate(e,t);switch(s.type){case"TIMESTAMP":break;case"NULL":return I.gr();default:return I.mr()}const r=Tc(s.value.timestampValue);return Qr(r.seconds,r.nanoseconds)?this.Nr(r):I.mr()}}class NA extends $c{Nr(e){const t=jc(e);return Uc(t)?I.newValue({integerValue:`${t.toString()}`}):I.mr()}}class FA extends $c{Nr(e){const t=jc(e),s=t/BigInt(1e3),r=t%BigInt(1e3);return s>BigInt(0)||r===BigInt(0)?I.newValue({integerValue:s.toString()}):I.newValue({integerValue:(s-BigInt(1)).toString()})}}class LA extends $c{Nr(e){const t=BigInt(e.seconds);return Xd(t)?I.newValue({integerValue:t.toString()}):I.mr()}}class ep{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===3,2775,`${this.expr.name}() function should have exactly 3 parameters`);let s=!1;const r=X(this.expr.params[0]).evaluate(e,t);switch(r.type){case"TIMESTAMP":break;case"NULL":s=!0;break;default:return I.mr()}const i=X(this.expr.params[1]).evaluate(e,t);let o;switch(i.type){case"STRING":if(o=(function(K){switch(K){case"microsecond":return"microsecond";case"millisecond":return"millisecond";case"second":return"second";case"minute":return"minute";case"hour":return"hour";case"day":return"day";default:return}})(i.value.stringValue),o===void 0)return I.mr();break;case"NULL":s=!0;break;default:return I.mr()}const B=X(this.expr.params[2]).evaluate(e,t);switch(B.type){case"INT":break;case"NULL":s=!0;break;default:return I.mr()}if(s)return I.gr();const c=BigInt(B.value.integerValue);let l;try{switch(o){case"microsecond":l=c;break;case"millisecond":l=c*BigInt(1e3);break;case"second":l=c*BigInt(1e6);break;case"minute":l=c*BigInt(6e7);break;case"hour":l=c*BigInt(36e8);break;case"day":l=c*BigInt(864e8);break;default:return I.mr()}if(o!=="microsecond"&&c!==BigInt(0)&&l/c!==BigInt(this.Lr(o)))return I.mr()}catch(J){return tn(`Error during timestamp arithmetic: ${J}`),I.mr()}const f=Tc(r.value.timestampValue);if(!Qr(f.seconds,f.nanoseconds))return I.mr();const C=jc(f),m=this.Br(C,l);if(!Uc(m))return I.mr();const v=Number(m/In),R=m%In,N=Number((R<0?R+In:R)*BigInt(1e3)),x=R<0?v-1:v;return Qr(x,N)?I.newValue({timestampValue:{seconds:x,nanos:N}}):I.mr()}Lr(e){switch(e){case"millisecond":return 1e3;case"second":return 1e6;case"minute":return 6e7;case"hour":return 36e8;case"day":return 864e8;default:return 1}}}class kA extends ep{Br(e,t){return e+t}}class MA extends ep{Br(e,t){return e-t}}function Wr(n){if((n=Wd(n))instanceof Bi)return`fld(${n.fieldName})`;if(n instanceof Qs)return`cst(${(function(t){return t===null?"null":typeof t=="number"?t.toString():typeof t=="string"?`"${t}"`:t instanceof Je?`ref(${t.path})`:t instanceof mt?`vec(${JSON.stringify(t)})`:JSON.stringify(t)})(n.value)})`;if(n instanceof F)return`fn(${n.name},[${n.params.map(Wr).join(",")}])`;if(n.expressionType==="ListOfExpressions")return`list([${n.cr.map(Wr).join(",")}])`;throw new Error(`Unrecognized expr ${JSON.stringify(n,null,2)}`)}function xA(n){if(n instanceof Kd)return`${n._name}(${Ui(n.fields)})`;if(n instanceof qd){let e=`${n._name}(${Ui(n.accumulators)})`;return n.groups.size>0&&(e+=`grouping(${Ui(n.groups)})`),e}if(n instanceof zd)return`${n._name}(${Ui(n.groups)})`;if(n instanceof ra)return`${n._name}(${n.hr})`;if(n instanceof ia)return`${n._name}(${n.collectionId})`;if(n instanceof Lc)return`${n._name}()`;if(n instanceof kc)return`${n._name}(${n.Tr.sort()})`;if(n instanceof Mc)return`${n._name}(${Wr(n.condition)})`;if(n instanceof Po)return`${n._name}(${n.limit})`;if(n instanceof xc)return`${n._name}(${(function(t){return t.map((s=>`${Wr(s.expr)}${s.direction}`)).join(",")})(n.orderings)})`;throw new Error(`Unrecognized stage ${n._name}`)}function Ui(n){return`${Array.from(n.entries()).sort().map((([e,t])=>`${e}=${Wr(t)}`)).join(",")}`}function yn(n){return n.stages.map((e=>xA(e))).join("|")}function tp(n,e){return yn(n)===yn(e)}function Vt(n){return n instanceof ct}function Yh(n){return Vt(n)?yn(n):to(n)}function np(n){return Vt(n)?yn(n):(function(t){return`${wd(rs(t))}|lt:${t.limitType}`})(n)}function sp(n,e){return n instanceof ct&&e instanceof ct?tp(n,e):!(n instanceof ct&&!(e instanceof ct)||!(n instanceof ct)&&e instanceof ct)&&oy(n,e)}function rp(n){return ey(n)?yn(n):wd(n)}function ip(n,e){return n instanceof ct&&e instanceof ct?tp(n,e):!(n instanceof ct&&!(e instanceof ct)||!(n instanceof ct)&&e instanceof ct)&&Id(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&xI(i,e,s[r])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=yr(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=yr(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Rd();return this.mutations.forEach((r=>{const i=e.get(r.key),o=i.overlayedDocument;let B=this.applyToLocalView(o,i.mutatedFields);B=t.has(r.key)?null:B;const c=fd(o,B);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(_e.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),je())}isEqual(e){return this.batchId===e.batchId&&Vs(this.mutations,e.mutations,((t,s)=>Ph(t,s)))&&Vs(this.baseMutations,e.baseMutations,((t,s)=>Ph(t,s)))}}class Kc{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){W(e.mutations.length===s.length,58842,{Ur:e.mutations.length,kr:s.length});let r=(function(){return uy})();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Kc(e,t,s,r)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op="";function GA(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Xh(e)),e=HA(n.get(t),e);return Xh(e)}function HA(n,e){let t=e;const s=n.length;for(let r=0;r<s;r++){const i=n.charAt(r);switch(i){case"\0":t+="";break;case op:t+="";break;default:t+=i}}return t}function Xh(n){return n+op+""}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{constructor(e){this.$r=e}}function JA(n){const e=Iy({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?kB(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(){this.Zi=new KA}addToCollectionParentIndex(e,t){return this.Zi.add(t),k.resolve()}getCollectionParents(e,t){return k.resolve(this.Zi.getEntries(t))}addFieldIndex(e,t){return k.resolve()}deleteFieldIndex(e,t){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,t){return k.resolve()}getDocumentsMatchingTarget(e,t){return k.resolve(null)}getIndexType(e,t){return k.resolve(0)}getFieldIndexes(e,t){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,t){return k.resolve(On.min())}getMinOffsetFromCollectionGroup(e,t){return k.resolve(On.min())}updateCollectionGroup(e,t,s){return k.resolve()}updateIndexEntries(e,t){return k.resolve()}}class KA{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new Ve(De.comparator),i=!r.has(s);return this.index[t]=r.add(s),i}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Ve(De.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e){this.ys=e}next(){return this.ys+=2,this.ys}static ws(){return new Fn(0)}static bs(){return new Fn(-1)}}// Copyright 2024 Google LLC* @license
function qA(n,e){let t=e;for(const s of n.stages)t=zA({serializer:n.serializer,serverTimestampBehavior:n.listenOptions?.serverTimestampBehavior},s,t);return t}function qc(n,e){return qA(n,[e]).length>0}function zA(n,e,t){if(e instanceof ra)return(function(r,i,o){return o.filter((B=>B.isFoundDocument()&&`/${B.key.getCollectionPath().canonicalString()}`===i.hr))})(0,e,t);if(e instanceof Mc)return(function(r,i,o){return o.filter((B=>{const c=vr(X(i.condition).evaluate(r,B));return c!==void 0&&Rt(c,ht)}))})(n,e,t);if(e instanceof ia)return(function(r,i,o){return o.filter((B=>B.isFoundDocument()&&B.key.getCollectionPath().lastSegment()===i.collectionId))})(0,e,t);if(e instanceof Lc)return(function(r,i,o){return o.filter((B=>B.isFoundDocument()))})(0,0,t);if(e instanceof kc)return(function(r,i,o){return o.filter((B=>B.isFoundDocument()&&i.Pr.has(B.key.path.toStringWithLeadingSlash())))})(0,e,t);if(e instanceof Po)return(function(r,i,o){return o.slice(0,i.limit)})(0,e,t);if(e instanceof xc)return(function(r,i,o){const B=i.orderings.map((c=>({Ms:X(c.expr),direction:c.direction})));return[...o].sort(((c,l)=>{for(const{Ms:f,direction:C}of B){const m=vr(f.evaluate(r,c)),v=vr(f.evaluate(r,l)),R=ft(m??Us,v??Us);if(R!==0)return C==="ascending"?R:-R}return 0}))})(n,e,t);throw new Error(`Unknown stage: ${e._name}`)}function QA(n){const e=(function(s){for(let r=s.stages.length-1;r>=0;r--){const i=s.stages[r];if(i instanceof xc)return i.orderings}throw new Error("Pipeline must contain at least one Sort stage")})(n);return(t,s)=>{for(const r of e){const i=vr(X(r.expr).evaluate({serializer:n.serializer},t)),o=vr(X(r.expr).evaluate({serializer:n.serializer},s)),B=ft(i||Us,o||Us);if(B!==0)return r.direction==="ascending"?B:-B}return 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(){this.changes=new Cs((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,St.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?k.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(s=r,this.remoteDocumentCache.getEntry(e,t)))).next((r=>(s!==null&&yr(s.mutation,r,Nt.empty(),fe.now()),r)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,je()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=je()){const r=mn();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,s).next((i=>{let o=pr();return i.forEach(((B,c)=>{o=o.insert(B,c.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const s=mn();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,je())))}populateOverlays(e,t,s){const r=[];return s.forEach((i=>{t.has(i)||r.push(i)})),this.documentOverlayCache.getOverlays(e,r).next((i=>{i.forEach(((o,B)=>{t.set(o,B)}))}))}computeViews(e,t,s,r){let i=Ar();const o=Rr(),B=(function(){return Rr()})();return t.forEach(((c,l)=>{const f=s.get(l.key);r.has(l.key)&&(f===void 0||f.mutation instanceof fs)?i=i.insert(l.key,l):f!==void 0?(o.set(l.key,f.mutation.getFieldMask()),yr(f.mutation,l,f.mutation.getFieldMask(),fe.now())):o.set(l.key,Nt.empty())})),this.recalculateAndSaveOverlays(e,i).next((c=>(c.forEach(((l,f)=>o.set(l,f))),t.forEach(((l,f)=>B.set(l,new YA(f,o.get(l)??null)))),B)))}recalculateAndSaveOverlays(e,t){const s=Rr();let r=new ut(((o,B)=>o-B)),i=je();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const B of o)B.keys().forEach((c=>{const l=t.get(c);if(l===null)return;let f=s.get(c)||Nt.empty();f=B.applyToLocalView(l,f),s.set(c,f);const C=(r.get(B.batchId)||je()).add(c);r=r.insert(B.batchId,C)}))})).next((()=>{const o=[],B=r.getReverseIterator();for(;B.hasNext();){const c=B.getNext(),l=c.key,f=c.value,C=Rd();f.forEach((m=>{if(!i.has(m)){const v=fd(t.get(m),s.get(m));v!==null&&C.set(m,v),i=i.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,l,C))}return k.waitFor(o)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,r){return Vt(t)?this.getDocumentsMatchingPipeline(e,t,s,r):sy(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):ry(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,r):this.getDocumentsMatchingCollectionQuery(e,t,s,r)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next((i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-i.size):k.resolve(mn());let B=Ur,c=i;return o.next((l=>k.forEach(l,((f,C)=>(B<C.largestBatchId&&(B=C.largestBatchId),i.get(f)?k.resolve():this.remoteDocumentCache.getEntry(e,f).next((m=>{c=c.insert(f,m)}))))).next((()=>this.populateOverlays(e,l,i))).next((()=>this.computeViews(e,c,l,je()))).next((f=>({batchId:B,changes:Ad(f)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new re(t)).next((s=>{let r=pr();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,r){const i=t.collectionGroup;let o=pr();return this.indexManager.getCollectionParents(e,i).next((B=>k.forEach(B,(c=>{const l=(function(C,m){return new ta(m,null,C.explicitOrderBy.slice(),C.filters.slice(),C.limit,C.limitType,C.startAt,C.endAt)})(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,s,r).next((f=>{f.forEach(((C,m)=>{o=o.insert(C,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,i,r)))).next((o=>this.retrieveMatchingLocalDocuments(i,o,(B=>yc(t,B)))))}getDocumentsMatchingPipeline(e,t,s,r){if(wn(t)==="collection_group"){const i=Vc(t);let o=pr();return this.indexManager.getCollectionParents(e,i).next((B=>k.forEach(B,(c=>{const l=(function(C,m){const v=C.stages.map((R=>R instanceof ia?new ra(m.canonicalString(),{}):R));return new ct(C.serializer,v)})(t,c.child(i));return this.getDocumentsMatchingPipeline(e,l,s,r).next((f=>{f.forEach(((C,m)=>{o=o.insert(C,m)}))}))})).next((()=>o))))}{let i;return this.getOverlaysForPipeline(e,t,s.largestBatchId).next((o=>{switch(i=o,wn(t)){case"collection":return this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,i,r);case"documents":let B=je();for(const c of VB(t))B=B.add(re.fromPath(c));return this.remoteDocumentCache.getEntries(e,B);case"database":return this.remoteDocumentCache.getAllEntries(e);default:throw new Q("invalid-argument",`Invalid pipeline source to execute offline: ${yn(t)}`)}})).next((o=>this.retrieveMatchingLocalDocuments(i,o,(B=>qc(t,B)))))}}retrieveMatchingLocalDocuments(e,t,s){e.forEach(((i,o)=>{const B=o.getKey();t.get(B)===null&&(t=t.insert(B,St.newInvalidDocument(B)))}));let r=pr();return t.forEach(((i,o)=>{const B=e.get(i);B!==void 0&&yr(B.mutation,o,Nt.empty(),fe.now()),s(o)&&(r=r.insert(i,o))})),r}getOverlaysForPipeline(e,t,s){switch(wn(t)){case"collection":return this.documentOverlayCache.getOverlaysForCollection(e,De.fromString(oa(t)),s);case"collection_group":throw new Q("invalid-argument",`Unexpected collection group pipeline: ${yn(t)}`);case"documents":return this.documentOverlayCache.getOverlays(e,VB(t).map((r=>re.fromPath(r))));case"database":return this.documentOverlayCache.getAllOverlays(e,s);default:throw new Q("invalid-argument",`Failed to get overlays for pipeline: ${yn(t)}`)}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZA{constructor(e){this.serializer=e,this.Qs=new Map,this.Ws=new Map}getBundleMetadata(e,t){return k.resolve(this.Qs.get(t))}saveBundleMetadata(e,t){return this.Qs.set(t.id,(function(r){return{id:r.id,version:r.version,createTime:Ns(r.createTime)}})(t)),k.resolve()}getNamedQuery(e,t){return k.resolve(this.Ws.get(t))}saveNamedQuery(e,t){return this.Ws.set(t.name,(function(r){return{name:r.name,query:JA(r.bundledQuery),readTime:Ns(r.readTime)}})(t)),k.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(){this.overlays=new ut(re.comparator),this.Gs=new Map}getOverlay(e,t){return k.resolve(this.overlays.get(t))}getOverlays(e,t){const s=mn();return k.forEach(t,(r=>this.getOverlay(e,r).next((i=>{i!==null&&s.set(r,i)})))).next((()=>s))}getAllOverlays(e,t){const s=mn();return this.overlays.forEach(((r,i)=>{i.largestBatchId>t&&s.set(r,i)})),k.resolve(s)}saveOverlays(e,t,s){return s.forEach(((r,i)=>{this.Zr(e,t,i)})),k.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.Gs.get(s);return r!==void 0&&(r.forEach((i=>this.overlays=this.overlays.remove(i))),this.Gs.delete(s)),k.resolve()}getOverlaysForCollection(e,t,s){const r=mn(),i=t.length+1,o=new re(t.child("")),B=this.overlays.getIteratorFrom(o);for(;B.hasNext();){const c=B.getNext().value,l=c.getKey();if(!t.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return k.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let i=new ut(((l,f)=>l-f));const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===t&&l.largestBatchId>s){let f=i.get(l.largestBatchId);f===null&&(f=mn(),i=i.insert(l.largestBatchId,f)),f.set(l.getKey(),l)}}const B=mn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((l,f)=>B.set(l,f))),!(B.size()>=r)););return k.resolve(B)}Zr(e,t,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.Gs.get(r.largestBatchId).delete(s.key);this.Gs.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new UA(t,s));let i=this.Gs.get(t);i===void 0&&(i=je(),this.Gs.set(t,i)),this.Gs.set(t,i.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR{constructor(){this.sessionToken=_t.EMPTY_BYTE_STRING}getSessionToken(e){return k.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,k.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(){this.zs=new Ve(ke.js),this.Hs=new Ve(ke.Js)}isEmpty(){return this.zs.isEmpty()}addReference(e,t){const s=new ke(e,t);this.zs=this.zs.add(s),this.Hs=this.Hs.add(s)}Ys(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Zs(new ke(e,t))}Xs(e,t){e.forEach((s=>this.removeReference(s,t)))}e_(e){const t=new re(new De([])),s=new ke(t,e),r=new ke(t,e+1),i=[];return this.Hs.forEachInRange([s,r],(o=>{this.Zs(o),i.push(o.key)})),i}t_(){this.zs.forEach((e=>this.Zs(e)))}Zs(e){this.zs=this.zs.delete(e),this.Hs=this.Hs.delete(e)}n_(e){const t=new re(new De([])),s=new ke(t,e),r=new ke(t,e+1);let i=je();return this.Hs.forEachInRange([s,r],(o=>{i=i.add(o.key)})),i}containsKey(e){const t=new ke(e,0),s=this.zs.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class ke{constructor(e,t){this.key=e,this.r_=t}static js(e,t){return re.comparator(e.key,t.key)||he(e.r_,t.r_)}static Js(e,t){return he(e.r_,t.r_)||re.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Gr=1,this.i_=new Ve(ke.js)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,r){const i=this.Gr;this.Gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new VA(i,t,s,r);this.mutationQueue.push(o);for(const B of r)this.i_=this.i_.add(new ke(B.key,i)),this.indexManager.addToCollectionParentIndex(e,B.key.path.popLast());return k.resolve(o)}lookupMutationBatch(e,t){return k.resolve(this.s_(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.__(s),i=r<0?0:r;return k.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?Ec:this.Gr-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new ke(t,0),r=new ke(t,Number.POSITIVE_INFINITY),i=[];return this.i_.forEachInRange([s,r],(o=>{const B=this.s_(o.r_);i.push(B)})),k.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Ve(he);return t.forEach((r=>{const i=new ke(r,0),o=new ke(r,Number.POSITIVE_INFINITY);this.i_.forEachInRange([i,o],(B=>{s=s.add(B.r_)}))})),k.resolve(this.o_(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let i=s;re.isDocumentKey(i)||(i=i.child(""));const o=new ke(new re(i),0);let B=new Ve(he);return this.i_.forEachWhile((c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(B=B.add(c.r_)),!0)}),o),k.resolve(this.o_(B))}o_(e){const t=[];return e.forEach((s=>{const r=this.s_(s);r!==null&&t.push(r)})),t}removeMutationBatch(e,t){W(this.a_(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.i_;return k.forEach(t.mutations,(r=>{const i=new ke(r.key,t.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.i_=s}))}Hr(e){}containsKey(e,t){const s=new ke(t,0),r=this.i_.firstAfterOrEqual(s);return k.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}a_(e,t){return this.__(e)}__(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}s_(e){const t=this.__(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(e){this.u_=e,this.docs=(function(){return new ut(re.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),i=r?r.size:0,o=this.u_(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return k.resolve(s?s.document.mutableCopy():St.newInvalidDocument(t))}getEntries(e,t){let s=Ar();return t.forEach((r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():St.newInvalidDocument(r))})),k.resolve(s)}getAllEntries(e){let t=Ar();return this.docs.forEach(((s,r)=>{t=t.insert(s,r.document)})),k.resolve(t)}getDocumentsMatchingQuery(e,t,s,r){let i,o;Vt(t)?(i=De.fromString(oa(t)),o=f=>qc(t,f)):(i=t.path,o=f=>yc(t,f));let B=Ar();const c=new re(i.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:f,value:{document:C}}=l.getNext();if(!i.isPrefixOf(f.path))break;f.path.length>i.length+1||XI(YI(C),s)<=0||(r.has(C.key)||o(C))&&(B=B.insert(C.key,C.mutableCopy()))}return k.resolve(B)}getAllFromCollectionGroup(e,t,s,r){ne(9500)}c_(e,t){return k.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new rR(this)}getSize(e){return k.resolve(this.size)}}class rR extends WA{constructor(e){super(),this.$s=e}applyChanges(e){const t=[];return this.changes.forEach(((s,r)=>{r.isValidDocument()?t.push(this.$s.addEntry(e,r)):this.$s.removeEntry(s)})),k.waitFor(t)}getFromCache(e,t){return this.$s.getEntry(e,t)}getAllFromCache(e,t){return this.$s.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(e){this.persistence=e,this.l_=new Cs((t=>rp(t)),ip),this.lastRemoteSnapshotVersion=_e.min(),this.highestTargetId=0,this.E_=0,this.h_=new zc,this.targetCount=0,this.T_=Fn.ws()}forEachTarget(e,t){return this.l_.forEach(((s,r)=>t(r))),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.E_)}allocateTargetId(e){return this.highestTargetId=this.T_.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.E_&&(this.E_=t),k.resolve()}Ds(e){this.l_.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.T_=new Fn(t),this.highestTargetId=t),e.sequenceNumber>this.E_&&(this.E_=e.sequenceNumber)}addTargetData(e,t){return this.Ds(t),this.targetCount+=1,k.resolve()}updateTargetData(e,t){return this.Ds(t),k.resolve()}removeTargetData(e,t){return this.l_.delete(t.target),this.h_.e_(t.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,t,s){let r=0;const i=[];return this.l_.forEach(((o,B)=>{B.sequenceNumber<=t&&s.get(B.targetId)===null&&(this.l_.delete(o),i.push(this.removeMatchingKeysForTargetId(e,B.targetId)),r++)})),k.waitFor(i).next((()=>r))}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,t){const s=this.l_.get(t)||null;return k.resolve(s)}addMatchingKeys(e,t,s){return this.h_.Ys(t,s),k.resolve()}removeMatchingKeys(e,t,s){this.h_.Xs(t,s);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((o=>{i.push(r.markPotentiallyOrphaned(e,o))})),k.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.h_.e_(t),k.resolve()}getMatchingKeysForTargetId(e,t){const s=this.h_.n_(t);return k.resolve(s)}containsKey(e,t){return k.resolve(this.h_.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(e,t){this.P_={},this.overlays={},this.I_=new vc(0),this.R_=!1,this.R_=!0,this.A_=new tR,this.referenceDelegate=e(this),this.V_=new iR(this),this.indexManager=new $A,this.remoteDocumentCache=(function(r){return new sR(r)})((s=>this.referenceDelegate.d_(s))),this.serializer=new jA(t),this.f_=new ZA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.R_=!1,Promise.resolve()}get started(){return this.R_}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new eR,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.P_[e.toKey()];return s||(s=new nR(t,this.referenceDelegate),this.P_[e.toKey()]=s),s}getGlobalsCache(){return this.A_}getTargetCache(){return this.V_}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.f_}runTransaction(e,t,s){z("MemoryPersistence","Starting transaction:",e);const r=new oR(this.I_.next());return this.referenceDelegate.m_(),s(r).next((i=>this.referenceDelegate.p_(r).next((()=>i)))).toPromise().then((i=>(r.raiseOnCommittedEvent(),i)))}g_(e,t){return k.or(Object.values(this.P_).map((s=>()=>s.containsKey(e,t))))}}class oR extends Ky{constructor(e){super(),this.currentSequenceNumber=e}}class Qc{constructor(e){this.persistence=e,this.y_=new zc,this.w_=null}static b_(e){return new Qc(e)}get S_(){if(this.w_)return this.w_;throw ne(60996)}addReference(e,t,s){return this.y_.addReference(s,t),this.S_.delete(s.toString()),k.resolve()}removeReference(e,t,s){return this.y_.removeReference(s,t),this.S_.add(s.toString()),k.resolve()}markPotentiallyOrphaned(e,t){return this.S_.add(t.toString()),k.resolve()}removeTarget(e,t){this.y_.e_(t.targetId).forEach((r=>this.S_.add(r.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((r=>{r.forEach((i=>this.S_.add(i.toString())))})).next((()=>s.removeTargetData(e,t)))}m_(){this.w_=new Set}p_(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.S_,(s=>{const r=re.fromPath(s);return this.v_(e,r).next((i=>{i||t.removeEntry(r,_e.min())}))})).next((()=>(this.w_=null,t.apply(e))))}updateLimboDocument(e,t){return this.v_(e,t).next((s=>{s?this.S_.delete(t.toString()):this.S_.add(t.toString())}))}d_(e){return 0}v_(e,t){return k.or([()=>k.resolve(this.y_.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.g_(e,t)])}}class Fo{constructor(e,t){this.persistence=e,this.D_=new Cs((s=>GA(s.path)),((s,r)=>s.isEqual(r))),this.garbageCollector=Xy(this,t)}static b_(e,t){return new Fo(e,t)}m_(){}p_(e){return k.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}ir(e){const t=this.Cs(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((r=>s+r))))}Cs(e){let t=0;return this.sr(e,(s=>{t++})).next((()=>t))}sr(e,t){return k.forEach(this.D_,((s,r)=>this.Os(e,s,r).next((i=>i?k.resolve():t(r)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.c_(e,(o=>this.Os(e,o,t).next((B=>{B||(s++,i.removeEntry(o,_e.min()))})))).next((()=>i.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.D_.set(t,e.currentSequenceNumber),k.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.D_.set(s,e.currentSequenceNumber),k.resolve()}removeReference(e,t,s){return this.D_.set(s,e.currentSequenceNumber),k.resolve()}updateLimboDocument(e,t){return this.D_.set(t,e.currentSequenceNumber),k.resolve()}d_(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Zi(e.data.value)),t}Os(e,t,s){return k.or([()=>this.persistence.g_(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.D_.get(t);return k.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.Vo=s,this.fo=r}static mo(e,t){let s=je(),r=je();for(const i of t.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Wc(e,t.fromCache,s,r)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aR(n,e){return re.comparator(n.key,e.key)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(){this.po=!1,this.yo=!1,this.wo=100,this.bo=(function(){return Lg()?8:qy(Xe())>0?6:4})()}initialize(e,t){this.So=e,this.indexManager=t,this.po=!0}getDocumentsMatchingQuery(e,t,s,r){const i={result:null};return this.vo(e,t).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.Do(e,t,r,s).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new BR;return this.xo(e,t,o).next((B=>{if(i.result=B,this.yo)return this.Co(e,t,o,B.size)}))})).next((()=>i.result))}Co(e,t,s,r){return Vt(t)?k.resolve():s.documentReadCount<this.wo?(As()<=Be.DEBUG&&z("QueryEngine","SDK will not create cache indexes for query:",to(t),"since it only creates cache indexes for collection contains","more than or equal to",this.wo,"documents"),k.resolve()):(As()<=Be.DEBUG&&z("QueryEngine","Query:",to(t),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.bo*r?(As()<=Be.DEBUG&&z("QueryEngine","The SDK decides to create cache indexes for query:",to(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,rs(t))):k.resolve())}vo(e,t){if(Vt(t))return k.resolve(null);let s=t;if(xh(s))return k.resolve(null);let r=rs(s);return this.indexManager.getIndexType(e,r).next((i=>i===0?null:(s.limit!==null&&i===1&&(s=kB(s,null,"F"),r=rs(s)),this.indexManager.getDocumentsMatchingTarget(e,r).next((o=>{const B=je(...o);return this.So.getDocuments(e,B).next((c=>this.indexManager.getMinOffset(e,r).next((l=>{const f=this.Fo(s,c);return this.Oo(s,f,B,l.readTime)?this.vo(e,kB(s,null,"F")):this.Mo(e,f,s,l)}))))})))))}Do(e,t,s,r){return(Vt(t)?(function(o){for(const B of o.stages){if(B instanceof Po||B instanceof Wh)return!1;if(B instanceof Mc){if(B.condition instanceof jd&&B.condition._expr.name==="exists"&&B.condition._expr.params[0]instanceof Bi&&B.condition._expr.params[0].fieldName===Gs)continue;return!1}}return!0})(t):xh(t))||r.isEqual(_e.min())?k.resolve(null):this.So.getDocuments(e,s).next((i=>{const o=this.Fo(t,i);return this.Oo(t,o,s,r)?k.resolve(null):(As()<=Be.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Yh(t)),this.Mo(e,o,t,WI(r,Ur)).next((B=>B)))}))}Fo(e,t){let s,r;return Vt(e)?(s=new Ve(aR),r=i=>qc(e,i)):(s=new Ve(yd(e)),r=i=>yc(e,i)),t.forEach(((i,o)=>{r(o)&&(s=s.add(o))})),s}Oo(e,t,s,r){if(Vt(e))return(function(B){return B.stages.some((c=>c instanceof Po||c instanceof Wh))})(e);if(e.limit===null)return!1;if(s.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}xo(e,t,s){return As()<=Be.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",Yh(t)),this.So.getDocumentsMatchingQuery(e,t,On.min(),s)}Mo(e,t,s,r){return this.So.getDocumentsMatchingQuery(e,s,r).next((i=>(t.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lR="LocalStore";class uR{constructor(e,t,s,r){this.persistence=e,this.No=t,this.serializer=r,this.Lo=new ut(he),this.Bo=new Cs((i=>rp(i)),ip),this.Uo=new Map,this.ko=e.getRemoteDocumentCache(),this.V_=e.getTargetCache(),this.f_=e.getBundleCache(),this.qo(s)}qo(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new XA(this.ko,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ko.setIndexManager(this.indexManager),this.No.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Lo)))}}function hR(n,e,t,s){return new uR(n,e,t,s)}async function Bp(n,e){const t=pe(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let r;return t.mutationQueue.getAllMutationBatches(s).next((i=>(r=i,t.qo(e),t.mutationQueue.getAllMutationBatches(s)))).next((i=>{const o=[],B=[];let c=je();for(const l of r){o.push(l.batchId);for(const f of l.mutations)c=c.add(f.key)}for(const l of i){B.push(l.batchId);for(const f of l.mutations)c=c.add(f.key)}return t.localDocuments.getDocuments(s,c).next((l=>({$o:l,removedBatchIds:o,addedBatchIds:B})))}))}))}function fR(n,e){const t=pe(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const r=e.batch.keys(),i=t.ko.newChangeBuffer({trackRemovals:!0});return(function(B,c,l,f){const C=l.batch,m=C.keys();let v=k.resolve();return m.forEach((R=>{v=v.next((()=>f.getEntry(c,R))).next((N=>{const x=l.docVersions.get(R);W(x!==null,48541),N.version.compareTo(x)<0&&(C.applyToRemoteDocument(N,l),N.isValidDocument()&&(N.setReadTime(l.commitVersion),f.addEntry(N)))}))})),v.next((()=>B.mutationQueue.removeMutationBatch(c,C)))})(t,s,e,i).next((()=>i.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(B){let c=je();for(let l=0;l<B.mutationResults.length;++l)B.mutationResults[l].transformResults.length>0&&(c=c.add(B.batch.mutations[l].key));return c})(e)))).next((()=>t.localDocuments.getDocuments(s,r)))}))}function CR(n){const e=pe(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.V_.getLastRemoteSnapshotVersion(t)))}function dR(n,e){const t=pe(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Ec),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Yo=0,this.Zo=null,this.Xo=!0}ea(){this.Yo===0&&(this.ta("Unknown"),this.Zo=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.Zo=null,this.na("Backend didn't respond within 10 seconds."),this.ta("Offline"),Promise.resolve()))))}ra(e){this.state==="Online"?this.ta("Unknown"):(this.Yo++,this.Yo>=1&&(this.ia(),this.na(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ta("Offline")))}set(e){this.ia(),this.Yo=0,e==="Online"&&(this.Xo=!1),this.ta(e)}ta(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}na(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Xo?(cs(t),this.Xo=!1):z("OnlineStateTracker",t)}ia(){this.Zo!==null&&(this.Zo.cancel(),this.Zo=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li="RemoteStore";class gR{constructor(e,t,s,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.sa=[],this._a=new Map,this.oa=new Map,this.aa=new Map,this.ua=new Fn(1e3),this.ca=new Fn(1001),this.la=new Set,this.Ea=[],this.ha=i,this.ha.Qe((o=>{s.enqueueAndForget((async()=>{hi(this)&&(z(li,"Restarting streams for network reachability change."),await(async function(c){const l=pe(c);l.la.add(4),await ui(l),l.Ta.set("Unknown"),l.la.delete(4),await Ba(l)})(this))}))})),this.Ta=new pR(s,r)}}async function Ba(n){if(hi(n))for(const e of n.Ea)await e(!0)}async function ui(n){for(const e of n.Ea)await e(!1)}function hi(n){return pe(n).la.size===0}async function cp(n,e,t){if(!ai(e))throw e;n.la.add(1),await ui(n),n.Ta.set("Offline"),t||(t=()=>CR(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{z(li,"Retrying IndexedDB access"),await t(),n.la.delete(1),await Ba(n)}))}function lp(n,e){return e().catch((t=>cp(n,t,e)))}async function ca(n){const e=pe(n),t=Ln(e);let s=e.sa.length>0?e.sa[e.sa.length-1].batchId:Ec;for(;mR(e);)try{const r=await dR(e.localStore,s);if(r===null){e.sa.length===0&&t.en();break}s=r.batchId,ER(e,r)}catch(r){await cp(e,r)}up(e)&&hp(e)}function mR(n){return hi(n)&&n.sa.length<10}function ER(n,e){n.sa.push(e);const t=Ln(n);t.Yt()&&t.Rn&&t.An(e.mutations)}function up(n){return hi(n)&&!Ln(n).Jt()&&n.sa.length>0}function hp(n){Ln(n).start()}async function _R(n){Ln(n).fn()}async function DR(n){const e=Ln(n);for(const t of n.sa)e.An(t.mutations)}async function wR(n,e,t){const s=n.sa.shift(),r=Kc.from(s,e,t);await lp(n,(()=>n.remoteSyncer.applySuccessfulWrite(r))),await ca(n)}async function IR(n,e){e&&Ln(n).Rn&&await(async function(s,r){if((function(o){return By(o)&&o!==V.ABORTED})(r.code)){const i=s.sa.shift();Ln(s).Xt(),await lp(s,(()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r))),await ca(s)}})(n,e),up(n)&&hp(n)}async function Zh(n,e){const t=pe(n);t.asyncQueue.verifyOperationInProgress(),z(li,"RemoteStore received new credentials");const s=hi(t);t.la.add(3),await ui(t),s&&t.Ta.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.la.delete(3),await Ba(t)}async function yR(n,e){const t=pe(n);e?(t.la.delete(2),await Ba(t)):e||(t.la.add(2),await ui(t),t.Ta.set("Unknown"))}function Ln(n){return n.Ra||(n.Ra=(function(t,s,r){const i=pe(t);return i.pn(),new Vy(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(n.datastore,n.asyncQueue,{ct:()=>Promise.resolve(),Et:_R.bind(null,n),Tt:IR.bind(null,n),Vn:DR.bind(null,n),dn:wR.bind(null,n)}),n.Ea.push((async e=>{e?(n.Ra.Xt(),await ca(n)):(await n.Ra.stop(),n.sa.length>0&&(z(li,`Stopping write stream with ${n.sa.length} pending writes`),n.sa=[]))}))),n.Ra}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e,t,s,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new is,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,r,i){const o=Date.now()+s,B=new Yc(e,t,o,r,i);return B.start(s),B}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Q(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fp(n,e){if(cs("AsyncQueue",`${e}: ${n}`),ai(n))return new Q(V.UNAVAILABLE,`${e}: ${n}`);throw n}class ef{constructor(){this.activeTargetIds=Cy()}Ba(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ua(e){this.activeTargetIds=this.activeTargetIds.delete(e)}La(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class TR{constructor(){this.fu=new ef,this.mu={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.fu.Ba(e),this.mu[e]||"not-current"}updateQueryState(e,t,s){this.mu[e]=t}removeLocalQueryTarget(e){this.fu.Ua(e)}isLocalQueryTarget(e){return this.fu.activeTargetIds.has(e)}clearQueryState(e){delete this.mu[e]}getAllActiveQueryTargets(){return this.fu.activeTargetIds}isActiveQueryTarget(e){return this.fu.activeTargetIds.has(e)}start(){return this.fu=new ef,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}function iB(){return typeof document<"u"?document:null}class AR{constructor(){this.queries=tf(),this.onlineState="Unknown",this.Du=new Set}terminate(){(function(t,s){const r=pe(t),i=r.queries;r.queries=tf(),i.forEach(((o,B)=>{for(const c of B.bu)c.onError(s)}))})(this,new Q(V.ABORTED,"Firestore shutting down"))}}function tf(){return new Cs((n=>np(n)),sp)}function RR(n){n.Du.forEach((e=>{e.next()}))}var nf;(function(n){n.Default="default",n.Cache="cache"})(nf||(nf={}));const vR="SyncEngine";class bR{constructor(e,t,s,r,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.hc={},this.Tc=new Cs((B=>np(B)),sp),this.Pc=new Map,this.Ic=new Set,this.Rc=new ut(re.comparator),this.Ac=new Map,this.Vc=new zc,this.dc={},this.fc=new Map,this.mc=Fn.bs(),this.onlineState="Unknown",this.gc=void 0}get isPrimaryClient(){return this.gc===!0}}async function SR(n,e,t){const s=FR(n);try{const r=await(function(o,B){const c=pe(o),l=fe.now(),f=B.reduce(((v,R)=>v.add(R.key)),je());let C,m;return c.persistence.runTransaction("Locally write mutations","readwrite",(v=>{let R=Ar(),N=je();return c.ko.getEntries(v,f).next((x=>{R=x,R.forEach(((J,K)=>{K.isValidDocument()||(N=N.add(J))}))})).next((()=>c.localDocuments.getOverlayedDocuments(v,R))).next((x=>{C=x;const J=[];for(const K of B){const se=VI(K,C.get(K.key).overlayedDocument);se!=null&&J.push(new fs(K.key,se,Bd(se.value.mapValue),Wt.exists(!0)))}return c.mutationQueue.addMutationBatch(v,l,J,B)})).next((x=>{m=x;const J=x.applyToLocalDocumentSet(C,N);return c.documentOverlayCache.saveOverlays(v,x.batchId,J)}))})).then((()=>({batchId:m.batchId,changes:Ad(C)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),(function(o,B,c){let l=o.dc[o.currentUser.toKey()];l||(l=new ut(he)),l=l.insert(B,c),o.dc[o.currentUser.toKey()]=l})(s,r.batchId,t),await la(s,r.changes),await ca(s.remoteStore)}catch(r){const i=fp(r,"Failed to persist write");t.reject(i)}}function sf(n,e,t){const s=pe(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.Tc.forEach(((i,o)=>{const B=o.view.xu(e);B.snapshot&&r.push(B.snapshot)})),(function(o,B){const c=pe(o);c.onlineState=B;let l=!1;c.queries.forEach(((f,C)=>{for(const m of C.bu)m.xu(B)&&(l=!0)})),l&&RR(c)})(s.eventManager,e),r.length&&s.hc.Tn(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function OR(n,e){const t=pe(n),s=e.batch.batchId;try{const r=await fR(t.localStore,e);dp(t,s,null),Cp(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await la(t,r)}catch(r){await bc(r)}}async function PR(n,e,t){const s=pe(n);try{const r=await(function(o,B){const c=pe(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",(l=>{let f;return c.mutationQueue.lookupMutationBatch(l,B).next((C=>(W(C!==null,37113),f=C.keys(),c.mutationQueue.removeMutationBatch(l,C)))).next((()=>c.mutationQueue.performConsistencyCheck(l))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(l,f,B))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,f))).next((()=>c.localDocuments.getDocuments(l,f)))}))})(s.localStore,e);dp(s,e,t),Cp(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await la(s,r)}catch(r){await bc(r)}}function Cp(n,e){(n.fc.get(e)||[]).forEach((t=>{t.resolve()})),n.fc.delete(e)}function dp(n,e,t){const s=pe(n);let r=s.dc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),s.dc[s.currentUser.toKey()]=r}}async function la(n,e,t){const s=pe(n),r=[],i=[],o=[];s.Tc.isEmpty()||(s.Tc.forEach(((B,c)=>{o.push(s.yc(c,e,t).then((l=>{if((l||t)&&s.isPrimaryClient){const f=l?!l.fromCache:t?.targetChanges.get(c.targetId)?.current;s.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(l){r.push(l);const f=Wc.mo(c.targetId,l);i.push(f)}})))})),await Promise.all(o),s.hc.Tn(r),await(async function(c,l){const f=pe(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(C=>k.forEach(l,(m=>k.forEach(m.Vo,(v=>f.persistence.referenceDelegate.addReference(C,m.targetId,v))).next((()=>k.forEach(m.fo,(v=>f.persistence.referenceDelegate.removeReference(C,m.targetId,v)))))))))}catch(C){if(!ai(C))throw C;z(lR,"Failed to update sequence numbers: "+C)}for(const C of l){const m=C.targetId;if(!C.fromCache){const v=f.Lo.get(m),R=v.snapshotVersion,N=v.withLastLimboFreeSnapshotVersion(R);f.Lo=f.Lo.insert(m,N)}}})(s.localStore,i))}async function NR(n,e){const t=pe(n);if(!t.currentUser.isEqual(e)){z(vR,"User change. New user:",e.toKey());const s=await Bp(t.localStore,e);t.currentUser=e,(function(i,o){i.fc.forEach((B=>{B.forEach((c=>{c.reject(new Q(V.CANCELLED,o))}))})),i.fc.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await la(t,s.$o)}}function FR(n){const e=pe(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=OR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=PR.bind(null,e),e}class Lo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=na(e.databaseInfo.databaseId),this.sharedClientState=this.vc(e),this.persistence=this.Dc(e),await this.persistence.start(),this.localStore=this.xc(e),this.gcScheduler=this.Cc(e,this.localStore),this.indexBackfillerScheduler=this.Fc(e,this.localStore)}Cc(e,t){return null}Fc(e,t){return null}xc(e){return hR(this.persistence,new cR,e.initialUser,this.serializer)}Dc(e){return new ap(Qc.b_,this.serializer)}vc(e){return new TR}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Lo.provider={build:()=>new Lo};class LR extends Lo{constructor(e){super(),this.cacheSizeBytes=e}Cc(e,t){W(this.persistence.referenceDelegate instanceof Fo,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new Wy(s,e.asyncQueue,t)}Dc(e){const t=this.cacheSizeBytes!==void 0?Bt.withCacheSize(this.cacheSizeBytes):Bt.DEFAULT;return new ap((s=>Fo.b_(s,t)),this.serializer)}}class GB{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>sf(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=NR.bind(null,this.syncEngine),await yR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new AR})()}createDatastore(e){const t=na(e.databaseInfo.databaseId),s=My(e.databaseInfo);return Uy(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,r,i,o,B){return new gR(s,r,i,o,B)})(this.localStore,this.datastore,e.asyncQueue,(t=>sf(this.syncEngine,t,0)),(function(){return Uh.Ye()?new Uh:new Ny})())}createSyncEngine(e,t){return(function(r,i,o,B,c,l,f){const C=new bR(r,i,o,B,c,l);return f&&(C.gc=!0),C})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const s=pe(t);z(li,"RemoteStore shutting down."),s.la.add(5),await ui(s),s.ha.shutdown(),s.Ta.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}GB.provider={build:()=>new GB};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn="FirestoreClient";class kR{constructor(e,t,s,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this._databaseInfo=r,this.user=We.UNAUTHENTICATED,this.clientId=gc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,(async o=>{z(kn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(s,(o=>(z(kn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new is;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=fp(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function oB(n,e){n.asyncQueue.verifyOperationInProgress(),z(kn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async r=>{s.isEqual(r)||(await Bp(e.localStore,r),s=r)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function rf(n,e){n.asyncQueue.verifyOperationInProgress();const t=await MR(n);z(kn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>Zh(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,r)=>Zh(e.remoteStore,r))),n._onlineComponents=e}async function MR(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){z(kn,"Using user provided OfflineComponentProvider");try{await oB(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(r){return r.name==="FirebaseError"?r.code===V.FAILED_PRECONDITION||r.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11})(t))throw t;tn("Error using user provided cache. Falling back to memory cache: "+t),await oB(n,new Lo)}}else z(kn,"Using default OfflineComponentProvider"),await oB(n,new LR(void 0));return n._offlineComponents}async function xR(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(z(kn,"Using user provided OnlineComponentProvider"),await rf(n,n._uninitializedComponentsProvider._online)):(z(kn,"Using default OnlineComponentProvider"),await rf(n,new GB))),n._onlineComponents}function VR(n){return xR(n).then((e=>e.syncEngine))}function GR(n,e){const t=new is;return n.asyncQueue.enqueueAndForget((async()=>SR(await VR(n),e,t))),t.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pp=class{constructor(e,t,s,r,i){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Je(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new HR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(e){if(this._document){const t=this._document.data.field(sa("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},HR=class extends pp{data(){return super.data()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UR(n,e,t){let s;return s=n?n.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of="AsyncQueue";class af{constructor(e=Promise.resolve()){this.$c=[],this.Kc=!1,this.Qc=[],this.Wc=null,this.Gc=!1,this.zc=!1,this.jc=[],this.Ht=new Fd(this,"async_queue_retry"),this.Hc=()=>{const s=iB();s&&z(of,"Visibility state changed to "+s.visibilityState),this.Ht.$t()},this.Jc=e;const t=iB();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Yc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const t=iB();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Yc(),this.Kc)return new Promise((()=>{}));const t=new is;return this.Zc((()=>this.Kc&&this.zc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.$c.push(e),this.Xc())))}async Xc(){if(this.$c.length!==0){try{await this.$c[0](),this.$c.shift(),this.Ht.reset()}catch(e){if(!ai(e))throw e;z(of,"Operation failed with retryable error: "+e)}this.$c.length>0&&this.Ht.kt((()=>this.Xc()))}}Zc(e){const t=this.Jc.then((()=>(this.Gc=!0,e().catch((s=>{throw this.Wc=s,this.Gc=!1,cs("INTERNAL UNHANDLED ERROR: ",Bf(s)),s})).then((s=>(this.Gc=!1,s))))));return this.Jc=t,t}enqueueAfterDelay(e,t,s){this.Yc(),this.jc.indexOf(e)>-1&&(t=0);const r=Yc.createAndSchedule(this,e,t,s,(i=>this.el(i)));return this.Qc.push(r),r}Yc(){this.Wc&&ne(47125,{tl:Bf(this.Wc)})}verifyOperationInProgress(){}async nl(){let e;do e=this.Jc,await e;while(e!==this.Jc)}rl(e){for(const t of this.Qc)if(t.timerId===e)return!0;return!1}il(e){return this.nl().then((()=>{this.Qc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.Qc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.nl()}))}sl(e){this.jc.push(e)}el(e){const t=this.Qc.indexOf(e);this.Qc.splice(t,1)}}function Bf(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class gp extends Sc{constructor(e,t,s,r){super(e,t,s,r),this.type="firestore",this._queue=new af,this._persistenceKey=r?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new af(e),this._firestoreClient=void 0,await e}}}function jR(n,e){const t=typeof n=="object"?n:Zr(),s=typeof n=="string"?n:Do,r=sn(t,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Rg("firestore");i&&Zy(r,...i)}return r}function JR(n){if(n._terminated)throw new Q(V.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||$R(n),n._firestoreClient}function $R(n){const e=n._freezeSettings(),t=Jy(n._databaseId,n._app?.options.appId||"",n._persistenceKey,n._app?.options.apiKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new kR(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(r){const i=r?._online.build();return{_offline:r?._offline.build(i),_online:i}})(n._componentsProvider))}class ji{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ls extends pp{constructor(e,t,s,r,i,o){super(e,t,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ro(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(sa("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Q(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Ls._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Ls._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ls._jsonSchema={type:Ae("string",Ls._jsonSchemaVersion),bundleSource:Ae("string","DocumentSnapshot"),bundleName:Ae("string"),bundle:Ae("string")};class ro extends Ls{data(e={}){return super.data(e)}}class br{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new ji(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new ro(this._firestore,this._userDataWriter,s.key,s,new ji(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Q(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map((B=>{Vt(r._snapshot.query)?QA(r._snapshot.query):yd(r.query._query);const c=new ro(r._firestore,r._userDataWriter,B.doc.key,B.doc,new ji(r._snapshot.mutatedKeys.has(B.doc.key),r._snapshot.fromCache),r.query.converter);return B.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}}))}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((B=>i||B.type!==3)).map((B=>{const c=new ro(r._firestore,r._userDataWriter,B.doc.key,B.doc,new ji(r._snapshot.mutatedKeys.has(B.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,f=-1;return B.type!==0&&(l=o.indexOf(B.doc.key),o=o.delete(B.doc.key)),B.type!==1&&(o=o.add(B.doc),f=o.indexOf(B.doc.key)),{type:KR(B.type),doc:c,oldIndex:l,newIndex:f}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Q(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=br._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=gc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],r=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),s.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),r.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function KR(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ne(61501,{type:n})}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */br._jsonSchemaVersion="firestore/querySnapshot/1.0",br._jsonSchema={type:Ae("string",br._jsonSchemaVersion),bundleSource:Ae("string","QuerySnapshot"),bundleName:Ae("string"),bundle:Ae("string")};function qR(n,e,t){n=PB(n,Je);const s=PB(n.firestore,gp),r=UR(n.converter,e),i=rT(s);return zR(s,[iT(i,"setDoc",n._key,r,n.converter!==null,t).toMutation(n._key,Wt.none())])}function zR(n,e){const t=JR(n);return GR(t,e)}const cf="@firebase/firestore",lf="4.17.2";(function(e,t=!0){gI(Rn),At(new Et("firestore",((s,{instanceIdentifier:r,options:i})=>{const o=s.getProvider("app").getImmediate(),B=new gp(new by(s.getProvider("auth-internal")),new Py(o,s.getProvider("app-check-internal")),vI(o,r),o);return i={useFetchStreams:t,...i},B._setSettings(i),B}),"PUBLIC").setMultipleInstances(!0)),rt(cf,lf,e),rt(cf,lf,"esm2020")})();const mp="@firebase/installations",Xc="0.6.24";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep=1e4,_p=`w:${Xc}`,Dp="FIS_v2",QR="https://firebaseinstallations.googleapis.com/v1",WR=3600*1e3,YR="installations",XR="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZR={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},us=new Mn(YR,XR,ZR);function wp(n){return n instanceof Dt&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ip({projectId:n}){return`${QR}/projects/${n}/installations`}function yp(n){return{token:n.token,requestStatus:2,expiresIn:tv(n.expiresIn),creationTime:Date.now()}}async function Tp(n,e){const s=(await e.json()).error;return us.create("request-failed",{requestName:n,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Ap({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function ev(n,{refreshToken:e}){const t=Ap(n);return t.append("Authorization",nv(e)),t}async function Rp(n){const e=await n();return e.status>=500&&e.status<600?n():e}function tv(n){return Number(n.replace("s","000"))}function nv(n){return`${Dp} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sv({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const s=Ip(n),r=Ap(n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={fid:t,authVersion:Dp,appId:n.appId,sdkVersion:_p},B={method:"POST",headers:r,body:JSON.stringify(o)},c=await Rp(()=>fetch(s,B));if(c.ok){const l=await c.json();return{fid:l.fid||t,registrationStatus:2,refreshToken:l.refreshToken,authToken:yp(l.authToken)}}else throw await Tp("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vp(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rv(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv=/^[cdef][\w-]{21}$/,HB="";function ov(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=av(n);return iv.test(t)?t:HB}catch{return HB}}function av(n){return rv(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bp=new Map;function Sp(n,e){const t=ua(n);Op(t,e),Bv(t,e)}function Op(n,e){const t=bp.get(n);if(t)for(const s of t)s(e)}function Bv(n,e){const t=cv();t&&t.postMessage({key:n,fid:e}),lv()}let Xn=null;function cv(){return!Xn&&"BroadcastChannel"in self&&(Xn=new BroadcastChannel("[Firebase] FID Change"),Xn.onmessage=n=>{Op(n.data.key,n.data.fid)}),Xn}function lv(){bp.size===0&&Xn&&(Xn.close(),Xn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv="firebase-installations-database",hv=1,hs="firebase-installations-store";let aB=null;function Zc(){return aB||(aB=Pf(uv,hv,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(hs)}}})),aB}async function ko(n,e){const t=ua(n),r=(await Zc()).transaction(hs,"readwrite"),i=r.objectStore(hs),o=await i.get(t);return await i.put(e,t),await r.done,(!o||o.fid!==e.fid)&&Sp(n,e.fid),e}async function Pp(n){const e=ua(n),s=(await Zc()).transaction(hs,"readwrite");await s.objectStore(hs).delete(e),await s.done}async function ha(n,e){const t=ua(n),r=(await Zc()).transaction(hs,"readwrite"),i=r.objectStore(hs),o=await i.get(t),B=e(o);return B===void 0?await i.delete(t):await i.put(B,t),await r.done,B&&(!o||o.fid!==B.fid)&&Sp(n,B.fid),B}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function el(n){let e;const t=await ha(n.appConfig,s=>{const r=fv(s),i=Cv(n,r);return e=i.registrationPromise,i.installationEntry});return t.fid===HB?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function fv(n){const e=n||{fid:ov(),registrationStatus:0};return Np(e)}function Cv(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(us.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=dv(n,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:pv(n)}:{installationEntry:e}}async function dv(n,e){try{const t=await sv(n,e);return ko(n.appConfig,t)}catch(t){throw wp(t)&&t.customData.serverCode===409?await Pp(n.appConfig):await ko(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function pv(n){let e=await uf(n.appConfig);for(;e.registrationStatus===1;)await vp(100),e=await uf(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await el(n);return s||t}return e}function uf(n){return ha(n,e=>{if(!e)throw us.create("installation-not-found");return Np(e)})}function Np(n){return gv(n)?{fid:n.fid,registrationStatus:0}:n}function gv(n){return n.registrationStatus===1&&n.registrationTime+Ep<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mv({appConfig:n,heartbeatServiceProvider:e},t){const s=Ev(n,t),r=ev(n,t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const o={installation:{sdkVersion:_p,appId:n.appId}},B={method:"POST",headers:r,body:JSON.stringify(o)},c=await Rp(()=>fetch(s,B));if(c.ok){const l=await c.json();return yp(l)}else throw await Tp("Generate Auth Token",c)}function Ev(n,{fid:e}){return`${Ip(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tl(n,e=!1){let t;const s=await ha(n.appConfig,i=>{if(!Fp(i))throw us.create("not-registered");const o=i.authToken;if(!e&&wv(o))return i;if(o.requestStatus===1)return t=_v(n,e),i;{if(!navigator.onLine)throw us.create("app-offline");const B=yv(i);return t=Dv(n,B),B}});return t?await t:s.authToken}async function _v(n,e){let t=await hf(n.appConfig);for(;t.authToken.requestStatus===1;)await vp(100),t=await hf(n.appConfig);const s=t.authToken;return s.requestStatus===0?tl(n,e):s}function hf(n){return ha(n,e=>{if(!Fp(e))throw us.create("not-registered");const t=e.authToken;return Tv(t)?{...e,authToken:{requestStatus:0}}:e})}async function Dv(n,e){try{const t=await mv(n,e),s={...e,authToken:t};return await ko(n.appConfig,s),t}catch(t){if(wp(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Pp(n.appConfig);else{const s={...e,authToken:{requestStatus:0}};await ko(n.appConfig,s)}throw t}}function Fp(n){return n!==void 0&&n.registrationStatus===2}function wv(n){return n.requestStatus===2&&!Iv(n)}function Iv(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+WR}function yv(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function Tv(n){return n.requestStatus===1&&n.requestTime+Ep<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Av(n){const e=n,{installationEntry:t,registrationPromise:s}=await el(e);return s?s.catch(console.error):tl(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rv(n,e=!1){const t=n;return await vv(t),(await tl(t,e)).token}async function vv(n){const{registrationPromise:e}=await el(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bv(n){if(!n||!n.options)throw BB("App Configuration");if(!n.name)throw BB("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw BB(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function BB(n){return us.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lp="installations",Sv="installations-internal",Ov=n=>{const e=n.getProvider("app").getImmediate(),t=bv(e),s=sn(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},Pv=n=>{const e=n.getProvider("app").getImmediate(),t=sn(e,Lp).getImmediate();return{getId:()=>Av(t),getToken:r=>Rv(t,r)}};function Nv(){At(new Et(Lp,Ov,"PUBLIC")),At(new Et(Sv,Pv,"PRIVATE"))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nv();rt(mp,Xc);rt(mp,Xc,"esm2020");const cB="@firebase/remote-config",ff="0.9.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp="remote-config",Cf=100;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fv={"already-initialized":"Remote Config already initialized","registration-window":"Undefined window object. This SDK only supports usage in a browser environment.","registration-project-id":"Undefined project identifier. Check Firebase app initialization.","registration-api-key":"Undefined API key. Check Firebase app initialization.","registration-app-id":"Undefined app identifier. Check Firebase app initialization.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}.","fetch-client-network":"Fetch client failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-timeout":'The config fetch request timed out.  Configure timeout using "fetchTimeoutMillis" SDK setting.',"fetch-throttle":'The config fetch request timed out while in an exponential backoff state. Configure timeout using "fetchTimeoutMillis" SDK setting. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',"fetch-client-parse":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","indexed-db-unavailable":"Indexed DB is not supported by current browser","custom-signal-max-allowed-signals":"Setting more than {$maxSignals} custom signals is not supported.","stream-error":"The stream was not able to connect to the backend: {$originalErrorMessage}.","realtime-unavailable":"The Realtime service is unavailable: {$originalErrorMessage}","update-message-invalid":"The stream invalidation message was unparsable: {$originalErrorMessage}","update-not-fetched":"Unable to fetch the latest config: {$originalErrorMessage}","analytics-unavailable":"Connection to Firebase Analytics failed: {$originalErrorMessage}"},Ie=new Mn("remoteconfig","Remote Config",Fv);function Lv(n,e){return n instanceof Dt&&n.code.indexOf(e)!==-1}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kv=!1,Mv="",df=0,xv=["1","true","t","yes","y","on"];class lB{constructor(e,t=Mv){this._source=e,this._value=t}asString(){return this._value}asBoolean(){return this._source==="static"?kv:xv.indexOf(this._value.toLowerCase())>=0}asNumber(){if(this._source==="static")return df;let e=Number(this._value);return isNaN(e)&&(e=df),e}getSource(){return this._source}}class Vv{constructor(e){this.storage=e._storage,this.logger=e._logger,this.analyticsProvider=e._analyticsProvider}async updateActiveExperiments(e){const t=await this.storage.getActiveExperiments()||new Set,s=this.createExperimentInfoMap(e);return this.addActiveExperiments(s),this.removeInactiveExperiments(t,s),this.storage.setActiveExperiments(new Set(s.keys()))}createExperimentInfoMap(e){const t=new Map;for(const s of e)t.set(s.experimentId,s);return t}addActiveExperiments(e){const t={};for(const[s,r]of e.entries())t[`firebase${s}`]=r.variantId;this.addExperimentToAnalytics(t)}removeInactiveExperiments(e,t){const s={};for(const r of e)t.has(r)||(s[`firebase${r}`]=null);this.addExperimentToAnalytics(s)}addExperimentToAnalytics(e){if(Object.keys(e).length!==0)try{const t=this.analyticsProvider.getImmediate({optional:!0});t?(t.setUserProperties(e),t.logEvent("set_firebase_experiment_state")):this.logger.warn("Analytics import failed. Verify if you have imported Firebase Analytics in your app code.")}catch(t){throw Ie.create("analytics-unavailable",{originalErrorMessage:t?.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gv(n=Zr(),e={}){n=Ge(n);const t=sn(n,Mp);if(t.isInitialized()){const r=t.getOptions();if(An(r,e))return t.getImmediate();throw Ie.create("already-initialized")}t.initialize({options:e});const s=t.getImmediate();return e.initialFetchResponse&&(s._initializePromise=Promise.all([s._storage.setLastSuccessfulFetchResponse(e.initialFetchResponse),s._storage.setActiveConfigEtag(e.initialFetchResponse?.eTag||""),s._storage.setActiveConfigTemplateVersion(e.initialFetchResponse.templateVersion||0),s._storageCache.setLastSuccessfulFetchTimestampMillis(Date.now()),s._storageCache.setLastFetchStatus("success"),s._storageCache.setActiveConfig(e.initialFetchResponse?.config||{})]).then(),s._isInitializationComplete=!0),s}async function Hv(n){const e=Ge(n),[t,s]=await Promise.all([e._storage.getLastSuccessfulFetchResponse(),e._storage.getActiveConfigEtag()]);if(!t||!t.config||!t.eTag||!t.templateVersion||t.eTag===s)return!1;const i=new Vv(e).updateActiveExperiments(t.experiments||[]);return await Promise.all([e._storageCache.setActiveConfig(t.config),e._storage.setActiveConfigEtag(t.eTag),e._storage.setActiveConfigTemplateVersion(t.templateVersion),i]),!0}function Uv(n){const e=Ge(n);return e._initializePromise||(e._initializePromise=e._storageCache.loadFromStorage().then(()=>{e._isInitializationComplete=!0})),e._initializePromise}async function jv(n){const e=Ge(n),t=new kp;setTimeout(async()=>{t.abort()},e.settings.fetchTimeoutMillis);const s=e._storageCache.getCustomSignals();s&&e._logger.debug(`Fetching config with custom signals: ${JSON.stringify(s)}`);try{await e._client.fetch({cacheMaxAgeMillis:e.settings.minimumFetchIntervalMillis,signal:t,customSignals:s}),await e._storageCache.setLastFetchStatus("success")}catch(r){const i=Lv(r,"fetch-throttle")?"throttle":"failure";throw await e._storageCache.setLastFetchStatus(i),r}}function Jv(n,e){const t=Ge(n);t._isInitializationComplete||t._logger.debug(`A value was requested for key "${e}" before SDK initialization completed. Await on ensureInitialized if the intent was to get a previously activated value.`);const s=t._storageCache.getActiveConfig();return s&&s[e]!==void 0?new lB("remote",s[e]):t.defaultConfig&&t.defaultConfig[e]!==void 0?new lB("default",String(t.defaultConfig[e])):(t._logger.debug(`Returning static value for key "${e}". Define a default or remote value if this is unintentional.`),new lB("static"))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v{constructor(e,t,s,r){this.client=e,this.storage=t,this.storageCache=s,this.logger=r}isCachedDataFresh(e,t){if(!t)return this.logger.debug("Config fetch cache check. Cache unpopulated."),!1;const s=Date.now()-t,r=s<=e;return this.logger.debug(`Config fetch cache check. Cache age millis: ${s}. Cache max age millis (minimumFetchIntervalMillis setting): ${e}. Is cache hit: ${r}.`),r}async fetch(e){const[t,s]=await Promise.all([this.storage.getLastSuccessfulFetchTimestampMillis(),this.storage.getLastSuccessfulFetchResponse()]);if(s&&this.isCachedDataFresh(e.cacheMaxAgeMillis,t))return s;e.eTag=s&&s.eTag;const r=await this.client.fetch(e),i=[this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())];return r.status===200&&i.push(this.storage.setLastSuccessfulFetchResponse(r)),await Promise.all(i),r}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kv(n=navigator){return n.languages&&n.languages[0]||n.language}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(e,t,s,r,i,o){this.firebaseInstallations=e,this.sdkVersion=t,this.namespace=s,this.projectId=r,this.apiKey=i,this.appId=o}async fetch(e){const[t,s]=await Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken()]),i=`${window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfig.googleapis.com"}/v1/projects/${this.projectId}/namespaces/${this.namespace}:fetch?key=${this.apiKey}`,o={"Content-Type":"application/json","Content-Encoding":"gzip","If-None-Match":e.eTag||"*"},B={sdk_version:this.sdkVersion,app_instance_id:t,app_instance_id_token:s,app_id:this.appId,language_code:Kv(),custom_signals:e.customSignals},c={method:"POST",headers:o,body:JSON.stringify(B)},l=fetch(i,c),f=new Promise((se,ue)=>{e.signal.addEventListener(()=>{const He=new Error("The operation was aborted.");He.name="AbortError",ue(He)})});let C;try{await Promise.race([l,f]),C=await l}catch(se){let ue="fetch-client-network";throw se?.name==="AbortError"&&(ue="fetch-timeout"),Ie.create(ue,{originalErrorMessage:se?.message})}let m=C.status;const v=C.headers.get("ETag")||void 0;let R,N,x,J,K;if(C.status===200){let se;try{se=await C.json()}catch(ue){throw Ie.create("fetch-client-parse",{originalErrorMessage:ue?.message})}R=se.entries,N=se.state,x=se.templateVersion,J=se.experimentDescriptions,K=se.rolloutMetadata}if(N==="INSTANCE_STATE_UNSPECIFIED"?m=500:N==="NO_CHANGE"?m=304:(N==="NO_TEMPLATE"||N==="EMPTY_CONFIG")&&(R={},J=[],K=[]),m!==304&&m!==200)throw Ie.create("fetch-status",{httpStatus:m});return{status:m,eTag:v,config:R,templateVersion:x,experiments:J,rollouts:K}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zv(n,e){return new Promise((t,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(t,r);n.addEventListener(()=>{clearTimeout(i),s(Ie.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Qv(n){if(!(n instanceof Dt)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class Wv{constructor(e,t){this.client=e,this.storage=t}async fetch(e){const t=await this.storage.getThrottleMetadata()||{backoffCount:0,throttleEndTimeMillis:Date.now()};return this.attemptFetch(e,t)}async attemptFetch(e,{throttleEndTimeMillis:t,backoffCount:s}){await zv(e.signal,t);try{const r=await this.client.fetch(e);return await this.storage.deleteThrottleMetadata(),r}catch(r){if(!Qv(r))throw r;const i={throttleEndTimeMillis:Date.now()+$B(s),backoffCount:s+1};return await this.storage.setThrottleMetadata(i),this.attemptFetch(e,i)}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yv=60*1e3,Xv=720*60*1e3;class Zv{get fetchTimeMillis(){return this._storageCache.getLastSuccessfulFetchTimestampMillis()||-1}get lastFetchStatus(){return this._storageCache.getLastFetchStatus()||"no-fetch-yet"}constructor(e,t,s,r,i,o,B){this.app=e,this._client=t,this._storageCache=s,this._storage=r,this._logger=i,this._realtimeHandler=o,this._analyticsProvider=B,this._isInitializationComplete=!1,this.settings={fetchTimeoutMillis:Yv,minimumFetchIntervalMillis:Xv},this.defaultConfig={}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(n,e){const t=n.target.error||void 0;return Ie.create(e,{originalErrorMessage:t&&t?.message})}const fn="app_namespace_store",eb="firebase_remote_config",tb=1;function nb(){return new Promise((n,e)=>{try{const t=indexedDB.open(eb,tb);t.onerror=s=>{e(io(s,"storage-open"))},t.onsuccess=s=>{n(s.target.result)},t.onupgradeneeded=s=>{const r=s.target.result;switch(s.oldVersion){case 0:r.createObjectStore(fn,{keyPath:"compositeKey"})}}}catch(t){e(Ie.create("storage-open",{originalErrorMessage:t?.message}))}})}class xp{getLastFetchStatus(){return this.get("last_fetch_status")}setLastFetchStatus(e){return this.set("last_fetch_status",e)}getLastSuccessfulFetchTimestampMillis(){return this.get("last_successful_fetch_timestamp_millis")}setLastSuccessfulFetchTimestampMillis(e){return this.set("last_successful_fetch_timestamp_millis",e)}getLastSuccessfulFetchResponse(){return this.get("last_successful_fetch_response")}setLastSuccessfulFetchResponse(e){return this.set("last_successful_fetch_response",e)}getActiveConfig(){return this.get("active_config")}setActiveConfig(e){return this.set("active_config",e)}getActiveConfigEtag(){return this.get("active_config_etag")}setActiveConfigEtag(e){return this.set("active_config_etag",e)}getActiveExperiments(){return this.get("active_experiments")}setActiveExperiments(e){return this.set("active_experiments",e)}getThrottleMetadata(){return this.get("throttle_metadata")}setThrottleMetadata(e){return this.set("throttle_metadata",e)}deleteThrottleMetadata(){return this.delete("throttle_metadata")}getCustomSignals(){return this.get("custom_signals")}getRealtimeBackoffMetadata(){return this.get("realtime_backoff_metadata")}setRealtimeBackoffMetadata(e){return this.set("realtime_backoff_metadata",e)}getActiveConfigTemplateVersion(){return this.get("last_known_template_version")}setActiveConfigTemplateVersion(e){return this.set("last_known_template_version",e)}}class sb extends xp{constructor(e,t,s,r=nb()){super(),this.appId=e,this.appName=t,this.namespace=s,this.openDbPromise=r}async setCustomSignals(e){const s=(await this.openDbPromise).transaction([fn],"readwrite"),r=await this.getWithTransaction("custom_signals",s),i=Vp(e,r||{});return await this.setWithTransaction("custom_signals",i,s),i}async getWithTransaction(e,t){return new Promise((s,r)=>{const i=t.objectStore(fn),o=this.createCompositeKey(e);try{const B=i.get(o);B.onerror=c=>{r(io(c,"storage-get"))},B.onsuccess=c=>{const l=c.target.result;s(l?l.value:void 0)}}catch(B){r(Ie.create("storage-get",{originalErrorMessage:B?.message}))}})}async setWithTransaction(e,t,s){return new Promise((r,i)=>{const o=s.objectStore(fn),B=this.createCompositeKey(e);try{const c=o.put({compositeKey:B,value:t});c.onerror=l=>{i(io(l,"storage-set"))},c.onsuccess=()=>{r()}}catch(c){i(Ie.create("storage-set",{originalErrorMessage:c?.message}))}})}async get(e){const s=(await this.openDbPromise).transaction([fn],"readonly");return this.getWithTransaction(e,s)}async set(e,t){const r=(await this.openDbPromise).transaction([fn],"readwrite");return this.setWithTransaction(e,t,r)}async delete(e){const t=await this.openDbPromise;return new Promise((s,r)=>{const o=t.transaction([fn],"readwrite").objectStore(fn),B=this.createCompositeKey(e);try{const c=o.delete(B);c.onerror=l=>{r(io(l,"storage-delete"))},c.onsuccess=()=>{s()}}catch(c){r(Ie.create("storage-delete",{originalErrorMessage:c?.message}))}})}createCompositeKey(e){return[this.appId,this.appName,this.namespace,e].join()}}class rb extends xp{constructor(){super(...arguments),this.storage={}}async get(e){return Promise.resolve(this.storage[e])}async set(e,t){return this.storage[e]=t,Promise.resolve(void 0)}async delete(e){return this.storage[e]=void 0,Promise.resolve()}async setCustomSignals(e){const t=this.storage.custom_signals||{};return this.storage.custom_signals=Vp(e,t),Promise.resolve(this.storage.custom_signals)}}function Vp(n,e){const t={...e,...n},s=Object.fromEntries(Object.entries(t).filter(([r,i])=>i!==null).map(([r,i])=>typeof i=="number"?[r,i.toString()]:[r,i]));if(Object.keys(s).length>Cf)throw Ie.create("custom-signal-max-allowed-signals",{maxSignals:Cf});return s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e){this.storage=e}getLastFetchStatus(){return this.lastFetchStatus}getLastSuccessfulFetchTimestampMillis(){return this.lastSuccessfulFetchTimestampMillis}getActiveConfig(){return this.activeConfig}getCustomSignals(){return this.customSignals}async loadFromStorage(){const e=this.storage.getLastFetchStatus(),t=this.storage.getLastSuccessfulFetchTimestampMillis(),s=this.storage.getActiveConfig(),r=this.storage.getCustomSignals(),i=await e;i&&(this.lastFetchStatus=i);const o=await t;o&&(this.lastSuccessfulFetchTimestampMillis=o);const B=await s;B&&(this.activeConfig=B);const c=await r;c&&(this.customSignals=c)}setLastFetchStatus(e){return this.lastFetchStatus=e,this.storage.setLastFetchStatus(e)}setLastSuccessfulFetchTimestampMillis(e){return this.lastSuccessfulFetchTimestampMillis=e,this.storage.setLastSuccessfulFetchTimestampMillis(e)}setActiveConfig(e){return this.activeConfig=e,this.storage.setActiveConfig(e)}async setCustomSignals(e){this.customSignals=await this.storage.setCustomSignals(e)}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(e){this.allowedEvents_=e,this.listeners_={},CB(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let r=0;r<s.length;r++)s[r].callback.apply(s[r].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const r=this.getInitialEvent(e);r&&t.apply(s,r)}off(e,t,s){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===t&&(!s||s===r[i].context)){r.splice(i,1);return}}validateEventType_(e){CB(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl extends ob{static getInstance(){return new nl}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return CB(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ab="X-Goog-Api-Key",Bb="X-Goog-Firebase-Installations-Auth",uB=8,pf=3,gf=-1,mf=0,Ef="featureDisabled",_f="retryIntervalSeconds",Df="latestTemplateVersionNumber",cb="_exp_rollout";class lb{constructor(e,t,s,r,i,o,B,c,l,f){this.firebaseInstallations=e,this.storage=t,this.sdkVersion=s,this.namespace=r,this.projectId=i,this.apiKey=o,this.appId=B,this.logger=c,this.storageCache=l,this.cachingClient=f,this.observers=new Set,this.isConnectionActive=!1,this.isRealtimeDisabled=!1,this.httpRetriesRemaining=uB,this.isInBackground=!1,this.decoder=new TextDecoder("utf-8"),this.isClosingConnection=!1,this.propagateError=C=>this.observers.forEach(m=>m.error?.(C)),this.isStatusCodeRetryable=C=>!C||[408,429,502,503,504].includes(C),this.setRetriesRemaining(),nl.getInstance().on("visible",this.onVisibilityChange,this)}async setRetriesRemaining(){const t=(await this.storage.getRealtimeBackoffMetadata())?.numFailedStreams||0;this.httpRetriesRemaining=Math.max(uB-t,1)}async updateBackoffMetadataWithLastFailedStreamConnectionTime(e){const t=((await this.storage.getRealtimeBackoffMetadata())?.numFailedStreams||0)+1,s=$B(t,6e4,2);await this.storage.setRealtimeBackoffMetadata({backoffEndTimeMillis:new Date(e.getTime()+s),numFailedStreams:t})}async updateBackoffMetadataWithRetryInterval(e){const t=Date.now(),s=e*1e3,r=new Date(t+s);await this.storage.setRealtimeBackoffMetadata({backoffEndTimeMillis:r,numFailedStreams:0}),await this.retryHttpConnectionWhenBackoffEnds()}async closeRealtimeHttpConnection(){if(!this.isClosingConnection){this.isClosingConnection=!0;try{this.reader&&await this.reader.cancel()}catch{this.logger.debug("Failed to cancel the reader, connection was lost.")}finally{this.reader=void 0}this.controller&&(await this.controller.abort(),this.controller=void 0),this.isClosingConnection=!1}}async resetRealtimeBackoff(){await this.storage.setRealtimeBackoffMetadata({backoffEndTimeMillis:new Date(-1),numFailedStreams:0})}resetRetryCount(){this.httpRetriesRemaining=uB}async establishRealtimeConnection(e,t,s,r){const i=await this.storage.getActiveConfigEtag(),o=await this.storage.getActiveConfigTemplateVersion(),B={[ab]:this.apiKey,[Bb]:s,"Content-Type":"application/json",Accept:"application/json","If-None-Match":i||"*","Content-Encoding":"gzip"},c={project:this.projectId,namespace:this.namespace,lastKnownVersionNumber:o,appId:this.appId,sdkVersion:this.sdkVersion,appInstanceId:t};return await fetch(e,{method:"POST",headers:B,body:JSON.stringify(c),signal:r})}getRealtimeUrl(){const t=`${window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfigrealtime.googleapis.com"}/v1/projects/${this.projectId}/namespaces/${this.namespace}:streamFetchInvalidations?key=${this.apiKey}`;return new URL(t)}async createRealtimeConnection(){const[e,t]=await Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken(!1)]);this.controller=new AbortController;const s=this.getRealtimeUrl();return await this.establishRealtimeConnection(s,e,t,this.controller.signal)}async retryHttpConnectionWhenBackoffEnds(){let e=await this.storage.getRealtimeBackoffMetadata();e||(e={backoffEndTimeMillis:new Date(gf),numFailedStreams:mf});const t=new Date(e.backoffEndTimeMillis).getTime(),s=Date.now(),r=Math.max(0,t-s);await this.makeRealtimeHttpConnection(r)}setIsHttpConnectionRunning(e){this.isConnectionActive=e}checkAndSetHttpConnectionFlagIfNotRunning(){const e=this.canEstablishStreamConnection();return e&&this.setIsHttpConnectionRunning(!0),e}fetchResponseIsUpToDate(e,t){return e.config!=null&&e.templateVersion?e.templateVersion>=t:this.storageCache.getLastFetchStatus()==="success"}parseAndValidateConfigUpdateMessage(e){const t=e.indexOf("{"),s=e.indexOf("}",t);return t<0||s<0||t>=s?"":e.substring(t,s+1)}isEventListenersEmpty(){return this.observers.size===0}getRandomInt(e){return Math.floor(Math.random()*e)}executeAllListenerCallbacks(e){this.observers.forEach(t=>t.next(e))}getChangedParams(e,t,s,r){const i=new Set,o=new Set(Object.keys(e||{})),B=new Set(Object.keys(t||{})),c=s.experiments||[],l=r?.experiments||[],f=this.createExperimentsMap(c),C=this.createExperimentsMap(l),m=s.rollouts||[],v=r?.rollouts||[],R=this.createRolloutsMap(m),N=this.createRolloutsMap(v);for(const x of o){if(!B.has(x)||e[x]!==t[x]){i.add(x);continue}if(f.has(x)!==C.has(x)){i.add(x);continue}const J=f.get(x),K=C.get(x);if(J&&K&&!this.areExperimentsEqual(J,K)){i.add(x);continue}if(R.has(x)!==N.has(x)){i.add(x);continue}const se=R.get(x),ue=N.get(x);se&&ue&&!this.areRolloutsEqual(se,ue)&&i.add(x)}for(const x of B)o.has(x)||i.add(x);return i}areExperimentsEqual(e,t){return e.experimentId===t.experimentId&&e.variantId===t.variantId&&e.timeToLiveMillis===t.timeToLiveMillis&&e.triggerTimeoutMillis===t.triggerTimeoutMillis}areRolloutsEqual(e,t){if(e.size!==t.size)return!1;for(const[s,r]of e)if(t.get(s)!==r)return!1;return!0}createExperimentsMap(e){const t=new Map;for(const s of e)if(!(!s.affectedParameterKeys||s.experimentId.startsWith(cb)))for(const r of s.affectedParameterKeys)t.set(r,s);return t}createRolloutsMap(e){const t=new Map;for(const s of e){const r=s.rolloutId,i=s.variantId,o=s.affectedParameterKeys||[];for(const B of o){let c=t.get(B);c||(c=new Map,t.set(B,c)),c.set(r,i)}}return t}async fetchLatestConfig(e,t){const s=e-1,r=pf-s,i=this.storageCache.getCustomSignals();i&&this.logger.debug(`Fetching config with custom signals: ${JSON.stringify(i)}`);const o=new kp;try{const B={cacheMaxAgeMillis:0,signal:o,customSignals:i,fetchType:"REALTIME",fetchAttempt:r},c=await this.storage.getLastSuccessfulFetchResponse(),l=await this.cachingClient.fetch(B);let f=await this.storage.getActiveConfig();if(!this.fetchResponseIsUpToDate(l,t)){this.logger.debug("Fetched template version is the same as SDK's current version. Retrying fetch."),await this.autoFetch(s,t);return}if(l.config==null){this.logger.debug("The fetch succeeded, but the backend had no updates.");return}f==null&&(f={});const C=this.getChangedParams(l.config,f,l,c);if(C.size===0){this.logger.debug("Config was fetched, but no params changed.");return}const m={getUpdatedKeys(){return new Set(C)}};this.executeAllListenerCallbacks(m)}catch(B){const c=B instanceof Error?B.message:String(B),l=Ie.create("update-not-fetched",{originalErrorMessage:`Failed to auto-fetch config update: ${c}`});this.propagateError(l)}}async autoFetch(e,t){if(e===0){const i=Ie.create("update-not-fetched",{originalErrorMessage:"Unable to fetch the latest version of the template."});this.propagateError(i);return}const r=this.getRandomInt(4)*1e3;await new Promise(i=>setTimeout(i,r)),await this.fetchLatestConfig(e,t)}async handleNotifications(e){let t,s="";for(;;){const{done:r,value:i}=await e.read();if(r)break;if(t=this.decoder.decode(i,{stream:!0}),s+=t,t.includes("}")){if(s=this.parseAndValidateConfigUpdateMessage(s),s.length===0)continue;try{const o=JSON.parse(s);if(this.isEventListenersEmpty())break;if(Ef in o&&o[Ef]===!0){const B=Ie.create("realtime-unavailable",{originalErrorMessage:"The server is temporarily unavailable. Try again in a few minutes."});this.propagateError(B);break}if(Df in o){const B=await this.storage.getActiveConfigTemplateVersion(),c=Number(o[Df]);B&&c>B&&await this.autoFetch(pf,c)}if(_f in o){const B=Number(o[_f]);await this.updateBackoffMetadataWithRetryInterval(B)}}catch(o){this.logger.debug("Unable to parse latest config update message.",o);const B=o instanceof Error?o.message:String(o);this.propagateError(Ie.create("update-message-invalid",{originalErrorMessage:B}))}s=""}}}async listenForNotifications(e){try{await this.handleNotifications(e)}catch{this.isInBackground||this.logger.debug("Real-time connection was closed due to an exception.")}}async prepareAndBeginRealtimeHttpStream(){if(!this.checkAndSetHttpConnectionFlagIfNotRunning())return;let e=await this.storage.getRealtimeBackoffMetadata();e||(e={backoffEndTimeMillis:new Date(gf),numFailedStreams:mf});const t=e.backoffEndTimeMillis.getTime();if(Date.now()<t){await this.retryHttpConnectionWhenBackoffEnds();return}let s,r;try{if(s=await this.createRealtimeConnection(),r=s.status,s.ok&&s.body){this.resetRetryCount(),await this.resetRealtimeBackoff();const i=s.body.getReader();this.reader=i,await this.listenForNotifications(i)}}catch(i){this.isInBackground?this.resetRetryCount():this.logger.debug("Exception connecting to real-time RC backend. Retrying the connection...:",i)}finally{await this.closeRealtimeHttpConnection(),this.setIsHttpConnectionRunning(!1);const i=!this.isInBackground&&(r===void 0||this.isStatusCodeRetryable(r));if(i&&await this.updateBackoffMetadataWithLastFailedStreamConnectionTime(new Date),i||s?.ok)await this.retryHttpConnectionWhenBackoffEnds();else{const o=`Unable to connect to the server. HTTP status code: ${r}`,B=Ie.create("stream-error",{originalErrorMessage:o});this.propagateError(B)}}}canEstablishStreamConnection(){const e=this.observers.size>0,t=!this.isRealtimeDisabled,s=!this.isConnectionActive,r=!this.isInBackground;return e&&t&&s&&r}async makeRealtimeHttpConnection(e){if(this.canEstablishStreamConnection()){if(this.httpRetriesRemaining>0)this.httpRetriesRemaining--,await new Promise(t=>setTimeout(t,e)),this.prepareAndBeginRealtimeHttpStream();else if(!this.isInBackground){const t=Ie.create("stream-error",{originalErrorMessage:"Unable to connect to the server. Check your connection and try again."});this.propagateError(t)}}}async beginRealtime(){this.observers.size>0&&await this.makeRealtimeHttpConnection(0)}addObserver(e){this.observers.add(e),this.beginRealtime()}removeObserver(e){this.observers.has(e)&&this.observers.delete(e)}async onVisibilityChange(e){this.isInBackground=!e,e?e&&await this.beginRealtime():await this.closeRealtimeHttpConnection()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ub(){At(new Et(Mp,n,"PUBLIC").setMultipleInstances(!0)),rt(cB,ff),rt(cB,ff,"esm2020");function n(e,{options:t}){const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate(),i=e.getProvider("analytics-internal"),{projectId:o,apiKey:B,appId:c}=s.options;if(!o)throw Ie.create("registration-project-id");if(!B)throw Ie.create("registration-api-key");if(!c)throw Ie.create("registration-app-id");const l=t?.templateId||"firebase",f=Vo()?new sb(c,s.name,l):new rb,C=new ib(f),m=new $s(cB);m.logLevel=Be.ERROR;const v=new qv(r,Rn,l,o,B,c),R=new Wv(v,f),N=new $v(R,f,C,m),x=new lb(r,f,Rn,l,o,B,c,m,C,N),J=new Zv(s,N,C,f,m,x,i);return Uv(J),J}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hb(n){return n=Ge(n),await jv(n),Hv(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ub();let UB=null,ks=null,wf=!1;function fb(n){try{return UB=jR(n),ks=Gv(n),ks.settings={minimumFetchIntervalMillis:36e5},ks.defaultConfig={routing_long_note_chars:es},!0}catch{return!1}}async function Cb(){if(!ks)return es;try{await hb(ks);const n=Number(Jv(ks,"routing_long_note_chars").asString());return Number.isFinite(n)&&n>0?n:es}catch{return es}}async function db(n){if(wf)return!0;try{const e=Uw(n);return await AD(e),wf=!0,!0}catch{return!1}}async function pb(n,e){if(!UB)return{synced:0,failed:e.length,error:"Firestore is not initialized."};if(!await db(n))return{synced:0,failed:e.length,error:"Anonymous sign-in failed. Enable Anonymous auth in the Firebase console."};let t=0,s=0,r=null;for(const i of e)try{await qR(eT(UB,"notes",i.id),{title:i.title||"",body:i.body||"",tags:i.tags||[],updatedAt:uT(),syncedAt:new Date().toISOString()}),t+=1}catch(o){s+=1,r=o}return{synced:t,failed:s,error:r?String(r.message||r):null}}const j=n=>document.getElementById(n),ae={notes:[],currentId:null,mode:localStorage.getItem("offgrid-mode")||"auto",deviceStatus:"unknown",threshold:es,aiReady:!1,busy:!1};function st(n){return String(n??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;")}function Ee(n){j("aiStatus").textContent=n}function gb(n){const e=x_(n);return`<span class="badge ${e==="On-device"?"badge-device":e==="Cloud"?"badge-cloud":"badge-unknown"}">${st(e)}</span>`}function Qt(n,e,t,s){const r=document.createElement("div");r.className="result-card";const i=s&&typeof s.ms=="number"?` · ${s.ms} ms`:"",o=s?s.source:"unknown";return r.innerHTML=`<h4>${st(n)}${gb(o)}</h4>${e}
    <p class="route-reason">${st(t.reason)}${i}</p>`,r}function mb(n,e){let t=null;return(...s)=>{clearTimeout(t),t=setTimeout(()=>n(...s),e)}}async function Tn(){ae.notes=await U_();const n=j("searchInput").value.trim().toLowerCase(),e=j("noteList");e.innerHTML="";const t=ae.notes.filter(s=>!n||(s.title||"").toLowerCase().includes(n)||(s.body||"").toLowerCase().includes(n));if(t.length===0){const s=document.createElement("li");s.innerHTML='<div class="nl-snippet">No notes yet.</div>',e.appendChild(s);return}for(const s of t){const r=document.createElement("li");s.id===ae.currentId&&r.classList.add("active"),r.innerHTML=`<div class="nl-title">${st(s.title||"(Untitled)")}</div>
      <div class="nl-snippet">${st((s.body||"").split(`
`)[0]||"Empty note")}</div>`,r.addEventListener("click",()=>Mo(s.id)),e.appendChild(r)}}function Xs(){return ae.notes.find(n=>n.id===ae.currentId)||null}async function Mo(n){const e=await j_(n);e&&(ae.currentId=n,j("emptyState").hidden=!0,j("editorBody").hidden=!1,j("titleInput").value=e.title||"",j("bodyInput").value=e.body||"",j("tagsInput").value=(e.tags||[]).join(", "),j("charCount").textContent=`${(e.body||"").length.toLocaleString("en-US")} chars`,j("imagePreviewWrap").hidden=!e.imageDataUrl,e.imageDataUrl?(j("imagePreview").src=e.imageDataUrl,j("imageName").textContent=e.imageName||"Attached photo",j("describeBtn").disabled=!1):(j("imagePreview").src="",j("imageName").textContent="",j("describeBtn").disabled=!0),j("aiResults").innerHTML="",j("askManyResult").innerHTML="",Eb(e),await Tn())}function Eb(n){const e=j("aiResults"),t=n.ai||{};t.summary&&e.appendChild(Qt("Summary",`<p>${st(t.summary)}</p>`,{reason:"Saved from an earlier run."},{source:t.summarySource||"unknown"})),t.keyPoints&&t.keyPoints.length&&e.appendChild(Qt("Key points",`<ul>${t.keyPoints.map(s=>`<li>${st(s)}</li>`).join("")}</ul>`,{reason:"Saved from an earlier run."},{source:t.keyPointsSource||"unknown"})),t.actionItems&&t.actionItems.length&&e.appendChild(Qt("Action items",`<ul>${t.actionItems.map(s=>`<li>${st(s)}</li>`).join("")}</ul>`,{reason:"Saved from an earlier run."},{source:t.actionItemsSource||"unknown"}))}const oo=mb(async()=>{const n=Xs();n&&(n.title=j("titleInput").value,n.body=j("bodyInput").value,n.tags=j("tagsInput").value.split(",").map(e=>e.trim()).filter(Boolean),j("charCount").textContent=`${n.body.length.toLocaleString("en-US")} chars`,await ts(n),await Tn())},400);async function _b(){const n=oC();await ts(n),await Tn(),await Mo(n.id),j("titleInput").focus()}function hB(){const n=j("onlinePill");navigator.onLine?(n.textContent="● Online",n.classList.remove("pill-offline")):(n.textContent="● Offline",n.classList.add("pill-offline"))}function Ji(n){const e=j("devicePill"),t=ae.deviceStatus;if(typeof n=="number"){e.textContent=`Device: downloading ${Math.round(n*100)}%`,e.classList.add("pill-muted");return}t==="available"?(e.textContent="Device: Gemini Nano ready",e.classList.remove("pill-muted")):t==="downloading"||t==="downloadable"?(e.textContent="Device: model not downloaded yet",e.classList.add("pill-muted")):t==="unavailable"?(e.textContent="Device: not available in this browser",e.classList.add("pill-muted")):(e.textContent="Device: checking…",e.classList.add("pill-muted"))}function sl(){return ae.aiReady?!0:(Ee(rC()||"AI is not ready. Configure Firebase first (see the banner above)."),!1)}function rl(n,e){return M_({noteChars:e,task:n,online:navigator.onLine,deviceStatus:ae.deviceStatus,mode:ae.mode,longNoteChars:ae.threshold})}async function fB(n){const e=Xs();if(!e||!sl()||ae.busy)return;const t=(j("bodyInput").value||"").trim();if(!t&&n!=="describe-image"){Ee("Write something in the note first.");return}const s=rl(n,t.length);ae.busy=!0;try{if(n==="summarize"){Ee(`Summarizing ${s.route==="on-device"?"on-device":"in the cloud"}…`);const r=await $i(`Summarize this note in 2-3 short sentences. Keep only facts from the note; do not add new information.

NOTE:
${t.slice(0,6e3)}`,{mode:s.mode});e.ai={...e.ai||{},summary:r.text,summarySource:r.source},await ts(e),j("aiResults").prepend(Qt("Summary",`<p>${st(r.text)}</p>`,s,r)),Ee("Done.")}else if(n==="key-points"||n==="action-items"){const r=n==="key-points",i={type:Ja.OBJECT,properties:{items:{type:Ja.ARRAY,items:{type:Ja.STRING}}},required:["items"]};Ee(`Extracting ${r?"key points":"action items"} ${s.route==="on-device"?"on-device":"in the cloud"}…`);const o=await L_(r?`Extract the 3-6 most important points from this note. Return ONLY the JSON object {"items": ["...", ...]}.

NOTE:
${t.slice(0,6e3)}`:`Extract the concrete action items / follow-ups from this note (3-6 max). Each item is one short imperative sentence. Return ONLY the JSON object {"items": ["...", ...]}.

NOTE:
${t.slice(0,6e3)}`,i,{mode:s.mode}),B=Array.isArray(o.data.items)?o.data.items:[];r?e.ai={...e.ai||{},keyPoints:B,keyPointsSource:o.source}:e.ai={...e.ai||{},actionItems:B,actionItemsSource:o.source},await ts(e),j("aiResults").prepend(Qt(r?"Key points":"Action items",`<ul>${B.map(c=>`<li>${st(c)}</li>`).join("")}</ul>`,s,o)),Ee("Done.")}else if(n==="title"){Ee(`Writing a title ${s.route==="on-device"?"on-device":"in the cloud"}…`);const r=await $i(`Give this note a short title of at most 8 words. Return ONLY the title, no quotes, no punctuation at the end.

NOTE:
${t.slice(0,2e3)}`,{mode:s.mode}),i=r.text.trim().replace(/^["']|["']$/g,"");j("titleInput").value=i,await oo.flush?.(),e.title=i,await ts(e),await Tn(),j("aiResults").prepend(Qt("Title",`<p>${st(i)}</p>`,s,r)),Ee("Done.")}else if(n==="ask"){const r=j("askInput").value.trim();if(!r){Ee("Type a question first.");return}Ee(`Answering ${s.route==="on-device"?"on-device":"in the cloud"}…`);const i=await $i(`Answer this question using ONLY the note below. If the note does not contain the answer, say so in one sentence.

QUESTION: ${r}

NOTE:
${t.slice(0,6e3)}`,{mode:s.mode});j("aiResults").prepend(Qt(`Answer: ${r}`,`<p>${st(i.text)}</p>`,s,i)),Ee("Done.")}}catch(r){Ee(`Error: ${r.message}`)}finally{ae.busy=!1}}async function Db(){const n=Xs();if(!n||!sl()||ae.busy)return;const e=j("imageInput").files&&j("imageInput").files[0];if(!e&&!n.imageDataUrl){Ee("Attach a photo first.");return}ae.busy=!0;try{let t;if(e){const s=rl("describe-image",0);Ee(`Reading the photo ${s.route==="on-device"?"on-device":"in the cloud"}…`),t=await k_("Describe what is written or shown in this image. First transcribe any visible text, then summarize it in 2-3 sentences.",e,{mode:s.mode}),j("askManyResult").innerHTML="",j("aiResults").prepend(Qt("Photo description",`<p>${st(t.text)}</p>`,s,t))}Ee("Done.")}catch(t){Ee(`Error: ${t.message}`)}finally{ae.busy=!1}}async function If(){if(!sl()||ae.busy)return;const n=j("askManyInput").value.trim();if(!n){Ee("Type a question first.");return}const e=ae.notes.filter(s=>(s.body||"").trim());if(e.length===0){Ee("No notes to ask about yet.");return}const t=rl("ask-many",0);ae.busy=!0;try{Ee("Answering across all notes in the cloud…");const s=e.slice(0,12).map((i,o)=>`--- Note ${o+1}: ${i.title||"(Untitled)"}
${(i.body||"").slice(0,1500)}`).join(`

`),r=await $i(`Answer this question using ONLY the notes below. If the notes do not contain the answer, say so in one sentence.

QUESTION: ${n}

NOTES:
${s}`,{mode:t.mode});j("askManyResult").innerHTML="",j("askManyResult").appendChild(Qt(`Answer across ${e.length} note(s): ${n}`,`<p>${st(r.text)}</p>`,t,r)),Ee("Done.")}catch(s){Ee(`Error: ${s.message}`)}finally{ae.busy=!1}}function wb(){const n=j("imageInput").files&&j("imageInput").files[0],e=Xs();if(!n||!e)return;const t=new FileReader;t.onloadend=async()=>{e.imageDataUrl=String(t.result),e.imageName=n.name,await ts(e),j("imagePreview").src=e.imageDataUrl,j("imagePreviewWrap").hidden=!1,j("imageName").textContent=n.name,j("describeBtn").disabled=!1},t.readAsDataURL(n)}async function Ib(){if(!ae.aiReady){j("syncStatus").textContent="Configure Firebase first.";return}j("syncStatus").textContent="Syncing…";const n=await pb(iC(),ae.notes);if(j("syncStatus").textContent=n.error?`Sync failed: ${n.error}`:`Synced ${n.synced} note(s)${n.failed?`, ${n.failed} failed`:""}.`,!n.error)for(const e of ae.notes)e.syncedAt=Date.now()}function yb(){const n=Xs();if(!n)return;const e=`# ${n.title||"Untitled"}

${n.body||""}

${(n.tags||[]).length?`Tags: ${n.tags.join(", ")}
`:""}`,t=new Blob([e],{type:"text/markdown"}),s=document.createElement("a");s.href=URL.createObjectURL(t),s.download=`${(n.title||"note").replace(/[^\w\-]+/g,"-").slice(0,40)||"note"}.md`,s.click(),URL.revokeObjectURL(s.href)}async function Tb(){const n=Xs();n&&confirm(`Delete "${n.title||"Untitled"}"?`)&&(await J_(n.id),ae.currentId=null,j("emptyState").hidden=!1,j("editorBody").hidden=!0,await Tn())}async function Ab(){if(j("modeSelect").value=ae.mode,j("modeSelect").addEventListener("change",n=>{ae.mode=n.target.value,localStorage.setItem("offgrid-mode",ae.mode),j("routeInfo").textContent=`AI mode: ${ae.mode}`}),j("routeInfo").textContent=`AI mode: ${ae.mode}`,hB(),window.addEventListener("online",hB),window.addEventListener("offline",hB),j("newNoteBtn").addEventListener("click",_b),j("sampleBtn").addEventListener("click",async()=>{const n=$_();await ts(n),await Tn(),await Mo(n.id)}),j("searchInput").addEventListener("input",Tn),j("titleInput").addEventListener("input",oo),j("bodyInput").addEventListener("input",oo),j("tagsInput").addEventListener("input",oo),j("exportBtn").addEventListener("click",yb),j("deleteBtn").addEventListener("click",Tb),j("imageInput").addEventListener("change",wb),j("describeBtn").addEventListener("click",Db),j("askBtn").addEventListener("click",()=>fB("ask")),j("askInput").addEventListener("keydown",n=>{n.key==="Enter"&&fB("ask")}),j("askManyBtn").addEventListener("click",If),j("askManyInput").addEventListener("keydown",n=>{n.key==="Enter"&&If()}),document.querySelectorAll(".ai-btn").forEach(n=>{n.addEventListener("click",()=>fB(n.dataset.task))}),j("syncBtn").addEventListener("click",Ib),j("downloadModelBtn").addEventListener("click",async()=>{if(!ae.aiReady){Ee("Configure Firebase first — the on-device model is initialized through Firebase AI Logic.");return}j("downloadModelBtn").disabled=!0,Ee("Downloading the on-device model… (this can take a while the first time)");try{await F_(n=>Ji(n)),ae.deviceStatus=await Ou(),Ji(),Ee("On-device model is ready.")}catch(n){Ee(`Could not download the on-device model: ${n.message}`)}finally{j("downloadModelBtn").disabled=!1}}),await Tn(),ae.notes.length>0&&await Mo(ae.notes[0].id),!sC()){j("setupBanner").hidden=!1,Ji();return}if(!N_()){j("setupBanner").hidden=!1,j("setupBanner").innerHTML=`<strong>Firebase failed to initialize:</strong> ${st(rC()||"unknown error")}`;return}ae.aiReady=!0,fb(iC()),ae.deviceStatus=await Ou(),Ji();try{ae.threshold=await Cb()}catch{ae.threshold=es}j("routeInfo").textContent=`AI mode: ${ae.mode} · long-note threshold: ${ae.threshold.toLocaleString("en-US")} chars`}Ab();
