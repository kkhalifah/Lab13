
//iffe
  (function(){
    var app = angular.module('randomWords', []);

app.controller('ourController', function($scope){

  $scope.words= ['fork', 'puppies', 'flowers']
              // [{text: 'fork', cls:'plain'},
              //   {text: 'puppies', cls:'bold' },
              //   {text: 'flowers', cls:'blue' }  ];
  $scope.newWords = [];

// this is the function to add Oneword with no class(decoration)
   $scope.addOneWord = function(i){
     $scope.newWords.push($scope.words[i]);
   };
   //function to add A word with Decoration
   $scope.addWordDecoration = function (){
     $scope.newWords.push({text: decorationWord.text});
   };
   //function to add  more than one word-no decoration
   $scope.addMoreWord = function (){
     $scope.newWords.push({text: wordMore.text});
   };
   //function to add  more than one word-with decoration
   $scope.addMoreWordDecoration = function (){
     $scope.newWords.push({text: decorationWordMore.text});
   };



}) //end of controller function











})();
