import express from 'express'
import { configs } from './Configs/Config.js';

 const app = express();

 configs(app)

 const port = process.env.PORT;

 app.listen(port,()=>console.log(`server is running on http://localhost:${port}`));



 