(function(e,a,o,r){"use strict";const t=o.find(function(n){return n.default.canUseClientThemes}),u=[];var c={onLoad:function(){a.logger.log(t),u.push(r.instead("canUseClientThemes",t,function(){return!0}))},onUnload:function(){u.forEach(function(n){return n.unpatch()})}};return e.default=c,Object.defineProperty(e,"__esModule",{value:!0}),e})({},vendetta,vendetta.metro,vendetta.patcher);
