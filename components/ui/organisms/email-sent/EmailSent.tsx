import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/atoms/card/card";
import { Alert, AlertDescription } from "@/components/ui/atoms/alert/alert";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/atoms/button/button";
import { memo } from "react";

interface Props {
  cardTitle: React.ReactNode;
  cardDescription?: React.ReactNode;
  alertDescription?: React.ReactNode;
  redirectText: React.ReactNode;
  redirectLink: string;
}

interface inputsType {
  props: Props;
}

const EmailSent = ({ props }: inputsType) => {
  return (
    <main className="flex flex-col items-center justify-center h-dvh">
      <Card className="w-87.5">
        <CardHeader>
          <CardTitle>{props.cardTitle}</CardTitle>
          <CardDescription className="text-green-600 text-lg">
            {props.cardDescription}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Alert variant="default" className="text-green-600">
            <CheckCircle2 />
            <AlertDescription>{props.alertDescription}</AlertDescription>
          </Alert>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link href={props.redirectLink}>
            <Button variant={"link"} className="px-0 gap-2">
              <ArrowLeft size={15} />
              {props.redirectText}
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </main>
  );
};

export default memo(EmailSent);
