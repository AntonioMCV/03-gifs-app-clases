import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  constructor(private http: HttpClient) {}

  private apiKey: string = 'DWjmPGsKEwce7RdwgR0nITqVOrYwk5OJ';
  private serviceUrl: string = 'http://api.giphy.com/v1/gifs';
  private _tagHistory: Array<string> = [];

  get tagsHistory() {
    return [...this._tagHistory];
  }

  private organiZeHistory(tag: string): void {
    tag = tag.toLowerCase();
    if (this._tagHistory.includes(tag)) {
      this._tagHistory = this._tagHistory.filter((oldTag) => oldTag !== tag);
    }
    this._tagHistory.unshift(tag);
    this._tagHistory = this._tagHistory.splice(0, 10);
  }

  searchTag(tag: string) {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag);
    if (tag.length === 0) return;
    this.http.get(`${this.serviceUrl}/search`, { params }).subscribe((resp) => {
      console.log(resp);
    });
    this.organiZeHistory(tag);
    console.log(this._tagHistory);
  }
}
