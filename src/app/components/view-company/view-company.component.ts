import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { CompanyOptions } from '../../interfaces/company-options';
import { DatabaseService } from '../../services/database.service';
import { DialogService } from '../../services/dialog.service';

@Component({
  selector: 'app-view-company',
  templateUrl: './view-company.component.html',
  styleUrls: ['./view-company.component.scss'],
})
export class ViewCompanyComponent implements OnInit {
  title = 'Contacts';

  companyList: Array<CompanyOptions> = [];
  companyCount = 0;

  constructor(
    private databaseService: DatabaseService,
    private dialogService: DialogService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dialogService.openDialog();
    this.databaseService
      .getCompanyList()
      .subscribe((value) => this.mapCompanies(value));
  }

  mapCompanies(companies: any): void {
    this.dialogService.closeDialog();
    this.companyList = [];
    this.companyCount = 0;

    if (companies === undefined || companies == null) {
      return;
    }

    let companyKeys = Object.keys(companies);

    for (let i = 0; i < companyKeys.length; i++) {
      let company: CompanyOptions = companies[companyKeys[i]];
      this.companyList.push(company);
      this.companyCount++;
    }
  }

  async deleteCompanyById(companyEntry: CompanyOptions) {
    if (
      !confirm('Are you sure you want to delete ' + companyEntry.company + '?')
    ) {
      return;
    }

    let companyId = companyEntry.parentKey;

    if (companyId === undefined || companyId == null || companyId == '') {
      return;
    }

    this.dialogService.openDialog();
    await this.databaseService.removeCompany(companyId);
    this.dialogService.closeDialog();
  }

  navigateAdd() {
    this.router.navigate(['add']);
  }

  navigateUpdate(companyEntry: CompanyOptions) {
    const navigationExtras: NavigationExtras = {
      state: companyEntry
    };

    this.router.navigate(['edit'], navigationExtras);
  }
}