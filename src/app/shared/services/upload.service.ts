import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class UploadArquivoService {
    //Usar quando tiver uma api 
    //private baseUrl = 'http://localhost:8080';
    
    listaArquivos: any;

    constructor(private http: HttpClient) { }


    //Usar quando tiver uma api 
    //   upload(file: File): Observable<HttpEvent<any>> {
    //     const formData: FormData = new FormData();

    //     formData.append('file', file);

    //     const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
    //       reportProgress: true,
    //       responseType: 'json'
    //     });

    //     return this.http.request(req);
    //   }

    //Usar quando tiver uma api 
    //   listarArquivos(): Observable<any> {
    //     return this.http.get(`${this.baseUrl}/files`);
    //   }


    listarArquivos(): any {
        this.listaArquivos = {
            dados_arquivos: [
                {
                    nome_arquivo: "Folha A1",
                    data_upload: "01-01-2002"
                },
                {
                    nome_arquivo: "Folha A2",
                    data_upload: "01-01-2018"
                }, {
                    nome_arquivo: "Folha A3",
                    data_upload: "01-01-2020"
                }
            ]
        }
        return this.listaArquivos;
    }
}