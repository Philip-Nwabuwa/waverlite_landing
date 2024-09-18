"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isMobile, isIOS, isAndroid } from "react-device-detect";

type RedirectBasedOnDeviceProps = {
  mobileUrl: string;
  desktopUrl: string;
  iosUrl: string;
  androidUrl: string;
};

const useRedirectBasedOnDevice = ({
  mobileUrl,
  desktopUrl,
  iosUrl,
  androidUrl,
}: RedirectBasedOnDeviceProps) => {
  const router = useRouter();

  useEffect(() => {
    if (isMobile) {
      if (isIOS && iosUrl) {
        router.push(iosUrl);
      } else if (isAndroid && androidUrl) {
        router.push(androidUrl);
      } else {
        router.push(mobileUrl);
      }
    } else {
      router.push(desktopUrl);
    }
  }, [router, mobileUrl, desktopUrl, iosUrl, androidUrl]);
};

export default useRedirectBasedOnDevice;
