var app = angular.module('editableItems',[]).
	directive('editInPlace',function(){
		return {
			restrict: 'E',
			scope: {value: '='},
			template: '<span ng-click="edit()"ng-bind="value"></span><input ng-model="value"/>',
			link:function($scope,element, attrs){
				var inputElement = angular.element(element.children()[1] );

				element.addClass('edit-in-place');

				$scope.editing = false;

				$scope.edit = function(){
					$scope.editing = true;

					element.addClass('active');

					inputElement[0].focus();
					// makes editing more visual

				};
				// fires the moment the item loses focus
				// this is important to remove the input tag.
				inputElement.prop( 'onblur', function() {
			        $scope.editing = false;
			        element.removeClass( 'active' );
     			 });


			}
		}
	});

	app.controller('ContactsCtrl', function ( $scope ) {
	  $scope.contacts = [
	  // editable contacts
	    { name: 'Sharon'},
	    { name: 'Steve'},
	    {name: 'Rodrigo'}
	  ];
	});