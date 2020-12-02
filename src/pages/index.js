import React, { useState } from "react";
import SearchForm from "../components/SearchForm";
import ListResults from "../components/ListResults";
import { useSelector, useDispatch } from "react-redux";

import { fetchSearch } from "../actions/searchActions.js";
import { searchTypes } from "../constants/index.js";
import { Divider } from "antd";

function SearchBox() {
  const [search, setSearch] = useState("");
  const searchTypesKeys = searchTypes && Object.keys(searchTypes);
  const [searchType, setSearchType] = useState(searchTypesKeys[0]);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.googleReducer);

  const googleSelector = useSelector((state) => state.googleReducer.searchData);
  const bingSelector = useSelector((state) => state.bingReducer.searchData);

  const selectorBoth = {
    searchData:
      googleSelector && bingSelector
        ? [...googleSelector, ...bingSelector]
        : bingSelector
        ? bingSelector
        : googleSelector
        ? googleSelector
        : [],
  };

  const handleSubmit = (e) => {
    dispatch(fetchSearch(searchType, search));
  };

  const handleDropdown = (e) => {
    setSearchType(e);
  };

  const handleEnter = (e) => (e.keyCode === 13 ? handleSubmit(e) : null);

  const searchFormProps = {
    handleSubmit,
    handleEnter,
    loading,
    search,
    setSearch,
    handleDropdown,
    searchType,
    searchTypesKeys,
  };

  return (
    <div>
      <div>
        <SearchForm {...searchFormProps} />
      </div>
      <div style={{ margin: '0 50px' }}>
        <Divider />
        <ListResults data={selectorBoth} />
      </div>
    </div>
  );
}

export default SearchBox;
