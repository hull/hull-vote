Hull.init({appId:"51aa8a5c07e3dae2ad0001d8",orgUrl:"http://hull-demos.hullapp.io",debug:!0,verbose:!0}),this.Hull=this.Hull||{},this.Hull.templates=this.Hull.templates||{},this.Hull.templates["reviews/reviews"]=function(n,a,e,l,s){function t(n){var a,e="";return e+='\n  <p class="text-center" for="reviewsText">Something to say?</p>\n  <textarea class="input-block-level" id="reviewsText">'+b((a=n.reviews,a=null==a||a===!1?a:a.description,typeof a===g?a.apply(n):a))+"</textarea>\n  <div class='row-fluid'>\n    <div class='span6'>\n      <button class='btn btn-large btn-block btn-success' data-hull-action=\"review\" data-hull-value=\"1\">Yes</button>\n    </div>\n    <div class='span6'>\n      <button class='btn btn-large btn-block btn-danger' data-hull-action=\"review\" data-hull-value=\"0\">No</button>\n    </div>\n  </div>\n"}function r(){return"\n  <p>Login to vote.</p>\n"}function i(n,a){var l,s="";return s+="\n  <div class='row-fluid text-center'>\n    <div class='span6'>\n      <span class='badge badge-success'><h1>",(l=e.yes)?l=l.call(n,{hash:{},data:a}):(l=n.yes,l=typeof l===g?l.apply(n):l),s+=b(l)+"</h1></span>\n    </div>\n    <div class='span6'>\n      <span class='badge badge-important'><h1>",(l=e.no)?l=l.call(n,{hash:{},data:a}):(l=n.no,l=typeof l===g?l.apply(n):l),s+=b(l)+"</h1></span>\n    </div>\n  </div>\n"}function o(n,a){var l,s,t="";return t+='\n  <ul class="unstyled">\n    ',s={hash:{},inverse:m.noop,fn:m.program(8,p,a),data:a},(l=e.reviews)?l=l.call(n,s):(l=n.reviews,l=typeof l===g?l.apply(n):l),e.reviews||(l=y.call(n,l,s)),(l||0===l)&&(t+=l),t+="\n  </ul>\n"}function p(n,a){var l,s,t="";return t+='\n      <li class="hull-reviews__list__item">\n        <strong>'+b((l=n.user,l=null==l||l===!1?l:l.name,typeof l===g?l.apply(n):l))+"</strong> voted\n        ",s=e["if"].call(n,n.rating,{hash:{},inverse:m.program(11,u,a),fn:m.program(9,c,a),data:a}),(s||0===s)&&(t+=s),t+="\n        ",s=e["if"].call(n,n.description,{hash:{},inverse:m.noop,fn:m.program(13,d,a),data:a}),(s||0===s)&&(t+=s),t+="\n      </li>\n    "}function c(){return"\n          <span class='label label-success'>Yes</span>\n        "}function u(){return"\n          <span class='label label-error'>No</span>\n        "}function d(n,a){var l,s="";return s+='\n          <p><em>"',(l=e.description)?l=l.call(n,{hash:{},data:a}):(l=n.description,l=typeof l===g?l.apply(n):l),s+=b(l)+'"</em></p>\n        '}this.compilerInfo=[4,">= 1.0.0"],e=this.merge(e,n.helpers),s=s||{};var h,v,f="",g="function",b=this.escapeExpression,m=this,y=e.blockHelperMissing;return h=e["if"].call(a,a.loggedIn,{hash:{},inverse:m.program(3,r,s),fn:m.program(1,t,s),data:s}),(h||0===h)&&(f+=h),f+="\n<hr/>\n",v={hash:{},inverse:m.noop,fn:m.program(5,i,s),data:s},(h=e.split)?h=h.call(a,v):(h=a.split,h=typeof h===g?h.apply(a):h),e.split||(h=y.call(a,h,v)),(h||0===h)&&(f+=h),f+="\n<hr/>\n\n",h=e["if"].call(a,a.reviews,{hash:{},inverse:m.noop,fn:m.program(7,o,s),data:s}),(h||0===h)&&(f+=h),f+='\n<div data-hull-widget="login_button@hull"></div>\n'};