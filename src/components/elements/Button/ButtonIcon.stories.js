import React from "react";
import { storiesOf } from "@storybook/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag } from "@fortawesome/free-solid-svg-icons";
import ButtonIcon from "./ButtonIcon";

storiesOf("Components|Elements/ButtonIcon", module).add("default", () => (
  <ButtonIcon>
    <FontAwesomeIcon icon={faFlag} />
  </ButtonIcon>
));
