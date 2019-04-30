import React from "react";
import { storiesOf } from "@storybook/react";
import { text, radios } from "@storybook/addon-knobs";
import { faFlag } from "@fortawesome/free-solid-svg-icons";

import Button from "./Button";
import ButtonIcon from "./ButtonIcon";
import ButtonMixedVertical from "./ButtonMixedVertical";
import ButtonMixedHorizontal from "./ButtonMixedHorizontal";

const stories = storiesOf("Components|Elements/Button", module);

stories.add("default", () => (
  <Button
    variant={radios("Variant", {
      Primary: "primary",
      Secondary: "secondary",
      Default: ""
    })}
    size={radios("Size", { Big: "big", Default: "" })}
  >
    {text("Label", "Button")}
  </Button>
));

stories.add("ButtonIcon", () => (
  <ButtonIcon
    variant={radios("Variant", {
      Primary: "primary",
      Secondary: "secondary",
      Default: ""
    })}
    size={radios("Size", { Big: "big", Default: "" })}
    icon={faFlag}
  />
));

stories.add("ButtonMixedVertical", () => (
  <ButtonMixedVertical
    variant={radios("Variant", {
      Primary: "primary",
      Secondary: "secondary",
      Default: ""
    })}
    icon={faFlag}
  >
    {text("Label", "Button")}
  </ButtonMixedVertical>
));

stories.add("ButtonMixedHorizontal", () => (
  <ButtonMixedHorizontal
    variant={radios("Variant", {
      Primary: "primary",
      Secondary: "secondary",
      Default: ""
    })}
    icon={faFlag}
    size={radios("Size", { Big: "big", Default: "" })}
  >
    {text("Label", "Button")}
  </ButtonMixedHorizontal>
));

// storiesOf("Components|Elements/Button", module).add("default", () => (
//   <Button variant={text("Variant", "")}>Button - default</Button>
// ));

// storiesOf("Components|Elements/Button/variant", module).add("primary", () => (
//   <Button variant="primary">Button variant="primary"</Button>
// ));

// storiesOf("Components|Elements/Button/variant", module).add("secondary", () => (
//   <Button variant="secondary">Button variant="secondary"</Button>
// ));

// storiesOf("Components|Elements/Button/configs", module).add("dark", () => (
//   <Button configs={["dark"]}>Button</Button>
// ));

// storiesOf("Components|Elements/Button/size", module).add("big", () => (
//   <Button size="big">Button size="big"</Button>
// ));
