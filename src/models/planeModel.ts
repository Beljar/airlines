import { nanoid } from 'nanoid';
import PlaneType from '../types/planeType';

const Plane: (modelId: string) => PlaneType = (modelId) => ({
  id: nanoid(),
  modelId,
  mileage: 0,
});

export default Plane;
