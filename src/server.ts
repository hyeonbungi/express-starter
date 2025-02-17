import app from "./app";
import dotenv from "dotenv";
import path from "path";

const env = process.env.NODE_ENV || "development";

if (env === "development" || env === "test") {
  const envFilePath = path.resolve(__dirname, `../.env.${env}`);
  dotenv.config({ path: envFilePath });
}

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} in ${env} mode`);
});
