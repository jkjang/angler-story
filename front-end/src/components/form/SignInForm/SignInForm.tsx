import * as React from 'react';

import Spinner from 'components/common/Spinner';
import * as classNames from 'classnames';
// import * as styles from './SignInForm.scss';

const cx = classNames.bind('./SignInForm.scss');

interface Props {
  handleInputChange(e: React.FormEvent): void;
  onLogin(e: React.FormEvent): void;
  onEnterKeyPress(e: React.KeyboardEvent): void;
  signUpModalShow(): void;
  pwdResetModalShow(): void;
  user_name: string;
  password: string;
  sending: boolean;
}

class SignInForm extends React.Component<Props, {}> {
  emailInput: { current: null | HTMLInputElement } = React.createRef();
  pwdInput: { current: null | HTMLInputElement } = React.createRef();

  // email input focus
  focusEmailInput() {
    const { emailInput }: any = this;
    emailInput.focus();
  }

  // pwd input focus
  focusPwdInput() {
    const { pwdInput }: any = this;
    pwdInput.focus();
  }

  render() {
    const {
      handleInputChange,
      onLogin,
      onEnterKeyPress,
      user_name,
      password,
      sending,
      signUpModalShow,
      pwdResetModalShow
    } = this.props;
    return (
      <React.Fragment>
        <form className="SignInForm" onSubmit={onLogin}>
          <div className={cx('input-with-button', { sending })}>
            <div>
              <div className="label">Username</div>
              <input
                type="text"
                name="user_name"
                placeholder="Username"
                value={user_name}
                onChange={handleInputChange}
                disabled={sending}
                ref={(input: any) => {
                  this.emailInput = input;
                }}
                onKeyPress={onEnterKeyPress}
                autoFocus={true}
              />
            </div>
            <div>
              <div className="label">Password</div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={handleInputChange}
                disabled={sending}
                ref={(input: any) => {
                  this.pwdInput = input;
                }}
                onKeyPress={onEnterKeyPress}
              />
            </div>
          </div>
          <div className="button-area">
            <button type="submit" className="button" disabled={sending}>
              {sending ? <Spinner size={'2rem'} /> : 'login'}
            </button>
          </div>
        </form>
        <div className="modal-footer">
          <a className="link left" onClick={pwdResetModalShow}>
            Password reset
          </a>
          <a className="link right" onClick={signUpModalShow}>
            Sign up now
          </a>
        </div>
      </React.Fragment>
    );
  }
}

export default SignInForm;
