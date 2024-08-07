import { InstructorField } from "@/lib/definitions";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const InstructorCard = ({ instructor }: { instructor: InstructorField }) => {
  return (
    <div className="my-28">
      <div className="text-center my-5">
        <h2 className="mt-10 text-3xl font-semibold tracking-wider transition-colors first:mt-0">
          INSTRUCTOR
        </h2>
        <h3 className="text-xl font-semibold tracking-tight">
          {instructor.name}
        </h3>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center max-w-5xl mx-auto">
        <div className="flex-1 relative aspect-square w-full h-80">
          <Image
            src={instructor.image_url}
            alt={instructor.name}
            fill
            className="rounded-sm object-cover"
          />
        </div>
        <div className="flex-1">
          <CardHeader>
            <CardTitle>{instructor.name}</CardTitle>
            <CardDescription>Email: {instructor.email}</CardDescription>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Our instructor excels in both general education and leadership
              training, bringing years of experience and a deep commitment to
              student success. They emphasize a holistic approach to learning,
              fostering critical thinking, creativity. With expertise in
              curriculum development and a proven track record of mentoring,
              they guide students toward academic and professional excellence.
              Their interactive teaching style encourages active participation
              and collaboration, making learning engaging and dynamic. Committed
              to continuous improvement, they stay updated with the latest
              educational trends and best practices. Their dedication ensures a
              supportive and inclusive learning environment for all students.
            </CardDescription>
          </CardContent>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
