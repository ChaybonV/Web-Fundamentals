var links = document.querySelectorAll('nav a'); //all links inside the navigation bar
var currentPage = window.location.pathname.split("/").pop(); //the current page name from the URL -> e.g. 'pharmaPulse.html'

//looping through all links
for (var i = 0; i < links.length; i++) {
    var linkPage = links[i].getAttribute('href'); // get the href of this link

    //comparing the href with the current page
    if (linkPage === currentPage) {
        links[i].classList.add('active'); // make this link active
    } else {
        links[i].classList.remove('active'); // remove active class from others
    }
}
