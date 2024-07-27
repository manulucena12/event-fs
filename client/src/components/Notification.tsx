import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { useEffect } from "react";
import { setNotification } from "../redux/reducers/notification";

export const NotiPopUp: React.FC = () => {
  const notification = useSelector((state: RootState) => state.notification);
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    if (notification) {
      setTimeout(() => {
        dispatch(setNotification(null));
      }, 3000);
    }
  }, [dispatch, notification]);
  return (
    <div>
      {notification && (
        <p className="block bg-slate-300 p-3 rounded shadow transition-all">
          {" "}
          {notification}{" "}
        </p>
      )}
    </div>
  );
};
