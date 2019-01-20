import Loadable from "react-loadable";

const LoadableComponent = Loadable({
  loader: () => import("./index"),
  loading: () => null
});

export default LoadableComponent;
