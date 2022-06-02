import React from "react";
import { Link } from 'react-router-dom';
import "./myticketon.css";


export default function Myticketon() {
    const ticketinform = {
        name: '뮤지컬 <아이다>',
        location: '블루스퀘어 신한카드홀',
        date: '2022.05.14',
        seatNum: 'A열 9번'
    }
    return (
        <div className="item">
            <div className="top">
                <h1>내가 예약한 티켓</h1><hr />
            </div>
            <div className="list">
                <div className="ticket_img">
                    <img className="img_tc" src="https://search.pstatic.net/common?type=o&size=210x300&quality=75&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20220207_165%2F1644201140882Pb7Tb_JPEG%2F269_image_url_1644201140867.jpg" alt="ticket" />
                </div>
                <table className="detail">
                    <tbody>
                        <tr>
                            <th>티켓</th>
                            <td>아이다</td>
                        </tr>
                        <tr>
                            <th>장소</th>
                            <td>블루스퀘어 신한카드홀</td>
                        </tr>
                        <tr>
                            <th>예약날짜</th>
                            <td> 2022.05.10 PM 02:30</td>
                        </tr>
                        <tr>
                            <th>예약좌석</th>
                            <td>A열 9번</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <hr />
            <div className="list">
                <div className="ticket_img">
                    <img className="img_tc" src="https://search.pstatic.net/common?type=f&size=206x296&quality=100&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20220125_250%2F16430936130824Cb0X_JPEG%2F269_25586523_image_url_1643093613001.jpg" alt="ticket" />
                </div>
                <div className="detail">
                    <tr>
                        <th>티켓</th>
                        <td>메타포닉</td>
                    </tr>
                    <tr>
                        <th>장소</th>
                        <td>한국소리문화의전당 모악당</td>
                    </tr>
                    <tr>
                        <th>예약날짜</th>
                        <td> 2022.03.26 PM 06:00</td>
                    </tr>
                    <tr>
                        <th>예약좌석</th>
                        <td>B열 9번</td>
                    </tr>
                </div>
            </div>
            <hr />
            <div className="list">
                <div className="ticke_img">
                    <img className="img_tc" src="https://search.pstatic.net/common?type=f&size=206x296&quality=100&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20220126_115%2F16431808642393cq12_JPEG%2F269_image_url_1643180864185.jpg" alt="ticket" />
                </div>
                <div className="detail">
                    <tr>
                        <th>티켓</th>
                        <td>애틀랜타</td>
                    </tr>
                    <tr>
                        <th>장소</th>
                        <td>
                            GAS SOUTH ARENA</td>
                    </tr>
                    <tr>
                        <th>예약날짜</th>
                        <td> 2022.06.04 PM 02:30</td>
                    </tr>
                    <tr>
                        <th>예약좌석</th>
                        <td>A열 9번</td>
                    </tr>
                </div>
            </div>
            <hr />
        </div>
    );
};