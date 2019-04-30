import React from "react";
import { storiesOf } from "@storybook/react";
import Typography from "./Typography";

const sampleText = "The quick brown fox jumped over the lazy dog.";

storiesOf("Components|Elements/Typography/variants", module)
  .add("body", () => <Typography variant="body">{sampleText}</Typography>)
  .add("base", () => <Typography variant="base">{sampleText}</Typography>)
  .add("display-1", () => (
    <Typography variant="display-1">{sampleText}</Typography>
  ))
  .add("display-2", () => (
    <Typography variant="display-2">{sampleText}</Typography>
  ))
  .add("display-3", () => (
    <Typography variant="display-3">{sampleText}</Typography>
  ))
  .add("display-4", () => (
    <Typography variant="display-4">{sampleText}</Typography>
  ));

storiesOf("Components|Elements/Typography/configs", module)
  .add("bold", () => (
    <Typography variant="base" configs={["bold"]}>
      {sampleText}
    </Typography>
  ))
  .add("uppercase", () => (
    <Typography variant="base" configs={["uppercase"]}>
      {sampleText}
    </Typography>
  ));
