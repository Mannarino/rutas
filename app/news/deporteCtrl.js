
(function(){
	angular.module("newsWiki")
			.controller("DeporteCtrl",function(){
				var me= this;

				me.deporte=[
				            {
				                "idNoticia": 1,
				                "codigoNoticia": "NWD-9838",
				                "tituloNoticia": "Jordan y Lebron",
				                "descripcionNoticia": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dolor,eos laborum quaerat quam quos rerum!" +
				                "Expedita itaque optio praesentium quo sequi soluta voluptatem! At eos est fuga illum iusto necessitatibus " +
				                "bcaecati quia tempora ullam. Commodi doloribus error ex fugiat laborum magni, officiis ratione reiciendis sunt" +
				                "velit voluptas voluptates. Culpa deleniti dolore, excepturi fugit id in sed vitae voluptates. Tenetur.",
				                "fechaPublicacion": new Date(),
				                "banner" : "img/jordan.jpg",
				                "destacado": true,
				                "categoria": "Politica",
				                "tags": ["peru", "politica", "guerra"]
				            },
				            {
				                "idNoticia": 2,
				                "codigoNoticia": "NFK-1275",
				                "tituloNoticia": "Kobe Bryan se retira",
				                "descripcionNoticia": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Al quaerat quam quos rerum!" +
				                "Expedita itaque Commodi doloribus error ex fugiat laborum mag At eos est fuga illum iusto necessitatibus " +
				                "bcaecati quia tempora ullam. Commodi doloribus error ex fugiat laborum magni, officiis ratione reiciendis sunt" +
				                "velit voluptas voluptates. Dst fuga illum iusto necessita in sed vitae voluptates. Tenetur.",
				                "fechaPublicacion": new Date(2015,0,1),
				                "banner" : "img/kobe.jpg",
				                "destacado": true,
				                "categoria": "Politica",
				                "tags": ["alan garcia", "politica"]
				            },
				            {
				                "idNoticia": 3,
				                "codigoNoticia": "TFH-1455",
				                "tituloNoticia": "Lebron James MVP",
				                "descripcionNoticia": "Loryade laborum magni, officiis ratione reiciendis sunt aque Commodi doloribus error ex fuos est fuga illum iusto ne" +
				                "velit voluptas voluptates. Dst fuga illum iusto necessita in sed vitae voluptates. Tenetur giat laborum mag At e",
				                "fechaPublicacion": new Date(2015,7,30),
				                "banner" : "img/lebrom.jpg",
				                "destacado": false,
				                "categoria": "Economia",
				                "tags": ["mestiza", "gamarra"]
				            }
				        ];

				        
			});
}());