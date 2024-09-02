import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosRequestConfig, AxiosError } from 'axios';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AxiosHttpService {
    constructor(private readonly httpService: HttpService) {}

    async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        const response = await lastValueFrom(
            this.httpService.get<T>(url, config).pipe(
                catchError((error: AxiosError) => {
                    throw error;
                })
            )
        );
        return response.data;
    }

    async post<T>(
        url: string,
        data?: any,
        config?: AxiosRequestConfig
    ): Promise<T> {
        const response = await lastValueFrom(
            this.httpService.post<T>(url, data, config).pipe(
                catchError((error: AxiosError) => {
                    throw error;
                })
            )
        );
        return response.data;
    }

    async put<T>(
        url: string,
        data?: any,
        config?: AxiosRequestConfig
    ): Promise<T> {
        const response = await lastValueFrom(
            this.httpService.put<T>(url, data, config).pipe(
                catchError((error: AxiosError) => {
                    throw error;
                })
            )
        );
        return response.data;
    }

    async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        const response$ = this.httpService.delete<T>(url, config).pipe(
            map((response) => response.data),
            catchError((error: AxiosError) => {
                return throwError(error);
            })
        );
        return lastValueFrom(response$);
    }
}
