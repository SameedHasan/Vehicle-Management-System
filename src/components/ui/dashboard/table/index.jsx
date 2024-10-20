// app/users/page.jsx (ReactTable Component)

"use client";
import React, { useEffect, useState } from "react";
import { Table } from "antd";
import qs from "qs";

// Define the columns for the table
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    sorter: true,
    width: "20%",
  },
  {
    title: "Email",
    dataIndex: "email",
    width: "30%",
    sorter: true,
  },
];

// Helper function to build API request query parameters
const getParams = (params) => ({
  pageSize: params.pagination?.pageSize,
  page: params.pagination?.current,
  sortField: params.sortField,
  sortOrder: params.sortOrder,
  ...params,
});

const ReactTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 2,
    },
  });

  // Fetch data from your custom API
  const fetchData = () => {
    setLoading(true);

    fetch(`/api/vehicle?${qs.stringify(getParams(tableParams))}`)
      .then((res) => res.json())
      .then(({ data, total }) => {
        setData(data); // Update the table data
        setLoading(false); // Stop the loading indicator
        setTableParams({
          ...tableParams,
          pagination: {
            ...tableParams.pagination,
            total, // Set total count received from the server
          },
        });
      })
      .catch(() => {
        setLoading(false); // Stop loading on error
      });
  };

  // Fetch data when the table parameters (pagination, sorting) change
  useEffect(() => {
    fetchData();
  }, [tableParams.pagination?.current, tableParams.pagination?.pageSize, tableParams.sortOrder, tableParams.sortField]);

  // Handle table changes (pagination, filtering, sorting)
  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      sortOrder: sorter.order,
      sortField: sorter.field,
    });

    // Reset data when the page size changes
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };

  return (
    <div style={{ margin: "20px" }}>
      <Table
        columns={columns}
        rowKey={(record) => record.id} // Assuming your API returns a field called 'id'
        dataSource={data}
        pagination={tableParams.pagination}
        loading={loading}
        onChange={handleTableChange}
      />
    </div>
  );
};

export default ReactTable;
