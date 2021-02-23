import { useContext, useState } from 'react';
import { useToasts } from 'react-toast-notifications';

import { AddMorePointsAmount, addMorePoints } from '@src/api/post';
import Flex from '@src/components/styled/Flex';
import Label from '@src/components/styled/Label';
import { UserContext } from '@src/context/UserContext';

import { PointsAskerItem, StyledPointsAsker } from './styles';

const options: AddMorePointsAmount[] = [1000, 5000, 7500];

const PointsAsker: React.FC = () => {
    const { addToast } = useToasts();
    const { addPoints } = useContext(UserContext);
    const [asking, setAsking] = useState(false);

    const getMorePoints = (number: AddMorePointsAmount) => {
        setAsking(true);
        addToast('Asking for more points', { appearance: 'info' });
        addMorePoints(number)
            .then(() => {
                addPoints(number);
                addToast('The points were added successfully to your account', {
                    appearance: 'success'
                });
            })
            .catch((e: Error) => {
                console.error(e);
                addToast(
                    "We're sorry, something went wrong while depositing the points to your account",
                    { appearance: 'success' }
                );
            });
    };

    const onClick = (e: React.MouseEvent<HTMLElement>) => {
        if (asking) {
            addToast('Wait till the current asking process ends', {
                appearance: 'warning'
            });
        }

        if ((e.target as HTMLElement).nodeName !== 'LI') return;
        e.preventDefault();

        const value = parseInt(
            (e.target as HTMLButtonElement).attributes.getNamedItem(
                'data-value'
            )?.value || '',
            10
        );
        if (!value) return;

        if (options.includes(value as AddMorePointsAmount)) {
            getMorePoints(value as AddMorePointsAmount);
        }
    };

    return (
        <StyledPointsAsker onClick={onClick}>
            <Label>Ask for more points (for testing purposes)</Label>
            <Flex xs={{ column: true }} sm={{ row: true }} as="ol">
                {options.map((number) => {
                    return (
                        <PointsAskerItem
                            data-value={number}
                            onKeyPress={(e) =>
                                (e.target as HTMLLIElement).click()
                            }
                            key={number}
                            tabIndex={0}
                        >
                            {number}
                        </PointsAskerItem>
                    );
                })}
            </Flex>
        </StyledPointsAsker>
    );
};

export default PointsAsker;
