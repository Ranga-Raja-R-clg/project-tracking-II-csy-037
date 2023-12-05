import { Component } from "react";

const withLogger = (WrapperComponent) => {
  return class extends Component {
    componentDidMount() {
      console.log(`Component ${WrapperComponent.name} is mounted`);
    }
    render() {
      return <WrapperComponent {...this.props} />;
    }
  };
};
class MyComponent extends Component {
  render() {
    return <div>Hello World!</div>;
  }
}
const EnhancedComponent = withLogger(MyComponent);
const Hoc = () => {
  return (
    <div>
      <h1>Higher Order Component Examples</h1>
      <EnhancedComponent />
    </div>
  );
};

export default Hoc;
