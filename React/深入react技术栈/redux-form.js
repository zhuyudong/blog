import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const reducer = {
  // ...
  // 所有表单相关的reducer挂载在form下
  form: formReducer
}
const reducer = combineReducers(reducer);
const store = createStore(reducer);

import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

function validate(values) {
  if (values.name == null || values.name === '') {
    return {
      name: '请填写名称'
    }
  }
}

@reduxForm({
  form: 'my-form',
  fields: ['name', 'address', 'gender'],
  validate
})
class Form extends Component {
  // 注入触发验证、重新渲染、表单纯洁性等判断
  render() {
    const { name, address, gender } = this.props.fields;
    return (
      <form className="form">
        <input name="name" {...name} />
       { name.error && <span>{name.error}</span> } 
        <input name="address" {...address} />
        <select {...gender}>
          <option value="male" />
          <option value="female" />
        </select>
        <button type="submit">提交</button>
      </form>
    )
  }
}