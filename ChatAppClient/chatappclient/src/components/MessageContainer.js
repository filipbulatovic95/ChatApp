const MessageContainer = ({ messages }) => {
    return <div>
            {
                messages.map((msg, index) => {
                    <span key={index}>{msg.msg}</span>
                })
                
                
                
                
            }
            
        </div>
};


export default MessageContainer;