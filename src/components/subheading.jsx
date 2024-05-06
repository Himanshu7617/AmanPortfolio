//subheading.jsx



export default function SubHeading({ text, customClass }) {
    return (
        <div className={`subheading-ele-container `}>
            <h1 className={`subheading-ele  ${customClass}`}>{text}</h1>
        </div>
    );
}
