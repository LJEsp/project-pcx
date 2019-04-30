import React from "react";
import { storiesOf } from "@storybook/react";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import ButtonCombinationHorizontal from "./ButtonCombinationHorizontal";

storiesOf("Components|Elements/ButtonCombinationHorizontal", module).add(
  "default",
  () => (
    <ButtonCombinationHorizontal icon={faUser}>
      Button Combination Horizontal
    </ButtonCombinationHorizontal>
  )
);
