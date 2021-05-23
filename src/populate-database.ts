import Amplify, { API, graphqlOperation } from "aws-amplify";
import awsExports from "./aws-exports";
import { createRaidBoss, createServer } from "./graphql/mutations";

Amplify.configure(awsExports);

const BossNames = [
  {
    name: "Boss Shilen's Messenger Cabrio",
    chest: "/target Coffer of the Dead",
    image: "/images/Cabrio.jpg",
  },
  {
    name: "Boss Death Lord Hallate",
    floor: 3,
    image: "/images/Hallate.jpg",
    chest: "/target Hallate's chest",
  },
  {
    name: "Boss Kernon",
    floor: 8,
    image: "/images/Kernon.jpg",
    chest: "/target Chest of Kernon",
  },
  {
    name: "Boss Longhorn Golkonda",
    floor: 11,
    image: "/images/Golkonda.jpg",
    chest: "/target Chest of Golkonda",
  },
];

const servers = [
  {
    asteriosId: 8,
    name: "Phoenix x7",
    enabled: true,
  },
  {
    asteriosId: 0,
    name: "Asterios x5",
    enabled: true,
  },
  {
    asteriosId: 2,
    name: "New Hunter x55",
    enabled: true,
  },
  {
    asteriosId: 6,
    name: "Media x3",
    enabled: true,
  },
];

(async () => {
  //   await Promise.allSettled(
  //     servers.map(async (server, index) =>
  //       API.graphql(
  //         graphqlOperation(createServer, {
  //           input: { ...server, id: index },
  //         }),
  //       ),
  //     ),
  //   );
  BossNames.forEach(
    async (boss, index) =>
      await API.graphql(
        graphqlOperation(createRaidBoss, {
          input: {
            ...boss,
            id: index,
          },
        }),
      ),
  );
})();
