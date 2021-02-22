import Flex from '@src/components/styled/Flex';

import { Filter } from './styles';

type Props = {
    options: {
        value: string;
        label: string;
    }[];
    value: string;
    onChange: (label: string) => void;
};

const ProductsFilter: React.FC<Props> = ({ options, value, onChange }) => {
    const onClick = (e: React.MouseEvent<HTMLElement>) => {
        if ((e.target as HTMLElement).nodeName !== 'LI') return;
        e.preventDefault();

        const clickedValue = (e.target as HTMLLIElement).id;
        if (options.find(({ value }) => value === clickedValue)) {
            onChange(clickedValue);
        }
    };

    return (
        <Flex as="ul" onClick={onClick}>
            {options.map((option) => (
                <Filter
                    as="li"
                    key={option.value}
                    id={option.value}
                    isSelected={option.value === value ? true : undefined}
                >
                    {option.label}
                </Filter>
            ))}
        </Flex>
    );
};

export default ProductsFilter;
