import { sendEmail } from "../../lib/email/send";
import { contactUsFormTemplate } from "../../lib/email/templates/contact-us";
import { contactUsFormTemplate2 } from "../../lib/email/templates/contact-us-2";
import { contactUsFormTemplate3 } from "../../lib/email/templates/contact-us-3";
import { BadRequestException } from "../../lib/errors/catch-errors";

export class EmailService {
  public sendContactUsEmail = async ({
    name,
    email,
    service,
    message,
    company,
    phone,
  }: {
    name: string;
    email: string;
    service: string;
    message: string;
    company: string;
    phone: string;
  }): Promise<void> => {
    const emailContent = contactUsFormTemplate({
      name,
      email,
      service,
      message,
      company,
      phone,
    });

    const sendResult = await sendEmail({ ...emailContent, replyTo: email });
    // treat missing result or an error flag as failure
    if (!sendResult || (sendResult as any).error) {
      throw new BadRequestException("Failed to send contact us email");
    }
  };

  public sendContactUsEmailOhamadikeFC = async ({
    name,
    email,
    message,
  }: {
    name: string;
    email: string;
    message: string;
  }): Promise<void> => {
    const emailContent = contactUsFormTemplate2({
      name,
      email,
      message,
    });

    const sendResult = await sendEmail({
      ...emailContent,
      replyTo: email,
      from: "Ohamadike Football Club <sender@mailer.remigellagroup.com>",
    });
    // treat missing result or an error flag as failure
    if (!sendResult || (sendResult as any).error) {
      throw new BadRequestException("Failed to send contact us email");
    }
  };

  public sendContactUsEmailOhamadikeFoundation = async ({
    name,
    email,
    serviceType,
    message,
  }: {
    name: string;
    email: string;
    serviceType: string;
    message: string;
  }): Promise<void> => {
    const emailContent = contactUsFormTemplate3({
      name,
      email,
      serviceType,
      message,
    });

    const sendResult = await sendEmail({
      ...emailContent,
      replyTo: email,
      from: "Ohamadike Foundation <sender@mailer.remigellagroup.com>",
    });
    // treat missing result or an error flag as failure
    if (!sendResult || (sendResult as any).error) {
      throw new BadRequestException("Failed to send contact us email");
    }
  };
}
