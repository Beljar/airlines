import React, { Fragment, useEffect, useState } from "react";

const planeManufacturers = ['boeing', 'airbus', 'bombardier'];

const PlaneManufacturerFilter = () => {
  const [manufacturers, setManufacturers] = useState([]);
  useEffect(() => {
    console.log('effect');
    console.log(manufacturers);
  }, [manufacturers]);
  const filterChanged = (val: string, checked: Boolean) => {
    console.log(checked);
    if (checked) {
      console.log(checked);
      setManufacturers((prev: string[]) => {
        console.log(prev);
        console.log(val);
        if (prev.indexOf(val) < 0) {
          prev.push(val);
          console.log(prev);
        }
        return [...prev];
      });
    }
  }
  return <Fragment>
    {planeManufacturers.map((manufacturer, idx) => <span key={idx}>
      <input
        type="checkbox"
        id={idx.toString()}
        name={manufacturer}
        onChange={(e) => filterChanged(e.target.name, e.target.checked)} />
      <label htmlFor={idx.toString()}>{manufacturer}</label>
    </span>)}
  </Fragment>;
};

export default PlaneManufacturerFilter;
