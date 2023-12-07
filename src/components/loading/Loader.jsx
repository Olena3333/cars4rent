import { CirclesWithBar } from "react-loader-spinner";
import { StyledLoaderWrapper } from "./Loader.styled";

const Loader = () => {
  return (
    <StyledLoaderWrapper>
      <CirclesWithBar
        height="100"
        width="100"
        color="#0b033b"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        outerCircleColor=""
        innerCircleColor=""
        barColor=""
        ariaLabel="circles-with-bar-loading"
      />
    </StyledLoaderWrapper>
  );
};

export default Loader;
