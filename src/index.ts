import express , {type Request, type Response} from 'express';

const server = express();
const port = 5000

server.use(express.json());

server.get('/', (request: Request, response) => {
  return response.status(200).json({message: 'Hello There 👋'});
})

server.post('/user', (request: Request, response: Response) => {
  const {name} = request.body;
  console.log(`Creating user ${name}...`);
  return response.status(201).json({message: `User ${name} created successfully!`});
})

server.listen(port, () => {
  console.log(`⚙️ --- Server is running on port 🚪--- ${port}`);
  console.log(`🔗 Link: http://localhost:${port}`);
})