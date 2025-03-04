import { FaPhoneAlt } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';

function ContactInfo() {
  return (
    <div className="mx-3 rounded-lg bg-white p-6 shadow-lg">
      <div className="space-y-4">
        {/* Email Section */}
        <div className="rounded-lg border bg-blue-50 p-4 transition-colors duration-200 hover:bg-blue-100">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-blue-500 p-3">
              <GoMail size={24} className="text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Email</h3>
              <a
                href="mailto:buildneatnigltd@gmail.com"
                className="text-blue-600 hover:underline"
              >
                buildneatnigltd@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Phone Section */}
        <div className="rounded-lg border bg-green-50 p-4 transition-colors duration-200 hover:bg-green-100">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-green-500 p-3">
              <FaPhoneAlt size={24} className="text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
              <a
                href="tel:+234 708 116 8630"
                className="text-green-600 hover:underline"
              >
                +234 708 116 8630
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
