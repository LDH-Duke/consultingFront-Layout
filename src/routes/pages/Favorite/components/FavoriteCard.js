import React from "react";
import "./style/FavoriteCard.css";
import { Button } from 'antd';
import example from './img/example.png';
import { Link } from "react-router-dom";

const FavoriteCard = ({
    props,
    deleteFavorite,
    addFavorite,
    favorite
}) => {

    /**
     * 해당 상담사 id
     */
    const {counselor_id} = props

    /* RENDER */
    return (
        <div className="card-container">
            <div className="card-wrap">
                <div className="card-content">
                    <div className="card-imgbox">
                        <Link to={`/counselor/${counselor_id}`}><img src={example} alt="" /></Link>
                    </div>
                    <div className="profile-box">
                        <div className="profile-detail">
                            <div className="profile-category">{props.category}</div>
                            <div className="profile-name">{props.name}</div>
                        </div>
                        <div className="button-box">
                            {
                                favorite ?
                                <Button onClick={ () => { deleteFavorite(counselor_id) }}>취소</Button>
                                :
                                <Button onClick={ () => { addFavorite(counselor_id) }}>추가</Button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FavoriteCard