import React, { useState } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

// import { Link } from 'react-router-dom';

const PrescriptionCard = ({
  fullName,
  match,
  zero,
  one,
  two,
  three,
  four,
  pr,
  notes,
}) => {
  const [modalLarge, setModalLarge] = useState(false);

  return (
    <div className={`docListComp ${pr}`}>
      <div className="left">
        <p>{zero}</p>
      </div>
      <div className="middle">
        <p>{one}</p>
        <p>{two}</p>
        {/* <p>{three}</p> */}
      </div>
      <div className="right">
        <button className="positive" onClick={() => setModalLarge(true)}>
          {four}
        </button>

        {/* <p>{four}</p> */}
      </div>
      <Modal
        isOpen={modalLarge}
        size="lg"
        toggle={() => setModalLarge(!modalLarge)}
      >
        <ModalHeader>Prescription from {one}</ModalHeader>
        <ModalBody>
          <div>
            <p className="text-muted text-small mb-2">Time and date</p>
            <p className="mb-3">{zero}</p>
            <p className="text-muted text-small mb-2">Pharmacy</p>
            <p className="mb-3">{two}</p>
            <p className="text-muted text-small mb-2">Notes</p>
            <p className="mb-3">{notes}</p>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default React.memo(PrescriptionCard);
