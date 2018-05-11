$("#getBtn").click(() => {
  $.get("https://api.github.com/users/colt")
    .done(data => {
      console.log(data);
    })
    .fail(err => {
      console.log(err);
    });
});

$("#postBtn").click(()=>{
  $.post("https://api.github.com/users/colt")
  .done(data=>{
    console.log(data);
  })
  .fail(err=>{
    console.log(err);
  })
})

$("#getJSONBtn").click(()=>{
  $.getJSON("https://api.github.com/users/colt")
  .done(data=>{
    console.log(data);
  })
  .fail(err=>{
    console.log(err);
  })
})