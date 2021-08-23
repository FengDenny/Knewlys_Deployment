import React from "react";
import Tab from "./Tab";
import UserProfile from "../../pages/protected/DropdownProfile/UserProfile";
import UpdateAccount from "../auth/UpdateUser/UpdateAccount";
function ProfileTab() {
  return (
    <Tab
      title={"Account Settings"}
      tabOne={"Profile Details"}
      tabTwo={"Update Account"}
      contentOne={<UserProfile />}
      contentTwo={<UpdateAccount />}
    />
  );
}

export default ProfileTab;
