/* eslint-disable react/button-has-type */
import React from 'react';
import Datepicker from 'react-datepicker';
import { Link } from 'react-router-dom';

import Select from 'react-select';

import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';

import ChooseDoctor from '../../components/cards/chooseDoctor';
import 'react-datepicker/dist/react-datepicker.css';
import { database } from '../../helpers/Firebase';

class BookingForm extends React.Component {
  constructor() {
    super();

    this.state = {
      sidebarOpen: false,
      service: null,
      type: null,
      date: '',
      location: null,
      showModal: false,
      showModalAlert: false,

      doctor: '',
      doctorSpec: '',
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
    if (JSON.parse(localStorage.getItem('bookingState'))) {
      const { service, type, location } = JSON.parse(
        localStorage.getItem('bookingState')
      );
      if ((service, type, location)) {
        this.setState({ service, type, location_: location });
      }
    }
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  _onChangeService(value) {
    this.setState({ service: value.value });
  }

  _onChangeType(value) {
    this.setState({ type: value.value });
  }

  _onChangeDoc(value) {
    this.setState({ doc: value });
  }

  _onChangeTime(value) {
    this.setState({ time: value });
  }

  _onChangeLocation(value) {
    this.setState({ location_: value.label });
  }

  componentDidUpdate() {}

  toggleModal() {
    this.setState({
      showModal: !this.state.showModal,
    });
  }

  toggleModalAlert() {
    this.setState({
      showModalAlert: !this.state.showModalAlert,
    });
  }

  handleBooking() {
    const { date, doctor, service, location_, type } = this.state;
    const ref = database.ref('/bookings');
    if (date) {
      const bookingSelfID = ref.push().key;
      const booking = {
        date: Date.parse(date) / 1000,
        doctor: doctor[0],
        service,
        location: location_,
        type,
        userID: this.props.user,
        status: 'pending',
        fullName: 'Ben Turner',
        dateOfBirth: 500256000,
        email: 'bennyturn@gmail.com',
        doctorSpec: doctor[1],
        phone: '(385)249-3097',
        address: '3400 Frontgate Dr, Greenville, NC, 27834',
      };
      booking.selfID = bookingSelfID;
      database
        .ref(`/bookings/${bookingSelfID}`)
        .set(booking)
        .then(this.toggleModal(), localStorage.removeItem('bookingState'))
        .then(this.toggleModalAlert());
    }
  }

  ftf() {
    const { service, date, type } = this.state;
    if (service !== null && date !== '' && type === '1') {
      return (
        <div className="ftf inpFlex">
          <div className="input">
            <p>Doctor</p>
            <Select
              theme={customTheme}
              placeholder="Choose Doctor"
              styles="LSelect"
              options={doc}
              autoFocus
              isSearchable
              onChange={this._onChangeDoc.bind(this)}
            />
          </div>
          <div className="input">
            <p>Available time</p>
            <Select
              theme={customTheme}
              placeholder="Choose available time"
              styles="LSelect"
              options={time}
              autoFocus
              isSearchable
              onChange={this._onChangeTime.bind(this)}
            />
          </div>
          <div className="input">
            <p>Book here</p>
            <div className="">
              <button
                className="positive"
                // onClick={this.click()}
              >
                BOOK
              </button>
            </div>
          </div>
        </div>
      );
    }
    if (service !== null && date !== '' && type === '2') {
      return (
        <>
          <div className="ftf inpFlex">
            <div className="input">
              <p>Health Care Professional</p>
              <Select
                theme={customTheme}
                placeholder="Choose Doctor"
                styles="LSelect"
                options={doc}
                autoFocus
                isSearchable
                onChange={this._onChangeDoc.bind(this)}
              />
            </div>
            <div className="input">
              <p>Location</p>
              <Select
                theme={customTheme}
                placeholder="Choose available location"
                styles="LSelect"
                options={loc}
                autoFocus
                isSearchable
                onChange={this._onChangeTime.bind(this)}
              />
            </div>
            <div className="input">
              <p>Available time</p>
              <Select
                theme={customTheme}
                placeholder="Choose available time"
                styles="LSelect"
                options={time}
                autoFocus
                isSearchable
                onChange={this._onChangeTime.bind(this)}
              />
            </div>
          </div>
          <div className="LBookButton">
            <button
              className="positive"
              // onClick={this.click()}
            >
              BOOK
            </button>
          </div>
        </>
      );
    }
  }

  bttt() {
    const { service, type, location_ } = this.state;
    if (service != null && type != null && location_ != null) {
      if (this.props.authUser) {
        return (
          <div className="LBookButton">
            <button className="positive" onClick={this.toggleModal}>
              BOOK
            </button>
          </div>
        );
      }

      localStorage.setItem(
        'bookingState',
        JSON.stringify({ service, type, location: location_ })
      );
      return (
        <div className="LBookButton">
          <Link
            to={{
              pathname: '/user/login',
              state: {
                service,
                type,
                location_,
              },
            }}
          >
            <button className="positive">Login</button>
          </Link>
        </div>
      );
    }
  }

  // click() {
  //   ftf();
  // }

  render() {
    return (
      <div className="LHeroBook">
        <div className="LBookCont">
          <div className="inpFlex">
            <div className="input">
              <p>Service</p>
              <Select
                theme={customTheme}
                placeholder="Choose service"
                styles="LSelect"
                options={need}
                autoFocus
                isSearchable
                value={need.filter((n) => n.value === this.state.service)}
                onChange={this._onChangeService.bind(this)}
              />
            </div>
            {/* <div className="input">
              <p>Pick a date</p>
              <input
                className="date-inp"
                type="date"
                onChange={(event) =>
                  this.setState({ date: event.target.value })
                }
              />
            </div> */}
            <div className="input">
              <p>Location</p>
              <Select
                theme={customTheme}
                placeholder="Choose available location"
                styles="LSelect"
                options={loc}
                autoFocus
                isSearchable
                value={loc.filter((n) => n.label === this.state.location_)}
                onChange={this._onChangeLocation.bind(this)}
              />
            </div>

            <div className="input">
              <p>Type</p>
              <Select
                theme={customTheme}
                placeholder="Choose type"
                styles="LSelect"
                options={or}
                autoFocus
                isSearchable
                value={or.filter((n) => n.value === this.state.type)}
                onChange={this._onChangeType.bind(this)}
              />
            </div>
          </div>

          {this.bttt()}
        </div>
        <Modal
          size="lg"
          isOpen={this.state.showModal}
          toggle={this.toggleModal}
        >
          <ModalHeader>
            {this.state.doctor
              ? `Choosed: ${this.state.doctor}`
              : 'Choose a Healthcare professional'}
          </ModalHeader>
          <ModalBody>
            <ChooseDoctor
              doctor={this.state.doctor}
              pic="/assets/img/doctorFemale.jpg"
              dl="/assets/img/drivers.jpg"
              zero="Dr. Yasmin Karsan"
              one="Pharmacist                              "
              two="077 5946 1330"
              three="Nottingham"
              four="DETAILS"
              email="matthew@gmail.com"
              price1="65"
              price2="55"
              setDoctor={(doctor) => this.setState({ doctor })}
            />
            {/* <ChooseDoctor
              doctor={this.state.doctor}
              pic="/assets/img/doctor.png"
              dl="/assets/img/drivers.jpg"
              zero="Dr. Dona Simone"
              one="Cardiologist                              "
              two="077 5946 1330"
              three="76  Vicar Lane"
              four="DETAILS"
              email="matthew@gmail.com"
              price1="65"
              price2="55"
              setDoctor={(doctor) => this.setState({ doctor })}
            /> */}
            {this.state.doctor && (
              <div style={{ width: 200 }}>
                <Datepicker
                  selected={this.state.date}
                  onChange={(date) => this.setState({ date })}
                  placeholderText="Choose date and time"
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  timeCaption="time"
                />
              </div>
            )}
          </ModalBody>
          <ModalFooter>
            <button className="positive" onClick={() => this.handleBooking()}>
              BOOK
            </button>
          </ModalFooter>
        </Modal>
        <Modal
          size="sm"
          isOpen={this.state.showModalAlert}
          toggle={this.toggleModalAlert}
        >
          <ModalBody>
            <h1 className="mb-4" style={{ textAlign: 'center' }}>
              Booking successful!
            </h1>
            <Link to="/app/appointments">
              <button className="positive w100">PROCEED TO DASHBOARD</button>
            </Link>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const need = [
  { value: '1', label: 'Pharmacist' },
  { value: '2', label: 'Covid-19 vaccine' },
];
const or = [
  { value: '1', label: 'Virtual consultations' },
  { value: '2', label: 'Face to face' },
];
const doc = [
  { value: '1', label: 'John Doe' },
  { value: '2', label: 'Samantha smith' },
];
const time = [
  { value: '1', label: '11:00' },
  { value: '2', label: '12:00' },
  { value: '3', label: '13:00' },
  { value: '4', label: '16:00' },
  { value: '5', label: '17:00' },
  { value: '6', label: '18:00' },
];

const loc = [{ value: '1', label: 'Nottingham' }];

function customTheme(theme) {
  return {
    ...theme,
    colors: {
      ...theme.colors,
      primary: 'rgba(0, 0, 0, 0.1)',
      primary25: 'rgba(0, 0, 0, 0.1)',
      neutral50: '#000',
      neutral80: '#000',
      neutral90: '#000',
    },
  };
}

export default BookingForm;
