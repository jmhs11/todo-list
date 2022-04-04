const fs = require('fs');
const path = require('path');

const dir = 'src/environments';
const file = 'environment.ts';
const prodFile = 'environment.prod.ts';

const content = `${process.env.FIREBASE_ENV}`;

fs.access(dir, fs.constants.F_OK, (err) => {
  if (err) {
    // Directory doesn't exist
    console.log('src doesn\'t exist, creating...', process.cwd());
    // Create /src
    fs.mkdir(dir, { recursive: true }, (err) => {
      if (err) throw err;
    });
  }
  // Now write to file
  try {
    fs.writeFileSync(dir + '/' + file, content);
    fs.writeFileSync(dir + '/' + prodFile, content);
    console.log('Successfully created environment files');
    if (fs.existsSync(dir + '/' + file)) {
      console.log('File is resolved', path.resolve(dir + '/' + file));
      const str = fs.readFileSync(dir + '/' + file).toString();
      console.log(str);  
    }
  } catch (error) {
    console.error(error);
    process.exit(1)
  }
})
