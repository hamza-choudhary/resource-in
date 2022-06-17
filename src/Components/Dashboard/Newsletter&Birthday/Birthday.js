import React from "react";
import Card from "../../UI/Card";
import CardHeading from "../../UI/CardHeading";

const users = [
  {
    name: "zakria",
    birthday: "Dec 31",
  },
  {
    name: "hamza",
    birthday: "Nov 30",
  },
  {
    name: "uzair",
    birthday: "Oct 31",
  },
  {
    name: "Maani",
    birthday: "Sep 30",
  },
];

const Birthday = (props) => {
  return (
    <>
      <div className={props.className}>
        <CardHeading
          url="assests/images/birthday-icon.png"
          heading="Birthday"
        />
        <div className="flex gap-5">
          {users.map((user) => (
            <Card className="w-[24%] pt-8" key={user.id}>
              <div className="flex flex-col items-center gap-4">
                <div>
                  <img
                    src="assests/images/user-emoji.png"
                    alt=""
                    className="h-9 bg-light-blue p-1 rounded-lg"
                  />
                </div>
                <div>
                  <p className="text-[12px] text-black/[0.5] font-semibold">
                    {user.name}
                  </p>
                </div>
                <div className="bg-light-blue w-[100%] py-1.5 rounded-b-lg">
                  <p className="text-white text-[12px] text-center font-semibold">
                    {user.birthday}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Birthday;
