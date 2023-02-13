import { ChangeProfile } from "../Components/ChangeProfile";

export const Profile = (props) => {
    return (
     <div>
        {""}
         PROFILE, user is: {props.username}
         <ChangeProfile/>
     </div>
    );

};
