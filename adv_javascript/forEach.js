//Dissection of What a forEach() actually does
//Receives an Array and each ELEMENT in array is applied to call back function
forEach = (arr, cb) =>{
    for(var i = 0; i < arr.length; i++){
        return cb(arr[i], i, arr);
    }
}