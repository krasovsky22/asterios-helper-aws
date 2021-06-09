type ServerType = {
  id: number;
  enabled: boolean;
  name: string;
  asteriosId: number;
};

type RaidBossType = {
  id: number;
  name: string;
  deathLogs: {
    items: {
      id: number;
      isoDate: string;
      serverId: number;
      raidBossId: number;
    }[];
  };
};

type RaidBossDeathRecordType = {
  _ttl: number;
  id: string;
  title: string;
  link: string;
  content: string;
  isoDate: string;
  serverId: number;
  raidBossId: number;
  contentSnippet: string;
};

type RaidBossDeathRssRecordType = {
  title: string;
  link: string;
  pubDate: string;
  content: string;
  contentSnippet: string;
  guid: string;
  isoDate: string;
};

type ServerDeathLog = {
  id: string;
  isoDate: string;
  raidBossId: string;
  serverId: string;
};
