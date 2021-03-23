import React from 'react';
import { Row } from 'reactstrap';
import IntlMessages from '../../../helpers/IntlMessages';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import IconCard from '../../../components/cards/IconCard';
import GlideComponent from '../../../components/carousel/GlideComponent';

const Dashboard = ({ match }) => (
  <>
    {/* <Row>
      <Colxx xxs="12">
        <Breadcrumb heading="menu.start" match={match} />
        <Separator className="mb-5" />
      </Colxx>
    </Row> */}
    <Row>
      <Colxx xxs="12" className="mb-4">
        <h3>
          {/* <IntlMessages id="menu.dashboard" /> */}
          Dashboard
        </h3>
        <Separator className="mb-5" />
        <div className="dashMain">
          <div className="dashMainLeft">
            <div className="dashLeft">
              <IconCard
                value="46"
                title="Patients"
                icon="iconsminds-address-book-2"
              />
              <IconCard
                value="76"
                title="Appointments"
                icon="iconsminds-calendar-4"
              />
              <IconCard
                value="37"
                title="Video Consultations"
                icon="iconsminds-webcam"
              />
            </div>
            <div className="dashContainer mb-4"></div>
          </div>
          <div className="dashRight mb-4">
            <div className="appointmentComp">
              <h3>Recent Appointments</h3>
              <p>Patient Marie K. booked with Dr. Kruger</p>
              <p>Patient Marie K. booked with Dr. Kruger</p>
              <p>Patient Marie K. booked with Dr. Kruger</p>
              <p>Patient Marie K. booked with Dr. Kruger</p>
              <p>Patient Marie K. booked with Dr. Kruger</p>
            </div>
          </div>
        </div>
      </Colxx>
    </Row>
  </>
);
export default Dashboard;
