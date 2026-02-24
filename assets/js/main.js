document.addEventListener('DOMContentLoaded', function () {
  var pat = document.getElementById('pat-photo');
  if (pat) {
    var hover = pat.dataset.hoverSrc;
    var original = pat.dataset.originalSrc;
    pat.addEventListener('mouseover', function() {
      if (hover) this.src = hover;
    });
    pat.addEventListener('mouseout', function() {
      if (original) this.src = original;
    });
  }
});
