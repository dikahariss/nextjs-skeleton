// TypeScript interfaces for better type safety across components

// AppHeader configuration types
export interface NavigationConfig {
  dashboard?: {
    show: boolean;
    href: string;
  };
  home?: {
    show: boolean;
    href: string;
  };
}

export interface UserConfig {
  showUser?: boolean;
  showLogout?: boolean;
}

export interface AppHeaderConfig {
  title: string;
  navigation?: NavigationConfig;
  user?: UserConfig;
}

// MainCard component types
export interface MainCardProps {
  headline: string;
  description: string;
  illustration: string;
  showList?: boolean;
  listItems?: string[];
  action?: React.ReactNode;
  className?: string;
}

// InfoAlert component types
export interface InfoAlertProps {
  title: string;
  description: string;
  className?: string;
  variant?: "default" | "destructive";
}

// LoginButton component types
export interface LoginButtonProps {
  size?: "sm" | "lg" | "default";
  className?: string;
  forceRedirectUrl?: string;
}

// AppFooter component types
export interface AppFooterProps {
  author?: string;
  year?: number;
  poweredBy?: string[];
  className?: string;
  showCopyright?: boolean;
}

// Page content type from hooks
export interface PageContent {
  headline: string;
  description: string;
  illustration: string;
  listItems: string[];
  alert: {
    title: string;
    description: string;
  };
}

// Common props for reusable components
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Icon component props
export interface IconProps {
  className?: string;
  size?: number;
}
