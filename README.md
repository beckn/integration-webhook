# integration-webhook

Webhook implementation for the retail app

## Installation

```bash
Copy all keys from .env.example and paste into .env and update the correct values for BPP_ID, BPP_URI, BPP_CLIENT_URI, and PORT for those keys
```

```bash
npm install
```

## Running the app in dev mode

```bash
# watch mode
$ npm run start:dev
```

##Running the app in prod mode

```bash
npm start
```

## Make webhook server public

Make the webhook Network server publicly accessible by using tools like [localtunnel](https://theboroer.github.io/localtunnel-www), [ngrok](https://ngrok.com/docs), [loophole](https://loophole.cloud/docs). This **public url** will be used in `config/default.yml`'s webhook url.
