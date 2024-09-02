
import { Injectable } from "@nestjs/common";
import * as SearchResponse from "./response/response.search.json";
import * as InitResponse from "./response/response.init.json";
import * as ConfirmResponse from "./response/response.confirm.json";
import * as SelectResponse from "./response/response.select.json";
import * as StatusResponse from "./response/response.status.json";
import * as UpdateResponse from "./response/response.update.json";
import * as SupportResponse from "./response/response.support.json";
import * as CancelResponse from "./response/response.cancel.json";
import * as TrackResponse from "./response/response.track.json";
import * as RatingResponse from './response/response.rating.json';
import { ConfigService } from "@nestjs/config";


@Injectable()
export class RetailService {
    bpp_id: string;
    bpp_uri: string;
    constructor(private readonly configService: ConfigService) {
        this.bpp_id = this.configService.get<string>('BPP_ID');
        this.bpp_uri = this.configService.get<string>('BPP_URI');
    }
    search = (request_DTO: any) => {
        SearchResponse.context.bpp_id = this.bpp_id;
        SearchResponse.context.bpp_uri = this.bpp_uri;
        //Business logic goes here
        //We are returning the fixed the json which can be overwritten by actual business to fetch data
        return SearchResponse;
    };
    select = (request_DTO: any) => {
        SelectResponse.context.bpp_id = this.bpp_id;
        SelectResponse.context.bpp_uri = this.bpp_uri;
        //Business logic goes here
        //We are returning the fixed the json which can be overwritten by actual business to fetch data
        return SelectResponse;
    };
    init = (request_DTO: any) => {
        InitResponse.context.bpp_id = this.bpp_id;
        InitResponse.context.bpp_uri = this.bpp_uri;
        //Business logic goes here
        //We are returning the fixed the json which can be overwritten by actual business to fetch data
        return InitResponse;
    };
    confirm = (request_DTO: any) => {
        ConfirmResponse.context.bpp_id = this.bpp_id;
        ConfirmResponse.context.bpp_uri = this.bpp_uri;
        //Business logic goes here
        //We are returning the fixed the json which can be overwritten by actual business to fetch data
        return ConfirmResponse;
    };
    status = (request_DTO: any) => {
        StatusResponse.context.bpp_id = this.bpp_id;
        StatusResponse.context.bpp_uri = this.bpp_uri;
        //Business logic goes here
        //We are returning the fixed the json which can be overwritten by actual business to fetch data
        return StatusResponse;
    };
    cancel = (request_DTO: any) => {
        CancelResponse.context.bpp_id = this.bpp_id;
        CancelResponse.context.bpp_uri = this.bpp_uri;
        //Business logic goes here
        //We are returning the fixed the json which can be overwritten by actual business to fetch data
        return CancelResponse;
    };
    update = (request_DTO: any) => {
        UpdateResponse.context.bpp_id = this.bpp_id;
        UpdateResponse.context.bpp_uri = this.bpp_uri;
        //Business logic goes here
        //We are returning the fixed the json which can be overwritten by actual business to fetch data
        return UpdateResponse;
    };
    support = (request_DTO: any) => {
        SupportResponse.context.bpp_id = this.bpp_id;
        SupportResponse.context.bpp_uri = this.bpp_uri;
        //Business logic goes here
        //We are returning the fixed the json which can be overwritten by actual business to fetch data
        return SupportResponse;
    };
    rating = (request_DTO: any) => {
        RatingResponse.context.bpp_id = this.bpp_id;
        RatingResponse.context.bpp_uri = this.bpp_uri;
        //Business logic goes here
        //We are returning the fixed the json which can be overwritten by actual business to fetch data
        return RatingResponse;
    };
    track = (request_DTO: any) => {
        TrackResponse.context.bpp_id = this.bpp_id;
        TrackResponse.context.bpp_uri = this.bpp_uri;
        //Business logic goes here
        //We are returning the fixed the json which can be overwritten by actual business to fetch data
        return TrackResponse;
    };
}

