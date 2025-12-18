const TypingIndicator = () => {
  return (
    <div className="flex items-center gap-2 p-4 message-enter">
      <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-jojo-foreground text-sm font-semibold">
        J
      </div>
      <div className="bg-emerald-500 rounded-2xl rounded-tl-md px-4 py-3">
        <div className="flex items-center gap-1.5">
          <p className="text-white">Typing</p>
          <div className="w-2 h-2 rounded-full bg-emerald-300 typing-dot" />
          <div className="w-2 h-2 rounded-full bg-emerald-300 typing-dot" />
          <div className="w-2 h-2 rounded-full bg-emerald-300 typing-dot" />
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;
