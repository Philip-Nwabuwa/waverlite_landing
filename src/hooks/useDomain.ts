"use client";

import { useState, useEffect } from "react";

const useDomain = () => {
  const [domain, setDomain] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDomain(window.location.origin);
    }
  }, []);

  return domain;
};

export default useDomain;
