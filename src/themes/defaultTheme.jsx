import { createMuiTheme } from '@material-ui/core'

const duplicateTextPrimary = "#e3e3e3"
const duplicateTextSecondary = "#c7d5ff"
const duplicatePrimaryMain = "#f5f5f5"
const duplicateIconButtonColorPrimary = "#7981b0"

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
        secondary: duplicateTextSecondary
      },
    },
    typography: {
      h1: {
        fontFamily: "Fredoka One",
        fontWeight: "bold",
        fontSize: 48,
        color: duplicateTextPrimary
      },
      h4: {
        fontFamily: "Nunito",
        color: duplicateTextPrimary,
        marginTop: "4.5rem",
        marginBottom: "1rem"
      },
      h6: {
        fontFamily: "Nunito",
        color: duplicateTextPrimary,
      },
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
        elevation5:{
          // backgroundColor: "#000e5c",
          // backgroundColor: "transparent",
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
          backgroundColor: duplicateTextSecondary
        }
      },
      MuiSlider: {
        colorPrimary: {
          color: duplicateTextSecondary
        }
      },
      MuiTableBody:{
        root:{
          backgroundColor: "#393c70"
        }
      },
      MuiTableCell:{
        head:{
          color:duplicatePrimaryMain,
          fontWeight:"bold"
        },
        root:{
          borderBottom: "1px solid #252863"
        }
      }
    }
  })