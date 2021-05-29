// importing the dashboard file
import dashboard from "./views/dashboard.js"
import Posts from "./views/Posts.js"
import Settings from "./views/Settings"


// when the user clicks on a button from the nav bar this function will run
const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

// client side router. also defining each one of our routes
const router = async () => {
    const routes = [
        // whenever the user goes to the route path, we are going to run the view function
        // this is the dashboard class reference
        { path: "/", view: dashboard },
        { path: "/posts", view: Posts },
        { path: "/settings", view: Settings },
    ];

    // test each route for potential match by looping through them
    // using the map method because we are looping through each map and returning a new object for each route
    // location.pathname is the page that the user is currently on
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        }
    })
// note that potentialMatch is singular. 
// let match will be one of the objects above. it will look for the match (/posts for instance) run the potentialMatches function which will return true then find it and then give us the match. In the video he console logged(match) and it resulted in isMatch:true 
let match = potentialMatches.find(potenialMatch => potentialMatches.isMatch)

// defining a no match, or a 404 undefined if someone types in a route that doesn't exist
if(!match){
    match = {
        route: routes[0],
        isMatch: true
    }
}

// creating a new instance of the view at the match route right above
const view = new match.route.view()

// getting the html from the async method in the dashboard.js file and injecting it into the innerHTML of '#app'
document.querySelector('#app').innerHTML = await view.getHtml();


// calling the view function from the path above
};

// this is for when the user is one page, hits the back button it will rerun the router
window.addEventListener("popstate", router);

// calling the router
// once the DOM has loaded up, we will run the router function
document.addEventListener("DOMContentLoaded", () => {
// this is a dedicated event listener. when a user adds new content to the page and they have links they will actually work
document.addEventListener("click", e => {
    // this is saying "does this element(e) have the data-link attribute?"
    if(e.target.matches("[data-link]")){
        // prevents the default link from firing and instead goes to the target without a page refresh
        e.preventDefault();
        navigateTo(e.target.href)
    }
})
    router();
})