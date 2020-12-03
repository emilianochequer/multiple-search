import React from "react";
import { Input, Form } from "antd";

function SearchTextBox({ search, setSearch, loading,onKeyPress }) {
  return (
    <Form.Item label="What are you looking for?">
      <Input
        type="text"
        value={search}
        disabled={loading}
        onChange={(e) => setSearch(e.target.value)}
        onKeyPress={onKeyPress}
      />
    </Form.Item>
  );
}

export default SearchTextBox;
