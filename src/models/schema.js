export const schema = {
    "models": {
        "Server": {
            "name": "Server",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "asteriosId": {
                    "name": "asteriosId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "enabled": {
                    "name": "enabled",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "bosses": {
                    "name": "bosses",
                    "isArray": true,
                    "type": {
                        "model": "ServerRaidbossDeathLogs"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "server"
                    }
                }
            },
            "syncable": true,
            "pluralName": "Servers",
            "attributes": [
                {
                    "type": "model",
                    "properties": {
                        "queries": {
                            "list": "listServers"
                        },
                        "mutations": null,
                        "subscriptions": null
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "provider": "apiKey",
                                "operations": [
                                    "read"
                                ]
                            },
                            {
                                "allow": "public",
                                "provider": "iam",
                                "operations": [
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "ServerRaidbossDeathLogs": {
            "name": "ServerRaidbossDeathLogs",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "isoDate": {
                    "name": "isoDate",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "content": {
                    "name": "content",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "contentSnippet": {
                    "name": "contentSnippet",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "link": {
                    "name": "link",
                    "isArray": false,
                    "type": "AWSURL",
                    "isRequired": false,
                    "attributes": []
                },
                "title": {
                    "name": "title",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "server": {
                    "name": "server",
                    "isArray": false,
                    "type": {
                        "model": "Server"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "serverId"
                    }
                },
                "raidBoss": {
                    "name": "raidBoss",
                    "isArray": false,
                    "type": {
                        "model": "RaidBoss"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "raidBossId"
                    }
                }
            },
            "syncable": true,
            "pluralName": "ServerRaidbossDeathLogs",
            "attributes": [
                {
                    "type": "model",
                    "properties": {
                        "queries": {
                            "list": "listServerRaidbossDeathLogs"
                        },
                        "mutations": {
                            "create": "createServerRaidbossDeathLogs"
                        },
                        "subscriptions": {
                            "onCreate": [
                                "onCreateDeathLog"
                            ]
                        }
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byServer",
                        "fields": [
                            "serverId",
                            "raidBossId"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byRaidBoss",
                        "fields": [
                            "raidBossId",
                            "serverId"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "provider": "apiKey",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "allow": "public",
                                "provider": "iam",
                                "operations": [
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "RaidBoss": {
            "name": "RaidBoss",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "floor": {
                    "name": "floor",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "image": {
                    "name": "image",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "chest": {
                    "name": "chest",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "deathLogs": {
                    "name": "deathLogs",
                    "isArray": true,
                    "type": {
                        "model": "ServerRaidbossDeathLogs"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "raidBoss"
                    }
                }
            },
            "syncable": true,
            "pluralName": "RaidBosses",
            "attributes": [
                {
                    "type": "model",
                    "properties": {
                        "queries": {
                            "list": "listRaidBosses",
                            "get": "getRaidBoss"
                        },
                        "mutations": null,
                        "subscriptions": null
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "provider": "apiKey",
                                "operations": [
                                    "read"
                                ]
                            },
                            {
                                "allow": "public",
                                "provider": "iam",
                                "operations": [
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {},
    "nonModels": {},
    "version": "037f99859f84bdfa7947978146e65f3f"
};