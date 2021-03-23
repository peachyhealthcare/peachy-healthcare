import React from 'react';
import { NavLink } from 'react-router-dom';
import SideMenu from 'react-sidebar';
import Select from 'react-select';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import GlideComponent from '../../components/carousel/GlideComponent';
import IconCard from '../../components/cards/IconCard';
import Sidebar from './sidebar/sidebar';
import BookingForm from './bookingForm';
import { logoutUser } from '../../redux/actions';
import { Modal, ModalBody } from 'reactstrap';

class Landing extends React.Component {
  constructor() {
    super();

    this.state = {
      sidebarOpen: false,
      service: null,
      type: null,
      location: null,
      date: '',
      showModal: false,
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      showModal: !this.state.showModal,
    });
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  _onChangeService(value) {
    console.log(value.value);
    this.setState({ service: value.value });
  }

  _onChangeType(value) {
    console.log(value.value);
    this.setState({ type: value.value });
  }

  _onChangeDoc(value) {
    console.log(value.value);
    this.setState({ doc: value });
  }

  _onChangeTime(value) {
    console.log(value.value);
    this.setState({ time: value });
  }

  componentDidUpdate() {
    console.log(this.state.date);
    console.log(this.state.service);
    console.log(this.state.type);
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

  // click() {
  //   ftf();
  // }

  render() {
    // const handleLogout = () => {
    //   this.props.logoutUserAction();
    // };
    const handleLogout = () => {
      this.props.logoutUserAction(this.props.history);
    };

    return (
      <div className="landing">
        <SideMenu
          sidebar={<Sidebar />}
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          styles={{ sidebar: { background: 'white', height: '100%' } }}
        >
          <div className="LandingBackWrap">
            <div className="LNav">
              <img
                className="big"
                src="/assets/img/logo-white.png"
                alt="logo"
              />
              <img
                className="small"
                src="/assets/img/logo-mobile.png"
                alt="logo"
              />
              <div className="LNavResp">
                <img
                  onClick={() => this.onSetSidebarOpen(true)}
                  src="/assets/img/menu.svg"
                  alt="menu button"
                />
              </div>
              <div className="LNavigation">
                {this.props.authUser && !this.props.authUser.user && (
                  <>
                    <NavLink
                      className="Llink"
                      to="/user/login"
                      activeClassName="LLinkSelected"
                    >
                      LOGIN
                    </NavLink>
                    <NavLink
                      to="/user/register"
                      className="Llink"
                      activeClassName="LLinkSelected"
                    >
                      REGISTER
                    </NavLink>
                  </>
                )}
                {this.props.authUser && this.props.authUser.user && (
                  <>
                    <NavLink
                      to="/app/appointments"
                      className="Llink"
                      activeClassName="LLinkSelected"
                    >
                      DASHBOARD
                    </NavLink>
                    <button
                      className="positive"
                      onClick={() => this.props.logoutUserAction()}
                    >
                      Sign out
                    </button>
                  </>
                )}
              </div>
            </div>
            <div className="LHero LWrapper">
              <div className="LHeroIn">
                <div className="LLeft">
                  <div>
                    {' '}
                    <h1>
                      Welcome to <br /> Peachy Healthcare!
                    </h1>
                    <p className="mb-4">"The better way to book healthcare"</p>
                  </div>
                  <h2>Book Now</h2>
                </div>
                <div className="LRight">
                  <img src="/assets/img/doctors.png" alt="hero" />
                </div>
              </div>
              <div className="LHeroBook LWrapper">
                <BookingForm
                  user={localStorage.getItem('user_id')}
                  authUser={this.props.authUser.user}
                />
              </div>
            </div>
          </div>
          <div className="LGlide LWrapper">
            <GlideComponent>
              <IconCard
                // value="46"
                title="Track your bookings and book your appointments"
                icon="iconsminds-address-book-2"
              />
              <IconCard
                // value="46"
                title="Video consultations with your doctor"
                icon="iconsminds-webcam"
              />
              <IconCard
                // value="46"
                title="Online Stripe payment"
                icon="iconsminds-mail-money"
              />
              <IconCard
                title="Mobile/tablet friendly application"
                icon="iconsminds-smartphone-4"
              />
            </GlideComponent>
          </div>
          <div className="LMain LWrapper">
            <h2>About Peachy Healthcare</h2>
            <div className="LFeatures">
              <div className="LLeft">
                <img src="/assets/img/appoFeat.png" alt="hero" />
              </div>
              <div className="LRight">
                <h3>Appointments and video consultations</h3>
                <p className="mb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset.
                </p>
              </div>
            </div>
            <h2>Sign up to our newsletter</h2>
            <div className="LFeatures">
              <div className="newsletter w100">
                <input className="w100" type="email" placeholder="email" />
                <button className="positive w100">Sign up</button>
              </div>
            </div>

            <div className="counters">
              <div className="counter">
                <div className="num">
                  <p>1451</p>
                </div>
                <h4>Number of appointments</h4>
              </div>
              <div className="counter">
                <div className="num">
                  <p>156</p>
                </div>
                <h4>Health care professionals</h4>
              </div>
            </div>
            <div className="LNews LWrapper">
              <h1>Like what you see?</h1>
              <button className="positive">Register</button>
            </div>
          </div>
          <div className="LFooter">
            <img src="/assets/img/logo-white.png" alt="logo" />
            <p>2020 © PeachyHelthcare</p>
          </div>
        </SideMenu>
        <Modal
          size="lg"
          isOpen={this.state.showModal}
          toggle={this.toggleModal}
        >
          <ModalBody>
            <h3 className="mb-3" style={{ textAlign: 'center' }}>
              Are you sure you want to sign out?
            </h3>
            <button className="negative mb-3" onClick={() => handleLogout()}>
              SIGN OUT
            </button>
            <button className="positive " onClick={() => this.toggleModal()}>
              CANCEL
            </button>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

// const need = [
//   { value: '1', label: 'Pharmacist' },
//   { value: '2', label: 'Mental Health' },
//   { value: '3', label: 'Cardiologist' },
//   { value: '4', label: 'Neurologist' },
// ];
// const or = [
//   { value: '1', label: 'Virtual consultations' },
//   { value: '2', label: 'Face to face' },
// ];
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

const loc = [];

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
  connect(mapStateToProps, { logoutUserAction: logoutUser })(Landing)
);
