import { Box, CSSProperties, Link, Typography, useTheme } from "@mui/material";
import { useLocation } from 'react-router-dom';

export interface NavigationProps {
  title: string;
}

const Navigation: React.FC<NavigationProps> = ({
  title,
}) => {
  const theme = useTheme();
  const loc = useLocation();

  function getNavItemStyle(path: '/' | '/payouts'): CSSProperties {
    if (loc.pathname === path) {
      return {
        color: theme.palette.primary.main,
        borderLeftStyle: 'solid',
        borderLeftColor: theme.palette.primary.main,
        borderLeftWidth: 4,
      };
    }

    // No styling needed here
    return {};
  }

  return (
    <Box
      data-testid="navigation"
      sx={{
        backgroundColor: theme.palette.grey[900],
        color: theme.palette.common.white,
        height: '100%',
        borderTopLeftRadius: theme.spacing(2),
        borderBottomLeftRadius: theme.spacing(2),
        width: 'calc(100% + 20px)',
        zIndex: -1,
        position: 'relative',
      }}
    >
      <Box flexDirection="column" justifyItems="left" pt={2} pb={2}>
        <Typography
          variant="h5"
          component="h2"
          aria-label={`${title} menu`}
          sx={{ p: 2 }}
        >
            {title}
        </Typography>
        <Box display="flex" flexDirection="column" mt={4}>
          <nav aria-label="main menu">
            <div style={{
              textAlign: 'left',
              marginBottom: theme.spacing(1),
              paddingLeft: theme.spacing(2),
              ...getNavItemStyle('/'),
            }}>
              <Link href="/" aria-label="home">Home</Link>
            </div>
            <div
              style={{
                textAlign: 'left',
                paddingLeft: theme.spacing(2),
                ...getNavItemStyle('/payouts'),
              }}>
              <Link href="/payouts" aria-label="payouts">Payouts</Link>
            </div>
          </nav>
        </Box>
      </Box>
    </Box>
  );
};

export default Navigation;