import React from 'react';

import Contact from '../Contact/index.jsx';

const Contacts = () => {
    return (
        <article className="row">
            <div className="col-sm-4">
                <Contact
                    href="mailto:igor@savichev.me"
                    title="Написать письмо"
                    img={require('./images/mail.png')}
                />
            </div>
            <div className="col-sm-4">
                <Contact
                    href="skype:savichev_igor"
                    title="Позвонить в Skype"
                    img={require('./images/skype.png')}
                />
            </div>
            <div className="col-sm-4">
                <Contact
                    href="http://vk.com/savichev_igor"
                    target="_blank"
                    title="Страничка VK.com"
                    img={require('./images/vk.png')}
                />
            </div>
        </article>
    );
};

export default Contacts;
