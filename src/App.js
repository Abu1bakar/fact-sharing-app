import { useState } from 'react';
import './style.css';

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

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <span style={{ fontSize: '40px' }}>{count}</span>
      <button className="btn btn-large" onClick={() => setCount((c) => c + 1)}>
        +1
      </button>
    </div>
  );
}

function App() {
  const appTitle = 'Today I Learned';
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src="Fact.png" alt="Today I Learned Logo" />
          <h1>{appTitle}</h1>
        </div>
        <button className="btn btn-large btn-open">Share a fact</button>
      </header>
      <Counter />
      <NewFactForm />
      <main className="main">
        <CategoryFilter />
        <FactLists />
      </main>
    </>
  );
}

function NewFactForm() {
  return <form className="fact-form">Fact Form</form>;
}

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

function CategoryFilter() {
  return (
    <aside>
      <ul>
        <li className="category">
          <button className="btn btn-all-categories">All</button>
        </li>
        {CATEGORIES.map((cat) => (
          <li key={cat.name} className="category">
            <button
              className="btn btn-category"
              style={{ backgroundColor: cat.color }}
            >
              {cat.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function FactLists() {
  const fact = initialFacts;

  return (
    <section>
      <ul className="facts-list">
        {fact.map((fact) => (
          <Facts key={fact.id} fact={fact} />
        ))}
      </ul>
      <p className="fact-length">
        There are {fact.length} facts in the Database. Add your own!
      </p>
    </section>
  );
}

function Facts({ fact }) {
  return (
    <li className="fact">
      <p>
        {fact.text}
        <a className="sourse" href={fact.source} target="_blank">
          (Source)
        </a>
      </p>
      <span
        className="tag"
        style={{
          backgroundColor: CATEGORIES.find((cat) => cat.name === fact.category)
            .color,
        }}
      >
        {fact.category}
      </span>
      <div className="vote-buttons">
        <button>
          <img className="icons" src="./Upvote.png" alt="Upvote" />
          <strong>{fact.votesInteresting}</strong>
        </button>
        <button>
          <img className="icons" src="./Mindblowing.png" alt="Mindblowing" />
          <strong>{fact.votesMindblowing}</strong>
        </button>
        <button>
          <img className="icons" src="./Downvote.png" alt="Downvote" />
          <strong>{fact.votesFalse}</strong>
        </button>
      </div>
    </li>
  );
}

export default App;
