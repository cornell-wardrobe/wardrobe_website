import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import LinkedinIcon from "./images/linkedin-icon.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function PersonItem({ image, name, netID, position, description, linkedin }) {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      {/* Clickable card */}
      <div
        onClick={() => setOpen(true)}
        className="bg-gray-100 rounded-lg overflow-hidden shadow-md w-48 h-96 mx-4 my-4 flex flex-col justify-end transition-transform duration-300 ease-in-out transform hover:rotate-3 cursor-pointer"
      >
        <img src={image} alt={name} className="w-full h-96 object-cover" />
        <div className="p-2">
          <div className="flex justify-between items-center mb-1">
            <h2 className="text-sm font-bold">{name}</h2>
            <p className="text-gray-700 text-xs">{netID}</p>
          </div>
          <p className="text-gray-700 text-xs mb-1">{position}</p>
        </div>
      </div>

      {/* Modal with LinkedIn icon */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2 id="modal-modal-title" className="text-sm font-bold text-gray-900">
            {name}
          </h2>
          <p id="modal-modal-description" className="text-gray-700 text-xs mt-2">
            {description}
          </p>

          {linkedin && (
            <div className="mt-4">
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img
                  src={LinkedinIcon}
                  alt="LinkedIn"
                  className="h-6 w-6 hover:opacity-75 transition-opacity"
                />
              </a>
            </div>
          )}
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