import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export default function BtynBar() {
  const classes = useStyles();
  const history = useHistory()

  const movePage = (pageName) => {
  console.log("🚀 ~ file: btynBar.js ~ line 27 ~ movePage ~ pageName", pageName)
    history.push(`${pageName}`)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit"
            onClick={() => movePage("")}
          >ComponentA</Button>
          <Button color="inherit"
          onClick={() => movePage("/componentb/helloworld")}
          >ComponentB</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}