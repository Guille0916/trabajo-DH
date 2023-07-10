const marcasElejidas=require('./collectibles');
let hotToys = importar('Hot Toys');
let bandai = importar('Bandai');
let starWars = importar('Star Wars');
let unifiedCollectibles  = [...hotToys,...bandai,...starWars];
let collectibles = {
    figuras:unifiedCollectibles,
    listFigures: function(){
        this.figuras.forEach(function(figuras){
            console.log('marca:${figura.marca},Nombre:{figura.nombre},Precio:{figura.precio},Stock:${figura.stock}');
        })
    },
    figurasByBrand:function(marca){
        this.figuras.filter(function(figura){
            return figura.marca === marca;
        })
    }
}
