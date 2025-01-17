const About = () => {
  return (
    <div className="h-screen bg-green-100 px-8 py-12">
      <h1 className="text-3xl font-bold text-green-600">About This Project</h1>
      <p className="mt-4 text-gray-800 text-lg">
        This project showcases the use of <span className="font-semibold text-green-500">React Router DOM</span> to manage 
        client-side navigation in a single-page application. Instead of reloading the entire page, navigation 
        happens seamlessly, enhancing the user experience.
      </p>
      <p className="mt-4 text-gray-800 text-lg">
        The application also uses <span className="font-semibold text-green-500">TailwindCSS</span> for simple and efficient styling. 
        React Router allows us to create a dynamic, fast, and modern web application with ease.
      </p>
    </div>
  );
};

export default About;
