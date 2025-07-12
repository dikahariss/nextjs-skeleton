// Helper functions for component configurations
import { NavigationConfig, UserConfig, AppHeaderConfig } from "./types";
import { ROUTES } from "./constants";

// AppHeader configuration helpers
export function createNavigationConfig(options: {
  showDashboard?: boolean;
  showHome?: boolean;
  dashboardHref?: string;
  homeHref?: string;
}): NavigationConfig {
  return {
    dashboard: options.showDashboard
      ? {
          show: true,
          href: options.dashboardHref || ROUTES.dashboard,
        }
      : undefined,
    home: options.showHome
      ? {
          show: true,
          href: options.homeHref || ROUTES.home,
        }
      : undefined,
  };
}

export function createUserConfig(options: {
  showUser?: boolean;
  showLogout?: boolean;
}): UserConfig {
  return {
    showUser: options.showUser,
    showLogout: options.showLogout,
  };
}

export function createHeaderConfig(
  title: string,
  navigationOptions: Parameters<typeof createNavigationConfig>[0] = {},
  userOptions: Parameters<typeof createUserConfig>[0] = {},
): AppHeaderConfig {
  return {
    title,
    navigation: createNavigationConfig(navigationOptions),
    user: createUserConfig(userOptions),
  };
}
