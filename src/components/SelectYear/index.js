import React from "react";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export default function SelectYear() {
  const [period, setPeriod] = React.useState("2022");

  const handleChange = (event) => {
    setPeriod(event.target.value);
  };

  return (
    <FormControl sx={{ width: 210 }} size="small">
      <Select
        value={period}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem value="2022">2022</MenuItem>
        <MenuItem value="2021">2021</MenuItem>
      </Select>
    </FormControl>
  );
}
