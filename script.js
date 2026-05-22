const billAmount = document.getElementById('billAmount');
  const tipAmount = (bill * selectedTip) / 100;
  const grandTotal = bill + tipAmount;
  const perPerson = grandTotal / totalPeople;

  tipAmountEl.textContent = `Rs ${tipAmount.toFixed(2)}`;
  grandTotalEl.textContent = `Rs ${grandTotal.toFixed(2)}`;
  perPersonEl.textContent = `Rs ${perPerson.toFixed(2)}`;
}

billAmount.addEventListener('input', calculate);
people.addEventListener('input', calculate);

customTip.addEventListener('input', () => {

  tipButtons.forEach(btn => btn.classList.remove('active'));

  selectedTip = Number(customTip.value);

  calculate();
});

tipButtons.forEach(button => {

  button.addEventListener('click', (e) => {

    e.preventDefault();

    tipButtons.forEach(btn => btn.classList.remove('active'));

    button.classList.add('active');

    selectedTip = Number(button.dataset.tip);

    customTip.value = '';

    calculate();
  });
});

resetBtn.addEventListener('click', () => {

  billAmount.value = '';
  customTip.value = '';
  people.value = '';

  selectedTip = 0;

  billError.textContent = '';
  tipError.textContent = '';
  peopleError.textContent = '';

  tipButtons.forEach(btn => btn.classList.remove('active'));

  tipAmountEl.textContent = 'Rs 0.00';
  grandTotalEl.textContent = 'Rs 0.00';
  perPersonEl.textContent = 'Rs 0.00';
});
