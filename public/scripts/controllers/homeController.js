myApp.controller('homeController', [ '$scope', '$http', 'ui.bootstrap', function( $scope, $http ){
  console.log("homeController");
  $scope.myInterval = 3000;
  $scope.slides = [
    {
      image: '/images/Issue001_Page001_FrontCover.jpg'
    },
    {
      image: '/images/Issue002_Page001_FrontCover.jpg'
    },
    {
      image: '/images/Issue003_Page001.jpg'
    }
  ];

}]);
