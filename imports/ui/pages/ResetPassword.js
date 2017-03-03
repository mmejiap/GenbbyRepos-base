import React from 'react';
import { Row, Col, Alert, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import handleResetPassword from '../../modules/reset-password';

export default class ResetPassword extends React.Component {
  componentDidMount() {
    handleResetPassword({ component: this, token: this.props.params.token });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="ResetPassword">
        <Row>
          <Col xs={ 12 } sm={ 6 } md={ 4 }>
            <h4 className="page-header">Reset Password</h4>
            <Alert bsStyle="info">
             Su contraseña ah sido reestablecida, ingrese con su nueva contraseña.
            </Alert>
            <form
              ref={ form => (this.resetPasswordForm = form) }
              className="reset-password"
              onSubmit={ this.handleSubmit }
            >
              <FormGroup>
                <ControlLabel>Nueva Contraseña</ControlLabel>
                <FormControl
                  type="password"
                  ref="newPassword"
                  name="newPassword"
                  placeholder="New Password"
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Repita nuevamente la constraseña</ControlLabel>
                <FormControl
                  type="password"
                  ref="repeatNewPassword"
                  name="repeatNewPassword"
                  placeholder="Repeat New Password"
                />
              </FormGroup>
              <Button type="submit" bsStyle="success">Reset Password &amp; Login</Button>
            </form>
          </Col>
        </Row>
      </div>
    );
  }
}

ResetPassword.propTypes = {
  params: React.PropTypes.object,
};
