(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[16563,15071],{989881:(e,t,n)=>{var r=n(247816),o=n(899291)(r);e.exports=o},121078:(e,t,n)=>{var r=n(862488),o=n(137285);e.exports=function e(t,n,i,a,s){var l=-1,c=t.length;for(i||(i=o),s||(s=[]);++l<c;){var u=t[l];n>0&&i(u)?n>1?e(u,n-1,i,a,s):r(s,u):a||(s[s.length]=u)}return s}},247816:(e,t,n)=>{var r=n(228483),o=n(3674);e.exports=function(e,t){return e&&r(e,t,o)}},297786:(e,t,n)=>{var r=n(671811),o=n(240327);e.exports=function(e,t){for(var n=0,i=(t=r(t,e)).length;null!=e&&n<i;)e=e[o(t[n++])];return n&&n==i?e:void 0}},200013:e=>{e.exports=function(e,t){return null!=e&&t in Object(e)}},702958:(e,t,n)=>{var r=n(646384),o=n(690939);e.exports=function(e,t,n,i){var a=n.length,s=a,l=!i;if(null==e)return!s;for(e=Object(e);a--;){var c=n[a];if(l&&c[2]?c[1]!==e[c[0]]:!(c[0]in e))return!1}for(;++a<s;){var u=(c=n[a])[0],d=e[u],p=c[1];if(l&&c[2]){if(void 0===d&&!(u in e))return!1}else{var g=new r;if(i)var f=i(d,p,u,e,t,g);if(!(void 0===f?o(p,d,3,i,g):f))return!1}}return!0}},267206:(e,t,n)=>{var r=n(191573),o=n(716432),i=n(406557),a=n(701469),s=n(139601);e.exports=function(e){return"function"==typeof e?e:null==e?i:"object"==typeof e?a(e)?o(e[0],e[1]):r(e):s(e)}},269199:(e,t,n)=>{var r=n(989881),o=n(498612);e.exports=function(e,t){var n=-1,i=o(e)?Array(e.length):[];return r(e,(function(e,r,o){i[++n]=t(e,r,o)})),i}},191573:(e,t,n)=>{var r=n(702958),o=n(301499),i=n(542634);e.exports=function(e){var t=o(e);return 1==t.length&&t[0][2]?i(t[0][0],t[0][1]):function(n){return n===e||r(n,e,t)}}},716432:(e,t,n)=>{var r=n(690939),o=n(227361),i=n(379095),a=n(115403),s=n(689162),l=n(542634),c=n(240327);e.exports=function(e,t){return a(e)&&s(t)?l(c(e),t):function(n){var a=o(n,e);return void 0===a&&a===t?i(n,e):r(t,a,3)}}},882689:(e,t,n)=>{var r=n(829932),o=n(297786),i=n(267206),a=n(269199),s=n(571131),l=n(307518),c=n(285022),u=n(406557),d=n(701469);e.exports=function(e,t,n){t=t.length?r(t,(function(e){return d(e)?function(t){return o(t,1===e.length?e[0]:e)}:e})):[u];var p=-1;t=r(t,l(i));var g=a(e,(function(e,n,o){return{criteria:r(t,(function(t){return t(e)})),index:++p,value:e}}));return s(g,(function(e,t){return c(e,t,n)}))}},840371:e=>{e.exports=function(e){return function(t){return null==t?void 0:t[e]}}},379152:(e,t,n)=>{var r=n(297786);e.exports=function(e){return function(t){return r(t,e)}}},571131:e=>{e.exports=function(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}},671811:(e,t,n)=>{var r=n(701469),o=n(115403),i=n(555514),a=n(479833);e.exports=function(e,t){return r(e)?e:o(e,t)?[e]:i(a(e))}},626393:(e,t,n)=>{var r=n(733448);e.exports=function(e,t){if(e!==t){var n=void 0!==e,o=null===e,i=e==e,a=r(e),s=void 0!==t,l=null===t,c=t==t,u=r(t);if(!l&&!u&&!a&&e>t||a&&s&&c&&!l&&!u||o&&s&&c||!n&&c||!i)return 1;if(!o&&!a&&!u&&e<t||u&&n&&i&&!o&&!a||l&&n&&i||!s&&i||!c)return-1}return 0}},285022:(e,t,n)=>{var r=n(626393);e.exports=function(e,t,n){for(var o=-1,i=e.criteria,a=t.criteria,s=i.length,l=n.length;++o<s;){var c=r(i[o],a[o]);if(c)return o>=l?c:c*("desc"==n[o]?-1:1)}return e.index-t.index}},899291:(e,t,n)=>{var r=n(498612);e.exports=function(e,t){return function(n,o){if(null==n)return n;if(!r(n))return e(n,o);for(var i=n.length,a=t?i:-1,s=Object(n);(t?a--:++a<i)&&!1!==o(s[a],a,s););return n}}},301499:(e,t,n)=>{var r=n(689162),o=n(3674);e.exports=function(e){for(var t=o(e),n=t.length;n--;){var i=t[n],a=e[i];t[n]=[i,a,r(a)]}return t}},900222:(e,t,n)=>{var r=n(671811),o=n(135694),i=n(701469),a=n(565776),s=n(541780),l=n(240327);e.exports=function(e,t,n){for(var c=-1,u=(t=r(t,e)).length,d=!1;++c<u;){var p=l(t[c]);if(!(d=null!=e&&n(e,p)))break;e=e[p]}return d||++c!=u?d:!!(u=null==e?0:e.length)&&s(u)&&a(p,u)&&(i(e)||o(e))}},137285:(e,t,n)=>{var r=n(562705),o=n(135694),i=n(701469),a=r?r.isConcatSpreadable:void 0;e.exports=function(e){return i(e)||o(e)||!!(a&&e&&e[a])}},115403:(e,t,n)=>{var r=n(701469),o=n(733448),i=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,a=/^\w*$/;e.exports=function(e,t){if(r(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!o(e))||(a.test(e)||!i.test(e)||null!=t&&e in Object(t))}},689162:(e,t,n)=>{var r=n(513218);e.exports=function(e){return e==e&&!r(e)}},542634:e=>{e.exports=function(e,t){return function(n){return null!=n&&(n[e]===t&&(void 0!==t||e in Object(n)))}}},624523:(e,t,n)=>{var r=n(288306);e.exports=function(e){var t=r(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}},555514:(e,t,n)=>{var r=n(624523),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,i=/\\(\\)?/g,a=r((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(o,(function(e,n,r,o){t.push(r?o.replace(i,"$1"):n||e)})),t}));e.exports=a},240327:(e,t,n)=>{var r=n(733448);e.exports=function(e){if("string"==typeof e||r(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t}},227361:(e,t,n)=>{var r=n(297786);e.exports=function(e,t,n){var o=null==e?void 0:r(e,t);return void 0===o?n:o}},379095:(e,t,n)=>{var r=n(200013),o=n(900222);e.exports=function(e,t){return null!=e&&o(e,t,r)}},288306:(e,t,n)=>{var r=n(883369);function o(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(o.Cache||r),n}o.Cache=r,e.exports=o},139601:(e,t,n)=>{var r=n(840371),o=n(379152),i=n(115403),a=n(240327);e.exports=function(e){return i(e)?r(a(e)):o(e)}},189734:(e,t,n)=>{var r=n(121078),o=n(882689),i=n(105976),a=n(816612),s=i((function(e,t){if(null==e)return[];var n=t.length;return n>1&&a(e,t[0],t[1])?t=[]:n>2&&a(t[0],t[1],t[2])&&(t=[t[0]]),o(e,r(t,1),[])}));e.exports=s},615071:(e,t,n)=>{n.d(t,{Z:()=>b});var r=n(487462),o=n(263366),i=n(875068);n(45697);function a(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var s=n(667294),l=n(973935);const c=!1;var u=n(500220),d="unmounted",p="exited",g="entering",f="entered",m="exiting",_=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var o,i=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?i?(o=p,r.appearStatus=g):o=f:o=t.unmountOnExit||t.mountOnEnter?d:p,r.state={status:o},r.nextCallback=null,r}(0,i.Z)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===d?{status:p}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==g&&n!==f&&(t=g):n!==g&&n!==f||(t=m)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),t===g?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&this.state.status===p&&this.setState({status:d})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,o=this.props.nodeRef?[r]:[l.findDOMNode(this),r],i=o[0],a=o[1],s=this.getTimeouts(),u=r?s.appear:s.enter;!e&&!n||c?this.safeSetState({status:f},(function(){t.props.onEntered(i)})):(this.props.onEnter(i,a),this.safeSetState({status:g},(function(){t.props.onEntering(i,a),t.onTransitionEnd(u,(function(){t.safeSetState({status:f},(function(){t.props.onEntered(i,a)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:l.findDOMNode(this);t&&!c?(this.props.onExit(r),this.safeSetState({status:m},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:p},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:p},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:l.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=o[0],a=o[1];this.props.addEndListener(i,a)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===d)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,(0,o.Z)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return s.createElement(u.Z.Provider,{value:null},"function"==typeof n?n(e,r):s.cloneElement(s.Children.only(n),r))},t}(s.Component);function v(){}_.contextType=u.Z,_.propTypes={},_.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:v,onEntering:v,onEntered:v,onExit:v,onExiting:v,onExited:v},_.UNMOUNTED=d,_.EXITED=p,_.ENTERING=g,_.ENTERED=f,_.EXITING=m;const h=_;var E=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return r=t,void((n=e).classList?n.classList.remove(r):"string"==typeof n.className?n.className=a(n.className,r):n.setAttribute("class",a(n.className&&n.className.baseVal||"",r)));var n,r}))},x=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(e,n){var r=t.resolveArguments(e,n),o=r[0],i=r[1];t.removeClasses(o,"exit"),t.addClass(o,i?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var r=t.resolveArguments(e,n),o=r[0],i=r[1]?"appear":"enter";t.addClass(o,i,"active"),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var r=t.resolveArguments(e,n),o=r[0],i=r[1]?"appear":"enter";t.removeClasses(o,i),t.addClass(o,i,"done"),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"appear"),t.removeClasses(n,"enter"),t.addClass(n,"exit","base"),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.resolveArguments(e)[0];t.addClass(n,"exit","active"),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"exit"),t.addClass(n,"exit","done"),t.props.onExited&&t.props.onExited(e)},t.resolveArguments=function(e,n){return t.props.nodeRef?[t.props.nodeRef.current,e]:[e,n]},t.getClassNames=function(e){var n=t.props.classNames,r="string"==typeof n,o=r?""+(r&&n?n+"-":"")+e:n[e];return{baseClassName:o,activeClassName:r?o+"-active":n[e+"Active"],doneClassName:r?o+"-done":n[e+"Done"]}},t}(0,i.Z)(t,e);var n=t.prototype;return n.addClass=function(e,t,n){var r=this.getClassNames(t)[n+"ClassName"],o=this.getClassNames("enter").doneClassName;"appear"===t&&"done"===n&&o&&(r+=" "+o),"active"===n&&e&&e.scrollTop,r&&(this.appliedClasses[t][n]=r,function(e,t){e&&t&&t.split(" ").forEach((function(t){return r=t,void((n=e).classList?n.classList.add(r):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(n,r)||("string"==typeof n.className?n.className=n.className+" "+r:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+r)));var n,r}))}(e,r))},n.removeClasses=function(e,t){var n=this.appliedClasses[t],r=n.base,o=n.active,i=n.done;this.appliedClasses[t]={},r&&E(e,r),o&&E(e,o),i&&E(e,i)},n.render=function(){var e=this.props,t=(e.classNames,(0,o.Z)(e,["classNames"]));return s.createElement(h,(0,r.Z)({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(s.Component);x.defaultProps={classNames:""},x.propTypes={};const b=x},500220:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(667294).createContext(null)},918301:(e,t,n)=>{n.d(t,{CB:()=>g,y9:()=>p});var r=n(667294),o=n(121151),i=n(214494),a=n(898781),s=n(883119),l=n(785893);const c=({onConfirm:e})=>{const t=(0,a.ZP)(),[n,c]=(0,r.useState)(!1),u=()=>{c(!0),i.Z.create("ApiResource",{url:"/v3/users/email/verify/resend/"}).callCreate()};return(0,l.jsx)(o.ZP,{accessibilityModalLabel:t.bt("Verify your email", "Verify your email", "Accessible label for email verification being required", undefined, true),onDismiss:e,heading:t.bt("Verify your email", "Verify your email", "Accessible label for email verification being required", undefined, true),footer:(0,l.jsxs)(s.kC,{justifyContent:"end",gap:{row:2,column:0},children:[n?(0,l.jsx)(s.zx,{fullWidth:!0,size:"lg",color:"gray",text:t.bt("Email sent", "Email sent", "Button text for verification email being sent", undefined, true),disabled:n,onClick:u}):(0,l.jsx)(s.zx,{fullWidth:!0,size:"lg",color:"gray",text:t.bt("Resend email", "Resend email", "Button text for resending email verification email", undefined, true),disabled:n,onClick:u}),(0,l.jsx)(s.zx,{fullWidth:!0,size:"lg",color:"red",text:t.bt("OK", "Got it", "Button text for acknowledging email verificaiton is required", undefined, true),onClick:e})]}),role:"alertdialog",children:(0,l.jsx)(s.xu,{padding:8,children:(0,l.jsx)(s.xv,{align:"center",size:"300",children:t.bt("Keep your account secure by verifying your email address. Check the inbox associated with this account for an email from us to continue using Pinterest.", "Keep your account secure by verifying your email address. Check the inbox associated with this account for an email from us to continue using Pinterest.", "Inform users that they need to verify their email to keep their account secure and continue using Pinterest", undefined, true)})})})};var u=n(425288);const{Provider:d,useHook:p}=(0,u.Z)("EmailVerificationReminderModal");function g({children:e}){const[t,n]=(0,r.useState)(!1),o=(0,r.useMemo)((()=>({showEmailVerificationReminderModal:()=>{n(!0)}})),[]);return(0,l.jsxs)(r.Fragment,{children:[(0,l.jsx)(d,{value:o,children:e}),t&&(0,l.jsx)(c,{onConfirm:()=>{n(!1)}})]})}},55259:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(794230),o=n(619937);const i={campaignFilter:"all",adGroupFilter:"all",adFilter:"all"},a=e=>{let t={};return e&&(t={objectiveTypes:[e]}),t},s={overview:()=>"/",reporting:e=>{const t=e.objectiveType||null;delete e.objectiveType;const n={...e,...a(t)};return(0,r.Z)("/reporting/campaigns/",n)},reportingAdGroup:e=>{const{campaignId:t,objectiveType:n,showAllEntities:o,adGroupId:s,message:l}=e,c=s?{adGroupIds:[s]}:{},u={campaignIds:[t],...o?i:{},...a(n),...c,message:l};return(0,r.Z)("/reporting/adgroups/",u)},campaign:e=>{const{id:t,objectiveType:n}=e;return(0,r.Z)("/reporting/adgroups/",{campaignIds:[t],...a(n)})},editCampaign:e=>e.isAutomatedCampaign?s.editAutomated({campaignId:e.id,view:"campaign"}):s.editV2({campaignId:e.id,view:"campaign"}),adgroup:e=>{const{id:t,objectiveType:n,showAllEntities:o,pinPromotionId:s,campaignId:l}=e;if("TEMPORARY_SHOPPING"===n||"CATALOG_SALES"===n)return(0,r.Z)("/reporting/productgroups/",{adGroupIds:[t],...a(n)});{const e=o?i:{},c=l?{campaignIds:[l]}:{},u=s?{pinPromotionIds:[s]}:{};return(0,r.Z)("/reporting/ads/",{adGroupIds:[t],...a(n),...e,...u,...c})}},editAdGroup:e=>e.isAutomatedCampaign?s.editAutomated({campaignId:e.id,view:"campaign"}):s.editV2({adGroupId:e.id,view:"adgroup"}),pinPromotion:e=>{const{id:t,adFilter:n}=e,o=n?{adFilter:n}:{};return(0,r.Z)("/reporting/ads/",{pinPromotionIds:[t],...o})},editPinPromotion:e=>{const t=e.isCreatingPins?{isCreatingPins:!0}:{},n=e.pinPromotionId?{pinPromotionId:e.pinPromotionId}:{};return s.editV2({adGroupId:e.adGroupId,view:"ad",...n,...t})},productGroup:e=>{const{id:t,name:n}=e;return(0,r.Z)("/reporting/productgroups/",{productGroupIds:[t],name:n})},campaigns:()=>"/reporting/campaigns/",adgroups:()=>"/reporting/adgroups/",ads:()=>"/reporting/ads/",productgroups:()=>"/reporting/productgroups/",campaignNegativeKeywords:()=>"/reporting/campaignNegativeKeywords/",campaignSearchQueries:()=>"/reporting/campaignSearchQueries/",adGroupNegativeKeywords:()=>"/reporting/adGroupNegativeKeywords/",adGroupPositiveKeywords:()=>"/reporting/adGroupPositiveKeywords/",adGroupSearchQueries:()=>"/reporting/adGroupSearchQueries/",ad:e=>s.pinPromotion(e),campaignMode:e=>(0,r.Z)("/ads/campaign_mode/",e.managedClientId?{managedClientId:e.managedClientId}:void 0),create:e=>{const{campaignId:t,objectiveType:n,partialCreate:o,catalogsFeedId:i,managedClientId:a,productGroupId:s}=e,l={};return t&&o&&(l.campaignId=t),n&&(l.objectiveType=n),"CATALOG_SALES"===n&&i&&(l.catalogsFeedId=i),s&&(l.productGroupId=s),a&&(l.managedClientId=a),(0,r.Z)("/ads/create/",l)},createAutomated:e=>(0,r.Z)("/automated/ads/create/",e),editV2:e=>(0,r.Z)("/ads/edit/",e),editAutomated:e=>(0,r.Z)("/automated/ads/edit/",e),editDraftCampaign:e=>(0,r.Z)("/ads/edit_draft/",{campaignId:e.campaignId,view:"campaign"}),duplicateCampaign:e=>(0,r.Z)("/ads/duplicate/",e),audiences:e=>(0,r.Z)("/audiences/",e.managedClientId?{managedClientId:e.managedClientId}:void 0),audience_debug:()=>"/audience_debug/",prepaid_spend_campaign_breakdown:()=>"/billing/prepaid_spend_campaign_breakdown/",billing:e=>{const{page:t,subSection:n,nextStepUrl:i}=e;switch(t){case o.kM.BILLING_HISTORY:return"/billing/history/";case o.kM.ORDER_LINES:return"/billing/order_lines/";case o.kM.PROMOTIONS:return"/billing/promotions/";case o.kM.DOCUMENTS:return"/billing/documents/";case o.kM.PREPAID_CAMPAIGN_SPEND:return"/billing/prepaid_campaign_spend_summary/";default:const e={};return n&&(e.section=n),i&&(e.next_step_link_url=i),(0,r.Z)("/billing/",e)}},bulk:e=>{const{subSection:t,page:n,jobStarted:i}=e||{};switch(n){case o.fm.UPLOAD_TEMPLATE:return(0,r.Z)("/bulk_editor/upload_template/",{section:t});case o.fm.DOWNLOAD_TEMPLATE:return(0,r.Z)("/bulk_editor/download_template/",{section:t});case o.fm.HISTORY:return(0,r.Z)("/bulk_editor/history/",{section:t,job_started:i});case o.fm.RESOURCES:return(0,r.Z)("/bulk_editor/resources/",{section:t});default:return"/bulk_editor/"}},history:e=>(0,r.Z)("/history/",e),shopping:e=>s.reporting(a("TEMPORARY_SHOPPING")),pinterest_tag:e=>{const{page:t,subSection:n,platform:i}=e;switch(t){case o.qp.PINTEREST_EVENT_HISTORY:return"/conversions/event-history/";case o.qp.CONVERSION_HEALTH:return"/conversions/health/";case o.qp.PINTEREST_TAG:return(0,r.Z)("/conversions/tag/",{subPage:n,platform:i});case o.qp.PINTEREST_TAG_EVENTS:return"/conversions/tag-events/";case o.qp.PINTEREST_TAG_HEALTH:return"/conversions/tag-health/";case o.qp.CONVERSION_UPLOAD:return(0,r.Z)("/conversions/upload/",{subPage:n});case o.qp.UPLOAD_HISTORY:return(0,r.Z)("/conversions/history/",{subPage:n});case o.qp.PCA_UPLOAD_HISTORY:return(0,r.Z)("/conversions/pca_history/",{subPage:n});case o.qp.PCA_UPLOAD:return(0,r.Z)("/conversions/pca_upload/",{subPage:n});case o.qp.CONVERSIONS_API_MANAGER:return"/conversions/api_manager/";case o.qp.CONVERSIONS_API_MANUAL_SETUP_FLOW:return"/conversions/api_manual_setup/";case o.qp.CONVERSIONS_API_ACCESS_TOKEN:return"/conversions/access_token/";case o.qp.CONVERSIONS_API_DEDUPLICATION:return"/conversions/deduplication/";default:return"/conversions/tag/"}},"pin-builder":e=>(0,r.Z)("/pin-builder/",e),purchases:()=>s.reporting(a("PURCHASE")),awareness_reserved:()=>s.reporting(a("IMPRESSION")),engagement:()=>s.reporting(a("BILLABLE_ENGAGEMENT")),videos:()=>s.reporting(a("TEMPORARY_BIDDED_CPM_VIDEO")),videos_reserved:()=>s.reporting(a("TEMPORARY_IMPRESSION_VIDEO")),videos_cpv:()=>s.reporting(a("TEMPORARY_MRC_CPV_VIDEO")),conversions:()=>s.reporting(a("WEB_CONVERSION")),accounts_manager:()=>"/accounts_manager/",reporting_preferences:e=>(0,r.Z)("/reporting/preferences/",e),report_builder:e=>(0,r.Z)("/report-center/builder/",e),report_history:e=>(0,r.Z)("/report-center/history/",e),report_unsubscribe:e=>(0,r.Z)("/report-center/unsubscribe/",e),report_download:e=>(0,r.Z)("/report-center/download/",e),media_planner:()=>"/media_planner/",awareness:()=>s.reporting(a("AWARENESS")),traffic:()=>s.reporting(a("TRAFFIC")),app_installs:()=>s.reporting(a("APP_INSTALL")),catalog_sales:()=>s.reporting(a("CATALOG_SALES")),web_conversion:()=>s.reporting(a("WEB_CONVERSION")),video_view:()=>s.reporting(a("VIDEO_VIEW")),quick_promote:e=>(0,r.Z)("/quick-promote/",e),quick_promote_on_www:()=>"/advertiser/quick-promote/",recommendations:e=>(0,r.Z)("/recommendations/",e),catalog_view:()=>"/product-catalogs/data-source"},l=s},11363:(e,t,n)=>{n.d(t,{Bx:()=>o,N4:()=>a,is:()=>s,lt:()=>r,oM:()=>i});const r=e=>e.bt("You're almost there! Log in to access all of Pinterest", "You're almost there! Log in to access all of Pinterest", "loginModal.limitedLogin.subheader", undefined, true),o=e=>e.bt("Log in to save this Pin", "Log in to save this Pin", "limitedLogin.modalHeader.repin", undefined, true),i=e=>e.bt("Log in to edit this Pin", "Log in to edit this Pin", "limitedLogin.modalHeader.editPin", undefined, true),a=({i18n:e,toFollow:t})=>t?e.bt("Log in to follow", "Log in to follow", "limitedLogin.modalHeader.follow", undefined, true):e.bt("Log in to unfollow", "Log in to unfollow", "limitedLogin.modalHeader.unfollow", undefined, true),s=e=>e.bt("Log in to create a Pin or board", "Log in to create a Pin or board", "limitedLogin.modalHeader.create", undefined, true)},946984:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(898781),o=n(11363),i=n(987318);const a=()=>{const{loginForMore:e,viewer:t,limitedLoginModalSubheader:n}=(0,i.H)(),a=(0,r.ZP)();return"AUTH"===t.type?null:t=>{null==e||e.setVisible(!0),null==n||n.setText((null==t?void 0:t.loginModalHeader)||(0,o.lt)(a))}}},987318:(e,t,n)=>{n.d(t,{H:()=>i,o:()=>o});var r=n(425288);const{Provider:o,useHook:i}=(0,r.Z)("LimitedLogin")}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/16563.en_IN-efbc5a0893071fb0.mjs.map