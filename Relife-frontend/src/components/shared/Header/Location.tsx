import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { Bell, Clock, MapPin } from "lucide-react";

const Location = () => {
  const Location = [
    {
      name: "Our Location",
      address: ["7x7x xxxxxxxxxx", "Dhaka, Bangladesh"],
      icon: <MapPin className="text-r-secondary size-5" />,
    },
    {
      name: "Our Hours",
      address: ["Every Day: 9am - 5pm", "Holiday Closed"],
      icon: <Clock className="text-r-secondary size-5" />,
    },
    {
      name: "Current Events",
      address: ["24x xxxxxxxxxx", "Dhaka, Bangladesh"],
      icon: <Bell className="text-r-secondary size-5" />,
    },
  ];

  return (
    <div className="absolute bottom-0 mx-auto w-full">
      <Container className="flex w-full items-center justify-center">
        <div className="bg-black/60 p-2 text-white">
          <div className="r-border px-5 py-4">
            <div className="flex items-center justify-center gap-16">
              {Location.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start justify-start gap-4"
                >
                  <p className="inline-flex items-center justify-center gap-2 uppercase">
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                  </p>
                  <div className="flex flex-col items-start justify-start gap-2">
                    {item.address.map((line, lineIndex) => (
                      <p
                        key={lineIndex}
                        className="text-xs tracking-wider text-[#7c8282]"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
              <div className="">
                <Button className="bg-r-yellow rounded-full px-8 text-lg font-semibold uppercase text-gray-800 hover:bg-r-primary hover:text-white">
                  Donation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Location;
