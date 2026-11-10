import{c as L,u as W,a as z,r as o,j as e,S as J,L as v,C as U,D as X,b as O,d as D,e as K,f as F,g as Q,E as Z,h as ee,i as ae,T as ne,I as se,k as ie,l as te,Q as re,m as de,W as le,n as ce,o as oe,p as he}from"./index-BvhWHLju.js";import{B as ue,H as f,b as me,p as pe,j as xe,a as je}from"./python-BiuVxVRQ.js";/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ke=L("BadgeCheck",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=L("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=L("Package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",key:"yx3hmr"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _e=L("Shuffle",[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]]);function ye(a){const r={keyword:["break","case","chan","const","continue","default","defer","else","fallthrough","for","func","go","goto","if","import","interface","map","package","range","return","select","struct","switch","type","var"],type:["bool","byte","complex64","complex128","error","float32","float64","int8","int16","int32","int64","string","uint8","uint16","uint32","uint64","int","uint","uintptr","rune"],literal:["true","false","iota","nil"],built_in:["append","cap","close","complex","copy","imag","len","make","new","panic","print","println","real","recover","delete"]};return{name:"Go",aliases:["golang"],keywords:r,illegal:"</",contains:[a.C_LINE_COMMENT_MODE,a.C_BLOCK_COMMENT_MODE,{className:"string",variants:[a.QUOTE_STRING_MODE,a.APOS_STRING_MODE,{begin:"`",end:"`"}]},{className:"number",variants:[{match:/-?\b0[xX]\.[a-fA-F0-9](_?[a-fA-F0-9])*[pP][+-]?\d(_?\d)*i?/,relevance:0},{match:/-?\b0[xX](_?[a-fA-F0-9])+((\.([a-fA-F0-9](_?[a-fA-F0-9])*)?)?[pP][+-]?\d(_?\d)*)?i?/,relevance:0},{match:/-?\b0[oO](_?[0-7])*i?/,relevance:0},{match:/-?\b0[bB](_?[01])*i?/,relevance:0},{match:/-?\.\d(_?\d)*([eE][+-]?\d(_?\d)*)?i?/,relevance:0},{match:/-?\b\d(_?\d)*(\.(\d(_?\d)*)?)?([eE][+-]?\d(_?\d)*)?i?/,relevance:0}]},{begin:/:=/},{className:"function",beginKeywords:"func",end:"\\s*(\\{|$)",excludeEnd:!0,contains:[a.TITLE_MODE,{className:"params",begin:/\(/,end:/\)/,endsParent:!0,keywords:r,illegal:/["']/}]}]}}const ve="([-+]?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)|NaN|[-+]?Infinity",fe={scope:"number",match:ve,relevance:0};function Ie(a){const n={className:"attr",begin:/(("(\\.|[^\\"\r\n])*")|('(\\.|[^\\'\r\n])*'))(?=\s*:)/,relevance:1.01},s={match:/[{}[\],:]/,className:"punctuation",relevance:0},i=["true","false","null"],t={scope:"literal",beginKeywords:i.join(" ")};return{name:"JSON",aliases:["jsonc","json5"],keywords:{literal:i},contains:[n,s,a.APOS_STRING_MODE,a.QUOTE_STRING_MODE,t,fe,a.C_LINE_COMMENT_MODE,a.C_BLOCK_COMMENT_MODE],illegal:"\\S"}}function Ae(a){const n=a.regex,s=n.concat(/[\p{L}_]/u,n.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),i=/[\p{L}0-9._:-]+/u,t={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},r={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},d=a.inherit(r,{begin:/\(/,end:/\)/}),l=a.inherit(a.APOS_STRING_MODE,{className:"string"}),m=a.inherit(a.QUOTE_STRING_MODE,{className:"string"}),u={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:i,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[t]},{begin:/'/,end:/'/,contains:[t]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[r,m,l,d,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[r,d,m,l]}]}]},a.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},t,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[m]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[u],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:"css"}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[u],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:"javascript"}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:n.concat(/</,n.lookahead(n.concat(s,n.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:s,relevance:0,starts:u}]},{className:"tag",begin:n.concat(/<\//,n.lookahead(n.concat(s,/>/))),contains:[{className:"name",begin:s,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}f.registerLanguage("bash",me);f.registerLanguage("php",pe);f.registerLanguage("javascript",xe);f.registerLanguage("python",je);f.registerLanguage("go",ye);f.registerLanguage("json",Ie);f.registerLanguage("xml",Ae);const V={bash:"cURL",php:"PHP",javascript:"Node.js",python:"Python",go:"Go",json:"JSON",xml:"HTML"};function g({lang:a="bash",code:n,title:s}){const[i,t]=o.useState(!1),r=o.useMemo(()=>f.highlight(n,{language:a}).value,[n,a]);return e.jsxs("div",{className:"code",children:[e.jsxs("div",{className:"code-bar",children:[e.jsxs("span",{className:"code-dots",children:[e.jsx("i",{}),e.jsx("i",{}),e.jsx("i",{})]}),e.jsx("span",{className:"code-title",children:s||V[a]}),e.jsx("button",{type:"button",onClick:async()=>{await K(n)&&(t(!0),setTimeout(()=>t(!1),1500))},children:i?e.jsxs(e.Fragment,{children:[e.jsx(O,{size:12})," Disalin"]}):e.jsxs(e.Fragment,{children:[e.jsx(D,{size:12})," Salin"]})})]}),e.jsx("pre",{className:"hljs",children:e.jsx("code",{dangerouslySetInnerHTML:{__html:r}})})]})}function j({samples:a,lang:n,setLang:s}){const i=a.find(t=>t.lang===n)||a[0];return e.jsxs("div",{className:"code-tabs",children:[e.jsx("div",{className:"code-tab-row",children:a.map(t=>e.jsx("button",{type:"button",className:t.lang===i.lang?"active":"",onClick:()=>s(t.lang),children:V[t.lang]},t.lang))}),e.jsx(g,{lang:i.lang,code:i.code,title:i.title})]})}function P({items:a}){const[n,s]=o.useState(0),i=a[Math.min(n,a.length-1)];return e.jsxs("div",{className:"code-tabs",children:[e.jsx("div",{className:"code-tab-row",children:a.map((t,r)=>e.jsxs("button",{type:"button",className:r===n?"active":"",onClick:()=>s(r),children:[e.jsx("span",{className:`http-dot ${t.label.startsWith("2")?"ok":"bad"}`}),t.label]},t.label))}),e.jsx(g,{lang:"json",code:i.code,title:"Response"})]})}function N({base:a,method:n,path:s,note:i}){const t=a+s;return e.jsx("table",{className:"ep-box",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"Method"}),e.jsx("td",{children:e.jsx("span",{className:`method ${n.toLowerCase()}`,children:n})})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"URL"}),e.jsxs("td",{children:[e.jsx("code",{className:"ep-url",children:t}),e.jsx(Pe,{text:t})]})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"Header"}),e.jsxs("td",{children:[e.jsx("code",{className:"ep-url",children:"x-api-key: API_KEY_ANDA"}),n==="POST"&&e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("code",{className:"ep-url",children:"Content-Type: application/json"})]})]})]}),i&&e.jsxs("tr",{children:[e.jsx("th",{children:"Catatan"}),e.jsx("td",{children:i})]})]})})}function Pe({text:a}){const[n,s]=o.useState(!1);return e.jsx("button",{type:"button",className:"icon-copy",title:"Salin",onClick:async()=>{await K(a)&&(s(!0),setTimeout(()=>s(!1),1200))},children:n?e.jsx(O,{size:12}):e.jsx(D,{size:12})})}function x({rows:a,head:n="Parameter"}){const s=n!=="Field";return e.jsxs("table",{className:"ptable",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:n}),e.jsx("th",{children:"Tipe"}),s&&e.jsx("th",{children:"Wajib"}),e.jsx("th",{children:"Keterangan"})]})}),e.jsx("tbody",{children:a.map(([i,t,r,d])=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{className:"f-name",children:i})}),e.jsx("td",{children:e.jsx("span",{className:"f-type",children:t})}),s&&e.jsx("td",{children:r?e.jsx("span",{className:"req yes",children:"Ya"}):e.jsx("span",{className:"req no",children:"Tidak"})}),e.jsx("td",{children:d})]},i))})]})}const k=({warn:a,children:n})=>e.jsxs("div",{className:`callout ${a?"warn":""}`,children:[a?e.jsx(ne,{size:15}):e.jsx(se,{size:15}),e.jsx("span",{children:n})]});async function Ne(a,n){const s=new TextEncoder,i=await crypto.subtle.importKey("raw",s.encode(a),{name:"HMAC",hash:"SHA-256"},!1,["sign"]),t=await crypto.subtle.sign("HMAC",i,s.encode(n));return[...new Uint8Array(t)].map(r=>r.toString(16).padStart(2,"0")).join("")}const Te=[{file:"apiqris-whmcs.zip",title:"Modul WHMCS",desc:'Ekstrak ke root WHMCS → Setup → Payment Gateways → aktifkan "APIQris QRIS" → isi API key & webhook secret.'},{file:"apiqris-woocommerce.zip",title:"Plugin WooCommerce",desc:"Plugins → Add New → Upload → aktifkan → WooCommerce → Payments → APIQris QRIS."},{file:"apiqris-php-sdk.php",title:"SDK PHP (1 file)",desc:'require "APIQris.php"; $qp = new APIQris\\Client("API_KEY"); $qp->createInvoice([...]);'},{file:"apiqris-node-sdk.zip",title:"SDK Node.js",desc:'const qp = new APIQris("API_KEY"); await qp.createInvoice({...});'}],_=(a,n)=>`{
  "error": {
    "code": "${a}",
    "message": "${n}"
  }
}`,B=[["Pendahuluan",[["pendahuluan","Pendahuluan"],["alur-kerja","Alur Kerja"],["biaya-limit","Biaya & Batasan"]]],["Autentikasi",[["api-key","API Key & Header"],["signature","Pembuatan Signature"]]],["Transaksi",[["buat-transaksi","Request Transaksi"],["detail-transaksi","Detail / Cek Status"],["daftar-transaksi","Daftar Transaksi"],["batal-transaksi","Batalkan Transaksi"]]],["Mode Redirect",[["redirect","Link Redirect"],["redirect-kembali","Halaman Kembali"],["redirect-generator","Generator Link"]]],["Callback",[["callback","Callback"],["callback-verifikasi","Verifikasi Callback"],["callback-log","Log Callback"]]],["Merchant",[["merchant-info","Info Merchant"]]],["Lain-lain",[["snap","Snap Popup"],["plugin","Plugin & SDK"],["kode-error","Kode Error"]]]],w=B.flatMap(([a,n])=>n.map(([s,i])=>({id:s,title:i,group:a}))),H=()=>{const a=decodeURIComponent(location.hash.slice(1));return w.some(n=>n.id===a)?a:"pendahuluan"};function Oe(){const{user:a}=W(),n=window.location.origin,s=z(),i=s.find(c=>c.is_default)||s[0],t=(i==null?void 0:i.code)||String(a.merchant_no||"KODE_TOKO"),[r,d]=o.useState(H),[l,m]=o.useState(""),[u,I]=o.useState(()=>localStorage.getItem("qp_doc_lang")||"bash"),E=c=>{I(c),localStorage.setItem("qp_doc_lang",c)},T=o.useMemo(()=>$e(n,t),[n,t]),y={base:n,code:t,shop:i,shops:s,user:a,S:T,sp:{lang:u,setLang:E},go:d};o.useEffect(()=>{const c=()=>d(H());return window.addEventListener("hashchange",c),()=>window.removeEventListener("hashchange",c)},[]),o.useEffect(()=>{var c,$;location.hash.slice(1)!==r&&history.replaceState(null,"","#"+r),($=(c=document.querySelector(".qp-content"))==null?void 0:c.scrollTo)==null||$.call(c,0,0),window.scrollTo(0,0)},[r]);const h=w.findIndex(c=>c.id===r),p=w[h],A=w[h-1],b=w[h+1],q=l.trim().toLowerCase();return e.jsxs("div",{className:"dg",children:[e.jsxs("aside",{className:"dg-nav",children:[e.jsxs("div",{className:"dg-nav-head",children:[e.jsx(ue,{size:16}),e.jsx("strong",{children:"API Developer Guide"}),e.jsx("span",{className:"dg-ver",children:"v1"})]}),e.jsxs("label",{className:"dg-search",children:[e.jsx(J,{size:13}),e.jsx("input",{value:l,onChange:c=>m(c.target.value),placeholder:"Cari topik…"})]}),e.jsxs("nav",{children:[B.map(([c,$])=>{const M=$.filter(([,R])=>!q||R.toLowerCase().includes(q)||c.toLowerCase().includes(q));return M.length?e.jsxs("div",{className:"dg-group",children:[e.jsx("div",{className:"dg-group-title",children:c}),M.map(([R,G])=>e.jsx("a",{href:"#"+R,className:R===r?"active":"",onClick:Y=>{Y.preventDefault(),d(R)},children:G},R))]},c):null}),e.jsxs("div",{className:"dg-group",children:[e.jsx("div",{className:"dg-group-title",children:"Tautan"}),e.jsx(v,{to:"/merchant",children:"Kredensial toko"}),e.jsx("a",{href:"/download/apiqris-php-sdk.php",download:!0,children:"Library PHP"})]})]})]}),e.jsxs("article",{className:"dg-main",children:[e.jsxs("div",{className:"dg-crumb",children:[p.group,e.jsx(U,{size:12}),p.title]}),e.jsx("h1",{className:"dg-title",children:p.title}),e.jsx("div",{className:"docs",children:Re[r](y)}),e.jsxs("div",{className:"dg-pager",children:[A?e.jsxs("a",{href:"#"+A.id,onClick:c=>{c.preventDefault(),d(A.id)},children:[e.jsxs("small",{children:[e.jsx(ge,{size:12})," Sebelumnya"]}),e.jsx("b",{children:A.title})]}):e.jsx("span",{}),b?e.jsxs("a",{className:"next",href:"#"+b.id,onClick:c=>{c.preventDefault(),d(b.id)},children:[e.jsxs("small",{children:["Selanjutnya ",e.jsx(U,{size:12})]}),e.jsx("b",{children:b.title})]}):e.jsx("span",{})]})]})]})}const Re={pendahuluan:({base:a,code:n,shop:s,user:i,go:t})=>e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["Selamat datang di dokumentasi API APIQris. Di sini tersedia penjelasan lengkap seluruh API beserta cara penggunaannya untuk menerima pembayaran ",e.jsx("b",{children:"QRIS dinamis"})," di website atau aplikasi Anda. Satu QR bisa dibayar dari semua e-wallet dan m-banking."]}),e.jsx("h2",{children:"Kredensial"}),e.jsxs("p",{children:["Tiap toko punya kredensial sendiri di menu ",e.jsx(v,{to:"/merchant",children:"Toko & API Key"}),". Transaksi otomatis tercatat atas nama toko pemilik kunci. Berikut kredensial toko utama",s?e.jsxs(e.Fragment,{children:[" (",e.jsx("b",{children:s.name}),")"]}):null,":"]}),e.jsxs("div",{className:"cred2",children:[e.jsx(C,{label:"Base URL API",hint:"Awalan semua endpoint",value:a+"/v1"}),e.jsx(C,{label:"Kode Merchant",hint:"ID toko, dipakai di Mode Redirect",value:n}),e.jsx(C,{label:"API Key",hint:"Header x-api-key",value:(s==null?void 0:s.api_key)||i.api_key||"",secret:!0}),e.jsx(C,{label:"Private Key",hint:"Kunci signature & callback",value:(s==null?void 0:s.private_key)||"",secret:!0})]}),e.jsxs(k,{warn:!0,children:[e.jsx("b",{children:"API Key"})," & ",e.jsx("b",{children:"Private Key"})," hanya boleh dipakai di ",e.jsx("b",{children:"server/backend"}),". Jangan taruh di JavaScript browser, aplikasi Android, atau repositori publik."]}),e.jsx("h2",{children:"Metode integrasi"}),e.jsxs("table",{className:"ptable",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Metode"}),e.jsx("th",{children:"Cocok untuk"}),e.jsx("th",{children:"Panggil API?"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("a",{href:"#buat-transaksi",onClick:r=>{r.preventDefault(),t("buat-transaksi")},children:e.jsx("b",{children:"REST API"})})}),e.jsx("td",{children:"Kendali penuh: tampilkan QR sendiri, polling, integrasi aplikasi."}),e.jsx("td",{children:"Ya"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("a",{href:"#redirect",onClick:r=>{r.preventDefault(),t("redirect")},children:e.jsx("b",{children:"Mode Redirect"})})}),e.jsx("td",{children:"Paling mudah: cukup susun link bertanda tangan lalu arahkan pembeli."}),e.jsx("td",{children:"Tidak"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("a",{href:"#snap",onClick:r=>{r.preventDefault(),t("snap")},children:e.jsx("b",{children:"Snap Popup"})})}),e.jsx("td",{children:"Halaman bayar tampil sebagai popup tanpa meninggalkan website."}),e.jsx("td",{children:"Ya"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("a",{href:"#plugin",onClick:r=>{r.preventDefault(),t("plugin")},children:e.jsx("b",{children:"Plugin"})})}),e.jsx("td",{children:"WHMCS & WooCommerce, tanpa coding."}),e.jsx("td",{children:"Otomatis"})]})]})]}),e.jsx("h2",{children:"Format respons"}),e.jsxs("p",{children:["Semua endpoint menerima & mengembalikan JSON (UTF-8). Respons sukses dibungkus ",e.jsx("code",{children:"data"}),", sedangkan error dibungkus ",e.jsx("code",{children:"error"}),". Waktu memakai format RFC 3339 zona WIB (+07:00), nominal dalam Rupiah (integer)."]}),e.jsx(P,{items:[{label:"200 / 201",code:`{
  "data": { ... }
}`},{label:"4xx / 5xx",code:_("INVALID_AMOUNT","nominal harus antara Rp1000 dan Rp10000000")}]})]}),"alur-kerja":()=>e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["Pembayaran memakai skema ",e.jsx("b",{children:"Closed Payment"}),": nominal ditentukan merchant, satu QR hanya untuk satu transaksi, dan berlaku sampai waktu kedaluwarsa."]}),e.jsx(Se,{}),e.jsx("h2",{children:"Rincian langkah"}),e.jsxs("ol",{className:"steps-v",children:[e.jsxs("li",{children:[e.jsx("b",{children:"Buat transaksi"}),e.jsxs("span",{children:["Backend memanggil ",e.jsx("code",{children:"POST /v1/invoices"}),", atau mengarahkan pembeli ke link Mode Redirect. Sistem menambahkan ",e.jsx("b",{children:"kode unik"})," (mis. Rp150.000 → Rp150.123) agar pembayaran dikenali otomatis."]})]}),e.jsxs("li",{children:[e.jsx("b",{children:"Pembeli membayar"}),e.jsx("span",{children:"Pembeli scan QRIS (di halaman bayar APIQris, popup Snap, atau QR yang Anda tampilkan sendiri). Nominal sudah terkunci di QR."})]}),e.jsxs("li",{children:[e.jsx("b",{children:"Pembayaran terdeteksi"}),e.jsxs("span",{children:["Dalam hitungan detik status berubah menjadi ",e.jsx("code",{children:"paid"}),"."]})]}),e.jsxs("li",{children:[e.jsx("b",{children:"Callback dikirim"}),e.jsxs("span",{children:["APIQris mengirim ",e.jsx("code",{children:"POST"})," bertanda tangan ke Callback URL toko. Backend Anda memverifikasi lalu memproses pesanan."]})]}),e.jsxs("li",{children:[e.jsx("b",{children:"Pembeli kembali ke toko"}),e.jsxs("span",{children:["Halaman bayar mengarahkan pembeli ke Return URL / ",e.jsx("code",{children:"redirect_url"})," dengan parameter status bertanda tangan."]})]}),e.jsxs("li",{children:[e.jsx("b",{children:"Dana di rekening Anda"}),e.jsxs("span",{children:["Pembeli membayar langsung ke QRIS milik Anda, jadi dana (termasuk kode unik) sudah ada di rekening / e-wallet Anda. Biaya layanan 0,2% dipotong dari ",e.jsx(v,{to:"/saldo-aktif",children:"Saldo Aktif"}),"."]})]})]}),e.jsx("h2",{children:"Status transaksi"}),e.jsxs("table",{className:"ptable",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Keterangan"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("span",{className:"st pending",children:"pending"})}),e.jsx("td",{children:"Menunggu pembayaran."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("span",{className:"st paid",children:"paid"})}),e.jsx("td",{children:"Pembayaran diterima. Status final."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("span",{className:"st expired",children:"expired"})}),e.jsx("td",{children:"Lewat masa berlaku tanpa pembayaran. Status final."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("span",{className:"st cancelled",children:"cancelled"})}),e.jsx("td",{children:"Dibatalkan merchant lewat API/dashboard. Status final."})]})]})]})]}),"biaya-limit":()=>e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["Biaya dan batasan teknis berikut berlaku untuk semua toko. Lihat juga ",e.jsx(v,{to:"/biaya-cara-kerja",children:"Biaya & Cara Kerja"})," dan ",e.jsx(v,{to:"/saldo-aktif",children:"Saldo Aktif"}),"."]}),e.jsxs("table",{className:"ptable",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Biaya / batasan"}),e.jsx("th",{children:"Nilai"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Biaya layanan"}),e.jsxs("td",{children:[e.jsx("b",{children:"0,2%"})," dari ",e.jsx("code",{children:"amount"})," per transaksi ",e.jsx("b",{children:"sukses"}),", dipotong dari Saldo Aktif (field ",e.jsx("code",{children:"fee"}),"). Transaksi kedaluwarsa / batal gratis."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Saldo Aktif"}),e.jsxs("td",{children:["Wajib cukup untuk biaya transaksi; bila kurang, ",e.jsx("code",{children:"POST /v1/invoices"})," ditolak ",e.jsx("code",{children:"402 INSUFFICIENT_BALANCE"}),". Isi via QRIS (KlikQRIS), minimal Rp10.000."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Nominal per transaksi"}),e.jsx("td",{children:"Rp1.000 – Rp10.000.000"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Masa berlaku QR"}),e.jsx("td",{children:"5 – 1.440 menit (default mengikuti pengaturan toko)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Rate limit API"}),e.jsx("td",{children:"120 request / menit per API key"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Pembuatan transaksi"}),e.jsx("td",{children:"Maks 10 transaksi / detik per merchant"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Tagihan menunggu (pending)"}),e.jsx("td",{children:"Dibatasi per akun (default 300)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Timeout callback"}),e.jsx("td",{children:"15 detik, retry hingga 6×"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Kode unik"}),e.jsx("td",{children:"Ditambahkan ke nominal dan ikut masuk ke rekening Anda"})]})]})]})]}),"api-key":({base:a,S:n,sp:s})=>e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["Setiap request ke endpoint ",e.jsx("code",{children:"/v1"})," wajib menyertakan API Key toko. Kirim lewat salah satu header berikut:"]}),e.jsx(g,{lang:"bash",title:"Header",code:`x-api-key: API_KEY_ANDA
# atau
Authorization: Bearer API_KEY_ANDA`}),e.jsx(x,{head:"Header",rows:[["x-api-key","string",!0,"API Key toko (diawali AQ_LIVE_). Lihat di menu Toko & API Key."],["Content-Type","string",!1,"Wajib application/json untuk request POST."]]}),e.jsxs(k,{children:["API Key bisa di-",e.jsx("b",{children:"generate ulang"})," kapan saja di menu Merchant. Key lama langsung tidak berlaku (",e.jsx("code",{children:"401 UNAUTHORIZED"}),"). API Key toko hanya bisa melihat transaksi toko itu sendiri."]}),e.jsx("h2",{children:"Uji kredensial"}),e.jsxs("p",{children:["Panggil ",e.jsxs("code",{children:["GET ",a,"/v1/me"]}),". Bila kredensial benar, respons berisi data toko."]}),e.jsx(j,{samples:n.me,...s})]}),signature:({S:a,sp:n})=>e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["Signature dipakai untuk memastikan data ",e.jsx("b",{children:"tidak diubah"})," dan benar-benar berasal dari pihak yang sah. Semua signature APIQris memakai ",e.jsx("b",{children:"HMAC-SHA256"})," dengan ",e.jsx("b",{children:"Private Key"})," toko dan dikirim dalam format hex huruf kecil (64 karakter)."]}),e.jsxs("table",{className:"ptable",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Kegunaan"}),e.jsx("th",{children:"String yang ditandatangani"}),e.jsx("th",{children:"Arah"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:"Link Mode Redirect"})}),e.jsx("td",{children:e.jsx("code",{children:"kode_toko|order_id|amount|redirect_url"})}),e.jsx("td",{children:"Anda → APIQris"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:"Halaman kembali"})}),e.jsx("td",{children:e.jsx("code",{children:"order_id|status|total|invoice_id"})}),e.jsx("td",{children:"APIQris → Anda"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("b",{children:"Callback"})}),e.jsx("td",{children:e.jsx("code",{children:'timestamp + "." + raw_body'})}),e.jsx("td",{children:"APIQris → Anda"})]})]})]}),e.jsxs(k,{children:["Gabungkan nilai dengan karakter ",e.jsx("code",{children:"|"})," tanpa spasi. ",e.jsx("code",{children:"amount"})," ditulis sebagai integer tanpa titik (",e.jsx("code",{children:"25000"}),"). Parameter opsional yang tidak dipakai tetap diisi string kosong, mis. ",e.jsx("code",{children:"KODE|INV-1|25000|"}),"."]}),e.jsx("h2",{children:"Contoh pembuatan signature"}),e.jsx(j,{samples:a.signature,...n}),e.jsxs(k,{warn:!0,children:["Bandingkan signature memakai fungsi waktu-konstan (",e.jsx("code",{children:"hash_equals"}),", ",e.jsx("code",{children:"crypto.timingSafeEqual"}),", ",e.jsx("code",{children:"hmac.compare_digest"}),", ",e.jsx("code",{children:"hmac.Equal"}),"), bukan ",e.jsx("code",{children:"=="}),"."]})]}),"buat-transaksi":({base:a,S:n,sp:s})=>e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["Membuat transaksi QRIS dinamis baru. Tampilkan ",e.jsx("code",{children:"total_amount"})," dari respons sebagai nominal yang harus dibayar (sudah termasuk kode unik). Gunakan ",e.jsx("code",{children:"pay_url"})," untuk halaman bayar siap pakai atau ",e.jsx("code",{children:"qr_image_url"})," / ",e.jsx("code",{children:"qris_content"})," untuk menampilkan QR sendiri."]}),e.jsx(N,{base:a,method:"POST",path:"/v1/invoices"}),e.jsx("h2",{children:"Request Parameter"}),e.jsx(x,{rows:[["order_id","string",!0,e.jsxs(e.Fragment,{children:["ID pesanan unik dari sistem Anda, maks 64 karakter (alias ",e.jsx("code",{children:"ref_id"}),"). ",e.jsx("b",{children:"Idempoten"}),": order_id yang sama selama masih pending/paid mengembalikan transaksi yang sama."]})],["amount","integer",!0,"Nominal Rupiah tanpa titik/desimal, Rp1.000 – Rp10.000.000."],["keterangan","string",!1,e.jsxs(e.Fragment,{children:["Deskripsi transaksi, tampil di halaman bayar (alias ",e.jsx("code",{children:"description"}),")."]})],["customer.name","string",!1,"Nama pembeli."],["customer.email","string",!1,"Email pembeli."],["whatsapp_buyer","string",!1,"Nomor WA pembeli (628…) untuk notifikasi lunas/kedaluwarsa otomatis."],["callback_url","string",!1,"URL callback khusus transaksi ini. Kosong = Callback URL toko."],["redirect_url","string",!1,e.jsxs(e.Fragment,{children:["Tujuan pembeli setelah bayar (alias ",e.jsx("code",{children:"success_url"}),"). Kosong = Return URL toko."]})],["expired_menit","integer",!1,e.jsxs(e.Fragment,{children:["Masa berlaku QR 5–1440 menit (alias ",e.jsx("code",{children:"expires_in"})," dalam detik)."]})],["metadata","object",!1,"JSON bebas milik Anda, dikembalikan apa adanya di callback."]]}),e.jsx("h2",{children:"Contoh Request"}),e.jsx(j,{samples:n.create,...s}),e.jsx("h2",{children:"Contoh Response"}),e.jsx(P,{items:[{label:"201 Created",code:n.invoiceJson},{label:"400",code:_("INVALID_AMOUNT","nominal harus antara Rp1000 dan Rp10000000")},{label:"402",code:_("INSUFFICIENT_BALANCE","saldo biaya layanan habis — isi saldo dulu agar tagihan baru bisa dibuat")},{label:"401",code:_("UNAUTHORIZED","API key tidak dikenal atau sudah dicabut.")},{label:"429",code:_("RATE_LIMITED","Terlalu banyak permintaan (maks 120/menit per API key).")}]}),e.jsx("h2",{children:"Response Parameter"}),e.jsx(x,{head:"Field",rows:[["id","uuid",!0,"ID transaksi APIQris."],["ref_id","string",!0,"order_id Anda."],["status","string",!0,"pending · paid · expired · cancelled"],["amount","integer",!0,"Nominal yang diminta."],["unique_code","integer",!0,"Kode unik yang ditambahkan."],["total_amount","integer",!0,"Nominal yang harus dibayar pembeli (amount + unique_code)."],["fee","integer",!0,"Biaya layanan APIQris 0,2% dari amount, dipotong dari Saldo Aktif (terisi setelah lunas)."],["qris_content","string",!0,"String QRIS EMV untuk dirender jadi QR sendiri."],["qr_image_url","string",!0,e.jsxs(e.Fragment,{children:["Gambar PNG QR (tambahkan ",e.jsx("code",{children:"?size=480"}),")."]})],["pay_url","string",!0,"Halaman bayar APIQris (QR, hitung mundur, cek status otomatis)."],["merchant_code / merchant_name","string",!0,"Toko asal transaksi."],["expires_at / created_at","datetime",!0,"RFC 3339, zona WIB."]]})]}),"detail-transaksi":({base:a,S:n,sp:s})=>e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["Mengambil detail sekaligus status terbaru sebuah transaksi. Parameter path bisa berupa ",e.jsx("code",{children:"id"})," APIQris atau ",e.jsx("code",{children:"order_id"})," Anda. Cocok untuk polling tiap 3–5 detik bila tidak memakai callback."]}),e.jsx(N,{base:a,method:"GET",path:"/v1/invoices/{id_atau_order_id}"}),e.jsx(x,{rows:[["id_atau_order_id","path",!0,"UUID transaksi atau order_id Anda."]]}),e.jsx("h2",{children:"Contoh Request"}),e.jsx(j,{samples:n.status,...s}),e.jsx("h2",{children:"Contoh Response"}),e.jsx(P,{items:[{label:"200 OK",code:n.paidJson},{label:"404",code:_("NOT_FOUND","Tagihan tidak ditemukan.")}]}),e.jsxs(k,{children:["Transaksi pending yang sudah lewat ",e.jsx("code",{children:"expires_at"})," langsung dikembalikan dengan status ",e.jsx("code",{children:"expired"}),"."]})]}),"daftar-transaksi":({base:a,S:n,sp:s})=>e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Daftar transaksi toko, diurutkan dari yang terbaru."}),e.jsx(N,{base:a,method:"GET",path:"/v1/invoices?page=1&limit=25&status=paid"}),e.jsx(x,{rows:[["page","integer",!1,"Halaman, mulai 1 (default 1)."],["limit","integer",!1,"Jumlah per halaman, maks 200 (default 25)."],["status","string",!1,"Filter: pending · paid · expired · cancelled."]]}),e.jsx("h2",{children:"Contoh Request"}),e.jsx(j,{samples:n.list,...s}),e.jsx("h2",{children:"Contoh Response"}),e.jsx(P,{items:[{label:"200 OK",code:`{
  "data": [
    { "id": "3382463b-…", "ref_id": "INV-1001", "status": "paid", "total_amount": 150123, "paid_at": "2026-10-17T20:52:08+07:00" },
    { "id": "9a1c22e0-…", "ref_id": "INV-1000", "status": "expired", "total_amount": 50217, "paid_at": null }
  ]
}`}]})]}),"batal-transaksi":({base:a,S:n,sp:s})=>e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["Membatalkan transaksi yang masih ",e.jsx("code",{children:"pending"}),", mis. karena pembeli membatalkan pesanan. Callback ",e.jsx("code",{children:"invoice.cancelled"})," akan dikirim."]}),e.jsx(N,{base:a,method:"POST",path:"/v1/invoices/{id_atau_order_id}/cancel"}),e.jsx("h2",{children:"Contoh Request"}),e.jsx(j,{samples:n.cancel,...s}),e.jsx("h2",{children:"Contoh Response"}),e.jsx(P,{items:[{label:"200 OK",code:`{
  "data": { "id": "3382463b-…", "ref_id": "INV-1001", "status": "cancelled", ... }
}`},{label:"409",code:_("NOT_PENDING","Tagihan sudah tidak menunggu pembayaran.")}]})]}),redirect:({base:a,code:n,S:s,sp:i,go:t})=>e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["Mode Redirect adalah cara integrasi ",e.jsx("b",{children:"paling mudah"}),": website Anda ",e.jsx("b",{children:"tidak perlu memanggil API"}),". Susun link berisi data pesanan + ",e.jsx("b",{children:"signature"}),", lalu arahkan (HTTP redirect) pembeli ke link tersebut. APIQris membuat transaksi, menampilkan halaman bayar QRIS, lalu mengembalikan pembeli ke website Anda."]}),e.jsxs("div",{className:"redirect-flow",children:[e.jsxs("div",{children:[e.jsx("b",{children:"1"}),e.jsxs("span",{children:["Pembeli klik ",e.jsx("i",{children:"Bayar"})," di toko Anda"]})]}),e.jsxs("div",{children:[e.jsx("b",{children:"2"}),e.jsxs("span",{children:["Server redirect ke ",e.jsxs("code",{children:["/bayar/",n,"?…"]})]})]}),e.jsxs("div",{children:[e.jsx("b",{children:"3"}),e.jsx("span",{children:"Halaman bayar QRIS (cek status otomatis)"})]}),e.jsxs("div",{children:[e.jsx("b",{children:"4"}),e.jsxs("span",{children:["Lunas → kembali ke ",e.jsx("code",{children:"redirect_url"})]})]})]}),e.jsx(N,{base:a,method:"GET",path:"/bayar/{kode_merchant}?order_id=…&amount=…&signature=…",note:e.jsxs(e.Fragment,{children:["Dibuka oleh ",e.jsx("b",{children:"browser pembeli"}),", tanpa header API key. Hasil: HTTP 302 ke halaman bayar ",e.jsxs("code",{children:["/pay/","{id}"]}),"."]})}),e.jsx("h2",{children:"Query Parameter"}),e.jsx(x,{rows:[["kode_merchant","path",!0,e.jsxs(e.Fragment,{children:["Kode merchant toko. Toko utama Anda: ",e.jsx("code",{children:n}),"."]})],["order_id","string",!0,e.jsxs(e.Fragment,{children:["ID pesanan unik, maks 64 karakter (huruf, angka, ",e.jsx("code",{children:". _ - / #"}),"). Link yang sama dibuka ulang → transaksi yang sama."]})],["amount","integer",!0,"Nominal Rupiah tanpa titik, Rp1.000 – Rp10.000.000."],["signature","string",!0,e.jsxs(e.Fragment,{children:["HMAC-SHA256(Private Key, ",e.jsx("code",{children:"kode_merchant|order_id|amount|redirect_url"}),"). Lihat ",e.jsx("a",{href:"#signature",onClick:r=>{r.preventDefault(),t("signature")},children:"Pembuatan Signature"}),"."]})],["redirect_url","string",!1,"URL kembali setelah bayar, ikut ditandatangani. Kosong = Return URL toko."],["keterangan","string",!1,"Deskripsi di halaman bayar (maks 200 karakter)."],["nama","string",!1,"Nama pembeli."],["email","string",!1,"Email pembeli."],["whatsapp","string",!1,"Nomor WA pembeli → notifikasi WA otomatis."],["expired_menit","integer",!1,"Masa berlaku QR 5–1440 menit."]]}),e.jsxs(k,{children:["Signature mengunci ",e.jsx("b",{children:"kode merchant, order_id, nominal, dan redirect_url"}),". Bila pembeli mengubah nominal atau tujuan di URL, link ditolak dengan pesan ",e.jsx("i",{children:'"Tanda tangan (signature) tidak valid"'}),"."]}),e.jsx("h2",{children:"Contoh Link"}),e.jsx(g,{lang:"bash",title:"URL",code:`${a}/bayar/${n}?order_id=INV-1001&amount=25000&redirect_url=https%3A%2F%2Ftokoanda.com%2Fselesai&keterangan=Paket+Premium&signature=9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08`}),e.jsxs("p",{children:["Buat link asli untuk toko Anda di ",e.jsx("a",{href:"#redirect-generator",onClick:r=>{r.preventDefault(),t("redirect-generator")},children:"Generator Link"}),"."]}),e.jsx("h2",{children:"Contoh Kode"}),e.jsx(j,{samples:s.redirect,...i}),e.jsx("h2",{children:"Kemungkinan error"}),e.jsxs("table",{className:"ptable",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"HTTP"}),e.jsx("th",{children:"Pesan di halaman"}),e.jsx("th",{children:"Penyebab"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"400"}),e.jsx("td",{children:"Parameter … wajib diisi"}),e.jsx("td",{children:"order_id / amount / signature kosong atau formatnya salah."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"403"}),e.jsx("td",{children:"Tanda tangan (signature) tidak valid"}),e.jsx("td",{children:"Signature salah, Private Key lama, atau parameter diubah."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"403"}),e.jsx("td",{children:"Toko sedang dinonaktifkan"}),e.jsx("td",{children:"Toko berstatus nonaktif di menu Merchant."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"404"}),e.jsx("td",{children:"Kode merchant tidak dikenal"}),e.jsx("td",{children:"Kode merchant salah."})]})]})]}),e.jsxs(k,{children:["Sudah memakai API? Panggil ",e.jsx("code",{children:"POST /v1/invoices"})," lalu redirect pembeli ke ",e.jsx("code",{children:"pay_url"})," dari respons. Hasilnya sama."]})]}),"redirect-kembali":({S:a,sp:n})=>e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["Setelah transaksi lunas, halaman bayar otomatis mengarahkan pembeli (±3 detik) ke ",e.jsx("code",{children:"redirect_url"})," (atau Return URL toko) dengan tambahan query parameter berikut. Bila QR kedaluwarsa atau dibatalkan, pembeli bisa menekan tombol ",e.jsx("i",{children:"Kembali ke toko"})," dengan status yang sesuai."]}),e.jsx(g,{lang:"bash",title:"Contoh URL kembali",code:"https://tokoanda.com/selesai?invoice_id=3382463b-5c1e-4a8f-9d2b-7e0a1f6c9b11&order_id=INV-1001&signature=5a29…57c&status=paid&total=25123"}),e.jsx(x,{rows:[["order_id","string",!0,"order_id Anda."],["status","string",!0,"paid · expired · cancelled"],["total","integer",!0,"Nominal yang dibayar (termasuk kode unik)."],["invoice_id","uuid",!0,"ID transaksi APIQris."],["signature","string",!0,e.jsxs(e.Fragment,{children:["HMAC-SHA256(Private Key, ",e.jsx("code",{children:"order_id|status|total|invoice_id"}),")."]})]]}),e.jsx("h2",{children:"Contoh verifikasi"}),e.jsx(j,{samples:a.returnVerify,...n}),e.jsxs(k,{warn:!0,children:["Halaman kembali hanya untuk ",e.jsx("b",{children:"menampilkan"})," status kepada pembeli. Pemrosesan pesanan (kirim produk, aktifkan layanan) wajib lewat ",e.jsx("b",{children:"Callback"}),", karena pembeli bisa menutup tab sebelum dialihkan."]})]}),"redirect-generator":a=>e.jsx(we,{...a}),callback:({S:a})=>e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["Callback (webhook) adalah request ",e.jsx("code",{children:"POST"})," dari APIQris ke ",e.jsx("b",{children:"Callback URL"})," toko setiap kali status transaksi berubah. Atur Callback URL di menu ",e.jsx(v,{to:"/merchant",children:"Toko & API Key"}),", atau kirim ",e.jsx("code",{children:"callback_url"})," per transaksi."]}),e.jsx("table",{className:"ep-box",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"Method"}),e.jsx("td",{children:e.jsx("span",{className:"method post",children:"POST"})})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"Content-Type"}),e.jsx("td",{children:e.jsx("code",{className:"ep-url",children:"application/json"})})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"Respons Anda"}),e.jsxs("td",{children:["HTTP ",e.jsx("b",{children:"2xx"})," dalam ",e.jsx("b",{children:"15 detik"})]})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"Retry"}),e.jsx("td",{children:"Hingga 6×: 1 mnt, 5 mnt, 15 mnt, 1 jam, 6 jam, 24 jam"})]})]})}),e.jsx("h2",{children:"Header"}),e.jsx(x,{head:"Header",rows:[["X-APIQris-Event","string",!0,"Nama event, lihat tabel di bawah."],["X-APIQris-Delivery","uuid",!0,"ID pengiriman (unik per percobaan)."],["X-APIQris-Timestamp","integer",!0,"Unix timestamp saat dikirim."],["X-APIQris-Signature","string",!0,e.jsxs(e.Fragment,{children:[e.jsx("code",{children:"t=<timestamp>,v1=<hex>"}),"; v1 = HMAC-SHA256(Private Key, ",e.jsx("code",{children:'timestamp + "." + raw_body'}),")."]})]]}),e.jsx("h2",{children:"Event"}),e.jsxs("table",{className:"ptable",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Event"}),e.jsx("th",{children:"Kapan dikirim"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"invoice.paid"})}),e.jsx("td",{children:"Pembayaran diterima. Tandai pesanan lunas."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"invoice.expired"})}),e.jsx("td",{children:"QR melewati masa berlaku tanpa pembayaran."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"invoice.cancelled"})}),e.jsx("td",{children:"Transaksi dibatalkan lewat API/dashboard."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"ping"})}),e.jsx("td",{children:'Tombol "Tes callback" di menu Merchant. Cukup balas 200.'})]})]})]}),e.jsx("h2",{children:"Contoh Body"}),e.jsx(g,{lang:"json",title:"Body (invoice.paid)",code:a.webhookJson}),e.jsx(x,{head:"Field",rows:[["event","string",!0,"Sama dengan header X-APIQris-Event."],["sent_at","datetime",!0,"Waktu pengiriman."],["data","object",!0,e.jsxs(e.Fragment,{children:["Objek transaksi lengkap (sama dengan respons ",e.jsx("i",{children:"Detail Transaksi"}),"), termasuk ",e.jsx("code",{children:"metadata"})," Anda."]})]]})]}),"callback-verifikasi":({S:a,sp:n})=>e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["Setiap callback ",e.jsx("b",{children:"wajib diverifikasi"})," sebelum diproses agar tidak bisa dipalsukan."]}),e.jsxs("ol",{className:"steps-v",children:[e.jsxs("li",{children:[e.jsx("b",{children:"Ambil body mentah"}),e.jsx("span",{children:"Gunakan raw body sebelum di-parse JSON (spasi/urutan harus sama persis)."})]}),e.jsxs("li",{children:[e.jsx("b",{children:"Pisahkan header signature"}),e.jsxs("span",{children:["Header ",e.jsx("code",{children:"X-APIQris-Signature"})," berbentuk ",e.jsx("code",{children:"t=1760000000,v1=5f2a…"}),"."]})]}),e.jsxs("li",{children:[e.jsx("b",{children:"Hitung HMAC"}),e.jsxs("span",{children:[e.jsx("code",{children:'HMAC-SHA256(private_key, t + "." + raw_body)'})," dalam hex."]})]}),e.jsxs("li",{children:[e.jsx("b",{children:"Bandingkan & cek waktu"}),e.jsxs("span",{children:["Bandingkan dengan ",e.jsx("code",{children:"v1"})," secara waktu-konstan, dan tolak bila selisih ",e.jsx("code",{children:"t"})," dengan waktu sekarang > 10 menit (anti replay)."]})]}),e.jsxs("li",{children:[e.jsx("b",{children:"Proses idempoten"}),e.jsxs("span",{children:["Cari pesanan via ",e.jsx("code",{children:"data.ref_id"}),", cocokkan ",e.jsx("code",{children:"data.amount"}),". Bila sudah lunas, abaikan namun tetap balas 200."]})]})]}),e.jsx("h2",{children:"Contoh Kode"}),e.jsx(j,{samples:a.webhook,...n}),e.jsxs(k,{children:["Callback URL harus bisa diakses publik via HTTPS. Untuk uji di komputer lokal gunakan tunnel (cloudflared / ngrok), lalu klik ",e.jsx("b",{children:"Tes callback"})," di menu Merchant."]})]}),"callback-log":()=>e.jsx(Ee,{}),"merchant-info":({base:a,S:n,sp:s,code:i,shop:t,user:r})=>e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Mengambil informasi akun & toko pemilik API Key. Berguna untuk menguji kredensial."}),e.jsx(N,{base:a,method:"GET",path:"/v1/me"}),e.jsx("h2",{children:"Contoh Request"}),e.jsx(j,{samples:n.me,...s}),e.jsx("h2",{children:"Contoh Response"}),e.jsx(P,{items:[{label:"200 OK",code:`{
  "data": {
    "merchant": { "business_name": "${r.business_name||"Toko Anda"}" },
    "key": { "label": "Utama", "mode": "live" },
    "store": {
      "code": "${i}",
      "name": "${(t==null?void 0:t.name)||"Toko Utama"}",
      "website": "https://tokoanda.com",
      "callback_url": "https://tokoanda.com/webhook/apiqris",
      "return_url": "https://tokoanda.com/selesai"
    }
  }
}`},{label:"401",code:_("UNAUTHORIZED","API key tidak dikenal atau sudah dicabut.")}]})]}),pencairan:({base:a})=>e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["Daftar pencairan dana ke rekening toko. Berguna untuk rekonsiliasi pembukuan: cari pencairan yang memuat pesanan tertentu lewat ",e.jsx("code",{children:"ref_id"}),"."]}),e.jsx(N,{base:a,method:"GET",path:"/v1/withdrawals?status=success&ref_id=INV-1001"}),e.jsx(x,{rows:[["status","string",!1,"pending · processing · success · rejected"],["ref_id","string",!1,"order_id: tampilkan pencairan yang memuat transaksi ini."]]}),e.jsx("h2",{children:"Contoh Request"}),e.jsx(g,{lang:"bash",code:`curl "${a}/v1/withdrawals?status=success" \\
  -H "x-api-key: API_KEY_ANDA"`}),e.jsx("h2",{children:"Contoh Response"}),e.jsx(P,{items:[{label:"200 OK",code:`{
  "data": [
    {
      "code": "WD20261017-0012",
      "gross": 1520000,
      "fee": 2500,
      "net": 1517500,
      "bank_name": "BCA",
      "bank_account_no": "12345•••",
      "status": "success",
      "transfer_ref": "TRF-889120",
      "processed_at": "2026-10-17T15:02:11+07:00",
      "created_at": "2026-10-17T14:00:00+07:00"
    }
  ]
}`}]})]}),snap:({S:a})=>e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["Snap menampilkan halaman bayar sebagai ",e.jsx("b",{children:"popup"})," di website Anda, jadi pembeli tidak meninggalkan halaman. Mendukung mobile & desktop."]}),e.jsxs("ol",{className:"steps-v",children:[e.jsxs("li",{children:[e.jsx("b",{children:"Buat transaksi"}),e.jsxs("span",{children:["Backend memanggil ",e.jsx("code",{children:"POST /v1/invoices"})," dan meneruskan ",e.jsx("code",{children:"pay_url"})," ke halaman."]})]}),e.jsxs("li",{children:[e.jsx("b",{children:"Pasang snap.js"}),e.jsxs("span",{children:["Tambahkan tombol dengan atribut ",e.jsx("code",{children:"data-apiqris"}),", atau panggil ",e.jsx("code",{children:"APIQris.pay()"}),"."]})]}),e.jsxs("li",{children:[e.jsx("b",{children:"Lunas"}),e.jsxs("span",{children:["Popup menutup otomatis dan memanggil ",e.jsx("code",{children:"onPaid"})," / mengarahkan ke ",e.jsx("code",{children:"data-redirect"}),". Status final tetap dipastikan lewat callback."]})]})]}),e.jsx("h2",{children:"HTML"}),e.jsx(g,{lang:"xml",title:"HTML",code:a.snapHtml}),e.jsx("h2",{children:"JavaScript"}),e.jsx(g,{lang:"javascript",title:"JavaScript",code:a.snapJs}),e.jsx(x,{head:"Opsi",rows:[["data-apiqris","atribut",!0,"pay_url dari respons Request Transaksi."],["data-redirect","atribut",!1,"URL tujuan setelah lunas."],["onPaid(d)","function",!1,"Dipanggil saat lunas; d berisi id, ref_id, total_amount."],["onClose(reason)","function",!1,"Dipanggil saat popup ditutup."]]})]}),plugin:()=>e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Plugin & library siap pakai. Pembuatan transaksi, halaman bayar, verifikasi signature callback, dan idempotensi sudah ditangani."}),e.jsx("div",{className:"pkg-grid",children:Te.map(a=>e.jsxs("div",{className:"pkg",children:[e.jsx(be,{size:18}),e.jsxs("div",{children:[e.jsx("strong",{children:a.title}),e.jsx("small",{children:a.desc})]}),e.jsxs("a",{className:"button button-primary",href:`/download/${a.file}`,download:!0,children:[e.jsx(X,{size:13})," Unduh"]})]},a.file))})]}),"kode-error":()=>e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Bila request gagal, respons memakai status HTTP yang sesuai dan body berikut:"}),e.jsx(g,{lang:"json",title:"Format error",code:_("INVALID_AMOUNT","nominal harus antara Rp1000 dan Rp10000000")}),e.jsxs("table",{className:"ptable",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"HTTP"}),e.jsx("th",{children:"Kode"}),e.jsx("th",{children:"Arti & solusi"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"400"}),e.jsx("td",{children:e.jsx("code",{children:"VALIDATION"})}),e.jsx("td",{children:"Format field salah (mis. callback_url bukan http/https)."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"400"}),e.jsx("td",{children:e.jsx("code",{children:"INVALID_AMOUNT"})}),e.jsx("td",{children:"Nominal di luar Rp1.000–Rp10.000.000."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"400"}),e.jsx("td",{children:e.jsx("code",{children:"NO_QRIS"})}),e.jsx("td",{children:"Belum ada QRIS aktif. Tambahkan di menu QRIS Saya."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"401"}),e.jsx("td",{children:e.jsx("code",{children:"UNAUTHORIZED"})}),e.jsx("td",{children:"API Key salah, kosong, atau sudah di-generate ulang."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"402"}),e.jsx("td",{children:e.jsx("code",{children:"INSUFFICIENT_BALANCE"})}),e.jsxs("td",{children:["Saldo Aktif tidak cukup untuk biaya layanan 0,2%. Isi di menu ",e.jsx(v,{to:"/saldo-aktif",children:"Saldo Aktif"}),"."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"403"}),e.jsx("td",{children:e.jsx("code",{children:"ACCOUNT_SUSPENDED"})}),e.jsxs("td",{children:["Akun ditangguhkan. Hubungi admin lewat ",e.jsx(v,{to:"/ticket",children:"Tiket"}),"."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"403"}),e.jsx("td",{children:e.jsx("code",{children:"MERCHANT_INACTIVE"})}),e.jsx("td",{children:"Toko dinonaktifkan di menu Merchant."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"404"}),e.jsx("td",{children:e.jsx("code",{children:"NOT_FOUND"})}),e.jsx("td",{children:"Transaksi tidak ditemukan atau milik toko lain."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"409"}),e.jsx("td",{children:e.jsx("code",{children:"NOT_PENDING"})}),e.jsx("td",{children:"Transaksi sudah lunas/batal/kedaluwarsa."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"409"}),e.jsx("td",{children:e.jsx("code",{children:"NO_UNIQUE_CODE"})}),e.jsx("td",{children:"Kode unik untuk nominal ini sedang habis. Coba lagi sebentar."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"429"}),e.jsx("td",{children:e.jsx("code",{children:"RATE_LIMITED"})}),e.jsxs("td",{children:["Melebihi batas request. Hormati header ",e.jsx("code",{children:"Retry-After"}),"."]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"429"}),e.jsx("td",{children:e.jsx("code",{children:"TOO_MANY_PENDING"})}),e.jsx("td",{children:"Terlalu banyak transaksi menunggu. Batalkan yang tidak terpakai."})]})]})]})]})},S=[{icon:te,title:"Toko Anda",sub:"Buat transaksi",log:["POST /v1/invoices","201 Created · total_amount 150.123"]},{icon:re,title:"APIQris",sub:"QR dinamis + kode unik",log:["QR dibuat","Rp150.000 + kode unik 123"]},{icon:de,title:"Pembeli",sub:"Scan & bayar",log:["Scan QRIS","GoPay · DANA · OVO · m-banking"]},{icon:ke,title:"Terdeteksi",sub:"Status paid",log:["status: pending → paid","dalam hitungan detik"]},{icon:le,title:"Server Anda",sub:"Callback bertanda tangan",log:["POST tokoanda.com/webhook","invoice.paid · 200 OK"]},{icon:ce,title:"Rekening Anda",sub:"Dana langsung masuk",log:["+ Rp150.123","biaya 0,2% dari Saldo Aktif"]}];function Se(){const[a,n]=o.useState(0),[s,i]=o.useState(!1);o.useEffect(()=>{if(s)return;const r=setInterval(()=>n(d=>(d+1)%S.length),2200);return()=>clearInterval(r)},[s]);const t=S[a];return e.jsxs("div",{className:"fa",onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:[e.jsxs("div",{className:"fa-track",children:[e.jsxs("div",{className:"fa-line",children:[e.jsx("span",{className:"fa-fill",style:{width:`${a/(S.length-1)*100}%`}}),e.jsx("span",{className:"fa-packet",style:{left:`${a/(S.length-1)*100}%`}})]}),S.map((r,d)=>e.jsxs("button",{type:"button",className:`fa-node ${d===a?"on":d<a?"done":""}`,onClick:()=>n(d),children:[e.jsxs("span",{className:"fa-ic",children:[e.jsx(r.icon,{size:20}),d<a&&e.jsx("i",{className:"fa-tick",children:e.jsx(O,{size:10})})]}),e.jsx("strong",{children:r.title}),e.jsx("small",{children:r.sub})]},r.title))]}),e.jsxs("div",{className:"fa-log",children:[e.jsxs("span",{className:"fa-step",children:["Langkah ",a+1,"/",S.length]}),e.jsx("code",{children:t.log[0]}),e.jsx("span",{className:"fa-arrow",children:"→"}),e.jsx("code",{className:"ok",children:t.log[1]})]},a)]})}function C({label:a,hint:n,value:s,secret:i}){const[t,r]=o.useState(!i),[d,l]=o.useState(!1),m=s?t?s:s.slice(0,12)+"•".repeat(20):"—";return e.jsxs("div",{className:"cred2-row",children:[e.jsxs("div",{className:"cred2-label",children:[e.jsx("strong",{children:a}),n&&e.jsx("small",{children:n})]}),e.jsx("code",{className:`cred2-val ${i&&!t?"masked":""}`,children:m}),e.jsxs("div",{className:"cred2-act",children:[i&&e.jsx("button",{type:"button",disabled:!s,title:t?"Sembunyikan":"Tampilkan",onClick:()=>r(u=>!u),children:t?e.jsx(oe,{size:14}):e.jsx(he,{size:14})}),e.jsx("button",{type:"button",disabled:!s,title:"Salin",className:d?"ok":"",onClick:async()=>{await K(s)&&(l(!0),setTimeout(()=>l(!1),1200))},children:d?e.jsx(O,{size:14}):e.jsx(D,{size:14})})]})]})}function Ee(){const a=F(),[n,s]=o.useState(null);return o.useEffect(()=>{Q("/api/webhook/deliveries?limit=30").then(i=>s(i.items)).catch(i=>a(i.message,"error"))},[]),e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"30 pengiriman callback terakhir ke server Anda. Pengiriman yang gagal bisa dikirim ulang manual."}),n?n.length===0?e.jsx(Z,{title:"Belum ada pengiriman callback"}):e.jsx("div",{className:"table-wrap",children:e.jsxs("table",{className:"data-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Waktu"}),e.jsx("th",{children:"Event"}),e.jsx("th",{children:"Status"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:n.map(i=>{var t,r;return e.jsxs("tr",{children:[e.jsx("td",{children:ee(i.created_at)}),e.jsxs("td",{children:[e.jsx("strong",{children:i.event}),e.jsx("small",{className:"mono",children:((r=(t=i.payload)==null?void 0:t.data)==null?void 0:r.ref_id)||""})]}),e.jsxs("td",{children:[e.jsx(ae,{status:i.status}),e.jsxs("small",{children:["HTTP ",i.http_status||"—"," · ",i.attempt,"/",i.max_attempts,i.last_error&&` · ${i.last_error}`]})]}),e.jsx("td",{children:i.status!=="pending"&&e.jsx("button",{className:"button button-ghost",style:{padding:"4px 10px"},onClick:async()=>{try{await Q(`/api/webhook/deliveries/${i.id}/resend`,{method:"POST"}),a("Dikirim ulang.","success")}catch(d){a(d.message,"error")}},children:"Ulang"})})]},i.id)})})]})}):null]})}function we({base:a,shops:n,shop:s}){const i=F(),[t,r]=o.useState(""),d=n.find(h=>h.id===t)||s,[l,m]=o.useState({order_id:"CONTOH-"+Date.now().toString(36).toUpperCase(),amount:"1000",redirect_url:"",keterangan:"Contoh pembayaran Mode Redirect"}),[u,I]=o.useState(""),[E,T]=o.useState("");o.useEffect(()=>{d&&!l.redirect_url&&m(h=>({...h,redirect_url:d.return_url||d.website||""}))},[d==null?void 0:d.id]),o.useEffect(()=>{let h=!0;if(!(d!=null&&d.private_key)||!l.order_id||!/^\d+$/.test(l.amount)){I(""),T("");return}const p=l.redirect_url.trim();return Ne(d.private_key,`${d.code}|${l.order_id.trim()}|${Number(l.amount)}|${p}`).then(A=>{if(!h)return;const b=new URLSearchParams({order_id:l.order_id.trim(),amount:String(Number(l.amount))});p&&b.set("redirect_url",p),l.keterangan.trim()&&b.set("keterangan",l.keterangan.trim()),b.set("signature",A),T(A),I(`${a}/bayar/${d.code}?${b}`)}).catch(()=>I("")),()=>{h=!1}},[d==null?void 0:d.id,d==null?void 0:d.private_key,l,a]);const y=h=>p=>m({...l,[h]:p.target.value});return d?e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["Isi form untuk membuat link Mode Redirect yang ",e.jsx("b",{children:"asli dan valid"})," untuk toko Anda. Signature dihitung di browser ini dengan Private Key toko. Ini hanya untuk demo; di website Anda hitung signature di server."]}),e.jsxs("div",{className:"gen",children:[e.jsxs("div",{className:"form gen-form",children:[n.length>1&&e.jsxs("label",{children:[e.jsx("span",{children:"Toko"}),e.jsx("select",{value:d.id,onChange:h=>{r(h.target.value),m(p=>({...p,redirect_url:""}))},children:n.map(h=>e.jsxs("option",{value:h.id,children:[h.name," · ",h.code]},h.id))})]}),e.jsxs("div",{className:"form-row",children:[e.jsxs("label",{children:[e.jsx("span",{children:"order_id"}),e.jsx("input",{value:l.order_id,onChange:y("order_id")})]}),e.jsxs("label",{children:[e.jsx("span",{children:"amount (Rp)"}),e.jsx("input",{value:l.amount,onChange:y("amount"),inputMode:"numeric"})]})]}),e.jsxs("label",{children:[e.jsx("span",{children:"redirect_url (opsional)"}),e.jsx("input",{value:l.redirect_url,onChange:y("redirect_url"),placeholder:"https://tokoanda.com/selesai"})]}),e.jsxs("label",{children:[e.jsx("span",{children:"keterangan"}),e.jsx("input",{value:l.keterangan,onChange:y("keterangan")})]}),e.jsxs("button",{type:"button",className:"button button-ghost",onClick:()=>m({...l,order_id:"CONTOH-"+Date.now().toString(36).toUpperCase()}),children:[e.jsx(_e,{size:13})," order_id baru"]})]}),e.jsxs("div",{className:"gen-out",children:[e.jsx("small",{className:"hint",children:"STRING YANG DITANDATANGANI"}),e.jsx("div",{className:"gen-link mono",children:`${d.code}|${l.order_id.trim()}|${l.amount}|${l.redirect_url.trim()}`}),e.jsx("small",{className:"hint",children:"SIGNATURE"}),e.jsx("div",{className:"gen-link mono",children:E||"—"}),e.jsx("small",{className:"hint",children:"LINK REDIRECT"}),e.jsx("div",{className:"gen-link mono",children:u||"Lengkapi order_id & amount (angka)."}),e.jsxs("div",{className:"button-row",children:[e.jsxs("button",{type:"button",className:"button button-primary",disabled:!u,onClick:async()=>i(await K(u)?"Link disalin.":"Gagal menyalin","success"),children:[e.jsx(D,{size:13})," Salin link"]}),e.jsxs("a",{className:`button button-ghost ${u?"":"disabled"}`,href:u||void 0,target:"_blank",rel:"noopener noreferrer",children:[e.jsx(ie,{size:13})," Buka (buat tagihan)"]})]})]})]}),e.jsxs(k,{warn:!0,children:["Membuka link membuat transaksi ",e.jsx("b",{children:"nyata"})," (pending, otomatis kedaluwarsa bila tidak dibayar). Ubah ",e.jsx("code",{children:"amount"})," di URL → signature tidak valid → ditolak."]})]}):e.jsx("p",{className:"hint",children:"Memuat toko…"})}function $e(a,n){const s=[{lang:"bash",code:`curl -X POST ${a}/v1/invoices \\
  -H "x-api-key: API_KEY_ANDA" \\
  -H "Content-Type: application/json" \\
  -d '{
    "order_id": "INV-1001",
    "amount": 150000,
    "keterangan": "Pembayaran Invoice #1001",
    "whatsapp_buyer": "628123456789",
    "callback_url": "https://tokoanda.com/webhook/apiqris",
    "redirect_url": "https://tokoanda.com/selesai",
    "metadata": {"user_id": 42}
  }'`},{lang:"php",code:`<?php
$ch = curl_init('${a}/v1/invoices');
curl_setopt_array($ch, [
    CURLOPT_POST           => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT        => 30,
    CURLOPT_HTTPHEADER     => [
        'x-api-key: ' . getenv('APIQRIS_API_KEY'),
        'Content-Type: application/json',
    ],
    CURLOPT_POSTFIELDS => json_encode([
        'order_id'     => 'INV-1001',
        'amount'       => 150000,
        'keterangan'   => 'Pembayaran Invoice #1001',
        'redirect_url' => 'https://tokoanda.com/selesai',
        'metadata'     => ['user_id' => 42],
    ]),
]);
$res  = json_decode(curl_exec($ch), true);
$code = curl_getinfo($ch, CURLINFO_HTTP_CODE);

if ($code !== 201) {
    die('Gagal: ' . ($res['error']['message'] ?? 'unknown'));
}
$inv = $res['data'];
// Simpan $inv['id'] ke pesanan, lalu arahkan pembeli ke halaman bayar:
header('Location: ' . $inv['pay_url']);
exit;`},{lang:"javascript",code:`// Node.js 18+ (fetch bawaan)
const res = await fetch('${a}/v1/invoices', {
  method: 'POST',
  headers: {
    'x-api-key': process.env.APIQRIS_API_KEY,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    order_id: 'INV-1001',
    amount: 150000,
    keterangan: 'Pembayaran Invoice #1001',
    redirect_url: 'https://tokoanda.com/selesai',
    metadata: { user_id: 42 },
  }),
});
const body = await res.json();
if (!res.ok) throw new Error(body.error?.message);

const inv = body.data;
console.log(inv.total_amount, inv.pay_url);
// Express: res.redirect(inv.pay_url)`},{lang:"python",code:`import os, requests

res = requests.post(
    "${a}/v1/invoices",
    headers={"x-api-key": os.environ["APIQRIS_API_KEY"]},
    json={
        "order_id": "INV-1001",
        "amount": 150000,
        "keterangan": "Pembayaran Invoice #1001",
        "redirect_url": "https://tokoanda.com/selesai",
        "metadata": {"user_id": 42},
    },
    timeout=30,
)
body = res.json()
if res.status_code != 201:
    raise Exception(body["error"]["message"])

inv = body["data"]
print(inv["total_amount"], inv["pay_url"])
# Flask/Django: return redirect(inv["pay_url"])`},{lang:"go",code:`payload, _ := json.Marshal(map[string]any{
	"order_id":     "INV-1001",
	"amount":       150000,
	"keterangan":   "Pembayaran Invoice #1001",
	"redirect_url": "https://tokoanda.com/selesai",
})
req, _ := http.NewRequest("POST", "${a}/v1/invoices", bytes.NewReader(payload))
req.Header.Set("x-api-key", os.Getenv("APIQRIS_API_KEY"))
req.Header.Set("Content-Type", "application/json")

resp, err := (&http.Client{Timeout: 30 * time.Second}).Do(req)
if err != nil {
	log.Fatal(err)
}
defer resp.Body.Close()

var out struct {
	Data struct {
		ID          string \`json:"id"\`
		TotalAmount int64  \`json:"total_amount"\`
		PayURL      string \`json:"pay_url"\`
	} \`json:"data"\`
	Error *struct{ Code, Message string } \`json:"error"\`
}
json.NewDecoder(resp.Body).Decode(&out)
if out.Error != nil {
	log.Fatal(out.Error.Message)
}
fmt.Println(out.Data.TotalAmount, out.Data.PayURL)`}],i=[{lang:"bash",code:`curl ${a}/v1/invoices/INV-1001 \\
  -H "x-api-key: API_KEY_ANDA"

# → {"data": {"ref_id": "INV-1001", "status": "paid", "total_amount": 150123,
#             "paid_at": "2026-10-17T20:15:02+07:00", "withdrawal_code": "", ...}}`},{lang:"php",code:`<?php
$ch = curl_init('${a}/v1/invoices/' . rawurlencode('INV-1001'));
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER     => ['x-api-key: ' . getenv('APIQRIS_API_KEY')],
]);
$inv = json_decode(curl_exec($ch), true)['data'] ?? null;

if ($inv && $inv['status'] === 'paid') {
    echo 'Lunas pada ' . $inv['paid_at'];
}`},{lang:"javascript",code:`const res = await fetch('${a}/v1/invoices/' + encodeURIComponent('INV-1001'), {
  headers: { 'x-api-key': process.env.APIQRIS_API_KEY },
});
const { data: inv } = await res.json();
if (inv.status === 'paid') console.log('Lunas', inv.paid_at);`},{lang:"python",code:`inv = requests.get(
    "${a}/v1/invoices/INV-1001",
    headers={"x-api-key": os.environ["APIQRIS_API_KEY"]},
    timeout=15,
).json()["data"]

if inv["status"] == "paid":
    print("Lunas", inv["paid_at"])`},{lang:"go",code:`req, _ := http.NewRequest("GET", "${a}/v1/invoices/"+url.PathEscape("INV-1001"), nil)
req.Header.Set("x-api-key", os.Getenv("APIQRIS_API_KEY"))
resp, err := http.DefaultClient.Do(req)
if err != nil {
	log.Fatal(err)
}
defer resp.Body.Close()

var out struct {
	Data struct{ Status, PaidAt string } \`json:"data"\`
}
json.NewDecoder(resp.Body).Decode(&out)
fmt.Println(out.Data.Status)`}],t=[{lang:"php",code:`<?php
// Jalankan di SERVER saat pembeli menekan "Bayar".
$kodeToko   = '${n}';
$privateKey = getenv('APIQRIS_PRIVATE_KEY');   // whsec_… (menu Merchant)
$orderId    = 'INV-1001';
$amount     = 25000;                           // integer, tanpa titik
$redirect   = 'https://tokoanda.com/selesai';  // boleh '' (pakai Return URL toko)

$signature = hash_hmac('sha256', "$kodeToko|$orderId|$amount|$redirect", $privateKey);

$url = '${a}/bayar/' . $kodeToko . '?' . http_build_query([
    'order_id'     => $orderId,
    'amount'       => $amount,
    'redirect_url' => $redirect,
    'keterangan'   => 'Pembelian Paket Premium',
    'whatsapp'     => '628123456789',
    'signature'    => $signature,
]);

header('Location: ' . $url);
exit;`},{lang:"javascript",code:`import crypto from 'node:crypto';

const KODE_TOKO = '${n}';
const PRIVATE_KEY = process.env.APIQRIS_PRIVATE_KEY;

function apiqrisLink({ orderId, amount, redirectUrl = '', keterangan = '' }) {
  const signature = crypto
    .createHmac('sha256', PRIVATE_KEY)
    .update(\`\${KODE_TOKO}|\${orderId}|\${amount}|\${redirectUrl}\`)
    .digest('hex');
  const q = new URLSearchParams({ order_id: orderId, amount: String(amount) });
  if (redirectUrl) q.set('redirect_url', redirectUrl);
  if (keterangan) q.set('keterangan', keterangan);
  q.set('signature', signature);
  return \`${a}/bayar/\${KODE_TOKO}?\${q}\`;
}

// Express
app.post('/checkout', (req, res) => {
  res.redirect(apiqrisLink({
    orderId: 'INV-1001',
    amount: 25000,
    redirectUrl: 'https://tokoanda.com/selesai',
    keterangan: 'Pembelian Paket Premium',
  }));
});`},{lang:"python",code:`import hmac, hashlib, os
from urllib.parse import urlencode

KODE_TOKO = "${n}"
PRIVATE_KEY = os.environ["APIQRIS_PRIVATE_KEY"]

def apiqris_link(order_id, amount, redirect_url="", keterangan=""):
    msg = f"{KODE_TOKO}|{order_id}|{amount}|{redirect_url}"
    signature = hmac.new(PRIVATE_KEY.encode(), msg.encode(), hashlib.sha256).hexdigest()
    params = {"order_id": order_id, "amount": amount}
    if redirect_url:
        params["redirect_url"] = redirect_url
    if keterangan:
        params["keterangan"] = keterangan
    params["signature"] = signature
    return f"${a}/bayar/{KODE_TOKO}?" + urlencode(params)

# Flask: return redirect(apiqris_link("INV-1001", 25000, "https://tokoanda.com/selesai"))`},{lang:"go",code:`func apiqrisLink(orderID string, amount int64, redirectURL string) string {
	const kodeToko = "${n}"
	mac := hmac.New(sha256.New, []byte(os.Getenv("APIQRIS_PRIVATE_KEY")))
	fmt.Fprintf(mac, "%s|%s|%d|%s", kodeToko, orderID, amount, redirectURL)

	q := url.Values{}
	q.Set("order_id", orderID)
	q.Set("amount", strconv.FormatInt(amount, 10))
	if redirectURL != "" {
		q.Set("redirect_url", redirectURL)
	}
	q.Set("signature", hex.EncodeToString(mac.Sum(nil)))
	return "${a}/bayar/" + kodeToko + "?" + q.Encode()
}

// http.Redirect(w, r, apiqrisLink("INV-1001", 25000, "https://tokoanda.com/selesai"), http.StatusFound)`},{lang:"xml",title:"HTML (link statis)",code:`<!-- Link dibuat server (PHP/Node/…) lalu dicetak ke halaman -->
<a href="${a}/bayar/${n}?order_id=INV-1001&amount=25000&redirect_url=https%3A%2F%2Ftokoanda.com%2Fselesai&signature=<?= $signature ?>"
   class="btn btn-primary">
  Bayar dengan QRIS
</a>`}],r=[{lang:"php",code:`<?php
// https://tokoanda.com/selesai
$privateKey = getenv('APIQRIS_PRIVATE_KEY');
$expected = hash_hmac('sha256', implode('|', [
    $_GET['order_id'] ?? '', $_GET['status'] ?? '', $_GET['total'] ?? '', $_GET['invoice_id'] ?? '',
]), $privateKey);

if (!hash_equals($expected, $_GET['signature'] ?? '')) {
    http_response_code(400);
    exit('Signature tidak valid');
}
if ($_GET['status'] === 'paid') {
    echo 'Terima kasih! Pembayaran pesanan ' . htmlspecialchars($_GET['order_id']) . ' diterima.';
} else {
    echo 'Pembayaran belum selesai (' . htmlspecialchars($_GET['status']) . ').';
}`},{lang:"javascript",code:`app.get('/selesai', (req, res) => {
  const { order_id = '', status = '', total = '', invoice_id = '', signature = '' } = req.query;
  const expected = crypto.createHmac('sha256', process.env.APIQRIS_PRIVATE_KEY)
    .update([order_id, status, total, invoice_id].join('|')).digest('hex');
  const ok = signature.length === expected.length &&
    crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
  if (!ok) return res.status(400).send('Signature tidak valid');
  res.render(status === 'paid' ? 'sukses' : 'gagal', { orderId: order_id });
});`},{lang:"python",code:`@app.get("/selesai")
def selesai():
    a = request.args
    msg = "|".join([a.get("order_id", ""), a.get("status", ""), a.get("total", ""), a.get("invoice_id", "")])
    expected = hmac.new(PRIVATE_KEY.encode(), msg.encode(), hashlib.sha256).hexdigest()
    if not hmac.compare_digest(expected, a.get("signature", "")):
        abort(400, "Signature tidak valid")
    return "Lunas!" if a["status"] == "paid" else "Belum dibayar"`},{lang:"go",code:`func selesai(w http.ResponseWriter, r *http.Request) {
	q := r.URL.Query()
	mac := hmac.New(sha256.New, []byte(os.Getenv("APIQRIS_PRIVATE_KEY")))
	mac.Write([]byte(strings.Join([]string{q.Get("order_id"), q.Get("status"), q.Get("total"), q.Get("invoice_id")}, "|")))
	if !hmac.Equal([]byte(hex.EncodeToString(mac.Sum(nil))), []byte(q.Get("signature"))) {
		http.Error(w, "Signature tidak valid", http.StatusBadRequest)
		return
	}
	fmt.Fprintf(w, "Status pesanan %s: %s", q.Get("order_id"), q.Get("status"))
}`}],d=[{lang:"php",code:`<?php
// https://tokoanda.com/webhook/apiqris
$privateKey = getenv('APIQRIS_PRIVATE_KEY');
$raw = file_get_contents('php://input');                 // body MENTAH
parse_str(str_replace(',', '&', $_SERVER['HTTP_X_APIQRIS_SIGNATURE'] ?? ''), $sig); // t=…&v1=…

$expected = hash_hmac('sha256', ($sig['t'] ?? '') . '.' . $raw, $privateKey);
if (!hash_equals($expected, $sig['v1'] ?? '') || abs(time() - (int)($sig['t'] ?? 0)) > 600) {
    http_response_code(401);
    exit('invalid signature');
}

$event = json_decode($raw, true);
$inv   = $event['data'];

if ($event['event'] === 'invoice.paid') {
    $order = $db->findOrder($inv['ref_id']);              // contoh
    if ($order && $order->status === 'pending' && (int)$inv['amount'] === (int)$order->total) {
        $order->markPaid($inv['id'], $inv['paid_at']);    // kirim produk di sini
    }
}
http_response_code(200);
echo 'OK';`},{lang:"javascript",code:`import express from 'express';
import crypto from 'node:crypto';

const app = express();

// PENTING: pakai body mentah, bukan express.json(), agar signature cocok.
app.post('/webhook/apiqris', express.raw({ type: 'application/json' }), async (req, res) => {
  const raw = req.body.toString('utf8');
  const sig = Object.fromEntries(String(req.get('X-APIQris-Signature') || '')
    .split(',').map((p) => p.split('=')));
  const expected = crypto.createHmac('sha256', process.env.APIQRIS_PRIVATE_KEY)
    .update(\`\${sig.t}.\${raw}\`).digest('hex');

  const valid = sig.v1 && sig.v1.length === expected.length &&
    crypto.timingSafeEqual(Buffer.from(sig.v1), Buffer.from(expected));
  if (!valid || Math.abs(Date.now() / 1000 - Number(sig.t)) > 600) return res.sendStatus(401);

  const { event, data } = JSON.parse(raw);
  if (event === 'invoice.paid') {
    await markOrderPaid(data.ref_id, data); // idempoten: abaikan bila sudah lunas
  }
  res.sendStatus(200);
});`},{lang:"python",code:`import hmac, hashlib, json, os, time
from flask import Flask, request, abort

app = Flask(__name__)
PRIVATE_KEY = os.environ["APIQRIS_PRIVATE_KEY"].encode()

@app.post("/webhook/apiqris")
def apiqris_webhook():
    raw = request.get_data()  # bytes mentah
    sig = dict(p.split("=", 1) for p in request.headers.get("X-APIQris-Signature", "").split(",") if "=" in p)
    expected = hmac.new(PRIVATE_KEY, sig.get("t", "").encode() + b"." + raw, hashlib.sha256).hexdigest()
    if not hmac.compare_digest(expected, sig.get("v1", "")) or abs(time.time() - int(sig.get("t", 0))) > 600:
        abort(401)

    evt = json.loads(raw)
    if evt["event"] == "invoice.paid":
        mark_order_paid(evt["data"]["ref_id"], evt["data"])  # idempoten
    return "OK", 200`},{lang:"go",code:`func apiqrisWebhook(w http.ResponseWriter, r *http.Request) {
	raw, _ := io.ReadAll(io.LimitReader(r.Body, 1<<20))
	sig := map[string]string{}
	for _, p := range strings.Split(r.Header.Get("X-APIQris-Signature"), ",") {
		if k, v, ok := strings.Cut(p, "="); ok {
			sig[k] = v
		}
	}
	mac := hmac.New(sha256.New, []byte(os.Getenv("APIQRIS_PRIVATE_KEY")))
	mac.Write([]byte(sig["t"] + "."))
	mac.Write(raw)
	ts, _ := strconv.ParseInt(sig["t"], 10, 64)
	if !hmac.Equal([]byte(hex.EncodeToString(mac.Sum(nil))), []byte(sig["v1"])) || math.Abs(float64(time.Now().Unix()-ts)) > 600 {
		http.Error(w, "invalid signature", http.StatusUnauthorized)
		return
	}

	var evt struct {
		Event string \`json:"event"\`
		Data  struct {
			RefID  string \`json:"ref_id"\`
			Amount int64  \`json:"amount"\`
		} \`json:"data"\`
	}
	json.Unmarshal(raw, &evt)
	if evt.Event == "invoice.paid" {
		markOrderPaid(evt.Data.RefID) // idempoten
	}
	w.WriteHeader(http.StatusOK)
}`}],l=`{
  "data": {
    "id": "3382463b-5c1e-4a8f-9d2b-7e0a1f6c9b11",
    "ref_id": "INV-1001",
    "status": "pending",
    "amount": 150000,
    "unique_code": 123,
    "total_amount": 150123,
    "description": "Pembayaran Invoice #1001",
    "fee": 0,
    "qris_content": "00020101021226650013ID.CO.QRIS.WWW…6304A1B2",
    "qr_image_url": "${a}/api/public/invoices/3382463b-…/qr.png",
    "pay_url": "${a}/pay/3382463b-…",
    "merchant_code": "${n}",
    "merchant_name": "Toko Anda",
    "metadata": {"user_id": 42},
    "expires_at": "2026-10-17T21:51:45+07:00",
    "created_at": "2026-10-17T20:51:45+07:00"
  }
}`,m=`{
  "event": "invoice.paid",
  "sent_at": "2026-10-17T20:52:10+07:00",
  "data": {
    "id": "3382463b-5c1e-4a8f-9d2b-7e0a1f6c9b11",
    "ref_id": "INV-1001",
    "status": "paid",
    "amount": 150000,
    "unique_code": 123,
    "total_amount": 150123,
    "fee": 300,
    "paid_at": "2026-10-17T20:52:08+07:00",
    "paid_by": "BUDI SANTOSO",
    "merchant_code": "${n}",
    "merchant_name": "Toko Anda",
    "metadata": {"user_id": 42},
    "pay_url": "${a}/pay/3382463b-…"
  }
}`,u=`<!-- Tombol bayar: pay_url dari respons Create Transaction -->
<button data-apiqris="PAY_URL_DARI_API"
        data-redirect="https://tokoanda.com/selesai"
        class="btn btn-primary">
  Bayar Sekarang
</button>

<!-- Library Snap APIQris (taruh sebelum </body>) -->
<script src="${a}/snap.js"><\/script>`,I=`// Atau kendalikan sendiri lewat JavaScript
document.querySelector('#bayar').addEventListener('click', () => {
  APIQris.pay('PAY_URL_DARI_API', {
    onPaid(d) {
      console.log('Lunas', d.ref_id, d.total_amount);
      window.location.href = '/pesanan/' + d.ref_id;
    },
    onClose(reason) {
      // pembeli menutup popup sebelum membayar
    },
  });
});`,E=[{lang:"bash",code:`curl ${a}/v1/me \\
  -H "x-api-key: API_KEY_ANDA"`},{lang:"php",code:`<?php
$ch = curl_init('${a}/v1/me');
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER     => ['x-api-key: ' . getenv('APIQRIS_API_KEY')],
]);
$res = json_decode(curl_exec($ch), true);
echo $res['data']['store']['name'] ?? $res['error']['message'];`},{lang:"javascript",code:`const res = await fetch('${a}/v1/me', {
  headers: { 'x-api-key': process.env.APIQRIS_API_KEY },
});
console.log(await res.json());`},{lang:"python",code:`r = requests.get("${a}/v1/me", headers={"x-api-key": os.environ["APIQRIS_API_KEY"]}, timeout=15)
print(r.json())`}],T=[{lang:"bash",code:`curl "${a}/v1/invoices?page=1&limit=25&status=paid" \\
  -H "x-api-key: API_KEY_ANDA"`},{lang:"php",code:`<?php
$q  = http_build_query(['page' => 1, 'limit' => 25, 'status' => 'paid']);
$ch = curl_init('${a}/v1/invoices?' . $q);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER     => ['x-api-key: ' . getenv('APIQRIS_API_KEY')],
]);
foreach (json_decode(curl_exec($ch), true)['data'] as $inv) {
    echo $inv['ref_id'] . ' ' . $inv['status'] . PHP_EOL;
}`},{lang:"javascript",code:`const q = new URLSearchParams({ page: 1, limit: 25, status: 'paid' });
const res = await fetch('${a}/v1/invoices?' + q, {
  headers: { 'x-api-key': process.env.APIQRIS_API_KEY },
});
const { data } = await res.json();`},{lang:"python",code:`r = requests.get(
    "${a}/v1/invoices",
    params={"page": 1, "limit": 25, "status": "paid"},
    headers={"x-api-key": os.environ["APIQRIS_API_KEY"]},
    timeout=15,
)
for inv in r.json()["data"]:
    print(inv["ref_id"], inv["status"])`}],y=[{lang:"bash",code:`curl -X POST ${a}/v1/invoices/INV-1001/cancel \\
  -H "x-api-key: API_KEY_ANDA"`},{lang:"php",code:`<?php
$ch = curl_init('${a}/v1/invoices/' . rawurlencode('INV-1001') . '/cancel');
curl_setopt_array($ch, [
    CURLOPT_POST           => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER     => ['x-api-key: ' . getenv('APIQRIS_API_KEY')],
]);
$res = json_decode(curl_exec($ch), true);`},{lang:"javascript",code:`await fetch('${a}/v1/invoices/INV-1001/cancel', {
  method: 'POST',
  headers: { 'x-api-key': process.env.APIQRIS_API_KEY },
});`},{lang:"python",code:`requests.post(
    "${a}/v1/invoices/INV-1001/cancel",
    headers={"x-api-key": os.environ["APIQRIS_API_KEY"]},
    timeout=15,
)`}],h=[{lang:"php",code:`<?php
$privateKey = getenv('APIQRIS_PRIVATE_KEY');      // whsec_…

// Link Mode Redirect
$signature = hash_hmac('sha256', '${n}|INV-1001|25000|https://tokoanda.com/selesai', $privateKey);

// Verifikasi (halaman kembali / callback)
$valid = hash_equals($expected, $received);`},{lang:"javascript",code:`import crypto from 'node:crypto';

const sign = (msg) => crypto
  .createHmac('sha256', process.env.APIQRIS_PRIVATE_KEY)
  .update(msg)
  .digest('hex');

const signature = sign('${n}|INV-1001|25000|https://tokoanda.com/selesai');`},{lang:"python",code:`import hmac, hashlib, os

def sign(msg: str) -> str:
    return hmac.new(os.environ["APIQRIS_PRIVATE_KEY"].encode(), msg.encode(), hashlib.sha256).hexdigest()

signature = sign("${n}|INV-1001|25000|https://tokoanda.com/selesai")`},{lang:"go",code:`func sign(msg string) string {
	mac := hmac.New(sha256.New, []byte(os.Getenv("APIQRIS_PRIVATE_KEY")))
	mac.Write([]byte(msg))
	return hex.EncodeToString(mac.Sum(nil))
}

signature := sign("${n}|INV-1001|25000|https://tokoanda.com/selesai")`}],p=`{
  "data": {
    "id": "3382463b-5c1e-4a8f-9d2b-7e0a1f6c9b11",
    "ref_id": "INV-1001",
    "status": "paid",
    "amount": 150000,
    "unique_code": 123,
    "total_amount": 150123,
    "fee": 300,
    "paid_at": "2026-10-17T20:52:08+07:00",
    "paid_by": "BUDI SANTOSO",
    "withdrawal_code": "",
    "merchant_code": "${n}",
    "expires_at": "2026-10-17T21:51:45+07:00",
    "created_at": "2026-10-17T20:51:45+07:00"
  }
}`;return{create:s,status:i,list:T,cancel:y,me:E,signature:h,paidJson:p,redirect:t,returnVerify:r,webhook:d,invoiceJson:l,webhookJson:m,snapHtml:u,snapJs:I}}export{Oe as DocsPage};
