let result = document.querySelector("#result");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
let count = 0;

plus.addEventListener("click", function increment() {
  count++;
  console.log(count);
  return result.innerHTML = count;
});

minus.addEventListener("click", function decrement() {
  count--;
  console.log(count);
  return result.innerHTML = count;
})