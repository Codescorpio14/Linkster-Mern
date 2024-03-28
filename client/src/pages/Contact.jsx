const Contact = () => {
  return (
    <section className="contact bg-gray-100 py-16 px-8">
      <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
      <p className="text-gray-700 text-center mb-12">
        We'd love to hear from you! Fill out the form below and we'll get back
        to you as soon as possible.
      </p>
      <form className="grid grid-cols-1 gap-6">
        <div className="col-span-full">
          <label htmlFor="name" className="text-gray-700 block mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
            className="rounded-md border border-gray-300 px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="col-span-full">
          <label htmlFor="email" className="text-gray-700 block mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="youremail@example.com"
            required
            className="rounded-md border border-gray-300 px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="col-span-full">
          <label htmlFor="message" className="text-gray-700 block mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Write your message here..."
            required
            className="rounded-md border border-gray-300 px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
        >
          Send Message
        </button>
      </form>
      <p className="text-gray-700 text-center mt-12">
        Alternatively, you can reach us at:
      </p>
      <ul className="contact-info flex justify-center items-center space-x-6 mt-4">
        <li className="flex items-center space-x-2">
          <span className="inline-block w-6 h-6 rounded-full bg-blue-500"></span>
          <a
            href="mailto:info@yourcompany.com"
            className="text-gray-700 hover:text-blue-500"
          >
            info@yourcompany.com
          </a>
        </li>
        <li className="flex items-center space-x-2">
          <span className="inline-block w-6 h-6 rounded-full bg-blue-500"></span>
          <a
            href="tel:+1234567890"
            className="text-gray-700 hover:text-blue-500"
          >
            +1 (234) 567-890
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
