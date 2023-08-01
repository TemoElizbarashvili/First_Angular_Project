import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  createProjectForm: FormGroup;


  ngOnInit(): void {
    this.createProjectForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required, this.forbiddenName], this.forbiddenNameAsync),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl(null)
    });
  }

  forbiddenName(control: FormControl): {[s: string]: boolean}  {
    if(control.value === 'Test'){
      return {'ForbiddenName': true}
    }
    return null;
  }

  forbiddenNameAsync(control: FormControl) : Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'TestAsync'){
          resolve({'ForbiddenName': true});
        } else {
          resolve(null);
        }
      }, 1000)
    });
    return promise;
  }

  onSubmit() {
    console.log(this.createProjectForm);
  }
}
