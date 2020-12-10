import { useEffect } from "react";
import _ from "lodash";
import { getParamValues } from "./auth";

interface RedirectPageProps {
  history: string[];
  location: Location;
}

const RedirectPage = (props: RedirectPageProps): null => {
  useEffect((): void => {
    const { history, location } = props;
    try {
      if (_.isEmpty(location.hash)) {
        history.push("/");
        return;
      }
      const accessToken = getParamValues(location.hash);
      const expiryTime = new Date().getTime() + accessToken.expires_in * 1000;
      localStorage.setItem("params", JSON.stringify(accessToken));
      localStorage.setItem("expiry_time", expiryTime.toString());
      history.push("/dashboard");
    } catch (error) {
      history.push("/");
    }
  });

  return null;
};

export default RedirectPage;
