import React, { useCallback, useEffect, useMemo, useState } from "react";
import { BossCard } from "@/components";
import { toast } from "react-toastify";
import { useInterval } from "beautiful-react-hooks";

type BossContainerType = {
  // boss specific
  name: string;
  image: string;
  chest: string;
  floor?: number;

  // death log content
  content?: string;
  contentSnippet?: string;
  isoDate?: string;
  link?: string;
  title?: string;
};

type StateType = {
  isSpawning: boolean;
  isSpawned: boolean;
};

const DefaultState: StateType = {
  isSpawning: false,
  isSpawned: false,
};

const BossContainer: React.FC<BossContainerType> = ({
  chest,
  name,
  image,
  floor = null,
  ...bossData
}) => {
  const [state, setState] = useState<StateType>(DefaultState);
  // memorize calculated respawn end time and start time
  const calculatedDeathDates = useMemo(() => {
    if (!bossData.isoDate) {
      return {};
    }

    const killedAt = new Date(bossData.isoDate);
    const respawnStartTime = new Date(bossData.isoDate);
    respawnStartTime.setTime(killedAt.getTime() + 18 * 60 * 60 * 1000);

    const respawnEndTime = new Date(bossData.isoDate);
    respawnEndTime.setTime(killedAt.getTime() + 30 * 60 * 60 * 1000);

    return {
      killedAt,
      respawnStartTime,
      respawnEndTime,
    };
  }, [bossData.isoDate]);

  //if new date passed from subscriber, reset the state to start over
  useEffect(() => {
    if (bossData.isoDate) {
      setState(DefaultState);
    }
  }, [bossData.isoDate]);

  const isReported = false;
  //   if (bossData) {
  //     const { markedAsSpawned } = bossData;

  //     if (markedAsSpawned) {
  //       if (user) {
  //         isReported = markedAsSpawned.filter((userReported) => userReported !== user.id).length > 0;
  //       } else {
  //         isReported = markBossAsSpawned.length > 0;
  //       }
  //     }
  //   }

  //copy into clipboard
  const handleOnClick = useCallback(() => {
    const tempInput = document.createElement("input");
    tempInput.value = chest;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    toast.success(
      <div>
        <b>{chest}</b>
        <br />
        Copied to clipboard
      </div>,
    );
  }, []);

  // time to check if spawning started
  useInterval(() => {
    const now = new Date();

    if (!calculatedDeathDates.respawnEndTime || !calculatedDeathDates.respawnEndTime) {
      return;
    }

    const { respawnStartTime, respawnEndTime } = calculatedDeathDates;

    if (now > respawnStartTime && now < respawnEndTime) {
      setState((prevState) => ({ ...prevState, isSpawning: true }));
      return;
    }

    if (now > respawnEndTime) {
      setState((prevState) => ({ ...prevState, isSpawning: false, isSpawned: true }));
      return;
    }

    setState(DefaultState);
  }, 1000);

  //   const handleMarkAsSpawned = useCallback(async () => {
  //     if (!state.isSpawning) {
  //       return toast.error(
  //         <div>
  //           <b>Boss hasn't spawned yet!</b> <br />
  //           Penalties may apply.
  //         </div>,
  //       );
  //     }

  //     const result = await markBossAsSpawned();

  //     if (result) {
  //       return toast.success(
  //         <div>
  //           <b>Thank you!</b>
  //         </div>,
  //       );
  //     }
  //   }, [bossData, state.isSpawning]);

  const { isSpawned, isSpawning } = state;
  //const isMarkedSpawnedByMe = bossData?.markedAsSpawned?.includes(user?.id ?? "") ?? false;
  let color = "black";

  if (isSpawning) {
    color = "#ffde3b8f";
  }

  if (isSpawned) {
    color = "green";
  }

  const { killedAt, respawnStartTime, respawnEndTime } = calculatedDeathDates;

  return (
    <BossCard title="Copy" onClick={handleOnClick} isActive={isReported}>
      <BossCard.Image src={image} alt={name}>
        {floor && <BossCard.BossFloor>Floor: {floor}</BossCard.BossFloor>}
      </BossCard.Image>
      <BossCard.Content
        backgroundColor={color}
        opacity={isSpawning || isSpawned ? 1 : undefined}
        color={isSpawning || isSpawned ? "black" : undefined}
      >
        <BossCard.Title>{name}</BossCard.Title>
        {killedAt && (
          <BossCard.DeathSection>
            <b>Killed at:</b>{" "}
            <p>
              {killedAt.toLocaleDateString()} {killedAt.toLocaleTimeString()}
            </p>
          </BossCard.DeathSection>
        )}
        <BossCard.DeathInfo>{bossData.content}</BossCard.DeathInfo>
        {/* {user && isSpawning && (
          <BossCard.ActionButtonsSection
            isToggled={isMarkedSpawnedByMe}
            onClick={handleMarkAsSpawned}
          >
            {isMarkedSpawnedByMe ? "Notified!" : "Mark as spawned."}
          </BossCard.ActionButtonsSection>
        )} */}
        {respawnStartTime && respawnEndTime && (
          <BossCard.RespawnSection>
            <div>
              <b>Start Time:</b> {respawnStartTime.toLocaleString()}
            </div>
            <div>
              <b>Until:</b> {respawnEndTime.toLocaleString()}
            </div>
          </BossCard.RespawnSection>
        )}
      </BossCard.Content>
    </BossCard>
  );
};
export default BossContainer;
