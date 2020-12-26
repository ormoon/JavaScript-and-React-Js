import { createMuiTheme } from '@material-ui/core/styles';
import Indigo from '@material-ui/core/colors/indigo';
import green from '@material-ui/core/colors/green';

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: Indigo[900],
        },
        secondary: {
            main: green[900],
        },
    },
});