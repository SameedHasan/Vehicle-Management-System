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
  searchTerm: params.searchTerm, // Include the search term in the query parameters
});

const ReactTable = ({ searchTerm }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
    searchTerm: searchTerm, // Add the searchTerm to table parameters
  });

  // Fetch data from your custom API
  const fetchData = () => {
    setLoading(true);

    const queryParams = getParams({ ...tableParams, searchTerm });

    fetch(`/api/vehicle?${qs.stringify(queryParams)}`)
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

  // Fetch data when the table parameters (pagination, sorting, search term) change
  useEffect(() => {
    // Whenever the searchTerm or tableParams change, we refetch the data
    setTableParams((prevParams) => ({
      ...prevParams,
      searchTerm, // Ensure the latest search term is reflected in tableParams
    }));
  }, [searchTerm]);

  // Fetch data when the table parameters (pagination, sorting) change
  useEffect(() => {
    fetchData();
  }, [
    tableParams.pagination?.current,
    tableParams.pagination?.pageSize,
    tableParams.sortOrder,
    tableParams.sortField,
    tableParams.searchTerm, // Make sure to include searchTerm here
  ]);

  // Update the table parameters and reset the data on table change
  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      sortOrder: sorter.order,
      sortField: sorter.field,
      searchTerm: tableParams.searchTerm, // Retain the searchTerm in tableParams
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
