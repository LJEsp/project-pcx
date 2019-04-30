import React from "react";
import { storiesOf } from "@storybook/react";
import { text, radios, boolean } from "@storybook/addon-knobs";
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
    outline={boolean("Outline", false)}
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
    outline={boolean("Outline", false)}
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
    outline={boolean("Outline", false)}
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
    size={radios("Size", { Big: "big", Default: "" })}
    outline={boolean("Outline", false)}
    icon={faFlag}
    iconEnd={faFlag}
  >
    {text("Label", "Button")}
  </ButtonMixedHorizontal>
));
