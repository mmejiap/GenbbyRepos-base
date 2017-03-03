import React from 'react';
//import { Link } from 'react-router';
import { Row, Col, Button } from 'react-bootstrap';
import DocumentsList from '../containers/DocumentsList.js';

const Documents = docs => (
    <Row>
      <Col xs={ 12 }>
        <div className="page-header clearfix">
          <h4 className="pull-left">N° Partidas</h4>
            <Button
              bsStyle="success"
              className="pull-right"
	 	onClick = {(event) => {docs.setCurrentPage(event,{page: 'newDocument'});}}
            >Crear Nueva Partida</Button>
        </div>
        <DocumentsList {...docs} /> 
      </Col>
    </Row>
  
);
/*
Documents.propTypes = {
	setCurrentPage: React.PropTypes.func,
};
*/
export default Documents;
