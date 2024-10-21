import React from "react";
import styles from "@/components/ui/dashboard/vehicle/addvehicle.module.css";
import { AddUser } from "@/lib/actions";
const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form action={AddUser} className={styles.form}>
        <input type="text" placeholder="Enter Name" name="name" required />
        <input type="email" placeholder="Enter Email" name="email" required />
        <input type="password" placeholder="Enter Password" name="password" required />
        {/* <select name="cat" id="cat">
          <option value="general">Vehicle Type</option>
          <option value="kitchen">Car</option>
          <option value="phone">Bike</option>
          <option value="computer">Van</option>
        </select>
        <input type="number" placeholder="price" name="price" required />
        <input type="number" placeholder="Make" name="stock" required />
        <input type="text" placeholder="color" name="color" /> */}

        {/* <textarea required name="desc" id="desc" rows="16" placeholder="Description"></textarea> */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUserPage;
