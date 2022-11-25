const menu = {
  width: 200,
  height: 300,
  title: 'My Menu'
};

function multiplyValue(menu) {
  for (let j in menu) {
    if (typeof menu[j] === 'number'){
      menu[j] *= 2;
    }
  }
}

console.log(menu); // 200; 300;
multiplyValue(menu);
console.log(menu) // 400; 600

