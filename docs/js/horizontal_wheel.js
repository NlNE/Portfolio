var item = document.getElementsByClassName('content-wrap')[0];

item.addEventListener('wheel', function(e) {

  if (e.deltaY > 0) item.scrollLeft += 100;
  else if (e.deltaY < 0) item.scrollLeft -= 100;
});