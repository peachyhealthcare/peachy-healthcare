import React, { useState, useEffect, Suspense } from 'react';
import {
  Row,
  Card,
  CardBody,
  CardHeader,
  Nav,
  NavItem,
  TabContent,
  TabPane,
  Col,
  Modal,
  ModalBody,
} from 'reactstrap';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import moment from 'moment';
import { database } from '../../../helpers/Firebase';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import AppointmentCard from '../../../components/cards/AppointmentCard';
import BookingForm from '../../landing/bookingFormDash';

const Appointments = (authUser) => {
  const [modalBooking, setModalBooking] = useState(false);
  return (
    <>
      <Row>
        <Colxx xxs="12" className="mb-4">
          <Row>
            <Col lg="8" sm="8">
              <h3 className=" mt-2">Appointments</h3>
            </Col>
            <Col lg="4" sm="4">
              <button
                className="positive mb-2"
                onClick={() => setModalBooking(!modalBooking)}
              >
                Book Now
              </button>
            </Col>
          </Row>
          <Separator className="mb-5" />
          {TabCardExamples()}
        </Colxx>
      </Row>
      <Modal
        isOpen={modalBooking}
        size="lg"
        toggle={() => setModalBooking(!modalBooking)}
      >
        <ModalBody>
          <BookingForm
            user={localStorage.getItem('user_id')}
            authUser={authUser.user}
          />
        </ModalBody>
      </Modal>
    </>
  );
};

const TabCardExamples = () => {
  const [activeSecondTab, setActiveSecondTab] = useState('1');
  const authUser = useSelector((state) => state.authUser);
  const [bookings, setBookings] = useState(null);

  useEffect(() => {
    database
      .ref('bookings')
      .orderByChild('userID')
      .equalTo(localStorage.getItem('user_id'))
      .once('value')
      .then((snapshot) =>
        setBookings(snapshot.val() ? Object.values(snapshot.val()) : [])
      );
  }, [authUser.user]);

  const filteredPast =
    bookings &&
    bookings.filter(
      (b) =>
        b.type === '2' &&
        b.userID === localStorage.getItem('user_id') &&
        b.date < Date.now() / 1000
    );

  const filteredUpcoming =
    bookings &&
    bookings.filter(
      (b) =>
        b.type === '2' &&
        b.userID === localStorage.getItem('user_id') &&
        b.date > Date.now() / 1000
    );

  const upcomingBookings = bookings && filteredUpcoming.length;
  const pastBookings = bookings && filteredPast.length;

  const noAppointments = (type) => (
    <div className="noAppo">
      <img
        src="/assets/img/logo-white.png"
        alt="logo"
        style={{ maxWidth: '300px' }}
      />
      <h2>You don’t have any {type} yet.</h2>
      {/* <button
        className="positive"
        // onClick={() => setModalBooking(!modalBooking)}
      >
        BOOK NOW
      </button> */}
    </div>
  );

  return (
    <Row>
      <Colxx>
        <Card className="mb-4">
          <CardHeader className="pl-0 pr-0">
            <Nav tabs className=" card-header-tabs  ml-0 mr-0">
              <NavItem className="w-50 text-center">
                <NavLink
                  to="#"
                  location={{}}
                  className={classnames({
                    active: activeSecondTab === '1',
                    'nav-link': true,
                  })}
                  onClick={() => {
                    setActiveSecondTab('1');
                  }}
                >
                  Upcoming
                </NavLink>
              </NavItem>
              <NavItem className="w-50 text-center">
                <NavLink
                  to="#"
                  location={{}}
                  className={classnames({
                    active: activeSecondTab === '2',
                    'nav-link': true,
                  })}
                  onClick={() => {
                    setActiveSecondTab('2');
                  }}
                >
                  Past
                </NavLink>
              </NavItem>
            </Nav>
          </CardHeader>

          <TabContent activeTab={activeSecondTab}>
            <TabPane tabId="1">
              <Row>
                <Colxx sm="12">
                  <CardBody>
                    <div className="appointmentsTabs mb-4">
                      {upcomingBookings
                        ? filteredUpcoming.map((b) => (
                            <AppointmentCard
                              status={b.status}
                              zero={moment
                                .unix(b.date)
                                .format('dddd, MMMM Do YYYY, h:mm')}
                              one={b.doctor}
                              two={
                                need.filter(
                                  (need) => need.value === b.service
                                )[0].label
                              }
                              three="40"
                              four={b.location}
                              doctor={b.doctor}
                              doctorSpec={b.doctorSpec}
                              location={b.location}
                              address={b.address}
                              phone={b.phone}
                              type={b.type}
                            />
                          ))
                        : noAppointments('upcoming appointments')}
                    </div>
                  </CardBody>
                </Colxx>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Colxx sm="12">
                  <CardBody>
                    <div className="appointmentsTabs mb-4">
                      <Suspense fallback={<div className="loading" />}>
                        {pastBookings
                          ? filteredPast.map((b) => (
                              <AppointmentCard
                                status={b.status}
                                zero={moment
                                  .unix(b.date)
                                  .format('dddd, MMMM Do YYYY, h:mm')}
                                one={b.doctor}
                                two={
                                  need.filter(
                                    (need) => need.value === b.service
                                  )[0].label
                                }
                                three="40"
                                four={b.location}
                                doctor={b.doctor}
                                doctorSpec={b.doctorSpec}
                                location={b.location}
                                address={b.address}
                                phone={b.phone}
                                type={b.type}
                              />
                            ))
                          : noAppointments('past appointments')}
                      </Suspense>
                    </div>
                  </CardBody>
                </Colxx>
              </Row>
            </TabPane>
          </TabContent>
        </Card>
      </Colxx>
    </Row>
  );
};
const need = [
  { value: '1', label: 'Pharmacist' },
  { value: '2', label: 'Mental Health' },
  { value: '3', label: 'Cardiologist' },
  { value: '4', label: 'Neurologist' },
];
export default Appointments;
