import { CSSProperties, useState } from 'react';
import DotLoader from 'react-spinners/DotLoader';

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  marginTop: '200px'

};

function LoadingScreen(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [color, setColor] = useState('rgb(220, 100, 0)');
  return (
    <DotLoader color={color} loading={loading} cssOverride={override} size={150} />
  );
}

export default LoadingScreen;
