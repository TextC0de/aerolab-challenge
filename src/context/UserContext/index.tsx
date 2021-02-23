/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useEffect, useReducer } from 'react';

import { getMyUser, getUserHistory } from '@src/api/get';

import userReducer, { UserReducerState } from './reducer';
import {
    error,
    fetching,
    success,
    updateHistory
} from './reducer/actionCreators';

export const UserContext = createContext<{
    state: UserReducerState;
    addPoints: (number: number) => void;
    subtractPoints: (number: number) => void;
    updateRedeemHistory: () => void;
}>({
    state: {
        loading: true
    },
    addPoints: () => {},
    subtractPoints: () => {},
    updateRedeemHistory: () => {}
});

const UserContextProvider: React.FC = (props) => {
    const [state, dispatch] = useReducer(userReducer, { loading: true });

    const addPoints = (number: number) => {
        if (state.user) {
            dispatch({
                type: 'UPDATE_POINTS',
                payload: state.user.points + number
            });
        }
    };

    const subtractPoints = (number: number) => {
        if (state.user && state.user.points >= number) {
            dispatch({
                type: 'UPDATE_POINTS',
                payload: state.user.points - number
            });
        }
    };

    const updateRedeemHistory = () => {
        getUserHistory()
            .then(({ data }) => {
                dispatch(updateHistory(data));
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        fetching();
        getMyUser()
            .then(({ data }) => dispatch(success(data)))
            .catch((e) => {
                error(e);
                console.error(e);
            });
    }, []);

    return (
        <UserContext.Provider
            value={{
                state,
                addPoints,
                subtractPoints,
                updateRedeemHistory
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
