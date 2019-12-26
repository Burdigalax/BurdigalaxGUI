export default {
  config: {
    hasTaxEnabled: true,
    enabledStockLimitation: true,
    iconsUrl: {
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
      selectGas: {
        backgroundColor: ""
      },
      body: {
        backgroundColor: ""
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
      unplug: "DEBRANCHER"
    }
  },
  station: {
    name: "7 GAS",
    iconUrl:
      "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDEwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01MCw1LjUzMWMtMTkuNjMxLDAtMzUuNTQzLDE1LjkxMy0zNS41NDQsMzUuNTQzICAgYzAsOS44MTUsNC4zNjYsMTguMzM2LDEwLjQxMSwyNS4xMzVMNTAsOTQuNDY5bDI1LjEzNC0yOC4yNmM2LjA0My02Ljc5OSwxMC40MS0xNS4zMTksMTAuNDEtMjUuMTM1ICAgQzg1LjU0NCwyMS40NDQsNjkuNjMsNS41MzEsNTAsNS41MzF6IE02OS44NzQsNjAuOTQ4QzY0Ljc4OCw2Ni4wMzUsNTcuNzYxLDY5LjE4MSw1MCw2OS4xODFjLTcuNzYzLDAtMTQuNzg4LTMuMTQ2LTE5Ljg3NS04LjIzMiAgIGMtNS4wODYtNS4wODctOC4yMzEtMTIuMTEzLTguMjMxLTE5Ljg3NGMwLTE1LjUyMywxMi41ODQtMjguMTA1LDI4LjEwNi0yOC4xMDVjMTUuNTIxLDAsMjguMTA1LDEyLjU4MiwyOC4xMDUsMjguMTA1ICAgQzc4LjEwNSw0OC44MzUsNzQuOTYsNTUuODYxLDY5Ljg3NCw2MC45NDh6Ij48L3BhdGg+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02Ny4xMzcsMzUuODk2bC0wLjEyOC0wLjU5NWwtMS4yMzgtMy43NDVjMC4xOTktMC4xNTgsMC4zMDUtMC40MjQsMC4xOTItMC42NTYgICBsLTEuMDY2LTIuMjJjLTAuMTkyLTAuNDAyLTAuNjQ3LTAuNTk4LTEuMDcyLTAuNDZsLTAuNTcsMC4xODZsLTAuMDAyLDAuMDAzTDYxLjc1MSwyNy41bC0wLjc4NiwwLjE5M2wtMS42MjEtMC44MjR2LTMuMTE2ICAgYzAtMC43MDItMC41NzUtMS4yNzYtMS4yNzctMS4yNzZIMzkuMjk0Yy0wLjcwMiwwLTEuMjc2LDAuNTc0LTEuMjc2LDEuMjc2djM1LjU2NWMwLDAuNzAyLDAuNTc0LDEuMjc2LDEuMjc2LDEuMjc2aDE4Ljc3MiAgIGMwLjcwMiwwLDEuMjc3LTAuNTc0LDEuMjc3LTEuMjc2VjQ0Ljk4NGMwLjU2MSwwLjAyMiwxLjA0NSwwLjE1OSwxLjI1MywwLjU2YzAuMjI2LDAuNDM3LDAuMjAxLDEuNjA0LDAuMTczLDIuOTAxICAgYy0wLjAxMSwwLjUwNy0wLjAyMiwxLjAzMS0wLjAyMiwxLjMzNGgwLjAwM2MwLDIuODkzLDAuMzk2LDUuNzUzLDMuNDM5LDUuNzUzYzAuMjk2LDAsMC41NzYtMC4wMzcsMC44NDQtMC4xMSAgIGMxLjM1My0wLjM2NywyLjIwNS0xLjU2NywyLjY5OS0zLjI0MmMwLjQzNy0xLjQ3OSwwLjYwMy0zLjM1NSwwLjYwMy01LjMyYzAtNC4yMTYtMC43NTYtOC45MzktMS4yMDEtMTAuOTYzTDY3LjEzNywzNS44OTZ6ICAgIE02Mi42OTMsMzIuNzZjMC4wOTItMC4yMjMsMC4yNS0wLjQxNCwwLjQ4Ny0wLjQ1M2wxLjA1Ni0wLjE3MmwwLjkwOCwyLjc5NmwtMC45NjEsMC4wODVjLTAuMzMsMC4wMjktMC42MzItMC4xMS0wLjc5My0wLjM5OSAgIGwtMC42NjUtMS4xOTJDNjIuNjA3LDMzLjIxNSw2Mi42MDMsMzIuOTgyLDYyLjY5MywzMi43NnogTTU1LjgxLDM2LjMwNUg0MS41NWMtMC43MjMsMC0xLjMxNC0wLjU5Mi0xLjMxNC0xLjMxNXYtOSAgIGMwLTAuNzIzLDAuNTkyLTEuMzE0LDEuMzE0LTEuMzE0aDE0LjI2YzAuNzI0LDAsMS4zMTUsMC41OTIsMS4zMTUsMS4zMTR2OUM1Ny4xMjUsMzUuNzEzLDU2LjUzMywzNi4zMDUsNTUuODEsMzYuMzA1eiAgICBNNjYuMDY5LDUxLjY5Yy0wLjMyNCwxLjEwMS0wLjgwNCwxLjg2OC0xLjQ5MSwyLjA1NmMtMC4xMTgsMC4wMzItMC4yNDgsMC4wNDktMC4zODksMC4wNDljLTEuNTEyLDAtMS43MDgtMS45OTctMS43MDgtNC4wMTYgICBoMC4wMDNjMC0wLjU4NCwwLjAwOC0wLjk0NSwwLjAxNi0xLjNjMC4wMzQtMS41MzEsMC4wNjMtMi45MDctMC4zNjMtMy43MjljLTAuNjEzLTEuMTgzLTEuNjkyLTEuNDkzLTIuNzkzLTEuNTFWMjcuNzc4ICAgbDEuMTkyLDAuNjA4bC0wLjAwNSwwLjAwOGwwLjE5NiwwLjc5NmwxLjI1NCwwLjc1OWwtMC41NjcsMC42OWMtMC4wMDYsMC4wMDYtMC4wMDEsMC4wMTQtMC4wMDYsMC4wMmwtMC4wMTIsMC4wMDVsLTAuNDk2LDAuODggICBjLTAuMSwwLjE3Ni0wLjEyMiwwLjM2OC0wLjAzNSwwLjU0OWMwLjYxMSwxLjI3OSwxLjI1OSwyLjUwNywxLjkyLDMuNzY4YzAuMTQ1LDAuMjc1LDAuNDM0LDAuNDIyLDAuNzQsMC4zNzRsMS44MzktMC4yODYgICBjMC40MDMsMS42NTksMS4yMzMsNi41NSwxLjIzMywxMC45MTFDNjYuNTk4LDQ4LjY4Myw2Ni40NTIsNTAuMzk1LDY2LjA2OSw1MS42OXoiPjwvcGF0aD48L2c+PC9zdmc+",
    isOpen: true
  }
};
