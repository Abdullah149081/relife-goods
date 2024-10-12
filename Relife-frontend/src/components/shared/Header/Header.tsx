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
      <div className="my-3 flex items-center justify-between">
        <div>
          <img
            className="rounded-full object-cover"
            src="https://via.placeholder.com/40x40"
            alt="logo"
          />
        </div>
        <div className="space-x-4">
          {nabVar.map((item, index) => (
            <Link key={index} href={item.link} className="text-lg">
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Header;
