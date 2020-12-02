import DropdownSearch from "../DropdownSearch";
import SearchTextBox from "../SearchTextBox";
import Submit from "../Submit";
import { Form, Layout } from "antd";
import PropTypes from "prop-types";

const { Content } = Layout;

function SearchForm({
  handleSubmit,
  handleEnter,
  loading,
  search,
  setSearch,
  handleDropdown,
  searchType,
  searchTypesKeys,
}) {
  return (
    <Content style={{ padding: "0 50px" }}>
      <div style={{ minHeight: 240, padding: 24,background: '#fff', display: 'flex'}}>
        <Form onFinish={(e) => handleSubmit(e)} onKeyPress={handleEnter}>
          <SearchTextBox
            loading={loading}
            search={search}
            setSearch={setSearch}
          />
          <DropdownSearch
            loading={loading}
            onChange={handleDropdown}
            searchType={searchType}
            searchTypesKeys={searchTypesKeys}
          />
          <Submit />
        </Form>
      </div>
    </Content>
  );
}

SearchForm.propTypes = {
  handleSubmit: PropTypes.func,
  handleEnter:PropTypes.func,
  loading: PropTypes.bool,
  search: PropTypes.string,
  setSearch: PropTypes.func,
  handleDropdown:PropTypes.func,
  searchType: PropTypes.string,
  searchTypesKeys:PropTypes.array,
}

export default SearchForm;
