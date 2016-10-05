var app = angular.module("myApp", ['duParallax' , 'smoothScroll']).run(['$anchorScroll', function($anchorScroll) {
  $anchorScroll.yOffset = 100;   // always scroll by 100 extra pixels
}])

app.controller('myController' , function($scope , parallaxHelper) {
    $scope.city = 'Bucharest';
    $scope.background = parallaxHelper.createAnimator(-0.35 , 600 , 0 , -100);
    $scope.background_two = parallaxHelper.createAnimator(-0.5 , 600 , 0 , 0);
    $scope.isCollapsed = true;
    $scope.description = false;
    
    
    
    
    $scope.grozavesti_bridge = {
        text : 'Lorem ipsum dolor sit amet, rutrum suspendisse rhoncus ad, erat pellentesque cursus gravida, nullam   mauris et morbi, et                 nisl magna justo sed, purus donec enim mauris nec quam vivamus. Et eleifend ut nemo blandit mi eget, dui dolor donec arcu                 dui velit tincidunt. Pretium integer vel libero fusce, vitae dolor varius, aliquam ac egestas in, pulvinar pretium                         voluptas elit, nec euismod maecenas mauris scelerisque vel sollicitudin. Ipsum imperdiet ut ut nisl.',
        image : 'images/pod_grozavesti.png'
    }
    

});

