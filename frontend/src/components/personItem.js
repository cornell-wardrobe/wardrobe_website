import * as React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function PersonItem({ image, name, netID, position, description }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
        <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md w-48 h-96 mx-4 my-4 flex flex-col justify-end transition-transform duration-300 ease-in-out transform hover:rotate-3">
          <img src={image} alt={name} className="w-full h-96 object-cover" />
          <div className="p-2">
            <div className="flex justify-between items-center mb-1">
              <h2 className="text-sm font-bold">{name}</h2>
              <p className="text-gray-700 text-xs">{netID}</p>
            </div>
            <p className="text-gray-700 text-xs mb-1">{position}</p>
          </div>
        </div>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {description}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
export default PersonItem;


// import React from "react";

// function PersonItem({ image, name, netID, position }) {
//   return (
//     <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md w-48 h-96 mx-4 my-4 flex flex-col justify-end transition-transform duration-300 ease-in-out transform hover:rotate-3">
//       <img src={image} alt={name} className="w-full h-96 object-cover" />
//       <div className="p-2">
//         <div className="flex justify-between items-center mb-1">
//           <h2 className="text-sm font-bold">{name}</h2>
//           <p className="text-gray-700 text-xs">{netID}</p>
//         </div>
//         <p className="text-gray-700 text-xs mb-1">{position}</p>
//       </div>
//     </div>
//   );
// }
// export default PersonItem;