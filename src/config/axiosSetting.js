/**
 * @author Seok Kyun. Choi. - Syaku
 * @since 2019. 3. 3.
 */
import axios from 'axios';
import Qs from 'qs';

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// axios.defaults.withCredentials = true;
axios.defaults.paramsSerializer = params =>
  Qs.stringify(params, { arrayFormat: 'repeat' });
