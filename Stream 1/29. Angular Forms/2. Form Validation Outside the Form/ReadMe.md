CHALLENGE
=========

 

With our new routing skills, let’s add a new html template that we can route to
once we have completely validated our form. We will need:

 

-   a new route in app.js to route to a new html template with parameter

-   new template form to display registration success message to user

-   new controller to capture route parameter and add it to scope

-   using \$location route to the new path with the username as

-   parameter within the if clause in the submit function i.e.

-   you will need to set both values to true

 

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
if ($scope.uniqueusername && $scope.uniqueemail ) { 
    // proceed to process form via backend service
    // if successful route to next page
    // put new routing here using $location(path)
    // don’t forget to add $location as a parameter
    // to controller
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
