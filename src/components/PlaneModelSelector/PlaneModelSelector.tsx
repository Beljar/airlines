import React, { useEffect } from 'react';
import planesModels from '../../assets/data/planesModels';
import PlaneModelType from '../../types/planeModelType';
import PlaneModel from '../../models/planeModelModel';

type PlaneModelSelectorProps = {
  onChange: (plane: PlaneModelType) => any,
}

const PlaneModelSelector: React.FC<PlaneModelSelectorProps> = ({ onChange }: PlaneModelSelectorProps) => {
  const changeHandler = (e) => {
    const selectedId = e.target.value;
    const selectedPlane = planesModels.find((plane) => plane.id === selectedId) || PlaneModel();
    console.log(selectedPlane);
    onChange(selectedPlane);
  };
  useEffect(() => onChange(planesModels[0] || PlaneModel()), []);
  return <select onChange={changeHandler}>
    {planesModels.map((planeModel: PlaneModelType) => <option
      key={planeModel.id}
      value={planeModel.id}>
      {planeModel.name}
    </option>)}
  </select>;
};

export default PlaneModelSelector;
