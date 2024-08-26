"use client";
import clsx from "clsx";
import { FC, ComponentProps, useState, useEffect } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@/trpc/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  email: z
    .string()
    .min(1, "Input can’t be empty")
    .email("Incorrect email format"),
  name: z.string().optional(),
});

export type FormData = z.infer<typeof formSchema>;

export const Subscribe: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });
  const email = watch("email");
  const mutation = api.newsLetter.signup.useMutation();
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    setSubscribed(false);
  }, [email]);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    mutation
      .mutateAsync({ email: data.email, name: data.name })
      .then((res) => {
        if (!res.success) throw new Error(res.error?.message);

        setSubscribed(true);
      })
      .catch((err) => {
        console.error(err);
        setError("email", { message: "Failed to add user to newsletter" });
      });
  };

  return (
    <div
      className={clsx("flex flex-col items-center w-[300px] xl:w-[670px] gap-8", className)}
      {...props}
    >
      <div className="text-lg xl:text-2xl text-center">
        Sign up to receive updates and attendance information.
      </div>
      <form className="flex flex-col items-center gap-4 w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col xl:flex-row gap-4 w-full">
          <input
            className="border-2 flex-1 border-[#FD480D] bg-transparent rounded-full placeholder:text-[#FD480D] placeholder:text-center placeholder:text-xl py-3 px-6"
            placeholder="Your Name"
            disabled={mutation.isPending}
            {...register("name")}
          />
          <input
            className="border-2 flex-1 border-[#FD480D] bg-transparent rounded-full placeholder:text-[#FD480D] placeholder:text-center placeholder:text-xl py-3 px-6"
            placeholder="Your Email"
            disabled={mutation.isPending}
            {...register("email")}
          />
        </div>

        <div
          className={clsx("md:text-xl text-xs", {
            ["text-[#FF3434]"]: Boolean(errors.email),
          })}
        >
          {errors.email ? (
            errors.email.message
          ) : subscribed ? (
            "A confirmation email has been sent to your mailbox"
          ) : (
            <span>&nbsp;</span>
          )}
        </div>

        <Button type="submit" size='sm'>GET UPDATES</Button>
      </form>
    </div>
  );
};
