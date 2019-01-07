import React from 'react';
import Page from '../Page'

import { Grid, Row, Col, Image} from 'react-bootstrap';
import data from '../Data'

class Standee3Page extends React.Component {
  buidContent() {
    let content = [];
    content.push(
      <Grid key="grid">
      <Row className="show-grid" className="standee">
          <Col sm={12} md={12}>
          <div className="namebitster">
          <b>STANDEE</b> <br></br>
        <span>llustration, graphic</span> <br></br>
        <span>Công ty Kami Doll</span>
         </div>
          </Col>
        </Row>
        
        <Row className="show-grid">
          <Col sm={6} md={6}>
          <div className="standee3a">
          <Image src="image/standee3a.jpg" responsive/>
          </div>
          </Col>
          <Col sm={6} md={6}>
          <div className="standeedemo3">
          <Image src="image/standee3a.png" responsive/>
          </div>
          </Col>
        </Row>
      </Grid>
    )

        return content;
  }
  render() {
    return (
      <div>
        <Page footerData={data.getAboutMeFooter()} _content={this.buidContent()}></Page>
      </div>
    );
  }
}
export default Standee3Page;