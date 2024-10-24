import AuthTabs from "@/app/(auth)/authTabs/authTabs";
import LoginModal from "@/app/(auth)/login/components/loginModal";
import Login from "@/app/(auth)/login/login";
import Container from "@/components/ui/container";
import Link from "next/link";

const Header = () => {
  const nabVar = [
    {
      id: 1,
      name: "All Relief Goods",
      link: "/allReliefGoods",
    },
  ];
  return (
    <Container className="sticky top-0">
      {/* logo */}
      <div className="relative z-0 my-3 flex items-center justify-between rounded-md bg-black p-4">
        <Link href="/">
          <p className="text-3xl font-bold tracking-wide">
            <span className="text-green-600">Peace</span>
            <span className="text-yellow-500">Will</span>
          </p>
        </Link>
        <div className="mr-4 space-x-4">
          {nabVar.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="text-lg text-white decoration-2 underline-offset-8 duration-200 hover:text-yellow-500 hover:underline"
            >
              {item.name}
            </Link>
          ))}
          <LoginModal
            buttonName="Login"
            buttonClass="text-lg text-white decoration-2 underline-offset-8 duration-200 hover:text-yellow-500 hover:underline bg-transparent hover:bg-transparent"
          >
            <div className="mt-20">
              <AuthTabs />
            </div>
          </LoginModal>
        </div>
      </div>
    </Container>
  );
};

export default Header;
