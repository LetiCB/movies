import React from "react";
import "./styles/about.css";

export default function About() {
  return (
    <>
      <div className="about-container">
        <h2>About us</h2>
        <p className="about-text">
          Welcome to our movie-themed website! Our site is designed to connect
          you with the latest movie information from The Open Movie Database. We
          know how important movies are to many people, so we created this
          platform to provide movie lovers with the latest news, reviews, and
          trailers.
        </p>
        <p className="about-text">
          Our website is simple and easy to use, so you can find the information
          you need quickly and easily. We have a large database of movies, which
          is constantly updated with the latest releases, so you'll always be in
          the know about what's happening in the world of movies.
        </p>
        <p className="about-text">
          Whether you're a casual moviegoer or a die-hard film buff, our site
          has something for everyone. Browse our collection of movies, read
          reviews from other users, and watch trailers to get a taste of what's
          in store. You can also create an account to save your favorite movies
          and get personalized recommendations based on your viewing history.
        </p>
        <p className="about-text">
          At our movie-themed website, we're passionate about movies and we hope
          that our site helps you discover your next favorite film. Thanks for
          visiting and happy movie watching!
        </p>
      </div>
    </>
  );
}
