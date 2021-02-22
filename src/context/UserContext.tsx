import { createContext, useEffect, useState } from 'react';

import { getMyUser } from '@src/api/get';
import { User } from '@src/api/types';

export const UserContext = createContext<{
    user?: User;
    storeUser?: (user: User) => void;
    subtractPoints: (number: number) => void;
    fetchUser: () => void;
}>({
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    subtractPoints: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    fetchUser: () => {}
});

const UserContextProvider: React.FC = (props) => {
    const [user, setUser] = useState<User | undefined>();
    const storeUser = (user: User): void => setUser(user);

    const subtractPoints = (number: number) => {
        if (user && user.points >= number) {
            setUser({ ...user, points: user.points - number });
        }
    };

    const fetchUser = () => {
        getMyUser()
            .then(({ data }) => storeUser(data))
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <UserContext.Provider
            value={{ user, storeUser, subtractPoints, fetchUser }}
        >
            {props.children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
