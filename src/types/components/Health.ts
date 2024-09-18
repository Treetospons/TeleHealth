import {ReactNode} from 'react';

type data = {
  value: string;
  unit: string;
};

export type healthMetric = {
  id: number;
  icon: ReactNode;
  title: string;
  data: data;
  date: string;
};
