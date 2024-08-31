import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  constructor(private fb: FormBuilder) {
    emailjs.init('nXRPq2W3QGDf3m0Ih');
  }
  form: FormGroup = this.fb.group({
    to_name: 'ceo',
    subject: '',
    message: '',
    from_name: '',
    from_email: '',
    to_email: 'zs8511337@gmail.com',
  });

  send() {
    console.log(this.form.value);
    emailjs
      .send('service_j2iytsy', 'template_efthp59', {
        to_name: 'ceo',
        subject: this.form.value.subject,
        message: this.form.value.message,
        from_name: this.form.value.from_name,
        from_email: this.form.value.from_email,
      })
      .then(
        (response: EmailJSResponseStatus) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.error('FAILED...', error);
        }
      );
  }
}
