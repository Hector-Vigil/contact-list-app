import { Observable } from 'rxjs';

export interface IBaseService<TEntity,TCreate> {
  newItem(item: TCreate):  Observable<TEntity>;

  updateItem(id: string, item: TEntity): Observable<void>;

  getItems(): Observable<TEntity[]>;

  getItemId(id: string): Observable<TEntity>;

  removeItem(id: string): Observable<void>;
}
