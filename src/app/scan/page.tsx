"use client";
import useRedirectBasedOnDevice from "@/hooks/useRedirectBasedOnDevice";

const MyComponent = () => {
  const mobileUrl = "/";
  const desktopUrl = "/";
  const iosUrl = "https://apps.apple.com/us/app/waverlite/id6450453788";
  const androidUrl =
    "https://play.google.com/store/apps/details?id=com.redbiller.waverlite&pcampaignid=web_share";

  useRedirectBasedOnDevice({
    mobileUrl,
    desktopUrl,
    iosUrl,
    androidUrl,
  });

  return null;
};

export default MyComponent;
