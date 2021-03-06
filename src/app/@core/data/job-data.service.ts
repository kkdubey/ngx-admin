import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class JobDataService {

  private headers = new Headers({
    'Content-Type': 'application/json',
    'charset': 'UTF-8',
    'Access-Control-Allow-Origin': '*',
  });
  private options = new RequestOptions({ headers: this.headers });
  private base_url = 'http://10.150.16.189:5000';

  constructor(private http: Http) { }


  getTopResolutionsbyFrequency(jobId): Observable<any> {
    const url = this.base_url + `/GetTopResolutionsbyFrequency?job=${jobId}`;
    return this.http.get(url, this.options).map(res => res.json());
  }

  getIssuesByRange(fromIndex, toIndex, component, location, jobname): Observable<any> {
    const url = this.base_url + `/GetIssuesbyrange?fromindex=${fromIndex}&toindex=${toIndex}&component=${component}&location=${location}&jobname=${jobname}`;
    return this.http.get(url, this.options).map(res => res.json());
  }

  getIssueDetails(id): Observable<any> {
    const url = this.base_url + `/GetIssuedetails?id=${id}`;
    return this.http.get(url, this.options).map(res => res.json());
  }

  getTopResolutionsByTime(jobId): Observable<any> {
    const url = this.base_url + `/GetTopResolutionsbyTime?job=${jobId}`;
    return this.http.get(url, this.options).map(res => res.json());
  }

  getPointInTimeResolutions(id): Observable<any> {
    const url = this.base_url + `/GetPointinTimeResolutions?id=${id}`;
    return this.http.get(url, this.options).map(res => res.json());
  }

  getResolutions(id): Observable<any> {
    const url = this.base_url + `/GetResolutions?id=${id}`;
    return this.http.get(url, this.options).map(res => res.json());
  }

  getlatestIssues(component, location, jobname, lastdate): Observable<any> {
    const url = this.base_url + `/GetlatestIssues?component=${component}&location=${location}&jobname=${jobname}&lastdate=${lastdate}`;
    return this.http.get(url, this.options).map(res => res.json());
  }
}
