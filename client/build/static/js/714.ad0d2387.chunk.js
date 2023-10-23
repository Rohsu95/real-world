"use strict";(self.webpackChunkpre=self.webpackChunkpre||[]).push([[714],{1714:function(n,e,r){r.r(e),r.d(e,{default:function(){return k}});var a,o,i,s,t,d,l=r(1413),m=r(4165),u=r(5861),c=(r(2791),r(887)),p=r(7689),h=r(168),g=r(6444),v=r(2004),f=g.ZP.div(a||(a=(0,h.Z)(["\n  margin-top: 1rem;\n\n  h1 {\n    text-align: center;\n    font-weight: 400;\n    margin-bottom: 1rem;\n    @media "," {\n      font-size: ",";\n    }\n  }\n"])),v.Z.media.height,v.Z.fontSizes.fs15),Z=g.ZP.div(o||(o=(0,h.Z)(["\n  display: flex;\n  justify-content: center;\n\n  input {\n    width: 45vw;\n    outline: none;\n    display: block;\n    border-radius: 3px;\n    border: 1px solid ",";\n  }\n  form {\n    padding-bottom: 2rem;\n  }\n  span {\n    font-size: ",";\n    color: red;\n    display: block;\n    margin-bottom: 1rem;\n    @media "," {\n      font-size: ",";\n    }\n  }\n"])),v.Z.colors.gray_03,v.Z.fontSizes.fs07,v.Z.media.height,v.Z.fontSizes.fs06),x=(g.ZP.input(i||(i=(0,h.Z)(["\n  padding: 0.5rem;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n"]))),g.ZP.input(s||(s=(0,h.Z)(["\n  margin-bottom: 0.25rem;\n  padding: 0.9rem 0.5rem;\n"])))),w=(g.ZP.textarea(t||(t=(0,h.Z)(["\n  width: 45vw;\n  height: 15vh;\n  outline: none;\n  padding: 0.5rem;\n  display: block;\n  margin-bottom: 1rem;\n  border-radius: 3px;\n  border: 1px solid ",";\n"])),v.Z.colors.gray_03),g.ZP.button(d||(d=(0,h.Z)(["\n  float: right;\n  cursor: pointer;\n  border-radius: 5px;\n  padding: 0.5rem 0.75rem;\n  color: ",";\n  background-color: ",";\n  border: 1px solid ",";\n\n  &:hover {\n    background-color: ",";\n  }\n  @media "," {\n    font-size: ",";\n  }\n"])),v.Z.colors.white,v.Z.colors.main,v.Z.colors.main,v.Z.colors.main_hover,v.Z.media.height,v.Z.fontSizes.fs0)),b=r(1243),j=r(5920),y=r(184),k=function(){var n,e,r,a=new j.Z,o=a.get("token"),i=a.get("userId"),s=(0,p.s0)(),t=(0,c.cI)(),d=t.register,h=t.handleSubmit,g=t.watch,v=t.formState.errors,k=function(){var n=(0,u.Z)((0,m.Z)().mark((function n(e){return(0,m.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b.Z.patch("".concat("https://side-402809.du.r.appspot.com","/api/users/").concat(e),{username:g("username"),email:g("email"),password:g("password")},{headers:{Authorization:"Bearer ".concat(o)}}).then((function(n){var e,r,o=null===n||void 0===n||null===(e=n.data)||void 0===e||null===(r=e.user)||void 0===r?void 0:r.username;a.set("username",o),s("/mypage"),window.location.reload()})).catch((function(n){var e,r;alert(null===n||void 0===n||null===(e=n.response)||void 0===e||null===(r=e.data)||void 0===r?void 0:r.message)}));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,y.jsxs)(f,{children:[(0,y.jsx)("h1",{children:"Your Settings"}),(0,y.jsx)(Z,{children:(0,y.jsxs)("form",{onSubmit:h((function(){return k(i)})),children:[(0,y.jsx)(x,(0,l.Z)({type:"text",placeholder:"Username",name:"username"},d("username",{required:"4\uc790 \uc774\uc0c1 12\uc790\ub9ac \uc774\ud558\ub85c \uc785\ub825\ud574 \uc8fc\uc138\uc694",minLength:{value:4,message:"4\uc790 \uc774\uc0c1\uc758 username\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694"},maxLength:{value:12,message:"12\uc790 \uc774\ud558\uc758 usename\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694"}}))),(0,y.jsx)("span",{children:null===v||void 0===v||null===(n=v.username)||void 0===n?void 0:n.message}),(0,y.jsx)(x,(0,l.Z)({placeholder:"Email",name:"email",type:"email"},d("email",{required:"12\uc790 \uc774\uc0c1 20\uc790 \uc774\ud558\ub85c \uc785\ub825\ud574 \uc8fc\uc138\uc694",minLength:{value:12,message:"12\uc790 \uc774\uc0c1\uc758 email\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694"},maxLength:{value:20,message:"20\uc790 \uc774\ud558\uc758 email\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694"}}))),(0,y.jsx)("span",{children:null===v||void 0===v||null===(e=v.email)||void 0===e?void 0:e.message}),(0,y.jsx)(x,(0,l.Z)({placeholder:"New Password",type:"password",name:"password"},d("password",{required:"8\uc790 \uc774\uc0c1 12\uc790 \uc774\ud558\ub85c \uc785\ub825\ud574 \uc8fc\uc138\uc694",minLength:{value:8,message:"8\uc790 \uc774\uc0c1\uc758 password\ub97c \uc785\ub825\ud574 \uc8fc\uc138\uc694"},maxLength:{value:12,message:"12\uc790 \uc774\ud558\uc758 password\ub97c \uc785\ub825\ud574 \uc8fc\uc138\uc694"}}))),(0,y.jsx)("span",{children:null===v||void 0===v||null===(r=v.password)||void 0===r?void 0:r.message}),(0,y.jsx)(w,{children:"Update Settings"})]})})]})}}}]);
//# sourceMappingURL=714.ad0d2387.chunk.js.map