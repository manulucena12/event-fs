import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useParams } from "react-router-dom";
import { handleBooking } from "../../utils/events";
import { NotiBookPopUp } from "../../components/BookNoti";

export const SingleEventPage: React.FC = () => {
  const events = useSelector((state: RootState) => state.events);
  const user = useSelector((state: RootState) => state.user);
  const { eventId } = useParams();
  const eventSingle = events.find((e) => e.id === eventId);

  return (
    <main>
      <p className="text-2xl font-bold text-center mt-5">
        Book a ticket and enjoy listening {eventSingle?.artist} in live!
      </p>
      <div className="grid lg:max-w-screen-lg justify-center items-center mx-auto space-y-6">
        {eventSingle?.sites.map((s, index) => (
          <article key={index} className="bg-white w-[600px] mt-[40px] rounded">
            <p className="block text-lg font-bold ml-4">Site: {s.type}</p>
            <hr></hr>
            <p className="block text-lg ml-4">Price: {s.price}$</p>
            <p className="block text-lg ml-4">
              Available: {s.available} tickets{" "}
            </p>
            <button
              onClick={(event) =>
                handleBooking(event, {
                  // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
                  id: eventSingle.id!,
                  // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
                  username: user?.username!,
                  type: s.type,
                })
              }
              className="bg-slate-100 ml-4 mb-3 mt-2 rounded p-2 transition-colors hover:text-white hover:bg-sky-500"
            >
              Reservation
            </button>
          </article>
        ))}
        <NotiBookPopUp />
      </div>
    </main>
  );
};
