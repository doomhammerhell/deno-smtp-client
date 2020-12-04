import "https://deno.land/x/dotenv/load.ts";
import { SmtpClient } from "https://deno.land/x/smtp/mod.ts";

const client = new SmtpClient();

await client.connectTLS({
  hostname: "smtp.gmail.com",
  port: 465,
  username: Deno.env.get("GMAIL_USERNAME"),
  password: Deno.env.get("GMAIL_PASSWORD"),
});
let mailerObj = async (data: any) => {
  await client.send({
    from: "Mail from Wisdom", // Your Email address
    to: data.to, // Email address of the destination
    subject: "Deno is Great",
    content: data.body,
  });
  await client.close();
};

export { mailerObj };