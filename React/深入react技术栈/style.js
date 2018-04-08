const style = {
  color: 'white',
  backgroundImage: `url(${imgUrl})`,
  // 会转成-webkit-transition
  WebkitTransition: 'all',
  // ms 是唯一小写的浏览器前缀
  msThransition: 'all'
}

// 使用classnames 库
import classNames from 'classnames';
class Buttong extends Component {
  render() {
    const btnClass = classNames({
      'btn': true,
      'btn-pressed': this.state.isPressed,
      'btn-over': !this.state.isPressed && this.state.isHovered
    });
    return <button className={btnClass}>{this.props.label}</button>
  }
}