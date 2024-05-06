
//heading.jsx


export default function Heading({ text, customClass }) {
    return (
        <div className={`heading-ele-container `}>
            <h1 className={`heading-ele ${customClass}`}>{text}</h1>
        </div>
    );
}
