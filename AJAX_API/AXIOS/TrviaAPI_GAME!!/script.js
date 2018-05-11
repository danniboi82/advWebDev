axios
  .get("https://opentdb.com/api.php?amount=10")
  .then(res => {
    let results = res.data.results;
    createQuestion(results);
  })
  .catch(err => {
    console.log(err);
  });

createQuestion = data => {
  for (var i = 0; i < data.length; i++) {
    console.log(data[i]);
    let question = $("<div>");
    question.addClass(`question-${i}`);
    $(".questions").append(question);
    $(`.question-${i}`).html(
      `<p>Question ${i + 1} : ${data[i].question}</p>`
    );
    let choice = data[i].incorrect_answers;
    for (var j = 0; j < choice.length; j++) {
      console.log(choice[j]);
      //need to loop around multiple choice and inject??? 
      $(`.question-${i}`)
        .append(`
        <form>
          <div class='choices'>
            <input type='radio' value='${j}' id='choice-${j}'  />
            <label for='choice-${j}'>${choice[j]}</label>
          </div>
        </form>`)
    }
  }
};

createChoices = data => {

}