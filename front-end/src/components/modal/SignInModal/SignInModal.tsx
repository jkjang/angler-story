// @flow

import * as React from 'react';
import i18n from 'i18n';
import ModalWrapper from 'components/common/ModalWrapper';
import SignInForm from 'components/form/SignInForm';
import './SignInModal.scss';

interface Props {
  open: boolean;
}

interface State {
  user_name: string;
  password: string;
  sending: boolean;
}

class SignInModal extends React.Component<Props, State> {
  form: SignInForm;

  state = {
    user_name: '',
    password: '',
    sending: false
  };

  // input chage event
  handleInputChange = (e: React.FormEvent) => {
    // const value = ((e.target) as any).value;
    // const name = ((e.target) as any).name;
    // this.setState({
    //   name: value
    // });
  };

  // login logic performs
  doLogin = async () => {
    const { user_name, password } = this.state;
    const { form } = this;
    if (!user_name || user_name.trim().length === 0) {
      alert('이름을 입력해주세요.');
      form.focusEmailInput();
      this.setState({
        sending: false
      });
      return;
    }
    if (!password || password.trim().length === 0) {
      alert('비밀번호를 입력해주세요.');
      form.focusPwdInput();
      this.setState({
        sending: false
      });
      return;
    }

    try {
    } catch (e) {
      console.log(e);
    }
  };

  // signin
  onLogin = (e: React.FormEvent) => {
    e.preventDefault();
    this.setState({
      sending: true
    });
    this.doLogin();
  };

  // signup modal show
  signUpModalShow = () => {};

  // password modal show
  pwdResetModalShow = () => {};

  // input enter key press event
  onEnterKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      this.setState({
        sending: true
      });
      this.doLogin();
    }
  };

  // signin modal close
  onModalClose = () => {};

  render() {
    const {
      onLogin,
      handleInputChange,
      onEnterKeyPress,
      onModalClose,
      signUpModalShow,
      pwdResetModalShow
    } = this;
    const { open } = this.props;
    const { user_name, password, sending } = this.state;

    return (
      <ModalWrapper
        className="SignInModal"
        open={open}
        onModalClose={onModalClose}
      >
        <div className="modal">
          <div className="modal-content">
            <div className="title">{i18n.t('signInModalTitle.label')}</div>
            <SignInForm
              handleInputChange={handleInputChange}
              onLogin={onLogin}
              signUpModalShow={signUpModalShow}
              pwdResetModalShow={pwdResetModalShow}
              onEnterKeyPress={onEnterKeyPress}
              user_name={user_name}
              password={password}
              sending={sending}
              ref={(instance: any) => {
                this.form = instance;
              }}
            />
          </div>
        </div>
      </ModalWrapper>
    );
  }
}

export default SignInModal;

// export default connect(
//   ({ modal }: AllState) => ({
//     open: modal.signInModal.open,
//   }),
//   () => ({}),
// )(withRouter(SignInModal));
