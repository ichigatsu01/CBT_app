import { Button, Dialog, DialogActions, DialogTitle, List, ListItem } from '@mui/material'
import React, { useContext } from 'react'
import HeaderContext from '../../../context/HeaderContext'

const HelpText = () => {
  const {isHelpOpen, setIsHelpOpen} = useContext(HeaderContext);
  return (
    <Dialog open={isHelpOpen} onClose={() => setIsHelpOpen(false)}>
      <DialogTitle>記入の際の参考にしてください：</DialogTitle>
      <List>
        <ListItem>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. </ListItem>
        <ListItem>Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. </ListItem>
        <ListItem>Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </ListItem>
        <ListItem>Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</ListItem>
      </List>
      <DialogActions>
        <Button onClick={() => setIsHelpOpen(false)}>閉じる</Button>
      </DialogActions>
    </Dialog>
  )
}

export default HelpText
