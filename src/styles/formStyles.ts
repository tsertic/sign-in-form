const styles = (theme: any) => {
  return {
    main: {
      width: 'auto',
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3),
      [theme.breakpoints.up('sm')]: {
        width: '400px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column' as 'column',
      alignItems: 'center',
      padding: theme.spacing(4),
      paddingTop: 0,
      boxShadow: '-1px 1px 5px rgba(0,0,0,0.3)'
    },
    avatar: {
      margin: theme.spacing(3),
      background: theme.palette.secondary.main
    },
    form: {
      width: '100%'
    },
    submitButton: {
      marginTop: theme.spacing(3)
    }
  };
};

export default styles;
