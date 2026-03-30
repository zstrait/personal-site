import { useState } from "react"

export default function Tv() {
    const [currentVidIndex, setCurrentVidIndex] = useState(0);
    const [isStatic, setIsStatic] = useState(false);

    const vids = [
        'v1774895335/isabd-1_gohrmq.mp4',
        'v1774895335/isabd-2_emkhqt.mp4',
        'v1774895336/isabd-3_krdea2.mp4',
        'v1774895336/isabd-4_pynpft.mp4',
        'v1774895336/isabd-5_htblnq.mp4',
        'v1774895337/isabd-6_rijix8.mp4',
        'v1774895337/isabd-7_cbue3c.mp4',
        'v1774895337/isabd-8_rrgmgt.mp4',
        'v1774895338/isabd-9_qjiyzh.mp4',
        'v1774895339/isabd-10_kj8zze.mp4',
        'v1774895340/isabd-11_qhw8qp.mp4',
        'v1774895340/isabd-12_npprkm.mp4',
        'v1774895340/isabd-13_favhb6.mp4',
        'v1774895341/isabd-14_ebrjak.mp4',
        'v1774895342/isabd-15_uahuqk.mp4',
        'v1774895343/isabd-16_wsnk4w.mp4',
        'v1774895343/isabd-17_jh5un9.mp4',
        'v1774895344/isabd-18_y1u6wt.mp4',
        'v1774895344/isabd-19_lnn1c9.mp4',
        'v1774895346/isabd-20_c688v9.mp4',
        'v1774895346/isabd-21_zvntgl.mp4',
        'v1774895347/isabd-22_jqtfrj.mp4',
        'v1774895348/isabd-23_viti4d.mp4'
    ];

      const handleTvClick = (e) => {
        setIsStatic(true);
        
        const tvBox = e.currentTarget.getBoundingClientRect();
        const clickX = e.clientX - tvBox.left;
        const middle = (tvBox.width / 2) - 30;

        if (clickX < middle) {
            if (currentVidIndex === 0) {
                setCurrentVidIndex(vids.length - 1); 
            } else {
                setCurrentVidIndex(currentVidIndex - 1);
            }
        } else {
            if (currentVidIndex === vids.length - 1) { 
                setCurrentVidIndex(0);
            } else {
                setCurrentVidIndex(currentVidIndex + 1);
            }
        }
    }


    return (
        <>
            <div className="tv-box" onClick={handleTvClick}>
                <video
                    src={`https://res.cloudinary.com/dyeom160z/video/upload/${vids[currentVidIndex]}`}
                    className='tv-content'
                    autoPlay={true}
                    loop={true}
                    muted={true}
                    onLoadedData={() => {
                        setTimeout(() => setIsStatic(false), 300);
                    }}
                />
                {isStatic && (
                    <img
                        src="gifs//static.gif"
                        className='tv-content static'
                        alt="TV Static"
                    />
                )}
                <div className="tv-overlay"></div>
                <div className="tv-frame"></div>
            </div>
        </>
    )
}