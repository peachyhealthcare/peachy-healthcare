import React from 'react';
import { Link } from 'react-router-dom';

const UserCardDetail = ({ fullName, match }) => {
  return (
    <div className="docListComp">
      <div className="left">
        <div className="dlcImage">
          <img src="/assets/img/doctor.png" alt="Doctor" />
        </div>
        <p>Dr. Lina Matthew</p>
      </div>
      <div className="middle">
        <p>Cardiologist</p>
        <p>+44 123 123 123</p>
        <p>London, UK</p>
      </div>
      <div className="right">
        <img src="/assets/img/iconX.png" alt="x" />
        <Link to={`/app/doctors/request`}>
          <button className="positive">APPROVE</button>
        </Link>
      </div>
    </div>
  );
};

export default React.memo(UserCardDetail);
