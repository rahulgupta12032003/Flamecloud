import { Button, Modal, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import axios from "axios";

const PlanModal = ({ open, handleClose }) => {

    const [text , setText] = useState("");

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "snow",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  
  const handleAction = async () => {
    if(text === ""){
        alert("Please fill the required fields...🙏");
    }
    else{
     const data = {
        name : text
     }

      axios.post("/actionplans" , data)
      .then((data) => {
        console.log(data);
        alert("Data added Successfully!...🥳");
      });
    }
  }

  return (

    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={style}  >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Plan Name
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          <TextField id="outlined-name" label="Plan Name" value={text} onChange={(e) => setText(e.target.value)} placeholder ="Name Your Plan"sx={{ mt: 2 }} />
          <Box display="flex" gap="40px" justifyContent="right" marginTop="30px">
            <Button  style={{color:"red", border:"2px solid red"}} variant="outlined">Cancle</Button>
            <Button variant="contained" onClick={handleAction} >Create</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default PlanModal;