import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import AsyncImage from "../Image"

import { Item } from "../../types";

interface IDatailsItemProps {
  clickedItem: Item | null;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            p: 3,
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function DetailsItem({ clickedItem }: IDatailsItemProps) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const [tax, setTax] = React.useState("");

  const handleChangeTaxGroup = (event: SelectChangeEvent) => {
    setTax(event.target.value);
  };

  return (
    !!clickedItem && (
      <div className="details">
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            aria-label="basic tabs example"            
          >
            <Tab label="BASICS" {...a11yProps(0)} />
            <Tab label="IMAGE" {...a11yProps(1)} />
            <Tab label="LABELS" {...a11yProps(2)} />
            <Tab label="MORE..." {...a11yProps(3)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <TextField
            id="standard-basic"
            label="Item name"
            variant="standard"
            value={clickedItem?.name}
          />
          <TextField
            id="standard-basic"
            label="Display name"
            variant="standard"
            value={clickedItem?.internalName}
          />
          <TextField
            id="standard-basic"
            label="Description"
            variant="standard"
            value={clickedItem?.description}
          />
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">
              Tax group
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={tax}
              onChange={handleChangeTaxGroup}
              label="tax"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <TextField id="standard-basic" label="Tags" variant="standard" />
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="single"
              control={<Radio />}
              label="Single size"
            />
            <FormControlLabel
              value="multiple"
              control={<Radio />}
              label="Multiple Sizes"
            />
          </RadioGroup>
          <TextField
            id="standard-basic"
            label="Price"
            variant="standard"
            value={clickedItem?.price}
          />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <AsyncImage src={clickedItem?.images[0].image} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          Item Three
        </CustomTabPanel>
        <Box sx={{ borderTop: 1, borderColor: "divider", padding: 2 }}>
          <Stack spacing={2} direction="row" justifyContent="end">
            <Button variant="text">Cancel</Button>
            <Button variant="contained">Done</Button>
          </Stack>
        </Box>
      </div>
    )
  );
}
