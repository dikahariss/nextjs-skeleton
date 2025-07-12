// Shared styling constants and utility functions
export const COLORS = {
  gradients: {
    primary: "bg-gradient-to-r from-blue-600 to-blue-700",
    primaryHover: "hover:from-blue-700 hover:to-blue-800",
    danger: "bg-gradient-to-r from-red-500 to-red-700",
    dangerHover: "hover:from-red-600 hover:to-red-800",
    background: "bg-gradient-to-br from-blue-50 to-white",
  },
  text: {
    primary: "text-gray-900",
    secondary: "text-gray-600",
    muted: "text-gray-400",
    accent: "text-gray-800",
  },
  border: {
    light: "border-gray-100",
    default: "border-gray-200",
  },
} as const;

export const SHADOWS = {
  card: "shadow-xl",
  button: "shadow-lg hover:shadow-xl",
  alert: "shadow-md",
} as const;

export const TRANSITIONS = {
  default: "transition-all duration-200",
  scale: "hover:scale-105",
  transform: "transform",
} as const;

export const SPACING = {
  container: "px-4 sm:px-6 lg:px-8",
  section: "py-8 sm:py-12",
  cardPadding: "px-4 sm:px-8 py-4 sm:py-6",
  gap: {
    small: "gap-2 sm:gap-4",
    medium: "gap-3",
    large: "gap-4 sm:gap-6",
  },
} as const;

export const LAYOUT = {
  maxWidth: {
    card: "max-w-lg",
    button: "max-w-xs",
    container: "max-w-7xl",
  },
  flex: {
    center: "flex items-center justify-center",
    between: "flex justify-between items-center",
    column: "flex flex-col",
    responsive: "flex flex-col sm:flex-row",
  },
} as const;

// Utility function to combine button styles
export const getButtonStyles = (variant: "primary" | "danger" | "outline" = "primary") => {
  const baseStyles = `
    w-full sm:w-auto flex items-center gap-2 font-bold
    ${SHADOWS.button} ${TRANSITIONS.default}
  `.trim();

  const variants = {
    primary: `
      ${COLORS.gradients.primary} ${COLORS.gradients.primaryHover} 
      text-white ${TRANSITIONS.scale}
    `.trim(),
    danger: `
      ${COLORS.gradients.danger} ${COLORS.gradients.dangerHover} 
      text-white ${TRANSITIONS.scale}
    `.trim(),
    outline: `
      font-semibold
    `.trim(),
  };

  return `${baseStyles} ${variants[variant]}`;
};

// Utility function for responsive card layouts
export const getCardContainerStyles = () =>
  `
  w-full max-w-lg mx-auto ${SHADOWS.card} border-0 
  bg-white/95 backdrop-blur-md animate-fade-in
`.trim();

// Utility function for page layout
export const getPageLayoutStyles = () =>
  `
  min-h-screen ${LAYOUT.flex.column} ${COLORS.gradients.background}
`.trim();
