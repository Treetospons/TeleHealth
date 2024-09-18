import React from 'react';
import {healthMetric} from '~/types/components/Health';
import BloodPressureIcon from '~/assets/image/svg/blood-pressure-icon.svg';
import OxigenInBloodIcon from '~/assets/image/svg/oxigen-in-blood-icon.svg';
import HeartRateIcon from '~/assets/image/svg/heart-rate-icon.svg';
import TemperatureIcon from '~/assets/image/svg/temperature-icon.svg';
import BloodGroupIcon from '~/assets/image/svg/blood-group-icon.svg';
import BloodSugarIcon from '~/assets/image/svg/blood-sugar-icon.svg';

export const healthMetrics: healthMetric[] = [
  {
    id: 1,
    icon: <BloodPressureIcon width={24} height={24} />,
    title: 'ความดันโลหิต',
    data: {
      value: '00',
      unit: 'mm/Hg',
    },
    date: '22/07/2567',
  },
  {
    id: 2,
    icon: <OxigenInBloodIcon width={24} height={24} />,
    title: 'ระดับออกซิเจนในเลือด',
    data: {
      value: '00',
      unit: '%',
    },
    date: '22/07/2567',
  },
  {
    id: 3,
    icon: <HeartRateIcon width={24} height={24} />,
    title: 'อัตราการเต้นหัวใจ',
    data: {
      value: '--',
      unit: 'bpm',
    },
    date: '--/--/----',
  },
  {
    id: 4,
    icon: <TemperatureIcon width={24} height={24} />,
    title: 'อุณหภูมิร่างกาย',
    data: {
      value: '00',
      unit: '°C',
    },
    date: '22/07/2567',
  },
  {
    id: 5,
    icon: <BloodGroupIcon width={24} height={24} />,
    title: 'หมู่เลือด',
    data: {
      value: 'AB',
      unit: '',
    },
    date: '22/07/2567',
  },
  {
    id: 6,
    icon: <BloodSugarIcon width={24} height={24} />,
    title: 'ระดับน้ำตาลในเลือด',
    data: {
      value: '00',
      unit: 'มก./ดล.',
    },
    date: '22/07/2567',
  },
];
