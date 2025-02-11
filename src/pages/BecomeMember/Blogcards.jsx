import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, MessageCircle } from "lucide-react";

export default function BlogCards() {
  return (
    <div className="border rounded-lg p-9 md:w-1/3 w-full max-w-md mx-auto">
      {[...Array(3)].map((_, index) => (
        <Card key={index} className="mb-8">
          <CardHeader className="mb-2">
            <CardTitle>
              <h4 className="text-xl text-black hover:text-red-500 transition-colors duration-300">
                Lorem ipsum dolor sit amet, cons ectetur adidis dicolo wiran.
              </h4>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex items-center text-sm text-gray-500 gap-4">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>23rd Jan 2022</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle size={14} />
              <span>33 Comments</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
