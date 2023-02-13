import { useState } from "react";

export const useToggle = (initialval = false) => {
    const [state, setState] = useState(initialval);

    const toggle = () => {
        setState((prev) => !prev)
    }

    return {state, toggle};
};
