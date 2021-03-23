import React, { useState, useEffect } from 'react';

import { Colxx, Separator } from '../../../components/common/CustomBootstrap';

import { Row, Card, CardBody, Button } from 'reactstrap';

import moment from 'moment';
import { database } from '../../../helpers/Firebase';

const Profile = () => {
  const [user, setUser] = useState(null);
  // const authUser = useSelector((state) => state.authUser);

  useEffect(
    () => {
      database
        .ref(`users/${localStorage.getItem('user_id')}`)
        // .orderByChild('userID')
        // .equalTo(localStorage.getItem('user_id'))
        .once('value')
        .then((snapshot) => setUser(snapshot.val()));
    }
    // [authUser.user],
    // console.log(user && user.fullName)
  );

  return (
    <>
      {/* <Row>
      <Colxx xxs="12">
        <Breadcrumb heading="menu.second" match={match} />
        <Separator className="mb-5" />
      </Colxx>
    </Row> */}
      <Row>
        <Colxx xxs="12" className="col-left">
          <h3>
            {/* <IntlMessages id="menu.dashboard" /> */}
            Profile
          </h3>
          <Separator className="mb-5" />
          <div className="flexColl">
            <Card className="mb-4 mr-4">
              <div className="position-absolute card-top-buttons">
                <Button outline color="white" className="icon-button">
                  <i className="simple-icon-pencil" />
                </Button>
              </div>
              {/* <SingleLightbox
              thumb="/assets/img/woman.jpg"
              large="/assets/img/woman.jpg"
              className="card-img-top"
            /> */}

              <CardBody>
                {/* <p className="text-muted text-small mb-2">Bio</p>
              <p className="mb-3">
                Dr. Lina Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s
                with the release of Letraset sheets containing Lorem Ipsum
                passages, and more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum.
              </p> */}
                <div className="flexColl">
                  <div>
                    <p className="text-muted text-small mb-2">Full name</p>
                    <p className="mb-3"> {user && user.fullName}</p>
                    <p className="text-muted text-small mb-2">Date of birth</p>
                    <p className="mb-3">
                      {user &&
                        moment.unix(user.dateOfBirth).format('Do MMMM YYYY')}
                    </p>
                    {/* <p className="text-muted text-small mb-2">Category</p>
                  <p className="mb-3">
                    <Badge color="outline-secondary" className="mb-1 mr-1" pill>
                      Cardiologist
                    </Badge>
                  </p> */}

                    <p className="text-muted text-small mb-2">Email</p>
                    <p className="mb-3"> {user && user.email}</p>
                    <p className="text-muted text-small mb-2">Phone</p>
                    <p className="mb-3"> {user && user.phone}</p>
                  </div>
                  <div>
                    {/* <p className="text-muted text-small mb-2">
                    Appointment Rating
                  </p>
                  <p className="mb-3">65 GBP/hour</p>
                  <p className="text-muted text-small mb-2">
                    Video conference Rating
                  </p>
                  <p className="mb-3">50 GBP/hour</p> */}
                  </div>
                </div>
                <p className="text-muted text-small mb-2">Address</p>
                <p className="mb-3"> {user && user.address}</p>
              </CardBody>
            </Card>

            {/* <Card className="mb-4">
            <CardBody>
              <CardTitle></CardTitle>
              <GalleryDetail />
            </CardBody>
          </Card> */}
          </div>
        </Colxx>
      </Row>
    </>
  );
};
export default Profile;
