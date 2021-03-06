import React, { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system" className="solar_system">
        <Title headline="Planetas" />
        <div className="planets">
          {planets.map((item) => (
            <PlanetCard
              planetName={ item.name }
              planetImage={ item.image }
              key={ item.name }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
