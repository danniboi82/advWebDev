$(() => {
    makeRequest();
  $("#button").on("click", () => {
    makeRequest();
  });
});

const makeRequest = () => {
  let XHR = new XMLHttpRequest();
  XHR.onreadystatechange = () => {
    if (XHR.readyState == 4 && XHR.status == 200) {
      let bpi = JSON.parse(XHR.responseText);
      console.log(bpi);
      let coin = bpi.chartName;
      let dollars = bpi.bpi.USD.rate;
      let euros = bpi.bpi.EUR.rate;
      $("#dollars").text(`$${dollars}`);
      $("#euros").text(`€${euros}`);
    }
  };

  XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
  XHR.send();
};
