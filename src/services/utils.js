const formatDate = (date) => {
  const [fullDate,] = date.split('T');
  const reverseDate = fullDate.split('-').reverse().join('/');
  let arr = reverseDate.split('/')
  arr.pop();
  return arr.join('/');
}

const formatValue = (value) => {
  let arr = value.split('');
  arr.pop();
  arr.pop();
  return arr.join('');
}

const calcBalance = (transactions) => {
  let total = 0;
  transactions.forEach(t => {
    if (t.inflow) {
      total += parseFloat(t.value);
    } else {
      total -= parseFloat(t.value);
    }
  });

  return total.toFixed(2);
}

export {
  formatDate,
  formatValue,
  calcBalance
}