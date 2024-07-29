import { useState } from "react";
import { handleDelete } from "../../utils/user";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export const DeleteUserPage: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);
  const [password, setPassword] = useState("");

  return (
    <main>
      <p className="text-2xl text-center font-bold mt-5">
        Login again to delete your account
      </p>
      <article className="bg-white mx-auto flex flex-col items-center text-center p-9 space-y-11 h-[360px] rounded shadow mt-[70px] max-w-[500px] ">
        <div>
          <p className="text-3xl font-bold mt-[-5px] mb-[-5px]">Login</p>
        </div>
        <form
          className="space-y-3"
          onSubmit={(event) =>
            // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
            handleDelete(event, { username: user?.username!, password })
          }
        >
          <p className="text-lg">Username</p>
          <input
            className="block bg-slate-100 rounded text-center mb-3 mt-3 focus:shadow-2xl focus:outline-none"
            placeholder="Jane Smith"
            readOnly
            value={user?.username}
          />
          <p className="text-lg">Password</p>
          <input
            className="block bg-slate-100 rounded text-center mt-3 focus:outline-none"
            name="password"
            type="password"
            placeholder="mysecrepassword"
            required
            onChange={(event) => setPassword(event.target.value)}
          />
          <button className="mt-4 p-2 bg-slate-100 rounded transition-colors hover:bg-sky-500 hover:text-white">
            Submit
          </button>
        </form>
      </article>
    </main>
  );
};
