 import {House} from "./house";
   
export  function HousesList({ houses }) {
   if (houses.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no houses matched your search parameters</h3>
      </div>
    );
  }
  return (
    <section className="houseslist">
      <div className="houseslist-center">
        {houses.map(item => {
          return <House key={item.id} house={item}  />;
        })}
      </div>
    </section>
  );
}
