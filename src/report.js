// report.js
// Programer: Ikjae Jung
// Date 9/28

const fs = require('fs');
const yelp = require('./yelpfunc.js');

let result;

function content(callback){
    fs.readFile("business.json", "utf8", (err, data) => {
        if(err){
            return callback(err);
        }callback(null, data);
        // const elements = data.split("\n");
        // const array = [];
        // let f = JSON.parse(elements[0]);
        // for(let i = 0; i < elements.length; i++){
        //     const objjson = JSON.parse(elements[i]);
        //     array.push(objjson);
        // }
        // console.log(array[0]);
        // console.log(array[0].name + 'is a business located in ' + array[0].city + ' with a rating of ' + array[0].stars + ' and ' + array[0].review_count + ' reviews.');
        //console.log(array[0][hours]);
        //console.log(array);
        // content = array
    });
}

content(function(err,data){
    const elements = data.split("\n");
    const array = [];
    let f = JSON.parse(elements[0]);
    for(let i = 0; i < elements.length; i++){
        const objjson = JSON.parse(elements[i]);
        //if(elements[i] !=="{\"nextFile\": \"someSecretFileName.json\"}"){
            array.push(objjson);
        //}
    }
    // console.log(array[0]);
    // console.log(array[0].name + 'is a business located in ' + array[0].city + ' with a rating of ' + array[0].stars + ' and ' + array[0].review_count + ' reviews.');
    //console.log(array[0][hours]);
    //console.log(array);
    yelp.processYelpData(array);
});

module.exports = {
    content: content
}