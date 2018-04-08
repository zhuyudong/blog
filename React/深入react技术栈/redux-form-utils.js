import React, { Component } from 'react';
import { createForm, bindRedux } from 'redux-form-utils';

@createForm({
  form: 'my-form',
  fields: ['name', 'address', 'gender']
})
class Form extends Component {
  render() {
    const { name, address, gender } = this.props.fields;
    return (
      <form className="form">
        <input name="name" {...name} />
        <input name="address" {...address} />
        <select {...gender}>
          <option value="male" />
          <option value="female" />
        </select>
      </form>
    )
  }
}

const { state: formState, reducer: formReducer } = bindRedux({
  form: 'my-form',
  fields: ['name', 'address', 'gender']
});
const initialState = {
  foo: 1,
  bar: 2,
  ...formState,
}
function myReducer(state = initialState, action) {
  switch(action.type) {
    case 'MY_ACTION': {
      //
    }
    default:
      return formReducer(state.action)
  }
}
