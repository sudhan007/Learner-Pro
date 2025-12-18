<script lang="ts">
  import Footer from '../../components/Footer/Footer.svelte';

  interface Section {
    id: string;
    title: string;
    content: string;
  }

  const sections: Section[] = [
    {
      id: "cancellation",
      title: "Transaction Cancellation",
      content: "If a User has initiated a Transaction, the User cannot cancel the same once the Transaction has been initiated or processed."
    },
    {
      id: "bank-details",
      title: "Bank Account Details Responsibility",
      content: "User is solely responsible to add the Payee bank account details on the Application and the User must ensure that the details entered in respect of the account name, account number, IFSC code, etc are correct. learnerpro shall not be liable to check or validate the account details on behalf of the User. The User acknowledges that in case the User enters incorrect bank details, learnerpro will not be responsible or liable to refund any amount to the User whatsoever. learnerpro, the Service Providers and the Acquiring Banks will not be responsible in case the User initiates a wrong or incorrect transaction. Users shall have very well understood and acknowledge that payments when made into a bank account of the Payee are irreversible as the same falls under the personal jurisdiction of the said Person."
    },
    {
      id: "dispute-window",
      title: "Dispute and Query Resolution",
      content: "The User can raise a dispute or query in respect of a particular Transaction within a period of 3 (three) hours after initiation of such Transaction. Any dispute or query raised after 3 (three) hours will not be considered valid by learnerpro and learnerpro will not be liable to refund any money in such a scenario."
    },
    {
      id: "settled-transactions",
      title: "Post-Settlement Refunds",
      content: "In case the User claims a refund after the Transaction is settled, the User expressly agrees that such transactions cannot be rolled back and hence covenants to resolve this transaction with the Payee offline and inform learnerpro on such resolution."
    },
    {
      id: "no-refunds",
      title: "No Refunds Policy",
      content: "There shall be NO REFUNDS or REVERSAL of any kind for successfully initiated or processed Transactions; even where such transaction is effected or executed on account of any default or negligence of the User."
    },
    {
      id: "technical-failure",
      title: "Technical Failure Refunds",
      content: "However, the User shall be fully refunded for any kind of debits on account of technical failure on the Application. In such a case, the User shall be refunded the entire amount, including the Convenience Fee (if any), without any demur into their account within 7 (seven) to 10 (ten) working days."
    },
    {
      id: "convenience-fee",
      title: "Convenience Fee and Refunds",
      content: "All refunds to the Users shall not entail any Chargeback of Convenience Fee and related taxes."
    },
    {
      id: "suspicious-transactions",
      title: "Suspicious Transactions",
      content: "In case of User violating any terms of the Terms of Service, learnerpro reserves the right to hold back any payment which it feels as suspicious or invalid unless completely validated."
    }
  ];
</script>

<div class="bg-white min-h-screen">
  <!-- Header -->
  <div class="bg-white border-b border-gray-200 py-4">
    <div class="max-w-6xl mx-auto px-6">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">Cancellation and Refund Policy</h1> 
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