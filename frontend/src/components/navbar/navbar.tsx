import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Divider, ListItemIcon, styled } from "@mui/material";
import { Logout, PersonAdd, Settings } from "@mui/icons-material";
// import styled from "@mui/material/styles/styled";
import Menu, { MenuProps } from "@mui/material/Menu";
import EditIcon from "@mui/icons-material/Edit";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// Styled Menu Component
const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: theme.palette.text.secondary,
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: theme.palette.action.selectedOpacity,
      },
    },
  },
}));

// const settings = ["Profile", "My Account", "Cart", "Logout"];

const Navbar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElOptions, setAnchorElOptions] =
    React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleOpenOptionsMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElOptions(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleCloseOptionsMenu = () => {
    setAnchorElOptions(null);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full bg-black">
      {/* Top Notification Bar */}
      <div className="w-[80%] flex flex-row justify-between items-center h-[56px] text-white">
        <p className="font-thin text-sm">
          Save up to 20% on all Toys & Accessories with “FLAT26OFF” code
        </p>

        {/* Options Button */}
        <Toolbar disableGutters className="min-h-[57px]">
          <Button
            id="demo-customized-button"
            aria-controls={anchorElOptions ? "demo-customized-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={anchorElOptions ? "true" : undefined}
            variant="contained"
            disableElevation
            onClick={handleOpenOptionsMenu}
            endIcon={<KeyboardArrowDownIcon />}>
            United States (USD $)
          </Button>
          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
              "aria-labelledby": "demo-customized-button",
            }}
            anchorEl={anchorElOptions}
            open={Boolean(anchorElOptions)}
            onClose={handleCloseOptionsMenu}>
            <MenuItem onClick={handleCloseOptionsMenu} disableRipple>
              <EditIcon />
              Edit
            </MenuItem>
            <MenuItem onClick={handleCloseOptionsMenu} disableRipple>
              <FileCopyIcon />
              Duplicate
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem onClick={handleCloseOptionsMenu} disableRipple>
              <ArchiveIcon />
              Archive
            </MenuItem>
            <MenuItem onClick={handleCloseOptionsMenu} disableRipple>
              <MoreHorizIcon />
              More
            </MenuItem>
          </StyledMenu>

          {/* User Avatar */}
          <Box
            sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleOpenUserMenu}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={anchorElUser ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={anchorElUser ? "true" : undefined}>
                <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
              </IconButton>
            </Tooltip>
          </Box>
          <Menu
            anchorEl={anchorElUser}
            id="account-menu"
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
            slotProps={{
              paper: {
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&::before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
            <MenuItem onClick={handleCloseUserMenu}>
              <Avatar /> Profile
            </MenuItem>
            <MenuItem onClick={handleCloseUserMenu}>
              <Avatar /> My account
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleCloseUserMenu}>
              <ListItemIcon>
                <PersonAdd fontSize="small" />
              </ListItemIcon>
              Add another account
            </MenuItem>
            <MenuItem onClick={handleCloseUserMenu}>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem onClick={handleCloseUserMenu}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Toolbar>
      </div>

      {/* Navbar */}
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters className="min-h-[57px]">
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 600,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}>
              MERNCart
            </Typography>

            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}>
              LOGO
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
