import React from 'react'
import Haeder from '../components/Common/Haeder'
import Footer from '../components/Common/Footer'
import Bread from '../components/Common/Bread'

const Faq = () => {
  return (
    <>
    <Haeder/>
    <section className="ftco-section ftco-choose ">
        <div className="container">
          
        <Bread page={"Frequently Asked Questions"}/>

        <details>
          <summary className='faq-q'>How do I place an order?</summary>
          <b>To place an order, follow these simple steps:</b>
          <p className='faq-a'>Browse our website and select the products you want.<br/>
          Add the items to your cart.<br/>
          Review your cart and click "Checkout".<br/>
          Provide your shipping and payment information.<br/>
          Confirm your order, and you're all set!</p>
        </details>

        <details>
        <summary className='faq-q'>What payment methods do you accept?</summary>
        <p className='faq-a'>We accept a variety of payment methods, including credit/debit cards, digital wallets, UPI and more. You can find the complete list of accepted payment options during the checkout process.</p>
      </details>

      <details>
      <summary className='faq-q'>How can I track my order?</summary>
      <p className='faq-a'>After your order is placed, you will receive a confirmation email with a tracking link or Tracking ID. You can click on the link to monitor the status of your order in real time.</p>
    </details>


    <details>
    <summary className='faq-q'>What is your return policy?</summary>
    <p className='faq-a'>We offer a hassle-free 10-day return policy. If you're not satisfied with your purchase, you can initiate a return within 10 days of receiving your order. Please visit our Returns & Exchanges page for more details.</p>
  </details>



  <details>
  <summary className='faq-q'>Do you ship internationally?</summary>
  <p className='faq-a'>No, we do not offer international shipping as of now. </p>
</details>


<details>
<summary className='faq-q'>How do I contact customer support?</summary>
<p className='faq-a'>You can reach our customer support team by visiting our Contact Us page, Email, or direct call. We're here to assist you with any inquiries or issues you may have.</p>
</details>



<details>
<summary className='faq-q'> Are your products authentic?</summary>
<p className='faq-a'>Absolutely. We take pride in offering only 100% authentic products sourced directly from our factory. Quality and authenticity are our top priorities.</p>
</details>


<details>
<summary className='faq-q'> Can I change or cancel my order after it's been placed?</summary>
<p className='faq-a'>You can make changes or cancel your order within a limited time frame after placing it. Please contact our customer support team immediately for assistance.</p>
</details>



<details>
<summary className='faq-q'>How can I stay updated with your latest promotions and collections?</summary>
<p className='faq-a'>To stay informed about our latest offerings, promotions, and trends, you can subscribe to our newsletter and follow us on our social media channels, including Instagram, Facebook, and Twitter.</p>
</details>



<details>
<summary className='faq-q'>Do you offer gift wrapping and personalized messages?</summary>
<p className='faq-a'>Yes, we offer gift wrapping and the option to include a personalized message with your order. Simply select these options during the checkout process.</p>
</details>



<details>
<summary className='faq-q'>Why are there different prices for the same product? Is it legal?</summary>
<p className='faq-a'><b>Different prices for the same product can be a result of various factors and pricing strategies used by retailers, and in most cases, it is legal. <br/>
Here are some reasons for variations in prices for the same product: Location,</b><br/>
Promotions and Discounts,<br/>
Supply and Demand,<br/>
Competitive Pricing,<br/>
Membership or Loyalty Programs,<br/>
Dynamic Pricing,<br/>
Product Variants,</p>
</details>



<details>
<summary className='faq-q'>I saw the product at Rs. 1000 but post clicking on the product, there are multiple prices and the size which I want is being sold for Rs. 1600. Why is there a change in price in the product description page?</summary>
<p className='faq-a'><b>The change in price for a specific product variant, when you click on the product, may be due to several reasons:</b><br/>
Product Variant<br/>
Dynamic Pricing<br/>
Inventory Levels<br/>
Promotions or Discounts</p>
</details>



<details>
<summary className='faq-q'>How will I detect fraudulent emails/calls seeking sensitive personal and confidential information?</summary>
<p className='faq-a'>If you receive an e-mail, or a call from a person/association claiming to be from Zara Luxury seeking sensitive confidential information like debit/credit card PIN, net banking, or mobile banking password, we request you to never provide such confidential and personal data. We at Zara Luxury or our affiliate logistics partner never ask for such confidential and personal data. If you have already revealed such information, report it immediately to an appropriate law enforcement agency.
<br/>
<b>Here are a couple of baits fraudsters often use to cheat consumers:<br/>

Congratulations! </b>You have been nominated as a ‘Top Zara Luxury customer’ and are now eligible for a luxury gift item. Please share your proof of address and your debit/credit card details to avail this great offer.<br/>

Hi, I’m calling from Zara Luxury. We are happy to let you know that you have won an exclusive lucky draw coupon of Rs. 7000 on your latest purchase. Please share your credit/debit card number so we can credit the money directly into your bank account."</p>
</details>



<details>
<summary className='faq-q'>How do I cancel the order, I have placed?</summary>
<p className='faq-a'>Order can be canceled till the same is out for delivery. Note: This may not be applicable for certain logistics partners. You would see an option to cancel within the 'My Orders' section under the main menu of your Website/M-site then select the item or order you want to cancel. In case you are unable to cancel the order from the My Orders section, you can refuse it at the time of delivery and a refund will be processed into the source account, if the order amount was paid online.</p>
</details>



<details>
<summary className='faq-q'>How do I create a Return Request?</summary>
<p className='faq-a'>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
</details>



<details>
<summary className='faq-q'>How do I create a Return Request?</summary>
<p className='faq-a'><b>You can create a Return in three simple steps</b><br/>
I have created a Return request. When will I get the refund?
Refund will be initiated upon successful pickup as per the Returns Policy. The refund amount is expected to reflect in the customer account within the following timelines.

<br/>

NEFT - 1 to 3 business days post refund initiation.<br/>
Online Refund – 7 to 10 days post refund initiation, depending on your bank partner.
</p>
</details>
        

        </div>
      </section>
    <Footer/>
</>
  )
}

export default Faq