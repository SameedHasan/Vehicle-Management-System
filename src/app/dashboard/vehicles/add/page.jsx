import React from "react";
import styles from "@/components/ui/dashboard/vehicle/addvehicle.module.css";
const AddVehiclePage = () => {
  return (
    <div className={styles.container}>
      <form
        //    action={addProduct}
        className={styles.form}
      >
        <input type="text" placeholder="Chasis Number" name="title" required />
        <input type="text" placeholder="Registration No." name="title" required />
        <input type="text" placeholder="Engine No." name="title" required />
        <select name="cat" id="cat">
          <option value="general">Vehicle Type</option>
          <option value="kitchen">Car</option>
          <option value="phone">Bike</option>
          <option value="computer">Van</option>
        </select>
        <input type="number" placeholder="price" name="price" required />
        <input type="number" placeholder="Make" name="stock" required />
        <input type="text" placeholder="color" name="color" />

        {/* <textarea required name="desc" id="desc" rows="16" placeholder="Description"></textarea> */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddVehiclePage;
