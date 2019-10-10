import React from "react";

const SocialFooter = () => {
  return (
    <div>
      <h3 className="text-center py-1">Follow Me On Social Media</h3>
      <ul className="accordion">
        <li className="tab">
          <a
            href="https://www.linkedin.com/in/shiyu-w/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="social linkedin">
              <span>LinkedIn</span>
            </div>
            <div className="content">
              <h1>LinkedIn</h1>
              <p>Connect with me on a professional level on LinkedIn</p>
            </div>
          </a>
        </li>
        <li className="tab">
          <a
            href="https://github.com/shiyu3169/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="social github">
              <span>GitHub</span>
            </div>
            <div className="content">
              <h1>GitHub</h1>
              <p>
                Check out my GitHub for tutorial code, my personal projects and
                more
              </p>
            </div>
          </a>
        </li>
        <li className="tab">
          <a
            href="https://www.youtube.com/channel/UC9NVYFh1gs3AShriwWX7NNQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="social youtube">
              <span>YouTube</span>
            </div>
            <div className="content">
              <h1>YouTube</h1>
              <p>
                Follow me on YouTube for tutorials on the latest web development
                technologies
              </p>
            </div>
          </a>
        </li>
        <li className="tab">
          <a
            href="https://www.facebook.com/shiyu.wang.58"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="social facebook">
              <span>Facebook</span>
            </div>
            <div className="content">
              <h1>Facebook</h1>
              <p>
                Follow me on Facebook to stay up to date with me and get
                notified of new videos, publications, etc
              </p>
            </div>
          </a>
        </li>

        <li className="tab">
          <a
            href="https://www.instagram.com/shiyu3169/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="social instagram">
              <span>Instagram</span>
            </div>
            <div className="content">
              <h1>Instagram</h1>
              <p>
                Follow me on Instagram for a more personal look into my life and
                work
              </p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialFooter;
