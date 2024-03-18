import { j as jwtHandler } from "../../../chunks/jwtHandler.js";
const DELETE = async ({ cookies }) => {
  jwtHandler.deleteTokenInCookie({ cookies });
  return new Response(
    JSON.stringify({
      code: 200,
      message: "Success"
    })
  );
};
export {
  DELETE
};
