

(function(){
	angular.module("newsWiki")
		.controller("CategoriesCtrl",function(){
			var me= this;

			me.showCategories=true;

			me.toogleCategories=function(){
				me.showCategories=!me.showCategories;
			};
			me.categories= ["Politica","Economia","Deportes","Moda"];
			
		})
}());