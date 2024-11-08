export function Button({ text, style, onClick }) {
    return (
        <button className={`${style}`} onClick={onClick}>{text}</button>
    );
};