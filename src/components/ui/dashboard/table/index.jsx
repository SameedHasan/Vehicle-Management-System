"use client";
import React, { useEffect, useState } from "react";
import { Button, Space, Table } from "antd";
import qs from "qs";
import { deleteUser } from "@/lib/actions";

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

  // Function to fetch data from your API
  const fetchData = () => {
    setLoading(true);

    const queryParams = getParams({ ...tableParams, searchTerm });

    fetch(`/api/vehicle?${qs.stringify(queryParams)}`)
      .then((res) => res.json())
      .then(({ data, total }) => {
        setData(data); // Update the table data
        setLoading(false); // Stop loading indicator
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

  // Handle delete operation and refetch data
  const handleDelete = async (id) => {
    try {
      await deleteUser(id); // Perform the delete operation
      fetchData(); // Re-fetch the data to reflect the deletion
    } catch (error) {
      console.error("Error deleting user:", error);
    }
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

  // Define the columns for the table
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      sorter: true,
    },
    {
      title: "Name",
      dataIndex: "name",
      sorter: true,
    },
    {
      title: "Email",
      dataIndex: "email",
      sorter: true,
    },
    {
      title: "Password",
      dataIndex: "password",
      sorter: true,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button color="danger" variant="solid" onClick={() => handleDelete(record.id)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ margin: "20px" }}>
      <Table
        columns={columns}
        rowKey={(record) => record.id} // Assuming your API returns a field called 'id'
        dataSource={data}
        pagination={{ ...tableParams.pagination, hideOnSinglePage: true }}
        loading={loading}
        onChange={handleTableChange}
      />
    </div>
  );
};

export default ReactTable;
