import Image from "next/image";
import {
  AiOutlineCloseCircle,
  AiOutlineLeftCircle,
  AiOutlineRightCircle,
} from "react-icons/ai";

const DesignCard = ({
  design: { id, name, tags, image, typography, colors },
  modal,
  setModal,
  designs: lengthOfDesigns,
}) => {
  const closeModal = () => {
    setModal(0);
    document.body.style.overflowY = "auto";

    console.log("Closed Modal");
  };

  const handleOpenModal = (id) => {
    setModal(id);
    document.body.style.overflowY = "hidden";
  };

  const handleCloseModal = () => {
    closeModal();
  };

  // NOTE: the state change when the function is done
  // good practice for mutating states
  const handleLeftPrev = (id) => {
    if (id === 1) {
      closeModal();
    } else {
      setModal((prevId) => prevId - 1);
    }
  };
  const handleRightNext = (id) => {
    if (id >= lengthOfDesigns.length) {
      closeModal();
    } else {
      setModal((prevId) => prevId + 1);
    }
  };

  return (
    <>
      <Image
        src={image}
        className="cursor-pointer "
        alt="Design Image"
        width="300"
        height="180"
        layout="responsive"
        objectFit="cover"
        onClick={() => handleOpenModal(id)}
      />

      {/* MODAL: */}
      {/* this pop-up modal will show when the user clicks any design cards */}

      {modal === id && (
        <div className="fixed top-0 left-0 z-50 flex flex-col items-center justify-center w-screen h-screen  bg-dark/80">
          {/* ToDo: pass the image here by creating a new component filtered by the click DesignCard */}
          <div className="relative w-full md:w-150 lg:w-200 lg:h-120">
            <Image
              src={image}
              className=""
              alt="Design Image"
              width="300"
              height="170"
              layout="responsive"
              // layout="fill"
              objectFit="cover"
            />
            <div className="absolute top-0 flex flex-row items-center justify-between w-full h-full px-5 ">
              {/* Swipper Left */}
              <button
                className="drop-shadow-lg"
                onClick={() => handleLeftPrev(id)}
              >
                <span className="text-3xl text-light">
                  <AiOutlineLeftCircle />
                </span>
              </button>
              {/* Swipper Right */}
              <button
                className="drop-shadow-lg"
                onClick={() => handleRightNext(id)}
              >
                <span className="text-3xl text-light">
                  <AiOutlineRightCircle />
                </span>
              </button>
            </div>
          </div>
          {/* Close Button for Modal */}
          <button
            className="z-50 flex flex-row items-center pt-4 space-x-2 "
            onClick={() => handleCloseModal()}
          >
            <span className="text-3xl text-light">
              {" "}
              <AiOutlineCloseCircle />
            </span>{" "}
            <span>Close</span>
          </button>
        </div>
      )}
    </>
  );
};

export default DesignCard;
