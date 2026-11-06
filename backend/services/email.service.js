import nodemailer from "nodemailer";
import { _config } from "../config/config.js";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: false, 
  auth: {
    user: _config.SMTP_EMAIL,
    pass: _config.SMTP_APP_PASSWORD,
  },
});

export const sendOTP = async ({ email, otp }) => {
  
  try {
    await transporter.sendMail({
      from: '"TeamSync" <nidhish1132007@gmail.com>',
      to: email,
      subject: "Verify your email | TeamSync",

      text: `Welcome to TeamSync!
        Your verification code is ${otp}.
        Enter this code to verify your email address and complete your registration.
        This code expires in 10 minutes. If you didn't request this, you can safely ignore this email.
        TeamSync Team`,
      html: `
        <!DOCTYPE html>
        <html>
          <body style="margin:0; padding:0; background-color:#f5f3ff; font-family:Arial,Helvetica,sans-serif;">

            <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f3ff;">
              <tr>
                <td align="center">

                  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:520px; background-color:#ffffff; border-radius:16px; overflow:hidden;">

                    <!-- Header -->
                    <tr>
                      <td style="background-color:#6d28d9; padding:28px 32px; text-align:center;">
                        <h1 style="margin:0; color:#ffffff; font-size:28px; letter-spacing:-0.5px;">
                          TeamSync
                        </h1>
                        <p style="margin:8px 0 0; color:#ede9fe; font-size:14px;">
                          Work better, together.
                        </p>
                      </td>
                    </tr>

                    <!-- Main Content -->
                    <tr>
                      <td style="padding:36px 32px;">

                        <h2 style="margin:0 0 16px; color:#1f1635; font-size:24px;">
                          Verify your email
                        </h2>

                        <p style="margin:0 0 24px; color:#6b6478; font-size:15px; line-height:1.7;">
                          Welcome to TeamSync! We're excited to have you here.
                          Enter the verification code below to complete your registration.
                        </p>

                        <!-- OTP Box -->
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td align="center" style="background-color:#f5f3ff; border:1px solid #ddd6fe; border-radius:12px; padding:24px 12px;">

                              <p style="margin:0 0 12px; color:#7c3aed; font-size:12px; font-weight:bold; letter-spacing:2px;">
                                YOUR VERIFICATION CODE
                              </p>

                              <p style="margin:0; color:#5b21b6; font-size:36px; font-weight:bold; letter-spacing:10px;">
                                ${otp}
                              </p>

                            </td>
                          </tr>
                        </table>

                        <p style="margin:24px 0 0; color:#6b6478; font-size:14px; line-height:1.7;">
                          This code expires in <strong style="color:#3b2a52;">10 minutes</strong>.
                          Please don't share it with anyone.
                        </p>

                        <p style="margin:24px 0 0; color:#6b6478; font-size:14px; line-height:1.7;">
                          If you didn't create a TeamSync account, you can safely ignore this email.
                        </p>

                      </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                      <td style="background-color:#faf9fc; border-top:1px solid #eeeaf5; padding:24px 32px; text-align:center;">

                        <p style="margin:0; color:#8b8498; font-size:12px; line-height:1.6;">
                          This is an automated message from TeamSync.
                          Please do not reply to this email.
                        </p>

                        <p style="margin:12px 0 0; color:#a49caf; font-size:12px;">
                          © ${new Date().getFullYear()} TeamSync
                        </p>

                      </td>
                    </tr>

                  </table>

                </td>
              </tr>
            </table>

          </body>
        </html>
      `,
    });

    console.log("Email sent");
    return true

  } catch (err) {
    console.error("Error while sending mail:", err);
    return false
  }
};
