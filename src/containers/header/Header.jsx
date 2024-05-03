import React from "react";
import './header.css';
import ai from '../../assets/images/fourth-industrial-revolution-artificial-intelligence-machine-learning-robot-deceuninck-293f05dda57af4e5273c019d2fd7b5eb.png'


const Header = () => {
    return (
    <div className="gpt3__header section__pading" id="home">
        <div className="gpt3__header-content">
            <h1 className="gradient__text">
                Let's Build Something amazing with GPT-3 OpenAI
            </h1>
            <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
            <div className="gpt3__header-content__input">
                <input type="email" placeholder="Your email address"/>
                <button type="button">Get Started</button>
            </div>
            <div className="gpt3__header-content__people">
                <div className="gpt3__header-content__people-icons">
                    <img src="https://images.unsplash.com/photo-1645378999013-95abebf5f3c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                </div>
                <div className="gpt3__header-content__people-icons">
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                </div>
                <div className="gpt3__header-content__people-icons">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                </div>
                <div className="gpt3__header-content__people-icons">
                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                </div>
                <div className="gpt3__header-content__people-icons">
                    <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                </div>
                <div className="gpt3__header-content__people-icons">
                    <img src="https://images.unsplash.com/photo-1487309078313-fad80c3ec1e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                </div>
                <p>1,600 people requested access visit in 24 hours</p>
            </div>
        </div>
        <div className="gpt3__header-image">
            <img src={ai} alt="ai" />
        </div>
    </div>
    )
}

export default Header