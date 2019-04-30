import React from "react";
import { storiesOf } from "@storybook/react";

import { faFlag } from "@fortawesome/free-solid-svg-icons";
import ButtonIcon from "./ButtonIcon";

storiesOf("Components|Elements/ButtonIcon", module).add("default", () => (
  <ButtonIcon icon={faFlag} />
));
