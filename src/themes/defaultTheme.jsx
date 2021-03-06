import { createMuiTheme } from '@material-ui/core'

const duplicateTextPrimary = "#e3e3e3"
const duplicateTextSecondary = "#c7d5ff"
const duplicatePrimaryMain = "#f5f5f5"
const duplicateIconButtonColorPrimary = "#b3b5ff"
const duplicateMarkedColor = "#4997fc"

export const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: duplicatePrimaryMain,
    },
    secondary: {
      main: "#000e5c",
    },
    text: {
      primary: duplicateTextPrimary,
      secondary: duplicateTextSecondary,
    },
    info: {
      main: duplicateMarkedColor
    },
  },
  typography: {
    h1: {
      fontFamily: "Fredoka One",
      fontWeight: "bold",
      fontSize: 48,
      color: duplicateTextPrimary,
    },
    h2: {
      fontFamily: "Fredoka One",
      fontWeight: "bold",
      fontSize: 44,
    },
    h3:{
      fontFamily: "Nunito",
      marginTop: "4.5rem",
      marginBottom: "1rem",
      color: "#a1aced"
    },
    h4: {
      fontFamily: "Nunito",
      color: duplicateTextPrimary,
      marginTop: "4.5rem",
      marginBottom: "1rem"
    },
    h5:{
      fontFamily: "Fredoka One",
      color: duplicateTextSecondary,
      fontSize:18
    },
    h6: {
      fontFamily: "Nunito",
      color: duplicateTextPrimary,
    }
  },
  overrides: {
    MuiIconButton: {
      root: {
        color: duplicateIconButtonColorPrimary
      },
      colorPrimary: {
        color: duplicateIconButtonColorPrimary,
      },
      colorSecondary: {
        color: duplicateTextPrimary
      }
    },
    MuiToolbar: {
      root: {
        justifyContent: "space-between",
      }
    },
    MuiContainer: {
      root: {
        paddingLeft: 0,
        paddingRight: 0
      }
    },
    MuiDivider: {
      root: {
        backgroundColor: "#14163d"
      }
    },
    MuiPaper: {
      root: {
        backgroundColor: "#272a6b"
      },
      elevation5: {
        backgroundColor: "#21245c",
        color: duplicateTextPrimary
      }
    },
    MuiFormLabel: {
      root: {
        color: duplicateTextSecondary,
      }
    },
    MuiInput: {
      underline: {
        '&:before': {
          borderBottomColor: duplicateTextSecondary
        }
      }
    },
    MuiButton: {
      contained: {
        backgroundColor: duplicateTextSecondary,
        '&:hover': {
          backgroundColor: "#85a3ff",
        }
      },
    },
    MuiSlider: {
      colorPrimary: {
        color: duplicateTextSecondary
      }
    },
    MuiTableContainer: {
      root: {
        width: "90%",
        marginLeft: "auto",
        marginRight: "0",
      }
    },
    MuiTableBody: {
      root: {
        backgroundColor: "#393c70"
      }
    },
    MuiTableCell: {
      head: {
        color: duplicatePrimaryMain,
        fontWeight: "bold"
      },
      root: {
        borderBottom: "1px solid #252863"
      }
    },
    MuiCardActions: {
      root: {
        backgroundColor: "#1c1f4f",
        borderTop: "1px solid #141414",
      }
    },
    MuiRadio: {
      colorSecondary: {
        '&$checked': {
          color: duplicateTextSecondary
        }
      },
    },
    MuiOutlinedInput: {
      notchedOutline: {
        borderColor: duplicateIconButtonColorPrimary,
      }
    },
    MuiSvgIcon: {
      root: {
        color: duplicateIconButtonColorPrimary
      },
    }
  }
})