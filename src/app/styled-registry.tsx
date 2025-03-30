"use client";
import React, { useState } from "react";
import { StyleSheetManager, ServerStyleSheet } from "styled-components";

export default function StyledComponentsRegistry({ children }: { children: React.ReactNode }) {
  const [styledComponentsStyleSheet] = useState(() => {
    if (typeof window === "undefined") {
      return new ServerStyleSheet();
    }
    return null;
  });

  return styledComponentsStyleSheet ? (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  ) : (
    <>{children}</>
  );
}
