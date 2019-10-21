//Checks if element is visible
function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    //var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    var isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}
//Loops through all elements, fading each in or out based on visibility
function fadeOnView()  {
	document.querySelectorAll('body *').forEach(function(node){
		if (node.style.opacity < 1 && isScrolledIntoView(node)){
			$(node).fadeIn();
		}
		else if (node.style.opacity > 0 && !isScrolledIntoView(node)){
			$(node).fadeOut();
		}
	})
}
//triggering fade when user scrolls the page
window.onscroll = fadeOnView();