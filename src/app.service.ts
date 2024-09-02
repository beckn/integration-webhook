import { Injectable } from '@nestjs/common';
import { AxiosHttpService } from 'src/http/axios-http.service';
import { Worker, isMainThread } from 'worker_threads';
import workerThreadFilePath from './worker/workerPath';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class AppService {
  bpp_client_url: string;
  constructor(
    private readonly axios: AxiosHttpService,
    private readonly configService: ConfigService,
  ) { 
    this.bpp_client_url = this.configService.get<string>('BPP_CLIENT_URI');
  }
  webhook(context: any, message: any) {
    const { domain } = context;
    this.runWorker({ context, message });
    return {
      "message": {
        "ack": {
          "status": "ACK"
        }
      }
    };
  }
  runWorker(request): string {
    if (isMainThread) {
      const worker = new Worker(workerThreadFilePath, {
        workerData: request,
      });
      worker.on('message', (response) => {
        this.sendResponseToBPPClient(response);
      });
      worker.on('error', (e) => console.log('on error', e));
      worker.on('exit', (code) => console.log('on exit', code));

      return 'Processing... Check NestJS app console for the result.';
    }
  }
  async sendResponseToBPPClient(response: any) {
    try {
      const action = response.context.action;
      const url = `${this.bpp_client_url}/${action}`;
      console.log('Url is: ', url);
      await this.axios.post(url, response);
    } catch (error) {
      console.log('Failed to send response to BPP Client', error);
    }

  }
}
