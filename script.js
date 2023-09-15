var balance = 100;

    function updateBalance(amount) {
      balance += amount;
      document.getElementById('balance').innerHTML = balance;
    }

    function toggleDepositWithdraw() {
      var container = document.getElementById('deposit-withdraw-container');
      var depositAmount = document.getElementById('deposit-amount');
      var withdrawAmount = document.getElementById('withdraw-amount');

      if (container.style.display === 'none') {
        container.style.display = 'block';
        depositAmount.value = '';
        withdrawAmount.value = '';
      } else {
        container.style.display = 'none';
      }
    }

    function deposit() {
      var amount = parseInt(document.getElementById('deposit-amount').value);
      if (isNaN(amount) || amount <= 0) {
        alert("Invalid deposit amount. Please enter a valid amount.");
        return;
      }
      updateBalance(amount);
      document.getElementById('result').innerHTML = "+ $" + amount;
      document.getElementById('deposit-amount').value = '';
    }

    function withdraw() {
      var amount = parseInt(document.getElementById('withdraw-amount').value);
      if (isNaN(amount) || amount <= 0) {
        alert("Invalid withdrawal amount. Please enter a valid amount.");
        return;
      }
      if (amount > balance) {
        alert("Insufficient balance.");
        return;
      }
      updateBalance(-amount);
      document.getElementById('result').innerHTML = "- $" + amount;
      document.getElementById('withdraw-amount').value = '';
    }

    function play(userChoice) {
      var betAmount = parseInt(document.getElementById('betAmount').value);
      if (isNaN(betAmount) || betAmount <= 0) {
        document.getElementById('result').innerHTML = "Invalid bet amount. Please enter a valid amount.";
        return;
      }
      if (betAmount > balance) {
        document.getElementById('result').innerHTML = "Insufficient balance.";
        return;
      }

      var choices = ['rock', 'paper', 'scissors'];
      var randomChoice = choices[Math.floor(Math.random() * choices.length)];

      var result = '';
      var amountWon = 0;
      if (userChoice === randomChoice) {
        result = "It's a tie!";
      } else if (
        (userChoice === 'rock' && randomChoice === 'scissors') ||
        (userChoice === 'paper' && randomChoice === 'rock') ||
        (userChoice === 'scissors' && randomChoice === 'paper')
      ) {
        result = "You win!";
        amountWon = betAmount;
      } else {
        result = "You lose!";
        amountWon = -betAmount;
      }

      updateBalance(amountWon);
      if (amountWon > 0) {
        document.getElementById('result').innerHTML = result + " +" + amountWon;
      } else {
        document.getElementById('result').innerHTML = result + " " + amountWon;
      }

      // Update computer's choice image
      var computerChoiceImage = document.getElementById('computer-choice-image');
      var computerChoiceImageUrl = '';

      if (randomChoice === 'rock') {
        computerChoiceImageUrl = 'https://photo-cms-anninhthudo.epicdn.me/w800/Uploaded/2023/wopkplw/2021_08_03/225399460-888580311744741-1955955362126862006-n-9123.png';
      } else if (randomChoice === 'paper') {
        computerChoiceImageUrl = 'https://giadinh.mediacdn.vn/zoom/740_463/Images/Uploaded/Share/2010/04/19/anh4.jpg';
      } else if (randomChoice === 'scissors') {
        computerChoiceImageUrl = 'https://cdn.tgdd.vn/Products/Images/8558/276345/nha-bep-da-nang-delites-9230-2125-2.jpg';
      }

      computerChoiceImage.style.backgroundImage = 'url("' + computerChoiceImageUrl + '")';
    }
    function sellHouse() {
      window.location.href = "https://bds.com.vn/";
    }
