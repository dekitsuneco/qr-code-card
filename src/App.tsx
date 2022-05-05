import React from 'react';
import { Card } from './components/card';
import { Footer } from './components/footer';
import { Main } from './components/main';
import { Stylesheet, variables } from './styles';

const styles: Stylesheet = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    minWidth: '100vw',
    minHeight: '100vh',
    backgroundColor: variables.color.primaryDark,
  },
};

function App() {
  return (
    <div style={styles.wrapper}>
      <Main>
        <Card />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
