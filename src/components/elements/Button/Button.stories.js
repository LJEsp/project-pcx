import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";

storiesOf("Components|Elements/Button", module).add("default", () => (
  <Button>Button - default</Button>
));

storiesOf("Components|Elements/Button/configs", module).add("dark", () => (
  <Button configs={["dark"]}>Button</Button>
));
