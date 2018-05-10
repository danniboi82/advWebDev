let url = "https://api.coindesk.com/v1/bpi/currentprice.json";

fetch(url, {
    method: "POST", //GET PUT POST DELETE
    body : "BLAHBLAH" //What would be getting posted usually JSON.stringyfy(whatever data {name: xxx, login: xxx})
    //other options headers/ mode/ credentials/ referrer etc...  
})
  .then((response, error) => {
    console.log(response);
    return response.json().then((data)=>{
        console.log(data);
    })
  })
  .catch(() => {
    console.log(error);
  });
