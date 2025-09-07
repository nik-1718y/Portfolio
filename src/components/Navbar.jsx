import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../assets/Logo.png';
import { Link } from 'react-scroll'; // Use react-scroll for smooth scrolling

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const navItems = [
    { name: 'Home', slug: 'hero' },
    { name: 'About',  slug: 'about' },
    { name: 'Skills',  slug: 'skills' },
    { name: 'Projects', slug: 'projects' },
    { name: 'Contact', slug: 'contact' },
  ];

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerList = () => (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name}>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <Link
                to={item.slug}
                smooth={true}
                duration={500}
                offset={-70}
              >
                <ListItemText primary={item.name} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <header className='backdrop-blur-lg shadow-sm shadow-neutral-900 z-10 fixed top-0 left-0 w-full px-14 sm:px-20 pt-2 sm:pt-4 md:pt-6'>
      <nav className='flex'>
        <div className='mr-4'>
          {/* <img src={Logo} height={60} width={60} alt="Logo" /> */}
        </div>

        <ul className='hidden md:flex ml-auto py-2'>
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.slug}
                smooth={true}
                duration={500}
                offset={-70}
                className='text-neutral-50 inline-block mx-1 lg:mx-2 px-6 py-2 duration-200 hover:bg-neutral-300 hover:text-neutral-950 focus:border border-neutral-100 rounded-full cursor-pointer'
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className='flex ml-auto md:hidden pt-2'>
          <MenuIcon onClick={toggleDrawer(true)} className='text-neutral-50 mt-3' />
          <Drawer anchor={'left'} open={drawerOpen} onClose={toggleDrawer(false)}>
            {drawerList()}
          </Drawer>
        </div>
      </nav>
    </header>
  );
}
