import { HeaderContainer, ServerBossesContainer } from "@/containers";
import React from "react";
import styled from "styled-components/macro";

import { Switch, useRouteMatch, Route, Redirect } from "react-router-dom";

import { HomeStateProvider } from "@context/home";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Home: React.FC = () => {
  const { url } = useRouteMatch();

  return (
    <HomeStateProvider>
      <PageContainer>
        <Switch>
          <Route exact path={`${url}/:id`}>
            <HeaderContainer />
            <ServerBossesContainer />
          </Route>
          <Route path="/">
            <Redirect to={`${url}/0`} />
          </Route>
        </Switch>
      </PageContainer>
    </HomeStateProvider>
  );
};
export default Home;
