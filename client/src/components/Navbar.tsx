import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const NavBar: React.FC = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  return (
    <header>
      <div className="hidden lg:flex bg-white rounded items-center justify-center space-x-28 py-3 max-w-screen-lg mx-auto mt-5">
        <div>
          <Link className="hover:text-sky-500" to={"/"}>
            Events
          </Link>
        </div>
        <div>
          <Link className="hover:text-sky-500" to={"/user"}>
            My tickets
          </Link>
        </div>
        <div className="flex gap-1.5 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 hover:rotate-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
            />
          </svg>
          FastTickets
        </div>
        <div>
          <Link
            className="hover:text-sky-500"
            onClick={() => {
              window.localStorage.clear();
              navigate("/");
              window.location.reload();
            }}
            to={"/"}
          >
            Logout
          </Link>
        </div>
        <div>
          <Link className="hover:text-sky-500" to={"/eliminate"}>
            Eliminate account
          </Link>
        </div>
      </div>
      <div className="flex flex-col lg:hidden bg-white rounded items-center justify-center py-1">
        <div className="flex gap-1.5 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 hover:rotate-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
            />
          </svg>
          FastTickets
          <button onClick={() => setShow(!show)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
              />
            </svg>
          </button>
        </div>
        <hr></hr>
        <div
          className="grid md:grid-cols-4 sm:grid-cols-2 items-center mt-5"
          style={{ display: show ? "" : "none" }}
        >
          <div>
            <Link className="hover:text-sky-500" to={"/"}>
              Events
            </Link>
          </div>
          <div>
            <Link className="hover:text-sky-500" to={"/user"}>
              My tickets
            </Link>
          </div>
          <div>
            <Link
              className="hover:text-sky-500"
              onClick={() => {
                window.localStorage.clear();
                navigate("/");
                window.location.reload();
              }}
              to={"/"}
            >
              Logout
            </Link>
          </div>
          <div>
            <Link className="hover:text-sky-500" to={"/eliminate"}>
              Eliminate account
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
