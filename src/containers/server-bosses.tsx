import { useHomeContext } from "@/context/home";
import { useServerDeathLogs } from "@/hooks";
import React from "react";
import { useParams } from "react-router";
import styled from "styled-components/macro";
import BossContainer from "./boss";

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

type HomeRouteParamsType = {
  id: string;
};

const ServerBossesContainer: React.FC = () => {
  const { id } = useParams<HomeRouteParamsType>()!;
  const { bosses } = useHomeContext();
  const deathLogs = useServerDeathLogs(+id);

  return (
    <ContentContainer>
      <Inner>
        {bosses.map((boss) => (
          <BossContainer
            key={boss.id}
            {...boss}
            {...deathLogs.find((log) => +log.raidBossId === +boss.id)}
          />
        ))}
      </Inner>
    </ContentContainer>
  );
};

export default ServerBossesContainer;
