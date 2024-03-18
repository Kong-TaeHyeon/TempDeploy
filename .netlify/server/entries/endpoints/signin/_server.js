import { j as jwtHandler } from "../../../chunks/jwtHandler.js";
const POST = async ({ cookies, request }) => {
  const { id, password } = await request.json();
  if (id === "kong3047") {
    const { jsonWebToken } = await jwtHandler.generateJWT({ email: id, password });
    await jwtHandler.setCookie({ cookies, jwt: jsonWebToken });
    const response = {
      message: "Success",
      code: 200
    };
    return new Response(JSON.stringify(response));
  } else {
    const response = {
      message: "Fail",
      code: 400
    };
    return new Response(JSON.stringify(response));
  }
};
export {
  POST
};
