import { LockIcon } from "@/app/components/icons/lock-icon";
import { MailIcon } from "@/app/components/icons/mail-icon";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Checkbox } from "@nextui-org/checkbox";
import { Input } from "@nextui-org/input";
import { Link } from "@nextui-org/link";

const Page = () => {
  return (
    <>
      <Card className="mx-auto w-1/2 mt-5 p-3">
        <CardBody>
          <p className="text-primary mb-2 font-bold">Login</p>
          <form className="gap-4 grid grid-cols-1">
            <Input
              autoFocus
              isRequired
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
              isRequired
              placeholder="Enter your password"
              type="password"
              variant="bordered"
            />
            <div className="flex py-2 px-1 justify-between">
              <Checkbox
                classNames={{
                  label: "text-small",
                }}
              >
                Remember me
              </Checkbox>
              <Link color="primary" href="#" size="sm">
                Forgot password?
              </Link>
            </div>
            <div className="flex justify-end">
              <Button color="primary" type="submit">
                Login
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </>
  );
};

export default Page;
