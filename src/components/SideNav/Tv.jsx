export default function Tv() {
    return (
        <>
            <div className="tv-box">
                <video
                    src='/vids/isabd-13.mp4'
                    className='tv-content'
                    autoPlay={true}
                    loop={true}
                    muted={true}
                />
                <div className="tv-overlay"></div>
                <div className="tv-frame"></div>
            </div>
        </>
    )
}