(function(){
  var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion:reduce)').matches;
  var io=null;
  if(!reduce&&'IntersectionObserver' in window){
    document.documentElement.className+=' js';
    io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target);}});},{threshold:.1});
    document.querySelectorAll('.card,.ops>div,.layer,.spec .r2,.pt,.tile,.plan,.step,.why div,.facts div').forEach(function(el,i){el.classList.add('rv');el.style.transitionDelay=(i%4*70)+'ms';io.observe(el);});
  }
  var rot=document.getElementById('rot'),words=['network','security','cloud','CCTV','telephony','servers','backup'],wi=0;
  if(rot&&!reduce){setInterval(function(){rot.classList.add('out');setTimeout(function(){wi=(wi+1)%words.length;rot.textContent=words[wi];rot.classList.remove('out');},350);},2400);}
  var tp=document.getElementById('tp');
  if(tp&&!reduce){var full=tp.textContent,k=0;tp.textContent='';(function ty(){if(k<=full.length){tp.textContent=full.slice(0,k);k++;setTimeout(ty,full.charAt(k-1)==='\n'?260:22);}})();}
  document.querySelectorAll('[data-count]').forEach(function(el){
    var n=+el.getAttribute('data-count'),sf=el.getAttribute('data-suffix')||'';
    if(reduce){el.textContent=n+sf;return;}
    var st=null;(function step(ts){if(!st)st=ts;var p=Math.min((ts-st)/1400,1);el.textContent=Math.round(n*p)+sf;if(p<1)requestAnimationFrame(step);})(performance.now());
  });
  var f=document.getElementById('f'),s=document.getElementById('status');
  if(f){
    function data(){var d=new FormData(f);return {n:(d.get('name')||'').trim(),p:(d.get('phone')||'').trim(),v:d.get('svc'),m:d.get('msg')||''};}
    f.addEventListener('submit',function(e){
      e.preventDefault();var d=data();
      if(!d.n||!d.p){s.textContent='Please enter your name and phone number so we can reach you.';return;}
      var t='Hello DGM Technologies,\nName: '+d.n+'\nPhone: '+d.p+'\nNeed: '+d.v+'\n'+d.m;
      window.open('https://wa.me/919535207555?text='+encodeURIComponent(t),'_blank');
      s.textContent='Opening WhatsApp. If nothing opens, call 9535207555.';
    });
    var mb=document.getElementById('mb');
    if(mb)mb.addEventListener('click',function(){
      var d=data();
      if(!d.n||!d.p){s.textContent='Please enter your name and phone number so we can reach you.';return;}
      location.href='mailto:dgmtech@outlook.com?subject='+encodeURIComponent('Enquiry: '+d.v)+'&body='+encodeURIComponent('Name: '+d.n+'\nPhone: '+d.p+'\nNeed: '+d.v+'\n\n'+d.m);
      s.textContent='Opening your email app. If nothing opens, write to dgmtech@outlook.com.';
    });
  }
})();
