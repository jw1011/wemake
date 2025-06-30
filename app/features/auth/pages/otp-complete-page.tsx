import { Form } from "react-router";
import InputPair from "~/common/components/input-pair";
import { Button } from "~/common/components/ui/button";
import type { Route } from "./+types/otp-complete-page";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Complete OTP | wemake" }];
};

export default function OtpCompletePage() {
  return (
    <div className="flex flex-col relative items-center justify-center h-full">
      <div className="flex items-center flex-col justify-center w-full max-w-md gap-10">
        <h1 className="text-2xl font-semibold">Enter OTP Code</h1>
        <p className="text-sm text-muted-foreground">
          We sent a 4-digit code to your email. Please enter it below.
        </p>
        <Form className="w-full space-y-4">
          <InputPair
            label="OTP Code"
            description="Enter the 4-digit code"
            name="otp"
            id="otp"
            required
            type="text"
            placeholder="1234"
            maxLength={4}
            pattern="[0-9]{4}"
          />
          <Button className="w-full" type="submit">
            Verify OTP
          </Button>
        </Form>
      </div>
    </div>
  );
}
