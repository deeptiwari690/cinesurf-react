import { useEffect } from "react";
import { useNavigation } from "react-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

export function NavigationProgress() {
  const { state } = useNavigation();
  useEffect(() => {
    if (state === "loading") {
      NProgress.start();
    } else {
      NProgress.done();
    }
  }, [state]);
  return null;
}
