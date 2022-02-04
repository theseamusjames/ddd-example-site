import './Button.css';
export default function Button({clickEvent, type, text}) {
    return (
        <button className={['button', type].join(' ')} onClick={clickEvent}>{text}</button>
    );
}