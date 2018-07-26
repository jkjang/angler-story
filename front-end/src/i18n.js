import i18next from 'i18next';

i18next.init({
  interpolation: {
    // React already does escaping
    escapeValue: false
  },
  lng: 'en', // 'en' | 'es'
  // Using simple hardcoded resources for simple example
  resources: {
    en: {
      translation: {
        serviceName: { label: 'Angler Story' },
        signInBtnName: { label: 'sign in' },
        startBtnName: { label: 'Get Started' },
        selectLangBtnName: { label: 'lanuage' }
      }
    },
    kr: {
      translation: {
        serviceName: { label: '낚시꾼의 이야기' },
        signInBtnName: { label: '로그인' },
        startBtnName: { label: '시작하기' },
        selectLangBtnName: { label: '언어' }
      }
    }
  }
});

export default i18next;
