import { styled } from "styled-components";
import {colors} from "../../styles/colors";
import protanopia_colors from "../../styles/colors_protanopia"

/* import { useContext } from "react";
import { ColorBlindContext } from "../../context/ColorBlindContext";


function ColorImport() {
  const {protanopia} = useContext(ColorBlindContext);

  const colors = protanopia ? protanopia_colors : default_colors;

  return colors;
}
 */

export const LayoutWrapperElement = styled.main`
  width: 80%;
  margin: 0 auto;
  background-color: ${colors.background.main};
`
;
