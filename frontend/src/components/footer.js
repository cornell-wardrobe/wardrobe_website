import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faInstagram} from "@fortawesome/free-brands-svg-icons";

function SocialMediaComponent({ icon, platform, text }) {
  const generateLink = () => {
    if (platform === "EMAIL") {
      return `mailto:${text}`;
    } else if (platform === "INSTAGRAM") {
      return `https://instagram.com/${text.replace('@', '')}`;
    }
    return "#";
  };

  return (
    <div className="mt-8 text-center md:basis-1/3">
      <FontAwesomeIcon className="text-5xl" icon={icon} />
      <p className="font-bold tracking-widest mb-2">{platform}</p>
      <p className="font-bold underline underline-offset-4 decoration-butter">
        <a href={generateLink()} target="_blank" rel="noopener noreferrer" className="text-white hover:text-butter">
          {text}
        </a></p>
    </div>
  );
}

SocialMediaComponent.propTypes = {
  icon: PropTypes.object.isRequired,
  platform: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

function Footer() {
  return (
    <div className="on-dark py-20 px-4 bg-ink text-white border-t-4 border-charcoal">
      <p className="title text-4xl text-center mb-4">THE WARDROBE</p>
      <p className="text-center font-bold text-white/80">
        Helping any student pursue any opportunity
      </p>
      <p className="text-center text-white/80">
      This organization is a registered student organization at Cornell University
      </p>
      <p className="text-center text-white/80">
      <a className="text-white underline underline-offset-4 hover:text-butter" href="https://hr.cornell.edu/about/workplace-rights/equal-education-and-employment">Equal Education and Employment</a>
      </p>
      <p className="text-center font-bold mt-10">Join our listserv</p>
      <div className="flex justify-center align-middle mt-4 mb-12">
        <form className="flex flex-wrap justify-center max-w-full" action="https://www.list.cornell.edu/subscribe/subscribe.tml" method="POST" target="blank">
          <input type="text" name="email" aria-label="Email address" placeholder="Enter your email" className="border border-white bg-white text-ink placeholder:text-charcoal/70 px-3 py-2 w-64 max-w-full"/>
          <input type="hidden" name="name" value=""/>
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
          <button type="submit" value="subscribe" title="subscribe" alt="subscribe" name="subscribe" className="btn-light py-2">
            <p>Submit</p>
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
        {/* <SocialMediaComponent
          icon={faFacebookF}
          platform="FACEBOOK"
          text="@cornellwardrobe"
        /> */}
      </div>
    </div>
  );
}

export default Footer;
