import express from 'express'
import { configs } from './Configs/Config.js';
import { DBConn } from './Configs/Conn.js';

 const app = express();

 configs(app)

 const port = process.env.PORT;

 DBConn();
 
 app.listen(port,()=>console.log(`server is running on http://localhost:${port}`));



 