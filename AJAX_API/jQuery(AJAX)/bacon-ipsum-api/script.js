$(()=>{
$.ajax({
    method : "GET",
    url : "https://baconipsum.com/api/?type=meat-and-filleradfadfadsfa",
    //if dataType isn't specified jQuery guesses the dataType for you
    dataType : "json"
})
.done((data)=>{
    console.log(data);
    $(".display").text(data);
})
.fail(()=>{
    alert("OH NO!!!")
})
})