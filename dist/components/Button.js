import { jsx as _jsx } from "react/jsx-runtime";
import { Button as MUIButton } from "@mui/material";
const Button = ({ text, onClick }) => {
    return _jsx(MUIButton, { variant: "contained", onClick: onClick, children: text });
};
export default Button;
//# sourceMappingURL=Button.js.map