"use client";
import { useEffect } from "react";

const SEO = ({ pageTitle }) => {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.title = pageTitle + " - Hydro Seal Insulation Works";
    }
  }, [pageTitle]);
};

export default SEO;