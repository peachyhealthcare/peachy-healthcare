import React, { useState } from 'react';
import { Collapse, CardBody, Badge } from 'reactstrap';

import SingleLightbox from '../pages/SingleLightbox';

const ChooseDoctor = ({
  // fullName,
  // match,
  zero,
  one,
  two,
  three,
  four,
  pr,
  pic,
  email,
  price1,
  price2,
  birth,
  // dl,
  setDoctor,
  doctor,
}) => {
  const [collapse, setCollapse] = useState(false);
  return (
    <div
      className="prescriptionCollapse"
      style={{ border: doctor[0] === zero && '1px solid #9ee8ce' }}
    >
      <div className={`docListComp ${pr}`}>
        <div className="left">
          <div className="dlcImage">
            <img src={pic} alt="Doctor" />
          </div>
          <p>{zero}</p>
        </div>
        <div className="middle">
          <p>{one}</p>
          {/* <p>{two}</p>
          <p>{three}</p> */}
        </div>
        <div className="right">
          <button
            className="negative"
            onClick={() => {
              setDoctor([zero, one]);
            }}
          >
            Choose
          </button>
        </div>
        
        <div className="right">
          {/* <Link to={`/app/doctors/request`}> */}
          <button className="positive" onClick={() => setCollapse(!collapse)}>
            {four}
          </button>
          {/* </Link> */}
        </div>
      </div>
      <Collapse isOpen={collapse}>
        {/* <div className="position-absolute card-top-buttons">
                <Button outline color="white" className="icon-button">
                  <i className="simple-icon-pencil" />
                </Button>
              </div> */}
        <SingleLightbox thumb={pic} large={pic} className="card-img-top mt-2" />

        <CardBody>
          <p className="text-muted text-small mb-2">Bio</p>
          <p className="mb-3">
            Dr. Lina Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book.
          </p>

          <div>
            <p className="text-muted text-small mb-2">Full name</p>
            <p className="mb-3">{zero}</p>
            <p className="text-muted text-small mb-2">Category</p>
            <p className="mb-3">
              <Badge color="outline-secondary" className="mb-1 mr-1" pill>
                {one}
              </Badge>
            </p>
            <p className="text-muted text-small mb-2">Email</p>
            <p className="mb-3">{email}</p>
            <p className="text-muted text-small mb-2">Phone</p>
            <p className="mb-3">{two}</p>

            <p className="text-muted text-small mb-2">Appointment Rating</p>
            <p className="mb-3">{price1} GBP/hour</p>
            <p className="text-muted text-small mb-2">Base practice</p>
            <p className="mb-3">Lorem ipsum{}</p>
          </div>
          {/* <div></div> */}

          <p className="text-muted text-small mb-2">Location</p>
          <p className="mb-3">{three}</p>
        </CardBody>

        <button
          className="negative"
          onClick={() => {
            setDoctor([zero, one]);
            setCollapse(!collapse);
          }}
        >
          CHOOSE DOCTOR
        </button>
      </Collapse>
    </div>
  );
};

export default React.memo(ChooseDoctor);
