import PlaneModelType from '../../types/planeModelType';

const planesModels: PlaneModelType[] = [
  {
    id: '1',
    name: 'Boeing-747',
    manufacturer: 'boeing',
    passCapacity: 366,
    speed: 900,
    price: 250000,
    range: 8560,
    fuelPerSeat: 3.34,
  },
  {
    id: '2',
    name: 'Airbus-A350',
    manufacturer: 'airbus',
    passCapacity: 350,
    speed: 900,
    price: 317000,
    range: 8100,
    fuelPerSeat: 2.39,
  },
  {
    id: '3',
    name: 'Airbus-A320',
    manufacturer: 'airbus',
    passCapacity: 330,
    speed: 1100,
    price: 305000,
    range: 8100,
    fuelPerSeat: 2.29,
  },
];

export default planesModels;
