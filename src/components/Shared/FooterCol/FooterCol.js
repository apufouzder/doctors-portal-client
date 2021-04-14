import React from 'react';
import { Link } from 'react-router-dom';

const FooterCol = (props) => {
    return (
        <div className="col-md-3">
            <h5 className="text-brand">{props.menuTitle ? props.menuTitle : " "}</h5>
            <ul className="px-0 mt-4">
                {
                    props.menuItems.map((item, index) => <li className="mb-2" key={index}><Link to={item.link} className="text-secondary">{item.name}</Link> </li>)
                }
            </ul>
            {props.children && props.children}
        </div>
    );
};

export default FooterCol;