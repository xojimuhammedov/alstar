import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import UzbekImage from '@/assets/uzbek.png';
import RussianImage from '@/assets/russian.png';
import EnglishImage from '@/assets/english.png';
import Image from 'next/image';
import { Box, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';

function Language() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const { i18n } = useTranslation();
  const initialLanguage =
    typeof window !== 'undefined' ? localStorage.getItem('language') || UzbekImage : 'ru';
  const [selectedLanguage, setSelectedLanguage] = useState(initialLanguage);

  const onChangeLanguage = (value) => {
    i18n.changeLanguage(value);
    setSelectedLanguage(value);
    toggleMenu();
  };

  const languageImage =
    selectedLanguage === 'uz'
      ? UzbekImage
      : selectedLanguage === 'ru'
        ? RussianImage
        : EnglishImage;

  return (
    <>
      <Menu isLazy>
        <MenuButton>
          <Image className={'language-image'} src={languageImage} alt="Language" />
        </MenuButton>
        <MenuList ml={'-7px'} zIndex="999" {...css.menuItem}>
          <MenuItem>
            <Box onClick={() => onChangeLanguage('uz')}>
              <Image className={'language-image'} src={UzbekImage} alt="Uzbek" />
            </Box>
          </MenuItem>
          <MenuItem>
            <Box onClick={() => onChangeLanguage('ru')}>
              <Image className={'language-image'} src={RussianImage} alt="Russian" />
            </Box>
          </MenuItem>
          <MenuItem>
            <Box onClick={() => onChangeLanguage('en')}>
              <Image className={'language-image'} src={EnglishImage} alt="English" />
            </Box>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}

export default Language;

const css = {
  menuItem: {
    minWidth: '35px',
  }
};
