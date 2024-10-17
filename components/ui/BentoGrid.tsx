
import { cn } from "@/lib/utils";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-10 mt-10",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col justify-between h-full space-y-4 text-center rounded-md bg-gray-100 p-4 cursor-pointer hover:scale-105 hover:shadow-xl transition duration-200 shadow-input dark:shadow-none"
      )}
>
      <div className="flex justify-center">
        
        <div className="space-y-4">
          {img && (
        <img
        src={img}
        alt={img}
        className={cn(imgClassName, 'object-contain p-4 w-full h-40')}
        />
      )}
          <h1 className="text-xl font-medium">{title}</h1>
          <p className="text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
};
