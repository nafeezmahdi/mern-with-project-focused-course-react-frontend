import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Cox's Bazar Sea Beach",
    description:
      "The longest unbroken natural sea beach in the world, known for its golden sand and beautiful sunsets.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0AM6DfXiNQQ5tQpX1_UYfk_tCCE6QutehFUBqUEPLcQ&s=10",
    address: "Cox's Bazar, Bangladesh",
    creator: "u1",
    location: {
      lat: 21.4272,
      lng: 91.9702,
    },
  },
  {
    id: "p2",
    title: "Lalbagh Fort",
    description:
      "An incomplete 17th-century Mughal fort complex that stands proudly before the Buriganga River.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0AM6DfXiNQQ5tQpX1_UYfk_tCCE6QutehFUBqUEPLcQ&s=10",
    creator: "u2",
    location: {
      lat: 23.7181,
      lng: 90.3877,
    },
  },
];

export default function UserPlaces() {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);

  return <PlaceList items={loadedPlaces} />;
}
