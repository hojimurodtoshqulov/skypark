import i18next from "i18next";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";

export function getContentLang(content_ru, content_uz, content_en ) {
  const router = useRouter()
  const currentLanguage = router.locale;
  console.log("currentLanguage>>>",router.locale);
  return currentLanguage === "uz" ? content_ru : currentLanguage === "ru" ? content_uz : content_en;
}