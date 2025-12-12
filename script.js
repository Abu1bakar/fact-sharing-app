const btn = document.querySelector('.btn-open');
const form = document.querySelector('.fact-form');

btn.addEventListener('click', function () {
  if (form.classList.contains('hidden')) {
    form.classList.remove('hidden');
    btn.textContent = 'Close';
  } else {
    form.classList.add('hidden');
    btn.textContent = 'Share a Fact';
  }
});

/* Varibles, Values, Operators

let upVote = 24;
let downVote = 3;

const totalValue = upVote + downVote;

const logicalVotes = upVote < downVote;
const logicalVotes2 = upVote > downVote;

console.log(logicalVotes);
console.log(logicalVotes2);
console.log(totalValue);



// Function
function calcYear(year) {
  const ourYear = new Date().getFullYear();
  const ageTest = ourYear - year;
  return ageTest;
}

const age = calcYear(2015);
console.log(age);

// If Else Statement

const name = 'Abubakar';
const password = 'Hussain2005.';
const hint = 'Huss.........';

if (password === 'Hussain2005.' && name === 'Abubakar') {
  console.log(`User Loged In`);
} else {
  console.log('Please Use Coorect User Name & Password');
}

let upVote = 24;
let MindBlowing = 12;

const falseFact = 50;
const totalValue = upVote + MindBlowing;

const message =
  totalValue > falseFact ? 'The fact is True' : 'The Fact is false';
console.log(message);

const factYearAge = (year) =>
  year <= new Date().getFullYear()
    ? `${year} was ${new Date().getFullYear() - year} years ago`
    : `We will see this year in ${year - new Date().getFullYear()} years time`;

console.log(factYearAge(2028));
console.log(factYearAge(2015));


//Arrays

const fact = ['React was created by facebook', 2016, true];

const [text, createdIn, isCorrect] = fact;

console.log(text);
console.log(createdIn);
console.log(isCorrect);

const newFact = [...fact, 'Socity'];
console.log(newFact);

const newUsers = ['Abubakar', 'Amanda', 'Jolly', 'Adam'];

const [Admin, ...restUsers] = newUsers;

console.log(newUsers);
console.log(Admin);
console.log(restUsers);

const userUpdates = [...newUsers, 'Katie', 'saif', 'Mohammed'];

console.log(userUpdates);

console.log(userUpdates[3]);

*/

const factObj = {
  text: 'Tiktok Is The Fastest Growing Business Booster as of 2025 ',
  category: 'Entertainment',
  createdIn: 2025,
  isCorrect: true,
  currentSummary: function () {
    return `This fact is ${
      this.text
    }and from the category of ${this.category.toUpperCase()}`;
  },
};

console.log(factObj.text);

const { text, createdIn, isCorrect } = factObj;

console.log(text);
console.log(createdIn);
console.log(isCorrect);

console.log(factObj.currentSummary());
