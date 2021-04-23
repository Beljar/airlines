import React from 'react';
import PlaneModelType from '../../types/planeModelType';

type PlaneModelViewProps = {
  plane: PlaneModelType,
}

const PlaneModelView: React.FC<PlaneModelViewProps> = ({ plane }: PlaneModelViewProps) => <React.Fragment>
  <div>Name: {plane.name}</div>
  <div>Passanger capacity: {plane.passCapacity}</div>
  <div>Speed: {plane.speed}</div>
  <div>Price: {plane.price}</div>
  <div>Range: {plane.range}</div>
  <div>Fuel per occupied seat: {plane.fuelPerSeat}</div>
</React.Fragment>;

export default PlaneModelView;
