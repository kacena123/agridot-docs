# Launching Agridot 🌾

<div style="display: flex; align-items: center;"><span>There are two ways &nbsp;</span><img width="60" alt="Agridot_logo" src="https://github.com/user-attachments/assets/c906eba6-8122-4f3b-83f5-8ecb04f326ef" style="vertical-align: middle;"/><span>&nbsp; can be launched:</span></div>

- Through terminal
- Docker

## Prerequisites 

You need to have:
```bash
#pnpm for backend
npm i -g pnpm
```

### .env files

The [mobile app](https://github.com/kacena123/AgriDot) requires specifically named .env file `.env.local`:

```bash
#Pinata JWT token
EXPO_PUBLIC_PINATA_JWT=string

#Pinata Gateway url
EXPO_PUBLIC_GATEWAY_URL=webside.mypinata.cloud

#Backend URL 
EXPO_PUBLIC_SERVER_URL=url

#Encryption phrase for communication with Backend (Needs to be same on BE)
EXPO_PUBLIC_ENCRYPT_PHRASE=password

#Blockchain wss endpoint
EXPO_PUBLIC_WS_ENDPOINT=wss://kusama-asset-hub-rpc.polkadot.io

#App donation recieve address
EXPO_PUBLIC_RECIPIENT_ADDRESS=addr

#App guide cellection id
EXPO_PUBLIC_GUIDE_COLLECTION_ID=1

#IPFS gatewau url
EXPO_PUBLIC_GATEWAY_URL=flk-ipfs.xyz

#Config for Firebase
EXPO_PUBLIC_FIREBASE_API_KEY=key
EXPO_PUBLIC_AUTH_DOMAIN=domain
EXPO_PUBLIC_PROJECT_ID=project_id
EXPO_PUBLIC_STORAGE_BUCKET=bucket
EXPO_PUBLIC_MESSAGE_SENDER_ID=sender_id
EXPO_PUBLIC_APP_ID=app_id
```

The [backend](https://github.com/kacena123/agridot-backend) requires following `.env`:

```bash
# Collection ID that will house minting of pest nfts
PEST_COLLECTION=1

# Collection ID that will house minting of guide nfts
GUIDE_COLLECTION=2

# Wallet mnemonic, that will handle creating NFTs
WALLET_MNEMONIC=word word word word word word word word word word word word

# Secret phrase that serves to encrypt pest reports. This phrase is server use only. So do not expose it to application.
ENCRYPTION_PHRASE=phrase

# Secret phrase to decrypt data in encrypted exchange between application and server (Has to be same as in application).
DECRYPTION_PHRASE=phrase 

# Node endpoint
WSS_ENDPOINT: string;

# Server startup port
PORT: string;

# Pinata JWT token for pest and guide data uploads
PINATA_JWT=string

# Pinata gateway url for pest and guide data uploads
PINATA_GATEWAY_URL=mypinata.cloud

#IPFS gate url
IPFS_GATEWAY_URL=flk-ipfs.xyz
```

## Terminal

Launching [backend](https://github.com/kacena123/agridot-backend):
```bash
#Clone or fork the repository

#Install dependencies
pnpm install

#Launching dev
pnpm start:dev

#Download ngrok
https://download.ngrok.com/

#Use ngrok with the port 3000 exposed from backend
#The output url has to be used in .env.local of AgriDot dApp - EXPO_PUBLIC_SERVER_URL
ngrok http 3000
```

Once backend is launched, the [expo AgriDot application](https://github.com/kacena123/AgriDot) can be launched in following way:

```bash
#1. Clone or fork the repository

#2. Install application
npm i

#3. Start the expo
npx expo start

#4. Scan the QR code on your device or select the a - android or i - ios for emulator start (You need to have emulators installed)
```

## Docker

The docker launch requires you to have `docker engine` **installed** and **running**.

First step is to build and launch [Backend](https://github.com/kacena123/agridot-backend) docker image. Do not forget to fill `.env` file.

```bash
#Build the docker image
docker build -t agridot-be .

#Run the docker container and expose port 3000
docker run -p 3000:3000 --env-file .env -it --rm agridot-be 

#Download ngrok
https://download.ngrok.com/

#Use ngrok with the port 3000 exposed from backend
#The output url has to be used in .env.local of AgriDot dApp - EXPO_PUBLIC_SERVER_URL
ngrok http 3000
```

Second step after the Backend is running is to start the expo application itself. Do not forget to fill `.env.local` file:

```bash
#Build Docker image
docker build -t agridot-fe .

#Start expo
docker run --env-file .env.local -it --rm agridot-fe
```