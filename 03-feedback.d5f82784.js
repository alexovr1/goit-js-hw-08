!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o="Expected a function",r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),m=Object.prototype.toString,d=Math.max,b=Math.min,p=function(){return s.Date.now()};function g(e,t,n){var r,i,a,u,f,c,l=0,s=!1,m=!1,g=!0;if("function"!=typeof e)throw new TypeError(o);function j(t){var n=r,o=i;return r=i=void 0,l=t,u=e.apply(o,n)}function O(e){return l=e,f=setTimeout(h,t),s?j(e):u}function S(e){var n=e-c;return void 0===c||n>=t||n<0||m&&e-l>=a}function h(){var e=p();if(S(e))return T(e);f=setTimeout(h,function(e){var n=t-(e-c);return m?b(n,a-(e-l)):n}(e))}function T(e){return f=void 0,g&&r?j(e):(r=i=void 0,u)}function k(){var e=p(),n=S(e);if(r=arguments,i=this,c=e,n){if(void 0===f)return O(c);if(m)return f=setTimeout(h,t),j(c)}return void 0===f&&(f=setTimeout(h,t)),u}return t=v(t)||0,y(n)&&(s=!!n.leading,a=(m="maxWait"in n)?d(v(n.maxWait)||0,t):a,g="trailing"in n?!!n.trailing:g),k.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=i=f=void 0},k.flush=function(){return void 0===f?u:T(p())},k}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==m.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=a.test(e);return n||u.test(e)?f(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:r,maxWait:t,trailing:i})};const j={form:document.querySelector(".feedback-form"),email:document.querySelector('input[type="email"]'),message:document.querySelector('textarea[name="message"]'),submit:document.querySelector('button[type="submit"]')};function O(){const e=localStorage.getItem("feedback-form-state");try{if(parsedfeedbackMemoryObj=JSON.parse(e),parsedfeedbackMemoryObj)return j.email.value=parsedfeedbackMemoryObj.email,j.message.value=parsedfeedbackMemoryObj.message,parsedfeedbackMemoryObj}catch(e){console.log(e.name),console.log(e.message)}}j.form.addEventListener("input",e(t)((function(e){e.target.nodeName;{const e={email:j.email.value,message:j.message.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}}),500)),j.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(O()),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),O()}();
//# sourceMappingURL=03-feedback.d5f82784.js.map