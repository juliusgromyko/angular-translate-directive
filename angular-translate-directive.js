// Angular Translate Directive

angular.module('pascalprecht.translate')
  .directive('translateLang',
    ['$translate',
    function($translate){
      return {
        restrict: 'A',
        link: function($scope, $elem, $attr){
          $elem.on('click', function(event) {
            $translate.use($attr.translateLang);
            $translate.refresh($attr.translateLang);
          });
        }
      }
    }
]);