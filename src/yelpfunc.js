// yelpfunc.js


function processYelpData(restaurants){
    // *************Average star for restaurants
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

    // ************Restaurants in vegas
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
    let lastobj = nevada.pop(-1);
    const allpizzainVegas = nevada.filter(locationNV);
    console.log("\n* All restaurants in Las Vegas, NV that serve pizza");
    for(let i = 0; i < allpizzainVegas.length; i++){
        console.log("\t* " + allpizzainVegas[i].name + " (* " + allpizzainVegas[i].stars + " *)");
    }

    //***************Two Mexican restaurants with most reviews

    let mexicanres = restaurants;

    function findmosttwo(rest){
        let first = {review_count: 0};
        let second = {review_count: 0};
        for(let i = 0; i < rest.length; i++){
            if(first.review_count < rest[i].review_count){
                second = first;
                first = rest[i];
            }else if(second.review_count < rest[i].review_count){
                second = rest[i];
            }
        }
        const arrayOfThem = [first, second];
        return arrayOfThem;
    }
    function mex(rest){
        if( rest.categories.includes("Mexican")){
            return true;
        }
    }
    const allmexican = mexicanres.filter(mex);
    const twomexican = findmosttwo(allmexican);
    console.log("\n* The two highest reviewed Mexican serving restaurants are:");
    console.log("\t* " + twomexican[0].name + ", " + twomexican[0].city + ", (" + twomexican[0].state + "), " + twomexican[0].review_count + " reviews, (* " + twomexican[0].stars + " stars *)");
    console.log("\t* " + twomexican[1].name + ", " + twomexican[1].city + ", (" + twomexican[1].state + "), " + twomexican[1].review_count + " reviews, (* " + twomexican[1].stars + " stars *)");

    // find most common name in the database
    const mostcommon = restaurants;
    const most = {};
    for(let i = 0; i < mostcommon.length; i++){
        if(most[mostcommon[i].name] === undefined){
            most[mostcommon[i].name] = 1;
        }else{
            most[mostcommon[i].name]++;
        }
    }
    //console.log(most);
    let commonname, commonnum;
    for(let property in most){
        if(commonname === undefined){
            commonname = property;
            commonnum = most[property];
        }else if(commonnum < most[property]){
            commonname = property;
            commonnum = most[property];
        }
    }
    console.log("\n* " + commonname + " is the most common business and it appears " + commonnum + " times in the dataset:");

    // Restaurant counts for each state
    const countStates = {};
    restaurants.forEach(function (each){
        if(countStates[each.state] === undefined){
            countStates[each.state] = 1;
        }else{
            countStates[each.state]++;
        }
    });
    console.log("\n* Restaurant count by state: ");
    for(let state in countStates){
        console.log("\t* " + state + ": " + countStates[state]);
    }
}

module.exports = {
    processYelpData: processYelpData
};