const Loading = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        
        <h1 className="text-3xl md:text-4xl font-medium tracking-wide">
          welcome to samoontha.com
        </h1>

        <div className="flex gap-2">
          <span className="w-3 h-3 bg-[#0b055b] rounded-full animate-bounce [animation-delay:-0.3s]" />
          <span className="w-3 h-3 bg-[#0b055b] rounded-full animate-bounce [animation-delay:-0.15s]" />
          <span className="w-3 h-3 bg-[#0b055b] rounded-full animate-bounce" />
        </div>

      </div>
    </div>
  );
};

export default Loading;
