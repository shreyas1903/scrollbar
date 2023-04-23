import React, { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";
import format from "date-fns/format";
import LottieView from "lottie-react-native";
import API_URL from "../../config/constants";
import OrderInfo from "./OrderInfo";

const ViewOrderInfo = ({ route }: any) => {
  const { orderId } = route.params;
  const [days, setDays] = useState(0);
  const [teamId, setTeamId] = useState(null);
  const [teamList, setTeamList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [fetched, setFetched] = useState(false);
  const [orderInfo, setOrderInfo] = useState(null);

  console.log("order ID", orderId);

  const fetchOrderInfo = async () => {
    setFetched(false);
    console.log("OrderInfo fetch call");
    var formData = new FormData();
    formData.append("order_id", orderId);

    const response = await fetch(API_URL + "/order/getOrderDetails", {
      method: "POST",
      headers: { "Content-Type": "multipart/form-data" },
      body: formData,
    });
    if (response.status === 200) {
      const data = await response.json();
      const order_data = data.order_data;
      console.log("order_data:", order_data);
      const orderInfo = order_data;
      setOrderInfo(orderInfo);
      if (orderInfo.team) {
        setTeamId(orderInfo.team.team_id);
      }
      console.log("OrderInfo fetched: ", orderInfo);
      setFetched(true);
    } else {
      console.log("Error");
    }
  };

  const onSaveTeam = async (teamId: any) => {
    setFetched(false);
    var formData = new FormData();
    formData.append("order_id", orderId);
    formData.append("team_id", teamId);

    const response = await fetch(API_URL + "/admin_app/updateOrderTeam", {
      method: "PUT",
      headers: { "Content-Type": "multipart/form-data" },
      body: formData,
    });
    if (response.status === 200) {
      console.log("team id changed: ", teamId);
      setModalVisible(false);
      fetchOrderInfo();
    } else {
      console.log("Error");
    }
  };

  const onRemoveTeam = async () => {
    console.log("removing team");
    setFetched(false);
    var formData = new FormData();
    formData.append("order_id", orderId);

    const response = await fetch(API_URL + "/admin_app/removeOrderTeam", {
      method: "PUT",
      headers: { "Content-Type": "multipart/form-data" },
      body: formData,
    });
    if (response.status === 200) {
      console.log("team removed");
      setModalVisible(false);
      fetchOrderInfo();
    } else {
      console.log("Error");
    }
  };

  const onTerminate = async () => {
    console.log("Terminating order.....");
    setFetched(false);
    var formData = new FormData();
    formData.append("order_id", orderId);
    formData.append("order_status", "Terminated");

    const response = await fetch(API_URL + "/admin_app/updateOrderStatus", {
      method: "PUT",
      headers: { "Content-Type": "multipart/form-data" },
      body: formData,
    });
    if (response.status === 200) {
      console.log("Order terminated");
      fetchOrderInfo();
    } else {
      console.log("Error");
    }
  };

  const onModifyDate = async (currentDate: any, days: any) => {
    if (days != 0) {
      console.log("Modified:", days);
      var date = new Date(currentDate);
      date.setDate(date.getDate() + days);
      var newDate = format(date, "yyyy-MM-dd");
      var formData = new FormData();

      formData.append("order_id", orderId);
      formData.append("date", newDate);

      const response = await fetch(API_URL + "/admin_app/updateOrderDate", {
        method: "PUT",
        headers: { "Content-Type": "multipart/form-data" },
        body: formData,
      });
      if (response.status === 200) {
        console.log("OrderDate updated successfully");
        setDays(0);
        fetchOrderInfo();
      } else {
        console.log("Error");
      }
    }
  };

  const onChangeTeam = async () => {
    console.log("Teams fetch call");

    const response = await fetch(API_URL + "/admin_app/fetchTeamsDropdown", {
      method: "GET",
    });
    if (response.status === 200) {
      const data = await response.json();
      const teamsData = data;
      setTeamList(teamsData.teams_list);
      console.log("Fetched teams list", teamsData.teams_list);
      setModalVisible(true);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchOrderInfo();
    }, [])
  );

  const orderInfoProps = {
    orderInfo: orderInfo,
    days: days,
    setDays: setDays,

    modalVisible: modalVisible,
    setModalVisible: setModalVisible,
    teamId: teamId,
    teamList: teamList,

    onTerminate: onTerminate,
    onModifyDate: onModifyDate,
    onChangeTeam: onChangeTeam,
    onRemoveTeam: onRemoveTeam,
    onSaveTeam: onSaveTeam,
  };

  if (fetched) {
    return <OrderInfo {...orderInfoProps} />;
  } else {
    return (
      <View style={styles.loadingContainer}>
        <LottieView
          source={require("../../../../assets/circle-loading.json")}
          autoPlay
          loop
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  loadingContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#e9e9e9",
    display: "flex",
  },
});

export default ViewOrderInfo;
