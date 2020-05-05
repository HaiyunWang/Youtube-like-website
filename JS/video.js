//global vars
var cancel = document.getElementById('cancel');
var post = document.getElementById('postComment');
var showMore = document.getElementById('showMore');
var showLess = document.getElementById('showLess');
var category = document.getElementsByClassName('expandInfo')[0];
var howTo = document.getElementsByClassName('expandInfo')[1];
var like = document.getElementById('likeNum');
var dislike= document.getElementById('dislikeNum');
var likeBtn = document.getElementById('like');
var dislikeBtn = document.getElementById('dislike');
var s2=document.getElementById('s2');
var header=document.getElementById('hc');
var searchIcon=document.getElementById('searchIcon');
var s1=document.getElementById('s1');
var log = document.getElementById('log-img');
var app = document.getElementById('apps-btn');
var rightPart = document .getElementById('right');
var overlay  = document.getElementById('overlaynav');
var shadow = document.getElementById('shadow');
resizeSearchbar();

//funcs
function DropdownMenuToggle(){
  document.getElementById('dropdown').classList.toggle('show');
  window.onclick = function(event) {
    console.log(event.target.className)
    if (!event.target.matches('.sort-icon')) {
      var dropdowns = document.getElementsByClassName("dropDown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
}
function activeTextbox(){
  cancel.style.display = 'flex';
  post.style.display='flex';
}
function hiddenBtns(){
  cancel.style.display = 'none';
  post.style.display = 'none';
}
function likeIconClick(){
  console.log(likeBtn.style.fill)
  console.log(dislike)
  if(likeBtn.style.fill!='grey'&& dislikeBtn.style.fill=='grey'){
    like.innerHTML = parseInt(like.innerHTML) -1;
    likeBtn.style.fill = 'grey';
  }
  else if(dislikeBtn.style.fill!='grey'&& likeBtn.style.fill=='grey'){
    dislikeBtn.style.fill='grey';
    dislike.innerHTML = parseInt(dislike.innerHTML)-1;
    like.innerHTML = parseInt(like.innerHTML) +1;
    likeBtn.style.fill = 'rgb(6,95,212)';
  }
  else{
    like.innerHTML = parseInt(like.innerHTML) +1;
    likeBtn.style.fill = 'rgb(6,95,212)';
    }
  }
  
 function dislikeIconClick(){
   console.log(dislike)
  if(dislikeBtn.style.fill!='grey'&& likeBtn.style.fill=='grey'){
    dislikeBtn.style.fill='grey';
    dislike.innerHTML = parseInt(dislike.innerHTML)-1;
  }
  else if(likeBtn.style.fill!='grey'&&dislikeBtn.style.fill=='grey'){
    likeBtn.style.fill='grey'
    like.innerHTML = parseInt(like.innerHTML)-1;
    dislikeBtn.style.fill='rgb(6,95,212)'
    dislike.innerHTML = parseInt(dislike.innerHTML)+1;
  }
  else{
    dislike.innerHTML = parseInt(dislike.innerHTML) +1;
    dislikeBtn.style.fill = 'rgb(6,95,212)';
  }
}
function expandMoreInfo(){
  showMore.style.display='none';
  category.style.display = 'inline-flex';
  howTo.style.display = 'inline-flex';
  howTo.style.color = ' #065fd4';
  showLess.style.display = 'flex';
}
function hideInfo(){
  showLess.style.display = 'none';
  category.style.display = 'none';
  howTo.style.display = 'none';
  showMore.style.display='flex';
}
 function resizeSearchbar(){
   var w=window.innerWidth;
   console.log(w);
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
 function openHiddenSearchbar(){
  //s1 before press,display searchIcon;
  s1.style.display='none';
  header.style.display='none';
  searchIcon.style.display='none';
  s2.style.display='flex';
 }
 function backToSearchIcon(){
   //s2 beofre click, display searchIcon
  s2.style.display='none';
  header.style.display='flex';
  searchIcon.style.display='flex';
  s1.style.display='none';
 }
 function openOverlaySideNav(){
   overlay.style.display='flex';
   shadow.style.display = 'flex';
 }
 function overlayToggle(){
   overlay.style.display = 'none';
   shadow.style.display = 'none';
 }
function subscribeNotification(){
  var noSub = document.getElementById('noSubscribe')
  var sub = document.getElementById('subscribe');
  console.log(sub)
  noSub.style.display ='none';
  sub.style.display='inline-flex'
}
