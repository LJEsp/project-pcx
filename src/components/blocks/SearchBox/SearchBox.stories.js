import React from "react";
import { storiesOf } from "@storybook/react";
import SearchBox from "./SearchBox";

storiesOf("Components|Blocks/SearchBox", module)
  .add("default", () => <SearchBox />)
  .add("with category options", () => (
    <SearchBox
      categoryOptions={[
        { value: "Value 1", label: "Category 1" },
        { value: "Value 2", label: "Category 2" },
        { value: "Value 3", label: "Category 3" }
      ]}
    />
  ));
