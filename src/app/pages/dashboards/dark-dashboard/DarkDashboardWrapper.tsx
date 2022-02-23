/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import {
  IThemeConfig,
  useTheme,
  getConfig,
  PageTitle,
  PageTitleSub
} from "../../../../_start/layout/core";
import { DarkDashboardPage } from "./DarkDashboardPage";

const defaultPageConfig = getConfig();
const dashboardPageConfig: Partial<IThemeConfig> = {
  aside: {
    ...defaultPageConfig.aside,
    display: true,
    primaryDisplay: false,
    secondaryDisplay: true,
    toggle: false,
    content: "menu",
  },
  toolbar: {
    ...defaultPageConfig.toolbar,
    display: false,
  },
  sidebar: {
    ...defaultPageConfig.sidebar,
    display: false,
  },
};

export function DarkDashboardWrapper() {
  const { setTheme } = useTheme();
  // Refresh UI after config updates
  useEffect(() => {
    setTheme(dashboardPageConfig);
    return () => {
      setTheme(defaultPageConfig);
    };
  }, []);

  return (
    <>
      <DarkDashboardPage />
      <PageTitle>Dashboard Overview</PageTitle>
      <PageTitleSub>12:15 PM at 19th November 2020</PageTitleSub>
    </>
  );
}
