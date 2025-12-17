import './style.css';

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

function CategoryFilter() {
  return <aside>Category Filter</aside>;
}

function FactLists() {
  return <section>Facts Lists</section>;
}

export default App;
