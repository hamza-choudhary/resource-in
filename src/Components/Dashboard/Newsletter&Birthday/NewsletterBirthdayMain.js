import React from "react";
import Newsletter from "./Newsletter";
import WordsOfWisdom from "./WordsOfWisdom";
import Birthday from "./Birthday";

const NewsletterBirthdayMain = (props) => {
  return (
    <>
      <div className={`flex flex-col flex-wrap gap-3 ${props.className}`}>
        <div className="flex gap-5">
          <Newsletter className="w-[49%] flex flex-col" />
          <WordsOfWisdom className="w-[49%]" />
        </div>

        <Birthday className="w-[100%]" />
      </div>
    </>
  );
};

export default NewsletterBirthdayMain;
