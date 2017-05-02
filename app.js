
//iffe
  (function(){
    var app = angular.module('randomWords', []);

app.controller('ourController', function($scope){

  var words=    [{text: 'fork ', cls:''},
              {text: 'puppies ', cls:'' },
              {text: 'flowers ', cls:'' } ];

    var multipleWords =  [{text: 'cats are weird ', cls: ''},
                          {text: 'I like grass ', cls: ''},
                          {text: 'why go there ', cls: ''},
                          {text: 'rocks are soft ', cls: ''},
                          {text: 'girls are gross ', cls: ''},
                          {text: 'my cup is broken ', cls: ''}];

    var classColor = ['one', 'two', 'three', 'four', 'five', 'six'];

  $scope.newWords = [];

// this is the function to add Oneword with no class(decoration)
   $scope.addOneWord = function(){
     var obj = words[Math.floor(Math.random()*words.length)];
     $scope.newWords.push(obj);
    // console.log(obj);
   };

   //function to add A word with Decoration
   $scope.addWordDecoration = function (){
     var obj = words[Math.floor(Math.random()*words.length)];
     var style = classColor[Math.floor(Math.random()*classColor.length)];
     obj.cls = style;
     $scope.newWords.push(obj);
     //console.log(obj);
   };

   //function to add  more than one word-no decoration
   $scope.addMoreWord = function (){
     var obj = multipleWords[Math.floor(Math.random()*multipleWords.length)];
     $scope.newWords.push(obj);
   };

   //function to add  more than one word-with decoration
   $scope.addMoreWordDecoration = function (){
     var obj = multipleWords[Math.floor(Math.random()*multipleWords.length)];
     var style = classColor[Math.floor(Math.random()*classColor.length)];
     obj.cls = style;
     $scope.newWords.push(obj);
   };



}) //end of controller function











})();
