import React, { useState } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import AppoCardCompDetail from './AppoCardCompDetail';

// import { database } from '../../helpers/Firebase';

const AppointmentCard = ({
  zero,
  one,
  two,
  three,
  four,
  status,
  pr,
  doctor,
  doctorSpec,
  location,
  // selfID,
  address,
  phone,
  type,
}) => {
  const [modalLarge, setModalLarge] = useState(false);

  // const formatDate = new Date(zero * 1000);

  // const timeDate = formatDate.toLocaleString('en-US', {
  //   month: 'long',
  //   day: 'numeric',
  //   year: 'numeric',
  // });

  // const types = () => {
  //   if (two == 1) {
  //     return <p>VIDEO</p>;
  //   } else if (two == 2) {
  //     return <p>FTF</p>;
  //   }
  // };

  return (
    <div className={`docListComp ${pr}`} onClick={() => setModalLarge(true)}>
      <div className="left">
        <p>{zero}</p>
      </div>
      <div className="middle">
        <p>{one}</p>
        <p>{two}</p>
        <p>£{three}</p>
      </div>
      <div className="right">
        {/* <Link to={`/app/doctors/request`}>
          <button className="positive">{four}</button>
        </Link> */}
        <p>{four}</p>
      </div>
      <p>{status}</p>
      <Modal
        isOpen={modalLarge}
        size="lg"
        toggle={() => setModalLarge(!modalLarge)}
      >
        <ModalHeader>{zero}</ModalHeader>
        <ModalBody>
          <AppoCardCompDetail
            location={location}
            typePrice={three}
            time={zero}
            docName={doctor}
            docSpec={doctorSpec}
            type={type}
            address={address}
            docPhone={phone}
          />
        </ModalBody>
        {/* <ModalFooter>
          <button
            className="positive"
            onClick={() =>
              database
                .ref(`bookings/${selfID}`)
                .update({ status: 'accepted' }) && setModalLarge(!modalLarge)
            }
          >
            ACCEPT
          </button>

          <button
            className="positive"
            onClick={() =>
              database.ref(`bookings/${selfID}`).update({ status: 'denied' })
            }
          >
            DENY
          </button>
        </ModalFooter> */}
      </Modal>
    </div>
  );
};

export default React.memo(AppointmentCard);
