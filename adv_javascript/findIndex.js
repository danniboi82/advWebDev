//Dissection of What a findIndex() actually does
//Method that loops array and returns index for what the callback finds as a truthy value
findIndex = (arr, cb) => {
    for (var i = 0; i < arr.length; i++) {
        //if callback finds value that matches 
        if (cb(arr[i], i, arr)) {
            return i;
        }
    }
    return -1;
}