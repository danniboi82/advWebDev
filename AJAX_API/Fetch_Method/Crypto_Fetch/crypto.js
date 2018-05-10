alert("hello?");
let url = "https://api.coindesk.com/v1/bpi/currentprice.json";

fetch(url)
  .then((response, error) => {
    console.log(response);
    return response.json().then((data)=>{
        console.log(data);
    })
  })
  .catch(() => {
    console.log(error);
  });
