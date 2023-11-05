import Logout from "./Logout";

function ChatAppState(props) {

    const { chats, activeChat, } = props;
    const chat = chats && chats[activeChat];
    const person = chats?.people[0].person;

    console.log(chats);

    return (
        <div>
            {/* <img src={person.avatar} alt="" /> */}
            <Logout />
        </div>
    );
}

export default ChatAppState;