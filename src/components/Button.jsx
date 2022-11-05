import * as React from 'react';
import './Button.css';
export default function Button(props) {
    const {clickEvent, type, text} = props;

    return (
        <button className={['button', type].join(' ')} onClick={clickEvent} data-testid={(props['data-testid']) ? props['data-testid'] : ''}>{text}</button>
    );
}