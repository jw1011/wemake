import type { Route } from "common/pages/+types";

import { Form } from "react-router";
import { Hero } from "~/common/components/hero";
import InputPair from "~/common/components/input-pair";
import SelectPair from "~/common/components/select-pair";
import { Button } from "~/common/components/ui/button";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Submit | wemake" },
    { name: "description", content: "회원가입 페이지" },
  ];
};

export default function SubmitPostPage() {
  return (
    <div>
      <Hero
        title="Create Discussion"
        subtitle="Ask questions, share ideas, and connect with other developers"
      ></Hero>
      <Form className="flex flex-col gap-10 max-w-screen-md mx-auto">
        <InputPair
          label="Title"
          name="title"
          id="title"
          description="(40 characters of less)"
          required
          placeholder="i.e what is the best productivity tool?"
        ></InputPair>
        <SelectPair
          required
          name="category"
          label="Category"
          description="Select the category that best fits your discussion"
          placeholder="i.e Productivity"
          options={[
            { label: "Productivity", value: "productivity" },
            { label: "Programming", value: "programming" },
            { label: "Design", value: "design" },
          ]}
        ></SelectPair>
        <InputPair
          label="Content"
          name="content"
          id="content"
          description="(1000 characters of less)"
          required
          placeholder="i.e I'm looking for a tool that can help me manage my time and tasks. What are the best tools out there?"
          textArea
        ></InputPair>
        <Button className="mx-auto">Create Discussion</Button>
      </Form>
    </div>
  );
}
