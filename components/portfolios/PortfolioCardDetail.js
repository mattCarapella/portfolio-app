import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import moment from 'moment';

class PortfolioCardDetail extends React.Component {
  
  render() {
    const { portfolio, isOpen, toggle } = this.props;
    return (
      <div>
        <Modal isOpen={isOpen} toggle={toggle}>
          <ModalHeader toggle={toggle} className='modal-header'>{portfolio.title}</ModalHeader>
          <ModalBody>
            <p><b>Description: </b>{portfolio.description}</p> 
            <p><b>Technologies Used: </b>{portfolio.languages}</p>
            <p><b>URL: </b>{portfolio.url}</p>
            <p><b>Github: </b>{portfolio.github_link}</p>
         
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle}>Back</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default PortfolioCardDetail;