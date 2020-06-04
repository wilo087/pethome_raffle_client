import React from 'react';
import './Dog.scss';

const Dog: React.FC = () => (
  <div className="w7e-dog">
    <div className="perrito">
      <div className="torso">
        <div className="fur">
          <div className="spot" />
        </div>
        <div className="neck">
          <div className="fur" />
          <div className="head">
            <div className="fur">
              <div className="snout" />
            </div>
            <div className="ears">
              <div className="ear">
                <div className="fur" />
              </div>
              <div className="ear">
                <div className="fur" />
              </div>
            </div>
            <div className="eye" />
          </div>
          <div className="collar" />
        </div>
        <div className="legs">
          <div className="leg">
            <div className="fur" />
            <div className="leg-inner">
              <div className="fur" />
            </div>
          </div>
          <div className="leg">
            <div className="fur" />
            <div className="leg-inner">
              <div className="fur" />
            </div>
          </div>
          <div className="leg">
            <div className="fur" />
            <div className="leg-inner">
              <div className="fur" />
            </div>
          </div>
          <div className="leg">
            <div className="fur" />
            <div className="leg-inner">
              <div className="fur" />
            </div>
          </div>
        </div>
        <div className="tail">
          <div className="tail">
            <div className="tail">
              <div className="tail -end">
                <div className="tail">
                  <div className="tail">
                    <div className="tail">
                      <div className="tail" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Dog;
