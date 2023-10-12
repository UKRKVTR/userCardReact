const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

function App() {
  const userMale = {
    name: "Oleg",
    surname: "Testovich",
    age: 20,
    img: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    sex: true,
  };
  const userFemale = {
    name: "Olya",
    surname: "Testovna",
    age: 19,
    img: "https://plus.unsplash.com/premium_photo-1664359679467-d09f4b66458c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1886&q=80",
    sex: false,
  };
  return (
    <>
      <Header userInfo={userMale} />
      <Header userInfo={userFemale} />
    </>
  );
}
function Header(props) {
  const { userInfo } = props;
  return (
    <>
      <section className={userInfo.sex ? "userCardMale" : "userCardFemale"}>
        <img src={userInfo.img} className="userPhoto"></img>
        <div className="userName userNameInfo">
          {userInfo.name + " " + userInfo.surname}
        </div>
        <div className="userTag userNameInfo">
          {"@" + userInfo.name + userInfo.surname}
          <button className={userInfo.sex ? "btnSubMale" : "btnSubFemale"}>
            +
          </button>
        </div>
        <div className="userAge">{"age: " + userInfo.age}</div>
      </section>
    </>
  );
}
