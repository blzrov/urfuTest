import React from "react";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectYear() {
  const [period, setPeriod] = React.useState("2022");

  const handleChange = (event) => {
    setPeriod(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ width: 210 }}>
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
    </div>
  );
}
