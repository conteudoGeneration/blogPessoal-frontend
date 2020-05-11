import { Injectable } from '@angular/core';
import { Postagem } from '../model/Postagem'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  getAllPostagens(){
    return this.http.get("http://31.220.57.14:8080/postagens")
  }

  getByIdPostagens(id:number){
    return this.http.get(`http://31.220.57.14:8080/postagens/${id}`)
  }

  postPostagem(postagem: Postagem){
    return this.http.post("http://31.220.57.14:8080/postagens/", postagem )
  }

  putPostagem(postagem: Postagem){
    return this.http.put("http://31.220.57.14:8080/postagens/", postagem )
  }

  delete(id:number){
    return this.http.delete(`http://31.220.57.14:8080/postagens/${id}`)
  }

  findByTitulo(titulo:string){
    return this.http.get(`http://31.220.57.14:8080/postagens/titulo/${titulo}`)
  }
    
}
