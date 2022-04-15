const { argv } = require('yargs');
const environment = argv.environment || 'dev';

const setEnv = () => {
  const fs = require('fs');
  const writeFile = fs.writeFile;
  // Configure Angular `environment.ts` file path
  const targetPath = `./src/environments/environment.${environment}.ts`;
  const appVersion = require('../package.json').version;
  require('dotenv').config();

  // `environment.ts` file structure
  const envConfigFile = `export const environment = {
  firebase: {
    apiKey: '${process.env['FIREBASE_API_KEY']}',
    authDomain: '${process.env['FIREBASE_AUTH_DOMAIN']}',
    projectId: '${process.env['FIREBASE_PROJECT_ID']}',
    storageBucket: '${process.env['FIREBASE_STORAGE_BUCKET']}',
    messagingSenderId: '${process.env['FIREBASE_MESSAGING_SENDER_ID']}',
    appId: '${process.env['FIREBASE_APP_ID']}',
    databaseURL: '${process.env['FIREBASE_DATABASE_URL']}',
  },
  appVersion: '${appVersion}',
  production: ${environment === 'prod'},
};
`;
  console.log(
    'The file `environment.ts` will be written with the following content: \n',
    envConfigFile
  );
  writeFile(targetPath, envConfigFile, (err: any) => {
    if (err) {
      console.error(err);
      throw err;
    } else {
      console.log(
        `Angular environment.${environment}.ts file generated correctly at ${targetPath} \n`
      );
    }
  });
};

setEnv();
