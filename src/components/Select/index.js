import React, { useState } from "react";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export default function MySelect({ items = [] }) {
  const [value, setValue] = useState(items[0]);

  return (
    <FormControl sx={{ width: 210 }} size="small">
      <Select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
      >
        {items.map((elem, index) => (
          <MenuItem key={index} value={elem}>
            {elem}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
