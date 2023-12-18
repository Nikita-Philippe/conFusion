export class Feedback {
    firstname: string = '';
    lastname: string = '';
    telnum: number = 0;
    email: string = '';
    agree: boolean = false;
    contactType: string = 'None';
    message: string = '';
  }
  
  export const ContactType = ['None', 'Tel', 'Email'];