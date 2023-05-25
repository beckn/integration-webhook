# beckn-sandbox-webhook

webhook implementation for the beckn sandbox

## Installation

```bash
npm install
```

## Running the app

```bash
# watch mode
$ npm run start:dev
```

## Make webhook server public

Make the webhook Network server publicly accessible by using tools like [localtunnel](https://theboroer.github.io/localtunnel-www), [ngrok](https://ngrok.com/docs), [loophole](https://loophole.cloud/docs). This **public url** will be used in `config/default.yml`'s webhook url.
