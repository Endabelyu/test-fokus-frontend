import { useCallback, useState } from "react";
import "./index.css";
import QuestionSection from "./components/questionSection";
import { getQuestions } from "./httpCall/question";
import "katex/dist/katex.min.css";
import ChatArea from "./components/chatComponent/chatArea";
import { useIsMobile } from "./hooks/useMobile";
import DrawerChat from "./components/chatComponent/drawerChat";
import type { Message } from "./components/interface/chatInterface";
import DrawerTriggerButton from "./components/chatComponent/drawerButtonTrigger";
import { nanoid } from "nanoid";
import { getAiResponse } from "./httpCall/aiResponse";

const questionData = await getQuestions();
const aiResponse = await getAiResponse();

function App() {
  // State and Hooks
  const isMobile = useIsMobile();
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  // const [addUserMessage, setAddUserMessage] = useState("");
  // State and Hooks

  // Functions

  // console.log(aiResponse["hint"], "response");
  const simulateResponse = useCallback((responseText: string) => {
    const textContent = aiResponse[`${responseText}`];
    // console.log(textContent, "test");
    setIsTyping(true);
    // Simulate typing delay
    setTimeout(() => {
      const aiMessage: Message = {
        id: nanoid(),
        role: "assistant",
        content: textContent
          ? textContent
          : `I'm sorry, your request is not available at the moment. Please try again later.`,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  }, []);
  const addUserMessage = useCallback((content: string) => {
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);
    return userMessage;
  }, []);

  const handleSendMessage = useCallback(
    (message: string) => {
      // console.log(message, "mess");
      addUserMessage(message);
      simulateResponse(message);
      // setMessages(prevMessages => [
      //   ...prevMessages,
      //   {
      //     id: nanoid(),
      //     role: "user",
      //     content: message,
      //     timestamp: new Date(),
      //   },
      // ]);
      // setIsTyping(false);
    },
    [addUserMessage, simulateResponse],
  );

  // const handleSendMessage = useCallback(
  //   (message: string) => {
  //     addUserMessage(message);
  //     simulateResponse(mockGeneralResponse);
  //   },
  //   [addUserMessage, simulateResponse],
  // );

  const handleHint = useCallback(() => {
    addUserMessage("Give me a hint");
    simulateResponse("hint");
  }, [addUserMessage, simulateResponse]);

  const handleRevealSteps = useCallback(() => {
    addUserMessage("Reveal the steps");
    simulateResponse("steps");
  }, [addUserMessage, simulateResponse]);

  const handleCloseDrawer = useCallback(() => {
    setIsDrawerOpen(false);
  }, []);
  // Functions
  return (
    <div className="flex h-screen w-screen bg-slate-50">
      {/* <div className="flex h-screen"> */}
      {/* Question Section - 60% */}
      <div className="md:w-[60%] h-full border-r border-border w-full">
        <QuestionSection
          topic={questionData.topic}
          difficulty={questionData.difficulty}
          category={questionData.category}
          questionNumber={questionData.question_number}
          id={questionData.id}
          answer_type={questionData.answer_type}
          question_text={questionData.raw_text}
        />
        <DrawerTriggerButton
          onClick={() => setIsDrawerOpen(true)}
          hasUnread={messages.length > 0}
          isDrawerOpen={isDrawerOpen}
        />
      </div>

      {/* Chat Panel - 40% */}
      {isMobile ? (
        <DrawerChat
          isDrawerOpen={isDrawerOpen}
          setISDrawerOpen={setIsDrawerOpen}
        >
          <ChatArea
            messages={messages}
            isTyping={isTyping}
            onSendMessage={handleSendMessage}
            onHint={handleHint}
            onRevealSteps={handleRevealSteps}
            showCloseButton={isMobile}
            onClose={handleCloseDrawer}
          />
        </DrawerChat>
      ) : (
        <div className="hidden md:w-[40%] md:block ">
          <ChatArea
            messages={messages}
            isTyping={isTyping}
            onSendMessage={handleSendMessage}
            onHint={handleHint}
            onRevealSteps={handleRevealSteps}
            showCloseButton={isMobile}
            onClose={handleCloseDrawer}
          />
        </div>
      )}
    </div>
    // </div>
  );
}

export default App;
