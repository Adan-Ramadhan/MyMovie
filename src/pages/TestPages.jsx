import { useState } from "react";

const TestPages = () => {
  const [isActive, setIsActive] = useState("");

  return (
    <div>
      <div>
        <h1>Test State</h1>
        <div className="flex gap-x-5">
          <button onClick={() => setIsActive("video")}>Video</button>
          <button onClick={() => setIsActive("image")}>Image</button>
        </div>
      </div>

    {isActive == "video" && (
      <div>div video</div>
    )}
    {isActive == "image" && (
      <div>div image</div>
    )}

    </div>
  );
};

export default TestPages;
