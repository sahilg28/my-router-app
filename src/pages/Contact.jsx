const Contact = () => {
  return (
    <div className="h-screen bg-green-100 px-8 py-12">
      <h1 className="text-3xl font-bold text-green-600">Contact Me</h1>
      <p className="mt-4 text-gray-800 text-lg">
        Reach out to me via the following platforms:
      </p>
      <div className="mt-6">
        <a href="https://github.com/sahilg28" target="_blank"
          className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-lg mr-4 hover:bg-green-600 transition-all"
        >GitHub</a>

        <a href="https://x.com/sahilgupta_as" target="_blank"
          className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-green-600 transition-all"
        >Twitter</a>

      </div>
    </div>
  );
};

export default Contact;
