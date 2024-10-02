import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

function Main() {
  const { t } = useTranslation();
  return (
    <Box p={'36px 0'}>
      <Box className="container-mix">
        <Heading {...css.title}>{t('Shape your professional future')}</Heading>
        <Text {...css.text}>
          {t(
            'Are you looking for a new professional challenge with optimal entry and promotion opportunities in a global company? Shape your professional future with ALSTAR™. Take a look at our current job offers and discover what speaks for us as an employer.'
          )}
        </Text>
      </Box>
    </Box>
  );
}

export default Main;

const css = {
  title: {
    fontSize: '34px',
    lineHeight: '39px',
    fontWeight: '200',
    color: '#111',
    marginBottom: '24px'
  },
  text: {
    fontSize: '16px',
    lineHeight: '25px',
    color: '#111',
    marginBottom: '12px'
  }
};
