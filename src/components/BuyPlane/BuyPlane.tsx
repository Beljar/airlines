import React, { useState, useEffect } from 'react';
import PlaneModelSelector from '../PlaneModelSelector';
import PlaneModel from '../../models/planeModelModel';
import PlaneModelView from '../PlaneModelView';
import BuyPlaneBtn from '../BuyPlaneBtn';

const BuyPlane: React.FC = () => {
  const [plane, setPlane] = useState(PlaneModel());
  useEffect(() => {
    console.log(plane);
  }, [plane]);
  return <React.Fragment>
    <PlaneModelSelector onChange={(selectedPlane) => setPlane(selectedPlane)} />
    <PlaneModelView plane={ plane }/>
    <BuyPlaneBtn plane={ plane }/>
  </React.Fragment>;
};

export default BuyPlane;
