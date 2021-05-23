export const onCreateDeathLog = /* GraphQL */ `
  subscription OnCreateDeathLog {
    onCreateDeathLog {
      id
      isoDate
      content
      contentSnippet
      link
      title
      serverId
      raidBossId
    }
  }
`;
