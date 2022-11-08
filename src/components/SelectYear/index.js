import React, { useState } from "react";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export default function SelectYear() {
  const [value, setValue] = useState("2022");

  return (
    <FormControl sx={{ width: 210 }} size="small">
      <Select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem value="2022">2022</MenuItem>
        <MenuItem value="2021">2021</MenuItem>
      </Select>
    </FormControl>
  );
}
