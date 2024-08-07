"use client";
import { useBagStore } from "@/stores/bagStore";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import Link from "next/link";
import Image from "next/image";
import CourseCard3 from "../courses/CourseCard3";

const CheckoutItem = () => {
  const { bag } = useBagStore((state) => state);
  const router = useRouter();
  if (bag === null) router.push("/");
  if (bag === null) return <p>no items</p>;
  return <CourseCard3 course={bag} />;
};

export default CheckoutItem;
