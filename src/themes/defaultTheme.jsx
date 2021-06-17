import { createMuiTheme } from '@material-ui/core'

export const defaultTheme = createMuiTheme({
    palette: {
      primary: {
        main: "#f5f5f5",
      },
      secondary: {
        main: "#000e5c",
      },
      text: {
        primary: "#e3e3e3",
        secondary: "#c7d5ff"
      },
    },
    typography: {
      h1: {
        fontFamily: "Fredoka One",
        fontWeight: "bold",
        fontSize: 48,
        color: "#e3e3e3"
      },
      h4: {
        fontFamily: "Nunito",
        color: "#e3e3e3",
        marginTop: "4.5rem",
        marginBottom: "1rem"
      },
      h6: {
        fontFamily: "Nunito",
        color: "#e3e3e3",
      },
    },
    overrides: {
      MuiIconButton: {
        root: {
          color: "#7981b0"
        },
        colorPrimary: {
          color: "#7981b0",
        },
        colorSecondary: {
          color: "#e3e3e3"
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
          color: "#e3e3e3"
        }
      },
      MuiFormLabel: {
        root: {
          color: "#c7d5ff",
        }
      },
      MuiInput: {
        underline: {
          '&:before': {
            borderBottomColor: "#c7d5ff"
          }
        }
      },
      MuiButton: {
        contained: {
          backgroundColor: "#c7d5ff"
        }
      },
      MuiSlider: {
        colorPrimary: {
          color: "#c7d5ff"
        }
      },
      MuiTableBody:{
        root:{
          backgroundColor: "#393c70"
        }
      },
      MuiTableCell:{
        head:{
          color:"#f5f5f5",
          fontWeight:"bold"
        },
        root:{
          borderBottom: "1px solid #252863"
        }
      }
    }
  })