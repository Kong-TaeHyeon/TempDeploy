import{s as at,n as j,r as Nt,c as St}from"../chunks/scheduler.CtbWrGNo.js";import{S as lt,i as rt,e as l,s as u,t as Q,c as r,a as C,k as y,f as m,b as X,d as x,l as a,g as it,h as e,r as Kt,u as N,v as S,w as K,n as R,o as B,x as P,m as Zt}from"../chunks/index.DvrqN-x1.js";import{p as Rt}from"../chunks/stores.DcRS8l2D.js";const Bt="data:image/svg+xml,%3csvg%20width='18'%20height='22'%20viewBox='0%200%2018%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.0968%2010.0866L9.09112%2020.32C8.73825%2020.8286%207.90795%2020.6002%207.90795%2019.9879L7.89758%2014.1343C7.89758%2013.4596%207.32675%2012.92%206.621%2012.9096L2.43836%2012.8577C1.9298%2012.8473%201.62882%2012.318%201.90905%2011.9132L8.91469%201.6798C9.26756%201.17124%2010.0979%201.39958%2010.0979%202.01192L10.1083%207.86554C10.1083%208.54016%2010.6791%209.07984%2011.3848%209.09022L15.5675%209.1421C16.0656%209.1421%2016.3666%209.6818%2016.0968%2010.0866Z'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",Pt="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1.3999%2021.5998C1.39984%2022.1521%201.84751%2022.5998%202.39979%2022.5999C2.95207%2022.6%203.39984%2022.1523%203.3999%2021.6L1.3999%2021.5998ZM2.40031%2017.9995L3.40031%2017.9996L2.40031%2017.9995ZM12.5999%2015.3999C13.1522%2015.3999%2013.5999%2014.9522%2013.5999%2014.3999C13.5999%2013.8476%2013.1522%2013.3999%2012.5999%2013.3999V15.3999ZM21.5999%2016.5999C22.1522%2016.5999%2022.5999%2016.1522%2022.5999%2015.5999C22.5999%2015.0476%2022.1522%2014.5999%2021.5999%2014.5999V16.5999ZM16.1999%2014.5999C15.6476%2014.5999%2015.1999%2015.0476%2015.1999%2015.5999C15.1999%2016.1522%2015.6476%2016.5999%2016.1999%2016.5999V14.5999ZM17.8999%2018.2998C17.8999%2018.852%2018.3476%2019.2998%2018.8999%2019.2998C19.4522%2019.2998%2019.8999%2018.852%2019.8999%2018.2998H17.8999ZM19.8999%2012.8998C19.8999%2012.3475%2019.4522%2011.8998%2018.8999%2011.8998C18.3476%2011.8998%2017.8999%2012.3475%2017.8999%2012.8998H19.8999ZM17.8889%201.5276C17.4071%201.25755%2016.7976%201.42918%2016.5276%201.91094C16.2575%202.39271%2016.4292%203.00217%2016.9109%203.27221L17.8889%201.5276ZM16.9109%208.72759C16.4292%208.99764%2016.2575%209.6071%2016.5276%2010.0889C16.7976%2010.5706%2017.4071%2010.7423%2017.8889%2010.4722L16.9109%208.72759ZM13.3999%205.9999C13.3999%207.43584%2012.2358%208.5999%2010.7999%208.5999V10.5999C13.3404%2010.5999%2015.3999%208.54041%2015.3999%205.9999H13.3999ZM10.7999%208.5999C9.36396%208.5999%208.1999%207.43584%208.1999%205.9999H6.1999C6.1999%208.54041%208.25939%2010.5999%2010.7999%2010.5999V8.5999ZM8.1999%205.9999C8.1999%204.56396%209.36396%203.3999%2010.7999%203.3999V1.3999C8.25939%201.3999%206.1999%203.45939%206.1999%205.9999H8.1999ZM10.7999%203.3999C12.2358%203.3999%2013.3999%204.56396%2013.3999%205.9999H15.3999C15.3999%203.45939%2013.3404%201.3999%2010.7999%201.3999V3.3999ZM3.3999%2021.6L3.40031%2017.9996L1.40031%2017.9994L1.3999%2021.5998L3.3999%2021.6ZM6.00031%2013.3999C3.46%2013.3999%201.40059%2015.4591%201.40031%2017.9994L3.40031%2017.9996C3.40047%2016.5638%204.56448%2015.3999%206.00031%2015.3999V13.3999ZM6.00031%2015.3999H12.5999V13.3999H6.00031V15.3999ZM21.5999%2014.5999H18.8999V16.5999H21.5999V14.5999ZM18.8999%2014.5999H16.1999V16.5999H18.8999V14.5999ZM19.8999%2018.2998V15.5999H17.8999V18.2998H19.8999ZM19.8999%2015.5999V12.8998H17.8999V15.5999H19.8999ZM16.9109%203.27221C18.1486%203.96594%2018.7999%204.98556%2018.7999%205.9999H20.7999C20.7999%204.064%2019.5637%202.46642%2017.8889%201.5276L16.9109%203.27221ZM18.7999%205.9999C18.7999%207.01425%2018.1486%208.03386%2016.9109%208.72759L17.8889%2010.4722C19.5637%209.53338%2020.7999%207.9358%2020.7999%205.9999H18.7999Z'%20fill='black'/%3e%3c/svg%3e";function jt(w){let t,s,n=`<img src="${Bt}" alt=""/> <p>실시간 누적 전기량</p>`,o,h,b,c,L,_,p,k="kW",F,f,$,d,V=`<img src="${Pt}" alt=""/> <p>실시간 누적 이용고객</p>`,v,H,E,T,Z,D,i,O="명";return{c(){t=l("div"),s=l("div"),s.innerHTML=n,o=u(),h=l("div"),b=l("p"),c=Q("2000"),_=u(),p=l("p"),p.textContent=k,F=u(),f=l("p"),$=u(),d=l("div"),d.innerHTML=V,v=u(),H=l("div"),E=l("p"),T=Q("50"),D=u(),i=l("p"),i.textContent=O,this.h()},l(g){t=r(g,"DIV",{class:!0});var M=C(t);s=r(M,"DIV",{class:!0,"data-svelte-h":!0}),y(s)!=="svelte-swopq8"&&(s.innerHTML=n),o=m(M),h=r(M,"DIV",{class:!0});var U=C(h);b=r(U,"P",{class:!0});var z=C(b);c=X(z,"2000"),z.forEach(x),_=m(U),p=r(U,"P",{"data-svelte-h":!0}),y(p)!=="svelte-8mtfxq"&&(p.textContent=k),U.forEach(x),F=m(M),f=r(M,"P",{class:!0}),C(f).forEach(x),$=m(M),d=r(M,"DIV",{class:!0,"data-svelte-h":!0}),y(d)!=="svelte-1k7igo2"&&(d.innerHTML=V),v=m(M),H=r(M,"DIV",{class:!0});var A=C(H);E=r(A,"P",{class:!0});var ot=C(E);T=X(ot,"50"),ot.forEach(x),D=m(A),i=r(A,"P",{"data-svelte-h":!0}),y(i)!=="svelte-xh1izz"&&(i.textContent=O),A.forEach(x),M.forEach(x),this.h()},h(){a(s,"class","flex flex-row gap-2"),a(b,"class",L=w[0]+" text-7xl"),a(h,"class","flex flex-row items-baseline"),a(f,"class","text-[#73ebeb]"),a(d,"class","flex flex-row gap-2"),a(E,"class",Z=w[0]+" text-7xl"),a(H,"class","flex flex-row items-baseline"),a(t,"class","flex flex-col items-center justify-center w-[277px] h-[244px] shadow bg-[#FFFFFF] rounded-[25px]")},m(g,M){it(g,t,M),e(t,s),e(t,o),e(t,h),e(h,b),e(b,c),e(h,_),e(h,p),e(t,F),e(t,f),e(t,$),e(t,d),e(t,v),e(t,H),e(H,E),e(E,T),e(H,D),e(H,i)},p(g,[M]){M&1&&L!==(L=g[0]+" text-7xl")&&a(b,"class",L),M&1&&Z!==(Z=g[0]+" text-7xl")&&a(E,"class",Z)},i:j,o:j,d(g){g&&x(t)}}}function At(w,t,s){let{textColor:n}=t;return w.$$set=o=>{"textColor"in o&&s(0,n=o.textColor)},[n]}class yt extends lt{constructor(t){super(),rt(this,t,At,jt,at,{textColor:0})}}function zt(w){let t,s='<div class="mt-[23px] ml-[29px]"><div class="mb-1 text-xl font-normal text-black">사용 중 충전기</div> <div class="flex items-center justify-center bg-[#F7F9FB] w-[251px] h-[150px] gap-2"><div class="flex flex-row items-baseline justify-center"><p class="text-7xl">2</p> <p>/</p> <p>10</p></div> <div class="text-s"><div class="flex flex-row gap-1"><p class="text-[#7C7C7C]">충 전 중</p> <p>1</p></div> <div class="flex flex-row gap-1"><p class="text-[#7C7C7C]">방 전 중</p> <p>1</p></div> <div class="flex flex-row gap-1"><p class="text-[#7C7C7C]">예약대기</p> <p>1</p></div></div></div></div> <div class="mt-[23px] ml-[10px]"><div class="mb-1 text-xl font-normal text-black">사용 중 충전기</div> <div class="flex flex-row bg-[#F7F9FB] items-center justify-center gap-1"><div class="text-xs font-normal text-center text-gray-500">이상없음</div> <div class="text-center text-black text-[42px]">8</div></div> <div class="mt-4 flex flex-row bg-[#F7F9FB] items-center justify-center gap-1"><div class="text-xs font-normal text-center text-gray-500">이상없음</div> <div class="text-center text-red-500 text-[44px] font-normal font-[&#39;Noto Sans KR&#39;]">-</div></div></div>';return{c(){t=l("div"),t.innerHTML=s,this.h()},l(n){t=r(n,"DIV",{class:!0,"data-svelte-h":!0}),y(t)!=="svelte-yjcmfu"&&(t.innerHTML=s),this.h()},h(){a(t,"class","flex flex-row bg-[#FFFFFF] w-[432px] h-[241px] gap-4 rounded-[25px] shadow")},m(n,o){it(n,t,o)},p:j,i:j,o:j,d(n){n&&x(t)}}}class Ot extends lt{constructor(t){super(),rt(this,t,null,zt,at,{})}}function Ut(w){var d;let t,s,n=(((d=w[1])==null?void 0:d.number)??"01")+"",o,h,b,c,L="로봇/초고속",_,p,k='<p class="text-4xl">100</p> <p>kW</p>',F,f,$;return{c(){t=l("div"),s=l("button"),o=Q(n),h=Q(" 충전중"),b=u(),c=l("p"),c.textContent=L,_=u(),p=l("div"),p.innerHTML=k,F=u(),f=l("div"),this.h()},l(V){t=r(V,"DIV",{class:!0,style:!0});var v=C(t);s=r(v,"BUTTON",{class:!0});var H=C(s);o=X(H,n),h=X(H," 충전중"),H.forEach(x),b=m(v),c=r(v,"P",{class:!0,"data-svelte-h":!0}),y(c)!=="svelte-18ru2j"&&(c.textContent=L),_=m(v),p=r(v,"DIV",{class:!0,"data-svelte-h":!0}),y(p)!=="svelte-1e7roj6"&&(p.innerHTML=k),F=m(v),f=r(v,"DIV",{id:!0,class:!0,style:!0}),C(f).forEach(x),v.forEach(x),this.h()},h(){a(s,"class","z-20 w-[115px] h-[39px] rounded-[50px] bg-[#0194E4] text-[#FFFFFF] text-xl m-1"),a(c,"class","z-20 m-4 text-xl"),a(p,"class","z-20 flex flex-row"),a(f,"id","charger-percent"),a(f,"class","absolute z-10 h-[68px] bg-white"),a(f,"style",$="background: linear-gradient(269.35deg, rgba(0, 179, 255, 0.61) 19.49%, rgba(0, 56, 255, 0.36) 98.56%); width : "+w[0]+"px"),a(t,"class","flex flex-row w-[326] h-[68px] items-center"),Kt(t,"background","linear-gradient(269.35deg, rgba(0, 179, 255, 0.25) 19.49%, rgba(0, 56, 255, 0.25) 98.56%)")},m(V,v){it(V,t,v),e(t,s),e(s,o),e(s,h),e(t,b),e(t,c),e(t,_),e(t,p),e(t,F),e(t,f)},p(V,[v]){v&1&&$!==($="background: linear-gradient(269.35deg, rgba(0, 179, 255, 0.61) 19.49%, rgba(0, 56, 255, 0.36) 98.56%); width : "+V[0]+"px")&&a(f,"style",$)},i:j,o:j,d(V){V&&x(t)}}}function qt(w,t,s){let n,{chargeAmount:o=0}=t;return w.$$set=h=>{"chargeAmount"in h&&s(0,o=h.chargeAmount)},[o,n]}class Tt extends lt{constructor(t){super(),rt(this,t,qt,Ut,at,{chargeAmount:0})}}function Wt(w){var F;let t,s,n=(((F=w[0])==null?void 0:F.number)??"01")+"",o,h,b,c,L="로봇/초고속",_,p,k="완속/고속";return{c(){t=l("div"),s=l("button"),o=Q(n),h=Q(" 대기중"),b=u(),c=l("p"),c.textContent=L,_=u(),p=l("div"),p.textContent=k,this.h()},l(f){t=r(f,"DIV",{class:!0});var $=C(t);s=r($,"BUTTON",{class:!0});var d=C(s);o=X(d,n),h=X(d," 대기중"),d.forEach(x),b=m($),c=r($,"P",{class:!0,"data-svelte-h":!0}),y(c)!=="svelte-18ru2j"&&(c.textContent=L),_=m($),p=r($,"DIV",{class:!0,"data-svelte-h":!0}),y(p)!=="svelte-1m3pru3"&&(p.textContent=k),$.forEach(x),this.h()},h(){a(s,"class","z-20 w-[115px] h-[39px] rounded-[50px] bg-[#E7EBF7] text-xl m-1"),a(c,"class","z-20 m-4 text-xl"),a(p,"class","text-lg font-medium tracking-tight text-center text-gray-400"),a(t,"class","flex flex-row w-[326] h-[68px] items-center bg-[#F7F8FD] text-[#9CA5B1]")},m(f,$){it(f,t,$),e(t,s),e(s,o),e(s,h),e(t,b),e(t,c),e(t,_),e(t,p)},p:j,i:j,o:j,d(f){f&&x(t)}}}function Gt(w){return[void 0]}class J extends lt{constructor(t){super(),rt(this,t,Gt,Wt,at,{})}}function Jt(w){let t,s,n,o,h,b,c,L,_,p,k,F,f,$,d,V,v,H,E,T,Z,D;return n=new Tt({props:{chargeAmount:200}}),h=new J({}),c=new J({}),_=new J({}),k=new J({}),f=new Tt({props:{chargeAmount:50}}),d=new J({}),v=new J({}),E=new J({}),Z=new J({}),{c(){t=l("div"),s=l("div"),N(n.$$.fragment),o=u(),N(h.$$.fragment),b=u(),N(c.$$.fragment),L=u(),N(_.$$.fragment),p=u(),N(k.$$.fragment),F=u(),N(f.$$.fragment),$=u(),N(d.$$.fragment),V=u(),N(v.$$.fragment),H=u(),N(E.$$.fragment),T=u(),N(Z.$$.fragment),this.h()},l(i){t=r(i,"DIV",{class:!0});var O=C(t);s=r(O,"DIV",{class:!0});var g=C(s);S(n.$$.fragment,g),o=m(g),S(h.$$.fragment,g),b=m(g),S(c.$$.fragment,g),L=m(g),S(_.$$.fragment,g),p=m(g),S(k.$$.fragment,g),F=m(g),S(f.$$.fragment,g),$=m(g),S(d.$$.fragment,g),V=m(g),S(v.$$.fragment,g),H=m(g),S(E.$$.fragment,g),T=m(g),S(Z.$$.fragment,g),g.forEach(x),O.forEach(x),this.h()},h(){a(s,"class","grid w-full h-full grid-flow-col grid-rows-5 gap-4 p-4"),a(t,"class","h-[422px] bg-white rounded-[25px] shadow")},m(i,O){it(i,t,O),e(t,s),K(n,s,null),e(s,o),K(h,s,null),e(s,b),K(c,s,null),e(s,L),K(_,s,null),e(s,p),K(k,s,null),e(s,F),K(f,s,null),e(s,$),K(d,s,null),e(s,V),K(v,s,null),e(s,H),K(E,s,null),e(s,T),K(Z,s,null),D=!0},p:j,i(i){D||(R(n.$$.fragment,i),R(h.$$.fragment,i),R(c.$$.fragment,i),R(_.$$.fragment,i),R(k.$$.fragment,i),R(f.$$.fragment,i),R(d.$$.fragment,i),R(v.$$.fragment,i),R(E.$$.fragment,i),R(Z.$$.fragment,i),D=!0)},o(i){B(n.$$.fragment,i),B(h.$$.fragment,i),B(c.$$.fragment,i),B(_.$$.fragment,i),B(k.$$.fragment,i),B(f.$$.fragment,i),B(d.$$.fragment,i),B(v.$$.fragment,i),B(E.$$.fragment,i),B(Z.$$.fragment,i),D=!1},d(i){i&&x(t),P(n),P(h),P(c),P(_),P(k),P(f),P(d),P(v),P(E),P(Z)}}}class Qt extends lt{constructor(t){super(),rt(this,t,null,Jt,at,{})}}function Xt(w){let t,s='<div class="flex flex-row gap-[8px] mt-7 w-[261px] items-start"><button class="w-[81px] bg-gray-600 rounded-[50px] text-center text-white text-lg font-medium tracking-tight">충전중</button> <button class="w-[81px] bg-slate-200 rounded-[50px] text-center text-gray-400 text-lg font-medium tracking-tight">방전중</button> <button class="w-[81px] bg-slate-200 rounded-[50px] text-center text-gray-400 text-lg font-medium tracking-tight">대기중</button></div> <dif class="flex flex-col mt-[29px] gap-[22px]"><div class="flex flex-row gap-[34px]"><div class="text-xl font-medium tracking-tight text-center text-black">A-1</div> <div class="text-center text-black text-lg font-[&#39;Noto Sans KR&#39;] tracking-tight">현재 사용중</div> <div class="text-center text-black text-lg font-[&#39;Noto Sans KR&#39;] tracking-tight">00:00</div></div> <div class="flex flex-row gap-[34px]"><div class="text-xl font-medium tracking-tight text-center text-black">A-1</div> <div class="text-center text-black text-lg font-[&#39;Noto Sans KR&#39;] tracking-tight">현재 사용중</div> <div class="text-center text-black text-lg font-[&#39;Noto Sans KR&#39;] tracking-tight">00:00</div></div> <div class="flex flex-row gap-[34px]"><div class="text-xl font-medium tracking-tight text-center text-black">A-1</div> <div class="text-center text-black text-lg font-[&#39;Noto Sans KR&#39;] tracking-tight">현재 사용중</div> <div class="text-center text-black text-lg font-[&#39;Noto Sans KR&#39;] tracking-tight">00:00</div></div> <div class="flex flex-row gap-[34px]"><div class="text-xl font-medium tracking-tight text-center text-black">A-1</div> <div class="text-center text-black text-lg font-[&#39;Noto Sans KR&#39;] tracking-tight">현재 사용중</div> <div class="text-center text-black text-lg font-[&#39;Noto Sans KR&#39;] tracking-tight">00:00</div></div> <div class="flex flex-row gap-[34px]"><div class="text-xl font-medium tracking-tight text-center text-black">A-1</div> <div class="text-center text-black text-lg font-[&#39;Noto Sans KR&#39;] tracking-tight">현재 사용중</div> <div class="text-center text-black text-lg font-[&#39;Noto Sans KR&#39;] tracking-tight">00:00</div></div></dif> <button class="mt-[28px] w-[267px] h-[52px] bg-slate-200 rounded-[50px] text-center text-gray-400 text-lg font-medium font-[&#39;Noto Sans KR&#39;] tracking-tight">기록 전체보기</button>';return{c(){t=l("div"),t.innerHTML=s,this.h()},l(n){t=r(n,"DIV",{class:!0,"data-svelte-h":!0}),y(t)!=="svelte-128r02y"&&(t.innerHTML=s),this.h()},h(){a(t,"class","flex flex-col w-[306px] h-[422px] bg-white rounded-[25px] shadow items-center")},m(n,o){it(n,t,o)},p:j,i:j,o:j,d(n){n&&x(t)}}}class Yt extends lt{constructor(t){super(),rt(this,t,null,Xt,at,{})}}const te="data:image/svg+xml,%3csvg%20width='25'%20height='28'%20viewBox='0%200%2025%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1.48754%2018.3225L8.96877%206.53798C9.23702%206.11543%209.89089%206.30546%209.89089%206.80596V15.1709C9.89089%2015.2261%209.93566%2015.2709%209.99089%2015.2709H15.2825C15.6868%2015.2709%2015.9239%2015.7257%2015.6925%2016.0572L8.26058%2026.6997C7.98052%2027.1007%207.35064%2026.9026%207.35064%2026.4134V19.1905C7.35064%2019.1352%207.30586%2019.0905%207.25064%2019.0905H1.90966C1.51536%2019.0905%201.27621%2018.6554%201.48754%2018.3225Z'%20stroke='black'%20stroke-width='2'/%3e%3cpath%20d='M20.1403%201.90234L23.2274%205.0853M23.2274%205.0853L20.1403%208.26826M23.2274%205.0853L15.8184%205.0853'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",ee="data:image/svg+xml,%3csvg%20width='27'%20height='30'%20viewBox='0%200%2027%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1.48901%2019.0657L9.84402%205.93638C10.1126%205.51436%2010.7658%205.7046%2010.7658%206.20482V15.5488C10.7658%2015.604%2010.8106%2015.6488%2010.8658%2015.6488H16.7811C17.1856%2015.6488%2017.4227%2016.1041%2017.1907%2016.4355L8.88522%2028.3005C8.60488%2028.701%207.97561%2028.5026%207.97561%2028.0138V19.9341C7.97561%2019.8789%207.93083%2019.8341%207.87561%2019.8341H1.91084C1.51629%2019.8341%201.27719%2019.3985%201.48901%2019.0657Z'%20stroke='black'%20stroke-width='2'/%3e%3cpath%20d='M20.6673%207.97561L17.2764%204.4878M17.2764%204.4878L20.6673%201M17.2764%204.4878H25.4146'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";function se(w){let t,s,n,o,h="대시보드",b,c,L,_,p,k,F,f,$,d,V,v,H=`<img src="${ee}" alt="" class="mr-2"/>
						충전`,E,T,Z,D,i,O=`<img src="${te}" alt="" class="mr-2"/>
						방전`,g,M,U,z,A,ot="충전",bt,Y,kt,q,W,tt,Ht="개별 충전기 상태",_t,et,Vt,G,st,Et="충전기 운용",Mt,nt,xt,Lt,Ft;return T=new yt({props:{textColor:"text-violet-500"}}),M=new yt({props:{textColor:"text-violet-500"}}),Y=new Ot({}),et=new Qt({}),nt=new Yt({}),{c(){t=l("div"),s=l("div"),n=l("div"),o=l("p"),o.textContent=h,b=u(),c=l("div"),L=l("button"),_=Q("남양연구소 주차타워1"),p=u(),k=l("button"),F=Q("남양연구소 주차타워1"),f=u(),$=l("div"),d=l("div"),V=l("div"),v=l("div"),v.innerHTML=H,E=u(),N(T.$$.fragment),Z=u(),D=l("div"),i=l("div"),i.innerHTML=O,g=u(),N(M.$$.fragment),U=u(),z=l("div"),A=l("div"),A.textContent=ot,bt=u(),N(Y.$$.fragment),kt=u(),q=l("div"),W=l("div"),tt=l("p"),tt.textContent=Ht,_t=u(),N(et.$$.fragment),Vt=u(),G=l("div"),st=l("p"),st.textContent=Et,Mt=u(),N(nt.$$.fragment),this.h()},l(I){t=r(I,"DIV",{class:!0});var dt=C(t);s=r(dt,"DIV",{class:!0});var gt=C(s);n=r(gt,"DIV",{class:!0});var ft=C(n);o=r(ft,"P",{class:!0,"data-svelte-h":!0}),y(o)!=="svelte-gl0kml"&&(o.textContent=h),b=m(ft),c=r(ft,"DIV",{class:!0});var vt=C(c);L=r(vt,"BUTTON",{class:!0});var Dt=C(L);_=X(Dt,"남양연구소 주차타워1"),Dt.forEach(x),p=m(vt),k=r(vt,"BUTTON",{class:!0});var It=C(k);F=X(It,"남양연구소 주차타워1"),It.forEach(x),vt.forEach(x),ft.forEach(x),f=m(gt),$=r(gt,"DIV",{class:!0});var ut=C($);d=r(ut,"DIV",{class:!0});var ct=C(d);V=r(ct,"DIV",{class:!0});var mt=C(V);v=r(mt,"DIV",{class:!0,"data-svelte-h":!0}),y(v)!=="svelte-1nm2205"&&(v.innerHTML=H),E=m(mt),S(T.$$.fragment,mt),mt.forEach(x),Z=m(ct),D=r(ct,"DIV",{class:!0});var ht=C(D);i=r(ht,"DIV",{class:!0,"data-svelte-h":!0}),y(i)!=="svelte-befgm7"&&(i.innerHTML=O),g=m(ht),S(M.$$.fragment,ht),ht.forEach(x),U=m(ct),z=r(ct,"DIV",{class:!0});var pt=C(z);A=r(pt,"DIV",{class:!0,"data-svelte-h":!0}),y(A)!=="svelte-1mkbe55"&&(A.textContent=ot),bt=m(pt),S(Y.$$.fragment,pt),pt.forEach(x),ct.forEach(x),kt=m(ut),q=r(ut,"DIV",{class:!0});var $t=C(q);W=r($t,"DIV",{class:!0});var wt=C(W);tt=r(wt,"P",{class:!0,"data-svelte-h":!0}),y(tt)!=="svelte-8wreo1"&&(tt.textContent=Ht),_t=m(wt),S(et.$$.fragment,wt),wt.forEach(x),Vt=m($t),G=r($t,"DIV",{class:!0});var Ct=C(G);st=r(Ct,"P",{class:!0,"data-svelte-h":!0}),y(st)!=="svelte-a8y7sz"&&(st.textContent=Et),Mt=m(Ct),S(nt.$$.fragment,Ct),Ct.forEach(x),$t.forEach(x),ut.forEach(x),gt.forEach(x),dt.forEach(x),this.h()},h(){a(o,"class","text-center text-white text-[28px] font-bold font-['Noto Sans KR'] tracking-tight"),a(L,"class",(w[1]==="0"?"bg-slate-50 text-[#2E4C5E]":"text-white")+" rounded-sm h-[42px] text-center text-base font-normal font-['Noto Sans KR'] tracking-tight"),a(k,"class","rounded-sm h-[42px] text-center text-base font-normal font-['Noto Sans KR'] tracking-tight "+(w[1]==="1"?"bg-slate-50 text-[#2E4C5E]":"text-white")),a(c,"class","flex ml-[75px] gap-4 flew-row h-full"),a(n,"class","flex flex-row items-center w-full"),a(v,"class","flex flex-row text-black text-[22px] font-medium tracking-tight"),a(V,"class","flex-col ml-[77px]"),a(i,"class","flex flex-row text-black text-[22px] font-medium tracking-tight"),a(D,"class","flex-col"),a(A,"class","text-black text-[22px] font-medium font-['Noto Sans KR'] tracking-tight"),a(z,"class","flex-col"),a(d,"class","flex flex-row gap-[25px] p-4"),a(tt,"class","text-black text-[22px] font-medium"),a(W,"class","flex-col ml-[60px]"),a(st,"class","text-black text-[22px] font-medium"),a(G,"class","flex-col"),a(q,"class","flex flex-row p-4 gap-[25px]"),a($,"class","bg-slate-50 rounded-[25px] w-[1200px]"),a(s,"class","mt-[38px] mb-[38px]"),a(t,"class","flex flex-col items-center min-h-screen bg-gradient-to-r from-gray-800 to-zinc-600")},m(I,dt){it(I,t,dt),e(t,s),e(s,n),e(n,o),e(n,b),e(n,c),e(c,L),e(L,_),e(c,p),e(c,k),e(k,F),e(s,f),e(s,$),e($,d),e(d,V),e(V,v),e(V,E),K(T,V,null),e(d,Z),e(d,D),e(D,i),e(D,g),K(M,D,null),e(d,U),e(d,z),e(z,A),e(z,bt),K(Y,z,null),e($,kt),e($,q),e(q,W),e(W,tt),e(W,_t),K(et,W,null),e(q,Vt),e(q,G),e(G,st),e(G,Mt),K(nt,G,null),xt=!0,Lt||(Ft=[Zt(L,"click",w[2]),Zt(k,"click",w[3])],Lt=!0)},p:j,i(I){xt||(R(T.$$.fragment,I),R(M.$$.fragment,I),R(Y.$$.fragment,I),R(et.$$.fragment,I),R(nt.$$.fragment,I),xt=!0)},o(I){B(T.$$.fragment,I),B(M.$$.fragment,I),B(Y.$$.fragment,I),B(et.$$.fragment,I),B(nt.$$.fragment,I),xt=!1},d(I){I&&x(t),P(T),P(M),P(Y),P(et),P(nt),Lt=!1,Nt(Ft)}}}function ne(w,t,s){let n;St(w,Rt,c=>s(0,n=c));let o=n.url.searchParams.get("id")||"0";return[n,o,()=>window.location.href=n.url.pathname+"?id=0",()=>window.location.href=n.url.pathname+"?id=1"]}class ie extends lt{constructor(t){super(),rt(this,t,ne,se,at,{})}}export{ie as component};