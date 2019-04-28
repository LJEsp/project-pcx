import React from "react";
import { storiesOf } from "@storybook/react";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import ButtonCombination from "./ButtonCombination";

storiesOf("Components|Elements/ButtonCombination", module).add(
  "default",
  () => <ButtonCombination icon={faUser} label="Account" />
);
