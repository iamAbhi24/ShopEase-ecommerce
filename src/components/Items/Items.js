import React from "react";
import Item from "./Item";
import UseFetch from "../../Hooks/UseFetch";
import Paper from "@mui/material/Paper";
import Skeleton  from "@mui/material/Skeleton";

// list of items will display 
function Items({api}) {

  // eslint-disable-next-line
  // getting data from a custom hook useFetch under Hooks folder
  const [data, error, loading] = UseFetch(api);

  // it will display when error occur while fetching data
  if (error) return <div>Error: {error}</div>; 

  return (
    <div>
      {/* added paper component from material ui. It is a surafce for all item displaying under product section  */}
      <Paper elevation={3} square className="sm:w-10/12 p-10 m-auto sm:mt-10" >
        <div className="container mx-auto flex justify-center">
          <div className="grid md:grid-cols-3 gap-2">
            {/* Untill data is not coming, skeleton component from material ui has been used to display, the skeleton is getting used in place of loader. */}
            {/* from is a method used to create an array with six empty slots used to iterate  and dislay skeleton while data is getting fetched. */}
            {(loading ? Array.from(new Array(6)) :data.products).map((item) =>  {
            return (
              item ?
             <Item key={item.id} itemId={item.id} item={item}/>
              :
              <div>
               <Skeleton variant="rectangular" height={220} width={300}  />
               <Skeleton variant="text" />
               <Skeleton variant="text" />
               </div>
              )
            })}
          </div>
        </div>
      </Paper>
    </div>
  );
}

export default Items;
