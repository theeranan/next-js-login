import 'antd/dist/antd.css';
import '../styles/vars.css';
import '../styles/global.css';
import Layouts from 'components/Layouts';
import { withApollo } from '../libs/apollo';
function MyApp({ Component, pageProps }) {
  return (
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
  );
}
export default withApollo({ ssr: true })(MyApp);
