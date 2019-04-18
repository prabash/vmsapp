import axios from "axios";

const mainURL = `http://219.92.4.33:8081/VMSHandler/api/VMSCheckIn/`;

export const checkinVisitor = (personToSend, visitorName) => {
    const URL = mainURL + `CheckInVisito/${personToSend}/${visitorName}`;
    return axios.get(URL).then(res => res);
};