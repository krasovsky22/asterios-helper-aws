import subscribeGraphQL from "@api/subscribeGraphQL";
import { useHomeContext } from "@/context/home";
import { onCreateDeathLog } from "@/graphql/raidboss-log-subscription";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import styled from "styled-components/macro";
import BossContainer from "./boss";
import { OnCreateDeathLogSubscription } from "@/api/AWSApi";

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

  useEffect(() => {
    const subscription = subscribeGraphQL<{
      provider: unknown;
      value: OnCreateDeathLogSubscription;
    }>(onCreateDeathLog);
    let unsubscribe;

    if (subscription !== null) {
      const sub = subscription.subscribe({
        next: ({ provider, value }) => {
          console.log("asdasd", { provider, value });
        },
      });

      unsubscribe = () => sub.unsubscribe();
    }
    return unsubscribe;
  }, [id]);

  console.log(bosses);
  return (
    <ContentContainer>
      <Inner>
        {bosses.map((boss) => (
          <BossContainer key={boss.id} {...boss} />
        ))}
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
  );
};

export default ServerBossesContainer;
