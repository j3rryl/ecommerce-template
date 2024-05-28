import { LockIcon } from "@/app/components/icons/lock-icon";
import { MailIcon } from "@/app/components/icons/mail-icon";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Input } from "@nextui-org/input";

const Page = () => {
  return (
    <>
      <Card className="mx-auto w-1/2 mt-5 p-3">
        <CardBody>
          <p className="text-primary mb-2 font-bold">Register</p>
          <form className="gap-4 grid grid-cols-1">
            <Input
              autoFocus
              label="Name"
              type="text"
              placeholder="Enter your name"
              variant="bordered"
            />
            <Input
              autoFocus
              label="Phone Number"
              type="tel"
              placeholder="Enter your phone number"
              variant="bordered"
            />
            <Input
              autoFocus
              endContent={
                <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              }
              label="Email"
              type="email"
              placeholder="Enter your email"
              variant="bordered"
            />
            <Input
              endContent={
                <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              }
              label="Password"
              placeholder="Enter your password"
              type="password"
              variant="bordered"
            />
            <div className="flex justify-end">
              <Button color="primary" type="submit">
                Register
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </>
  );
};

export default Page;
