import { useLocation } from "react-router";
interface locationState {
  value: string;
}

function Post(): JSX.Element {
  const location = useLocation();
  console.log(location.state);

  const { value } = location.state as locationState;

  return <div>{value}</div>;
}

export default Post;
