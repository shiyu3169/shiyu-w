import React from "react";
import SocialTab from "./SocialTab";

const SocialFooter = () => {
  return (
    <div>
      <h3 className="text-center py-1">Follow Me On Social Media</h3>
      <ul className="accordion">
        <SocialTab
          icon="linkedin"
          title="LinkedIn"
          desc="Connect with me on a professional level on LinkedIn"
          href="https://www.linkedin.com/in/shiyu-w/"
        />
        <SocialTab
          icon="github"
          title="Github"
          desc="Check out my GitHub for tutorial code, my personal projects and
                more"
          href="https://github.com/shiyu3169/"
        />
        <SocialTab
          icon="youtube"
          title="YouTube"
          desc="Follow me on YouTube for tutorials on the latest web development
                technologies"
          href="https://www.youtube.com/channel/UC9NVYFh1gs3AShriwWX7NNQ"
        />
        <SocialTab
          icon="facebook"
          title="Facebook"
          desc="Follow me on Facebook to stay up to date with me and get
                notified of new videos, publications, etc"
          href="https://www.facebook.com/shiyu.wang.58"
        />
        <SocialTab
          icon="instagram"
          title="Instagram"
          desc="Follow me on Instagram for a more personal look into my life and
                work"
          href="https://www.instagram.com/shiyu3169/"
        />
      </ul>
    </div>
  );
};

export default SocialFooter;
