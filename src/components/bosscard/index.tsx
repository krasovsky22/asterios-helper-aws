import React from "react";
import { ImageType, WithChildrenType } from "@components/common-types";
import {
  Container,
  Inner,
  Image,
  Content,
  ContentInner,
  Title,
  DeathSection,
  RespawnSection,
  BossFloor,
  DeathInfo,
  ContentType,
  ActionButtonsSection,
  ActionButtonSectionInner,
  ActionToggle,
  ContainerType,
} from "./styles/bosscard";

const BossCard = ({
  children,
  ...rest
}: WithChildrenType & ContainerType & { title: string; onClick: () => void }) => {
  return (
    <Container {...rest}>
      <Inner>{children}</Inner>
    </Container>
  );
};

BossCard.Image = ({ children, ...rest }: WithChildrenType & ImageType) => {
  return <Image {...rest}>{children}</Image>;
};

BossCard.BossFloor = ({ children, ...rest }: WithChildrenType) => {
  return <BossFloor {...rest}>{children}</BossFloor>;
};

BossCard.Content = ({ children, ...rest }: WithChildrenType & ContentType) => {
  return (
    <Content {...rest}>
      <ContentInner>{children}</ContentInner>
    </Content>
  );
};

BossCard.Title = ({ children, ...rest }: WithChildrenType) => {
  return <Title {...rest}>{children}</Title>;
};

BossCard.DeathSection = ({ children, ...rest }: WithChildrenType) => {
  return <DeathSection {...rest}>{children}</DeathSection>;
};

BossCard.DeathInfo = ({ children, ...rest }: WithChildrenType) => {
  return <DeathInfo {...rest}>{children}</DeathInfo>;
};

BossCard.RespawnSection = ({ children, ...rest }: WithChildrenType) => {
  return <RespawnSection {...rest}>{children}</RespawnSection>;
};

type ActionButtonSelection = {
  onClick: () => void;
  isToggled: boolean;
};
BossCard.ActionButtonsSection = ({
  onClick,
  isToggled = false,
  children,
  ...rest
}: ActionButtonSelection & WithChildrenType) => {
  const clickHandler = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    event.stopPropagation();
    onClick();
  };
  return (
    <ActionButtonsSection
      {...rest}
      onClick={(event) => clickHandler(event)}
      color={isToggled ? "green" : "#ff1177"}
    >
      <ActionButtonSectionInner>
        <ActionToggle {...rest}>{children}</ActionToggle>
      </ActionButtonSectionInner>
    </ActionButtonsSection>
  );
};
export default BossCard;
