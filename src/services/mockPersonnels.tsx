import React from 'react';
import {personnel} from '~/types/components/Personnel';
import MedicationsIcon from '~/assets/image/svg/medications-icon.svg';
import DrugAllergyIcon from '~/assets/image/svg/drug-allergy-icon.svg';
import PersonalMedicineIcon from '~/assets/image/svg/personal-medicine-icon.svg';

export const personnels: personnel[] = [
  {
    icon: <MedicationsIcon width={48} height={48} />,
    title: 'โรคประจำตัว',
    text: 'โรคประจำตัวบันทึกโดยบุคลากร',
  },
  {
    icon: <DrugAllergyIcon width={48} height={48} />,
    title: 'ประวัติแพ้ยา',
    text: 'ประวัติแพ้ยาบันทึกโดยบุคลากร',
  },
  {
    icon: <PersonalMedicineIcon width={48} height={48} />,
    title: 'ยาที่ใช้ประจำ',
    text: 'ยาที่ใช้ประจำบันทึกโดยบุคลากร',
  },
];
