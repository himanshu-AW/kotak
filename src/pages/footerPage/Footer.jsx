import React from "react";
import LargeCard2 from "../../components/LargeCard2";
import { ImageFooterBgElements, ImageFeedback } from "../../assets/images";

function Footer() {
  return (
    <section className="w-full flex items-center relative bg-[#03111A] min-w-[1280px] h-[281px] shadow-sm hover:shadow-lg">
      <footer className="z-1 w-[999px] h-full absolute top-0 left-[212px] overflow-hidden">
        <img
          src={ImageFooterBgElements}
          alt={"footer circle designe"}
          className="w-full h-full"
        />
      </footer>
      <div className="relative z-2 ml-[212px] w-[calc(100%-212px)] pl-[148px] h-full flex pt-[28px] ">
        <LargeCard2
          isFooter={true}
          Image={ImageFeedback}
          title={"Give feedback"}
          subTitle={"Suggest featurees, report a problem..."}
        />
      </div>
    </section>
  );
}

export default Footer;
