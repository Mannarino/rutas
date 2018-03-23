(function(){
	angular.module("newsWiki")
			.controller("EconomiaCtrl",function(){
				var me= this;

				me.economia=[
				            {
				                "idNoticia": 1,
				                "codigoNoticia": "NWD-9838",
				                "tituloNoticia": "Crecimiento economico",
				                "descripcionNoticia": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dolor,eos laborum quaerat quam quos rerum!" +
				                "Expedita itaque optio praesentium quo sequi soluta voluptatem! At eos est fuga illum iusto necessitatibus " +
				                "bcaecati quia tempora ullam. Commodi doloribus error ex fugiat laborum magni, officiis ratione reiciendis sunt" +
				                "velit voluptas voluptates. Culpa deleniti dolore, excepturi fugit id in sed vitae voluptates. Tenetur.",
				                "fechaPublicacion": new Date(),
				                "banner" : "img/economia-a.jpg",
				                "destacado": true,
				                "categoria": "Politica",
				                "tags": ["peru", "politica", "guerra"]
				            },
				            {
				                "idNoticia": 2,
				                "codigoNoticia": "NFK-1275",
				                "tituloNoticia": "Ofertas laborales",
				                "descripcionNoticia": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Al quaerat quam quos rerum!" +
				                "Expedita itaque Commodi doloribus error ex fugiat laborum mag At eos est fuga illum iusto necessitatibus " +
				                "bcaecati quia tempora ullam. Commodi doloribus error ex fugiat laborum magni, officiis ratione reiciendis sunt" +
				                "velit voluptas voluptates. Dst fuga illum iusto necessita in sed vitae voluptates. Tenetur.",
				                "fechaPublicacion": new Date(2015,0,1),
				                "banner" : "img/economia-b.jpg",
				                "destacado": true,
				                "categoria": "Politica",
				                "tags": ["alan garcia", "politica"]
				            }
				            
				        ];

				        
			});
}());