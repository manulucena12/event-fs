import { useState } from "react";
import { handleLogin } from "../../utils/user";

export const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="flex flex-col items-center min-h-screen">
      <div className="flex space-x-5 mt-20 mb-[-30px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
          />
        </svg>
        <p className="text-4xl font-bold">FastTickets</p>
      </div>
      <article className="bg-white mx-auto flex flex-col items-center text-center p-9 space-y-10 h-[360px] rounded shadow mt-[100px]">
        <div>
          <p className="text-3xl font-bold mt-[-5px] mb-[-5px]">Login</p>
        </div>
        <form
          className="space-y-3"
          onSubmit={(event) => {
            handleLogin(event, username, password);
            setUsername("");
            setPassword("");
          }}
        >
          <p className="text-lg">Username</p>
          <input
            className="block bg-slate-100 rounded text-center mb-3 mt-3 focus:drop-shadow-2xl"
            placeholder="Jane Smith"
            required
            onChange={(event) => setUsername(event.target.value)}
          />
          <p className="text-lg">Password</p>
          <input
            className="block bg-slate-100 rounded text-center mt-3"
            type="password"
            placeholder="mysecrepassword"
            required
            onChange={(event) => setPassword(event.target.value)}
          />
          <button className="mt-4 p-2 bg-slate-100 rounded transition-colors hover:bg-sky-500 hover:text-white">
            Submit
          </button>
        </form>
        <div>Don't you have an account? Click here to create one!</div>
      </article>
    </main>
  );
};
