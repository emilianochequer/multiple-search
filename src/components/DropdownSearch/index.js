import React from "react";
import { Select, Form } from "antd";
import PropTypes from "prop-types";

function DropdowSearch({ onChange, searchTypesKeys, loading, searchType }) {
  return (
    <Form.Item>
      <Select defaultValue={searchType} disabled={loading} onChange={onChange}>
        {searchTypesKeys.map((type, id) => (
          <Select.Option key={id} value={type}>
            {type.toUpperCase()}
          </Select.Option>
        ))}
      </Select>
    </Form.Item>
  );
}

DropdowSearch.propTypes = {
  onChange: PropTypes.func,
  searchTypesKeys: PropTypes.array,
  loading: PropTypes.bool,
  searchType: PropTypes.string,
};

export default DropdowSearch;
