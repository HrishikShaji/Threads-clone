"use client";
import React, { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserValidation } from "@/lib/validations/user";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import * as z from "zod";
import Image from "next/image";
import { Textarea } from "../ui/textarea";
import { isBase64Image } from "@/lib/utils";
import { useUploadThing } from "@/lib/uploadthing";
import { usePathname, useRouter } from "next/navigation";
import { updateUser } from "@/lib/actions/user.actions";
import { CommentValidation } from "@/lib/validations/thread";
import { addCommentToThread, createThread } from "@/lib/actions/thread.actions";

interface Props {
  threadId: string;
  currentUserImg: string;
  currentUserId: string;
}

const Comment = ({ threadId, currentUserImg, currentUserId }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const form = useForm({
    resolver: zodResolver(CommentValidation),
    defaultValues: {
      thread: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof CommentValidation>) => {
    await addCommentToThread(
      threadId,
      values.thread,
      JSON.parse(currentUserId),
      pathname
    );
    form.reset();
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-10 flex items-center gap-4 border-y border-y-neutral-500 py-5 max-xs:flex-col">
          <FormField
            control={form.control}
            name="thread"
            render={({ field }) => (
              <FormItem className="flex items-center gap-3  w-full h-full ">
                <FormLabel>
                  <Image
                    src={currentUserImg}
                    alt="profile"
                    width={48}
                    height={48}
                    className="rounded-full h-full  object-cover"
                  />
                </FormLabel>
                <FormControl className="flex-1 font-semibold text-base text-teal-500">
                  <Input
                    placeholder="Comment..."
                    className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            className="rounded-3xl bg-teal-500 px-8 py-2 text-sm text-white max-xs:w-full"
            type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Comment;
