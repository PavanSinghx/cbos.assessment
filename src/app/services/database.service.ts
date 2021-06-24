import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { CompanyOptions } from '../interfaces/company-options';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private projectRoot = 'companyInformation/';

  constructor(private database: AngularFireDatabase) {}

  getCompanyList() {
    return this.database.object(this.projectRoot).valueChanges();
  }

  setCompanyList(key: string, company: CompanyOptions) {
    if (key === undefined || key == null || key == '') {
      return;
    }

    key = this.projectRoot + key;
    return this.database.object(key).set(company);
  }

  updateCompanyList(key: string, company: CompanyOptions) {
    if (key === undefined || key == null || key == '') {
      return;
    }

    key = this.projectRoot + key;
    return this.database.object(key).update(company);
  }

  removeCompany(key: string) {
    if (key === undefined || key == null || key == '') {
      return;
    }

    key = this.projectRoot + key;
    return this.database.object(key).remove();
  }
}
