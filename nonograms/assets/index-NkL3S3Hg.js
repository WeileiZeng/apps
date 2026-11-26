var Be=Object.defineProperty;var Ke=(t,e,n)=>e in t?Be(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var I=(t,e,n)=>Ke(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Rt(t){const e=[];let n=0;for(const o of t)o===1?n+=1:n>0&&(e.push(n),n=0);return n>0&&e.push(n),e.length>0?e:[0]}function ee(t,e){const n=Rt(t.map(o=>o===1?1:0));return n.length===e.length&&n.every((o,r)=>o===e[r])}function ne(t,e){if(e.length===1&&e[0]===0)return[!1];const n=e.map(()=>!1),o=t.length,r=(a,d)=>{let l=a?0:o-1,w=a?0:e.length-1;const g=a?1:-1,c=x=>a?x<d:x>=d;let y=a?0:o;for(;w>=0&&w<e.length&&!n[w];){for(;c(l)&&t[l]===2;)l+=g;if(!c(l)||t[l]!==1)break;const x=l;for(;c(l)&&t[l]===1;)l+=g;const P=Math.abs(l-x);if(!(!c(l)||t[l]===2)||P!==e[w])break;n[w]=!0,w+=g,c(l)&&t[l]===2&&(l+=g),y=l}return y},i=r(!0,o);return r(!1,i),n}function _e(t){const e=t.trim().split(`
`).map(o=>o.trim()).filter(o=>o.length>0);if(e.length===0)throw new Error("空图案");const n=e.length;for(const o of e){if(o.length!==n)throw new Error(`图案必须是正方形，得到 ${o.length}×${n}`);for(const r of o)if(r!=="#"&&r!==".")throw new Error(`非法字符 ${r}`)}return e.map(o=>[...o].map(r=>r==="#"?1:0))}function je(t,e){if(e===1)return t.map(r=>r.slice());const n=t.length,o=Array.from({length:n*e},()=>Array(n*e).fill(0));for(let r=0;r<n;r+=1)for(let i=0;i<n;i+=1)if(t[r][i]===1)for(let a=0;a<e;a+=1)for(let d=0;d<e;d+=1)o[r*e+a][i*e+d]=1;return o}function U(t,e,n,o="easy"){const r=n.length;if(r===0||n.some(d=>d.length!==r))throw new Error(`${e} 不是正方形`);const i=n.map(d=>Rt(d)),a=[];for(let d=0;d<r;d+=1)a.push(Rt(n.map(l=>l[d])));return{id:t,name:e,size:r,difficulty:o,solution:n,rowClues:i,colClues:a}}function rt(t,e){for(let n=0;n<e.length;n+=1)for(let o=0;o<e.length;o+=1)if(e[n][o]===1&&t[n][o]!==1||e[n][o]===0&&t[n][o]===1)return!1;return!0}function Ue(t,e){for(let n=0;n<e.length;n+=1)for(let o=0;o<e.length;o+=1){const r=e[n][o]===1?1:2;if(t[n][o]!==r)return!1}return!0}function Ye(t){return t.length===1&&t[0]===0?[]:[...t]}function Tt(t,e,n){for(let o=e;o<n;o+=1)if(t[o]===2)return!1;return!0}function pe(t,e){const n=Ye(t),o=e.length,r=n.length;if(n.reduce((c,y)=>c+y,0)+Math.max(0,r-1)>o)return null;const a=Array.from({length:o+1},()=>Array(r+1).fill(!1));a[0][0]=!0;for(let c=0;c<=o;c+=1)for(let y=0;y<=r;y+=1){if(!a[c][y]||(c<o&&e[c]!==1&&(a[c+1][y]=!0),y>=r||c>=o))continue;const x=c+n[y];x>o||!Tt(e,c,x)||(x===o?y===r-1&&(a[o][y+1]=!0):e[x]!==1&&(a[x+1][y+1]=!0))}if(!a[o][r])return null;const d=Array.from({length:o+1},()=>Array(r+1).fill(!1));d[o][r]=!0;for(let c=o-1;c>=0;c-=1)for(let y=0;y<=r;y+=1){if(y<r){const x=c+n[y];x<=o&&Tt(e,c,x)&&(x===o?y===r-1&&(d[c][y]=!0):e[x]!==1&&d[x+1][y+1]&&(d[c][y]=!0))}e[c]!==1&&d[c+1][y]&&(d[c][y]=!0)}const l=Array(o).fill(!1),w=Array(o).fill(!1);for(let c=0;c<o;c+=1)if(e[c]!==1)for(let y=0;y<=r;y+=1)a[c][y]&&d[c+1][y]&&(w[c]=!0);for(let c=0;c<r;c+=1){const y=n[c];for(let x=0;x+y<=o;x+=1){if(!a[x][c]||!Tt(e,x,x+y))continue;const P=x+y;if(P===o){if(c!==r-1||!d[o][r])continue}else{if(e[P]===1||!d[P+1][c+1])continue;w[P]=!0}for(let q=x;q<P;q+=1)l[q]=!0}}const g=e.slice();for(let c=0;c<o;c+=1){if(e[c]===1&&!l[c]||e[c]===2&&!w[c]||!l[c]&&!w[c])return null;e[c]===0&&(l[c]&&!w[c]?g[c]=1:w[c]&&!l[c]&&(g[c]=2))}return g}function me(t,e,n){return e==="row"?t[n].slice():t.map(o=>o[n])}function We(t,e,n,o){const r=[];if(e==="row"){for(let i=0;i<o.length;i+=1)t[n][i]!==o[i]&&(t[n][i]=o[i],r.push(i));return r}for(let i=0;i<o.length;i+=1)t[i][n]!==o[i]&&(t[i][n]=o[i],r.push(i));return r}function Xe(t,e,n){const o=t.length,r=[],i=new Set,a=(l,w)=>{const g=`${l}:${w}`;i.has(g)||(i.add(g),r.push({axis:l,index:w}))};for(let l=0;l<o;l+=1)a("row",l),a("col",l);let d=0;for(;d<r.length;){const l=r[d];d+=1,i.delete(`${l.axis}:${l.index}`);const w=l.axis==="row"?e[l.index]:n[l.index],g=pe(w,me(t,l.axis,l.index));if(!g)return!1;const c=We(t,l.axis,l.index,g),y=l.axis==="row"?"col":"row";for(const x of c)a(y,x)}return!0}function Ge(t){return t.join(" ")}function Ft(t,e,n,o){const r=t.length,i=o?[o]:["row","col"];for(const a of i)for(let d=0;d<r;d+=1){const l=a==="row"?e[d]:n[d],w=me(t,a,d),g=pe(l,w);if(!g)continue;const c=[];for(let x=0;x<r;x+=1)g[x]!==w[x]&&c.push({r:a==="row"?d:x,c:a==="row"?x:d,mark:g[x]});if(c.length===0)continue;const y=a==="row"?"行":"列";return{lines:[{axis:a,index:d}],changes:c,text:`第 ${d+1} ${y}：线索 ${Ge(l)}，确定 ${c.length} 格`}}return null}function Je(t){return t.map(e=>e.slice())}function ge(t,e,n){const o=t.length;for(let r=0;r<o;r+=1)for(let i=0;i<o;i+=1){if(t[r][i]!==0)continue;const a={};for(const g of[1,2]){const c=Je(t);c[r][i]=g,a[g]=Xe(c,e,n)}if(a[1]===a[2])continue;const d=a[1]?1:2,l=[{axis:"row",index:r},{axis:"col",index:i}],w=d===2?`第 ${r+1} 行第 ${i+1} 列：填上会矛盾，标为空`:`第 ${r+1} 行第 ${i+1} 列：标空会矛盾，这里要填`;return{lines:l,changes:[{r,c:i,mark:d}],text:w}}return null}function Ve(t,e,n,o){const r=Ft(t,e,n,o);if(r)return{step:r,axis:o};const i=o==="row"?"col":"row",a=Ft(t,e,n,i);return a?{step:a,axis:i}:{step:ge(t,e,n),axis:"row"}}function It(t){return Array.from({length:t},()=>Array(t).fill(0))}function Ze(t,e={}){const n=It(t.size),o=t.size*t.size*3;let r=0;for(let i=0;i<o;i+=1){if(Ue(n,t.solution))return{marks:n,probes:r};const a=Ft(n,t.rowClues,t.colClues);if(a){for(const l of a.changes)n[l.r][l.c]=l.mark;continue}if(e.maxProbeSteps!==void 0&&r>=e.maxProbeSteps)return{marks:null,probes:r};if(e.probeUnknownLimit!==void 0&&Qe(n)>e.probeUnknownLimit)return{marks:null,probes:r};const d=ge(n,t.rowClues,t.colClues);if(!d)return{marks:null,probes:r};r+=1;for(const l of d.changes)n[l.r][l.c]=l.mark}return{marks:null,probes:r}}function Qe(t){let e=0;for(const n of t)for(const o of n)o===0&&(e+=1);return e}const ze={easy:24,normal:36,hard:48},ye={easy:1,normal:3,hard:4};function tn(t){const e=[...t.rowClues,...t.colClues];let n=0,o=0,r=0;for(const d of e){const l=d.length===1&&d[0]===0?0:d.length;n+=l,l>o&&(o=l),l>=2&&(r+=1)}let i=0;const a=d=>{let l=0;for(const w of d)w===1?(l+=1,l>i&&(i=l)):l=0};for(const d of t.solution)a(d);for(let d=0;d<t.size;d+=1)a(t.solution.map(l=>l[d]));return{avgRuns:n/e.length,maxRuns:o,longest:i,multi:r/e.length}}function Ht(t,e,n,o,r){const i=t.length,a=Math.max(0,e),d=Math.max(0,n),l=Math.min(i,e+o),w=Math.min(i,n+r);for(let g=d;g<w;g+=1)for(let c=a;c<l;c+=1)t[g][c]=1}function oe(t,e,n,o,r){const i=t.length;for(let a=0;a<i;a+=1)for(let d=0;d<i;d+=1){const l=(d+.5-e)/o,w=(a+.5-n)/r;l*l+w*w<=1&&(t[a][d]=1)}}function qt(t){return Array.from({length:t},()=>Array(t).fill(0))}function Bt(t){let e=0;for(const n of t)for(const o of n)e+=o;return e/(t.length*t.length)}function en(t,e){const n=qt(t),o=t/2;oe(n,o,o,t*(.22+e()*.18),t*(.18+e()*.16));const r=3+Math.floor(e()*4);for(let a=0;a<r;a+=1){const d=Math.max(2,Math.floor(t*(.18+e()*.4))),l=Math.max(2,Math.floor(t*(.18+e()*.4))),w=Math.floor((e()*.6+.05)*Math.max(1,t-d)),g=Math.floor((e()*.6+.05)*Math.max(1,t-l));e()<.55?Ht(n,w,g,d,l):oe(n,w+d/2,g+l/2,Math.max(1.2,d/2),Math.max(1.2,l/2))}const i=Bt(n);return i<.18||i>.72?null:n}function re(t,e,n,o){const r=qt(t);let i=0;for(;i<t;){const d=1+Math.floor(e()*n),l=Math.min(d,t-i);let w=0;for(;w<t;){const g=1+Math.floor(e()*n),c=Math.min(g,t-w);e()<o&&Ht(r,w,i,c,l),w+=c+1}i+=l+1}const a=Bt(r);return a<.2||a>.66?null:r}function se(t,e,n){const o=qt(t);for(let i=0;i<t;i+=1){if(e()<.1)continue;let a=e()<.5?0:1;for(;a<t;){const d=1+Math.floor(e()*n);e()<.84&&Ht(o,a,i,Math.min(d,t-a),1),a+=d+1+(e()<.35?1:0)}}const r=Bt(o);return r<.24||r>.62?null:o}function nn(t,e,n){if(n==="easy")return en(t,e);if(n==="normal"){const r=Math.max(3,Math.min(6,Math.round(t/3)));return e()<.6?re(t,e,r,.82):se(t,e,Math.max(2,r-1))}const o=Math.max(2,Math.min(4,Math.round(t/5)));return e()<.55?re(t,e,o,.76):se(t,e,Math.min(3,o))}function ie(t,e,n,o){return o>ye[t]?!1:t==="easy"?n.longest>=Math.max(2,Math.floor(e*.28))&&n.avgRuns<=2.1:t==="normal"?n.avgRuns>=(e<=5?1.1:1.35)&&n.maxRuns>=2&&n.longest>=3&&n.longest<=Math.ceil(e*.55):n.avgRuns>=(e<=5?1.4:e<=10?1.9:2.5)&&n.maxRuns>=(e<=5?2:3)&&n.longest<=(e<=5?2:Math.max(3,Math.ceil(e*.22)))&&n.multi>=(e<=5?.4:.6)}function on(t,e=Math.random,n="normal"){if(n==="expert")return null;const o=Date.now(),r=n==="hard"?1600:900,i=Math.floor(t*t*(n==="hard"?.34:.42));let a=null,d=-1/0;for(let l=0;l<ze[n]&&!(Date.now()-o>r);l+=1){const w=nn(t,e,n);if(!w)continue;const g=U(`random-${t}-${n}-${l}`,"随机",w,n),c=tn(g);if(!ie(n,t,c,0))continue;const y=Ze(g,{maxProbeSteps:ye[n],probeUnknownLimit:i});if(!y.marks)continue;if(ie(n,t,c,y.probes))return g;const x=c.avgRuns-c.longest/t;x>d&&(a=g,d=x)}return a}const be=[5,10,15,20,25,30,35];function M(t,e,n,o=1,r="easy"){const i=je(_e(n),o);return U(t,e,i,r)}function st(t){return Array.from({length:t},()=>Array(t).fill(0))}function rn(t){const e=st(t),n=t>=20?4:3;for(let o=0;o<t;o+=1)for(let r=0;r<t;r+=1)(o%n===0||r%n===0)&&(e[o][r]=1);return e}function sn(t){const e=st(t);for(let n=0;n<t;n+=1)for(let o=0;o<t;o+=1)(o===0||o===t-1||n%3===0)&&(e[n][o]=1);return e}function ln(t){const e=st(t);for(let n=0;n<t;n+=1)for(let o=0;o<t;o+=1)Math.min(n,o,t-1-n,t-1-o)%3===0&&(e[n][o]=1);return e}function an(t){const e=st(t);for(let n=0;n<t;n+=3)for(let o=0;o<t;o+=3)e[n][o]=1,o+1<t&&(e[n][o+1]=1),n+1<t&&(e[n+1][o]=1),n+1<t&&o+1<t&&(e[n+1][o+1]=1);return e}function cn(t){const e=st(t);for(let n=0;n<t;n+=1)for(let o=0;o<t;o+=1)n%2===0&&o%3!==2&&(e[n][o]=1),n%2===1&&o%3===0&&(e[n][o]=1);return e}function un(t){const e=st(t);for(let n=0;n<t;n+=2)for(let o=0;o<t;o+=3)e[n][o]=1,o+1<t&&(e[n][o+1]=1);return e}function fn(){const t=[];for(const e of be)t.push(U(`${e}-windows`,"窗格",rn(e),"normal")),t.push(U(`${e}-ladder`,"梯子",sn(e),"normal")),e>=10&&t.push(U(`${e}-rings`,"圆环",ln(e),"normal")),t.push(U(`${e}-bricks`,"砖格",an(e),"normal")),t.push(U(`${e}-dominoes`,"骨牌",un(e),"normal")),t.push(U(`${e}-stitches`,"针脚",cn(e),"normal"));return t}const dn=[M("5-cross","十字",`
..#..
..#..
#####
..#..
..#..
`),M("5-heart","心形",`
.#.#.
#####
#####
.###.
..#..
`),M("5-square","方块",`
#####
#...#
#...#
#...#
#####
`),M("10-smile","笑脸",`
...####...
..######..
.##.##.##.
.##.##.##.
.########.
.##.##.##.
.##.##.##.
..######..
...####...
..........
`),M("10-house","房子",`
....##....
...####...
..######..
.########.
##########
####..####
####..####
####..####
####..####
##########
`),M("10-fish","鱼",`
..........
....####..
...######.
..########
.#########
..########
...######.
....####..
.....#....
..........
`),M("15-mushroom","蘑菇",`
...............
.....#####.....
....#######....
...#########...
..###########..
.#############.
###############
.#############.
......###......
......###......
......###......
......###......
......###......
....#######....
...............
`),M("15-cat","猫",`
##...........##
###.........###
.#############.
.#############.
.##.#######.##.
.#############.
.#############.
..###########..
...#########...
....#######....
...#########...
..###########..
.#############.
.##.........##.
.##.........##.
`),M("15-tree","树",`
.......#.......
......###......
.....#####.....
....#######....
...#########...
..###########..
.#############.
###############
....#######....
......###......
......###......
......###......
......###......
......###......
...#########...
`),M("20-boat","船",`
..........
....##....
...####...
....##....
....##....
....##....
##########
.########.
..######..
...####...
`,2),M("20-cup","杯子",`
..........
.########.
.########.
.##....##.
.##....##.
.##....##.
..#....#..
..######..
...####...
..........
`,2),M("20-bird","鸟",`
..........
.....####.
....######
..########
.#########
##########
.#########
..#######.
...#####..
....###...
`,2),M("25-star","星星",`
..#..
.#.#.
#####
.#.#.
..#..
`,5),M("25-crab","螃蟹",`
#...#
#...#
.###.
#####
.###.
`,5),M("25-flower","花",`
..#..
.###.
#####
.###.
..#..
`,5),M("30-castle","城堡",`
.##.##.##.
.##.##.##.
.########.
.########.
.########.
.########.
.########.
.########.
##########
##########
`,3),M("30-penguin","企鹅",`
....##....
...####...
..######..
..######..
...####...
...####...
..######..
..######..
..##..##..
..##..##..
`,3),M("30-rocket","火箭",`
....##....
...####...
...####...
..######..
..######..
..######..
...####...
..######..
.##....##.
##......##
`,3),M("35-dragon","龙",`
#......
###.#..
#####..
.#####.
..####.
...###.
....###
`,5),M("35-sail","帆船",`
...#...
...#...
..###..
.#####.
...#...
.#####.
#######
`,5),M("35-robot","机器人",`
.#####.
.#.#.#.
.#####.
..###..
.#####.
.#####.
.##.##.
`,5),M("10-plane","飞机",`
....##....
...####...
..######..
##########
...####...
...####...
..##..##..
.##....##.
##......##
#........#
`,1)],we=[...dn,...fn()],Dt=new Map;for(const t of we){const e=Dt.get(t.size)??[];e.push(t),Dt.set(t.size,e)}function A(t,e){const n=Dt.get(t)??[];return e?n.filter(o=>o.difficulty===e):n}function le(){return we}const xe="nonogram.v1";function hn(t,e){return!Array.isArray(t)||t.length!==e?!1:t.every(n=>Array.isArray(n)&&n.length===e&&n.every(o=>o===0||o===1||o===2))}function pn(t,e){if(!Array.isArray(t))return[];const n=[];for(const o of t){if(!o||typeof o!="object")continue;const r=o;typeof r.r!="number"||typeof r.c!="number"||r.r<0||r.c<0||r.r>=e||r.c>=e||n.push({r:r.r,c:r.c})}return n}function mn(t,e){return!Array.isArray(t)||t.length!==e?!1:t.every(n=>Array.isArray(n)&&n.length===e&&n.every(o=>o===0||o===1))}function gn(){try{const t=localStorage.getItem(xe);if(!t)return null;const e=JSON.parse(t);return!e||typeof e.size!="number"||!mn(e.solution,e.size)||!hn(e.marks,e.size)||e.tool!=="fill"&&e.tool!=="mark"||typeof e.errors!="number"||typeof e.elapsedMs!="number"?null:(e.mistakes=pn(e.mistakes,e.size),e.difficulty!=="easy"&&e.difficulty!=="normal"&&e.difficulty!=="hard"&&e.difficulty!=="expert"&&delete e.difficulty,e)}catch{return null}}function yn(t){localStorage.setItem(xe,JSON.stringify(t))}function bn(t,e){if(e.r===t.r&&e.c===t.c)return null;if(e.r===t.r)return"row";if(e.c===t.c)return"col";const n=Math.abs(e.c-t.c),o=Math.abs(e.r-t.r);return n>o?"row":o>n?"col":null}function wn(t,e,n){return n==="row"?{r:t.r,c:e.c}:n==="col"?{r:e.r,c:t.c}:{r:t.r,c:t.c}}function xn(t,e){const n=[];if(t.r===e.r){const o=Math.min(t.c,e.c),r=Math.max(t.c,e.c);for(let i=o;i<=r;i+=1)n.push({r:t.r,c:i})}else if(t.c===e.c){const o=Math.min(t.r,e.r),r=Math.max(t.r,e.r);for(let i=o;i<=r;i+=1)n.push({r:i,c:t.c})}else n.push({r:t.r,c:t.c});return n}class Sn{constructor(e,n){I(this,"puzzleEl",null);I(this,"cells",[]);I(this,"rowSlots",[]);I(this,"colSlots",[]);I(this,"cols",0);I(this,"rows",0);I(this,"size",0);I(this,"stroking",!1);I(this,"freshTick",-1);I(this,"observer",null);this.host=e,this.handlers=n,this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(this.host),window.addEventListener("pointerup",()=>this.endStroke()),window.addEventListener("pointercancel",()=>this.endStroke())}mount(e){this.size=e.size;const n=Math.max(1,...e.colClues.map(i=>i.length)),o=Math.max(1,...e.rowClues.map(i=>i.length));this.cols=o+e.size,this.rows=n+e.size,this.cells=[],this.rowSlots=[],this.colSlots=Array.from({length:e.size},()=>[]);const r=document.createElement("div");r.className="puzzle",r.style.setProperty("--cols",String(this.cols)),r.style.setProperty("--rows",String(this.rows));for(let i=0;i<n;i+=1){for(let a=0;a<o;a+=1)r.append(Nt(""));for(let a=0;a<e.size;a+=1){const d=e.colClues[a],l=n-d.length,w=i<l?"":String(d[i-l]),g=Nt(w,w!=="");this.colSlots[a].push(g),r.append(g)}}for(let i=0;i<e.size;i+=1){const a=[],d=e.rowClues[i],l=o-d.length;for(let g=0;g<o;g+=1){const c=g<l?"":String(d[g-l]),y=Nt(c,c!=="");a.push(y),r.append(y)}this.rowSlots.push(a);const w=[];for(let g=0;g<e.size;g+=1){const c=document.createElement("div");c.className="cell",c.dataset.r=String(i),c.dataset.c=String(g),g%5===0&&c.classList.add("edge-l"),i%5===0&&c.classList.add("edge-t"),(g+1)%5===0&&c.classList.add("thick-r"),(i+1)%5===0&&c.classList.add("thick-b"),w.push(c),r.append(c)}this.cells.push(w)}r.addEventListener("contextmenu",i=>i.preventDefault()),r.addEventListener("pointerdown",i=>{if(i.button!==0&&i.button!==2)return;const a=this.cellAt(i.clientX,i.clientY);a&&(i.preventDefault(),this.stroking=!0,this.handlers.onHover(a.r,a.c),this.handlers.onPaintStart(a.r,a.c,i.button))}),r.addEventListener("pointermove",i=>{const a=this.cellAt(i.clientX,i.clientY);if(!a){this.stroking||this.handlers.onHoverEnd();return}this.handlers.onHover(a.r,a.c),this.handlers.onPaintMove(a.r,a.c)}),r.addEventListener("pointerleave",()=>{this.stroking||this.handlers.onHoverEnd()}),this.host.replaceChildren(r),this.puzzleEl=r,this.resize()}update(e){var r,i,a,d;const n=e.freshTick!==this.freshTick;this.freshTick=e.freshTick;const o=new Set(e.hintLines.map(l=>`${l.axis}:${l.index}`));for(let l=0;l<this.size;l+=1){const w=((r=e.hover)==null?void 0:r.r)===l,g=o.has(`row:${l}`);ae(this.rowSlots[l],w,g,e.doneRows[l],e.settledRows[l]);for(let c=0;c<this.size;c+=1){const y=this.cells[l][c],x=e.marks[l][c];y.classList.toggle("filled",x===1),y.classList.toggle("marked",x===2);const P=e.hover!==null&&(e.hover.r===l||e.hover.c===c);y.classList.toggle("cross",P),y.classList.toggle("cursor",((i=e.hover)==null?void 0:i.r)===l&&((a=e.hover)==null?void 0:a.c)===c);const q=`${l},${c}`;y.classList.toggle("mistake",e.mistakes.has(q)),e.fresh.has(q)?n?En(y):y.classList.add("fresh"):y.classList.remove("fresh")}}for(let l=0;l<this.size;l+=1){const w=((d=e.hover)==null?void 0:d.c)===l,g=o.has(`col:${l}`);ae(this.colSlots[l],w,g,e.doneCols[l],e.settledCols[l])}}flashError(e,n){var r;const o=(r=this.cells[e])==null?void 0:r[n];o&&(o.classList.remove("bad"),o.offsetWidth,o.classList.add("bad"))}resize(){if(!this.puzzleEl)return;const e=this.host.getBoundingClientRect(),n=Math.floor(Math.min(e.width/this.cols,e.height/this.rows));this.puzzleEl.style.setProperty("--cell",`${Math.max(4,n)}px`)}endStroke(){this.stroking&&(this.stroking=!1,this.handlers.onPaintEnd())}cellAt(e,n){var d;const o=(d=this.cells[0])==null?void 0:d[0];if(!o)return null;const r=o.getBoundingClientRect();if(r.width<=0||r.height<=0)return null;const i=Math.floor((e-r.left)/r.width),a=Math.floor((n-r.top)/r.height);return a<0||i<0||a>=this.size||i>=this.size?null:{r:a,c:i}}}function Nt(t,e=!1){const n=document.createElement("div");return n.className=e?"slot clue":"slot",e&&Number(t)>10&&n.classList.add("large"),n.textContent=t,n}function ae(t,e,n,o,r){let i=0;for(const a of t){a.classList.toggle("hot",e),a.classList.toggle("step-hot",n);const d=a.classList.contains("clue");a.classList.toggle("done",d&&(o||r[i]===!0)),d&&(i+=1)}}function En(t){t.classList.remove("fresh"),t.offsetWidth,t.classList.add("fresh")}const vn=15,Y=vn+1;function ce(){return{slots:Array.from({length:Y},()=>null),cursor:0}}function kn(t,e){t.slots[t.cursor]=e,t.cursor=(t.cursor+1)%Y,t.slots[t.cursor]=null}function Cn(t,e){for(let n=1;n<=Y;n+=1){const o=(t.cursor-n+Y)%Y;if(t.slots[o]===e){t.slots[o]=null,n===1&&(t.cursor=o);return}}}const G=4,Mn=400,ue="按 F 填充，E 标空。按住空格或左键，沿一行或一列涂格。",fe=["easy","normal","hard","expert"],de={easy:"简单",normal:"普通",hard:"困难",expert:"专家"};function $n(t){t.innerHTML=`
    <div class="shell">
      <aside class="side left">
        <h1>数织</h1>
        <p class="name" data-field="name"></p>
        <p class="source" data-field="source">原创</p>
        <label>尺寸
          <select data-field="size"></select>
        </label>
        <label>难度
          <select data-field="difficulty">
            <option value="easy">简单</option>
            <option value="normal">普通</option>
            <option value="hard">困难</option>
            <option value="expert">专家</option>
          </select>
        </label>
        <p class="coord" data-field="coord">坐标　（—，—）</p>
        <p class="coord" data-field="anti">反坐标（—，—）</p>
        <p class="drag" data-field="drag">滑过 0</p>
        <button type="button" data-action="restart">新谜题</button>
        <button type="button" data-action="next">下一题</button>
        <button type="button" data-action="random">随机</button>
        <button type="button" data-action="catalog">题库</button>
        <div class="stat"><span>用时</span><strong data-field="time">00:00</strong></div>
        <div class="stat"><span>错误</span><strong data-field="errors">0/4</strong></div>
        <p class="keys">F 填充 · E 标空<br>按住空格或左键，沿一行或一列涂格<br>右键直接标空</p>
      </aside>
      <main class="stage" data-field="stage"></main>
      <aside class="side right">
        <div class="tools">
          <button type="button" data-tool="fill">填充 (F)</button>
          <button type="button" data-tool="mark">标空 (E)</button>
          <button type="button" data-action="undo">撤销</button>
          <button type="button" data-action="redo">重做</button>
          <button type="button" data-action="hint">提示</button>
          <button type="button" data-action="auto">自动解题</button>
        </div>
        <div class="step" data-field="step"></div>
      </aside>
    </div>
    <div class="catalog-back" data-field="catalog" hidden>
      <div class="catalog" role="dialog" aria-modal="true" aria-label="题库">
        <div class="catalog-top">
          <h2>题库</h2>
          <button type="button" data-action="close-catalog">关闭</button>
        </div>
        <p class="catalog-intro">原创像素是手绘的简单图。原创几何是窗格、梯子这类图案。</p>
        <div class="catalog-filters">
          <label>尺寸
            <select data-field="catalog-size">
              <option value="all">全部</option>
            </select>
          </label>
          <label>难度
            <select data-field="catalog-difficulty">
              <option value="all">全部</option>
              <option value="easy">简单</option>
              <option value="normal">普通</option>
              <option value="hard">困难</option>
              <option value="expert">专家</option>
            </select>
          </label>
          <label>来源
            <select data-field="catalog-origin">
              <option value="all">全部</option>
              <option value="pixel">原创像素</option>
              <option value="pattern">原创几何</option>
            </select>
          </label>
        </div>
        <p class="catalog-count" data-field="catalog-count"></p>
        <div class="catalog-list" data-field="catalog-list"></div>
      </div>
    </div>
    <div class="modal-back" data-field="modal" hidden>
      <div class="modal" role="dialog" aria-modal="true">
        <button type="button" class="modal-close" data-modal="close" aria-label="关闭">×</button>
        <h2 data-field="modal-title"></h2>
        <p data-field="modal-body"></p>
        <div class="modal-actions">
          <button type="button" data-modal="secondary"></button>
          <button type="button" class="primary" data-modal="primary"></button>
        </div>
      </div>
    </div>
  `;const e=S(t,"[data-field=name]"),n=S(t,"[data-field=source]"),o=S(t,"[data-field=size]"),r=S(t,"[data-field=difficulty]"),i=S(t,"[data-field=coord]"),a=S(t,"[data-field=anti]"),d=S(t,"[data-field=drag]"),l=S(t,"[data-field=time]"),w=S(t,"[data-field=errors]"),g=S(t,"[data-field=step]");g.style.setProperty("--step-rows",String(Y));const c=S(t,"[data-field=stage]"),y=S(t,"[data-field=modal]"),x=S(t,"[data-field=catalog]"),P=S(t,"[data-field=catalog-list]"),q=S(t,"[data-field=catalog-count]"),bt=S(t,"[data-field=catalog-size]"),Kt=S(t,"[data-field=catalog-difficulty]"),_t=S(t,"[data-field=catalog-origin]"),wt=S(t,"[data-field=modal-title]"),xt=S(t,"[data-field=modal-body]"),ut=S(t,"[data-modal=primary]"),ft=S(t,"[data-modal=secondary]"),ve=S(t,"[data-modal=close]"),J=S(t,"[data-action=random]"),ke=S(t,"[data-action=restart]"),Ce=S(t,"[data-action=next]"),St=S(t,"[data-action=auto]"),Me=S(t,"[data-action=undo]"),$e=S(t,"[data-action=redo]"),Le=S(t,"[data-action=hint]"),Ae=[...t.querySelectorAll("[data-tool]")];for(const s of be){const u=document.createElement("option");u.value=String(s),u.textContent=`${s} × ${s}`,o.append(u);const f=document.createElement("option");f.value=String(s),f.textContent=`${s} × ${s}`,bt.append(f)}let $="normal",b=A(5,$)[0]??A(5)[0],E=It(b.size),V=0,tt="fill",T=0,it=0,B=!1,Et=0,et=[],L=null,nt=[],Z=new Set,jt=0,v=null,vt=0,dt="row",Q=ce(),K="",_=new Set,C=null,lt=!1,kt=null,Ct=null,W=0,D=!1,Mt=!1;const ht=new Sn(c,{onPaintStart:(s,u,f)=>{v||Wt(s,u,f,"mouse")},onPaintMove:(s,u)=>{Ne(s,u)},onPaintEnd:()=>{(v==null?void 0:v.source)==="mouse"&&Lt()},onHover:(s,u)=>{(L==null?void 0:L.r)===s&&(L==null?void 0:L.c)===u||(L={r:s,c:u},X())},onHoverEnd:()=>{Mt||(L=null,X())}}),$t=gn();$t&&A($t.size).length>0?Pe($t):N(b,0,!1),ct(),bt.addEventListener("change",()=>ct()),Kt.addEventListener("change",()=>ct()),_t.addEventListener("change",()=>ct()),o.addEventListener("change",()=>{if(D)return;const s=Number(o.value),u=A(s,$)[0]??A(s)[0];at(()=>N(u,0,!0))}),r.addEventListener("change",()=>{if(D)return;const s=he(r.value)??$,u=A(b.size,s)[0];if(!u){K="这个尺寸还没有专家题。",j(),D=!0,r.value=$,D=!1;return}if(u.id===b.id){$=u.difficulty,H();return}at(()=>{$=u.difficulty,N(u,0,!0)})}),t.addEventListener("mousedown",s=>{if(s.button!==0)return;const u=s.target;u instanceof Element&&u.closest("button")&&s.preventDefault()}),t.addEventListener("click",s=>{var m,k,F;const u=s.target;if(!(u instanceof HTMLElement))return;const f=(m=u.closest("[data-action]"))==null?void 0:m.dataset.action,h=(k=u.closest("[data-tool]"))==null?void 0:k.dataset.tool;if(h==="fill"||h==="mark"){tt=h,H();return}f==="restart"&&at(()=>N(b,V,!0)),f==="next"&&at(()=>Ut()),f==="random"&&Te(),f==="catalog"&&He(),f==="close-catalog"&&pt();const p=(F=u.closest("[data-catalog-id]"))==null?void 0:F.dataset.catalogId;p&&qe(p),f==="undo"&&Re(),f==="redo"&&N(b,V,!0),f==="hint"&&Ie(),f==="auto"&&De()}),ut.addEventListener("click",()=>{if(C==="won"||C==="lost")Ut();else if(C==="confirm"){const s=kt;gt(),s==null||s()}}),ft.addEventListener("click",()=>{C==="won"||C==="lost"?N(b,V,!0):C==="confirm"&&At()}),ve.addEventListener("click",()=>At()),window.addEventListener("keydown",s=>{if(Pn(s.target))return;if(s.key==="Escape"){if(C){s.preventDefault(),At();return}if(lt){s.preventDefault(),pt();return}}const u=s.code==="KeyF"||s.key==="f"||s.key==="F",f=s.code==="KeyE"||s.key==="e"||s.key==="E",h=s.code==="Space"||s.key===" ";if(!(!u&&!f&&!h)&&!(lt||s.target instanceof HTMLSelectElement)){if(s.preventDefault(),u||f){tt=u?"fill":"mark",Mt=!0,s.target instanceof HTMLElement&&s.target!==document.body&&s.target.blur(),H(),X(),Mt=!1;return}s.repeat||v||!L||C||R()||Wt(L.r,L.c,0,"space")}},!0),window.addEventListener("keyup",s=>{s.code!=="Space"&&s.key!==" "||(v==null?void 0:v.source)==="space"&&Lt()},!0),window.addEventListener("blur",()=>{(v==null?void 0:v.source)==="space"&&Lt()}),window.addEventListener("pagehide",()=>z()),window.setInterval(()=>{B&&(l.textContent=Ot(ot()),z())},250);function Pe(s){const u=A(s.size).find(h=>h.id===s.id),f=he(s.difficulty);b=u??U(s.id,s.name,s.solution,f??"easy"),$=f??b.difficulty,V=s.builtinIndex??0,E=s.marks.map(h=>h.slice()),tt=s.tool,T=s.errors,it=s.elapsedMs,B=s.timerOn&&T<G&&!rt(E,b.solution),Et=performance.now(),et=[],dt="row",_=new Set((s.mistakes??[]).map(h=>`${h.r},${h.c}`));for(const h of _){const[p,m]=h.split(",").map(Number);E[p][m]=b.solution[p][m]===1?1:2}nt=[],Z=new Set,Gt(ue),ht.mount(b),T>=G?mt("lost"):rt(E,b.solution)?mt("won"):C=null,X()}function N(s,u,f){O(),b=s,$=s.difficulty,V=u,E=It(s.size),T=0,et=[],dt="row",_=new Set,nt=[],Z=new Set,Gt(ue),f&&(it=0,B=!1),gt(),ht.mount(b),j(),H(),z()}function Ut(){const s=A(b.size,$),u=s.length>0?s:A(b.size),f=u.findIndex(p=>p.id===b.id),h=f===-1?0:(f+1)%u.length;$=u[h].difficulty,N(u[h],h,!0)}async function Te(){if(Qt()&&!await Yt("开始新谜题？","当前进度将丢失。")){D=!0,o.value=String(b.size),r.value=$,D=!1;return}if(O(),$==="expert"){const h=A(b.size,"expert").filter(F=>F.id!==b.id),p=h.length>0?h:A(b.size,"expert");if(p.length===0){K="这个尺寸还没有专家题。",j();return}const m=p[Math.floor(Math.random()*p.length)],k=A(b.size).findIndex(F=>F.id===m.id);N(m,k===-1?0:k,!0);return}J.textContent="生成中",J.disabled=!0,await Tn(30);const s=b.size,u=V,f=on(s,Math.random,$);if(J.textContent="随机",J.disabled=!1,!f){const h=A(s,$),p=h.length>0?h:A(s);N(p[u]??p[0],u,!0),K="这次没有生成出可逻辑解完的题，改用内置图。",j();return}$=f.difficulty,N(f,u,!0)}function at(s){if(!Qt()){s();return}const u=b.size;Yt("开始新谜题？","当前进度将丢失。").then(f=>{f?s():(D=!0,o.value=String(u),r.value=$,D=!1)})}function Yt(s,u){return new Promise(f=>{C="confirm",kt=()=>f(!0),Ct=()=>f(!1),wt.textContent=s,xt.textContent=u,ut.textContent="确定",ft.textContent="取消",y.hidden=!1,H()})}function Wt(s,u,f,h){if(C||lt||R()||v||_.has(`${s},${u}`))return;O();const m=(f===2?"mark":tt)==="fill"?1:2;v={mark:E[s][u]===m?0:m,source:h,origin:{r:s,c:u},originals:new Map},Xt(s,u)}function Ne(s,u){if(!v||C||R())return;const f=bn(v.origin,{r:s,c:u}),h=wn(v.origin,{r:s,c:u},f);Xt(h.r,h.c)}function Xt(s,u){if(!v)return;const f=xn(v.origin,{r:s,c:u}),h=new Set(f.map(p=>`${p.r},${p.c}`));for(const[p,m]of[...v.originals]){if(h.has(p))continue;const[k,F]=p.split(",").map(Number);E[k][F]=m,v.originals.delete(p)}for(const p of f){const m=`${p.r},${p.c}`;_.has(m)||(v.originals.has(m)||v.originals.set(m,E[p.r][p.c]),E[p.r][p.c]!==v.mark&&(E[p.r][p.c]=v.mark))}vt=f.length,nt=[],Z=new Set,Pt(),X()}function Oe(s,u,f){return f===1?b.solution[s][u]===0:f===2?b.solution[s][u]===1:!1}function Lt(){if(!v)return;const s=v;if(v=null,vt=0,s.mark!==0)for(const[f,h]of s.originals){const[p,m]=f.split(",").map(Number);if(!(E[p][m]===h||!Oe(p,m,s.mark))){if(T>=G){E[p][m]=h;continue}E[p][m]=b.solution[p][m]===1?1:2,_.add(f),T+=1,Pt(),ht.flashError(p,m)}}const u=[];for(const[f,h]of s.originals){if(_.has(f))continue;const[p,m]=f.split(",").map(Number),k=E[p][m];k!==h&&u.push({r:p,c:m,from:h,to:k})}if(u.length>0&&et.push({changes:u}),X(),z(),T>=G){O(),zt(),mt("lost");return}rt(E,b.solution)&&Zt()}function Re(){if(C||R())return;O();const s=et.pop();if(s){for(const u of[...s.changes].reverse())E[u.r][u.c]=u.from;nt=[],Z=new Set,s.stepText&&(Cn(Q,s.stepText),j()),X(),z()}}function Gt(s){Q=ce(),K=s,j()}function j(){const s=(Q.cursor+Y-1)%Y;g.replaceChildren();for(let u=0;u<Y;u+=1){const f=document.createElement("p"),h=u===Q.cursor?K:Q.slots[u];u===Q.cursor&&K?f.className="step-note":h&&u===s&&(f.className="step-latest"),f.textContent=h??"",h&&(f.title=h),g.append(f)}}function Fe(s){K="",kn(Q,s),j()}function Jt(){const s=Ve(E,b.rowClues,b.colClues,dt);return dt=s.axis,s.step}function Ie(){if(C||R())return;const s=Jt();if(!s){K="没有可以确定的下一步。",j();return}Vt(s)}function Vt(s){const u=[];Z=new Set,jt+=1;for(const f of s.changes){const h=E[f.r][f.c];h!==f.mark&&(E[f.r][f.c]=f.mark,u.push({r:f.r,c:f.c,from:h,to:f.mark}),Z.add(`${f.r},${f.c}`))}u.length>0&&(et.push({changes:u,stepText:s.text}),Pt()),nt=s.lines,Fe(s.text),X(),z(),rt(E,b.solution)&&Zt()}function De(){if(W){O();return}C||R()||(W=window.setInterval(()=>{if(C||R()){O();return}const s=Jt();if(!s){O(),K="没有可以确定的下一步。",j();return}Vt(s),R()&&O()},Mn),H())}function O(){W&&(window.clearInterval(W),W=0,H())}function Zt(){O(),zt(),mt("won"),z()}function He(){C||(O(),lt=!0,ct(),x.hidden=!1)}function pt(){lt=!1,x.hidden=!0}function ct(){const s=bt.value,u=Kt.value,f=_t.value,h=le().filter(m=>s==="all"||m.size===Number(s)).filter(m=>u==="all"||m.difficulty===u).filter(m=>f==="all"||Se(m)===f).sort((m,k)=>{const F=m.size-k.size;if(F!==0)return F;const te=fe.indexOf(m.difficulty)-fe.indexOf(k.difficulty);return te!==0?te:m.name.localeCompare(k.name,"zh")});q.textContent=`共 ${h.length} 道`,P.replaceChildren();const p=document.createElement("div");p.className="catalog-head";for(const m of["题目","尺寸","难度","来源"]){const k=document.createElement("span");k.textContent=m,p.append(k)}if(P.append(p),h.length===0){const m=document.createElement("p");m.className="catalog-empty",m.textContent="没有符合的题目",P.append(m);return}for(const m of h){const k=document.createElement("button");k.type="button",k.className="catalog-row",k.dataset.catalogId=m.id,m.id===b.id&&k.classList.add("current"),k.append(yt(m.name),yt(`${m.size} × ${m.size}`),yt(de[m.difficulty]),yt(Ln(m))),P.append(k)}}function qe(s){const u=le().find(h=>h.id===s);if(!u)return;if(u.id===b.id){pt();return}const f=Math.max(0,A(u.size).findIndex(h=>h.id===u.id));at(()=>{$=u.difficulty,N(u,f,!0),pt()})}function mt(s){C=s,s==="won"?(wt.textContent="谜题完成！",xt.textContent=`用时 ${Ot(ot())}`,ut.textContent="下一题",ft.textContent="再来一局"):(wt.textContent="游戏结束",xt.textContent=`错误太多（${T}/${G}）`,ut.textContent="下一题",ft.textContent="再试一次"),y.hidden=!1,H()}function gt(){C=null,kt=null,Ct=null,y.hidden=!0,H()}function At(){if(C==="confirm"){const s=Ct;gt(),s==null||s();return}gt()}function Qt(){return C==="won"||C==="lost"||T>=G||rt(E,b.solution)?!1:T>0||ot()>0?!0:E.some(s=>s.some(u=>u!==0))}function R(){return T>=G||rt(E,b.solution)}function Pt(){B||(B=!0,Et=performance.now())}function zt(){B&&(it=ot(),B=!1)}function ot(){return B?it+(performance.now()-Et):it}function X(){const s=E.map((p,m)=>ee(p,b.rowClues[m])),u=E.map((p,m)=>ne(p,b.rowClues[m])),f=[],h=[];for(let p=0;p<b.size;p+=1){const m=E.map(k=>k[p]);f.push(ee(m,b.colClues[p])),h.push(ne(m,b.colClues[p]))}ht.update({marks:E,hover:L,hintLines:nt,fresh:Z,freshTick:jt,doneRows:s,doneCols:f,settledRows:u,settledCols:h,mistakes:_}),H()}function H(){if(e.textContent=`${b.name} · ${de[b.difficulty]}`,n.replaceChildren(),b.source){const f=document.createElement("a");if(f.href=b.source.url,f.target="_blank",f.rel="noreferrer",b.source.site==="nonogramsquare")f.textContent=`Nonogram Square · ${b.source.id}`;else{const h=b.source.stars,p=h==null?"":` · ${An(h)} 星`;f.textContent=`webpbn #${b.source.id} · ${b.source.author}${p}`}f.title=b.source.copyright,n.append(f)}else n.textContent="原创";if(D=!0,o.value=String(b.size),r.value=$,D=!1,L){const f=L.c+1,h=L.r+1,p=b.size;i.textContent=`坐标　（${f}，${h}）`,a.textContent=`反坐标（${p-f+1}，${p-h+1}）`}else i.textContent="坐标　（—，—）",a.textContent="反坐标（—，—）";d.textContent=`滑过 ${vt}`,l.textContent=Ot(ot()),w.textContent=`${T}/${G}`;for(const f of Ae)f.classList.toggle("active",f.dataset.tool===tt);const s=C!==null,u=J.textContent==="生成中";o.disabled=s||u,r.disabled=s||u,ke.disabled=s,Ce.disabled=s,J.disabled=s||J.textContent==="生成中",Me.disabled=et.length===0||R()||s,$e.disabled=C==="confirm",Le.disabled=R()||s,St.disabled=(R()||s)&&W===0,St.textContent=W?"暂停":"自动解题",St.classList.toggle("active",W!==0)}function z(){yn({id:b.id,name:b.name,size:b.size,solution:b.solution,marks:E,errors:T,elapsedMs:ot(),timerOn:B,tool:tt,builtinIndex:V,difficulty:$,mistakes:[..._].map(s=>{const[u,f]=s.split(",").map(Number);return{r:u,c:f}})})}}function Se(t){var e,n;return((e=t.source)==null?void 0:e.site)==="nonogramsquare"?"square":((n=t.source)==null?void 0:n.site)==="webpbn"?"webpbn":/-(windows|ladder|rings|bricks|dominoes|stitches)$/.test(t.id)?"pattern":"pixel"}function Ln(t){var r,i;const e=Se(t);if(e==="pixel")return"原创像素";if(e==="pattern")return"原创几何";if(e==="square")return"Nonogram Square";const n=(r=t.source)==null?void 0:r.stars,o=((i=t.source)==null?void 0:i.author)??"webpbn";return n===void 0?`webpbn · ${o}`:`webpbn · ${o} · ${n} 星`}function yt(t){const e=document.createElement("span");return e.textContent=t,e}function he(t){return t==="easy"||t==="normal"||t==="hard"||t==="expert"?t:null}function An(t){const e=Math.round(t*4)/4;return Number.isInteger(e)?String(e):e.toFixed(2).replace(/0$/,"")}function S(t,e){const n=t.querySelector(e);if(!n)throw new Error(`缺少 ${e}`);return n}function Pn(t){if(!(t instanceof HTMLElement))return!1;if(t.isContentEditable)return!0;const e=t.tagName;if(e==="TEXTAREA")return!0;if(e!=="INPUT")return!1;const n=t.type;return n!=="button"&&n!=="checkbox"&&n!=="radio"&&n!=="range"}function Ot(t){const e=Math.max(0,Math.floor(t/1e3)),n=Math.floor(e/60),o=e%60;return`${String(n).padStart(2,"0")}:${String(o).padStart(2,"0")}`}function Tn(t){return new Promise(e=>{window.setTimeout(e,t)})}const Ee=document.querySelector("#app");if(!Ee)throw new Error("缺少 #app");$n(Ee);
