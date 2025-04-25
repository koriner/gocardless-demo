import { TypographyVariantsOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    monospace: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    monospace?: React.CSSProperties;
  }
}

// Allows using `variant="code"` in <Typography />
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    monospace: true;
  }
}