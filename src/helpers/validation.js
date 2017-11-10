import store from './../store/store';

export const validateLoginForm = (dataToValidate) => {
  const errors = {
    blank: "Username can't be blank.",
    short: 'Username must have at least 3 characters.',
    long: 'Username is too long (max 20 characters).',
  };
  if (!dataToValidate && dataToValidate.length === 0) {
    store.dispatch('addError', errors.blank);
    return false;
  }
  store.dispatch('removeError', errors.blank);
  if (dataToValidate.length < 3) {
    store.dispatch('addError', errors.short);
    return false;
  }
  store.dispatch('removeError', errors.short);
  if (dataToValidate.length > 20) {
    store.dispatch('addError', errors.long);
    return false;
  }
  store.dispatch('clearErrors');
  return true;
};

// will not be dummy in the future
export const dummy = () => {

};
