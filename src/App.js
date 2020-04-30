import React from 'react';

// Components
import Container from '@material-ui/core/Container';
import Layout from './components/Layout/Layout';
import ListPage from './containers/ListPage/ListPage';

function App() {
  return (
    <Layout>
      <Container>
        <ListPage />
      </Container>
    </Layout>
  );
}

export default App;
