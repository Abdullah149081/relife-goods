import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

type LoginModalProps = {
  children: React.ReactNode;
  className?: string;
  buttonName: string;
  buttonClass?: string;
  contentClass?: string;
};

const LoginModal = ({
  children,
  className,
  buttonName,
  contentClass,
  buttonClass,
}: LoginModalProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className={cn(buttonClass)}>{buttonName}</Button>
      </SheetTrigger>
      <SheetContent className={cn("sm:max-w-[525px]", className)}>
        <div className={cn(contentClass)}>{children}</div>
      </SheetContent>
    </Sheet>
  );
};

LoginModal.defaultProps = {
  className: "",
  contentClass: "",
  buttonClass: "",
};

export default LoginModal;
