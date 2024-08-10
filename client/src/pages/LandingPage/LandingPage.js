import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFamilyMembers } from "../../redux/slice/family";
import FamilyTree from "../../mytree";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const LandingPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, userRole } = useAuth();

  useEffect(() => {
    dispatch(fetchFamilyMembers());
  }, [dispatch]);

  const handleButtonClick = () => {
    if (isAuthenticated) {
      if (userRole === "admin1") {
        navigate("/admin");
      } else if (userRole === "user") {
        navigate("/homepage");
      }
    } else {
      navigate("/login");
    }
  };

  const state = useSelector((state) => state.todo);
  const { data, isLoading, error } = state;

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : data && data.length > 0 ? (
          <FamilyTree nodes={data} />
        ) : (
          <div>No data available</div>
        )}
      </div>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button
          type="button"
          onClick={handleButtonClick}
          style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
        >
          {isAuthenticated ? (userRole === "admin1" ? "Admin Panel" : "Homepage") : "Login"}
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
