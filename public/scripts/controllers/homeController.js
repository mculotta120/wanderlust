myApp.controller('homeController', [ '$scope', '$http', function( $scope, $http ){
  // console.log("homeController");
  $scope.currentIndex = 0;
  $scope.currentSlide = [];
  $scope.slides = [
    {
      image: '/images/Issue001_Page001_FrontCover.jpg',
      caption: 'Issue #001 front cover'
    },
    {
      image: '/images/Issue002_Page001_FrontCover.jpg',
      caption: 'Issue #002 front cover'
    },
    {
      image: '/images/Issue003_Page001.jpg',
      caption: 'Issue #003 front cover'
    }
  ];

  $scope.thisSlide = function(){
    console.log("currentSlide", $scope.currentSlide);
    $scope.currentSlide = $scope.slides[$scope.currentIndex];
  };

  $scope.prev = function(){
    console.log("prev");
    $scope.currentIndex--;
    if( $scope.currentIndex === -1 ){
            $scope.currentIndex = 0;
          }
    console.log("index = ", $scope.currentIndex);
    $scope.thisSlide();
  };

  $scope.next = function(){
    console.log("next");
    $scope.currentIndex++;
    if( $scope.currentIndex == $scope.slides.length ){
    $scope.currentIndex = 0;}
    console.log("index = ", $scope.currentIndex);
    $scope.thisSlide();
  };
}]);
