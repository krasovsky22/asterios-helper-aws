// @ts-check
import { initSchema } from "@aws-amplify/datastore";
import { schema } from "./schema";

const { Server, ServerRaidbossDeathLogs, RaidBoss } = initSchema(schema);

export { Server, ServerRaidbossDeathLogs, RaidBoss };
