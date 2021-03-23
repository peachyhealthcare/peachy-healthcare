import React from 'react';
// import { NavLink } from 'react-router-dom';
import SideMenu from 'react-sidebar';
import Select from 'react-select';
// import { number, string } from 'prop-types';
import GlideComponent from '../../components/carousel/GlideComponent';
import IconCard from '../../components/cards/IconCard';
import Sidebar from './sidebar/sidebar';

class Landing extends React.Component {
  constructor() {
    super();

    this.state = {
      sidebarOpen: false,
      service: null,
      type: null,
      date: '',
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
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
                <a
                  className="Llink"
                  href="https://peachy-healthcare.web.app"
                  activeClassName="LLinkSelected"
                >
                  LOGIN
                </a>
                <a
                  className="Llink"
                  href="https://peachy-healthcare.web.app/user/practitionerRegister"
                  activeClassName="LLinkSelected"
                >
                  REGISTER
                </a>
              </div>
            </div>
            <div className="LHero LWrapper  mb-5">
              <div className="LHeroIn">
                <div className="LLeft">
                  <div>
                    {' '}
                    <h1>
                      Welcome to <br /> peachy helthcare
                    </h1>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor inc Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit, sed do eiusmod tempor <br />
                      <br />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor inc. <br />
                      <br />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                  </div>

                  <div>
                    {/* <button className="but mb-4">BOOK NOW</button> */}
                    <div className="btFlex">
                      {/* <button className="but mb-4 mr-2">LOGIN</button> */}
                      <button className="but mb-4">
                        <a href='   href="https://peachy-healthcare.web.app/user/practitionerRegister"'>
                          REGISTER
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="LRight">
                  <img src="/assets/img/heroDoc.png" alt="hero" />
                </div>
              </div>
              {/* <div className="LHeroBook LWrapper">
                <h2>Interested in working with us</h2>
                <button className="negative">REGISTER</button>
              </div> */}
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
                title="Video consultations with patients"
                icon="iconsminds-webcam"
              />
              <IconCard
                // value="46"
                title="Rent ordinations for face to face appointments"
                icon="iconsminds-clinic"
              />
              <IconCard
                // value="46"
                title="Online Stripe payment"
                icon="iconsminds-mail-money"
              />
              <IconCard
                title="Mobile/tablet friendly platform"
                icon="iconsminds-smartphone-4"
              />
            </GlideComponent>
          </div>
          <div className="LMain LWrapper">
            <h2>What do we offer</h2>
            <div className="LFeatures">
              <div className="LLeft">
                <img src="/assets/img/appoFeat.png" alt="AppointmentsPic" />
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
            <div className="LFeaturesRev">
              <div className="LLeft">
                <img src="/assets/img/hero.png" alt="hero" />
              </div>
              <div className="LRight">
                <h3>For all platforms</h3>
                <p className="mb-4">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like).
                </p>
              </div>
            </div>
            <div className="LFeatures">
              <div className="LLeft">
                <img src="/assets/img/designStripe.png" alt="hero" />
              </div>
              <div className="LRight">
                <h3>Straight forward design and stripe paiment</h3>
                <p className="mb-4">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generators on the Internet tend to repeat predefined chunks as
                  necessary.
                </p>
              </div>
            </div>
            <div className="counters">
              <div className="counter">
                <div className="num">
                  <p>1451</p>
                </div>
                <h4>Users</h4>
              </div>
              <div className="counter">
                <div className="num">
                  <p>156</p>
                </div>
                <h4>Doctors</h4>
              </div>
            </div>
            <div className="LNews LWrapper">
              <h1>Interested in working with us?</h1>
              <button className="positive">Register</button>
            </div>
          </div>
          <div className="LFooter">
            <img src="/assets/img/logo-white.png" alt="logo" />
            <p>2020 © PeachyHelthcare</p>
          </div>
        </SideMenu>
      </div>
    );
  }
}

// const need = [
//   { value: '1', label: 'Pharmacist' },
//   { value: '2', label: 'Meltal Health' },
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

export default Landing;
