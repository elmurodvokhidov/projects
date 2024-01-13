import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { ChatEngine } from 'react-chat-engine';
import { auth } from '../firebase';

import { useAuth } from '../contexts/AuthContext';

function Chats() {
    const history = useHistory();
    const { user } = useAuth();

    console.log(user);

    const handleLogout = async () => {
        await auth.signOut();

        history.push('/');
    }

    return (
        <div className='chats-page'>
            <div className="nav-bar">
                <div className="logo-tab">
                    Unichat
                </div>
                <div onClick={handleLogout} className="logout-tab">
                    Logout
                </div>
            </div>

            <ChatEngine
                height="calc(100vh - 66px)"
                projectId="a273fb8f-2ca3-4087-843c-f927fa4d94a8"
                userName="."
                userSecret="." />
        </div>
    );
}

export default Chats;