
import '../App.css';
import { Grid } from '@mui/material';
import Header from './Header';
import Footer from './Footer';




function MainLayout({ children }) {


  return (
    <>
      <Grid sx={{ width: 'auto', height: '100vh', background: ' -webkit-linear-gradient(-45deg,rgba(42,77,252,1) 0,rgba(10,255,206,1) 100%)' }}>
        <Grid><Header /></Grid>
        <Grid>{children}</Grid>
        {/* <div>&copy;</div> */}
       
      </Grid>
      <Grid><Footer /></Grid>
    
    </>

  )
}

export default MainLayout