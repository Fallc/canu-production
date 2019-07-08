// General Header Component

import React from "react";

import "./Header.css";

const Header = () => (
  <div className="header">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="294.9"
      height="48.5"
      viewBox="0 0 294.9 48.5"
    >
      <g transform="translate(43.484)" fill="none">
        <circle cx="15.5" cy="15.5" r="15.5" />
        <circle cx="15.5" cy="15.5" r="14.5" stroke="#f43543" strokeWidth="2" />
      </g>
      <path d="M6.528 31.159L23.78.753 41.176 31.16H6.528z" fill="none" />
      <path
        d="M9.993 29.25H37.71L23.852 4.925 9.992 29.25m-3.464 1.909L23.78.753 41.176 31.16H6.528z"
        fill="#ffe748"
      />
      <path
        fill="none"
        stroke="#00c325"
        strokeWidth="2"
        d="M23.252 19.1l40.5-8.1"
      />
      <g>
        <path d="M259.127 36.1c0 .4-.1.9-.2 1.3s-.3.8-.5 1.1-.5.6-.9.8-.8.3-1.3.3-.9-.1-1.2-.3-.6-.5-.9-.9l-.1 1.1h-.8v-1-8.4h.8v4.1c.5-.9 1.2-1.3 2.3-1.3.5 0 .9.1 1.2.3.3.2.6.4.8.7s.4.7.5 1.1c.2.3.3.7.3 1.1zm-.8.1c0-.3 0-.6-.1-1l-.3-.9c-.2-.3-.4-.5-.6-.7-.3-.2-.6-.3-1-.3s-.7.1-1 .2-.5.4-.7.6-.3.6-.4.9-.1.7-.1 1c0 .3 0 .7.1 1l.3.9c.2.3.4.5.6.6.3.2.6.2 1 .2s.7-.1 1-.2c.3-.2.5-.4.7-.6.2-.3.3-.6.4-.9 0-.1.1-.4.1-.8zM262.527 42h-.8l1-2.5-2.8-6.5h.9l2.2 5.5 2.2-5.5h.8l-3.5 9z" />
      </g>
      <path d="M280.927 29.5v9.6h2.5v-9.6h11.5v11.8h-2.2v-9.6h-2.5v9.6h-2.2v-9.6h-2.5v9.6h-6.8v-9.6h-2.2v9.6h-2.2v-9.6h-2.2v-2.2h8.8z" />
      <g fill="#262d36">
        <path d="M114.327 3.7c2.5 2 3.9 4.6 4.4 7.9l-2.4.2c-.4-2.8-1.6-5-3.6-6.6-2-1.6-4.5-2.4-7.4-2.4-3.6 0-6.4 1.2-8.6 3.5s-3.3 5.6-3.3 9.7 1.1 7.4 3.4 9.7c2.3 2.3 5.2 3.5 8.6 3.5 5.8 0 10-3.1 10.9-8.4l2.4.2c-.6 3.2-2 5.7-4.4 7.6-2.4 1.8-5.4 2.8-8.8 2.8-4.2 0-7.7-1.4-10.4-4.1-2.7-2.8-4.1-6.5-4.1-11.2 0-4.8 1.3-8.5 4-11.2s6.2-4.1 10.4-4.1c3.4-.1 6.4.9 8.9 2.9zM132.627 12.6c-1.8 0-3.3.6-4.4 1.8-1.1 1.2-1.6 2.6-1.6 4.3V31h-2.2V10.8h2.2v3.3c.8-2 3-3.6 6.2-3.6v2.1zM154.227 21.7h-16.5c0 2.4.8 4.2 2.2 5.6 1.4 1.4 3.1 2 5.2 2 3.5 0 5.9-1.6 6.7-4.4l2.2.2c-1 3.8-4.2 6.2-8.8 6.2-2.9 0-5.2-.9-7.1-2.8s-2.8-4.4-2.8-7.7.9-5.8 2.7-7.7 4.2-2.8 7-2.8 5.1.9 6.7 2.7c1.6 1.8 2.4 4.2 2.4 7.2v1.5zm-16.5-1.9h14.3c0-4.5-2.5-7.4-7-7.4-4.1 0-7.1 2.8-7.3 7.4zM174.327 18.1V31h-2.3v-3c-1.5 2.3-3.7 3.4-6.7 3.4-3.9 0-6.4-2-6.4-5.6 0-3.6 2.5-5.6 7.4-5.9l5.8-.4v-1.4c0-3.6-1.7-5.7-5-5.7s-5.3 2.3-5.3 5l-2.3-.1c0-1.9.7-3.5 2-4.9 1.4-1.4 3.2-2.1 5.5-2.1 4.7.1 7.3 2.9 7.3 7.8zm-2.3 3.4l-5.6.3c-3.6.2-5.4 1.5-5.4 4s1.5 3.6 4.5 3.6c3.7 0 6.4-2.2 6.4-7v-.9zM190.427 29v2c-.7.1-1.5.2-2.6.2-3.5 0-5.6-2-5.6-6.1V12.7h-3.8v-2h3.8V3.5h2.3v7.2h5.8v2h-5.8l-.1 12c0 3 1.3 4.5 3.8 4.5.6 0 1.3-.1 2.2-.2zM212.427 21.7h-16.5c0 2.4.8 4.2 2.2 5.6 1.4 1.4 3.1 2 5.2 2 3.5 0 5.9-1.6 6.7-4.4l2.2.2c-1 3.8-4.2 6.2-8.8 6.2-2.9 0-5.2-.9-7.1-2.8s-2.8-4.4-2.8-7.7.9-5.8 2.7-7.7 4.2-2.8 7-2.8 5.1.9 6.7 2.7c1.6 1.8 2.4 4.2 2.4 7.2v1.5zm-16.5-1.9h14.3c0-4.5-2.5-7.4-7-7.4-4.1 0-7.1 2.8-7.3 7.4zM231.427 16.1l-2.2.2c-.3-2.4-2-3.9-4.9-3.9-3.1 0-4.7 1.4-4.7 3.7 0 .6.2 1.2.4 1.6.2.4.8.7 1.1.9.3.2 1.4.4 1.7.6l1 .2 1.1.2c2.5.6 4.3 1.3 5.4 2s1.7 2 1.7 3.7c0 3.8-2.9 6-7.4 6-4.3 0-7.2-2.1-7.7-5.8l2.2-.2c.4 2.6 2.4 4 5.5 4s5.1-1.3 5.1-3.9c0-1.2-.4-2-1.2-2.5-.8-.5-2.3-1-4.6-1.5-.8-.2-1.3-.3-1.6-.4l-1.3-.4c-.6-.2-1.1-.4-1.3-.5-.4-.3-1.5-.9-1.8-1.5-.3-.6-.6-1.5-.6-2.6 0-3.5 2.6-5.8 7-5.7 4.2.1 6.6 2.3 7.1 5.8zM247.027 29v2c-.7.1-1.5.2-2.6.2-3.5 0-5.6-2-5.6-6.1V12.7h-3.8v-2h3.8V3.5h2.3v7.2h5.8v2h-5.8l-.1 12c0 3 1.3 4.5 3.8 4.5.6 0 1.3-.1 2.2-.2z" />
      </g>
    </svg>
  </div>
);

export default Header;
