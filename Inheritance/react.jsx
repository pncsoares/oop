import { useEffect } from "react";

const withLogging = (Component) => {
  const Wrapper = (props) => {
    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    useEffect(() => {
      console.log(`Component ${Component.name} mounted`);
    }, []);
  };

  return <Component {...props} />;
};

export default withLogging;
