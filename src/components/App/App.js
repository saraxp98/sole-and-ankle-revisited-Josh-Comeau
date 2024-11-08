import React from 'react';
import styled from 'styled-components/macro';

import Header from '../Header';
import ShoeIndex from '../ShoeIndex';
import {QUERIES} from "../../constants";

const App = () => {
  const [sortId, setSortId] = React.useState('newest');

  return (
    <>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </>
  );
};

const Main = styled.main`
    padding: 64px 32px;
    
    @media ${QUERIES.tabletAndSmaller} {
        padding: 3rem 2rem;
    }
    
    @media ${QUERIES.phoneAndSmaller} {
        padding: 3rem 1rem;
    }
`;

export default App;
