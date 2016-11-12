var mainApp = angular.module("mainApp", []);

// mainApp.directive('myCustomer', function() {
//   return {
//     //template: 'Name: {{customer.name}} Address: {{customer.address}}',
//     link: function ($scope, element, attrs) { 

//     	//alert(attrs);
//     	console.log(attrs);
//     	element.css("border", "1px solid #cccccc");
//     	element.bind('click', function () {
//                 element.html('You clicked me!');
//             });
//     }
//   };
// })

mainApp.directive('bookingSlot', function() {
  return {
    restrict: 'E',
    link: function($scope, element, attr,$rootScope){
      var someVar=$scope;
       var slot=parseInt(attr.slotduration);
           var hours, minutes, ampm;
    var time = [];
    for(var i = 0; i <= 1440; i += slot){
        hours = Math.floor(i / 60);
        minutes = i % 60;
        if (minutes < 10){
            minutes = '0' + minutes; // adding leading zero
        }
        //alert(hours);
        ampm = hours % 24 < 12 ? 'AM' : 'PM';
        hours = hours % 12;
        if (hours === 0){
            hours = 12;
        }
        time.push(hours + ':' + minutes + ' ' + ampm); 
    }
    for(i=time.indexOf(attr.starttime);i<=time.indexOf(attr.endtime);i++){
      element.append("<span class='customcls'>"+time[i]+"</span>");
       element.bind('click',function(someVar){
      $scope.pickedslot=someVar.target.childNodes[0].data;
      $scope.$apply();
    })
    }
}
}
});




mainApp.controller('CalcController',function ($scope) {
$scope.pickedslot = "";
$scope.$watch('pickedslot',function(newValue){
  alert('pickedslot : '+newValue);
});
 $scope.customer = {
    name: 'Naomi',
    address: '1600 Amphitheatre'
  };


// $scope.square = function() {
// 	MyService.method1($scope.number);
// $scope.result = CalculatorService.square($scope.number);
// }
});
