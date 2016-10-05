app.directive('navigationBar' , function() {
    return {
        restrict : 'E',
        templateUrl : 'components/navbar.html'
    }
})


app.directive('placeCard' , function() {
    return {
        restrict : 'E',
        scope : {},
        templateUrl: 'components/place_card.html',
        controller : function($scope , $element , $http) {
            
                $scope.show_description = false;
            
                $http.get('data/places_data.json').then(function(response) {
                    $scope.places = response.data;
                })
        }
    }
});

app.directive('placeCardTwo' , function() {
    return {
        restrict : 'E',
        scope : {},
        templateUrl: 'components/place_card.html',
        controller : function($scope , $element , $http) {
            
                $scope.show_description = false;
            
                $http.get('data/places_data_two.json').then(function(response) {
                    $scope.places = response.data;
                })
        }
    }
});


app.directive('activities' , function() {
    return {
        restrict : 'E',
        scope : {},
        templateUrl : 'components/activities.html',
        controller : function($scope , $element) {
            $scope.activities = [
                {
                    title : 'Grigore Antipa National Museum of Natural History',
                    icon : 'images/museum_icon.png'
                },

                {
                    title : 'Romanian National Opera',
                    icon : 'images/opera_icon.png'
                },
                
                {
                    title : 'National Theatre Bucharest',
                    icon : 'images/theatre_icon.png'
                }
            ];
            
            $scope.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget diam viverra, rhoncus leo sit amet, iaculis est. Suspendisse tristique, est nec fringilla lobortis, libero lectus facilisis diam, vel mollis nisi nulla ut dolor. Sed sed vehicula augue. Cras vitae ante tempor, mattis orci sed, dignissim lacus. Morbi tincidunt mauris at consectetur rutrum.'
        }
    }
})




app.directive('makeHov' , function() {
    return {
        link : function(scope , element , attrs) {
            element.bind('mouseover' , function() {
                element.css('background-color' , 'white').css('color' , 'royalblue').css('border' , '2px solid royalblue');
            });
            
            element.bind('mouseleave' , function() {
                element.css('background-color' , 'royalblue').css('color' , 'white').css('border' , '2px solid white');
            })
        }
    }
})

