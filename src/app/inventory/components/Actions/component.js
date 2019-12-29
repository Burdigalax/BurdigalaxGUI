import React from "react";

import { BTN_VARIANT } from "../../../common/components/BurdiButton/constants";
import {
  StyledInput,
  UseButton,
  Wrapper,
  BurdiButtonAction,
  StyledInputBase,
  StyledSelect,
  MaxButton,
  Bloc,
  WrapperSwitch,
  EquippedSwitch
} from "./styles";
import { MenuItem } from "../../../onShop/components/Articles/Article/styles";

const renderNearbyInventory = ({ id, name }) => (
  <MenuItem key={`nearbyInventory-${id}`} value={id}>
    {name}
  </MenuItem>
);

export default ({
  isEquipable,
  onChangeQuantity,
  onUse,
  onEquip,
  onSetMaxQuantity,
  nearbyInventories = [],
  selectedNearbyInventoryId,
  onChangeNearbyInventory,
  quantity = 1,
  onBlurQuantity,
  onDelete,
  onTransfer,
  isEquipped,
  isDisabledSelect
}) => (
  <Wrapper>
    <Bloc>
      <UseButton
        label={"UTILISER"}
        variant={BTN_VARIANT.secondary}
        color={"#06d2f2"}
        onClick={onUse}
      />
      {isEquipable && (
        <WrapperSwitch>
          <EquippedSwitch
            size={"small"}
            checked={isEquipped}
            onChange={onEquip}
          />
        </WrapperSwitch>
      )}
    </Bloc>
    <Bloc>
      <StyledInput
        type={"number"}
        onChange={onChangeQuantity}
        value={quantity}
        onBlur={onBlurQuantity}
      />
      <MaxButton color={"#3b4e5e"} label={"MAX"} onClick={onSetMaxQuantity} />
      {!isDisabledSelect && (
        <StyledSelect
          displayEmpty
          value={selectedNearbyInventoryId}
          onChange={onChangeNearbyInventory}
          input={<StyledInputBase />}
          disabled={isDisabledSelect}
        >
          <MenuItem key={`nearbyInventory-none`} value={"none"}>
            Aucun inventaire
          </MenuItem>
          {nearbyInventories.map(renderNearbyInventory)}
        </StyledSelect>
      )}
      <BurdiButtonAction
        iconLeftUrl={
          "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDEwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHBhdGggZD0iTTgyLDk2LjZIMThWODIuM2g2NFY5Ni42eiBNNDIuOSwzMC43bDAsMzAuNWwwLDYuNmwxNC4zLDBsMC02LjZsMC0zMC40bDMuNSwzLjVsOS4xLDkuMWwxMC4xLTEwLjFsLTkuMS05LjFMNjAuMSwxMy41bDAsMCAgTDUyLjYsNkw1MCwzLjRsMCwwbDAsMGwtOS4xLDkuMUwyMC4xLDMzLjNsMTAuMSwxMC4xTDQyLjksMzAuN3oiPjwvcGF0aD48L3N2Zz4="
        }
        color={"#ffd948"}
        iconLeftSize={25}
        disabled={selectedNearbyInventoryId === "none"}
        variant={BTN_VARIANT.none}
        onClick={onTransfer}
      />
      <BurdiButtonAction
        color={"#f16666"}
        iconLeftSize={25}
        iconLeftUrl={
          "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjMDAwMDAwIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiB2aWV3Qm94PSIwIDAgOC40NjY2NjY3IDguNDY2NjY2NyIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwtMjg4LjUzMzMzKSI+PHBhdGggc3R5bGU9ImNvbG9yOiMwMDAwMDA7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6bWVkaXVtO2xpbmUtaGVpZ2h0Om5vcm1hbDtmb250LWZhbWlseTpzYW5zLXNlcmlmO2ZvbnQtdmFyaWFudC1saWdhdHVyZXM6bm9ybWFsO2ZvbnQtdmFyaWFudC1wb3NpdGlvbjpub3JtYWw7Zm9udC12YXJpYW50LWNhcHM6bm9ybWFsO2ZvbnQtdmFyaWFudC1udW1lcmljOm5vcm1hbDtmb250LXZhcmlhbnQtYWx0ZXJuYXRlczpub3JtYWw7Zm9udC1mZWF0dXJlLXNldHRpbmdzOm5vcm1hbDt0ZXh0LWluZGVudDowO3RleHQtYWxpZ246c3RhcnQ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZTt0ZXh0LWRlY29yYXRpb24tc3R5bGU6c29saWQ7dGV4dC1kZWNvcmF0aW9uLWNvbG9yOiMwMDAwMDA7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO3dvcmQtc3BhY2luZzpub3JtYWw7dGV4dC10cmFuc2Zvcm06bm9uZTt3cml0aW5nLW1vZGU6bHItdGI7ZGlyZWN0aW9uOmx0cjt0ZXh0LW9yaWVudGF0aW9uOm1peGVkO2RvbWluYW50LWJhc2VsaW5lOmF1dG87YmFzZWxpbmUtc2hpZnQ6YmFzZWxpbmU7dGV4dC1hbmNob3I6c3RhcnQ7d2hpdGUtc3BhY2U6bm9ybWFsO3NoYXBlLXBhZGRpbmc6MDtjbGlwLXJ1bGU6bm9uemVybztkaXNwbGF5OmlubGluZTtvdmVyZmxvdzp2aXNpYmxlO3Zpc2liaWxpdHk6dmlzaWJsZTtvcGFjaXR5OjE7aXNvbGF0aW9uOmF1dG87bWl4LWJsZW5kLW1vZGU6bm9ybWFsO2NvbG9yLWludGVycG9sYXRpb246c1JHQjtjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM6bGluZWFyUkdCO3NvbGlkLWNvbG9yOiMwMDAwMDA7c29saWQtb3BhY2l0eToxO3ZlY3Rvci1lZmZlY3Q6bm9uZTtmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuNTI5MTY2NztzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjE7Y29sb3ItcmVuZGVyaW5nOmF1dG87aW1hZ2UtcmVuZGVyaW5nOmF1dG87c2hhcGUtcmVuZGVyaW5nOmF1dG87dGV4dC1yZW5kZXJpbmc6YXV0bztlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlIiBkPSJtIDIuOTEwNDE2MiwyODkuMDYyNSB2IDEuMDU4MzMgaCAtMS41ODc1IFYgMjkwLjY1IGMgMS45NDAyNzY5LDAgMy44ODA1NTY0LDAgNS44MjA4MzMzLDAgdiAtMC41MjkxNyBoIC0xLjU4NzUgdiAtMS4wNTgzMyB6IG0gMC41MjkxNjY2LDAuNTI5MTcgaCAxLjU4NzUwMDEgdiAwLjUyOTE2IEggMy40Mzk1ODI4IFogbSAtMS41ODc1LDEuNTg3NSB2IDUuMjkxNjYgaCA0Ljc2MjUwMDEgdiAtNS4yOTE2NiB6IG0gMS4zMjI5MTY3LDAuNzkzNzUgaCAwLjUyOTE2NjcgdiAzLjE3NSBIIDMuMTc0OTk5NSBaIG0gMS41ODc1LDAgaCAwLjUyOTE2NjcgdiAzLjE3NSBIIDQuNzYyNDk5NSBaIj48L3BhdGg+PC9nPjwvc3ZnPg=="
        }
        variant={BTN_VARIANT.none}
        onClick={onDelete}
      />
    </Bloc>
  </Wrapper>
);
