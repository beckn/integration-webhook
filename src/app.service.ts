import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as dotenv from "dotenv"
dotenv.config()
@Injectable()
export class AppService {
  async getHello(body: any) {
    try {
      const sandboxUrl = `${process.env.SANDBOXURL}/${body.context.action}`;
      const { data: responseData } = await axios.post(sandboxUrl, body);

      if (!responseData?.context) {
        console.log(
          new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }),
          'Invalid response from sandbox bpp api',
        );
        return;
      }

      responseData.context.message_id = body.context.message_id;
      responseData.context.bap_id = body.context.bap_id;
      responseData.context.bap_uri = body.context.bap_uri;
      responseData.context.transaction_id = body.context.transaction_id;
      responseData.context.domain = body.context.domain;

      if (body?.context?.bpp_id)
        responseData.context.bpp_id = body.context.bpp_id;

      if (body?.context?.bpp_uri)
        responseData.context.bpp_uri = body.context.bpp_uri;

      let requestAction = null;

      switch (body.context.action) {
        case 'search':
          requestAction = 'on_search';
          break;
        case 'select':
          requestAction = 'on_select';
          break;
        case 'init':
          requestAction = 'on_init';
          break;
        case 'confirm':
          requestAction = 'on_confirm';
          break;
        case 'status':
          requestAction = 'on_status';
          break;
        case 'track':
          requestAction = 'on_track';
          break;
        case 'cancel':
          requestAction = 'on_cancel';
          break;
        case 'update':
          requestAction = 'on_update';
          break;
        case 'rating':
          requestAction = 'on_rating';
          break;
        case 'support':
          requestAction = 'on_support';
          break;
        case 'get_cancellation_reasons':
          requestAction = "cancellation_reasons";
          break;
        case 'get_rating_categories':
          requestAction = 'rating_categories';
          break;

        default:
          console.log(
            new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }),
            'Invalid request action -> ' + requestAction,
          );
          return;
      }

      const bppClientUrl = `${process.env.BPPCLIENTURL}/${requestAction}`;

      setTimeout(async () => {
        console.log(
          '\n\n',
          '-----------------------------------------------------------',
          '\n',
          new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }),
          `\n`,
          `\n`,
          `Making post request to: ${bppClientUrl}`,
          `\n`,
          `\n`,
          `Body: ${JSON.stringify(body)}`,
          `\n`,
          '-----------------------------------------------------------',
        );
        try {
          const r = await axios.post(bppClientUrl, responseData);
        } catch (error) {
          console.log();
        }
      }, 2000);
    } catch (err) {
      console.log(err);
    }
  }
}
