/* eslint-disable react/button-has-type */
import React from 'react';
import Datepicker from 'react-datepicker';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Select from 'react-select';

import {
  Modal, 
  ModalBody, 
  ModalHeader, 
  ModalFooter,
  Row,
  Card,
  CardTitle,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';

import IntlMessages from '../helpers/IntlMessages';

import { createNotification } from '../components/alert/NotificationExamples';

import ChooseDoctor from '../components/cards/chooseDoctor2';
import 'react-datepicker/dist/react-datepicker.css';
import { database } from '../helpers/Firebase';

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
      showUserForm: false,
      doctor: '',
      doctorSpec: '',
      fullName: '',
      email: '',
      address: '',
      phone: '',
      dateOfBirth: null,
      sex: '',
      nhsnumber: '',
      ethnicity: '',
      pasportidnumber: '',
      error: '',
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleModalAlert = this.toggleModalAlert.bind(this);
    this.togglUserForm = this.togglUserForm.bind(this);
  }

  details() {
    const { fullName, email, address, phone, dateOfBirth, sex, nhsnumber, ethnicity, pasportidnumber } = this.state;
    return (
      <Form>
        <FormGroup className="form-group has-float-label  mb-4">
          <Label>
            <IntlMessages id="user.fullname" />
          </Label>
          <Input
            type="text"
            value={fullName}
            onChange={(e) => this._onChangeName(e.target.value)}
          />
        </FormGroup>

        <FormGroup className="form-group has-float-label  mb-4">
          <Label>
            Sex
          </Label>
          <Input
            type="text"
            value={sex}
            onChange={(e) => this._onChangeSex(e.target.value)}
          />
        </FormGroup>

        <FormGroup className="form-group has-float-label  mb-4">
          <Label>
            NHS Number
          </Label>
          <Input
            type="text"
            value={nhsnumber}
            onChange={(e) => this._onChangeNHSNumber(e.target.value)}
          />
        </FormGroup>

        <FormGroup className="form-group has-float-label  mb-4">
          <Label>
            Ethnicity
          </Label>
          <Input
            type="text"
            value={ethnicity}
            onChange={(e) => this._onChangeEthnicity(e.target.value)}
          />
        </FormGroup>

        <FormGroup className="form-group has-float-label  mb-4">
          <Label>
            <IntlMessages id="user.email" />
          </Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => this._onChangeEmail(e.target.value)}
          />
        </FormGroup>

        <FormGroup className="form-group has-float-label  mb-4">
          <Label>Home Address</Label>
          <Input
            type="text"
            value={address}
            onChange={(e) => this._onChangeAddress(e.target.value)}
          />
        </FormGroup>

        <FormGroup className="form-group has-float-label  mb-4">
          <Label>Phone</Label>
          <Input
            type="number"
            value={phone}
            onChange={(e) => this._onChangePhone(e.target.value)}
          />
        </FormGroup>

        <FormGroup className="form-group has-float-label  mb-4">
          <Label>Date Of Birth</Label>
          <Input
            type="date"
            value={dateOfBirth}
            onChange={(e) => this._onChangeDob(e.target.value)}
          />
          {/* <Datepicker
            selected={date}
            onChange={(date) => setDate(date)}
            placeholderText="Choose date and time"
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="time"
          /> */}
        </FormGroup>

        <FormGroup className="form-group has-float-label  mb-4">
          <Label>
            Passport/ID Number
          </Label>
          <Input
            type="text"
            value={pasportidnumber}
            onChange={(e) => this._onChangepasPortIdNumber(e.target.value)}
          />
        </FormGroup>

        {/* <div className="d-flex justify-content-end align-items-center">
          <Button
            // color="primary"
            className=" positive"
            size="lg"
            onClick={(e) => this.handleClick(e)}
          >
            <IntlMessages id="user.register-button" />
          </Button>
        </div> */}
      </Form>
    );
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

  _onChangeName(value) {
    this.setState({ fullName: value });
  }

  _onChangeEmail(value) {
    this.setState({ email: value });
  }

  _onChangeAddress(value) {
    this.setState({ address: value });
  }

  _onChangePhone(value) {
    this.setState({ phone: value });
  }

  _onChangeDob(value) {
    this.setState({ dateOfBirth: value });
  }

  _onChangeSex(value) {
    this.setState({ sex: value });
  }

  _onChangeNHSNumber(value) {
    this.setState({ nhsnumber: value });
  }

  _onChangeEthnicity(value) {
    this.setState({ ethnicity: value });
  }

  _onChangepasPortIdNumber(value) {
    this.setState({ pasportidnumber: value });
  }

  _onChangeError(value) {
    this.setState({ error: value });
  }

  componentDidUpdate() {}

  toggleModal() {
    this.setState({
      showModal: !this.state.showModal,
    });
  }

  togglUserForm() {
    this.setState({
      showUserForm: !this.state.showUserForm,
    });
  }

  toggleModalAlert() {
    this.setState({
      showModalAlert: !this.state.showModalAlert,
    });
  }

  switchToDetails() {
    const { date, doctor, service, location_, type } = this.state;
    if (date) {
      this.toggleModal()
      this.togglUserForm(); 
    }
  }

  handleBooking() {
    const { date, doctor, service, location_, type, fullName, email, address, phone, dateOfBirth, sex, ethnicity, pasportidnumber, nhsnumber } = this.state;
    const ref = database.ref('/bookings');
    if (
      email === '' ||
      fullName === '' ||
      address === '' ||
      dateOfBirth === null ||
      phone === '' ||
      sex === '' ||
      ethnicity === '' ||
      pasportidnumber === ''
    ) {
      //setError('Please fill all the fields.');
      createNotification(
        'error',
        'filled',
        'Error',
        'Please fill all the required fields.'
      );
    } else {
      this._onChangeError('');
      const bookingSelfID = ref.push().key;
      const booking = {
        date: Date.parse(date) / 1000,
        doctor: doctor[0],
        service,
        location: location_,
        type,
        userID: '',
        status: 'accepted',
        fullName: fullName,
        dateOfBirth: dateOfBirth,
        email: email,
        doctorSpec: doctor[1],
        phone: phone,
        address: address,
        sex,
        ethnicity,
        pasportidnumber,
        nhsnumber
      };
      booking.selfID = bookingSelfID;
      database
        .ref(`/bookings/${bookingSelfID}`)
        .set(booking)
        .then(this.togglUserForm(), localStorage.removeItem('bookingState'))
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
  }

  // click() {
  //   ftf();
  // }

  render() {
    return (
        <div className="LandingBackWrap WidgetBack">
          <div className="LHero LWrapper WidgetBack">
            <div className="LHeroBook LWrapper">
              <h1>Book Now</h1>
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
                    <button className="positive" onClick={() => this.switchToDetails()}>
                      BOOK
                    </button>
                  </ModalFooter>
                </Modal>
                <Modal
                  size="lg"
                  isOpen={this.state.showUserForm}
                  toggle={this.togglUserForm}
                >
                  <ModalHeader>
                    FILL PATIENT DETAILS
                  </ModalHeader>
                  <ModalBody>
                    {this.details()}
                  </ModalBody>
                  <ModalFooter>
                    <button className="positive" onClick={() => this.handleBooking()}>
                      Book
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
                    <button className="positive" onClick={() => this.toggleModalAlert()}>
                      Close
                    </button>
                  </ModalBody>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      
      
    );
  }
}

const need = [
  { value: '1', label: 'COVID PCR Test' },
  { value: '2', label: 'COVID Test to Release Test' },
];
const or = [
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

const mapStateToProps = ({ authUser, settings }) => {
  const { locale } = settings;
  return { authUser, locale };
};

export default injectIntl(
  connect(mapStateToProps)(BookingForm)
);
