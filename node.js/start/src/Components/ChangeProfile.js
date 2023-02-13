import { userState } from "react";

export const ChangeProfile = (props) => {
    const [newUsername, setNewUsername] = useState("");
    return (
        <div>
            <input
            onChange={(event) => {
                setNewUsername(event.taget.value);
            }}
         />
         <button onClick={() => {props.setUsername(newUsername);
        }}
        >
             Change Username
             </button>
        </div>
    );






};
