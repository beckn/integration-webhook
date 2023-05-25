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

## Configure

1. Change the sandbox api url in `src/app.service.ts` as per your url. You need to update the `http://127.0.0.1:3000/` part only.

```js
const sandboxUrl = `http://127.0.0.1:3000/${body.context.action}`;
```

2. Change the protocaol server bpp client's url in `src/app.service.ts` as per your url. You need to update the `http://127.0.0.1:6001/` part only.

```js
const bppClientUrl = `http://127.0.0.1:6001/${requestAction}`;
```

3. You can change the port number inside `main.ts` file

## Make webhook server public

Make the webhook Network server publicly accessible by using tools like [localtunnel](https://theboroer.github.io/localtunnel-www), [ngrok](https://ngrok.com/docs), [loophole](https://loophole.cloud/docs). This **public url** will be used in `config/default.yml`'s webhook url.
