import React from "react";
import { MdDashboard, MdWork, MdAnalytics, MdPeople, MdOutlineSettings, MdHelpCenter, MdLogout, MdBallot } from "react-icons/md";
import { IoCarSport } from "react-icons/io5";
import { FaUsers } from "react-icons/fa6";
import styles from "./sidebar.module.css";
import Image from "next/image";
import MenuLink from "./menuLink/MenuLink";
import Logout from "@/components/Logout";
const menuItems = [
  {
    title: "Vehicle Management",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <FaUsers />,
      },
      {
        title: "Vehicles",
        path: "/dashboard/vehicles",
        icon: <IoCarSport />,
      },
      {
        title: "Allotments",
        path: "/dashboard/allotments",
        icon: <MdBallot />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = () => {
  let user = {
    name: "John Doe",
    username: "sameed",
  };
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image className={styles.userImage} src={"/fia.png" || "/noavatar.png"} alt="" width="50" height="50" />
        <div className={styles.userDetail}>
          <span className={styles.username}>{user.username}</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <Logout styles={styles} />
    </div>
  );
};

export default Sidebar;
