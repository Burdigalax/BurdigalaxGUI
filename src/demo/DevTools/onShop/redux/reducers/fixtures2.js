import fixtures from "./fixtures";
import {
  mergeDeepLeft,
  find,
  propEq,
  map,
  mergeDeepWithKey,
  mergeDeepRight,
  is
} from "ramda";

const newFixtures = {
  config: {
    hasTaxEnabled: false,
    style: {
      header: {
        iconColor: "",
        backgroundColor: "",
        iconSize: 160
      },
      titleColor: "#b1c57f",
      greenColor: "#5fbd5f",
      redColor: "#d02e22",
      basket: {
        textColor: "#86936C",
        backgroundColor: "#F3F7EB"
      }
    }
  },
  player: {
    money: {
      cash: 500
    },
    freeStorageSpace: 500
  },
  shop: {
    hasPaymentTerminalBroken: false,
    name: null,
    iconUrl: "http://bastienwilmotte.be/aieki/on7/on77shop-logo@2x.png",
    articles: [
      {
        id: 1,
        iconUrl:
          "data:image/svg+xml,%0A%3Csvg width='12' height='24' viewBox='0 0 12 24' xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3Eico-bottle@1x%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg fill-rule='nonzero' fill='none'%3E%3Cpath d='M10.7 8.025l-2.5-3.625c.375-.05.65-.375.65-.75v-1.525c0-1.1-.9-2.025-2.025-2.025h-2.175c-1.1 0-2.025.9-2.025 2.025v1.525c0 .375.275.7.65.75l-2.5 3.625c-.45.675-.7 1.45-.7 2.25v11.65c0 1.075.875 1.925 1.925 1.925h7.475c1.075 0 1.925-.875 1.925-1.925v-11.625c0-.825-.225-1.6-.7-2.275zm-6.55-5.875c0-.275.225-.5.5-.5h2.175c.275 0 .5.225.5.5v.75h-3.175v-.75zm5.75 19.8c0 .225-.175.425-.425.425h-7.45c-.225 0-.425-.175-.425-.425v-11.65c0-.5.15-.975.425-1.4l3.1-4.475h1.25l3.1 4.475c.275.4.425.9.425 1.4v11.65z' id='Shape' fill='%234099C0'/%3E%3Cpath d='M5.75 10.2c-.1 0-.2.05-.275.125-.7.925-2.525 3.525-2.525 5.15 0 2 1.45 2.775 2.8 2.775 1.35 0 2.8-.775 2.8-2.775 0-1.625-1.825-4.225-2.525-5.15-.075-.075-.175-.125-.275-.125zm0 6.525c-1.275 0-1.275-.95-1.275-1.25 0-.475.4-1.5 1.275-2.875.875 1.375 1.275 2.4 1.275 2.875 0 .3 0 1.25-1.275 1.25z' fill='%238CC1F1'/%3E%3C/g%3E%3C/svg%3E"
      },
      {
        id: 7,
        iconUrl:
          "data:image/svg+xml,%0A%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3Eico-pansement@1x%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg fill-rule='nonzero' fill='none'%3E%3Cg fill='%23EBD881' fill-opacity='.5'%3E%3Cpath d='M11.079 3.364l-1.259 1.259-1.615-1.616c-.687-.686-1.6-1.064-2.573-1.064-.973 0-1.886.378-2.573 1.064-.686.687-1.064 1.6-1.065 2.574 0 .974.378 1.887 1.064 2.573l1.616 1.616-1.259 1.259-1.616-1.616c-1.022-1.022-1.585-2.383-1.585-3.832 0-1.449.564-2.81 1.586-3.832 1.022-1.022 2.383-1.586 3.832-1.586 1.449 0 2.81.563 3.832 1.586l1.615 1.615zM22.338 22.287c-1.022 1.022-2.384 1.586-3.833 1.586-1.449 0-2.81-.563-3.832-1.585l-1.79-1.79 1.259-1.259 1.79 1.791c.686.686 1.6 1.064 2.573 1.064.974 0 1.888-.378 2.575-1.065.686-.687 1.064-1.6 1.064-2.573 0-.973-.378-1.886-1.064-2.573l-1.79-1.79 1.259-1.259 1.79 1.79c2.113 2.112 2.113 5.551 0 7.664z'/%3E%3C/g%3E%3Cpath d='M23.787 5.545c0-1.449-.562-2.811-1.585-3.833-1.022-1.022-2.383-1.585-3.833-1.585-1.45 0-2.811.563-3.833 1.585l-12.874 12.874c-1.022 1.022-1.585 2.383-1.585 3.833 0 1.45.563 2.811 1.585 3.833 1.022 1.022 2.383 1.585 3.832 1.585 1.45 0 2.811-.563 3.833-1.586l12.874-12.874c1.022-1.022 1.586-2.383 1.586-3.832zm-18.293 16.512c-.973 0-1.887-.378-2.573-1.064-1.419-1.419-1.419-3.729 0-5.148l2.974-2.974 5.147 5.147-2.974 2.974c-.686.687-1.601 1.065-2.574 1.065zm3.439-11.12c.279 0 .542.109.739.306.197.197.306.46.306.739 0 .279-.109.542-.306.739-.197.197-.46.306-.739.306-.279 0-.542-.109-.739-.306-.197-.197-.306-.46-.306-.739 0-.279.109-.542.306-.739.198-.197.46-.306.739-.306zm2.259-2.692c.197-.197.46-.306.739-.306.279 0 .542.109.739.306.197.197.306.46.306.739 0 .279-.109.542-.306.739-.197.197-.46.306-.739.306-.279 0-.542-.109-.739-.306-.197-.197-.306-.46-.306-.739 0-.279.109-.542.306-.739zm4.144 4.7c-.13.055-.267.082-.407.082-.279 0-.541-.108-.739-.305-.198-.197-.307-.46-.307-.74 0-.279.109-.541.306-.739.197-.198.46-.306.739-.306.14 0 .277.027.407.082.389.163.639.541.639.963 0 .279-.108.541-.305.738-.096.096-.209.172-.334.225zm-2.666 2.775c-.197.197-.46.306-.739.306-.279 0-.542-.109-.739-.306-.197-.197-.306-.46-.306-.739 0-.279.109-.542.306-.739.197-.197.46-.306.739-.306.279 0 .542.109.739.306.197.197.306.46.306.739 0 .279-.109.542-.306.739zm.151-9.775l2.974-2.974c.686-.686 1.6-1.064 2.574-1.064.974 0 1.887.378 2.574 1.064 1.419 1.419 1.418 3.727-.001 5.147l-2.974 2.974-5.147-5.147z' fill='%23D6C576'/%3E%3C/g%3E%3C/svg%3E"
      },
      {
        id: 6,
        iconUrl:
          "data:image/svg+xml,%0A%3Csvg width='20' height='24' viewBox='0 0 20 24' xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3Eico-fuel@1x%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg fill='none'%3E%3Cpath d='M17.6 8.989c.001-.303-.171-.581-.442-.716l-2.315-1.158.715-1.431.885.442.884-1.768-1.769-.886-1.6 3.2-2.758-1.378v-2.094c0-.882-.718-1.6-1.6-1.6h-6.4c-.882 0-1.6.718-1.6 1.6v17.6c0 .882.718 1.6 1.6 1.6h12.8c.882 0 1.6-.718 1.6-1.6v-11.811zm1.6 0v11.811c0 1.765-1.435 3.2-3.2 3.2h-12.8c-1.765 0-3.2-1.435-3.2-3.2v-17.6c0-1.765 1.435-3.2 3.2-3.2h6.4c1.765 0 3.2 1.435 3.2 3.2v1.106l.442.221.884-1.768c.191-.383.52-.668.926-.803.402-.135.842-.104 1.222.086l1.769.885c.382.192.667.52.802.925.135.406.104.84-.087 1.222l-.884 1.769c.815.404 1.33 1.237 1.326 2.147zm-16-4.189h6.4v-1.6h-6.4v1.6z' fill='%235C5C5C'/%3E%3Cpath fill='%23C6C6C6' d='M14.966 10.166l-4.234 4.234 4.234 4.234-1.131 1.131-4.234-4.234-4.234 4.234-1.131-1.131 4.234-4.234-4.234-4.234 1.131-1.131 4.234 4.234 4.234-4.234z'/%3E%3C/g%3E%3C/svg%3E"
      },
      {
        id: 4,
        iconUrl:
          "data:image/svg+xml,%0A%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3Eico-pill@1x%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cpath d='M22.145 1.855c-1.108-1.108-2.611-1.731-4.177-1.731-1.567 0-3.07.622-4.178 1.731l-5.37 5.37-6.563 6.565c-2.256 2.315-2.232 6.013.053 8.299 2.285 2.286 5.984 2.311 8.299.056l6.565-6.563 5.37-5.372c2.305-2.308 2.305-6.047 0-8.355zm-13.127 19.095c-1.654 1.612-4.297 1.596-5.93-.038-1.633-1.633-1.65-4.276-.038-5.93l5.37-5.367 5.965 5.967-5.367 5.367zm7.822-17.39l-4.797 4.798c-.331.331-.867.332-1.199.001-.331-.331-.332-.867-.001-1.199l4.798-4.798c.331-.331.867-.332 1.199-.001.331.331.332.867.001 1.199z' fill='%23F16666' fill-rule='nonzero'/%3E%3C/svg%3E"
      },
      {
        id: 5,
        iconUrl:
          "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjYWY3MjMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDEwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PHBhdGggZD0iTTM3LjY4Miw2OS43OTNsNC41MDMsMS4xMTJjMCwwLDMuODUxLTAuMzE1LDUuOTEtMC41MTVjMi4wNTgtMC4yLDEuMzg2LTIuNjg3LDEuMzg2LTIuNjg3bC01LjczNi0xLjY2NGwtMy42MTItMC40OTkgICBjMCwwLTQuMDU4LDAuODkyLTQuNjM4LDEuNDE3QzM0LjkxNSw2Ny40ODEsMzcuNjgyLDY5Ljc5MywzNy42ODIsNjkuNzkzeiI+PC9wYXRoPjxwYXRoIGQ9Ik0yNi43MDUsNjYuNDg3YzAuOTQ0LTAuMzczLDEuOTA3LTAuOTgsMi42ODctMS41NGMwLjY1MS0wLjQ2NywwLjM4My0xLjQ5LTAuNDEyLTEuNTlsLTYuMjk1LTAuNzkyICAgYzAsMC00LjU1OCwxLjU5LTQuMDI4LDIuNTlDMTkuMTg3LDY2LjE1NSwyNi4xMDQsNjYuNzI1LDI2LjcwNSw2Ni40ODd6Ij48L3BhdGg+PHBhdGggZD0iTTk2LjMxMSwzOC40NDhjLTAuNzk2LTEuMDEyLTIuNjQ1LTMuOTM4LTQuMDE2LTYuMTQ5YzEuMTQxLTEuNTQzLTYuMjk2LTcuNzE1LTE0LjU0LTExLjMwMSAgIGMtOS4xODktMy45OTctMzAuODc5LTUuODI0LTM3LjYwMy00LjEzNVMyMi4wODgsMjguNjEyLDE5LjQwOSwzMS45NTljLTIuNzI1LDMuNDA1LTEyLjg4LDE2LjA1Mi0xNC40MjMsMTkuMDczICAgcy0yLjI1Myw3Ljg1OS0xLjMxNCw5Ljg4MWMwLjU5OCwxLjI4OSwxLjc3Nyw0LjE1MywyLjUxNiw1Ljk2OWMwLDAtMS4wNTEsMC4xNjktMS4yNDQsMC42NjlTNC40MDEsNzAuNjI4LDQuNzQsNzEuMyAgIGMwLjMzOSwwLjY3MywzMS4wOTMsOC45OTksMzUuNjI1LDkuMTI3YzQuMzkzLDAuMTI0LDIyLjczMi0yLjg1NiwyNC4yODEtMy45ODhzMTQuNDY0LTEwLjQ3MSwxNy4zODEtMTMuODk3ICAgYzEuMDAzLTEuMTc4LDMuMTE4LTMuMDkyLDUuNDY2LTUuMTQ3YzQuMjctMy43MzgsOS4zMS03Ljk0MSw5LjgyNS05LjAzQzk4LjExNSw0Ni42NzcsOTcuNjkyLDQwLjIwNSw5Ni4zMTEsMzguNDQ4eiAgICBNOTQuODk4LDQ3LjA4N2MtMC41MjYsMi4wMzItOS44MzMsNy40MjEtMTMuODU0LDExLjg5Yy0yLjc5NiwzLjEwNy0xMS4zNDcsOS41NzctMTYuMDM3LDEyLjY2OSAgIGMwLjYyMy0xLjgyOSw0LjY3MS02LjAyLDEuNjcxLTkuNzM5QzYxLjM0NSw2MC4wNzMsNTQuMjIzLDUxLjc2Nyw0Ny43NSw1MGMtOS41NDQtNC4xNTEtMzAuNTYzLTEuMDcxLTMwLjU2My0xLjA3MWwtMC45MDYsMi41NTQgICBjMCwwLDIwLjI5OC0yLjA4LDMwLjEyNiwxLjMxNmM3LjA5MiwyLjQ1MSwxMy4wMTQsOC4wODMsMTUuODAxLDkuNzY2YzAuMDAzLDAuMDAzLDEuNzQ2LDAuNzM0LDIuNzkyLDIuNjAxICAgYzAuOTc4LDEuNzQ4LTIuODg1LDYuMTA0LTUuMTM1LDguMTM2Yy0yLjI4MywyLjA2Mi0xNS41NDYsMy40NDUtMjAuMDk2LDMuMTM3Yy00LjUzMS0wLjMwNy0yOS42NTctNi41MTItMjkuNjU3LTcuOTdsMC4xMjgtMC41NDIgICBjNC40MTgsMS4xNiwyNS4wNTUsNi42MDEsMzEuNjg1LDYuNjY4YzEwLjQwNywwLjEwNSwxNi45NC0zLjQyLDE2Ljk0LTMuNDJzMC43MTYtMi4zMjQtMC4zNzUtMy4yNDggICBjLTMuNjg4LTMuMTI1LTEwLjk5OC00LjYyNi0xNS41NjItNi44NTJjLTIuNTI3LTEuMjMyLTEzLjE2Ny0yLjYzMy0xNC40MzgtMi45OTRjLTMuNjI1LTEuMDI5LTcuNTYyLTAuMDYyLTEwLjk5LDAuNzk0ICAgcy00LjMxNywzLjY5LTQuMzE3LDMuNjlsMS42OTIsMS41MjNjMCwwLDIuMjAzLTIuMjksMy43MzktMi44MzhjMS41MzYtMC41NDgsNS4yNTEtMS42ODIsOS4yMzktMC4zNDIgICBjMy4xMDMsMS4wNDIsOS45ODksMS4wNDksMTIuMTE0LDIuMDc3YzYuNzUsMy4yNjMsMTMuODk3LDQuMzgsMTUuMTQ3LDUuODE4YzEuMTA2LDEuMjcxLTQuODQ0LDIuNTI5LTEwLjQxMSwyLjg0MyAgIGMtOC4zNSwwLjQ3LTMwLjQwMS01LjQ2OC0zMi4wNy02LjMyM2MtMC43OTYtMC40MDgtMi4yNC00Ljc2My0xLjEyLTYuMTk1YzAuNDc1LTAuNjA3LDMuNzY5LTMuNTg0LDEwLjE1OC0yLjg2ICAgYzUuNjk0LDAuNjQ1LDEyLjYwNi0wLjQ2MSwxOC40OTUsMC44NWMzLjc3NiwwLjg0MSw5Ljc2Niw0LjI3LDEzLjU3OSw2LjYyM2MyLjEzNSwxLjMxNyw1Ljg1OCwzLjYzNSw1Ljg1OCwzLjYzNWwyLjA2My0xLjY3ICAgYzAsMC0zLjY2MS0yLjMxOS01Ljc0NS0zLjY3NmMtNC4wOTktMi42NjgtMTAuODgyLTYuNzkxLTE1LjA2NS03Ljc3NmMtNi43MTctMS41ODMtMTQuNTU1LTAuMDgxLTIwLjMxLTEuMDA3ICAgYy02LjkxMS0xLjExMi0xMS41OTcsMy42NzUtMTIuMTYzLDQuMjQ3Yy0xLjEzNiwxLjE1LTAuMTQyLDQuOTQyLDAuMzgyLDYuNjQ1Yy0wLjAxLTAuMDAzLTAuMDIyLTAuMDA3LTAuMDMxLTAuMDExbC0wLjYyMy0wLjI2NCAgIGMtMC44MDktMi4zNzUtMC45NzItMy4zMjctMS4yNjMtNS4zMzJjLTAuMzc1LTIuNTgxLDAuOTEtNS45MDksMS44OTEtNy4yM2MwLDAsOS4zNy0xMi43MjksMTMuMjUtMTcuMzEyICAgYzMuNTM3LTQuMTc3LDEwLjM2Ny0xMS4wNDYsMTguMzc1LTEzLjkzOHMyOC4xODgsMS4wNjIsMzQuNzUsMy42MjVjNC43NTcsMS44NTgsMTMuNTc4LDUuODksMTMuODg1LDguNDg5ICAgYzAuMjQsMi4wMzYsNC4xMDYsNy4wMjYsNC45OSw4LjI4NUM5NS4wNDYsNDEuOTU2LDk1LjE1NCw0Ni4wOTgsOTQuODk4LDQ3LjA4N3oiPjwvcGF0aD48L2c+PC9zdmc+"
      },
      {
        id: 2,
        iconUrl:
          "data:image/svg+xml,%0A%3Csvg width='31' height='36' viewBox='0 0 31 36' xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3Eico-pomme-big%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg fill-rule='nonzero' fill='none'%3E%3Cpath d='M19.337 7.763c1.047-.338 2.618-1.05 3.553-2.438.935-1.388.972-3.113.898-4.238-.037-.675-.636-1.05-1.272-.862-1.047.338-2.618 1.05-3.553 2.438-.935 1.387-.972 3.113-.898 4.238.075.675.636 1.05 1.272.862z' fill='%23BEED8B'/%3E%3Cpath d='M28.538 12.713c-1.758-2.25-4.488-3.375-7.668-3.075-1.459.113-2.843.488-4.152 1.013-.561-4.425-2.169-9.412-6.097-9.9-2.768-.375-3.179 2.1-1.534 2.55 3.291.9 4.75 4.2 5.311 7.5-1.421-.6-2.992-1.05-4.601-1.2-3.179-.3-5.91.863-7.668 3.075-2.282 2.887-2.656 7.35-1.085 12.225 2.543 7.8 7.219 11.813 12.492 10.725.598-.112 1.197-.337 1.795-.6.636.3 1.234.488 1.795.6.561.112 1.122.188 1.683.188 4.563 0 8.528-3.938 10.809-10.875 1.571-4.913 1.197-9.338-1.085-12.225zm-1.758 11.287c-.748 2.325-3.628 9.788-9.014 8.7-.524-.113-1.085-.338-1.683-.675-.224-.112-.486-.188-.711-.188-.224 0-.486.075-.711.188-.636.337-1.159.563-1.683.675-5.386 1.087-8.266-6.375-9.014-8.7-1.346-3.9-1.122-7.35.524-9.45 1.122-1.463 2.88-2.1 5.087-1.95 1.833.15 3.553.675 5.012 1.575.486.3 1.085.3 1.534 0 1.459-.863 3.179-1.425 5.012-1.575 2.169-.15 3.927.525 5.049 1.95 1.646 2.1 1.87 5.55.598 9.45z' fill='%2390CB4A'/%3E%3C/g%3E%3C/svg%3E"
      },
      {
        id: 3,
        iconUrl:
          "data:image/svg+xml,%0A%3Csvg width='14' height='24' viewBox='0 0 14 24' xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3Eico-tel@1x%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg fill-rule='nonzero' fill='none'%3E%3Cpath d='M3 .25c-1.649 0-3 1.351-3 3v17.5c0 1.649 1.351 3 3 3h8c1.649 0 3-1.351 3-3v-17.5c0-1.649-1.351-3-3-3h-8zm0 1.5h8c.668 0 1.222.409 1.422 1h-10.844c.2-.591.753-1 1.422-1zm-1.5 2.5h11v14h-11v-14zm0 15.5h11v1c0 .844-.656 1.5-1.5 1.5h-8c-.844 0-1.5-.656-1.5-1.5v-1z' fill='%231E759E'/%3E%3Cpath d='M5.25 20.25c-.414 0-.75.336-.75.75s.336.75.75.75h3.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-3.5z' fill='%2330BEFF'/%3E%3C/g%3E%3C/svg%3E"
      },
      {
        id: 8,
        name: "Donut",
        categoryName: "Consommables",
        price: 0.3,
        quantity: 20,
        description: "",
        iconUrl:
          "data:image/svg+xml,%0A%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3Eico-donut@1x%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cpath d='M11.995.002c6.623 0 11.992 5.368 11.992 11.992 0 6.623-5.368 11.992-11.992 11.992-6.624 0-11.992-5.368-11.992-11.992 0-6.623 5.369-11.992 11.992-11.992zm-8.951 17.367c.755-.676 2.163-1.52 3.718-.369 1.362 1.009 1.447.862 1.547.688 1.181-2.048 2.875-1.109 4.124.225 1.929 2.062 2.732 1.821 4.176-.945 1.982-3.795 3.805-1.875 4.739-.335.695-1.398 1.086-2.973 1.086-4.639 0-5.766-4.674-10.44-10.44-10.44-5.766 0-10.44 4.674-10.44 10.44 0 1.966.544 3.805 1.489 5.375zm17.37.798c-.379-.771-1.409-2.447-2.434-.483-1.98 3.791-3.931 4.218-6.674 1.285-.385-.411-1.161-1.371-1.657-.51-.572.99-1.054 1.826-3.809-.215-.762-.565-1.526.02-1.897.396 1.915 2.317 4.811 3.794 8.052 3.794 3.456 0 6.519-1.68 8.419-4.267zm-1.025-4.179c-.664.77-1.836-.24-1.172-1.01l.758-.877c.663-.77 1.836.24 1.172 1.01l-.758.877zm-8.148-8.328c-.664.77-1.836-.24-1.172-1.01l.758-.877c.663-.77 1.836.24 1.172 1.01l-.758.877zm-5.545 4.997c-.664.77-1.836-.24-1.172-1.01l.758-.877c.663-.77 1.836.24 1.172 1.01l-.758.877zm8.568-4.488c-1.011-.105-.852-1.644.159-1.54l1.153.121c1.011.104.852 1.644-.159 1.539l-1.153-.12zm3.882 2.555c-.641-.789.56-1.765 1.201-.976l.73.9c.641.789-.56 1.765-1.201.976l-.73-.9zm-13.884 5.507c-.641-.789.56-1.765 1.201-.976l.73.9c.641.789-.56 1.765-1.201.976l-.73-.9zm1.609-8.489c-.641-.789.56-1.765 1.201-.976l.73.9c.641.789-.56 1.765-1.201.976l-.73-.9zm6.124 2.075c2.303 0 4.177 1.874 4.177 4.177 0 2.306-1.873 4.177-4.177 4.177-2.307 0-4.177-1.87-4.177-4.177 0-2.304 1.873-4.177 4.177-4.177zm0 1.552c-1.45 0-2.625 1.175-2.625 2.625s1.175 2.625 2.625 2.625c1.451 0 2.625-1.173 2.625-2.625 0-1.453-1.172-2.625-2.625-2.625z' fill='%23D48CD2' fill-rule='nonzero'/%3E%3C/svg%3E",
        storageCost: 0.5,
        tax: 0,
        effects: [
          {
            id: "food",
            value: 3
          },
          {
            id: "hydration",
            value: -5
          }
        ]
      }
    ]
  },
  effects: {
    hydration: {
      iconUrl:
        "data:image/svg+xml,%0A%3Csvg width='28' height='28' viewBox='0 0 28 28' xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3Eeffet-hydrat@1x%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg transform='translate(1 1)' fill='none'%3E%3Cg fill='%236ABEE4' fill-rule='nonzero'%3E%3Cpath d='M12.963 22c-3.828 0-6.943-3.114-6.943-6.943 0-3.579 5.711-10.915 6.363-11.741.14-.177.354-.281.58-.281.226 0 .44.103.58.281.651.825 6.363 8.16 6.363 11.741 0 3.828-3.114 6.943-6.942 6.943zm0-17.013c-1.933 2.564-5.465 7.733-5.465 10.07 0 3.013 2.451 5.464 5.465 5.464 3.013 0 5.465-2.451 5.465-5.464 0-2.337-3.532-7.506-5.465-10.07z'/%3E%3Cpath d='M12.963 19.045c-.389-.026-.691-.349-.691-.739s.302-.713.691-.739c1.385-.001 2.507-1.124 2.509-2.509.026-.389.349-.691.739-.691s.713.302.739.691c-.003 2.201-1.787 3.984-3.987 3.987z'/%3E%3C/g%3E%3Ccircle stroke='%236ABEE4' stroke-width='2' cx='13' cy='13' r='13'/%3E%3C/g%3E%3C/svg%3E"
    },
    petrol: {
      iconUrl:
        "data:image/svg+xml,%0A%3Csvg width='28' height='28' viewBox='0 0 28 28' xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3Eeffet-fuel@1x%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg transform='translate(1 1)' fill='none'%3E%3Cpath d='M13.046 3.356c-.158-.198-.475-.198-.633 0-1.346 1.742-6.373 8.55-6.373 11.756 0 3.681 3.008 6.69 6.69 6.69 3.681 0 6.69-3.008 6.69-6.69 0-3.206-5.027-10.015-6.373-11.756zm1.94 16.11c-.079.04-.158.04-.237.04-.238 0-.475-.158-.554-.356-.119-.317.04-.633.317-.792 2.335-.95 2.138-3.8 2.098-3.84-.04-.317.198-.633.554-.633.317-.04.633.198.633.554.158 1.267-.317 3.998-2.81 5.027z' fill='%23333' fill-rule='nonzero'/%3E%3Ccircle stroke='%23808080' stroke-width='2' cx='13' cy='13' r='13'/%3E%3C/g%3E%3C/svg%3E"
    },
    food: {
      iconUrl:
        "data:image/svg+xml,%0A%3Csvg width='28' height='28' viewBox='0 0 28 28' xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3Eeffet-food@1x%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg transform='translate(1 1)' fill='none'%3E%3Cg fill='%237F95A5' fill-rule='nonzero'%3E%3Cpath d='M17.351 5.092c-.479 0-.912.193-1.286.574-1.838 1.87-1.786 8.214-1.774 8.931l.009.52h2.523v6.296c0 .292.236.528.528.528.292 0 .528-.237.528-.528v-15.792c0-.292-.236-.528-.528-.528zM12.317 9.929h-.71v-4.87h-.698v4.87h-.71v-4.87h-.698v4.87h-.71v-4.87h-.633v4.864c0 1.119.769 2.057 1.806 2.32l-.508 9.01c0 .38.789.688 1.097.688.309 0 1.097-.308 1.097-.688l-.508-9.01c1.037-.263 1.806-1.2 1.806-2.32v-4.864h-.633v4.87h.001z'/%3E%3C/g%3E%3Ccircle stroke='%237F95A5' stroke-width='2' cx='13' cy='13' r='13'/%3E%3C/g%3E%3C/svg%3E"
    },
    health: {
      iconUrl:
        "data:image/svg+xml,%0A%3Csvg width='28' height='28' viewBox='0 0 28 28' xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3Eeffet-sante@1x%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg transform='translate(1 1)' fill='none'%3E%3Cpath d='M17.176 6.235c2.353 0 4.706 1.647 4.706 4.471 0 .861-.299 1.721-.801 2.588h-1.294l-1.037-1.662c-.098-.154-.29-.243-.471-.213-.18.03-.338.176-.382.353l-.463 1.956-.971-4.537c-.079-.227-.2-.366-.434-.375-.235-.013-.464.178-.493.412l-.647 4.993-.551-2c-.053-.206-.265-.361-.478-.353-.213.008-.404.18-.441.39l-.434 2.184-.331-.654c-.078-.154-.247-.257-.419-.257h-2.015c-.163-.281-.461-.471-.809-.471-.52 0-.941.421-.941.941s.421.941.941.941c.346 0 .645-.193.809-.471h1.728l.809 1.618c.087.174.293.283.485.257.193-.026.359-.184.397-.375l.316-1.581.647 2.324c.059.206.272.354.485.338.214-.015.405-.192.434-.404l.588-4.574.838 3.904c.044.208.244.373.456.375.212.002.416-.161.463-.368l.684-2.904.581.934c.084.134.239.221.397.221h.934c-1.758 2.393-4.85 4.857-7.522 7.529-4-4-8.941-7.529-8.941-11.059 0-2.824 2.118-4.471 4.471-4.471 1.647 0 3.294 1.647 4.471 2.588 1.176-.941 2.588-2.588 4.235-2.588z' fill='%23FF655C' fill-rule='nonzero'/%3E%3Ccircle stroke='%23FF655C' stroke-width='2' cx='13' cy='13' r='13'/%3E%3C/g%3E%3C/svg%3E"
    },
    bleeding: {
      iconUrl:
        "data:image/svg+xml,%0A%3Csvg width='28' height='28' viewBox='0 0 28 28' xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3Eeffet-bleed@1x%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg transform='translate(1 1)' fill='none'%3E%3Ccircle stroke='%23FF655C' stroke-width='2' cx='13' cy='13' r='13' fill='none'/%3E%3Cg fill='%23FF655C' fill-rule='nonzero'%3E%3Cpath d='M14.113 22.596c.42-.42.524-1.062.259-1.593l-1.235-2.469-1.235 2.469c-.266.531-.162 1.173.259 1.593.539.539 1.413.539 1.952 0zM16.941 15.963c-.266.531-.162 1.173.259 1.593.539.539 1.413.539 1.952 0 .42-.42.524-1.062.259-1.593l-1.235-2.469-1.235 2.469zM6.864 15.963c-.266.531-.162 1.173.259 1.593.539.539 1.413.539 1.952 0 .42-.42.524-1.062.259-1.593l-1.235-2.469-1.235 2.469zM13.137 15.174l5.608-5.608c1.197-1.197 1.197-3.138 0-4.335s-3.138-1.197-4.335 0l-1.273 1.273-1.273-1.273c-1.197-1.197-3.138-1.197-4.335 0s-1.197 3.138 0 4.335l5.608 5.608z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
    }
  }
};

const concatArticles = (key, left, right) => {
  if (key === "articles") {
    return map(rightArticle => {
      const leftArticle = find(propEq("id", rightArticle.id), left);
      return leftArticle
        ? mergeDeepLeft(rightArticle, leftArticle)
        : rightArticle;
    }, right);
  }

  if (right && is(Object, right)) return mergeDeepRight(left, right);

  return right;
};

export default mergeDeepWithKey(concatArticles, fixtures, newFixtures);
