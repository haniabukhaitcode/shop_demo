import React from "react";
import Styles from "./Card.module.scss";

const Card = props => {
  return (
    <div className={`${Styles.outerCard} card card-group col-sm-4`}>
      <div className={`${Styles.innerCard} card`}>
        <div className={Styles.priceTag}>
          <i className={`${Styles.imageTag} fas fa-tag fa-sm`} />
          <strong> {props.priceTag}</strong>
        </div>
        <img
          alt="img"
          src={props.cardImage}
          width="100%"
          height="100%"
          className={`${Styles.containerImages} card-img-top`}
        />

        <div className={`${Styles.textBody} card-body`}>
          <h5 className={`${Styles.cardTitle} card-title `}>Card title</h5>
          <p className={`${Styles.cardTextParagraph} card-text `}>
            This is a wider card with supporting text below as a natural
          </p>
          <div className={`${Styles.cardTextRating} card-text `}>
            <small className={`${Styles.textMuted} text-muted `}>
              123 sold
            </small>
            <div className={Styles.containerRating}>
              <i className={`${Styles.icon} fas fa-star fa-xs `} />
              <i className={`${Styles.icon} fas fa-star fa-xs `} />
              <i className={`${Styles.icon} fas fa-star fa-xs `} />
              <i className={`${Styles.icon} fas fa-star fa-xs `} />
              <i className={`${Styles.icon} fas fa-star fa-xs `} />
            </div>
          </div>
          <div className={Styles.commentShop}>
            <i className={`${Styles.icon} fas fa-comment fa-xs`} />
            <small className={`${Styles.textMuted} text-muted `}>
              {props.comment}
            </small>
            <small className={`${Styles.textMuted} text-muted `}>
              <div>
                <strong>{props.shopName}</strong>
              </div>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
