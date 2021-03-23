import React, { useState, useEffect } from 'react';
import { Row, Col } from 'reactstrap';

import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import AppointmentCard from '../../../components/cards/prescriptionCard';
import { database } from '../../../helpers/Firebase';
import moment from 'moment';
import { useSelector } from 'react-redux';

const Prescriptions = () => {
  const authUser = useSelector((state) => state.authUser);
  const [prescriptions, setPrescriptions] = useState(null);
  useEffect(() => {
    database
      .ref('prescriptions')
      .orderByChild('patient')
      .equalTo(localStorage.getItem('user_id'))
      .once('value')
      .then((snapshot) =>
        setPrescriptions(snapshot.val() ? Object.values(snapshot.val()) : [])
      );
  }, [authUser.user]);

  const noPrescriptions = () => (
    <div className="noAppo">
      <img
        src="/assets/img/logo-white.png"
        alt="logo"
        style={{ maxWidth: '300px' }}
      />

      <h2>You don’t have any prescriptions yet.</h2>
    </div>
  );

  return (
    <>
      <Row>
        <Colxx xxs="12" className="mb-4">
          <Row>
            <Col lg="8" sm="8">
              <h3 className=" mt-2">Prescriptions</h3>
            </Col>
          </Row>
          <Separator className="mb-5" />
          <div className="appointments mb-4 ">
            {prescriptions && prescriptions.length
              ? prescriptions.map((p) => (
                  <AppointmentCard
                    zero={moment
                      .unix(p.date)
                      .format('dddd, MMMM Do YYYY, h:mm')}
                    one="Dr. Dona Simone"
                    two="Lloyds Pharmacy"
                    three="Dr. Dona Simone"
                    four="VIEW PRESCRIPTION"
                    pr="privremeno"
                    notes={p.notes}
                  />
                ))
              : noPrescriptions()}
          </div>
        </Colxx>
      </Row>
    </>
  );
};

export default Prescriptions;
