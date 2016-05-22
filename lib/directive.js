/*function directive($rootScope, $timeout) {
	return {
		link: function (scope, element) {

			var func = function (event, toState) {
				//alert(2345)
				//console.log(event);
				var title=("")
				if (toState.data && toState.data.title) {
					title +=""+toState.data.title;
					$timeout(function(){
						element.html(
						)
				},1000)
				}
				

			}
			$rootScope.$on("$stateChangeStart", func)

		}

	}
}
angular.module('App')
		.directive('pageTitle', directive)*/