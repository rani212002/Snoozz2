
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/Navbar";
import { Routes, Route, Router } from "react-router-dom";
import Home from "./components/Home";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Activity from "./components/Activity";
import Addcollection from "./components/Addcollection";
import Additem from "./components/Additem";
import Artist from "./components/Artist";
import Contact from './components/Contactus'
import Discover_item from "./components/Discover_item";
import Discover_coll from "./components/Discover_coll";
import Popularcollection from "./components/Popularcollection";
import Profile from "./components/Profile";
import Referaal from "./components/Referaal";
import StakingReward from "./components/StakingReward";
import Verify from "./components/Verify";
import Buytoekn from "./components/Buytoekn";
import Dashboard from "./components/Dashboard";
import Buytokenlist from "./components/Buytokenlist";
import NFTlist from "./components/NFTlist";
import Staking from "./components/Staking";
import Watchlist from "./components/Watchlist";
import Artistcollected from "./components/Artistcollected";
import Usercollection from "./components/Usercollection";
import Support from "./components/Support";
import Buynft from './components/Buynft'
import Adminsetting from "./components/Adminsetting";
import AdminUser from "./components/AdminUser";
import Viewuser from "./components/Viewuser";
import Adduser from "./components/Adduser";
import LikeCol from "./components/LikeCol";
import Adminverify from "./components/Adminverify";
function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Landing" element={<Landing />}></Route>
        <Route path="/activity" element={<Activity />}></Route>
        <Route path="/addcollection" element={<Addcollection />}></Route>
        <Route path="/additem" element={<Additem />}></Route>
        <Route path="/artist" element={<Artist />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/discoveritem" element={<Discover_item />}></Route>
        <Route path="/discovercollection" element={<Discover_coll />}></Route>
        <Route path="/popularcollection" element={<Popularcollection />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/referaal" element={<Referaal />}></Route>
        <Route path="/stakingreward" element={<StakingReward />}></Route>
        <Route path="/staking" element={<Staking />}></Route>

        <Route path="/verify" element={<Verify />}></Route>
        <Route path="/buytoken" element={<Buytoekn />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/buytokenlist" element={<Buytokenlist />}></Route>
        <Route path="/nftlist" element={<NFTlist />}></Route>
        <Route path="/watchlist" element={<Watchlist />}></Route>
        <Route path="/artist-collected" element={<Artistcollected />}></Route>
        <Route path="/usercollection" element={<Usercollection />}></Route>
        <Route path="/support" element={<Support />}></Route>
        <Route path="/buynft" element={<Buynft />}></Route>
        <Route path="/likecol" element={<LikeCol />}></Route>
        <Route path="/likecol" element={<LikeCol />}></Route>

        {/* admin pages */}
        <Route path="/adminsetting" element={<Adminsetting />}></Route>
        <Route path="/adminuser" element={<AdminUser />}></Route>

        <Route path="/viewuser" element={<Viewuser />}></Route>
        <Route path="/adduser" element={<Adduser />}></Route>
        <Route path="/adminverify" element={<Adminverify />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
