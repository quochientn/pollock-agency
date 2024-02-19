import Cta from "../ui/Cta";
import Faq from "../ui/Faq";
import FormContact from "../ui/FormContact";
import Testimonials from "../ui/Testimonials";
import TopBanner from "../ui/TopBanner";

function Contact() {
  return (
    <>
      <TopBanner title="Contact us" page="Contact" />
      <Faq />
      <Cta
        title="We've helped brands of all kinds and businesses of every size grow their online revenue"
        subTitle="Are you ready to start your project? Contact us today and get started!"
        buttonText="get started"
      />
      <FormContact />
      <Testimonials />
    </>
  );
}

export default Contact;
