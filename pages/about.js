import React, { Component } from 'react';
import BasePage from '../components/BasePage';
import BaseLayout from '../components/layouts/BaseLayout'; 
import SocialLinks from '../components/shared/SocialLinks';
import { Row, Col } from 'reactstrap';

class About extends Component {
	render() {
		return (
			<BaseLayout title='Matt Carapella | About' {...this.props.auth}>
        <BasePage className="about-page">
          <Row className="mt-5">
            <Col md="6">
              <div className="left-side">
                <h1 className="title fadein">Hello, Welcome</h1>
                <h4 className="subtitle fadein">To About Page</h4>
                <p className="subsubTitle fadein">Feel free to read short description about me.</p>
              </div>
	          </Col> 
            <Col md="6">
              <div className="fadein">
                <p>Sed vulputate odio ut enim blandit volutpat maecenas. Congue quisque egestas diam in arcu. Turpis massa tincidunt dui ut ornare lectus sit amet est. Laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Pellentesque nec nam aliquam sem et tortor.</p>
                <p>Vitae tempus quam pellentesque nec nam aliquam sem et tortor. At risus viverra adipiscing at. Magna etiam tempor orci eu lobortis. Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. In aliquam sem fringilla ut morbi tincidunt. Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Sit amet consectetur adipiscing elit pellentesque. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Penatibus et magnis dis parturient montes nascetur.</p>
                <p>Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Laoreet id donec ultrices tincidunt. Pellentesque habitant morbi tristique senectus et netus. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing. Tristique senectus et netus et malesuada fames ac turpis egestas. Pretium fusce id velit ut tortor. A erat nam at lectus urna duis convallis convallis tellus. Nisl vel pretium lectus quam. Viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas. Blandit libero volutpat sed cras ornare arcu dui. Nisl vel pretium lectus quam id. Nec feugiat in fermentum posuere urna. Ut etiam sit amet nisl.</p>
              </div>
              <div className='about-social-links' style={{'margin-top': '60px'}}>	
              	<SocialLinks />
              </div>
            </Col>
          </Row>
	      
        </BasePage>
      </BaseLayout>
		);
	}
}

export default About;