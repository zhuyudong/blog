module.exports.withLazyLoading = function withLazyLoading(getComponent, Spinner = null) {
  return class LazyLoadingWarpper extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        Component:null
      }
    }

    componentWillMount() {
      const { onLoadingStart, onLoadingEnd, onError } = this.props;
      onLoadingStart();
      getComponent()
        .then(esModule => {
          this.setState({
            Component: esModule.default
          })
        })
        .catch(err => {
          onError(err, this.props);
        })
    }

    render() {
      const { Component } = this.state;
      if (!Component) return Spinner;
      return <Component {...this.props} />
    }
  }
}

// 使用
import { withLazyLoading } from './lib';
import { Loading } from 'Loadings';

export default withLazyLoading(
  () => {
    return import('../../containers/ConCard.js')
  }
, Loading());