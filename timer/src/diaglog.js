import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function Diaglog(props) {
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        props.closeDiaglog()
    };

    React.useEffect(() => {
        setOpen(props.openDiaglog)
    }, [props.openDiaglog])

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Alram!! Time to do your task</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Online training of React Js is happenning now!
          </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
          </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        I'will be there
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
