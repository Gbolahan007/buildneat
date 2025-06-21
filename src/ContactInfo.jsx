import { FaPhoneAlt } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';
import { FaHome } from 'react-icons/fa';

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
              <div className="flex flex-col">
                <a
                  href="tel:+2349160006285"
                  className="text-green-600 hover:underline"
                >
                  +234 916 000 6285
                </a>
                <a
                  href="tel:+2347081168630"
                  className="text-green-600 hover:underline"
                >
                  +234 708 116 8630
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Address Section */}
        <div className="rounded-lg border bg-yellow-50 p-4 transition-colors duration-200 hover:bg-yellow-100">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-yellow-500 p-3">
              <FaHome size={24} className="text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Address</h3>
              <p className="text-yellow-700">
                No. 22, Bankole Close, Gboshoro, Lagos State
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
