import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IBaseService } from '../interfaces/base-service.interface';
import { Observable } from 'rxjs';

export abstract class BaseService<TEntity,TCreate>
  implements IBaseService<TEntity,TCreate>
{

  protected _path!: string;
  private _apiUrl: string = environment.apiUrl;
  protected http: HttpClient;

  public get baseEndPoint(): string {
    return this._apiUrl + this._path;
  }

  constructor(path: string, http: HttpClient) {
    this._path = path;
    this.http = http;
  }

  newItem(item: TCreate): Observable<TEntity> {
    return this.http.post<TEntity>(`${this.baseEndPoint}`,item)
  }
  updateItem(id: string, item: TEntity): Observable<void> {
    return this.http.patch<void>(`${this.baseEndPoint}/${id}`,item)
  }
  getItems(): Observable<TEntity[]> {
    return this.http.get<TEntity[]>(`${this.baseEndPoint}`);
  }
  getItemId(id: string): Observable<TEntity> {
    return this.http.get<TEntity>(`${this.baseEndPoint}/${id}`);
  }
  removeItem(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseEndPoint}/${id}`);
  }
}
