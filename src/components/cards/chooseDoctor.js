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
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
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
            <p className="text-muted text-small mb-2">Date of Birth</p>
            <p className="mb-3">01.01.2001{birth}</p>
            <p className="text-muted text-small mb-2">Email</p>
            <p className="mb-3">{email}</p>
            <p className="text-muted text-small mb-2">Phone</p>
            <p className="mb-3">{two}</p>

            <p className="text-muted text-small mb-2">Appointment Rating</p>
            <p className="mb-3">{price1} GBP/hour</p>
            <p className="text-muted text-small mb-2">
              Video conference Rating
            </p>
            <p className="mb-3">{price2} GBP/hour</p>
            <p className="text-muted text-small mb-2">Base practice</p>
            <p className="mb-3">Lorem ipsum{}</p>
            <p className="text-muted text-small mb-2">Language spoken</p>
            <p className="mb-3">English{}</p>
            <h4>Registered Body</h4>
            <p className="text-muted text-small mb-2">Name</p>
            <p className="mb-3">General Pharmaceutical Council </p>
            <p className="text-muted text-small mb-2">Number</p>
            <p className="mb-3">2080112</p>
            <p className="text-muted text-small mb-2">Renewal date</p>
            <p className="mb-3">01.01.2001{}</p>
            <h4>Courses undertaken. (if yes)</h4>
            <p className="text-muted text-small mb-2">Name of course</p>
            <p className="mb-3">Lorem ipsum{}</p>
            <p className="text-muted text-small mb-2">Institution</p>
            <p className="mb-3">Lorem ipsum{}</p>
            <p className="text-muted text-small mb-2">Date completed</p>
            <p className="mb-3">01.01.2001{}</p>
            {/* <h4>Right to work in the UK</h4> */}

            <h4>Indemnity Insurance</h4>
            <p className="text-muted text-small mb-2">Company</p>
            <p className="mb-3">Lorem ipsum{}</p>
            <p className="text-muted text-small mb-2">Renewal date</p>
            <p className="mb-3">01.01.2001{}</p>
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
