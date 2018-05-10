$("#search").on("click", () => {
  let XHR = new XMLHttpRequest();

  XHR.onreadystatechange = () => {
    if (XHR.readyState == 4 && XHR.status == 200) {
      let imgURL = JSON.parse(XHR.responseText);
      console.log(imgURL.message);
      $("#photo").attr("src", imgURL.message);
    }
  };
  XHR.open("GET", "https://dog.ceo/api/breeds/image/random");
  XHR.send();
});
