// @ts-check
import { initSchema } from "@aws-amplify/datastore";
import { schema } from "./schema";

const { ServerRaidbossDeathLogs, Server, RaidBoss } = initSchema(schema);

export { ServerRaidbossDeathLogs, Server, RaidBoss };
