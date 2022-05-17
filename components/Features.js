const Features = ({ feature }) => {
  const createMarkup = () => {
    return {
      __html: feature,
    };
  };

  return (
    <>
      <li
        dangerouslySetInnerHTML={createMarkup()}
        className="text-dark dark:text-light text-lg"
      />
    </>
  );
};

export default Features;
