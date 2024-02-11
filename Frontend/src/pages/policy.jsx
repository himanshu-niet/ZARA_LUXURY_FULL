import React from 'react'
import Haeder from '../components/Common/Haeder'
import Footer from '../components/Common/Footer'
import Bread from '../components/Common/Bread'


const Policy = () => {
  return (
    <div>
    <Haeder />
    <Bread page={"Privacy and Policy"} />

    <div className="container">


      <dl className='mb-5'>

        <dt className='faq-q'>1. Introduction </dt>
        <dt className='faq-a'>At Zara Luxury Fashion, your privacy and data security are paramount to us. This Privacy Policy outlines how
          we collect, use, share, protect, and process your personal information. We fully comply with the
          guidelines issued by the Reserve Bank of India (RBI) to ensure the safety of your financial data. </dt>



        <dt className='faq-q'>2. Information</dt>
        <dt className='faq-a'> We collect various information to provide you with our services and ensure a seamless shopping
          experience. This may include Personal Information: Such as your name, address, phone number,
          email address, and date of birth. Financial Information: To facilitate secure online transactions, we
          may collect your credit/debit card details. Browsing Information: We collect data related to your
          browsing activities on our website. </dt>



        <dt className='faq-q'>3. Use of Information </dt>
        <dt className='faq-a'> We use the information we collect for the following purposes: Order Fulfillment: To process and
          deliver your orders, update you on your order status and handle returns and exchanges. Customer
          Support: To provide assistance, respond to your inquiries, and address any concerns you may have.
          Payment Processing: To facilitate secure online transactions through authorized payment gateways.
          Marketing and Communication: To inform you about new products, promotions, and updates if you
          have subscribed to our newsletter. Website Improvement: To enhance our website, services, and
          customer experience based on your feedback and browsing behavior. </dt>




        <dt className='faq-q'> 4. Data Security </dt>
        <dt className='faq-a'>  We implement stringent security measures, including SSL encryption, to protect
          your personal and financial data. Your information is stored and processed in accordance with
          international information security standards. </dt>



        <dt className='faq-q'> 5. Sharing of Information </dt>
        <dt className='faq-a'> We do not sell, trade, or rent your personal information to third parties. However, we may share
          your information with trusted partners, such as payment processors and delivery services, for order
          fulfillment and payment processing. These partners are also committed to data security and
          compliance with RBI guidelines.</dt>




        <dt className='faq-q'>6. Your Rights You have the right to access, update, or delete your personal information </dt>
        <dt className='faq-a'>You can
          manage your preferences for receiving marketing communications. Please contact us to exercise
          these rights.  </dt>



        <dt className='faq-q'>7. Cookies and Tracking Technologies </dt>
        <dt className='faq-a'>We may use cookies and similar tracking technologies to
          enhance your browsing experience. You can control cookie preferences through your browser
          settings.  </dt>




        <dt className='faq-q'>8. Updates to Privacy Policy </dt>
        <dt className='faq-a'>We may update this Privacy Policy to reflect changes in our practices or
          for legal compliance. We will notify you of any significant changes.  </dt>



        <dt className='faq-q'>9. Contact Us </dt>
        <dt className='faq-a'> For any questions or concerns regarding your privacy or this Privacy Policy, please
          contact us at <a href='mailto:zaraluxuryhelp@gmail.com'>zaraluxuryhelp@gmail.com</a></dt>



      </dl>

    </div>
    <Footer />
  </div>
  )
}

export default Policy