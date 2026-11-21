import React from "react";
import PropTypes from "prop-types";
import heroPhoto from "./heroPhoto";

// Brand "Process": black background, photo at ~55% opacity (brightened from 40%),
// then fully opaque text and buttons on top.
function PhotoPanel({ children, className = "", photo = heroPhoto, opacity = 0.55 }) {
  return (
    <div className={`on-dark relative isolate overflow-hidden bg-ink text-white ${className}`}>
      {photo ? (
        <img
          src={photo}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          style={{ opacity }}
        />
      ) : (
        <div aria-hidden="true" className="halftone absolute inset-0 -z-10" />
      )}
      {children}
    </div>
  );
}

PhotoPanel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  photo: PropTypes.string,
  opacity: PropTypes.number,
};

export default PhotoPanel;
