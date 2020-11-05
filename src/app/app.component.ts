import { Component, ViewChild } from "@angular/core";
import { Validators } from "@angular/forms";
import { NgxFormGroup } from "@ngxform/platform";
import {
  NgxCheckboxFormControl,
  NgxRadioFormControl,
  NgxSelectFormControl,
  NgxTextareaFormControl,
  NgxTextboxFormControl
} from "@ngxform/common";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public demoForm: NgxFormGroup;
  ngOnInit(): void {
    const radioOptions = [
      { key: "Option 1", value: 1 },
      { key: "Option 2", value: 2 }
    ];
    this.demoForm = new NgxFormGroup({
      textbox: new NgxTextboxFormControl(
        "",
        [Validators.required, Validators.email, Validators.minLength(3)],
        [],
        {
          label: "Textbox",
          controlClass: ["form-control"],
          ngClass: "d-flex flex-column form-group",
          errorMessages: [
            { key: "required", message: "This field is required" },
            { key: "email", message: "Email is invalid" },
            { key: "minlength", message: "Min length is 3" }
          ]
        }
      ),
      select: new NgxSelectFormControl("", [Validators.required], [], {
        label: "Select",
        controlClass: ["form-control"],
        ngClass: "d-flex flex-column form-group",
        errorMessages: [{ key: "required", message: "This field is required" }],
        options: [{ key: "Option 1", value: 1 }, { key: "Option 2", value: 2 }]
      }),
      checkbox: new NgxCheckboxFormControl("", [Validators.required], [], {
        ngClass: "d-flex form-group",
        label: "Checkbox",
        controlLabel: "Click here to accept"
      }),
      radio: new NgxRadioFormControl("", [Validators.required], [], {
        label: "Radio",

        ngClass: "d-flex form-group",
        options: radioOptions,
        defaultValue: radioOptions[0]
      }),
      textarea: new NgxTextareaFormControl(
        "",
        [Validators.required, Validators.email, Validators.minLength(3)],
        [],
        {
          label: "Textarea",
          controlClass: ["form-control"],
          ngClass: "d-flex flex-column form-group",
          errorMessages: [
            { key: "required", message: "This field is required" },
            { key: "email", message: "Email is invalid" },
            { key: "minlength", message: "Min length is 3" }
          ]
        }
      )
    });
  }

  onSubmit(): void {
    this.demoForm.submitted = true;
    console.log(this.demoForm.value);
  }
}
