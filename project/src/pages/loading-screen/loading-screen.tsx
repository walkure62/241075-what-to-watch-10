import { CSSProperties, useState } from 'react';
import DotLoader from 'react-spinners/ClipLoader';

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'rgb(170, 80, 0)',
  position: 'absolute',
  top: '50%'
};

function LoadingScreen(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [color, setColor] = useState('rgb(190, 100, 0)');
  return (
    <DotLoader color={color} loading={loading} cssOverride={override} size={150} />
  );
}

export default LoadingScreen;
