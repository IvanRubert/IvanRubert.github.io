(function(){
  // Ajusta el ancho de cada texto al original (por si la fuente de respaldo es distinta)
  function fit(){
    document.querySelectorAll('.t[data-w]').forEach(function(el){
      var w=parseFloat(el.dataset.w); if(!w) return;
      el.style.transform='';
      var cur=el.getBoundingClientRect().width/(96/72); // px -> pt
      if(cur>0){var r=w/cur; if(r>0.75&&r<1.25&&Math.abs(r-1)>0.01){el.style.transform='scaleX('+r.toFixed(4)+')';}}
    });
  }
  if(document.fonts&&document.fonts.ready){document.fonts.ready.then(fit);} 
  window.addEventListener('load',fit);
  // Volver a PDF: usa el motor de impresion del navegador (PDF vectorial, texto seleccionable)
  var btn=document.getElementById('btn-pdf');
  if(btn) btn.addEventListener('click',function(){fit();window.print();});
})();
