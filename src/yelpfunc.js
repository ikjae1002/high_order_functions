// yelpfunc.js


function processYelpData(restaurants){
    // Average star for restaurants
    const allstars = restaurants.map(function(rating){
        if(!isNaN(rating.stars) && rating.stars !== undefined){
            return rating.stars;
        }
    });
    allstars.pop(-1);
    const sum = allstars.reduce(function(allstar, curstar){
        return allstar+curstar
    });
    const average = sum / restaurants.length;
    //console.log(average);
    console.log("* Average Rating of the dataset: " + average.toFixed(2));

    // Restaurants in vegas
    function pizzaplace(restaurant){
        if(restaurant.categories.includes("Pizza")){
            return true;
        }else{
            return false;
        }
    }
    function locationLV(restaurant){
        if(restaurant.city.includes("Las Vegas")){
            return pizzaplace(restaurant);
        }else{
            return false;
        }
    }
    function locationNV(restaurant){
        if(restaurant.state.includes("NV")){
            return locationLV(restaurant);
        }else{
            return false;
        }
    }
    let nevada = restaurants;
    nevada.pop(-1);
    const allpizzainVegas = nevada.filter(locationNV);
    console.log("\n* All restaurants in Las Vegas, NV that serve pizza");
    for(let i = 0; i < allpizzainVegas.length; i++){
        console.log("\t* " + allpizzainVegas[i].name + " (* " + allpizzainVegas[i].stars + " *)");
    }
}

module.exports = {
    processYelpData: processYelpData
};