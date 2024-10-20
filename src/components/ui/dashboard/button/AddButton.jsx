"use client";
import React from "react";

const AddButton = ({ addVehicle }) => {
  return <button onClick={() => addVehicle()}>Add New</button>;
};

export default AddButton;
