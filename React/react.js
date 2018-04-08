// Fragments
class Columns extends React.Component {
  render() {
    return (
      <React.Fragment>
        <td>Hello</td>
        <td>world</td>
      </React.Fragment>
    )
    // 等效于
    return (
      <>
        <td>Hello</td>
        <td>world</td>
      </>
    )
  }
}
function Glossary(props) {
  return (
    <dl>
      {
        props.items.map(item => (
          // 必须要有key
          <React.Fragment key={item.id}>
            <dt>{item.term}</dt>
            <dt>{item.description}</dt>
          </React.Fragment>
        ))
      }
    </dl>
  )
}

// 与第三方库协同
class SomePlugin extends React.Component {
  componentDidMount() {
    this.$el = $(this.el);
    this.$el.somePlugin();
  }
  componentWillUnmount() {
    this.$el.somePlugin('destroy');
  }
  render() {
    // 空的div不会触发重新render
    return <div res={el => this.el = el} />;
  }
}
