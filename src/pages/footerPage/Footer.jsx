import React from "react";
import LargeCard2 from "../../components/LargeCard2";
import { ImageFooterBgElements, ImageFeedback } from "../../assets/images";

function Footer() {
  return (
    <section className="w-full flex items-center relative bg-[#03111A] min-w-[1280px] h-[281px] shadow-sm hover:shadow-lg">
      <footer className="z-1 w-[999px] h-full absolute top-0 left-[50%] translate-x-[-50%] overflow-hidden">
        <img
          src={ImageFooterBgElements}
          alt={"footer circle designe"}
          className="w-full h-full"
        />
      </footer>
      <div className="z-2 ml-[236px] mr-[360px] mx-auto w-full h-full flex justtify-center pt-[28px] ">
        <div className="w-full flex justify-center">
          <LargeCard2
          isFooter={true}
          Image={ImageFeedback}
          title={"Give feedback"}
          subTitle={"Suggest featurees, report a problem..."}
        />
        </div>
      </div>
    </section>
  );
}

export default Footer;
