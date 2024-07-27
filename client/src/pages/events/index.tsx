export const EventsPage: React.FC = () => {
  return (
    <main>
      <p className="text-2xl font-bold text-center mt-5">Available events</p>
      <div className="grid grid-cols-4 max-w-screen-lg gap-5 mx-auto mt-[30px]">
        <a href="#" className="bg-white rounded overflow-hidden space-y-1">
          <div>
            <img src="https://www.kissfm.es/wp-content/uploads/2021/08/226753219_380847860078288_1941988628228492225_n.jpg" />
          </div>
          <div>
            <p className="ml-2">The Weeknd</p>
          </div>
          <div>
            <p className="ml-2">Date: July 12, 2025</p>
          </div>
          <div>
            <p className="ml-2">Place: Seville</p>
          </div>
        </a>
      </div>
    </main>
  );
};
