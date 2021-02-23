import styled from 'styled-components';

const Button = styled.button`
    padding: 0.375rem 0.875rem;
    border-radius: 25px;
    border: none;
    transition: 0.15s ease-in-out;
    text-align: center;
    cursor: pointer;
    color: #2a2a2a;
    font-size: 0.875rem;
    background: #ff7d00;
    color: #fff;
    font-weight: 600;

    &:hover {
        background: #dd7b1d;
    }
`;

export default Button;
