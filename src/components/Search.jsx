import React from 'react'

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user" />
      </div>
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/2876486/pexels-photo-2876486.png?auto=compress&cs=tinysrgb&w=600"
          alt="user avatar"
        />
        <div className="userChatInfo">
          <span>Samuel</span>
        </div>
      </div>
    </div>
  )
}

export default Search
