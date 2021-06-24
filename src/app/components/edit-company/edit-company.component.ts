import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyOptions } from '../../interfaces/company-options';
import { DatabaseService } from '../../services/database.service';
import { DialogService } from '../../services/dialog.service';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.scss'],
})
export class EditCompanyComponent {
  title = 'Edit Contact';

  companyDetails: CompanyOptions = {
    company: '',
    contactNumber: 0,
    parentKey: '',
  };

  constructor(
    private dabaseService: DatabaseService,
    private dialogService: DialogService,
    private router: Router
  ) {
    let state = this.router.getCurrentNavigation()?.extras?.state ?? {};
    this.companyDetails.company = state.company;
    this.companyDetails.contactNumber = state.contactNumber;
    this.companyDetails.parentKey = state.parentKey;

    if (
      this.companyDetails.parentKey == '' ||
      this.companyDetails.parentKey == null ||
      this.companyDetails.parentKey === undefined
    ) {
      this.navigateHome();
    }
  }

  validateUser(): boolean {
    if (this.companyDetails.contactNumber == 0) {
      alert('Invalid contact number! Please enter a valid number.');
      return false;
    }

    if (this.companyDetails.company?.trim() == '') {
      alert('Invalid company name! Please enter a valid name.');
      return false;
    }

    return true;
  }
  async editUser() {
    if (!this.validateUser()) {
      return;
    }

    this.dialogService.openDialog();

    await this.dabaseService.updateCompanyList(
      this.companyDetails.parentKey,
      this.companyDetails
    );

    alert('Successfully Updated company!');
    this.dialogService.closeDialog();
    this.navigateHome();
  }

  navigateHome() {
    this.router.navigate(['view']);
  }
}
