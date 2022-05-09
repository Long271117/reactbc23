import logo from "./logo.svg";
import "./App.css";
import RCC from "./Components/RCC";
import RFC from "./Components/RFC";
import BTLayout from "./Components/BTLayout/BTLayout";
import DataBiding from "./DataBiding/DataBiding";
import HanldeEvent from "./HanldeEvent/HanldeEvent";
import StateDemo from "./StateDemo/StateDemo";
import StyleComponent from "./StyleComponent/StyleComponent";
import RenderArray from "./RenderArray/RenderArray";
import DemoProps from "./Props/DemoProps/DemoProps";
import ShoeShop from "./Props/ShoeProps/ShoeShop";
import BaiTapXemChiTiet from "./Props/BaiTapXemChiTiet/BaiTapXemChiTiet";
import TangGiamSoLuong from "./DemoRedux/TangGiamSoLuong/TangGiamSoLuong";
import BaiTapChonXeRedux from "./DemoRedux/BaiTapChonXeRedux/BaiTapChonXeRedux";
import BaiTapGioHangRedux from "./DemoRedux/BaiTapGioHangRedux/BaiTapGioHangRedux";
import BaiTaiGameXucXac from "./DemoRedux/BaiTapGameXucXac/BaiTaiGameXucXac";

// Cấu hình router cho  app component
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import HeaderHome from "./HeaderHome/HeaderHome";
import Profile from "./pages/Profile/Profile";
import Detail from "./pages/Detail/Detail";
import Search from "./pages/Search/Search";
import BaiTapQuanLyNguoiDung from "./pages/BaiTapQuanLyNguoiDung/BaiTapQuanLyNguoiDung";
import LifeCycle from "./pages/LifeCycle/LifeCycle";
import DemoUseState from "./hooks/DemoUseState/DemoUseState";
import DemoUseEffect from "./hooks/demoUseEffect/DemoUseEffect";
import ApiRfc from "./pages/Api/DemoApi/ApiRfc";
import ApiFcc from "./pages/Api/DemoApi/ApiFcc";
import CustomHooks from "./hooks/CustomHooks/CustomHooks";
import TangGiamSoLuongHooks from "./DemoRedux/TangGiamSoLuongHooks/TangGiamSoLuongHooks";
import ApiReduxHooks from "./pages/Api/DemoApi/ApiReduxHooks";
import DemoUseCallBack from "./hooks/DemoUseCallBack/DemoUseCallBack";
import DemoUseMemo from "./hooks/DemoUseMemo/DemoUseMemo";
import DemoUseRef from "./hooks/DemoUseRef/DemoUseRef";
import ToDoListApp from "./pages/DemoThunk/ToDoListApp";



function App() {
  return (
    <BrowserRouter>
      <HeaderHome />
      <Switch>
        <Route exact path={"/home"} render={(propsRoute) => { // propsRoute là this.props.history, this.props.location, this.props.match
           return <div>
             <HeaderHome />
             
             {/* <Home history={propsRoute.history}/> */}
             <Home {...propsRoute}/>
           </div>
        }} />
        <Route exact path={"/about"} component={About} />
        <Route exact path={"/contact"} component={Contact} />
        <Route exact path={"/login"} component={Login} />
        <Route exact path={"/register"} component={Register} />
        <Route exact path={"/profile"} component={Profile} />
        <Route exact path={"/search"} component={Search} />
        <Route exact path={"/detail/:postid"} component={Detail} />
        <Route exact path={"/btqlnd"} component={BaiTapQuanLyNguoiDung} />
        <Route exact path={"/lifecycle"} component={LifeCycle} />
        {/* react hook */}
        <Route exact path={"/usestate"} component={DemoUseState} />
        <Route exact path={"/useeffect"} component={DemoUseEffect} />
        <Route exact path={"/apirfc"} component={ApiRfc} />
        <Route exact path={"/apircc"} component={ApiFcc} />
        <Route exact path={"/customhooks"} component={CustomHooks} />
        <Route exact path={"/reduxhooks"} component={TangGiamSoLuongHooks} />
        <Route exact path={"/apireduxhooks"} component={ApiReduxHooks} />
        <Route exact path={"/usecallback"} component={DemoUseCallBack} />
        <Route exact path={"/usememo"} component={DemoUseMemo} />
        <Route exact path={"/useref"} component={DemoUseRef} />
        <Route exact path={"/todolistapp"} component={ToDoListApp} />
        <Route exact path={"/"} component={Home} />
      </Switch>



      {/* Buổi 1 */}
      {/* <RFC />
      <RFC />
      <RFC />
      <RCC />
      <BTLayout />
      <DataBiding />
      <HanldeEvent /> */}

      {/* Buổi 2 */}
      {/* <StyleComponent /> */}
      {/* <StateDemo /> */}
      {/* <RenderArray /> */}

      {/* Buổi 3 */}
      {/* <DemoProps /> */}
      {/* <ShoeShop /> */}
      {/* <BaiTapXemChiTiet /> */}

      {/* Buổi 4 */}
      {/* <TangGiamSoLuong /> */}

      {/* Buổi 5 */}
      {/* <BaiTapChonXeRedux /> */}
      {/* <BaiTapGioHangRedux /> */}

      {/* Buổi 6 */}
      {/* <BaiTaiGameXucXac /> */}

    </BrowserRouter>
  );
}

export default App;
