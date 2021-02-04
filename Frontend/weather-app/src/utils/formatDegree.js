function FormatDegree({ string, unit, className }) {
    return (
        <div className={className}>
            {string}
            <span className="text-5xl text-coolGray-400">&deg;{unit}</span>
        </div >
    );
}

export default FormatDegree;
