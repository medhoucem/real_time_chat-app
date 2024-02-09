import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId='f050aae4-4d22-4d34-b82f-9bfac85a8dc1'
        username={props.user.username}
        secret={props.user.secret}
        style={{ height : '100%'}}

      />
    </div>
  );
};

export default ChatsPage;