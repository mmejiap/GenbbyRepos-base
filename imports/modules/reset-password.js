/* eslint-disable no-undef */

import { browserHistory } from 'react-router';
import { Accounts } from 'meteor/accounts-base';
import { Bert } from 'meteor/themeteorchef:bert';
import './validation.js';

let component;
let token;

const handleReset = () => {
  const password = document.querySelector('[name="newPassword"]').value;
  Accounts.resetPassword(token, password, (error) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      browserHistory.push('/');
      Bert.alert('Contraseña reseteada', 'success');
    }
  });
};

const validate = () => {
  $(component.resetPasswordForm).validate({
    rules: {
      newPassword: {
        required: true,
        minlength: 6,
      },
      repeatNewPassword: {
        required: true,
        minlength: 6,
        equalTo: '[name="newPassword"]',
      },
    },
    messages: {
      newPassword: {
        required: 'Ingrese su nueva contraseña, porfavor',
        minlength: 'Use mas de 6 carcateres, porfavor',
      },
      repeatNewPassword: {
        required: 'Repetir nuevamente su contraseña',
        equalTo: 'Error!.. sus contraseñas no coinciden... \nIntentelo nuevamente',
      },
    },
    submitHandler() { handleReset(); },
  });
};

export default function handleResetPassword(options) {
  component = options.component;
  token = options.token;
  validate();
}
