import component from "../../utils/component";
import closeBtn from "./event/closeBtn";
import toogleLoveBTn from "./event/toogleLove";

export default function favorite (){
  const CALLBACK = ()=> {
    closeBtn()
    toogleLoveBTn()
  }
  // getlist
  component({
    NAME_TAG:'favorite-page',
    HTML,
    CALLBACK
  })
  
}
