function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,b=function(){return l.Date.now()};function p(e,t,n){var o,r,i,a,u,f,c=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function j(e){return c=e,u=setTimeout(S,t),l?v(e):a}function O(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=i}function S(){var e=b();if(O(e))return h(e);u=setTimeout(S,function(e){var n=t-(e-f);return s?d(n,i-(e-c)):n}(e))}function h(e){return u=void 0,p&&o?v(e):(o=r=void 0,a)}function T(){var e=b(),n=O(e);if(o=arguments,r=this,f=e,n){if(void 0===u)return j(f);if(s)return u=setTimeout(S,t),v(f)}return void 0===u&&(u=setTimeout(S,t)),a}return t=y(t)||0,g(n)&&(l=!!n.leading,i=(s="maxWait"in n)?m(y(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),T.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=f=r=u=void 0},T.flush=function(){return void 0===u?a:h(b())},T}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:o,maxWait:t,trailing:r})};const v={form:document.querySelector(".feedback-form"),email:document.querySelector('input[type="email"]'),message:document.querySelector('textarea[name="message"]'),submit:document.querySelector('button[type="submit"]')};function j(){const e=localStorage.getItem("feedback-form-state");try{if(parsedfeedbackMemoryObj=JSON.parse(e),parsedfeedbackMemoryObj)return v.email.value=parsedfeedbackMemoryObj.email,v.message.value=parsedfeedbackMemoryObj.message,parsedfeedbackMemoryObj}catch(e){console.log(e.name),console.log(e.message)}}v.form.addEventListener("input",e(t)((function(e){e.target.nodeName;{const e={email:v.email.value,message:v.message.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}}),500)),v.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(j()),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),j();
//# sourceMappingURL=03-feedback.a34df7af.js.map