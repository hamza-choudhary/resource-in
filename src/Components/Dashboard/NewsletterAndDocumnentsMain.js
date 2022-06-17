import React from "react";
import DocAndPolicy from "./Documents&Policies/DocAndPolicy";
import NewsletterBirthdayMain from "./Newsletter&Birthday/NewsletterBirthdayMain";

const NewsletterAndDocumnentsMain = () => {
  return (
    <>
      <div className="flex gap-5 my-8">
        <NewsletterBirthdayMain className="w-[60%]" />
        <DocAndPolicy className="w-[40%] flex flex-col" />
      </div>
    </>
  );
};

export default NewsletterAndDocumnentsMain;
