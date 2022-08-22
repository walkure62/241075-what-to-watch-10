import { CSSProperties, useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
};

function LoadingScreen(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [color, setColor] = useState('#ffffff');
  return (
    <ClipLoader color={color} loading={loading} cssOverride={override} size={150} />
  );
}

export default LoadingScreen;
