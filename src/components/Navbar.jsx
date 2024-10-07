import { ChevronDownIcon } from "@heroicons/react/outline";
import styles from "../styles/Navbar.module.css";
import { TransactionContext } from "../context/context";
import { useContext } from "react";
import { shortenAddress } from "../utils/shortenAddress";
import React from "react"

const Navbar = () => {
  const { connectWallet, currentAccount } = useContext(TransactionContext);

  return (
    <nav className={styles.navigationContainer}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <h1 className={styles.logoImage}>
            cryptoPay
            
            </h1>
        </div>

        {currentAccount ? (
          <div className={styles.actionsContainer}>
            <p>
              Hello,{" "}
              <span className={styles.accentColor}>
                {shortenAddress(currentAccount)}
              </span>
              ! 👋
            </p>

            <ChevronDownIcon className={styles.arrowDownIcon} />
            <div className={styles.avatarContainer}>
              <img
                className={styles.avatarImage}
                src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                alt=""
              />
            </div>
          </div>
        ) : (
          <button className={styles.connectBtn} onClick={connectWallet}>
            Connect Wallet
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
