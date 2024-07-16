import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface Config {
  title: string;
  prefix?: string;
  description?: string;
}

function ScreenWrapper<P extends React.PropsWithChildren<unknown>>(WrappedComponent: React.ComponentType<P>, config: Config) {
  return function ScreenProvider(props: P) {
    const { t } = useTranslation();

    return (
      <>
        <Helmet>
          <title>{config?.prefix ? `${t(config?.title)} - ${t(config?.prefix ?? t('LBL_QAEMA'))}` : t(config?.title)}</title>
          {config?.description && <meta name="description" content={t(config.description)} />}
        </Helmet>

        <WrappedComponent {...props} />
      </>
    );
  };
}

export default ScreenWrapper;
