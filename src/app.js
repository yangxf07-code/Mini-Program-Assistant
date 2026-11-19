const screen = document.querySelector('#screen');
const device = document.querySelector('#device');
const clone = name => document.getElementById(name).content.firstElementChild.cloneNode(true);
const layer = (id,root=screen) => root.querySelector('[data-node-id="1:'+id+'"]');
const named = (name,root=screen) => root.querySelector('[data-name="'+name+'"]');
const labels = (root=screen) => [...root.querySelectorAll('p,span')].filter(n=>!n.childElementCount);
const label = (value,root=screen) => labels(root).find(n=>n.textContent.trim()===value);
const records = ['谜卡探案','国粹青衣全解','日语短语跟读'];
const categories = ['审核结果','异常预警','异常预警'];
function saved(key,fallback){try{return JSON.parse(localStorage.getItem(key))??fallback}catch{return fallback}}
function save(key,value){try{localStorage.setItem(key,JSON.stringify(value))}catch{}}
let removed=saved('deletedMessages',[]), subscription=saved('subscription',[]);
let cardFilter='',typeFilter='',ascending=false,selected=0,ranking=0;
const routes=['Home','Apps','Notifications','MiniNotifications','Messages','Discover','Details','Actions','History','NameFilter','TypeFilter','Activity','Subscribe','Profile','Square'];
const route=()=> routes.includes(location.hash.slice(1))?location.hash.slice(1):'Home';
function go(page){location.hash=page;}
function back(){if(history.state?.appDepth>0)history.back();else go('Home')}
function bind(el,fn,title){
  if(!el)return;
  el.setAttribute('role','button'); el.tabIndex=0;
  if(title)el.setAttribute('aria-label',title);
  el.onclick=e=>{e.stopPropagation();fn()};
  el.onkeydown=e=>{if(e.target===el && ['Enter',' '].includes(e.key)){e.preventDefault();el.click()}};
}
function link(el,page,title){bind(el,()=>go(page),title)}
function scroller(el,bottom){if(el){el.classList.add('scroll');el.style.bottom=bottom+'px';}}
function tabBar(){
  const bar=named('底bar');
  if(bar)for(const [title,page] of [['发现','Discover'],['消息','Messages']])link(label(title,bar)?.parentElement,page,title);
}
function bindBack(){
  const control=named('back')||named('返回')||named('Left Button')||named('右侧');
  if(control)bind(control,back,'返回');
  else {const b=document.createElement('button');b.className='back';b.textContent='‹';screen.append(b);bind(b,back,'返回');}
}
function emptyList(list){
  const empty=named('缺省态',clone('Empty'));
  empty.style.cssText='position:relative;inset:auto;translate:none;margin:110px auto 0;flex:none';
  list.append(empty);
}
function messages(){
  const list=layer(12013);
  const cards=[...list.children];
  const indices=ascending?[2,1,0]:[0,1,2];
  list.replaceChildren();scroller(list,89);
  for(const i of indices){
    if(removed.includes(i)||(cardFilter&&cardFilter!==records[i])||(typeFilter&&typeFilter!==categories[i]))continue;
    const card=cards[i];list.append(card);
    bind(card,()=>{selected=i;go('Details')},records[i]+' 查看详情');
    const more=document.createElement('button');more.className='more';more.textContent='•••';card.append(more);
    bind(more,()=>{selected=i;go('Actions')},records[i]+' 更多');
    card.oncontextmenu=e=>{e.preventDefault();more.click()};
  }
  if(!list.children.length)emptyList(list);
  bind(layer(11983),()=>{cardFilter='';typeFilter='';render()},'全部');
  for(const [id,value,page] of [[11992,cardFilter,'NameFilter'],[11996,typeFilter,'TypeFilter']]){
    const button=layer(id);
    if(value){button.querySelector('p').textContent=value.length>5?value.slice(0,5)+'…':value;button.classList.add('selected-filter')}
    link(button,page);
  }
  const sort=named('Icon / ArrowDownNarrowWide');
  if(ascending)sort.style.transform='scaleY(-1)';
  bind(sort.parentElement,()=>{ascending=!ascending;render()},ascending?'切换为时间降序':'切换为时间升序');
}
function overlay(template,ids){
  const source=clone(template);
  for(const id of ids)screen.firstElementChild.append(layer(id,source));
}
function filterPanel(isName){
  const ids=isName?[13189,13190]:[13655,13656];
  overlay(isName?'NameFilter':'TypeFilter',ids);
  const panel=layer(ids[1]);
  panel.style.cssText+=';max-height:60%;overflow-y:auto;z-index:4';
  layer(ids[0]).style.zIndex=2;
  layer(11931).style.zIndex=3;
  bind(layer(ids[0]),back,'关闭筛选');
  for(const item of labels(panel)){
    const value=item.textContent.trim()==='全部'?'':item.textContent.trim();
    if(value===(isName?cardFilter:typeFilter))item.parentElement.classList.add('selected-filter');
    bind(item.parentElement,()=>{if(isName)cardFilter=value;else typeFilter=value;back()});
  }
  bind(layer(isName?11992:11996),back,'收起筛选');
}
function details(){
  overlay('Details',[13418,13419]);bind(layer(13418),back,'关闭详情');
  const info=layer(13421), card=layer(12013,clone('Messages')).children[selected];
  const data=labels(card).map(n=>n.textContent.trim());
  const fields=labels(info);
  for(const [i,text] of [[0,records[selected]],[1,data[1]+' 10:12:08'],[2,data[2]],[3,data[3]]])fields[i].textContent=text;
  for(const part of ['icon','pic']){
    const dest=named(part,info),source=named(part,card);
    if(dest&&source)dest.replaceChildren(...source.cloneNode(true).childNodes);
  }
  bind(named('DuxGrabber'),back,'收起详情');
}
function actions(){
  overlay('Actions',[13597,13598]);bind(layer(13597),back,'关闭更多操作');
  link(label('查看历史消息').parentElement,'History');
  bind(label('删除消息').parentElement,()=>{removed=[...new Set([...removed,selected])];save('deletedMessages',removed);back()});
  bind(label('取消').parentElement,back);
}
function historyView(){
  screen.firstElementChild.style.opacity=1;
  const list=layer(14888);
  list.replaceChildren(layer(12013,clone('Messages')).children[selected]);
  bind(list.firstElementChild,()=>go('Details'),records[selected]+' 查看详情');
  for(const n of labels(layer(14892)))if(n.textContent.includes('消息')||records.includes(n.textContent.trim()))n.textContent=records[selected]+'的历史消息';
}
function discovery(){
  const list=layer(15538);scroller(list,90);
  const modes=[layer(15532),layer(15534)];
  modes.forEach((el,i)=>{bind(el,()=>{ranking=i;render()});el.style.opacity=ranking===i?'1':'.55'});
  if(ranking)list.append(...[...list.children].reverse());
  for(const row of list.children){
    link(row,'Square','打开兴趣卡广场');
    for(const n of labels(row))if(['古希腊掌管冲浪的神','山水妹妹','造梦者'].includes(n.textContent.trim()))link(n,'Profile');
  }
  link(layer(15505),'Activity','兴趣卡创作指南');
  tabBar();
}
function square(){
  const root=screen.firstElementChild;
  root.style.cssText='position:relative;background:white';
  const nav=clone('SquareNav');nav.style.height='88px';root.append(nav);
  const list=document.createElement('div');
  list.style.cssText='position:absolute;inset:96px 12px 20px;overflow:auto';
  root.append(list);
  for(const [name,height,space] of [['Zodiac',698,16],['Gold',628,32],['RecommendedTitle',24,8],['Recommended',1412,0]]){
    const section=clone(name);section.style.height=height+'px';section.style.marginBottom=space+'px';list.append(section);
  }
  for(const n of labels(list))if(n.textContent.includes('作者')||n.textContent.startsWith('@'))link(n,'Profile');
}
function notices(mini){
  const list=layer(mini?11691:11469);scroller(list,32);
  link(list.firstElementChild,'Messages','查看兴趣卡消息');
  const filters=named('选项');
  if(!mini){
    const first=filters.firstElementChild.cloneNode(true);first.querySelector('p').textContent='小程序';
    filters.firstElementChild.after(first);link(first,'MiniNotifications');
  }else link(label('全部',filters)?.parentElement,'Notifications');
  filters.parentElement.style.overflowX='auto';
}
function activity(){
  const trigger=layer(15920)?.querySelector('p');
  if(trigger){trigger.textContent=subscription.length?'已订阅':'订阅';link(layer(15920),'Subscribe','管理订阅')}
}
function subscribe(){
  const selectedTopics=new Set(subscription.length?subscription:['创作进度提醒','线上状态提醒','官方活动提醒']);
  overlay('Subscribe',[12060]);
  const panel=layer(12060);
  for(const name of ['创作进度提醒','线上状态提醒','官方活动提醒']){
    const row=label(name,panel)?.closest('[data-name="常规授权项"]');
    if(!row)continue;
    const mark=named('选择状态',row);
    const update=()=>{mark.style.opacity=selectedTopics.has(name)?'1':'.25';row.setAttribute('aria-pressed',String(selectedTopics.has(name)))};
    bind(row,()=>{if(selectedTopics.has(name))selectedTopics.delete(name);else selectedTopics.add(name);update()});update();
  }
  let remember=saved('rememberSubscription',false);
  const check=layer(12149);check.style.opacity=remember?'1':'.4';
  bind(layer(12148),()=>{remember=!remember;check.style.opacity=remember?'1':'.4'});
  bind(layer(12154),()=>{subscription=[...selectedTopics];save('subscription',subscription);save('rememberSubscription',remember);back()});
  bind(layer(12153),back);
}
function render(){
  const page=route();
  const messagePage=['Messages','Actions','Details','NameFilter','TypeFilter'].includes(page);
  const view=messagePage?'Messages':page==='Subscribe'?'Activity':page;
  screen.replaceChildren(page==='Square'?document.createElement('div'):clone(view));
  if(messagePage){messages();tabBar()}
  switch(page){
    case 'Home': link(layer(14708),'Notifications');link(layer(14729),'Apps');break;
    case 'Apps':link(label('兴趣卡官方助手')?.parentElement,'Discover');scroller(layer(14945),32);break;
    case 'Notifications':case 'MiniNotifications':notices(page==='MiniNotifications');break;
    case 'Discover':discovery();break;
    case 'Details':details();break;
    case 'Actions':actions();break;
    case 'History':historyView();break;
    case 'NameFilter':case 'TypeFilter':filterPanel(page==='NameFilter');break;
    case 'Activity':activity();break;
    case 'Subscribe':subscribe();break;
    case 'Square':square();break;
  }
  if(!['Home','Details','Actions','NameFilter','TypeFilter','Subscribe'].includes(page))bindBack();
  device.setAttribute('aria-label',screen.firstElementChild.dataset.name||'兴趣卡官方助手');
}
function size(){
  const zoom=Math.min(innerWidth/390,innerHeight/844,1);
  device.style.zoom=zoom;
}
window.addEventListener('resize',size);
window.addEventListener('hashchange',()=>{if(!history.state)history.replaceState({appDepth:1},'');render()});
window.addEventListener('keydown',e=>{if(e.key==='Escape'&&route()!=='Home')back()});
history.replaceState({appDepth:location.hash?1:0},'');
size();render();
