import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {

  const [searchTerm, setSearchTerm] = useState<string>("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/search?key=" + searchTerm);
  }


  return (
    <div className="container p-4 m-auto">
      <form onSubmit={handleSubmit}>

      </form>
      <div className="input-group">
        <div className="form-outline" data-mdb-input-init>
          <input type="text" placeholder="Search" value={searchTerm} id="form1"
            onChange={e => setSearchTerm(e.target.value)} className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary" data-mdb-ripple-init>
          <i className="fas fa-search"></i>
        </button>
      </div>
    </div>
  );
}

export default Search;