import React from 'react';
import { Row } from 'reactstrap';
import IntlMessages from '../../../helpers/IntlMessages';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import UserCardComp from '../../../components/cards/UserCardComp';

const Second = ({ match }) => (
  <>
    {/* <Row>
      <Colxx xxs="12">
        <Breadcrumb heading="menu.second" match={match} />
        <Separator className="mb-5" />
      </Colxx>
    </Row> */}
    <Row>
      <Colxx xxs="12" className="mb-4">
        <h3>Doctors</h3>
        <Separator className="mb-5" />
        <div className="docContainer">
          {/* <div className="contHead">
            <p>Join Requests </p> <p>|</p> <p> Approved Doctors</p>
          </div> */}
          <UserCardComp
            match={match}
            zero="Dr. Lina Matthew"
            one="Cardiologist"
            two="+44 123 123 123"
            three="London, UK"
            four="VIEW REQUEST"
          />
          <UserCardComp
            match={match}
            zero="Dr. Lina Matthew"
            one="Cardiologist"
            two="+44 123 123 123"
            three="London, UK"
            four="VIEW REQUEST"
          />
        </div>
      </Colxx>
    </Row>
  </>
);
export default Second;
