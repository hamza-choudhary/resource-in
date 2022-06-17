import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../../Store/auth-slice";
import Layout from "../Layout/Layout";
import AttendanceSummaryContainer from "./AttendanceSummary.js/AttendanceSummaryContainer";
import AttendanceSummaryMain from "./AttendanceSummary.js/AttendanceSummaryMain";
import GraphAndClockInMain from "./Graph&ClockIn/GraphAndClockInMain";
import LeaveSummaryClockMain from "./LeaveSummary&Clock/LeaveSummary_ClockMain";
import NewsletterAndDocumnentsMain from "./NewsletterAndDocumnentsMain";
import SuhoorIftarTiming from "./SuhoorIftarTiming";

const Dashboard = () => {
  const dispatch = useDispatch();
  const logoutSubmitHandler = (event) => {
    //    event.preventDefault();
  };
  const logoutHandler = () => {
    dispatch(authActions.isNotAutheticatedUser());
  };

  return (
    <Layout>
      <SuhoorIftarTiming />
      <AttendanceSummaryMain />
      <GraphAndClockInMain />
      <LeaveSummaryClockMain />
      <NewsletterAndDocumnentsMain />
    </Layout>
  );
};

export default Dashboard;
