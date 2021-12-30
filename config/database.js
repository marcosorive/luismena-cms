module.exports = ({ env }) => {
  const dbType = env('DB_TYPE');
  console.log(dbType)
  let dbConfig = {
    defaultConnection: 'default',
    connections: {
      default: {
        connector: 'bookshelf',
        settings: {
          client: 'sqlite',
          filename: env('DATABASE_FILENAME', '.tmp/data.db'),
        },
        options: {
          useNullAsDefault: true,
        },
      },
    },
  };
  if (dbType === 'POSTGRES') {
    dbConfig = {
      defaultConnection: 'default',
      connections: {
        default: {
          connector: 'bookshelf',
          settings: {
            client: 'postgres',
            host: env('DB_HOST', 'localhost'),
            port: env('DB_PORT', '5432'),
            database: env('DB_NAME', 'strapi'),
            username: env('DB_USER', 'strapi'),
            password: env('DB_PASSWORD', 'strapi'),
          },
          options: {},
        },
      },
    };
  }
  return dbConfig;
};
