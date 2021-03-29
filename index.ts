function sum(a: number, b: number) {
  return a + b;
}

const c = sum(2, 4);
// console.log("summ", c);

// typescript in Array
function multiplyArrayByTen(array: number[]) {
  return array.map((element) => (element *= 10));
}

const numbers = [1, 2, 3, 4];
const numbersMultiplyByTen = multiplyArrayByTen(numbers);
// console.log(numbersMultiplyByTen);

// typescript in OBJECT
type person = {
  firstName: string;
  lastName: string;
};

function fullName({ firstName, lastName }: person) {
  return firstName + " " + lastName;
}

const firstName = "tazkia";
const lastName = "jessy";

const getName = fullName({ firstName, lastName });
console.log(getName);

//npm install ts-node
// npm install typescript --include=dev
//npm run ts-node index.ts or npm run start
//check script(package.json)
