   // JSON.stringify/parse no need (since our calculation is already a string)

    let calculation = JSON.parse(localStorage.getItem('result')) || '';   

    function updateCalculation(value) {
      calculation += value;
      displayCalculation();

      localStorage.setItem('result' , JSON.stringify(calculation));
    }

    function displayCalculation()
    {
      const displayElement = document.querySelector('.js-displayCalculation');
      displayElement.innerHTML = calculation;
    }

