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

*/

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
