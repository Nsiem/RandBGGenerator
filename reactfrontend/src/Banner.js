import React from "react";
const posts = [
  { id: '1', name: 'This first post is about React' },
  { id: '2', name: 'This next post is about Preact' },
  { id: '3', name: 'We have yet another React post!' },
  { id: '4', name: 'This is the fourth and final post' },
];
export default function Banner() {
    return (
        <div className="theBanner" onClick={() => console.log('clicked')}>
          <form action="/" method="get">
              <label htmlFor="header-search">
                  <span className="visually-hidden">Search for a Random Image</span>
              </label>
              <input
                type="text"
                id="header-search"
                placeholder="Image Topic"
                name="s" 
              />
              <button type="submit">Search</button>
            </form>
            
        </div>
    )
}
