//listen for submit
document.getElementById('loan-form').addEventListener("submit", function (e) {

//hide loader
document.getElementById('result').style.display = "none"

//show loader
document.getElementById("loading").style.display = "block";

setTimeout(calculateResults, 3000)

  e.preventDefault();
});

//calculate Result

function calculateResults(e) {
  console.log("calculate .....");


  //uI var

  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const year = document.getElementById('year');
  const monthlyPayment = document.getElementById('monthlypayment');
  const totalpayment = document.getElementById('totalpayment');
  const totalinterest = document.getElementById('totalinterest');



  const principal = parseFloat(amount.value);
  const calculatedinterest = parseFloat(interest.value) / 100 / 12;
  const calculatedpayments = parseFloat(year.value) * 12;

  //compute monthly
  const x = Math.pow(1 + calculatedinterest, calculatedpayments);
  const monthly = (principal*x*calculatedinterest)/(x-1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalpayment.value = (monthly * calculatedpayments).toFixed(2);
    totalinterest.value = ((monthly * calculatedpayments)-principal).toFixed(2);

    //show result
    document.getElementById('result').style.display = "block"

    //hide loader
    document.getElementById("loading").style.display = "none";

  }else {
    showError("Please Check Your Numbers ");

  }


}

//show error
function showError(error) {

  //hide result
  document.getElementById('result').style.display = "none"

  //hide loader
  document.getElementById("loading").style.display = "none";


  //create div
  const errorDiv = document.createElement("span");

  //get element
  const card = document.querySelector(".card");
  const heading = document.querySelector('.heading');

  //add class
  errorDiv.className = "alert alert-danger";

  //create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));
  //insert error above
  card.insertBefore(errorDiv, heading);

  // clear error after 3sec
  setTimeout(clearError, 2000)
}

//clear error
function clearError() {
  document.querySelector('.alert').remove();
}
