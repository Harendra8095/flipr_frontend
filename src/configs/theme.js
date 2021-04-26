import { createMuiTheme } from '@material-ui/core';
import{
  grey,
  purple,
  green
} from '@material-ui/core/colors';
// import purple from '@material-ui/core/colors/purple';
// import green from '@material-ui/core/colors/green';

export default createMuiTheme({
  palette: {
    primary: green,
    secondary: purple,
    accent: grey,
  },
});
