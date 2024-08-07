import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LockIcon, VideoIcon } from "lucide-react";

const CourseOutlineItem = ({
  lesson,
  index,
  isEnrolled,
}: {
  lesson: string;
  index: number;
  isEnrolled: boolean;
}) => {
  return (
    <AccordionItem value={`item-${index + 1}`}>
      <AccordionTrigger>
        ({index + 1}) {lesson}
      </AccordionTrigger>
      <AccordionContent>
        <div className="flex gap-2 text-start items-center">
          {isEnrolled ? (
            <VideoIcon className="cursor-pointer" />
          ) : (
            <LockIcon size={24} />
          )}
          <p>{lesson}...</p>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default CourseOutlineItem;
