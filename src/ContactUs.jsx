import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

function ContactUs() {
  return (
    <div className="mt-10 grid gap-4 sm:grid-cols-2">
      <ContactInfo />

      <div>
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactUs;
