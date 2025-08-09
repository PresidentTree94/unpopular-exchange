"use client";
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import styles from "./Menu.module.css";

export default function Menu({
  id, isOpen, setOpenMenuId, btnTop, btnRight,
}: Readonly<{
  id: number;
  isOpen: boolean;
  setOpenMenuId: (id: number | null) => void;
  btnTop: number;
  btnRight: number;
}>) {

  const toggleMenu = () => {
    setOpenMenuId(isOpen ? null : id);
  };

  return (
    <>
      <FontAwesomeIcon icon={faEllipsisVertical} className={styles.svg} onClick={toggleMenu} style={{top: `${btnTop}rem`, right: `${btnRight}rem`}}/>
      <div className={`${styles.div} ${isOpen ? styles.active : ""}`} style={{top: `${btnTop}rem`, right: `${btnRight + 0.75}rem`}}>
        <p>September 30, 2025, 88:88 PM</p>
        <hr/>
        <p>Edit</p>
        <p>Archive</p>
        <p>Mute</p>
        <p>Report/Delete</p>
      </div>
    </>
  );
}