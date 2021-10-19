import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadArquivoService } from 'src/app/shared/services/upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor(private uploadService: UploadArquivoService) { }

  arquivoSelecionado: FileList;
  nomeArquivo : string = "";
  tamanhoArquivo: string = "";
  arquivoAtual: File;
  progress = 0;
  message = '';
  listaArquivos: any;

  ngOnInit(): void {
    this.listaArquivos = this.uploadService.listarArquivos();
    console.log(this.listaArquivos);
  }

  selecionarArquivo(event): void {    
    this.arquivoSelecionado = event.target.files;
    this.nomeArquivo = this.arquivoSelecionado.item(0).name;
    this.tamanhoArquivo = (this.arquivoSelecionado.item(0).size/1024/1024).toFixed(2);    
  }

  limparSelecaoArquivo() : void {
    this.arquivoSelecionado = undefined;
    this.arquivoAtual = undefined;
    this.nomeArquivo  = "";
    this.tamanhoArquivo  = "";
  }
  upload(): void {
    debugger;
     for (let index = 0; index < 100; index += 25) {
      this.progress += 25;
       console.log(this.progress);
     }
  }
  
  // usar quando tiver um api
  // upload(): void {
  //   this.progress = 0;
  
  //   this.arquivoAtual = this.arquivoSelecionado.item(0);
  //   this.uploadService.upload(this.arquivoAtual).subscribe(
  //     event => {
  //       if (event.type === HttpEventType.UploadProgress) {
  //         this.progress = Math.round(100 * event.loaded / event.total);
  //       } else if (event instanceof HttpResponse) {
  //         this.message = event.body.message;
  //         this.listaArquivos = this.uploadService.listarArquivos();
  //       }
  //     },
  //     err => {
  //       this.progress = 0;
  //       this.message = 'Could not upload the file!';
  //       this.arquivoAtual = undefined;
  //     });
  //   this.arquivoSelecionado = undefined;
  // }
}
