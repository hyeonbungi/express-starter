import './bootstrap';
import app from './app';

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} in ${ENV} mode`);
});
