import React, { useState, useEffect } from 'react';
import { FacebookShareButton, InstapaperShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Share = ({ movies }) => {
  const [shareText, setShareText] = useState("");

  useEffect(() => {
    if (movies.length > 0) {
      const text = movies.map(movie => movie.title).join(", ");
      setShareText(text);
   
    }
  }, [movies]);

  return (
    <div className="flex gap-3 justify-end">
      <FacebookShareButton url={window.location.href} quote={shareText}>
        <FaFacebook />
      </FacebookShareButton>
      <TwitterShareButton url={window.location.href} title={shareText}>
        <FaTwitter />
      </TwitterShareButton>
      <WhatsappShareButton url={window.location.href} title={shareText}>
        <FaWhatsapp />
      </WhatsappShareButton>

    </div>
  );
};

export default Share;
