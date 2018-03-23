(function(){
	angular.module("newsWiki")
			.controller("ModaCtrl",function(){
				var me= this;

				me.moda=[
				            
				            {
				                "idNoticia": 3,
				                "codigoNoticia": "TFH-1455",
				                "tituloNoticia": "Mestiza, la marca de Gamarra que compite en Brasil",
				                "descripcionNoticia": "Loryade laborum magni, officiis ratione reiciendis sunt aque Commodi doloribus error ex fuos est fuga illum iusto ne" +
				                "velit voluptas voluptates. Dst fuga illum iusto necessita in sed vitae voluptates. Tenetur giat laborum mag At e",
				                "fechaPublicacion": new Date(2015,7,30),
				                "banner" : "http://cde.3.elcomercio.pe/ima/0/1/2/3/4/1234368.jpg",
				                "destacado": false,
				                "categoria": "Economia",
				                "tags": ["mestiza", "gamarra"]
				            },
				            
				            {
				                "idNoticia": 6,
				                "codigoNoticia": "NRR-6002",
				                "tituloNoticia": "Los primeros dias del LifWeek",
				                "descripcionNoticia": "Loryade laborum magni, officiis ratione reiciendis sunt aque Commodi doloribus error ex fuos est fuga illum iusto ne" +
				                "velit voluptas voluptates. Dst fuga illum iusto necessita in sed vitae voluptates. Tenetur giat laborum mag At e",
				                "fechaPublicacion": new Date(2015,10,2),
				                "banner" : "http://cde.3.elcomercio.pe/ima/0/1/2/3/4/1234337.jpg",
				                "destacado": false,
				                "categoria": "Moda",
				                "tags": ["lifweek", "moda"]
				            }
				        ];

				        
			});
}());