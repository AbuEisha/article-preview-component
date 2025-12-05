import drawersImg from "./assets/images/drawers.jpg";
import michelleAvatar from "./assets/images/avatar-michelle.jpg";
import shareIcon from "./assets/images/icon-share.svg";
import facebookIcon from "./assets/images/icon-facebook.svg";
import twitterIcon from "./assets/images/icon-twitter.svg";
import pinterestIcon from "./assets/images/icon-pinterest.svg";
import { useState } from "react";
export default function ArticlePreview() {
  const [isClicked, setIsClicked] = useState(false);
  const handleHideMenu = () => {
    if (isClicked) setIsClicked(false);
  };
  return (
    <main className="container" onClick={handleHideMenu}>
      <article className="article-card">
        <div className="article-img-box">
          <img src={drawersImg} alt="Drawers Image" className="article-img" />
        </div>
        <div className="article-body">
          <h1 className="article-header">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h1>
          <p className="article-description">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </p>
          <div className="article-author">
            <div className="author-avatar-box">
              <img
                src={michelleAvatar}
                alt="Michelle Avatar"
                className="author-avatar"
              />
            </div>
            <div className="author-info">
              <h2 className="author-name">Michelle Appleton</h2>
              <span className="article-date">28 Jun 2020</span>
            </div>

            <button
              type="button"
              className={`share-btn ${isClicked ? "share-btn--active" : ""}`}
              onClick={() => setIsClicked((prev) => !prev)}
            >
              <img src={shareIcon} alt="Share Icon" className="share-icon" />
            </button>
            {isClicked && (
              <div
                className="share-links-menu"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="share-text">Share</span>
                <a href="#" className="social-link">
                  <img src={facebookIcon} alt="Facebook Icon" />
                </a>
                <a href="#" className="social-link">
                  <img src={twitterIcon} alt="Twitter Icon" />
                </a>
                <a href="#" className="social-link">
                  <img src={pinterestIcon} alt="Pinterest Icon" />
                </a>
              </div>
            )}
          </div>
        </div>
      </article>
    </main>
  );
}
