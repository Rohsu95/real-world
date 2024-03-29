import { getUser } from "./api/userAPI";
import { getPlaces } from "./api/placesAPI";
import NotFound from "./component/NotFound";
import Header from "./component/Header";
import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const Main = lazy(() => import("./page/Main/Main"));
const Login = lazy(() => import("./page/Login/Login"));
const Signup = lazy(() => import("./page/SignUp/Signup"));
const Editor = lazy(() => import("./page/Editor/Editor"));
const Edit = lazy(() => import("./page/Edit/Edit"));
const Mypage = lazy(() => import("./page/Mypage/Mypage"));
const Detail = lazy(() => import("./page/Detail/Detail"));
const Setting = lazy(() => import("./page/Setting/Setting"));

function App() {
  const { data: userData } = useQuery({
    queryKey: ["Get_Key"],
    queryFn: getUser,
  });

  const { data: placesData } = useQuery({
    queryKey: ["Places_Key"],
    queryFn: getPlaces,
  });

  const userInfo = userData?.users;
  const userPlace = placesData?.places;

  return (
    <BrowserRouter>
      <Header userInfo={userInfo} />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route
            path="/"
            element={<Main userInfo={userInfo} userPlace={userPlace} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route
            path="/mypage"
            element={<Mypage userInfo={userInfo} userPlace={userPlace} />}
          />
          <Route
            path="/detail/:id"
            element={<Detail userPlace={userPlace} userInfo={userInfo} />}
          />
          <Route path="/setting/:id" element={<Setting />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
