import "./bigCard.css";
import Link from 'next/link';
import { MoveRight } from "lucide-react";
 
export default function BigCard({ cardImage, titleItem, linkPath, subTitleItem, cardYear, isRightImage }) {
    return (
        <div className="bc-container">
                <div className="bc-inner-container">
                    {isRightImage ? (
                        <>
                            <div className="bc-left">
                                <div className="bc-shift-left">
                                    <div className="bc-words ">
                                        <p className="Headless bc-shifty">{titleItem}</p>
                                        <p className="Pop32 bc-shifty">{subTitleItem}</p>
                                        <p className="Pop20 bc-shifty">{cardYear}</p>
                                    </div>
                                    <div className="bc-link">
                                        <Link href={linkPath} >
                                            <p className="Pop20 Light-Text bc-upper">Let's Check It Out</p>
                                        </Link>
                                        <MoveRight  width={42} height={42}/>
                                    </div>

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
                                <div className="bc-shift-right">
                                    <div className="bc-words ">
                                        <p className="Headless">{titleItem}</p>
                                        <p className="Pop32">{subTitleItem}</p>
                                        <p className="Pop20">{cardYear}</p>
                                    </div>
                                    <div className="bc-link">
                                        <Link href={linkPath} >
                                            <p className="Pop20 Light-Text bc-upper">Let's Check It Out</p>
                                        </Link>
                                        <MoveRight  width={42} height={42}/>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
        </div>
    );
}
