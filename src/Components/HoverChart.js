import React from 'react';
import "./HoverChart.scss";

function HoverChart({ title, subtitle }) {
    return (
        <div className="chart parallax__2">
            <div className="chart__info">
                <h4>{title}</h4>
                <label>{subtitle}</label>
            </div>
            <div className="chart__circle --blue"></div>
            <div className="chart__circle --yellow"></div>
            <div className="chart__circle --purple"></div>
            <div className="chart__circle --grey"></div>
        </div>
    )
}

export default HoverChart
