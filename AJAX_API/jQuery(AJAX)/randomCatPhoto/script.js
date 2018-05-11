$(".new-cat-img").click(()=>{

})



$.getJSON("http://aws.random.cat/meow")
.done((data)=>{
    console.log(data.file);
    if(data.file){
        $(".cat-img").html(`<img src='${data.file}' alt='' />`)
    }
})