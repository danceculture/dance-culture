document.getElementById('year').textContent=new Date().getFullYear();

const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

document.querySelectorAll('.sound-row').forEach(row=>{
  row.addEventListener('click',()=>{
    const p=row.dataset.page;
    if(p) window.location.href=p;
  });
});

// The hero uses the exact approved cropped Dance Culture banner artwork.
const banner=document.querySelector('.hero-face img');
if(banner){
  banner.src='banner-logo.svg';
  banner.alt='';
}

// Keep the small navigation mark as the full official logo.
document.querySelectorAll('.brand-mark img').forEach(img=>{
  img.src='logo.svg';
  img.alt='Dance Culture logo';
});

const heroArt=document.createElement('style');
heroArt.textContent=`
/* Header: deep black so the approved artwork and site feel like one system */
.nav{
  background:linear-gradient(180deg,rgba(0,0,0,.94),rgba(4,5,4,.86))!important;
  border-bottom:1px solid rgba(255,255,255,.10)!important;
}
.hero{
  background:radial-gradient(circle at 77% 24%,rgba(152,255,0,.065),transparent 29%),#000!important;
}

/* APPROVED DESKTOP HERO */
@media (min-width:1001px){
  .hero{min-height:calc(100svh - 48px)!important;padding:118px 0 52px!important}
  .hero-stage{min-height:690px!important}

  .hero-face{
    position:absolute!important;
    width:clamp(610px,43vw,760px)!important;
    height:clamp(610px,43vw,760px)!important;
    left:-28px!important;
    top:52%!important;
    transform:translateY(-49%)!important;
    overflow:visible!important;
    z-index:2!important;
    pointer-events:none!important;
    opacity:.96!important;
  }
  .hero-face img{
    width:100%!important;
    height:100%!important;
    max-width:none!important;
    object-fit:cover!important;
    object-position:center!important;
    mix-blend-mode:screen!important;
    filter:grayscale(1) contrast(1.08) brightness(.96)!important;
    -webkit-mask-image:linear-gradient(to right,#000 0%,#000 64%,rgba(0,0,0,.92) 72%,transparent 94%)!important;
    mask-image:linear-gradient(to right,#000 0%,#000 64%,rgba(0,0,0,.92) 72%,transparent 94%)!important;
  }

  .hero-copy{
    left:26.5%!important;
    right:6%!important;
    top:22.5%!important;
    max-width:1080px!important;
    z-index:4!important;
  }
  .signal{left:23.5%!important;z-index:4!important}
  .hero-facts{left:26.5%!important;z-index:4!important}
  .hero-meta,.kent,.uk,.barcode,.target{z-index:4!important}
  h1{font-size:clamp(94px,9.1vw,146px)!important;line-height:.77!important}
}

/* TABLET */
@media (min-width:601px) and (max-width:1000px){
  .hero{padding-top:92px!important;min-height:860px!important}
  .hero-stage{min-height:720px!important}
  .hero-face{
    position:absolute!important;
    width:500px!important;
    height:500px!important;
    left:-58px!important;
    top:31%!important;
    transform:translateY(-35%)!important;
    overflow:visible!important;
    z-index:2!important;
    pointer-events:none!important;
    opacity:.96!important;
  }
  .hero-face img{
    width:100%!important;
    height:100%!important;
    object-fit:cover!important;
    mix-blend-mode:screen!important;
    filter:grayscale(1) contrast(1.07) brightness(.96)!important;
    -webkit-mask-image:linear-gradient(to right,#000 0%,#000 66%,transparent 96%)!important;
    mask-image:linear-gradient(to right,#000 0%,#000 66%,transparent 96%)!important;
  }
  .hero-copy{top:48%!important;z-index:4!important}
  .signal,.hero-facts,.hero-meta{z-index:4!important}
}

/* APPROVED MOBILE HERO — composed independently from desktop */
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
  .hero-grid{background-size:54px 54px!important;opacity:.78!important}
  .hero-stage{min-height:780px!important}

  .hero-face{
    position:absolute!important;
    width:390px!important;
    height:390px!important;
    left:-48px!important;
    top:104px!important;
    transform:none!important;
    overflow:visible!important;
    z-index:2!important;
    pointer-events:none!important;
    opacity:.96!important;
  }
  .hero-face img{
    width:100%!important;
    height:100%!important;
    max-width:none!important;
    object-fit:cover!important;
    mix-blend-mode:screen!important;
    filter:grayscale(1) contrast(1.07) brightness(.96)!important;
    -webkit-mask-image:linear-gradient(to right,#000 0%,#000 70%,rgba(0,0,0,.75) 82%,transparent 100%)!important;
    mask-image:linear-gradient(to right,#000 0%,#000 70%,rgba(0,0,0,.75) 82%,transparent 100%)!important;
  }

  .signal{
    top:46px!important;
    left:auto!important;
    right:0!important;
    width:46%!important;
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
    top:-118px!important;
    width:46%!important;
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
  h1 .outline{-webkit-text-stroke:1px rgba(255,255,255,.86)!important}
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
  .hero-face{width:365px!important;height:365px!important;left:-50px!important;top:101px!important}
  .hero-copy{top:374px!important}
  .eyebrow{top:-111px!important;font-size:6.5px!important}
  h1{font-size:56px!important}
  .hero-tagline{font-size:18px!important;max-width:305px!important}
  .brand{font-size:11px!important}
  .nav-pill{font-size:7px!important;padding:8px 9px!important}
}
`;
document.head.appendChild(heroArt);