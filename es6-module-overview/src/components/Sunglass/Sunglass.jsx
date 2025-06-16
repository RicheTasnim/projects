import { add, mul ,divideFirstBySecond as divide } from '../../utils/Calculate';
import Watch from '../Watch/Watch';
import './Sunglass.css';

const Sunglass = () => {
    const first = 4, second = 7;
    const sum = add(first, second);
    const mult = mul(first, second);
    const vaag = divide(first, second);
    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;