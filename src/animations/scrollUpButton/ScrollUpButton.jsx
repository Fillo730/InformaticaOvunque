import { ArrowUp } from "lucide-react";
import "./ScrollUpButton.css"

function ScrollUpButton() {

    function handleScrollUp() {
        window.scrollTo({top: 0, behavior: "smooth"});
    }

    return (
    <div className="container-button-scroll">
        <button className="button-scroll" onClick={handleScrollUp}>
            <ArrowUp/>
        </button>
    </div>
  )
}

export default ScrollUpButton;