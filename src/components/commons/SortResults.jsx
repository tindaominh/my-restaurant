import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  sortResults: {
    "-webkitBoxPack": "justify",
    borderBottom: "1px solid rgb(242, 242, 242)",
    padding: "16px 0px 0px"
  }
}));

export default function SortResults() {
  const classes = useStyles();

  return (
    <Box 
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      className={classes.sortResults}
    >
      sort results
    </Box>
  );
}

