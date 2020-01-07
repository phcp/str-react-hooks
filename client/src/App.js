import React from 'react';
import Feed from './feed/Feed';
import Followers from './feed/Followers';
import styled from 'styled-components';

const Page = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 50px ;
`;

function App() {
  return (
    <Page>
      <Feed />
      <Followers />
    </Page>
  );
}

export default App;
