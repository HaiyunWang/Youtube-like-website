var normalSidenav=document.getElementById('sidebar');
var smallSidenav=document.getElementById('small-size-sidebar');
var overlayNav=document.getElementById('overlaynav');
var shadow=document.getElementById('shadow');
var video=document.getElementById('video-content');
var isclicked=false;

var s2=document.getElementById('s2');
var header=document.getElementById('hc');
var searchIcon=document.getElementById('searchIcon');
var s1=document.getElementById('s1');
var log = document.getElementById('login');
var app = document.getElementById('apps-btn');
var rightPart = document .getElementById('right');

resizeSidebar();
resizeSearchbar();

window.onresize = resizeSidebar;
window.onresize = resizeSearchbar;

function sidebarToggle(){
  var viewportWidth = window.innerWidth;
  //no overlay
  if (viewportWidth>1605){
    //switch
    if (smallSidenav.style.display=="none"){
      //normal before press. Display small
      isclicked=true;
      smallSidenav.style.display='flex';
      video.style.marginLeft='86px';
      normalSidenav.style.display='none';
    }else{
      //small before press
      isclicked=false;
      smallSidenav.style.display='none';
      normalSidenav.style.display='block';
      video.style.marginLeft='240px';
    }

  }else{
    //open overlay
    overlayNav.style.display='flex';
    shadow.style.display='flex';
  }
}
function resizeSidebar(){
  var viewportWidth = window.innerWidth;
  if(viewportWidth>1605){
    //todo: if overlay open ,close it
    if(overlayNav.style.display!='none'){
      overlayNav.style.display='none';
      shadow.style.display='none';
    }
    //check if is s0 or s1
    if(isclicked){
      //s1
    }
    else{
      //s0
      smallSidenav.style.display='none';
      normalSidenav.style.display='block';
      video.style.marginLeft='240px';
    }
  }
  else if(viewportWidth<=615){
    smallSidenav.style.display='none';
    video.style.marginLeft='0px';
  }
  else{
    //<=1605
    //n0 to s0
    normalSidenav.style.display='none';
    smallSidenav.style.display='flex';
    video.style.marginLeft='86px';
  }
}
function overlayToggle(){
  overlayNav.style.display='none';
  shadow.style.display='none';
  smallSidenav.style.display='flex';
}

function openHiddenSearchbar(){
 //s1 before press,display searchIcon;
 s1.style.display='none';
 header.style.display='none';
 searchIcon.style.display='none';
 s2.style.display='flex';
}
function resizeSearchbar(){
  var w=window.innerWidth;
  if(w>615){
   if(s2.style.display!='none'){
     //close s2
     s2.style.display='none';
     s1.style.display='inline-flex';
     header.style.display='flex';
     app.style.display = 'flex';
   }
   else{
     //switch searchIcon to s1
    searchIcon.style.display='none';
    s1.style.display='inline-flex';
    header.style.display='flex';
    log.style.display = 'flex';
    app.style.display = 'flex';
   }
  }
  else{
     if(w>300){
      searchIcon.style.display='flex';
      s1.style.display='none';
      header.style.display='flex';
      log.style.display = 'none';
      app.style.display = 'none'
     }
     else{
      searchIcon.style.display='flex';
      s1.style.display='none';
      header.style.display='flex';
      log.style.display = 'none';
      app.style.display = 'none';
      rightPart.style.right= '0px';
     }
  }
   
}
function backToSearchIcon(){
  //s2 beofre click, display searchIcon
 s2.style.display='none';
 header.style.display='flex';
 searchIcon.style.display='flex';
 s1.style.display='none';
}