import firebase from "firebase";

var config = {
  apiKey: "AIzaSyAY0tJrpsDFi79WfibEDNC5R1h3d7Hoo2Q",
  authDomain: "kanban-244fc.firebaseapp.com",
  databaseURL: "https://kanban-244fc.firebaseio.com",
  projectId: "kanban-244fc",
  storageBucket: "kanban-244fc.appspot.com",
  messagingSenderId: "376373695049"
};
firebase.initializeApp(config);
const db = firebase.database()
export default db
