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

export {
  formatDate,
  formatValue
}