import LargeCard2 from "../components/LargeCard2";
import { ImageFooterBgElements, ImageFeedback } from "../assets/images";

function Footer() {
  return (
    <section className="footer">
      <div className="footer-bg">
        <img
          src={ImageFooterBgElements}
          alt={"footer circle designe"}
          className="w-full h-full"
        />
      </div>
      <div className="footer-container">
        <div className="container">
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
