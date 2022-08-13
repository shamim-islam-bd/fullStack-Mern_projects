import React from "react";
import { Link } from "react-router-dom";

export const DashMain = () => {
  return (
    <>
      <nav>
        <Link to="profile" className="text-2xl m-3">
          Profile
        </Link>
        <Link to="payment" className="text-2xl m-3">
          Payment
        </Link>
      </nav>

      <Routes>
        <Route path="payment" element={<Payment />} />
        <Route path="profile" element={<ProfileInfo />} />
      </Routes>
    </>
  );
};
