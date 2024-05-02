import React, { useState, useEffect } from "react";
import "../styles/main.css";
import Dropdown from "../general/Dropdown";
import { useDispatch } from "react-redux";
import { applyFilter } from "../redux/actions/filterActions";
const Filters = () => {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({
    role: "",
    numEmployees: "",
    experience: "",
    remote: "",
    minBasePay: "",
    companyName: "",
  });

  useEffect(() => {
    dispatch(applyFilter(filters));
  }, [filters, dispatch]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: inputValue,
    }));
  };

  const handleRole = (res)=>{
    console.log(res)
  }

  return (
    <div style={{width: '100%', display: 'flex', flexWrap: 'wrap', gap: 5}} className="filters">
      <Dropdown title={"Roles"} data={['Software Developer', 'Backend Developer', 'ios', 'frontend', 'Software Developer', 'Backend Developer', 'ios', 'Software Developer', 'Backend Developer', 'ios']} onSelect={handleRole} />
      <Dropdown title={"Number of Employees"} data={['1-20', '11-20', '21-50', '51-100', '101-200', '201-500', '500+', ]} onSelect={handleRole} />
      <Dropdown title={"Experience"} data={['1','2','3','4','5','6','7','8','9','10']} onSelect={handleRole} />
      <Dropdown title={"Remote"} data={['Remote','Hybrid','In-office']} onSelect={handleRole} />
      <Dropdown title={"Minimum Base Pay Salary"} data={['0L','10L','20L','30L','40L','50L','60L','70L']} onSelect={handleRole} />
      <Dropdown title={"Search Company Name"}  data={['Google','Amazon','Flipkart','Facebook','Aws','MAQ']} onSelect={handleRole} />
    </div>
  );
};

export default Filters;
