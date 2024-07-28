import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";

export const EventsPage: React.FC = () => {
  const events = useSelector((state: RootState) => state.events);
  const navigate = useNavigate();

  return (
    <main>
      <p className="text-2xl font-bold text-center mt-5">Available events</p>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 xs:max-w-screen-[1px] sm:max-w-xs md:max-w-screen-sm sm:grid-cols-2 lg:max-w-screen-lg gap-5 mx-auto mt-[30px]">
        {events.length !== 0 &&
          events.map((e) => (
            <a
              key={e.id}
              href="#"
              onClick={() => navigate(`/event/${e.id}`)}
              className="bg-white rounded overflow-hidden space-y-1"
            >
              <div className="h-40 w-full overflow-hidden">
                <img className="h-full w-full object-cover" src={e.img} />
              </div>
              <div>
                <p className="ml-2"> {e.artist} </p>
              </div>
              <div>
                <p className="ml-2">Date: {e.date} </p>
              </div>
              <div>
                <p className="ml-2">Place: {e.city} </p>
              </div>
            </a>
          ))}
      </div>
    </main>
  );
};
