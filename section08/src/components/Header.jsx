
export default function Header() {
    const date = new Date().toDateString()

    return (
        <div className="header">
            <p className="text">오늘은 (❁´◡`❁)</p>
            <p className="date">{date}</p>
        </div>
    );
}

