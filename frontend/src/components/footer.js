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
      <p className="text-center font-bold text-sm text-gray-500">
        Helping any student pursue any opportunity
      </p>
      <p className="text-center font-bold text-sm mt-8">Join our listserv</p>
      <div className="flex justify-center align-middle mt-4 mb-12">
        <form action="https://www.list.cornell.edu/subscribe/subscribe.tml" method="POST" target="blank">
          <input type="text" name="email" placeholder="Enter your email" className="border p-1 pr-24 border-gray"/>
          <input type="hidden" NAME="name" VALUE=""/>
          <input type="hidden" name="list" value="wardrobe-l"/>
          <input type="hidden" name="lists" value="wardrobe-l"/>
          <input type="hidden" name="demographics" value="" />
          <input type="hidden" name="name_required" value="" />
          <input type="hidden" name="pw_required" value="" />
          <input type="hidden" name="confirm" value="one_hello" />
          <input type="hidden" name="showconfirm" value="T" />
          <input type="hidden" name="url" value="" />
          <input type="hidden" name="appendsubinfotourl" value="" />
          <input type="hidden" name="secx" value="e1e742b1" />
          <button type="submit" value="subscribe" title="subscribe" alt="subscribe" name="subscribe" className="bg-blue-600 h-full">
            <p className="text-white text-sm my-auto mx-8">Submit</p>
          </button>
        </form>
      </div>
      <div className="md:flex justify-around">
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
