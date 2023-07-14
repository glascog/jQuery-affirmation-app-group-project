$(document).ready(onReady);

function onReady() {
  console.log("Hey jQuery!");

  // Handlers go here
  $("#fireButton").on("click", makeFire);
  $("#iceButton").on("click", makeIce);
  $(".submit-button").on("click", handleSubmit);
  $("#table").on("click", "#deleteButton", handleDelete);

}

// Emoji functions go here

function makeFire() {
  console.log("in makeFire");
  $("#emojiDiv").append(`<span>🔥</span>`);
}

function makeIce() {
  console.log("in makeIce");
  $("#emojiDiv").append(`<span>❄️</span>`);
}

function handleDelete() {
  console.log("this is:", $(this))
  $(this).parent().parent().remove()
  
}
function handleSubmit(event) {
  event.preventDefault();
  console.log('inside handleSubmit');

  const affirmationText = $('#affirmationInput').val();
  console.log('affirmationText', affirmationText);

  const authorText = $('#authorInput').val();
  console.log('authorText', authorText);

  $('#table').append(`
  <tr>
    <td>${affirmationText}</td>
    <td>${authorText}</td>
    <td><button id="deleteButton">🦖</button></td>
    </tr>`);
}