import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { RiShoppingBagFill, RiShoppingCartFill } from "react-icons/ri";
import AdbIcon from "@mui/icons-material/Adb";

import {
  Avatar,
  Badge,
  Button,
  Chip,
  Divider,
  ListItemIcon,
  MenuItem,
  styled,
  Tooltip,
} from "@mui/material";
import { BorderBottom, Logout, PersonAdd, Settings } from "@mui/icons-material";
// import styled from "@mui/material/styles/styled";
import Menu, { MenuProps } from "@mui/material/Menu";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { FiPhoneCall } from "react-icons/fi";
import { CgMenuLeftAlt } from "react-icons/cg";
import { FaAngleDown } from "react-icons/fa";
import { GoChevronDown } from "react-icons/go";

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

  // hover menu function

  const [anchorEl, setAnchorEl] = React.useState<any>(null);

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  // const [openSubMenu, setOpenSubMenu] = React.useState<string | null>(null);
  const [openSubMenus, setOpenSubMenus] = React.useState<string[]>([]);

  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setIsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsMenuOpen(false);
    setAnchorEl(null);
  };

  const handleSubMenuToggle = (item: string) => {
    if (openSubMenus.includes(item)) {
      // If the submenu is already open, close it
      setOpenSubMenus(openSubMenus.filter((subMenu) => subMenu !== item));
    } else {
      // Otherwise, add it to the list of open submenus
      setOpenSubMenus([...openSubMenus, item]);
    }
  };

  console.log(openSubMenus, "S M");
  console.log(isMenuOpen);

  const subMenuItems: { [key: string]: string[] } = {
    Bakery: ["Bread", "Cakes", "Cookies"],
    "Snacks Item": ["Chips", "Popcorn", "Nuts"],
    Beverages: ["Juices", "Sodas", "Water"],
    "Milk Items": ["Cheese", "Butter", "Yogurt"],
    "Sea Food": ["Fish", "Shrimp", "Crab"],
    "Dairy Items": ["Milk", "Cream", "Paneer"],
  };


  // store menu 

  const [anchorElStore, setAnchorElStore] = React.useState<any>(null);

  const [isMenuOpenStore, setIsMenuOpenStore] = React.useState(false);
  // const [openSubMenu, setOpenSubMenu] = React.useState<string | null>(null);

  const handleMouseEnterStore = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElStore(event.currentTarget);
    setIsMenuOpenStore(true);
  };

  const handleMouseLeaveStore = () => {
    setIsMenuOpenStore(false);
    setAnchorElStore(null);
  };
  // store menu 

  // hover menu function

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
    <>
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
              aria-controls={
                anchorElOptions ? "demo-customized-menu" : undefined
              }
              aria-haspopup="true"
              aria-expanded={anchorElOptions ? "true" : undefined}
              // variant="contained"
              color="inherit"
              disableElevation
              onClick={handleOpenOptionsMenu}
              endIcon={<KeyboardArrowDownIcon />}
            >
              United States (USD $)
            </Button>
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                "aria-labelledby": "demo-customized-button",
              }}
              anchorEl={anchorElOptions}
              open={Boolean(anchorElOptions)}
              onClose={handleCloseOptionsMenu}
            >
              <MenuItem onClick={handleCloseOptionsMenu} disableRipple>
                France (EUR €)
              </MenuItem>
              <MenuItem onClick={handleCloseOptionsMenu} disableRipple>
                Russia (RUB ₽)
              </MenuItem>
              <MenuItem onClick={handleCloseOptionsMenu} disableRipple>
                Saudi Arabia (SAR ر.س)
              </MenuItem>
              <MenuItem onClick={handleCloseOptionsMenu} disableRipple>
                Spain (EUR €)
              </MenuItem>
            </StyledMenu>

            {/* User Avatar */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleOpenUserMenu}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={anchorElUser ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={anchorElUser ? "true" : undefined}
                >
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
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
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
        <AppBar position="sticky" className="bg-white">
          <Container maxWidth="xl">
            <Toolbar
              disableGutters
              className="min-h-[90px] flex flex-row justify-between items-center text-black "
            >
              <div className="flex flex-row justify-center items-center">
                <RiShoppingBagFill className="text-black text-lg mr-1 inline" />
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
                    letterSpacing: ".2rem",
                    color: "inherit",
                    textDecoration: "none",
                    fontSize: 20,
                  }}
                >
                  MERNCart
                </Typography>
              </div>
              <div>
                <div className="  flex items-center justify-center">
                  <div className="flex border-2 border-gray-300   rounded-full overflow-hidden">
                    <input
                      type="text"
                      placeholder="Search for items..."
                      className="px-4 py-[10px] w-[500px] text-base  outline-none text-gray-700"
                    />
                    <button className="bg-black text-white px-6 py-2 rounded-full">
                      Search
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-6 py-4 px-6">
                  {/* Help Section */}
                  <div className="flex items-center space-x-2">
                    <FiPhoneCall className="text-gray-500" size={24} />
                    <div>
                      <p className="text-sm text-gray-500">Need Help?</p>
                      <p className="text-lg font-medium text-gray">
                        +01 123 456 789
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <Divider orientation="vertical" flexItem />

                  {/* Cart Section */}
                  <div className="flex items-center space-x-2">
                    <div className="relative">
                      <RiShoppingCartFill className="text-gray-500" size={24} />
                      <Badge
                        badgeContent={2} // Cart item count
                        color="success"
                        className="absolute -top-1   -right-12 text-sm text-white"
                      >
                        {/* Empty content to position badge */}
                      </Badge>
                    </div>
                    <div className="flex flex-col gap-0">
                      <p className="text-sm text-gray-500">Cart</p>
                      <p className="text-lg font-semibold text-blue-700">
                        $0.00
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* mobile responsive menu is started from here  */}

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
                }}
              >
                LOGO
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>

        {/* hover menu  */}

        <AppBar position="sticky" className="bg-white">
          <Container maxWidth="xl">
            <Toolbar
              disableGutters
              className="min-h-[80px] flex flex-row justify-between items-center text-black "
            >
              <div
                className="flex flex-row justify-center items-center bg-offwhite px-5 py-3 rounded-full cursor-pointer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={() => !isMenuOpen && handleMouseLeave()}
              >
                <div className=" flex flex-row justify-center items-center gap-1">
                  <CgMenuLeftAlt className="text-black text-2xl mr-1 inline" />
                  <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="#app-bar-with-responsive-menu"
                    sx={{
                      mr: 2,
                      display: { xs: "none", md: "flex" },
                      fontWeight: 600,
                      color: "inherit",
                      textDecoration: "none",
                      fontSize: 15,
                    }}
                  >
                    Shop by Departments
                  </Typography>
                </div>
                <GoChevronDown className="text-black text-2xl  inline " />
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl && isMenuOpen)}
                  onClose={handleMouseLeave}
                  MenuListProps={{
                    onMouseEnter: () => setIsMenuOpen(true),
                    onMouseLeave: handleMouseLeave,
                  }}
                  anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                  transformOrigin={{ vertical: "top", horizontal: "left" }}
                  className="p-2"
                  PaperProps={{
                    className:
                      "bg-white border-2 bg-white border-darkGreen shadow-lg rounded-lg w-[265px]",
                  }}
                >
                  {[
                    "Our Store",
                    "Bakery",
                    "Vegetables",
                    "Chips",
                    "Snacks Item",
                    "Beverages",
                    "Milk Items",
                    "Sea Food",
                    "Toasts",
                    "Dairy Items",
                  ].map((item, index) => (
                    <div key={index} className="relative">
                      <MenuItem
                        className={`flex justify-between text-base bg-white font-light text-black hover:bg-green-100 py-2`}
                        sx={{
                          borderBottom:
                            index !== 9 ? "1px solid #0000001f" : "none",
                          "&:hover": {
                            backgroundColor: "#D1FAE5",
                          },
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSubMenuToggle(item); // Toggles the submenu state
                        }}
                      >
                        {item}
                        {Object.keys(subMenuItems).includes(item) && (
                          <span className="text-green-500 text-base font-bold cursor-pointer">
                            {openSubMenus.includes(item) ? "-" : "+"}
                          </span>
                        )}
                      </MenuItem>

                      {/* Submenu */}
                      {Object.keys(subMenuItems).includes(item) && (
                        <div
                          className={`transition-all overflow-hidden bg-offwhite    ${
                            openSubMenus.includes(item) ? "max-h-40" : "max-h-0"
                          }`}
                          // style={{ backgroundColor: "white" }}
                        >
                          {subMenuItems[item]?.map((subItem, subIndex) => (
                            <div
                              key={subIndex}
                              className="px-4 py-2 text-base text-black cursor-pointer hover:bg-green-100 duration-150"
                              style={{
                                borderBottom: "1px solid #0000001f",
                              }}
                            >
                              <span className="pl-2">{subItem}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </Menu>
              </div>

              <div className="flex flex-row justify-center items-center">
                <Typography
                  variant="h6"
                  noWrap
                  className="hover:text-darkGreen duration-150"
                  component="a"
                  href="#app-bar-with-responsive-menu"
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    // fontFamily: "monospace",
                    fontWeight: 600,
                    letterSpacing: ".1rem",
                    color: "inherit",
                    textDecoration: "none",
                    fontSize: 15,
                  }}
                >
                  Home
                </Typography>
              </div>

              <div className="flex flex-row justify-center gap-1 hover:text-darkGreen duration-150 items-center cursor-pointer"    onMouseEnter={handleMouseEnterStore}
                onMouseLeave={() => !isMenuOpenStore && handleMouseLeaveStore()}>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="#app-bar-with-responsive-menu"
                  sx={{
                    display: { xs: "none", md: "flex" },
                    // fontFamily: "monospace",
                    fontWeight: 600,
                    // letterSpacing: ".1rem",
                    color: "inherit",
                    textDecoration: "none",
                    fontSize: 15,
                    
                  }}
                  className="cursor-pointer"
                >
                  Our Store
                </Typography>
                <GoChevronDown className="text-black text-2xl  inline " />
                <Menu
                  anchorEl={anchorElStore}
                  open={Boolean(anchorElStore && isMenuOpenStore)}
                  onClose={handleMouseLeaveStore}
                  MenuListProps={{
                    onMouseEnter: () => setIsMenuOpen(true),
                    onMouseLeave: handleMouseLeaveStore,
                  }}
                  anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                  transformOrigin={{ vertical: "top", horizontal: "center" }}
                  className="p-2 flex justify-center items-center"
                  PaperProps={{
                    className:
                      "bg-white border bg-white border-darkGreen shadow-lg  mt-3 mx-auto flex ml-[8%]   rounded-lg w-[76%]",
                  }}
                >
                  <MenuItem>Beverages</MenuItem>
                  <MenuItem>Dairy Items</MenuItem>
                  <MenuItem>Flat 80% OFF</MenuItem>
                  <MenuItem>Up to 30% OFF</MenuItem>
                </Menu>
              </div>

              <div className="flex flex-row justify-center gap-1 hover:text-darkGreen duration-150 items-center">
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="#app-bar-with-responsive-menu"
                  sx={{
                    display: { xs: "none", md: "flex" },
                    // fontFamily: "monospace",
                    fontWeight: 600,
                    // letterSpacing: ".1rem",
                    color: "inherit",
                    textDecoration: "none",
                    fontSize: 15,
                  }}
                >
                  Special{" "}
                  <Chip
                    label="SALE"
                    color="success"
                    className="ml-[3px] text-[10px] rounded-md  bg-offwhite"
                    variant="outlined"
                    size="small"
                  />
                </Typography>
                <GoChevronDown className="text-black text-2xl  inline " />
              </div>

              <div className="flex flex-row justify-center gap-1 hover:text-darkGreen duration-150 items-center">
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="#app-bar-with-responsive-menu"
                  sx={{
                    display: { xs: "none", md: "flex" },
                    // fontFamily: "monospace",
                    fontWeight: 600,
                    // letterSpacing: ".1rem",
                    color: "inherit",
                    textDecoration: "none",
                    fontSize: 15,
                  }}
                >
                  Categories{" "}
                  <Chip
                    label="SALE"
                    color="error"
                    className="ml-[3px] text-[10px] rounded-md  bg-offwhite"
                    variant="outlined"
                    size="small"
                  />
                </Typography>
                <GoChevronDown className="text-black text-2xl  inline " />
              </div>

              <div className="flex flex-row justify-center gap-1 hover:text-darkGreen duration-150 items-center">
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="#app-bar-with-responsive-menu"
                  sx={{
                    display: { xs: "none", md: "flex" },
                    // fontFamily: "monospace",
                    fontWeight: 600,
                    // letterSpacing: ".1rem",
                    color: "inherit",
                    textDecoration: "none",
                    fontSize: 15,
                  }}
                >
                  Top deals
                </Typography>
                <GoChevronDown className="text-black text-2xl  inline " />
              </div>

              <div className="flex flex-row justify-center gap-1 hover:text-darkGreen duration-150 items-center">
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="#app-bar-with-responsive-menu"
                  sx={{
                    display: { xs: "none", md: "flex" },
                    // fontFamily: "monospace",
                    fontWeight: 600,
                    // letterSpacing: ".1rem",
                    color: "inherit",
                    textDecoration: "none",
                    fontSize: 15,
                  }}
                >
                  Elements
                </Typography>
                <GoChevronDown className="text-black text-2xl  inline " />
              </div>

              <div></div>

              {/* mobile responsive menu is started from here  */}
            </Toolbar>
          </Container>
        </AppBar>
      </div>

      {/* // hover menu  */}
    </>
  );
};

export default Navbar;
