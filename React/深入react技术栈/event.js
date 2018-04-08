// 自动绑定事件处理函数中this为当前组件
class App extends Component {
  constructor(props) {
    super(props);
    // 3
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e, arg) {
    console.log(e, arg);
  }
  // 4
  // handleClick = (e, arg) => {
  //   console.log(e, arg);
  // }
  render() {
    // 1
    return <button onClick={this.handleClick.bind(this, 'test')}>Test</button>
    // 2. 只绑定不传参
    //  return <button onClick={::this.handleClick}>Test</button>
    // 5
    // return <button onClick={() => { this.handleClick(); }>Test</button>
  }
}

// 使用原生事件
class QrCode extends Component {
  componentDidMount() {
    document.body.addEventListener('click', e => {
      if (e.target && e.target.matches('div.code')) {
        return;
      }
      this.setState({
        active: false
      });
    });
    document.querySelector('.code').addEventListener('click', e => {
      e.stopPropagation();
    });
  }
  componentWillUnmount() {
    document.body.removeEventListener('click');
    document.querySelector('.code').removeEventListener('click');
  }
  handleChange = (name, e) => {
    const { value } = e.target;
    this.setState({
      [name]: value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // 也可以用原生document.querySelector
    const { value } = this.refs.name;
  }
  render() {
    const { name, age } = this.state;
    // 非受控组件
    return (
      <form onSubmit={this.handleSubmit}>
        { /* defaultValue 仅仅会被渲染一次 */ }
        <input type="text" ref="name" defaultValue="Hangzhou" />
        {/* 为多个表单绑定同一个事件处理 */}
        <input value={name} onChange={this.handleChange.bind(this, 'name')} />
        <input value={age} onChange={this.handleChange.bind(this, 'age')} />
        <button type="submit">Submit</button>
      </form>
    )
  }
}