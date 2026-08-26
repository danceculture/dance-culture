document.getElementById('year').textContent=new Date().getFullYear();

const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
document.querySelectorAll('.sound-row').forEach(row=>{row.addEventListener('click',()=>{const p=row.dataset.page;if(p)window.location.href=p})});

// Always use the original Dance Culture artwork.
document.querySelectorAll('.hero-face img,.brand-mark img').forEach(img=>{
  img.src='logo.svg';
  img.alt='Dance Culture logo';
});

// Hero is deliberately art-directed separately for desktop and mobile.
const heroFix=document.createElement('style');
heroFix.textContent=`
@media (min-width:1001px){
  .hero-face{
    position:absolute!important;
    width:250px!important;
    height:560px!important;
    left:0!important;
    top:52%!important;
    transform:translateY(-48%)!important;
    overflow:hidden!important;
    z-index:2!important;
    opacity:.98!important;
  }
  .hero-face img{
    position:absolute!important;
    width:700px!important;
    max-width:none!important;
    height:auto!important;
    left:-350px!important;
    top:-15px!important;
    transform:none!important;
    clip-path:inset(0 0 18% 0)!important;
  }
  .hero-copy{
    left:22%!important;
    right:6%!important;
    top:23%!important;
    z-index:4!important;
    max-width:1080px!important;
  }
  .signal{left:22%!important;z-index:4!important}
  .hero-facts{left:22%!important;z-index:4!important}
  .hero-meta,.kent,.uk,.barcode,.target{z-index:4!important}
  h1{font-size:clamp(94px,9.4vw,150px)!important}
}

@media (min-width:601px) and (max-width:1000px){
  .hero-face{
    width:260px!important;
    height:430px!important;
    left:0!important;
    top:29%!important;
    transform:translateY(-36%)!important;
    overflow:hidden!important;
    z-index:2!important;
  }
  .hero-face img{
    position:absolute!important;
    width:555px!important;
    max-width:none!important;
    left:-245px!important;
    top:-12px!important;
    transform:none!important;
    clip-path:inset(0 0 22% 0)!important;
  }
  .hero-copy{top:48%!important;z-index:4!important}
  .signal,.hero-facts,.hero-meta{z-index:4!important}
}

@media (max-width:600px){
  .nav{height:72px!important}
  .nav-inner{width:calc(100% - 28px)!important;gap:10px!important}
  .brand{font-size:12px!important;gap:9px!important}
  .brand-mark{width:32px!important;height:32px!important}
  .nav-links{gap:10px!important}
  .nav-pill{font-size:7.5px!important;padding:9px 10px!important;letter-spacing:.12em!important}
  .menu-button{display:block!important;width:27px!important;height:21px!important}

  .hero{
    min-height:900px!important;
    padding:84px 0 34px!important;
    align-items:flex-start!important;
  }
  .hero-grid{background-size:54px 54px!important;opacity:.8!important}
  .hero-stage{min-height:780px!important}

  .hero-face{
    position:absolute!important;
    width:52vw!important;
    max-width:215px!important;
    height:325px!important;
    left:0!important;
    top:112px!important;
    transform:none!important;
    overflow:hidden!important;
    z-index:2!important;
    opacity:.98!important;
  }
  .hero-face img{
    position:absolute!important;
    width:430px!important;
    max-width:none!important;
    height:auto!important;
    left:-193px!important;
    top:-7px!important;
    transform:none!important;
    clip-path:none!important;
  }

  .signal{
    top:42px!important;
    left:auto!important;
    right:0!important;
    width:48%!important;
    gap:10px!important;
    font-size:7px!important;
    line-height:1.7!important;
    z-index:4!important;
  }
  .signal-cross{width:20px!important;height:20px!important;flex:0 0 20px!important}
  .signal-cross:before{width:20px!important;top:9px!important}
  .signal-cross:after{height:20px!important;left:9px!important}
  .signal:after{display:none!important}

  .kent,.uk,.barcode,.target{display:none!important}

  .hero-copy{
    position:absolute!important;
    left:0!important;
    right:0!important;
    top:392px!important;
    max-width:none!important;
    z-index:4!important;
  }
  .eyebrow{
    position:absolute!important;
    right:0!important;
    top:-120px!important;
    width:48%!important;
    margin:0!important;
    font-size:7px!important;
    line-height:1.65!important;
    white-space:normal!important;
    text-align:left!important;
  }
  h1{
    width:100%!important;
    font-size:clamp(58px,18vw,76px)!important;
    line-height:.80!important;
    letter-spacing:-.058em!important;
    white-space:nowrap!important;
  }
  h1 .outline{-webkit-text-stroke:1px rgba(255,255,255,.85)!important}
  .hero-rule{margin-top:24px!important}
  .hero-tag{display:block!important;margin-top:23px!important}
  .hero-tagline{
    max-width:330px!important;
    font-size:19px!important;
    line-height:1.26!important;
    white-space:normal!important;
  }
  .hero-tagline strong{display:block!important}

  .hero-facts{
    left:0!important;
    bottom:12px!important;
    font-size:7px!important;
    line-height:1.9!important;
    z-index:4!important;
  }
  .hero-meta{
    right:0!important;
    bottom:8px!important;
    max-width:49%!important;
    font-size:7px!important;
    line-height:1.75!important;
    text-align:right!important;
    z-index:4!important;
  }
  .hero-meta .scroll{margin-top:18px!important;color:var(--acid)!important}

  .ticker{height:42px!important}
  .ticker-track{font-size:8px!important;gap:20px!important}
}

@media (max-width:390px){
  .hero{min-height:875px!important}
  .hero-stage{min-height:755px!important}
  .hero-face{width:53vw!important;max-width:205px!important;height:308px!important;top:108px!important}
  .hero-face img{width:410px!important;left:-184px!important;top:-5px!important}
  .hero-copy{top:372px!important}
  .eyebrow{top:-112px!important;font-size:6.5px!important}
  h1{font-size:56px!important}
  .hero-tagline{font-size:18px!important;max-width:305px!important}
  .brand{font-size:11px!important}
  .nav-pill{font-size:7px!important;padding:8px 9px!important}
}
`;
document.head.appendChild(heroFix);