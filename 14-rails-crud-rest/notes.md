METHOD   PATH          ACTION    ACTIVERECORD
GET      "/drinks"     INDEX     @drinks = Drink.all
GET      "/drinks/:id" SHOW     @drink = Drink.find(params[:id])
POST     "/drinks"     CREATE    @drink = Drink.create(.....)
GET      "/drinks/new" NEW       ......
GET    "/drinks/:id/edit" EDIT   @drink = Drink.find(params[:id])
PATCH  "/drinks/:id"   UPDATE    @drink = Drink.find(params[:id])...drink.update({})
DELETE  "/drinks/:id"  DESTROY   @drink = Drink.find(params[:id])...@drink.destroy  
