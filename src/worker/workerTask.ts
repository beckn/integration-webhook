import { NestFactory } from '@nestjs/core';
import { workerData, parentPort } from 'worker_threads';
import { RetailService } from 'src/retail/retail.service';
import { AppModule } from 'src/app.module';
import { REQUEST_ACTIONS } from 'src/common/constants';
async function run() {

    const app = await NestFactory.createApplicationContext(AppModule);
    const retailService = app.get(RetailService);
    const { action } = workerData.context;
    let response;
    switch (action) {
        case REQUEST_ACTIONS.init:
            response = retailService.init(workerData);
            break;
        case REQUEST_ACTIONS.cancel:
            response = retailService.cancel(workerData);
            break;
        case REQUEST_ACTIONS.confirm:
            response = retailService.confirm(workerData);
            break;
        case REQUEST_ACTIONS.rating:
            response = retailService.rating(workerData);
            break;
        case REQUEST_ACTIONS.search:
            response = retailService.search(workerData);
            break;
        case REQUEST_ACTIONS.status:
            response = retailService.status(workerData);
            break;
        case REQUEST_ACTIONS.support:
            response = retailService.support(workerData);
            break;
        case REQUEST_ACTIONS.track:
            response = retailService.track(workerData);
            break;
        case REQUEST_ACTIONS.update:
            response = retailService.update(workerData);
            break;
        case REQUEST_ACTIONS.select:
            response = retailService.select(workerData);
            break;
        default:
            throw new Error('Invalid action');
    }
    parentPort.postMessage(response);
}


run();