// important!
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "fit-content",
  maxWidth: "90%",
  bgcolor: "background.paper",
  fontSize: "1rem",
  p: 5,
};

const ColorButton = styled(Button)(({ theme }) => ({
  color: "white",
  backgroundColor: "darkred",
  "&:hover": {
    color: "white",
    backgroundColor: "var(--primary-color)",
  },
}));

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <ColorButton
        variant="outlined"
        onClick={handleOpen}
        sx={{
          margin: "10px",
        }}
      >
        {props.cta}
      </ColorButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            fontSize={"2rem"}
            color={"var(--primary-color)"}
          >
            {props.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <ul>
              {props.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
