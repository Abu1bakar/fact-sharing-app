const btn = document.querySelector('.btn-open');
const form = document.querySelector('.fact-form');
const factslist = document.querySelector('.facts-list');

factslist.innerHTML = '';

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

// [2, 4, 6, 8].forEach(function (el) {
//   console.log(el);
// });

// const times10 = [2, 4, 6, 8].map(function (el) {
//   return el * 10;
// });

const times10 = [2, 4, 6, 8].map((el) => el * 10);
console.log(times10);

const names = ['Adam', 'Emily', 'Lily', 'Hamza'].map((n) => n.toUpperCase());
console.log(names);

const CATEGORIES = [
  { name: 'technology', color: '#1E3A4D' },
  { name: 'science', color: '#16a34a' },
  { name: 'finance', color: '#2E4A36' },
  { name: 'society', color: '#5A3E2E' },
  { name: 'entertainment', color: '#4A2C33' },
  { name: 'health', color: '#2F4B43' },
  { name: 'history', color: '#3E3750' },
  { name: 'news', color: '#4D3E14' },
];

const allCategories = CATEGORIES.map((el) => el.name);
console.log(allCategories);

const initialFacts = [
  {
    id: 1,
    text: 'React is being developed by Meta (formerly facebook)',
    source: 'https://opensource.fb.com/',
    category: 'technology',
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: 'Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%',
    source:
      'https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids',
    category: 'society',
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: 'Lisbon is the capital of Portugal',
    source: 'https://en.wikipedia.org/wiki/Lisbon',
    category: 'society',
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;

  if (age >= 0) return age;
  else
    return `Impossible year, Needs to be equal to or less then ${currentYear}`;
}

const factAge = initialFacts.map((el) => calcFactAge(el.createdIn));
console.log(factAge);
console.log(factAge.join(' & '));
*/
