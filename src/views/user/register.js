import React, { useState, useContext } from 'react';
import {
  Row,
  Card,
  CardTitle,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

// import { registerUser } from '../../redux/actions';

import { AuthContext } from '../../components/auth/AuthContext';

import IntlMessages from '../../helpers/IntlMessages';
import { Colxx } from '../../components/common/CustomBootstrap';

import { createNotification } from '../../components/alert/NotificationExamples';

const Register = ({ history }) => {
  const { signUp, authError } = useContext(AuthContext);
  // const { signIn, authErrorLogin } = useContext(AuthContext);

  const [error, setError] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [date, setDate] = useState('');
  const [phone, setPhone] = useState('');

  const handleClick = (event) => {
    event.preventDefault();
    if (
      email === '' ||
      name === '' ||
      address === '' ||
      password === '' ||
      date === '' ||
      phone === ''
    ) {
      //setError('Please fill all the fields.');
      createNotification(
        'error',
        'filled',
        'Error',
        'Please fill all the fields.'
      );
    } else {
      setError('');
      signUp(email, password, {
        fullName: name,
        email: email,
        dateOfBirth: Date.parse(date) / 1000,
        address: address,
        phone: phone,
      });

      // history.push('/user/login');
      createNotification(
        'primary',
        'filled',
        'Congratulations',
        'You signed in successfully!'
      );
    }
  };

  // const onUserRegister = () => {
  //   if (email !== '' && password !== '') {
  //   }
  //   // call registerUserAction()
  // };

  return (
    <Row className="h-100">
      <Colxx xxs="12" md="10" className="mx-auto my-auto rounded">
        <Card className="auth-card">
          <div className="position-relative image-side ">
            <p className="text-white h2">WELCOME TO PEACHY HEALTHCARE</p>
            <p className="white mb-0">
              "The better way to book healthcare"
              <br />
              Please use this form to register.
            </p>
          </div>
          <div className="form-side">
            <NavLink to="/" className="white">
              <span className="logo-single" />
            </NavLink>
            <CardTitle className="mb-4">
              <IntlMessages id="user.register" />
            </CardTitle>
            <Form>
              <FormGroup className="form-group has-float-label  mb-4">
                <Label>
                  <IntlMessages id="user.fullname" />
                </Label>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="form-group has-float-label  mb-4">
                <Label>
                  <IntlMessages id="user.email" />
                </Label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="form-group has-float-label  mb-4">
                <Label>Address</Label>
                <Input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="form-group has-float-label  mb-4">
                <Label>Phone</Label>
                <Input
                  type="number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </FormGroup>

              <FormGroup className="form-group has-float-label  mb-4">
                <Label>Date Of Birth</Label>
                <Input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
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
                  <IntlMessages id="user.password" />
                </Label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormGroup>
              <div style={{ textAlign: 'center', color: 'red' }}>
                <p>{authError + error}</p>
              </div>

              <div className="d-flex justify-content-end align-items-center">
                <Button
                  // color="primary"
                  className=" positive"
                  size="lg"
                  onClick={(e) => handleClick(e)}
                >
                  <IntlMessages id="user.register-button" />
                </Button>
              </div>
              <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <NavLink to="/user/login">
                  <p>
                    Already have an account?
                    <span style={{ color: '#1abc9c' }}> Log in</span>
                  </p>
                </NavLink>
              </div>
            </Form>
          </div>
        </Card>
      </Colxx>
    </Row>
  );
};
// const mapStateToProps = ({ authUser }) => {
//   const { user, loading } = authUser;
//   return { user, loading };
// };

export default Register;
