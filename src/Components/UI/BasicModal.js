import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "fit-content",
  maxWidth: "95%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  fontSize: "1rem",
  p: 4,
};

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(pink[500]),
  variant: "outlined",
  backgroundColor: pink[500],
  "&:hover": {
    backgroundColor: pink[700],
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
