import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchFamilyMembers } from "../../redux/slice/family";
import FamilyTree from "../../mytree";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const LandingPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    dispatch(fetchFamilyMembers());
  }, [dispatch]);

  const handleButtonClick = () => {
    if (isAuthenticated) {
      navigate("/admin");
    } else {
      navigate("/login");
    }
  };

  return (
    <div style={{ height: "0%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <div>
        {state.todo.data ? (
          <FamilyTree nodes={state.todo.data} />
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button onClick={handleButtonClick} style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>
          {isAuthenticated ? "Admin Panel" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
