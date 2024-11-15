import {createRoot} from 'react-dom/client';
import App from './App';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './assets/styles.css'

const container = document.getElementById('root')!;

const root = createRoot(container);

root.render(
 
    <><CssBaseline /><GoogleOAuthProvider clientId='1007803784486-5flseicun88phk3lqoffrgmn3svj34ah.apps.googleusercontent.com'>
    <App />
  </GoogleOAuthProvider></>

    
 
);