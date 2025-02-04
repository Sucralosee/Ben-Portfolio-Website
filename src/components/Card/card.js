import "./card.css"
import Link from "next/link";

const Card = ({  
    titleItem= "titleItem",
    subTitleItem = "subTitleItem",
    cardYear = "cardYeaer",

    cardImage = "cardImage",

    linkPath = "",
}) => {

    return(
        <Link href={linkPath}>
            <div className="card-container">
                <div className="card-image-container">
                    <img src={cardImage} className="card-image"width={100} height={100}></img>
                </div>
                <p className="card-title SubSub Light-Text bold">{titleItem}</p>
                <div className="card-extra">
                    <p className="card-subTitle">{subTitleItem}</p>
                    <p className="card-subsubTitle Pop20 Light-Text">{cardYear}</p>
                </div>
            </div>
        </Link>
    )

}

export default Card;
