import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useRef,
} from "react";
import reducer from "./reducer";

const initialState = {
  currentUser: null,
  openLogin: false,
  loading: false,
  alert: { open: false, severity: "info", message: "" },
  profile: { open: false, file: null, photoURL: "" },
  images: [],
  details: { title: "", description: "", price: 0 },
  location: { lng: 0, lat: 0 },
  // location: { lng: 17.966667, lat: 102.6 },
  rooms: [],
  priceFilter: 50,
  addressFilter: null,  //ສະແດງຊ່ອງຄົ້ນຫາຂໍ້ມູນ ຢູ່ໄຊບາ
  filteredRooms: [],    //ກອງຂໍ້ມູນໃນແຜນທີ່
  room: null,
  // users: [],
};

const Context = createContext(initialState);

export const useValue = () => {
  return useContext(Context);
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const mapRef = useRef();
  const containerRef = useRef();  // ສົ່ງຄ່າໄປ Sidebar.js
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      dispatch({ type: "UPDATE_USER", payload: currentUser });
    }
  }, []);
  return (
    // <Context.Provider value={{ state, dispatch, mapRef, containerRef }}>
    <Context.Provider value={{ state, dispatch, mapRef, containerRef }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
