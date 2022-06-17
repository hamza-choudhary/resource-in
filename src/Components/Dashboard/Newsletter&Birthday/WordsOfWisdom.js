import React from "react";
import CardHeading from "../../UI/CardHeading";
import Card from "../../UI/Card";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const WordsOfWisdom = (props) => {
  const [quote, setQuote] = useState("No Words!");
  const [author, setAuthor] = useState("anonymous");

  const randomNumber = Math.floor(Math.random() * (1000 - 2 + 1) + 2);
  // console.log(randomNumber);

  const getWordsOfWisdom = async () => {
    try {
      const res = await axios.get("https://type.fit/api/quotes");
      setQuote(res.data[randomNumber].text);
      setAuthor(res.data[randomNumber].author);
    } catch {
      console.log("error has been occured");
    }
  };

  useEffect(() => {
    getWordsOfWisdom();
  }, []);

  return (
    <div className={props.className}>
      <CardHeading
        url="assests/images/wordsofwisdom-icon.png"
        heading="Words of Wisdom"
      />
      <Card className="px-3 py-5 ">
        <div className="flex justify-center">
          <q className="text-black/[0.5] font-semibold text-[14px]">{quote}</q>
        </div>
        <div>
          <p className="text-right text-[12px] font-semibold text-black/[0.5] mt-0">
            ~{author}
          </p>
        </div>
      </Card>
    </div>
  );
};

export default WordsOfWisdom;
