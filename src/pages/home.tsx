import { BossContainer, HeaderContainer } from "@/containers";
import React, { useEffect } from "react";
import styled from "styled-components/macro";
import { API, graphqlOperation } from "aws-amplify";
import { listRaidBosss, listServers } from "@graphql/queries";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api-graphql";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;
  background-image: url(/images/lineage2-main.jpg);
  background-origin: content-box;
  background-repeat: no-repeat;
  background-size: auto;
  background-blend-mode: lighten;
  background-position: center;
  background-size: cover;
  align-items: center;
`;

const Inner = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

async function fetchTodos() {
  try {
    const serversData = await API.graphql(graphqlOperation(listServers));

    console.log("asdasd", serversData);
    // const todos = todoData.data.listTodos.items;
  } catch (err) {
    console.error("error fetching todos", err);
  }
}

const Home: React.FC = () => {
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <PageContainer>
      <HeaderContainer />
      <ContentContainer>
        <Inner>
          {/* <BossContainer
            name="Boss Shilen's Messenger Cabrio"
            image="/images/Cabrio.jpg"
            chest="/target Coffer of the Dead"
          />
          <BossContainer
            name="Boss Death Lord Hallate"
            image="/images/Hallate.jpg"
            chest="/target Hallate's chest"
            floor={3}
          />
          <BossContainer
            name="Boss Kernon"
            image="/images/Kernon.jpg"
            chest="/target Chest of Kernon"
            floor={8}
          />
          <BossContainer
            name="Boss Longhorn Golkonda"
            image="/images/Golkonda.jpg"
            chest="/target Chest of Golkonda"
            floor={11}
          /> */}
        </Inner>
      </ContentContainer>
    </PageContainer>
  );
};
export default Home;
