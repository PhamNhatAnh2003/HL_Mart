import React, { useState } from "react";
import classNames from "classnames";
import styles from "./Navbar.module.scss";
import Search from "../Search";
import { FaShoppingCart, FaUser, FaSearch, FaBell } from "react-icons/fa";



const cx = classNames.bind(styles);
const Navbar = () => {
    const [search, setSearch] = useState("");

    const handleSearch = () => {
        alert("Tìm kiếm: " + search);
    };

    return (
        <nav className={styles.navbar}>
            {/* Logo */}
            <div className={styles.logo}>HL MART</div>

            {/* Thanh tìm kiếm */}
            <Search className={cx('search-bar')}
             placeholder="Tìm Kiếm"
            />


            {/* Icon Giỏ hàng, Thông báo, User */}
            <div className={styles.icons}>
                <div className={styles.notifications}>
                    <FaBell size={24} />
                    <span className={styles.badge}>5</span>
                </div>
                <div className={styles.cart}>
                    <FaShoppingCart size={24} />
                    <span className={styles.badge}>3</span>
                </div>
                <div className={styles.user}>
                    <FaUser size={24} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
