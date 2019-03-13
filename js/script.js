var items = document.querySelectorAll('.animated');

window.addEventListener('scroll', function(){

	items.forEach(function(item){
		if (isVisible(item)) {
			item.classList.add('visible');
		} else {
			item.classList.remove('visible');
		}
	});

});


function isVisible(el) {

    const rect = el.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);

    return (vertInView);
}