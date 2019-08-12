import React from 'react';
// import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
import MuiDialog from '@material-ui/core/Dialog';
// import MuiDialogContent from '@material-ui/core/DialogContent';
// import MuiDialogActions from '@material-ui/core/DialogActions';
// import IconButton from '@material-ui/core/IconButton';
// import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import { withRouter } from "react-router-dom"
import { DialogTitle, DialogContent, DialogActions } from '@material-ui/core';

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});


const CustomizedDialogs = (props) => {
  // const handleClose = () => {
  //   setOpen(false);
  // };



  return (

    <MuiDialog
      open={props.el.key === props.match.params.key}
      onClose={() => { props.history.push('/items-list') }}
    >

      <div>
        <DialogTitle>
          Modal title
        </DialogTitle>
        <DialogContent>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
            lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
            auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => props.history.push('/concerts-list')} color="primary">
            Chujdupacycki
          </Button>
        </DialogActions>
      </div>

    </MuiDialog>
  );
}

export default withRouter(CustomizedDialogs)
