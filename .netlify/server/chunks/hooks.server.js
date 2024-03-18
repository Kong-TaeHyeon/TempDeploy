import { j as jwtHandler } from "./jwtHandler.js";
import { r as redirect } from "./index.js";
const handle = async ({ event, resolve }) => {
  let jwt = event.cookies.get("AuthorizationToken");
  if (jwt) {
    jwt = event.cookies.get("AuthorizationToken").split("Bearer ")[1];
    let { data } = await jwtHandler.checkValidationJWT({ token: jwt });
    if (data) {
      event.locals.user = data;
      return resolve(event);
    } else {
      jwtHandler.deleteTokenInCookie({ cookies: event.cookies });
      return redirect(301, "/signin");
    }
  } else {
    if (event.url.pathname !== "/signin")
      return redirect(301, "/signin");
  }
  return resolve(event);
};
export {
  handle
};
