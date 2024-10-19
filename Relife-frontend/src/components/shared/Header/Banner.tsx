import Container from "@/components/ui/container";
import Location from "./Location";

const Banner = () => {
  return (
    <>
      <div className="absolute inset-0 -top-[100px] -z-50 w-full bg-[#0a5348]">
        <div className="absolute inset-0 bg-black/10" />
        <Container className="relative h-full">
          <div className="flex h-full items-center justify-center">
            <div className="flex flex-col items-center gap-7">
              <p className="text-3xl font-semibold tracking-wider text-white">
                Inspiring a lifestyle of ease and balance
              </p>
              <h1 className="text-7xl font-black tracking-wider text-yellow-500">
                DONATION
              </h1>
              <p className="text-3xl tracking-wider text-white">
                Bringing calm and comfort to everyday lives.
              </p>
            </div>
          </div>
        </Container>
      </div>
      <Location />
    </>
  );
};

export default Banner;
