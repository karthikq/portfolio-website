/** @format */

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { BiCode, BiCodeCurly, BiServer } from "react-icons/bi";
import "./acc.styles.scss";
import SkilDropdown from "../skills/SkilDropdown";

export const SkillAccordion = () => {
  const [openState, setOpenState] = React.useState(false);
  const [openState2, setOpenState2] = React.useState(false);

  return (
    <div>
      <Accordion onClick={() => setOpenState(!openState)} className="acc">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <h2 className="acc-h2">
            <BiCodeCurly className="skill-icon" /> Frontend developer
          </h2>
        </AccordionSummary>
        <AccordionDetails className="acc-details">
          <SkilDropdown state={"frontend"} openState={openState} />
        </AccordionDetails>
      </Accordion>
      <Accordion onClick={() => setOpenState2(!openState2)} className="acc">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header">
          <h2 className="acc-h2">
            <BiServer className="skill-icon" /> Backend developer
          </h2>
        </AccordionSummary>
        <AccordionDetails className="acc-details">
          <SkilDropdown state={"backend"} openState2={openState2} />
        </AccordionDetails>
      </Accordion>
      <Accordion className="acc">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header">
          <h2 className="acc-h2">
            <BiServer className="skill-icon" /> Other
          </h2>
        </AccordionSummary>
        <AccordionDetails className="acc-details">
          <SkilDropdown state={"other"} openState2={openState2} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
