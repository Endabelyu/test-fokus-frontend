import React from "react";
import { Badge } from "./ui/badge";
import { BookOpen } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import MathRenderer from "./mathRenderer";

type QuestionSectionProps = {
  topic: string;
  category: string;
  difficulty: string;
  questionNumber: number;
  id: string;
  answer_type: string;
  question_text: string;
};

const QuestionSection = ({
  topic,
  difficulty,
  category,
  questionNumber,
  id,
  answer_type,
  question_text,
}: QuestionSectionProps) => {
  //   const isMobile = useIsMobile();

  return (
    <main className=" h-full flex flex-col p-4 md:p-8">
      <div id={id} className="w-full mx-auto">
        <section className="categoryLever flex items-center gap-2 mb-6">
          <Badge variant="category" className="capitalize">
            <BookOpen className="w-3.5 h-3.5 accent-slate-600" />
            {category}
          </Badge>
          <Badge
            variant={
              `${difficulty.toLowerCase()}` as "easy" | "medium" | "hard"
            }
            className={`capitalize `}
          >
            {difficulty}
          </Badge>
        </section>
        <section className="question mb-6">
          <Card className="md:w-full  min-h-1/2">
            <CardHeader>
              <CardTitle>{topic}</CardTitle>
              <CardDescription>Question {questionNumber}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-cyan-50 rounded-lg shadow-lg p-8">
                <MathRenderer text={question_text} />
              </div>
            </CardContent>
            <CardFooter className="">
              <form className="flex gap-6 w-full">
                <div className="grid gap-4 w-11/12">
                  <Label htmlFor="answer">Answer:</Label>
                  {answer_type === "text_input" ? (
                    <Input
                      id="answer"
                      type="text"
                      placeholder="Enter your answer here ..."
                      required
                    />
                  ) : (
                    <Input
                      id="answer"
                      type="number"
                      placeholder="Enter your answer here ..."
                      required
                    />
                  )}
                </div>
                <Button variant="submit" className="self-end" size={"lg"}>
                  Submit
                </Button>{" "}
              </form>
            </CardFooter>
          </Card>
        </section>
      </div>
    </main>
  );
};

export default QuestionSection;
