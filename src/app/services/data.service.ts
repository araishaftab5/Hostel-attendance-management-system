import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
data:any;
  constructor(
    private httpClient:HttpClient
  ) { }

  getData()
  {
return this.httpClient.get('http://127.0.0.1:8000/employee');
}

insertData(data)
{
return this.httpClient.post('http://127.0.0.1:8000/addemployee',data);
}
deleteData(id)
{
  return this.httpClient.delete('http://127.0.0.1:8000/deleteemployee/'+id);
}
getOneEmployee(id)
{
  return this.httpClient.get('http://127.0.0.1:8000/getoneemployee/'+id);

}
updateData(id,data)
{
return this.httpClient.patch('http://127.0.0.1:8000/updateemployee/'+id,data);
}

registerUser(data){
  return this.httpClient.post('http://127.0.0.1:8000/user/',data);
}

login(data)
{
  return this.httpClient.post('http://127.0.0.1:8000/login/',data);
}
getCountry()
{
  return this.httpClient.get('http://127.0.0.1:8000/country/')
}
getState(data)
{
  return this.httpClient.post('http://127.0.0.1:8000/state/',data)
}

getCity(data)
{
  return this.httpClient.post('http://127.0.0.1:8000/city/',data)
}
}