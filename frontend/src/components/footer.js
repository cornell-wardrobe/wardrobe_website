import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons";

function SocialMediaComponent({ icon, platform, text }) {
  return (
    <div className="mt-4 text-center md:basis-1/3">
      <FontAwesomeIcon className="text-5xl" icon={icon} />
      <p className="font-bold mb-4">{platform}</p>
      <p className="text-sm font-bold text-gray-500">{text}</p>
    </div>
  );
}

function Footer() {
  return (
    <div className="py-24 bg-gray-50">
      <p className="text-4xl font-bold text-center mb-4">WARDROBE</p>
      <p className="text-center font-bold text-sm mb-12 text-gray-500">
        Helping any student pursue any opportunity
      </p>
      <div className="md:flex md:justify-around md:flex-row">
        <SocialMediaComponent
          icon={faEnvelope}
          platform="EMAIL"
          text="thewardrobe@cornell.edu"
        />
        <SocialMediaComponent
          icon={faInstagram}
          platform="INSTAGRAM"
          text="@cornellwardrobe"
        />
        <SocialMediaComponent
          icon={faFacebookF}
          platform="FACEBOOK"
          text="@cornellwardrobe"
        />
      </div>
    </div>
  );
}

export default Footer;
