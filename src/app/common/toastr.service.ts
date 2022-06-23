import { Injectable } from '@angular/core';
declare let toastr: any;
@Injectable()
export class ToastrSevice {
  Success(message: string, title?: string) {
    toastr.success(message, title);
  }
  Info(message: string, title?: string) {
    toastr.info(message, title);
  }
  Warning(message: string, title?: string) {
    toastr.warning(message, title);
  }
  Error(message: string, title?: string) {
    toastr.error(message, title);
  }
}
