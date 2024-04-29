import React from 'react';
import '../app/styles/index.scss';
import { Header } from '../widgets/Header';
import { PromoBlock } from '../widgets/PromoBlock';
import { HowItWorks } from '../widgets/HowItWorks';
import { ThirdBlock } from '../widgets/ThirdBlock';
import { ReviewsList } from '../entities/reviews/ui/ReviewsList';
import { FAQList } from '../entities/faq/ui';
import { InformationBlock } from '../widgets/InformationBlock';
import { ContactForm } from '../features/getUserData/ui/ContactForm';
import { Footer } from '../widgets/Footer';
import { Element } from 'react-scroll';

function App() {
  return (
    <div className="App">
      <div className="containerWithBackground">
        <div className="backgroundImg" />
        <Header />
        <section>
          <PromoBlock />
        </section>
      </div>
      <Element name="howItWorksID">
        <section>
          <HowItWorks />
        </section>
      </Element>
      <Element name="thirdBlockID">
        <section>
          <ThirdBlock />
        </section>
      </Element>
      <section>
        <ReviewsList />
      </section>
      <Element name="faqID">
        <section>
          <FAQList />
        </section>
      </Element>
      <section>
        <InformationBlock />
      </section>
      <Element name="formID">
        <section>
          <ContactForm />
        </section>
      </Element>
      <Footer />
    </div>
  );
}

export default App;
