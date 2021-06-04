import React, { useState, useEffect } from 'react';
import PlaneModelSelector from '../PlaneModelSelector';
import PlaneModel from '../../models/planeModelModel';
import PlaneModelView from '../PlaneModelView';
import BuyPlaneBtn from '../BuyPlaneBtn';
import PlaneModels from '../../assets/data/planesModels';
import PlaneManufacturerFilter from '../PlaneManufacturerFilter';

const BuyPlane: React.FC = () => {
  const [planes, setPlanes] = useState(PlaneModels);
  useEffect(() => {
    console.log(planes);
  }, [planes]);
  return <React.Fragment>
    <PlaneManufacturerFilter />
    {planes.map((plane, idx) => <div key={idx}>
      <PlaneModelView plane={plane} />
      <BuyPlaneBtn plane={plane} />
    </div>)}
  </React.Fragment>;
};

export default BuyPlane;
