import "./card.css"


const Card = ({  
    titleItem= "titleItem",
    subTitleItem = "subTitleItem",

    cardImage = "cardImage"

}) => {

    return(
        <>
            <div className="card-container">
                <div className="card-image-container">
                    <img src={cardImage} className="card-image"width={100} height={100}></img>
                </div>
                <p className="card-title">{titleItem}</p>
                <p className="card-subTitle">{subTitleItem}</p>
            </div>
        </>
    )

}

export default Card;
