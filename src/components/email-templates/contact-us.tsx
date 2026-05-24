interface Contact {
    name: string
    phone: string
    message: string
    reason: string
}

export const GenerateContactMailTemplate = (data: Contact)=>{
    return`
    <!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Surya Bhau Rathod</title>
</head>
<body style="margin:0; padding:0; background-color:#f4f6f9; font-family:Arial, sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6f9; padding:40px 0;">
    <tr>
      <td align="center">

        <table width="600" cellpadding="0" cellspacing="0" 
          style="background-color:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 4px 10px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg, #ff6b00, #ff8f3d); padding:25px; text-align:center;">
              <h1 style="margin:0; color:#ffffff; font-size:28px; font-weight:bold;">
                Surya Bhau Rathod
              </h1>
              <p style="margin:8px 0 0; color:#ffe7d6; font-size:14px;">
                New Contact Inquiry
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:35px;">

              <table width="100%" cellpadding="0" cellspacing="0">

                <tr>
                  <td style="padding:12px 0; border-bottom:1px solid #eeeeee;">
                    <p style="margin:0; font-size:14px; color:#888888;">Name</p>
                    <p style="margin:5px 0 0; font-size:16px; color:#222222; font-weight:600;">
                      ${data.name}
                    </p>
                  </td>
                </tr>

                <tr>
                  <td style="padding:12px 0; border-bottom:1px solid #eeeeee;">
                    <p style="margin:0; font-size:14px; color:#888888;">Mobile Number</p>
                    <p style="margin:5px 0 0; font-size:16px; color:#222222; font-weight:600;">
                      ${data?.phone}
                    </p>
                  </td>
                </tr>

                <tr>
                  <td style="padding:12px 0; border-bottom:1px solid #eeeeee;">
                    <p style="margin:0; font-size:14px; color:#888888;">Reason of Contact</p>
                    <p style="margin:5px 0 0; font-size:16px; color:#222222; font-weight:600;">
                      ${data.reason}
                    </p>
                  </td>
                </tr>

                <tr>
                  <td style="padding:12px 0;">
                    <p style="margin:0; font-size:14px; color:#888888;">Message</p>

                    <div style="
                      margin-top:10px;
                      background-color:#f8f9fc;
                      border-left:4px solid #ff6b00;
                      padding:18px;
                      border-radius:6px;
                      color:#333333;
                      font-size:15px;
                      line-height:1.7;
                    ">
                      ${data.message}
                    </div>
                  </td>
                </tr>

              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#fafafa; padding:18px; text-align:center; border-top:1px solid #eeeeee;">
              <p style="margin:0; color:#999999; font-size:13px;">
                © 2026 Surya Bhau Rathod. All rights reserved.
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
    `
}