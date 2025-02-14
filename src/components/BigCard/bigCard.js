import "./bigCard.css";
import Link from 'next/link';

export default function BigCard({ cardImage, titleItem, linkPath, subTitleItem, cardYear, isRightImage }) {
    return (
        <div className="bc-container">
            <Link href={linkPath}>
                <div className="bc-inner-container">
                    {isRightImage ? (
                        <>
                            <div className="bc-left">
                                <div className="bc-words bc-shift-left">
                                    <p className="Headless">{titleItem}</p>
                                    <p className="Pop32">{subTitleItem}</p>
                                    <p className="Pop20">{cardYear}</p>
                                </div>

                            </div>
                            <div className="bc-right">
                                <img
                                    src={cardImage}
                                    className="bc-image"
                                    width={100}
                                    height={100}
                                    alt={titleItem}
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="bc-left">
                                <img
                                    src={cardImage}
                                    className="bc-image"
                                    width={100}
                                    height={100}
                                    alt={titleItem}
                                />
                            </div>
                            <div className="bc-right">
                                <div className="bc-words bc-shift-right">
                                    <p className="Headless">{titleItem}</p>
                                    <p className="Pop32">{subTitleItem}</p>
                                    <p className="Pop20">{cardYear}</p>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </Link>
        </div>
    );
}
