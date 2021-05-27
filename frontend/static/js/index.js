// client side router. also defining each one of our routes
const router = async () => {
    const routes = [
        // whenever the user goes to the route path, we are going to run the view function
        { path: "/", view: () => console.log("viewing home page") },
        { path: "/posts", view: () => console.log("viewing posts") },
        { path: "/settings", view: () => console.log("viewing settings") },
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
    console.log(potentialMatches)
};

// calling the router
// once the DOM has loaded up, we will run the router function
document.addEventListener("DOMContentLoaded", () => {
    router();
})