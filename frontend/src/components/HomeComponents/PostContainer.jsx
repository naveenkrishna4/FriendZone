import { useContext, useState } from "react";
import { MyContext } from "../../context/MyContext";
import { AiOutlineSend } from "react-icons/ai";
import { GiWorld } from "react-icons/gi";
import { BiImageAdd } from "react-icons/bi";
import { Button, InputFile } from "../index";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const PostContainer = () => {
  const { loggedUser, fetchPostAgain, setFetchPostAgain } =
    useContext(MyContext);

  const [sentimentResult, setSentimentResult] = useState(null);
  const [caption, setCaption] = useState("");
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const imgUpload = (pic) => {
    setLoading(true);

    toast({
      title: `pic uploading....`,
      // status: "success",
      duration: 2500,
      position: "top",
      isClosable: true,
    });

    if (pic === undefined) {
      alert("pic is undefined!");
      return;
    }

    if (
      pic.type === "image/png" ||
      pic.type === "image/jpeg" ||
      pic.type === "image/jpeg"
    ) {
      const data = new FormData();

      data.append("file", pic);
      data.append("upload_preset", "socialMeidaProject");
      data.append("cloud_name", "dvjzuiyp1");

      fetch("https://api.cloudinary.com/v1_1/dvjzuiyp1/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setImg(data.url.toString());
          setLoading(false);
          // console.log("this is url-> ", data.url.toString());
          toast({
            title: `pic uploaded`,
            status: "success",
            duration: 1800,
            position: "top",
          });
        });
    }
  };

  const createPost = async () => {
    try {
      const response = await fetch("http://localhost:5000/analyze_sentiment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: caption }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setSentimentResult(data.sentiment.toString());
    } catch (error) {
      console.error("Error analyzing sentiment:", error);
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/post/create-post",
        {
          caption,
          img,
        },
        { withCredentials: true }
      );

      console.log(response);
      setCaption("");
      setImg("");
      toast({
        title: "Posted",
        status: "success",
        duration: 1800,
        position: "top",
        isClosable: true,
      });
      setFetchPostAgain(!fetchPostAgain);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className="bg-main-shade py-4 w-full my-5 rounded-md flex flex-col divide-y divide-white space-y-5 drop-shadow-lg">
      <div className="flex flex-row items-center px-2">
        <img
          className="inline-block w-9 rounded-full object-cover h-9"
          src={loggedUser?.pic}
          alt=""
        />
        <div className="flex flex-1 items-center justify-center px-2 w-full">
          <div className="w-full">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <GiWorld className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                id="search"
                name="search"
                className="block w-full rounded-md font-bold border border-transparent bg-seconday-shade text-text-color py-2 pl-10 pr-3 text-sm sm:text-sm"
                placeholder={"What's on your mind ?"}
                type="search"
                autoComplete="off"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                {loading ? (
                  ""
                ) : (
                  <Button
                    type="button"
                    className="inline-flex items-center rounded-full border border-transparent bg-primary-shade text-white shadow-sm focus:outline-none focus:ring-2 border-white p-1"
                    clickHandler={createPost}
                  >
                    <AiOutlineSend className="h-4 w-4" aria-hidden="true" />
                  </Button>
                )}
              </div>
              <div className="absolute inset-y-0 right-6 flex items-center mr-6">
                <Button
                  type="button"
                  className="inline-flex items-center rounded-full border border-transparent bg-primary-shade text-white shadow-sm focus:outline-none focus:ring-2 border-white p-1"
                >
                  <BiImageAdd className="h-4 w-4" aria-hidden="true" />
                </Button>
                <InputFile
                  id="userPhoto"
                  name="userPhoto"
                  onChange={(e) => imgUpload(e.target.files[0])}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {sentimentResult === "0" && (
        <div className="bg-gray-200 text-center p-4 rounded-md">
          <p className="text-lg text-gray-800">
            Don't be depressed. If you need help, feel free to talk to our
            assistant.
          </p>
          <p className="text-sm text-gray-600 mt-2">
            You can start a conversation with our assistant
            <Link to="/chatbot" className="ml-1 underline">
              here
            </Link>
            .
          </p>
        </div>
      )}
    </div>
  );
};

export default PostContainer;
