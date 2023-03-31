import mongoose from 'mongoose';
import { app } from './app';

mongoose
  .connect('mongodb://localhost:27017')
  .then(() => {
    const port = 3001;

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch(() => console.log('erro ao conectar no mongo'));
