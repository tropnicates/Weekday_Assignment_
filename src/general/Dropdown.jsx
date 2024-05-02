import React, { useState } from "react";
import styles from "./Dropdown.module.css";

const Dropdown = ({ title, onSelect, data }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selected, setSelected] = useState([]);

  const handleDropdown = (txt) => {
    onSelect(txt);
    setSelected(prev => [...prev, txt]);
    setShowDropdown(false);
  };

  const handleRemove = (index) => {
    return () => {
      const updatedSelected = [...selected];
      updatedSelected.splice(index, 1);
      setSelected(updatedSelected);
    };
  };

  console.log(selected);

  return (
    <div className={styles.container}>
      <div
        onClick={() => setShowDropdown(!showDropdown)}
        className={styles.dropdown}
      >
        
        {selected.length > 0 ? selected.map ((item, ind)=><div className={styles.selected} key={ind}>
            <p>{item}</p>
            <div onClick={handleRemove(ind)} className={styles.crossClick}><i style={{fontSize: 9}} className={`fa-solid fa-x ${styles.cross}`}></i></div>
        </div>) : <p>{title}</p>}


        <div className={styles.line}>
        
        <i style={{ color: "#999CA0", fontSize: 14, color:  'rgb(173, 173, 173)'}} className="fa-solid fa-angle-down" />
        </div>
      </div>

      {showDropdown && (
        <div className={styles.list}>
          {data.map((item, ind) => (
            <p key={ind} onClick={() => handleDropdown(item)}>
              {item}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
