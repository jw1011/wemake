import { Form } from "react-router";
import { Hero } from "~/common/components/hero";
import InputPair from "~/common/components/input-pair";
import SelectPair from "~/common/components/select-pair";
import { Button } from "~/common/components/ui/button";

export function meta() {
  return [
    { title: "Create Team | wemake" },
    { name: "description", content: "Team page description" },
  ];
}

export default function SubmitTeamPage() {
  return (
    <div className="space-y-20">
      <Hero
        title="Create Team"
        subtitle="Create a team to find a team mate."
      ></Hero>
      <Form className="max w-screen-2xl flex flex-col items-center gap-10 mx-auto">
        <div className="grid grid-cols-3 w-full gap-10">
          <InputPair
            label="What is the name fo your product?"
            description="20 characters max"
            name="name"
            maxLength={20}
            type="text"
            id="name"
            required
          ></InputPair>
          <SelectPair
            label="What is the stage of your product"
            description="Select the stage of your product"
            name="stage"
            required
            placeholder="Select the stage of your product"
            options={[
              { label: "Idea", value: "idea" },
              { label: "Prototype", value: "prototype" },
              { label: "MVP", value: "mvp" },
              { label: "Product", value: "product" },
            ]}
          ></SelectPair>
        </div>
        <Button type="submit" className="w-full max-w-sm" size="lg">
          Create team
        </Button>
      </Form>
    </div>
  );
}
