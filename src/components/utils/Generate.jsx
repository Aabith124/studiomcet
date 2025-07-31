export function EventsData({ item }) {
    return (
        <div className="white-box-container">
            <div className="white-box">
                <div className="white-box-elements">
                    <div className="box-image-container">
                        <img className="box-image" src={item.image} alt={item.alt} />
                    </div>
                    <div className="box-text-contents">
                        <div className="box-text-container">
                            <p className="box-text" dangerouslySetInnerHTML={{ __html: item.name }} />
                        </div>
                        <div className="box-date-container">
                            <p className="box-date" dangerouslySetInnerHTML={{ __html: item.date }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
