import { FormGroup } from '@angular/forms';

export function milestoneDomain (emailControl: string){
  return (formGroup: FormGroup) => {
		// Asignamos dos controladores a nuestros valores por param
    const control = formGroup.controls[emailControl];

    const domainValue = control.value.split('@');
    if ( domainValue[1] !== 'milestones.com') {
      control.setErrors({ mustContainDomain: true });
    } else if(domainValue[0] == ""){
        control.setErrors({mustContainName: true})
    } else if(domainValue[0].length <= 4){
        control.setErrors({mustBeLarger: true})
    }
    
    else {
      control.setErrors(null);
    }
  };
}