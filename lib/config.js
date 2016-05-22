/*App.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise("/home");
$stateProvider.state("home",{
		url:"/home",
		template:"<div>首页</div>"

})
.state("about",{
		url:"/about",
		template:"<div>关于</div>"

})
.state("shopping",{
		url:"/shopping",
		template:"<div>购物</div>"

})
.state("me",{
		url:"/me",
		template:"<div>我的</div>"

})


});
	*/


function config($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("index");
	$stateProvider.state("index", {
			url: "/index",
			templateUrl: "./html/home.html",
			views: {
				"": {
					templateUrl: "./html/home.html"
				},
				"top@index": {
					templateUrl: "./html/header.html"
				},
				"cen@index": {
					templateUrl: "./html/cen.html"
				},
				"bot@index": {
					templateUrl: "./html/footer.html"
				}
			},
			/*controller: function ($scope, $state) {
				
				$state.go("index.shouye")
			}*/
		})
		.state("index.shouye", {
			url: "/shouye",
			templateUrl: "./html/shouye.html"

		})
		.state("index.news", {
			url: "/news",
			templateUrl: "./html/news.html"

		})
		.state("index.fenlei", {
			url: "/fenlei",
			templateUrl: "./html/fenlei.html",
			controller: function ($scope, $http) {
				$http.get("data.json").success(function (data) {
					$scope.data = data;

				})

			}

		})
		/*.state("index.fenlei.costume", {
			url: "/costume",
			templateUrl: "./html/feilei_list.html",
			controller: function ($scope, $http) {
				$http.get("data.json").success(function (data) {
					$scope.data = data;

				})

			}



		})*/
		.state("index.remen", {
			url: "/remen",
			templateUrl: "./html/hot.html"

		})
		.state("index.kefu", {
			url: "/kefu",
			templateUrl: "./html/server.html"

		})

}

angular
	.module("App")
	.config(config)