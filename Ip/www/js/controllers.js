angular.module('app.controllers', [])



.controller('cameraTabDefaultPageCtrl', function($scope,$cordovaCamera) {
  var ref = new Firebase("https://project-498244156619960010.firebaseio.com/");
  $scope.takePicture = function() {
       var options = {
           quality : 75,
           destinationType : Camera.DestinationType.DATA_URL,
           sourceType : Camera.PictureSourceType.CAMERA,
           allowEdit : true,
           encodingType: Camera.EncodingType.JPEG,
           targetWidth: 300,
           targetHeight: 300,
           popoverOptions: CameraPopoverOptions,
           saveToPhotoAlbum: false
       };

       $cordovaCamera.getPicture(options).then(function(imageData) {
           $scope.imgURI = "data:image/jpeg;base64," + imageData;
           image = $scope.imgURI;
           alert(image);
           ref.push(image);
       }, function(err) {
           // An error occured. Show a message to the user
       });
   }
   $scope.post = function(){
     var companyName = $scope.company_name;
     var desc = $scope.description;
      ref.push({
        img:image,
        comp_name:companyName,
        description:desc,
        likes:1
      });
      alert(companyName,desc,image);
   }
})

.controller('cartTabDefaultPageCtrl', function($scope) {

})

.controller('cloudTabDefaultPageCtrl', function($scope) {

});
var image;
