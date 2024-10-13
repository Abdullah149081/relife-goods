import Container from "@/components/ui/container";
import Link from "next/link";

const Header = () => {
  const nabVar = [
    {
      name: "All Relief Goods",
      link: "/allReliefGoods",
    },
    {
      name: "Login",
      link: "/login",
    },
  ];
  return (
    <Container>
      {/* logo */}
      <div className="my-3 flex items-center justify-between bg-black p-4 rounded-md">
        <div>
          <p className="text-3xl font-bold tracking-wide">
            <span className="text-green-600">Peace</span>
            <span className="text-yellow-500">Will</span>
          </p>
        </div>
        <div className="space-x-4 mr-4">
          {nabVar.map((item, index) => (
            <Link key={index} href={item.link} className="text-lg text-white hover:text-yellow-500 duration-200 hover:underline underline-offset-8 decoration-2">
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Header;
