angular.module('app').controller('mvMainCtrl', function($scope) {
    $scope.courses = [
        {name: "JavaScript for beginners", featured: true, published: new Date(2014,1,30)},
        {name: "Intermediate JavaScript", featured: true, published: new Date(2013,1,10)},
        {name: "Advanced JavaScript", featured: true, published: new Date(2012,7,20)},
        {name: "Easy Java", featured: true, published: new Date(2011,4,22)},
        {name: "Java Hacks", featured: true, published: new Date(2010,5,15)},
        {name: "Java for experts", featured: true, published: new Date(2009,7,28)}
    ]
});