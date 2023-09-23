import {useAlert} from "react-alert";

export default function DeleteContact({Show , id}) {
  const alert = useAlert()
  return (
    <>
      <button onClick={()=>{alert.show("hello world")}}>Hello as bandar</button>
    </>
  );
}

