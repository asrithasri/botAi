import { Stack, Typography,IconButton,useMediaQuery } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useOutletContext } from  'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useContext } from 'react';
import { ThemeContext } from '../../theme/ThemeContext';


export default function Navbar(){

    const isMobile = useMediaQuery('(max-width:800px)');
    const {handleMobileMenu} = useOutletContext(); 
    const { setMode, mode } = useContext(ThemeContext);

   return (
    <Stack 
        component={'header'}
        p={{xs:2,md:3}}
        direction={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
        >
    <Stack
        direction={'row'}
        alignItems={'center'}
        spacing={2}
        >
            {isMobile && (
                <MenuIcon onClick={()=>handleMobileMenu(prev=>!prev)}
                />)
            }
           
           <Link to={'/'} style={{ textDecoration: 'none' }}>
                    <Typography
                        variant='h1'
                        component={'h1'}
                    >
                        Bot AI
                    </Typography>
                </Link>
            </Stack>

            <Stack
                direction={'row'}
                spacing={0.2}
                alignItems={'center'}
            >
                <Typography
                    textTransform={'capitalize'}
                    fontSize={10}
                >
                    {mode}
                </Typography>
                <IconButton onClick={() =>
                    setMode(prev => {
                        if (prev == 'light') {
                            return 'dark'
                        }
                        else {
                            return 'light'
                        }
                    })
                }>
                    {mode == "light"
                        ? (
                            <Brightness4Icon />
                        )
                        : (
                            <Brightness7Icon />
                        )
                    }
                </IconButton>
            </Stack>

        </Stack>
   ) 
}