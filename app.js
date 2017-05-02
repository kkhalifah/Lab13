
//iffe
  (function(){
    var app = angular.module('randomWords', []);

app.controller('ourController', function($scope){

  var words=    ['fork ' ,'puppies ','flowers '];

    var multipleWords =  ['cats are weird ', 'I like grass ','why go there ', 'rocks are soft ','girls are gross ','my cup is broken '];

    var classColor = ['one', 'two', 'three', 'four', 'five', 'six'];

  $scope.newWords = [];

// this is the function to add Oneword with no class(decoration)
   $scope.addOneWord = function(){
     var obj = words[Math.floor(Math.random()*words.length)];
     var newobj = {name: obj};
     $scope.newWords.push(newobj);
    // console.log(obj);
   };

   //function to add A word with Decoration
   $scope.addWordDecoration = function (){
     var obj = words[Math.floor(Math.random()*words.length)];
     var style = classColor[Math.floor(Math.random()*classColor.length)];

     $scope.newWords.push({name: obj, cls: style});
     //console.log(obj);
     console.log(words);
   };

   //function to add  more than one word-no decoration
   $scope.addMoreWord = function (){
     var obj = multipleWords[Math.floor(Math.random()*multipleWords.length)];
     $scope.newWords.push({name: obj});
   };

   //function to add  more than one word-with decoration
   $scope.addMoreWordDecoration = function (){
     var obj = multipleWords[Math.floor(Math.random()*multipleWords.length)];
     var style = classColor[Math.floor(Math.random()*classColor.length)];
     $scope.newWords.push({name:obj, cls: style});
   };



}) //end of controller function











})();
