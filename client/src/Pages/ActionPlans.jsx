import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import { AiFillPlusSquare, AiFillDelete } from "react-icons/ai";
import { MdPersonAddAlt } from "react-icons/md";
import PlanModal from "../components/PlanModal";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ActionsPlans = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [info, setInfo] = useState([]);

  const getData = async () => {
    const response = await fetch("/actionplans");
    const data = await response.json();
    console.log(data);
    setInfo(data);
  };
  //   getData();

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = (id) => {
    const updatedInfo = info.filter((elem,index) => {
        return elem._id !== id;
    })
    setInfo(updatedInfo);
    console.log(updatedInfo);
  }

  return (
    <Box width="70%" margin="auto">
      <Box display="flex" justifyContent="space-between">
        <h1 style={{ height: "5px" }}>ACTION PLANS</h1>
        <Box display="flex" marginTop="30px" gap="20px">
          <Button display="flex" variant="outlined">
            <MdPersonAddAlt style={{ marginRight: "10px", fontSize: "20px" }} />{" "}
            Manage Access
          </Button>
          <Button onClick={handleOpen} display="flex" variant="contained">
            {" "}
            <AiFillPlusSquare
              style={{ marginRight: "5px", fontSize: "20px" }}
            />{" "}
            New Plan
          </Button>
        </Box>
      </Box>
      <PlanModal open={open} handleClose={handleClose} />

      {/* map here  */}

      <Box style={{ border: "2px solid gray", marginTop: "80px" }}>
        {info.map((elem) => {
          return (
            <Accordion key={elem._id}>
                
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <div style={{display:"flex", justifyContent:"space-between"}} >
                  <Typography sx={{width: "300px"}}>{elem.name}</Typography>
                  <Typography sx={{ marginLeft:"650px"}}>
                    <button style={{ color:"red" }} onClick={() => handleDelete(elem._id)} ><AiFillDelete /></button>
                  </Typography>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div style={{ display: "flex", justifyContent: "space-between"}}>
                  <Typography sx={{width: "70%"}}> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                  <Box>
                      
                  </Box>
                </div>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Box>
    </Box>
  );
};

export default ActionsPlans;
