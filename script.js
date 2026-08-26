document.getElementById('year').textContent=new Date().getFullYear();

const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
document.querySelectorAll('.sound-row').forEach(row=>{row.addEventListener('click',()=>{const p=row.dataset.page;if(p)window.location.href=p})});

// Always use the original Dance Culture artwork for the face mark.
document.querySelectorAll('.hero-face img,.brand-mark img').forEach(img=>{
  img.src='logo.svg';
  img.alt='Dance Culture logo';
});

// Art-directed crop: keep the logo confined to the left side so it never
// collides with the DANCE / CULTURE typography. Desktop and mobile have
// deliberately different compositions.
const heroFix=document.createElement('style');
heroFix.textContent=`
@media (min-width:1001px){
  .hero-face{
    width:clamp(380px,25vw,455px)!important;
    height:660px!important;
    left:0!important;
    top:54%!important;
    transform:translateY(-50%)!important;
    overflow:hidden!important;
    z-index:2!important;
    opacity:.98!important;
  }
  .hero-face img{
    position:absolute!important;
    width:900px!important;
    max-width:none!important;
    left:-250px!important;
    top:-105px!important;
    transform:none!important;
    clip-path:inset(0 0 20% 0)!important;
  }
  .hero-copy{
    left:26%!important;
    right:7%!important;
    top:22%!important;
    z-index:4!important;
  }
  .signal{left:23%!important;z-index:4!important}
  .hero-facts{left:26%!important;z-index:4!important}
  .hero-meta,.kent,.uk,.barcode,.target{z-index:4!important}
}

@media (max-width:1000px){
  .hero-face{
    width:48vw!important;
    max-width:390px!important;
    height:440px!important;
    left:0!important;
    top:31%!important;
    transform:translateY(-42%)!important;
    overflow:hidden!important;
    z-index:2!important;
  }
  .hero-face img{
    position:absolute!important;
    width:535px!important;
    max-width:none!important;
    left:-185px!important;
    top:-58px!important;
    transform:none!important;
    clip-path:inset(0 0 20% 0)!important;
  }
  .hero-copy{z-index:4!important}
  .signal,.hero-facts,.hero-meta{z-index:4!important}
}

@media (max-width:560px){
  .hero{min-height:940px!important}
  .hero-stage{min-height:805px!important}
  .hero-face{
    width:52vw!important;
    height:430px!important;
    top:30%!important;
  }
  .hero-face img{
    width:505px!important;
    left:-190px!important;
    top:-52px!important;
  }
  .hero-copy{top:50%!important}
}

@media (max-width:390px){
  .hero-face{width:54vw!important;height:400px!important;top:29%!important}
  .hero-face img{width:470px!important;left:-180px!important;top:-48px!important}
  .hero-copy{top:51%!important}
}
`;
document.head.appendChild(heroFix);