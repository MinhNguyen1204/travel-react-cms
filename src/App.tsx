import { useRoutes } from 'react-router-dom';
import { AppRoutes } from 'features';
import LoadingIndicator from 'shared/components/LoadingIndicator';
import NoMatch from 'shared/views/NoMatch';
import 'assets/scss/app.scss';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';
import { HomeRoutes } from 'features/Home';
function App() {
  return (
    <I18nextProvider i18n={i18n}>
      {useRoutes([
        ...AppRoutes,

        {
          path: '*',
          element: <NoMatch />,
        },
      ])}
      <LoadingIndicator />
    </I18nextProvider>
  );
}

export default App;
