import { Suspense } from "react";
import LinearLoader from "components/LinearLoader";
const LazyLoader = (Component) => (props) => {
  return (
    <Suspense fallback={<LinearLoader />}>
      <Component {...props} />
    </Suspense>
  );
};

export default LazyLoader;
