import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, } from '@mui/material'
import React, { useContext } from 'react'
import { HeaderContext } from '../../../context/HeaderContext'

const HelpText = () => {
  const {isHelpOpen, setIsHelpOpen} = useContext(HeaderContext);
  return (
    <Dialog
      open={isHelpOpen}
      onClose={() => setIsHelpOpen(false)}
      disableEnforceFocus
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      >
      <DialogTitle>記入の際の参考にしてください：</DialogTitle>
      <DialogContent>
        <DialogContentText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setIsHelpOpen(false)}>閉じる</Button>
      </DialogActions>
    </Dialog>
  )
}

export default HelpText
