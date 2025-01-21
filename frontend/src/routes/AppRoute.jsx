import Affilirovanie from "../pages/Affilirovanie/Affilirovanie";
import Undfound from "../pages/404/Undfound";
import About from "../pages/About/About";
import Aksiya from "../pages/Aksiya/Aksiya";
import AuditIzoh from "../pages/AuditIzoh/AuditIzoh";
import BiznesP from "../pages/BiznesPlan/BiznesP";
import ChorakIzoh from "../pages/ChorakIzoh/ChorakIzoh";
import Fakti from "../pages/Fakt/Fakti";
import Home from "../pages/home/Home";
import Nablyudat from "../pages/Nablyunat/Nablyudat";
import ProductDetails from "../pages/Products/components/ProductList/ProductList";
import Products from "../pages/Products/Products";
import Struktura from "../pages/Struktura/Struktura";
import Tender from "../pages/Tender/Tender";
import Ustav from "../pages/Ustav/Ustav";
import Vakancy from "../pages/Vakancy/Vakancy";
import YilIzohi from "../pages/YilIzohi/YilIzohi";
import Divident from "../pages/Divident/Divident";

export const routes = [
  {
    id: 1,
    path: "/",
    element: <Home />,
    fallback: <h1>Loading...</h1>,
  },
  {
    id: 2,
    path: "/Products",
    element: <Products />,
    fallback: <h1>Loading...</h1>,
  },
  {
    id: 3,
    path: "/product/:id",
    element: <ProductDetails />,
    fallback: <h1>Loading...</h1>,
  },
  {
    id: 4,
    path: "/Vakancy",
    element: <Vakancy />,
    fallback: <h1>Loading...</h1>,
  },
  {
    id: 5,
    path: "/Tenders",
    element: <Tender />,
    fallback: <h1>Loading...</h1>,
  },
  {
    id: 6,
    path: "/About",
    element: <About />,
    fallback: <h1>Loading...</h1>,
  },
  {
    id: 7,
    path: "/Ustav",
    element: <Ustav />,
    fallback: <h1>Loading...</h1>,
  },
  {
    id: 8,
    path: "/Struktura",
    element: <Struktura />,
    fallback: <h1>Loading...</h1>,
  },
  {
    id: 9,
    path: "/BiznesPlan",
    element: <BiznesP />,
    fallback: <h1>Loading...</h1>,
  },
  {
    id: 10,
    path: "/Fakt",
    element: <Fakti />,
    fallback: <h1>Loading...</h1>,
  },
  {
    id: 11,
    path: "/Aksiya",
    element: <Aksiya />,
    fallback: <h1>Loading...</h1>,
  },
  {
    id: 12,
    path: "/YilIzohi",
    element: <YilIzohi />,
    fallback: <h1>Loading...</h1>,
  },
  {
    id: 13,
    path: "/Audit",
    element: <AuditIzoh />,
    fallback: <h1>Loading...</h1>,
  },
  {
    id: 14,
    path: "/KvartalIzohi",
    element: <ChorakIzoh />,
    fallback: <h1>Loading...</h1>,
  },
  {
    id: 15,
    path: "/Nablyudat",
    element: <Nablyudat />,
    fallback: <h1>Loading...</h1>,
  },
  {
    id: 16,
    path: "/Affilirovanie",
    element: <Affilirovanie />,
    fallback: <h1>Loading...</h1>,
  },
  {
    id: 17,
    path: "/Divident",
    element: <Divident />,
    fallback: <h1>Loading...</h1>,
  },
  {
    id: 18,
    path: "*",
    element: <Undfound />,
    fallback: <h1>Loading...</h1>,
  },
];
