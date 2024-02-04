import { useState } from 'react';
import { CustomSelectContainer, CustomSelectOption, CustomSelectOptions, CustomSelectValue, MainContainer } from './CustomSelectStyles';
import arrowFilter from '../../assets/arrow-filter.svg';

interface CustomSelectProps {
  options: { label: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
}

function CustomSelect({ options, value, onChange }: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MainContainer>
      <CustomSelectContainer>

        <CustomSelectValue
          isOpen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? 'Filtrar por' : value}
          <img src={arrowFilter} alt="OpenFilter" />
        </CustomSelectValue>

        {isOpen && (

          <CustomSelectOptions>
            {options.map((option) => (

              <CustomSelectOption
                key={option.value}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
              >
                {option.label}
              </CustomSelectOption>

            ))}
          </CustomSelectOptions>

        )}

      </CustomSelectContainer>
    </MainContainer>
  )
}

export default CustomSelect