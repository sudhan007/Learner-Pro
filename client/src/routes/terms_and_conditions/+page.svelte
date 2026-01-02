<script lang="ts">
  import Footer from '../../components/Footer/Footer.svelte';

  interface Section {
    id: string;
    title: string;
    content: string;
  }

  const sections: Section[] = [
    {
      id: "introduction",
      title: "Introduction",
      content: "The website learnerpro.in and the mobile application titled 'learnerpro' is owned, operated, managed and controlled by learnerpro, a company incorporated under the laws of India with its corporate office at 387, Joe Daniel St, Vetturnimadam, Nagercoil, Tamil Nadu 629003. By procuring a Service from learnerpro, or by use of the Website or Application, the User hereby agrees to be bound by these terms and conditions, as applicable, to the use of the Website, the Application and any Services. learnerpro facilitates the Users to make online Invoicing, rent payments, utility payments, GST payments, vendor payments, or such other business payments through the Website and/or the Application. These Terms of Service read along with privacy policy of learnerpro govern the relationship between the User and learnerpro."
    },
    {
      id: "definitions",
      title: "Definitions",
      content: "Acquiring Bank means any bank or financial institution that processes debit card or credit card payments. Affiliate means any entity directly or indirectly owning, controlling, or holding with power to vote 10% or more of the outstanding voting securities. API means Application programming interface. Convenience Fee means the fee payable by the User to learnerpro for using the Services. Payee means any person to whom a payment is made by the User. Password means the one time password or PIN for authorising payments. Person means any natural person, company, corporation, partnership, proprietorship, trust, or other legal entity. Self-Financing Transaction means a Transaction where the User funds their own business account or transfers to related parties. Service Provider means banks, payment gateways, and other vendors engaged by learnerpro. Settlement Account means the bank account maintained by learnerpro for processing Services. Transaction means a payment instruction resulting in successful transfer of funds. Transaction Amount means the total amount payable by a User to a Payee. User Account means the account created on the Application for availing Services."
    },
    {
      id: "eligibility",
      title: "Eligibility",
      content: "By agreeing to these Terms of Service, a User represents that they are at least 18 years of age and competent to contract. Where the User is registering on behalf of a company, partnership or legal entity, such User has been duly authorized by such entity. The User represents and warrants that they have full power and authority to accept these Terms of Service. In case learnerpro alters the eligibility criteria and the User no longer complies, learnerpro may restrict or suspend access to the Services. The User agrees to update devices to operate the Application as instructed by learnerpro. The User shall ensure proper encryption and security measures on their devices. The User may not use the Services for any illegal or unauthorised purpose. learnerpro reserves the right to refuse or discontinue the Services to anyone for any reason at any time."
    },
    {
      id: "registration",
      title: "Registration",
      content: "In order to avail the Services, User must be registered with learnerpro and the Service Providers. The User shall provide all required documents for identity verification. By registering, User agrees to provide true, accurate, current and complete information. When User registers, a User Account will be created associated with username, Password and other information. User shall be responsible for anything that happens through their User Account. The User expressly covenants that the User Account shall be used only for valid and genuine transactions. The User must keep account information current and valid including email address, contact number, and other details. User shall not impersonate any person or entity, or falsely state or misrepresent identity, age or affiliation. The User is solely responsible for protecting the confidentiality of their username and Password."
    },
    {
      id: "information",
      title: "Information",
      content: "The User will be required to submit the following information while registering: Valid Identification and address proof as specified by learnerpro; Permanent Account Number, Goods And Services Tax Number; and such other information as specified by learnerpro for processing transactions. The User authorises learnerpro to make any inquiries necessary to validate identity, including asking for further information or documentation. The User authorises learnerpro to access, use, process and share the information provided and transaction details as necessary to comply with applicable law, court orders, governmental requests, or for investigating erroneous or fraudulent transactions."
    },
    {
      id: "communications",
      title: "Communications",
      content: "By using the Application and/or Website, the User has given explicit consent to receive calls, auto-dialled or pre-recorded messages/calls or Whatsapp messages from learnerpro, Service Providers and third parties at any time using the telephone number provided for registration. The User gives explicit consent to receive SMS messages from learnerpro and Service Providers for promotional and transactional messages at any time. This consent covers purposes including promotional messages and transactional messages as defined under applicable regulations."
    },
    {
      id: "use-of-services",
      title: "Use of Services",
      content: "The Services may be used exclusively by the User for making payments to Payees or settling valid and legal transactions. The User is solely responsible for any loss or damage arising from use of the Application not in accordance with instructions. The User has appointed learnerpro as an agent to hold, receive, disburse and settle funds on their behalf. learnerpro shall initiate transfer of Transaction Amounts to the Payee's designated bank account after deduction of Convenience Fees. learnerpro has no obligation to verify the authenticity of Transactions once generated through valid login and authenticated through security checks. The User shall maintain security and confidentiality of the User Account. Confirmation of Transaction using valid credentials shall be conclusive evidence. User is responsible to furnish correct and accurate information. learnerpro is only an online intermediary for facilitating payments and is not responsible for disputes between User and Payee."
    },
    {
      id: "user-obligations",
      title: "User Obligations",
      content: "Every User is responsible to furnish correct and accurate information; provide proof of delivery, invoices or records pertaining to Transactions; ensure all required licenses and registrations are in force. The User undertakes not to enter into or facilitate Self-Financing Transactions. User shall comply with all applicable laws, rules and regulations and guidelines set by payment networks and banks. User shall not disclose any personal information about third parties without consent. User shall take all precautions to ensure no breach of security. User shall bear all applicable taxes. User shall not require other Users to provide account details, Passwords, or PINs. User shall use Payee information only for completing Transactions. User shall inform learnerpro of any changes in contact information, ownership or legal status. User shall not use the Services in any manner that could damage, disable, or impair the Application. User shall not hold learnerpro liable for delays in settlements not directly attributable to learnerpro."
    },
    {
      id: "user-restrictions",
      title: "User Restrictions",
      content: "The User shall not use the Application or Services to display, upload, modify, publish, or share any information that is: grossly harmful, harassing, defamatory, obscene, pornographic, libellous, invasive of privacy, hateful, racially or ethnically objectionable, relating to money laundering or gambling, or otherwise unlawful; infringes any patent, trademark, copyright or other proprietary rights; contains viruses or malicious software; advertises or offers to sell goods or services; is promotional in nature; falsifies information or violates any applicable law; belongs to another Person without rights; interferes with or disrupts the Services; impersonates any other Person; harms minors; forges headers or manipulates data; engages in illegal activities; is patently false with intent to mislead or harass; defames learnerpro and its employees; or threatens unity, integrity, defence, or security of India. The User shall not reverse engineer, decompile or extract source code; use robots or spiders to retrieve content; collect information about other Users for illegal purposes; create fraudulent User Accounts; transmit viruses or harmful items; carry out denial of service attacks; or use the Services for any purpose contrary to applicable law or that might negatively prejudice learnerpro's goodwill."
    },
    {
      id: "account-history",
      title: "User Account History",
      content: "When a payment is made, learnerpro will update User and provide a Transaction confirmation which serves as receipt. Upon request, learnerpro may provide a summary of account activity for up to one year. User is solely responsible for compiling and retaining permanent records of all Transactions and reconciling all transactional information. If User believes there is an error or unauthorized transaction activity, they must contact learnerpro immediately and shall indemnify, defend and hold harmless learnerpro from any such error or unauthorized activity."
    },
    {
      id: "specific-terms",
      title: "Specific Terms",
      content: "learnerpro and Service Providers will not be responsible for any disputes between Users and Payees, including issues regarding prices, delivery, quality of products or services. All contracts are directly between Users and Payees. learnerpro cannot guarantee the timings of any payments as such timing is dependent upon banks, card processors, and other Service Providers. User shall be responsible for any miscommunication or incorrect information provided to learnerpro. learnerpro reserves the right to impose limits on the number of Transactions or amounts and refuse payments exceeding such limits or for Users with questionable charges history."
    },
    {
      id: "security",
      title: "Security",
      content: "The User will not hold learnerpro liable for any improper, fraudulent, unauthorized, duplicate or erroneous use of their mobile or web-based access due to loss, theft, cloning or any other reason. learnerpro will not be liable for any consequences connected with misuse of User's accounts by third parties, including providing authentication details to third parties. If third parties gain access to the Services, the User will be responsible and shall indemnify learnerpro against any liability arising from such misuse. The User shall be fully liable for any unauthorised use of their accounts and all authorised Transactions. learnerpro shall be under no liability for loss or damage arising from: defects in products or services supplied; inability of third party to supply products or services; refusal to honour payment; malfunction of equipment; unsuccessful transactions; or any mis-statement, error or omission by the User."
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property Rights",
      content: "The Application content and the trademarks, service marks and logos contained therein are owned by or licensed to learnerpro, subject to copyright and other intellectual property rights. Such content may not be copied, reproduced, distributed, transmitted, broadcast, displayed, sold, licensed, uploaded, or otherwise exploited without the prior written consent of learnerpro. The User expressly agrees and consents to use of its Marks on the Application."
    },
    {
      id: "disclaimer",
      title: "Disclaimer of Warranties",
      content: "The content and functionality on the Application is provided with the understanding that learnerpro is not itself engaged in making payments. learnerpro is an intermediary between banks, Service Providers and Users. All content and functionality is provided 'AS IS', without warranty of any kind, either express or implied, including implied warranties of merchantability, fitness for a particular purpose, title and non-infringement. learnerpro makes no warranties as to accuracy or adequacy of the Application or that Services will be uninterrupted or error-free. learnerpro does not warrant that: information provided will be accurate, complete and updated; use of Services will meet User's requirements; Services will be uninterrupted, timely, secure or free from error; any information obtained will be accurate or reliable; any material downloaded is at User's own risk and User is solely responsible for any damage or data loss. No warranty is given that products/services are free from computer virus or malicious code. User acknowledges that use of Application and Services is at their sole risk. Under no circumstances shall learnerpro be liable for any damages including direct, indirect, punitive, special, consequential or exemplary damages that result from use of or inability to use the Application or Services."
    },
    {
      id: "limitation-liability",
      title: "Limitation of Liability",
      content: "User expressly acknowledges that, to the maximum extent permitted by law, the entire risk arising out of access to and use of the Application and Services remains with them. Neither learnerpro nor the Acquiring Bank nor any other party will be liable for any incidental, special, exemplary or consequential damages, including lost profits, loss of data or loss of goodwill, service interruption, computer damage or system failure or cost of substitute services, whether based on warranty, contract, tort, product liability or any other legal theory. For tax payments and utility bill payments, learnerpro shall not be responsible for any system failure or non-completion of transaction whether at bank or utility providers website. Except for learnerpro's obligations to make payments through the Settlement Account, in no event will learnerpro's aggregate liability exceed Indian Rupees One Thousand or the amount paid by User for availing Application, whichever is lesser. learnerpro reserves the right to recover any additional amounts from the User together with damages, losses, costs and fees."
    },
    {
      id: "payment-terms",
      title: "Payment Terms",
      content: "In consideration of the Services rendered by learnerpro, the User shall pay a Convenience Fee. The User can view the Convenience Fee details on the Application. The User will be made aware of the Convenience Fee prior to making the Transaction. The User can proceed only upon agreement to the Convenience Fee. All Convenience Fees paid are non-refundable. learnerpro shall deduct its Convenience Fees plus applicable taxes per successful Transaction and make payment of the balance to the Payee. All other taxes, duties or charges shall be borne by User. learnerpro reserves the right to alter/modify/change the Convenience Fee at any time without notice. It is agreed that Convenience Fees charged for a successfully completed Transaction shall not be returned or repaid irrespective of the Transaction being rejected, charged back, refunded or disputed. User is responsible for determining any taxes assessed or required to be collected or paid for use of the Services. User is solely responsible for collecting, withholding, reporting, and remitting correct taxes to tax authorities. learnerpro is not obligated to determine whether taxes apply or calculate, collect, report, or remit any taxes."
    },
    {
      id: "payout-schedule",
      title: "Payout Schedule",
      content: "learnerpro will automatically initiate a payout of the Transaction Amount to Payee's designated bank account. All Transactions shall be credited to Payee in accordance with timelines specified by the Acquiring Bank and Service Providers. All payments shall be made subject to processing and receipt. All payments settled shall be through learnerpro's designated bank account or other banking channels. learnerpro will initiate payout of amounts received on non-business days on an upcoming business day on a best efforts basis. learnerpro shall not be held liable for any delay in payout through no act or omission directly attributable to learnerpro. learnerpro may defer payout or restrict access to Transaction Amount if investigating disputes or to comply with applicable law, court order, or governmental requests. learnerpro shall not be held liable for delay in payout in such instances."
    },
    {
      id: "processing-errors",
      title: "Processing Errors",
      content: "learnerpro will attempt, on a best efforts basis, to fix processing errors it discovers. If the error resulted in Payee's receipt of fewer funds than entitled, learnerpro will credit the Account for the difference, subject to receiving necessary funds and verifying shortfall. If the error results in Payee's receipt of more funds, learnerpro will notify the Payee and request refund of extra funds. learnerpro will only be able to attempt to correct Transactions if User notifies learnerpro of error before transaction gets processed from learnerpro's end. User's failure to notify learnerpro of a processing error forthwith will be deemed a waiver of any right to amounts owed."
    },
    {
      id: "chargeback",
      title: "Chargeback Policy",
      content: "A 'Chargeback' shall mean a request by the Reserve Bank of India, cyber crime cell or any governmental authority, or any Service Providers under order or direction of governmental authority for a refund due to: payment which User refuses to honour or demands refund because products or services were not as promised, defective, deficient, incomplete or unsatisfactory, or payment already made; payments returned by the Acquiring Bank for any reason; or charge/debit arising from alleged hacking breach of security or encryption. As a result of rapid nature of fund movements, once a payment has been initiated, it may not be possible to retract. In such event, neither the Acquiring Bank nor learnerpro shall be responsible for chargeback or refund. User expressly acknowledges learnerpro shall not be liable for any Chargeback or Chargeback related issues. Any retraction of payment shall be between User and Payee directly and Chargeback can be considered only if Payee refunds the amount back. learnerpro disclaims all liability in this regard. learnerpro shall not be responsible to make payments in respect of any Chargeback unless it has received requisite amounts from authorities or Service Providers. Upon receipt of Chargeback amount, learnerpro shall pass on such amount to User within 7 working days."
    },
    {
      id: "fraudulent-transactions",
      title: "Fraudulent Transactions",
      content: "In case learnerpro is intimated by the Acquiring Bank, card payment network or regulatory authorities that a User has reported an unauthorised debit of payment instrument (Fraudulent Transaction), then learnerpro shall be entitled to suspend settlement of the amount associated with the Fraudulent Transaction during pendency of inquiries, investigations and resolution. In the event the Fraudulent Transaction results in a Chargeback, the Chargeback shall be resolved in accordance with the provisions relating to Chargeback. If the amount in respect of a Fraudulent Transaction has already been settled, any dispute following settlement shall be resolved by the payment providers and Acquiring Banks in accordance with applicable laws."
    },
    {
      id: "termination",
      title: "Termination",
      content: "If either learnerpro or Service Provider suspects, on reasonable grounds, that a User has committed a breach of these Terms or any act of dishonesty or fraud, learnerpro shall be entitled to suspend all payments, deactivate/suspend the User Account and disable Password, and terminate User's access to the Application or Services pending enquiries. User may cancel their User Account at any time by sending learnerpro an email to that effect."
    },
    {
      id: "indemnity",
      title: "Indemnity",
      content: "User shall keep learnerpro, Acquiring Bank and Service Providers safe and harmless and indemnified from any and all liability including liabilities, judgments, damages, losses, claims, costs and expenses, or any other loss arising from or relating to any claim, suit or proceeding brought against learnerpro by another User, Service Provider or third party for reasons including: delivery, non-delivery or delay in respect of products or services; breach or non-performance by the User of any terms, conditions, or obligations; acts, errors, misrepresentations, misconduct or negligence of the User or their employees; infringement of Intellectual property rights or privacy rights; third party claims or suits; or disclosure of sensitive information."
    },
    {
      id: "miscellaneous",
      title: "Miscellaneous Terms",
      content: "learnerpro may change any fee or charge or institute new fees. The User agrees to pay all fees and charges levied. learnerpro shall not make any refunds of any amounts other than as agreed by these Terms. The User may receive communications such as service announcements, advertisements or administrative communications. learnerpro's sole obligation in event of interruption to Services shall be to use reasonable endeavours to restore Services. learnerpro shall not be liable for any applicable taxes and government levies. Any link to a third-party site is not an endorsement of that site. learnerpro does not endorse any advertiser or merchant linked to its Application. User's participation in any event, contest or promotion shall be governed by the respective terms and conditions. learnerpro shall not be liable for unauthorized access to User's data or unauthorized transmissions. learnerpro shall have the right to restrict or terminate User's access; modify or discontinue Services; require User to provide transaction details, without incurring any liability. User shall not describe itself as agent or representative of learnerpro or make any representations to customers or third parties. learnerpro shall not be liable for any breach due to force-majeure events. If any part of these Terms is determined invalid, it will be deemed superseded by a valid provision and the remainder shall continue in effect. learnerpro may assign or transfer its rights and obligations to any other party. In case of any dispute, the appropriate court in Mumbai shall have exclusive jurisdiction. No failure or delay by learnerpro in exercising any right shall operate as a waiver. All claims, matters and disputes are subject to the sole and exclusive jurisdiction of the competent courts in Mumbai, State of Maharashtra."
    }
  ];
</script>

<div class="bg-white min-h-screen">
  <!-- Header -->
  <div class="bg-white border-b border-gray-200 py-4">
    <div class="max-w-6xl mx-auto px-6">
      <h3 class="text-4xl font-bold text-gray-900 mb-2">Terms and Conditions</h3> 
    </div>
  </div>

  <!-- Content -->
  <div class="max-w-6xl mx-auto px-6 py-12">
    <div class="space-y-10">
      {#each sections as section}
        <div id={section.id} class="scroll-mt-20">
          <h4 class="text-xl font-semibold text-gray-700 mb-4">{section.title}</h4>
          <p class="text-gray-700 leading-relaxed text-base">{section.content}</p>
        </div>
      {/each}
    </div>
  </div>
</div>

<Footer />

<style>
  /* Smooth scrolling */
  html {
    scroll-behavior: smooth;
  }
</style>