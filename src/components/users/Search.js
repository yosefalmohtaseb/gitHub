import React, { useContext, useState } from "react";
import AlertContext from "../../context/alert/alerContext";
import GithubContext from "../../context/github/githubContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const {setAlert} = alertContext;
  const [text, setText] = useState("");
  
  
 const onChange = (e) =>
 setText(e.target.value);
 const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Pleas Enter something", "light");
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };
 


    return (
      <div>
        <form onSubmit={onSubmit} className="form">
          <input
            type="text"
            name="text"
            placeholder="Search Users..."
            value={text}
            onChange={onChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
        {githubContext.users.length > 0 && (
          <button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
 
export default Search;
