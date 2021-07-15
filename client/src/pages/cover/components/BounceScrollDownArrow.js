import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Bounce } from "../../../styled-components/globalStyled";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";

library.add(faArrowCircleDown);

function BounceScrollDownArrow() {
  return (
    <Bounce>
      <FontAwesomeIcon icon={faArrowCircleDown} size='2x' />
    </Bounce>
  );
}
export default BounceScrollDownArrow;
