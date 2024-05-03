import React from "react";
import './brand.css';
import { Google, Slack, Shopify, Dropbox, Atlassian } from './images_import';

const Brand = () => {
    return (
    <div className="gpt3__brand section__padding">
        <img src={Google} alt="google"/>
        <img src={Slack} alt="slack"/>
        <img src={Atlassian} alt="atlassian"/>
        <img src={Dropbox} alt="dropbox"/>
        <img src={Shopify} alt="shopify"/>
    </div>
        )
}

export default Brand