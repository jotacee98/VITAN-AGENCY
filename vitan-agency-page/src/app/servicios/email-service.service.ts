import { Injectable } from '@angular/core';
import * as nodemailer from 'nodemailer';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  constructor() {}

  // sendEmail(formValues: any): Promise<any> {
  //   return new Promise((resolve, reject) => {
  //     const emailContent = this.buildEmailContent(formValues);

  //     // Configura el transporte de correo
  //     const transporter = nodemailer.createTransport({
  //       host: 'smtp.example.com',
  //       port: 587,
  //       secure: false, // Si utiliza SSL/TLS, cambia a true
  //       auth: {
  //         user: 'your_username',
  //         pass: 'your_password'
  //       }
  //     });

  //     // Configura el correo a enviar
  //     const mailOptions = {
  //       from: 'juancarlosandradelopez@gmail.com',
  //       to: 'juancarlosandradelopez@gmail.com',
  //       subject: 'Formulario de contacto',
  //       text: emailContent
  //     };

  //     // Envía el correo utilizando Nodemailer
  //     transporter.sendMail(mailOptions, (error, info) => {
  //       if (error) {
  //         reject(error);
  //       } else {
  //         resolve(info);
  //       }
  //     });
  //   });
  // }

  private buildEmailContent(formValues: any): string {
    // Construye el contenido del correo utilizando los valores del formulario
    const content = `
      Nombre: ${formValues.firstName}
      Apellido: ${formValues.lastName}
      Número telefónico: ${formValues.phoneNumber}
      Correo electrónico: ${formValues.email}
      Cómo se enteró de nosotros: ${formValues.howDidYouHear}
      Solicitar información de: ${formValues.requestInfo}
      Detalle de la solicitud: ${formValues.requestDetails}
    `;
    return content;
  }
}