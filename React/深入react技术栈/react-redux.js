// 将store挂载在当前实例上
class Provider extends Component {
  // 定义了自动延组件传递的特殊props
  getChildContext() {
    return { store: this.store }
  }
  constructor(props, context) {
    super(props, context);
    this.store = props.store;
  }
  if (process.env.NODE_ENV !== 'production') {
    Provider.prototype.componentWillReceiveProps = function(nextProps) {
      const { store } = this;
      const { store: nextProps } = nextProps;
      if (store !== nextProps) {
        // 开发环境下提示用户升级
        warnAbountReceivingStore();
      }
    }
  }
  render() {
    const { children } = this.props;
    return Children.only(children);
  }
}

function connect(mapStateToProps, mapDispatchToProps, mergeProps, options= {
  pure: true,
  withRef: false
}) {
  const version = nextVersion++;
  return function wrapWithConnect(WrappedComponent) {
    class Connect extends Component {
      constructor(props, context) {
        this.version = version;
      }
      render() {
        if (withRef) {
          this.renderedElement = createElement(WrappedComponent, {
            ...this.mergeProps,
            ref: 'wrappedInstance'
          });
        } else {
          this.renderedElement = createElement(WrappedComponent, this.mergeProps);
        }
      }
      return this.renderedElement;
    }
    return hoistStatistcis(Connect, WrappedComponent);
  }
}
// 以下函数为代码热替换提供了可能
if (process.env.NODE_ENV !== 'production') {
  Connect.prototype.componentWillReceiveProps = function componentWillUpdate() {
    // version用于追踪热重载，即每次connect执行的时候，nextVersion加1
    if (this.version === version) return;
    this.version = version;
    this.trySubscribe();
    this.clearCache();
  }
}