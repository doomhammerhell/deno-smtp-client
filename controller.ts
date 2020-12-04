import { mailerObj } from "./index.ts";

let sendMail = async (ctx: any) => {
  try {
    let body: any = await ctx.request.body();
    let dataObj = await body.value;
    await mailerObj(dataObj);
    ctx.response.body = { status: true, message: "Mail Sent" };
    ctx.response.status = 201;
  } catch (err) {
    ctx.response.body = { status: false, data: null };
    ctx.response.status = 500;
    console.log(err);
  }
};

export { sendMail };