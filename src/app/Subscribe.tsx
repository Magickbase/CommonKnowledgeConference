"use client";
import clsx from "clsx";
import { FC, ComponentProps, useState, useEffect } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@/trpc/react";
import { useForm, SubmitHandler } from "react-hook-form";

const formSchema = z.object({
  email: z
    .string()
    .min(1, "Input can’t be empty")
    .email("Incorrect email format"),
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
  const email = watch('email')
  const mutation = api.newsLetter.signup.useMutation();
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    setSubscribed(false)
  }, [email])

  const onSubmit: SubmitHandler<FormData> = (data) => {
    mutation.mutateAsync({ email: data.email }).then(() => {
      setSubscribed(true)
    }).catch(() => {
      setError('email', { message: 'Failed to add user to newsletter' })
    })
  }

  return (
    <div className={clsx("flex justify-center", className)} {...props}>
      <div className="flex flex-col gap-2">
        <div className="md:text-xl font-bold text-sm">
          Sign up to receive updates and attendance information.
        </div>
        <form className="flex gap-2" onSubmit={handleSubmit(onSubmit)}>
          <input
            className={clsx(
              "flex-1 rounded-full border-2 border-solid md:py-3 md:px-6 px-4 py-2 bg-black bg-opacity-10 placeholder:text-black placeholder:opacity-50",
              { ['border-[#FF3434]']: errors.email },
              { ['border-black']: !errors.email },
            )}
            placeholder="Your email address"
            disabled={mutation.isPending}
            {...register("email")}
          />
          <button
            className="rounded-full border-2 border-solid bg-[#E2892B] border-black md:py-3 md:px-6 px-4 py-2"
            type="submit"
          >
            Stay Updated
          </button>
        </form>

        {errors.email ? (
          <div className="text-[#FF3434]">{errors.email.message}</div>
        ) : subscribed ? (
          <div>A confirmation email has been sent to your mailbox</div>
        ) : null}
      </div>
    </div>
  );
};
