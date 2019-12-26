export default {
  config: {
    hasTaxEnabled: true,
    enabledStockLimitation: true,
    iconsUrl: {
      closeShop:
        "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjYmYxNzE3IiB4bWxuczp4PSJodHRwOi8vbnMuYWRvYmUuY29tL0V4dGVuc2liaWxpdHkvMS4wLyIgeG1sbnM6aT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZUlsbHVzdHJhdG9yLzEwLjAvIiB4bWxuczpncmFwaD0iaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMCAxMDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3dpdGNoPjxmb3JlaWduT2JqZWN0IHJlcXVpcmVkRXh0ZW5zaW9ucz0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZUlsbHVzdHJhdG9yLzEwLjAvIiB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIj48L2ZvcmVpZ25PYmplY3Q+PGcgaTpleHRyYW5lb3VzPSJzZWxmIj48Zz48cGF0aCBkPSJNNTI3My4xLDI0MDAuMXYtMmMwLTIuOC01LTQtOS43LTRzLTkuNywxLjMtOS43LDR2MmMwLDEuOCwwLjcsMy42LDIsNC45bDUsNC45YzAuMywwLjMsMC40LDAuNiwwLjQsMXY2LjQgICAgIGMwLDAuNCwwLjIsMC43LDAuNiwwLjhsMi45LDAuOWMwLjUsMC4xLDEtMC4yLDEtMC44di03LjJjMC0wLjQsMC4yLTAuNywwLjQtMWw1LjEtNUM1MjcyLjQsMjQwMy43LDUyNzMuMSwyNDAxLjksNTI3My4xLDI0MDAuMXogICAgICBNNTI2My40LDI0MDBjLTQuOCwwLTcuNC0xLjMtNy41LTEuOHYwYzAuMS0wLjUsMi43LTEuOCw3LjUtMS44YzQuOCwwLDcuMywxLjMsNy41LDEuOEM1MjcwLjcsMjM5OC43LDUyNjguMiwyNDAwLDUyNjMuNCwyNDAweiI+PC9wYXRoPjxwYXRoIGQ9Ik01MjY4LjQsMjQxMC4zYy0wLjYsMC0xLDAuNC0xLDFjMCwwLjYsMC40LDEsMSwxaDQuM2MwLjYsMCwxLTAuNCwxLTFjMC0wLjYtMC40LTEtMS0xSDUyNjguNHoiPjwvcGF0aD48cGF0aCBkPSJNNTI3Mi43LDI0MTMuN2gtNC4zYy0wLjYsMC0xLDAuNC0xLDFjMCwwLjYsMC40LDEsMSwxaDQuM2MwLjYsMCwxLTAuNCwxLTFDNTI3My43LDI0MTQuMSw1MjczLjMsMjQxMy43LDUyNzIuNywyNDEzLjd6Ij48L3BhdGg+PHBhdGggZD0iTTUyNzIuNywyNDE3aC00LjNjLTAuNiwwLTEsMC40LTEsMWMwLDAuNiwwLjQsMSwxLDFoNC4zYzAuNiwwLDEtMC40LDEtMUM1MjczLjcsMjQxNy41LDUyNzMuMywyNDE3LDUyNzIuNywyNDE3eiI+PC9wYXRoPjwvZz48cGF0aCBkPSJNOTQuMiwzNi4xSDgwLjRMNjAuMiwxNi42YzAuMy0xLDAuNi0yLjEsMC42LTMuM2MwLTYtNC44LTEwLjgtMTAuOC0xMC44UzM5LjIsNy4zLDM5LjIsMTMuM2MwLDEuMiwwLjIsMi4zLDAuNiwzLjMgICAgTDE5LjYsMzYuMUg1LjhjLTEuNywwLTMuMSwxLjQtMy4xLDMuMXY1NS4yYzAsMS43LDEuNCwzLjEsMy4xLDMuMWg4OC40YzEuNywwLDMuMS0xLjQsMy4xLTMuMVYzOS4yICAgIEM5Ny4zLDM3LjQsOTUuOSwzNi4xLDk0LjIsMzYuMXogTTUwLDguN2MyLjUsMCw0LjYsMi4xLDQuNiw0LjZzLTIuMSw0LjYtNC42LDQuNnMtNC42LTIuMS00LjYtNC42UzQ3LjUsOC43LDUwLDguN3ogTTYyLjEsNzQuNSAgICBjMS4yLDEuMiwxLjIsMy4yLDAsNC40Yy0wLjYsMC42LTEuNCwwLjktMi4yLDAuOXMtMS42LTAuMy0yLjItMC45TDUwLDcxLjJsLTcuOCw3LjhjLTAuNiwwLjYtMS40LDAuOS0yLjIsMC45ICAgIGMtMC44LDAtMS42LTAuMy0yLjItMC45Yy0xLjItMS4yLTEuMi0zLjIsMC00LjRsNy44LTcuOEwzNy45LDU5Yy0xLjItMS4yLTEuMi0zLjIsMC00LjRjMS4yLTEuMiwzLjItMS4yLDQuNCwwbDcuOCw3LjhsNy44LTcuOCAgICBjMS4yLTEuMiwzLjItMS4yLDQuNCwwYzEuMiwxLjIsMS4yLDMuMiwwLDQuNGwtNy44LDcuOEw2Mi4xLDc0LjV6IE0yOC42LDM2LjFsMTQuOC0xNC4zYzEuOCwxLjQsNC4xLDIuMyw2LjYsMi4zczQuOC0wLjksNi42LTIuMyAgICBsMTQuOCwxNC4zSDI4LjZ6Ij48L3BhdGg+PC9nPjwvc3dpdGNoPjwvc3ZnPg==",
      noFuel:
        "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGRhdGEtbmFtZT0iTGF5ZXIgMSIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHg9IjBweCIgeT0iMHB4Ij48dGl0bGU+NDM8L3RpdGxlPjxnIGRhdGEtbmFtZT0iR3JvdXAiPjxwYXRoIGRhdGEtbmFtZT0iQ29tcG91bmQgUGF0aCIgZD0iTTc0LjMsMjUuN2EzNC40LDM0LjQsMCwxLDAsMCw0OC42aDBBMzQuNCwzNC40LDAsMCwwLDc0LjMsMjUuN1pNMjkuOSwyOS45YTI4LjQsMjguNCwwLDAsMSwzNy45LTJMMjcuOSw2Ny44QTI4LjQsMjguNCwwLDAsMSwyOS45LDI5LjlaTTcwLjEsNzAuMWEyOC40LDI4LjQsMCwwLDEtMzcuOSwyTDcyLjEsMzIuMkEyOC40LDI4LjQsMCwwLDEsNzAuMSw3MC4xWiI+PC9wYXRoPjwvZz48L3N2Zz4="
    },
    style: {
      header: {
        iconColor: "#b52222",
        titleColor: "#b52222",
        backgroundColor: "#dadada",
        iconSize: 40,
        closeButtonColor: "#b52222"
      },
      station: {
        closeTitleColor: "#e05d5d",
        closeMessageColor: "#e05d5d"
      },
      selectGas: {
        backgroundColor: "#f7f7f7",
        color: "#000"
      },
      body: {
        backgroundColor: "#ececdd",
        color: "#808080"
      },
      greenColor: "#528c3f",
      redColor: "#e05d5d"
    },
    wording: {
      moneySymbol: "$",
      moneyAvailable: "Argent disponible",
      selectGas: "Choissisez votre carburant !",
      totalExcludingTax: "Total HT",
      total: "Total",
      totalAll: "Total",
      taxName: "Taxe",
      informations: "Informations :",
      informationsList: [
        "- Choisir un mauvais carburant peut endommager votre véhicule.(Dégats, diminution de la vitesse maximum et perte d'accélération)",
        "- A l'inverse, choisir un carburant premium vous permez de booster la vitesse de pointe et d'accélération de votre véhicule."
      ],
      add: "REMPLIR",
      plug: "BRANCHER",
      unplug: "DEBRANCHER",
      vehicleIncompatible: "Véhicule incompatible"
    }
  }
};
