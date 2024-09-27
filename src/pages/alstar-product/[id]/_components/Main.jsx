import { Box, Heading, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { useTranslation } from 'react-i18next';

const productData = [
  {
    id: 1,
    title_uz: "Yong'in xavfsizligi talablari yuqori bo'lgan qurilish loyihalari uchun: ALSTAR™ A2",
    title_ru:
      'Для строительных проектов с самыми высокими требованиями пожарной безопасности: ALSTAR™ A2',
    title_en: 'For building projects with the highest fire safety requirements: ALSTAR™ A2',
    text_uz:
      "ALSTAR™ A2 - bu 0,5 mm qalinlikdagi ikkita alyuminiy qoplama va yonmaydigan mineral yadrodan (3 mm) iborat kompozit panel. Yadro deyarli 100% yonmaydigan komponentlardan iborat va 1 MJ / kg dan kam kaloriya qiymatiga ega. ALSTAR™ A2 hozirda DIN EN 13501-1 boʻyicha yongʻin xavfsizligi A2 eng yuqori sinfiga kiritilgan mamlakatdagi yagona kompozit panellardan biridir. Buning ma'nosi: yong'in sodir bo'lganda tutun chiqarmaydigan yonmaydigan material. Bu metall yoki boshqa qoplamali jabhalar uchun materiallarga ekologik jihatdan qulay alternativ. Panelning yuzi odatda LUMIFLON™ - shaffof floropolimer qatroni (FEVE) yoki HDP (Yuqori mustahkam polimer) bilan qoplangan. Ikkala qoplama ham yuqori rang barqarorligini, ob-havo sharoitlaridan, ultrabinafsha nurlanishidan, korroziyadan va kislotalardan ishonchli himoyani ta'minlaydi, shuningdek, bo'rga samarali qarshilik ko'rsatadi. ALSTAR™ NC/A1 kompozit panellari ayniqsa yong'in xavfsizligi talablari yuqori bo'lgan yoki yonmaydigan fasad materiallaridan foydalanish belgilangan qurilish loyihalari uchun tavsiya etiladi, masalan, ko'p qavatli binolar yoki maktablar, shifoxonalar, qariyalar uylari, savdo markazlari va boshqalar.",
    text_ru:
      'ALSTAR™ A2– это композитная панель, состоящая из двух алюминиевых покрывающих листов толщиной 0,5 мм и негорючего минерального сердечника (3 мм). Сердечник почти на 100% состоит из не горючих компонентов и имеет теплотворную способность менее 1 МДж/кг. В настоящее время ALSTAR™ A2 является одной из единственной композитной панелью в стране, классифицированной по высшему классу пожарной безопасности A2 в соответствии с DIN EN 13501-1. Это означает: негорючий материал, также не выделяющий дым в случае пожара. Это экологически чистая альтернатива материалам для фасадов из металла или других облицовок. Лицевая сторона панели обычно покрыта LUMIFLON™ – прозрачной фторполимерной смолой (FEVE) – или HDP (высокопрочный полимер). Оба покрытия гарантируют высокую стабильность цвета, надежную защиту от воздействия погодных условий, ультрафиолетового излучения, коррозии и кислот, а также эффективно противостоят образованию мела. Композитные панели ALSTAR™ NC/A1 особенно рекомендуются для строительных проектов с самыми высокими требованиями пожарной безопасности или там, где предписано использование негорючих фасадных материалов, например, высотные здания или специальные здания, такие как школы, больницы, дома престарелых, торговые центры и т. д.',
    text_en:
      'ALSTAR™ A2 is a composite panel consisting of two 0.5 mm thick aluminium cover sheets and a non-combustible mineral core (3 mm). The core consists of almost 100% non-combustible components and has a calorific value of less than 1 MJ/kg. ALSTAR™ A2 is currently one of the only composite panels in the country classified in the highest fire safety class A2 according to DIN EN 13501-1. This means: non-combustible material that also does not emit smoke in the event of a fire. It is an environmentally friendly alternative to metal facade materials or other cladding. The front side of the panel is usually coated with LUMIFLON™ – a transparent fluoropolymer resin (FEVE) – or HDP (high-performance polymer). Both coatings guarantee high colour stability, reliable protection against weather conditions, UV radiation, corrosion and acids, and effectively resist chalking. ALSTAR™ NC/A1 composite panels are particularly recommended for construction projects with the highest fire safety requirements or where the use of non-combustible façade materials is prescribed, such as high-rise buildings or special buildings such as schools, hospitals, nursing homes, shopping centres, etc. '
  },
  {
    id: 2,
    title_uz: '',
    title_ru: '',
    title_en: '',
    text_uz:
      'Maksimal yong‘inga qarshi himoya uchun birinchi tanlov: ALSTAR™ A2 va ALSTAR B1 – bu 0,5 mm qalinlikdagi ikkita alyuminiy qatlamdan va 3 mm qalinlikdagi yonmaydigan (O‘zbekistonda: cheklangan yonuvchan) mineral polimer yadrodan tashkil topgan kompozit paneldir. Ushbu panel yong‘inga qarshi himoya bo‘yicha A2 – s1, d0 klassi talablari asosida ishlab chiqarilgan va qurilish organlari tomonidan tasdiqlangan. Panellar kengligi 2,44 metrgacha etkazib berilishi mumkin, bu butun dunyo bo‘ylab noyob xususiyatdir. Old tomoni odatda LUMIFLONTM yoki HDP rangli qoplama bilan qoplangan. Har ikkala qoplama yuqori rang barqarorligini, ob-havoga, UV nurlanishiga, korroziyaga va kislotalarga qarshi ishonchli himoyani kafolatlaydi, shuningdek, rangning o‘chishiga samarali qarshilik ko‘rsatadi. ALSTAR™ A2 kompozit panellari yuqori yong‘in xavfsizligi talablariga javob beradigan osma, ventilyatsiyalangan fasad loyihalari uchun tavsiya etiladi. Maxsus talablar nafaqat alohida qurilish materiallariga, balki butun tizimga, jumladan, quyi konstruksiya, izolyatsiya, biriktiruvchi elementlarga va boshqalarga qo‘yiladi. O‘zbekistonda BS 8414-1 standarti bo‘yicha keng ko‘lamli yong‘in sinovlari o‘tkazildi. ALSTAR kompozit panellari sinovlardan muvaffaqiyatli o‘tdi va BR 135 yuqori talablariga mosligini tasdiqladi. Bu 11 xil test konfiguratsiyalarida tasdiqlandi, bu esa ALSTAR A2 kompozit panellarining fasad tizimlaridagi yuqori sifatini va yong‘in xavfsizligini isbotlaydi.',
    text_en:
      'The First Choice for Maximum Fire Protection: ALSTAR™ A2 and ALSTAR B1 are composite panels consisting of two 0.5 mm thick aluminium sheets with a non-combustible (in Uzbekistan: limited combustible) mineral polymer core (3 mm). They meet the high requirements of fire classification A2 – s1, d0 and are approved by building authorities. The panels can be supplied in widths up to 2.44 meters, which is unique worldwide. The front side is usually coated with a colored layer of LUMIFLONTM or HDP. Both coatings guarantee high color stability, reliable protection against weather conditions, UV radiation, corrosion, and acids, as well as effective resistance to fading. ALSTAR™ A2 composite panels are particularly recommended for ventilated façade projects that must meet the highest fire safety requirements. Special requirements are placed not only on the individual building materials but also on the entire system, including substructure, insulation, connecting elements, and more. In Uzbekistan, large-scale fire tests were carried out in accordance with BS 8414-1. ALSTAR composite panels successfully passed the tests and confirmed compliance with the high standards of BR 135. This was confirmed in 11 different test configurations, proving the high quality and fire safety of ALSTAR A2 composite panels as part of the façade system.',
    text_ru:
      'Первый выбор для максимальной противопожарной защиты: ALSTAR™ A2 и  ALSTAR В1 – это композитная панель, состоящая из двух алюминиевых листов толщиной 0,5 мм с негорючим (в Узбекистане: ограниченно горючим) минеральным полимерным сердечником (3 мм). Она соответствует высоким требованиям пожарного класса A2 – s1, d0 и одобрена строительными властями. Панели могут поставляться шириной до 2,44 метров, что уникально во всем мире. Фронтальная сторона обычно покрыта цветным слоем LUMIFLONTM или HDP. Оба покрытия гарантируют высокую цветовую стабильность, надежную защиту от погодных воздействий, УФ-излучения, коррозии и кислот, а также эффективно противостоят выцветанию. Композитные панели ALSTARTM A2 особенно рекомендуются для навесных, вентилируемых фасадных проектов, которые должны соответствовать самым высоким требованиям пожарной безопасности. Специальные требования предъявляются не только к отдельным строительным материалам, но и ко всей системе, включая подконструкцию, изоляцию, соединительные элементы и т.д. В Узбекистане были проведены масштабные пожарные испытания в соответствии с BS 8414-1. Композитные панели ALSTAR успешно прошли испытания и подтвердили соответствие высоким требованиям BR 135. Это было подтверждено в 11 различных тестовых конфигурациях, что доказывает высокое качество и пожарную безопасность композитных панелей ALSTAR A2 в составе фасадной системы.'
  },
  {
    id: 3,
    title_uz: 'Oson ishlov beriladi, ammo olovga chidamli: ALSTAR™/fr',
    title_ru: 'Легко обрабатываемый, но огнестойкий: ALSTAR™/fr',
    title_en: 'Easy to process, but flame-retardant: ALSTAR™/fr',
    text_uz:
      'ALSTARTM/fr – bu ikkita 0,5 mm qalinlikdagi alyuminiy qatlam va olovga chidamli mineral polimer yadrodan (2,0 dan 5,0 mm gacha) tashkil topgan kompozit paneldir. Panel yong‘in xavfsizligi B - s1, d0 sinfiga mos keladi va qurilish hokimiyatlari tomonidan tasdiqlangan.ALSTARTM/fr kompozit panellari oson shakllanishi, oddiy asboblar bilan ishlanishi, ranglarning xilma-xilligi, ob-havoga chidamliligi va engilligi bilan ajralib turadi. ALSTARTM panelining old tomonida odatda LUMIFLONTM yoki HPD rang qoplamasi mavjud bo‘ladi. Ikkala qoplama ham ranglarning barqarorligini, ob-havo sharoitlari, UV nurlanishi, korroziya va kislotalardan himoya qilishni ta’minlaydi va samarali ravishda rang o‘zgarishiga qarshi turadi.',
    text_ru:
      'ALSTARTM/fr – это композитная панель, состоящая из двух алюминиевых листов толщиной 0,5 мм с огнестойким минеральным полимерным сердечником (от 2,0 до 5,0 мм). Панель соответствует требованиям пожарного класса B - s1, d0 и одобрена строительными властями. Композитные панели ALSTARTM/fr отличаются легкостью в обработке стандартными инструментами, разнообразием цветов, устойчивостью к погодным условиям и малым весом. Фронтальная поверхность панели ALSTARTM обычно покрыта цветным слоем LUMIFLONTM или HPD. Оба покрытия обеспечивают высокую цветовую стабильность, надежную защиту от погодных воздействий, УФ-излучения, коррозии и кислот, а также эффективно предотвращают выцветание.',
    text_en:
      'ALSTARTM/fr is a composite panel consisting of two 0.5mm thick aluminium cover sheets with a flame-retardant mineral polymer core (2.0 to 5.0mm). It meets the requirements of fire class B - s1, d0 and is approved by the building authorities.ALSTARTM/fr composite panels excel in easy formability, processing with standard tools, variety of colours, weather resistance, and low weight. The front surface of the ALSTARTM aluminium composite panel is usually colour-coated with LUMIFLONTM or HPD. Both coatings guarantee high colour stability, provide reliable protection against weathering, UV radiation, corrosion, and acids, and are efficiently resistant to chalking.'
  }
];

function Main() {
  const router = useRouter().query.id;
  const { i18n } = useTranslation();
  const data = productData?.find((item) => item.id == router);
  return (
    <Box p={'36px 0'}>
      <Box className="container-mix">
        <Heading {...css.title}>{data[`title_${i18n?.language}`]}</Heading>
        <Text {...css.text}>{data[`text_${i18n?.language}`]}</Text>
      </Box>
    </Box>
  );
}

export default Main;

const css = {
  title: {
    fontSize: '32px',
    lineHeight: '40px',
    fontWeight: '400',
    color: '#111'
  },
  text: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: '200',
    color: '#111',
    margin: '12px 0'
  }
};
