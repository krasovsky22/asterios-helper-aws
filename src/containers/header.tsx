import React, { useMemo } from "react";
import { Header, LoginButton } from "@/components";
import { useAuthContext } from "@context/auth";
import { useHomeContext } from "@context/home";
import { useHistory, useParams } from "react-router-dom";

import LogoImage from "@assets/images/lineage2-logo.png";

const HeaderContainer: React.FC = () => {
  const { user } = useAuthContext();
  const { servers } = useHomeContext();
  const history = useHistory();
  const { id = 0 } = useParams<{ id?: string }>();

  const onServerSelect = (serverId: number) => {
    history.push(`${serverId}`);
  };

  const serverOptions = useMemo(
    () =>
      servers.map((server) => ({
        value: server.id,
        label: server.name,
      })),
    [servers],
  );

  return (
    <Header>
      <Header.Logo src={LogoImage} alt="Lineage 2" />
      <Header.ServerSelect
        servers={serverOptions}
        onServerSelect={onServerSelect}
        defaultValue={serverOptions.find((option) => option.value === +id)}
      />
      <Header.Clock />
      <Header.LoginSection>
        {user ? (
          <>
            Logged in as:<Header.LoggedInUser>{user.username}</Header.LoggedInUser>
          </>
        ) : (
          <LoginButton>Login</LoginButton>
        )}
      </Header.LoginSection>
    </Header>
  );
};
export default HeaderContainer;
