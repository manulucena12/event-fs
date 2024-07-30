import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { handleCancelation } from "../../utils/events";

export const UserPage: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <main>
      <p className="text-2xl font-bold text-center mt-5">
        {user?.username}'s information{" "}
      </p>
      <p className="text-xl text-center mt-5">
        You have {user?.tickets.length} tickets{" "}
      </p>
      <div className="grid lg:grid-cols-2 gap-4 lg:max-w-screen-lg mx-auto items-center md:max-w-screen-md justify-center md:grid-cols-1 lg:space-x-1">
        {user?.tickets.map((t) => (
          <article
            key={t.eventId}
            className="bg-white w-[500px] mt-[40px] rounded"
          >
            <p className="block text-lg font-bold ml-4">
              Artist: {t.artist}, {t.type}
            </p>
            <hr></hr>
            <p className="block text-lg ml-4">Date: {t.date} </p>
            <p className="block text-lg ml-4">Place: {t.place} </p>
            <button
              onClick={(event) => handleCancelation(event, t)}
              className="bg-slate-100 ml-4 mb-3 mt-2 rounded p-2 transition-colors hover:text-white hover:bg-red-600"
            >
              Cancel
            </button>
          </article>
        ))}
      </div>
    </main>
  );
};
