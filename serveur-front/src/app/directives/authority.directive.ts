import {Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {Subject} from 'rxjs';
import {AuthentificationService} from '../services/authentification.service';


@Directive({
  selector: '[appAuthority]'
})
export class AuthorityDirective  {
 private authorities: string | string[];
 constructor(private templateRef: TemplateRef<any>,
             private viewContainerRef: ViewContainerRef,
             private authenticationService: AuthentificationService) {}

@Input()
  set appAuthority(value: string | string[] ) {
   this.authorities = typeof  value === 'string'  ? [value] : value;


   const hasAnAuthority = this.hasAnAuthority(this.authorities);
   this.viewContainerRef.clear();
   if (hasAnAuthority) {
     this.viewContainerRef.createEmbeddedView(this.templateRef);
   }
}

hasAnAuthority(authorities): boolean {
  for (const auth of authorities) {

    if (this.authenticationService.getRoles().includes(auth)) {
      return true;
    }
  }
  return false;

}
}
// directive:authorisation
