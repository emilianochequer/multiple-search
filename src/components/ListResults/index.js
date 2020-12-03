import React from "react";
import { List } from "antd";
import PropTypes from "prop-types";

function ListResults({ data }) {
  return (
    <>
      {
        <List
          style={{ padding: "24px", background: "#fff" }}
          itemLayout="horizontal"
          dataSource={data.searchData}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={<a href={item.link} rel="noreferrer" target="_blank">{item.title}</a>}
                description={item.snippet}
              />
            </List.Item>
          )}
        />
      }
    </>
  );
}

ListResults.propTypes = {
  data: PropTypes.array,
};

export default ListResults;
