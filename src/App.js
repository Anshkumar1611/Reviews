import React from 'react';
import Review from './components/Review';
import Header from './components/header'
function App() {
  return (
    <main>
      <section className='container'>
        <Header />
        <Review />
      </section>
    </main>
  )
}

export default App;
