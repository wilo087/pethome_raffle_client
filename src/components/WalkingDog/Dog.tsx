import React from 'react';
import './Dog.scss';

const WalkingDog: React.FC = () => (
  <div className="app container">
    <div className="corgi">

      <div className="head">
        <div className="ear ear--r" />
        <div className="ear ear--l" />

        <div className="eye eye--left" />
        <div className="eye eye--right" />

        <div className="face">
          <div className="face__white">
            <div className=" face__orange face__orange--l" />
            <div className=" face__orange face__orange--r" />
          </div>
        </div>

        <div className="face__curve" />

        <div className="mouth">
          <div className="nose" />

          <div className="mouth__left">
            <div className="mouth__left--round" />
            <div className="mouth__left--sharp" />
          </div>

          <div className="lowerjaw">
            <div className="lips" />
            <div className="tongue test" />
          </div>

          <div className="snout" />
        </div>
      </div>

      <div className="neck__back" />
      <div className="neck__front" />

      <div className="body">
        <div className="body__chest" />
      </div>

      <div className="foot foot__left foot__front foot__1" />
      <div className="foot foot__right foot__front foot__2" />
      <div className="foot foot__left foot__back foot__3" />
      <div className="foot foot__right foot__back foot__4" />

      <div className="tail test" />
    </div>
  </div>
);

export default WalkingDog;
