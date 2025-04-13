import path from 'node:path';
import dotenv from 'dotenv';

const env = process.env.NODE_ENV || 'development';

if (env === 'development' || env === 'test') {
  const envFilePath = path.resolve(__dirname, `../.env.${env}`);
  dotenv.config({ path: envFilePath });
}
