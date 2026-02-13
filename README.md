# dio-bank-node
Example application proposed by the DIO platform, where we have a simple banking application running with NODE.js on the backend.


# Sequence to start a new Node_JS v18 + TS

# To configure Node 18 on a environment with v22 on WSL2:
curl -fsSL https://fnm.vercel.app/install | bash
echo 'eval "$(fnm env --use-on-cd)"' >> ~/.bashrc
source ~/.bashrc
fnm --version
fnm install 18
fnm use 18
nvm install 18
nvm use 18
nvm alias default 18
node -v
npm -v
echo 18 > .node-version


1. initialize app:

```
npm init --y
```
1. install express:

```
npm i express
```

1. install dependencies:
```
npm i -D typescript tsx @types/node @types/express rimraf 
```

1. Inicializa ts:

```
npx tsc --init
```

1. Configure tsconfig.json with the folowing parameters:

```
    "rootDir": "./src",
    "outDir": "./build",
    "module": "nodenext",
    "target": "ES2020",
    "lib": ["esnext"],
    "types": ["node"],
    "sourceMap": true,
    "declaration": true,
    "declarationMap": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "strict": true,
    "jsx": "react-jsx",
    "verbatimModuleSyntax": true,
    "isolatedModules": true,
    "noUncheckedSideEffectImports": true,
    "moduleDetection": "force",
    "skipLibCheck": true,
    "esModuleInterop": true,
    "moduleResolution": "NodeNext",
```

1. create a src folder and index.ts file:

```ts
import express , {type Request, type Response} from 'express';
import { router } from './routes.js';

const server = express();
const port = 5000

server.use(express.json());
server.use(router)

server.get('/', (request: Request, response) => {
  return response.status(200).json({message: 'Hello There 👋'});
})

server.listen(port, () => {
  console.log(`⚙️ --- Server is running on port 🚪--- ${port}`);
  console.log(`🔗 Link: http://localhost:${port}`);
})
```

1. configure on package.json on the scripts:

```
"dev": "tsx watch src/index.ts",
"build": "rimraf build && tsc",
"start": "node build/index.js"
```

1. To avoid import errors and use modern imports, add after main:
```
"type": "module",
```

2. Test
```
npm run dev
```

1. Check the endpoint health:
 ```
 curl http://localhost:5000/
 ```
