$(() => {
  randomUser();

  $("#findRandom").on("click", () => {
    clear();
    randomUser();
  });
});

const randomUser = () => {
  let url = "https://randomuser.me/api/";
  fetch(url)
    .then((res, error) => {
      return res.json().then(data => {
        let img = data.results[0].picture.large;
        let gender = data.results[0].gender;
        let firstName = data.results[0].name.first;
        let lastName = data.results[0].name.last;
        let cell = data.results[0].cell;
        let city = data.results[0].location.city;
        let state = data.results[0].location.state;
        let street = data.results[0].location.street;
        let email = data.results[0].email;
        $(".user-image").append(
          `<img src='${img}' alt='random person' id='random-img'/>`
        );
        $(".user-name").html(`<p><b>Name :</b>${firstName} ${lastName} </p>`);
        $(".user-gender").html(`<p><b>Gender :</b> ${gender} </p>`)
        $(".user-cell-phone").html(`<p><b>Phone :</b> ${cell} </p>`)
        $(".user-location").html(`<p><b>Address :</b> ${street} ${city},${state} </p>`)
        $(".user-email").html(`<p><b>E-mail :</b> ${email} </p>`)
      });
    })
    .catch(error => {
      console.log(error);
    });
};

const clear = () => {
  $(".user-image").empty();
  $(".user-name").empty();
  $(".user-cell-phone").empty();
  $(".user-gender").empty();
};
