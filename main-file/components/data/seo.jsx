"use client";
import { useEffect } from "react";

const SEO = ({ pageTitle }) => {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.title = pageTitle + " - Skyware IT Solutions";
    }
  }, [pageTitle]);
};

export default SEO;