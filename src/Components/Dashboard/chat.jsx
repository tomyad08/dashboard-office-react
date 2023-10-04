const Chat = () => {
  return (
    <div className="hover:-translate-y-96 delay-200 duration-700 ease-in-out">
      <div className="flex justify-center mt-7">
        <div className="bg-green-800 w-50 border rounded-t-lg">
          <h1 className="text-sm font-semibold text-center p-2 text-white">
            Chat With Us
          </h1>
        </div>
      </div>
      <div className=" bg-green-300 p-2 rounded-lg">
        <div className=" h-80 items-center flex justify-center">
          <div className="h-70 text-green-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              height="120"
              fill="currentColor"
              className="bi bi-wechat"
              viewBox="0 0 16 16"
            >
              <path d="M11.176 14.429c-2.665 0-4.826-1.8-4.826-4.018 0-2.22 2.159-4.02 4.824-4.02S16 8.191 16 10.411c0 1.21-.65 2.301-1.666 3.036a.324.324 0 0 0-.12.366l.218.81a.616.616 0 0 1 .029.117.166.166 0 0 1-.162.162.177.177 0 0 1-.092-.03l-1.057-.61a.519.519 0 0 0-.256-.074.509.509 0 0 0-.142.021 5.668 5.668 0 0 1-1.576.22ZM9.064 9.542a.647.647 0 1 0 .557-1 .645.645 0 0 0-.646.647.615.615 0 0 0 .09.353Zm3.232.001a.646.646 0 1 0 .546-1 .645.645 0 0 0-.644.644.627.627 0 0 0 .098.356Z" />
              <path d="M0 6.826c0 1.455.781 2.765 2.001 3.656a.385.385 0 0 1 .143.439l-.161.6-.1.373a.499.499 0 0 0-.032.14.192.192 0 0 0 .193.193c.039 0 .077-.01.111-.029l1.268-.733a.622.622 0 0 1 .308-.088c.058 0 .116.009.171.025a6.83 6.83 0 0 0 1.625.26 4.45 4.45 0 0 1-.177-1.251c0-2.936 2.785-5.02 5.824-5.02.05 0 .1 0 .15.002C10.587 3.429 8.392 2 5.796 2 2.596 2 0 4.16 0 6.826Zm4.632-1.555a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0Zm3.875 0a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0Z" />
            </svg>
            <h1 className="text-xl text-green-800">Chat with us</h1>
          </div>
        </div>
        <div className="flex justify-end">
          <input
            className="p-2 bg-green-800 rounded-lg w-full focus:outline-none text-white"
            placeholder="Hai, ..."
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="green"
            className="bi bi-send mt-2 ms-2"
            viewBox="0 0 16 16"
          >
            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};
export default Chat;
