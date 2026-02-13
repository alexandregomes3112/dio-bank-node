import express , {type Request, type Response} from 'express';
import { router } from './routes.js';

const server = express();
const port = 5000

server.use(express.json());
server.use(router)

server.get('/', (request: Request, response) => {
  return response.status(200).json({message: '✅ All good ! Working Fine 👌🆙'});
})

server.listen(port, () => {
  console.log(`⚙️ --- Server is running on port 🚪--- ${port}`);
  console.log(`🔗 Link: http://localhost:${port}`);
})