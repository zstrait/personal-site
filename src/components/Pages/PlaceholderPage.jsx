function PlaceholderPage({ pageTitle, placeholderClasses }) {
    return (
        <>
            <div className={`placeholder-page page ${placeholderClasses}`}>
                <div className="page-title">{pageTitle}</div>
                <img className="construction" src={"/gifs/under-construction.gif"} />
            </div>
        </>
    )
}

export default PlaceholderPage;