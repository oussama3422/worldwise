import CityItem from "./CityItem";  
import styles from "./CityList.module.css";  
import Spinner from "./Spinner";  
import Message from "./Message";  
import { useCities } from "../contexts/CitiesContext";  

function CityList() {  
  const { cities, isLoading } = useCities();  
  if (isLoading) return <Spinner />;  

  if (!cities.length)  
    return (  
      <Message message="Add your first city by clicking on a city on the map" />  
    );  

  const uniqueCities = cities.map((city, index) => ({  
    ...city,  
    uniqueKey: city.id || index // Fallback to index if id is not unique  
  }));  

  return (  
    <ul className={styles.cityList}>  
      {uniqueCities.map((city) => (  
        <CityItem city={city} key={city.uniqueKey} />  
      ))}  
    </ul>  
  );  
}  

export default CityList;