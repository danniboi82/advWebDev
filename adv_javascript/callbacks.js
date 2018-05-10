var arr = [1, 2, 3, 4, 5, 6, ];

arr.forEach(num => console.log(num * 2));


// forEach dissection
//it recieves two arguments an ARRAY and CALLBACK f(x);
forEach = (array, callback) => {
    //loops through each element in ARRAY
    for (var i = 0; i < array.length; i++) {
        //Call back is applied to each element in array
        callback(array[i], i, array);
    }
}

//findIndex dissection
//findIndex method also receives an ARRAY and a CALLBACK f(x);
findIndex = (array, callback) => {
    //Loops through array
    for (var i = 0; i < array.length; i++) {
        //if anything matches what callback defines then return the index
        if (callback(array[i], i, array)) {
            return i;
        }
    }
    //return falsy 
    return -1;
}


// findIndex = (array, callback)=>{
//     for(let [index, element] of array.keys()){
//         if(callback(element, index, array)){
//             return index;
//         }
//     }
//     return -1;
// }