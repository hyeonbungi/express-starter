const dotenv = require('dotenv');
const path = require('path');

const envFilePath = path.resolve(__dirname, '.env.test');
dotenv.config({ path: envFilePath });
