import * as React from "react";
import { Dimensions } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function HomeSvg(props) {
  return (
    <Svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M17.6402 6.56065L9.54001 0.204318C9.18023 -0.068106 8.72999 -0.068106 8.45999 0.204318L0.359784 6.56065C0.0897772 6.74249 0 7.01491 0 7.28734V17.2758C0 18.8197 1.1698 20 2.70007 20H15.2999C16.8302 20 18 18.8197 18 17.2758V7.28734C18 7.01491 17.9102 6.74249 17.6402 6.56065ZM10.8003 18.1843H7.19973V10.9194H10.8003V18.1843ZM16.2004 17.2758C16.2004 17.8206 15.8399 18.1843 15.2999 18.1843H12.5999V10.0116C12.5999 9.46673 12.2401 9.10304 11.7001 9.10304H6.29993C5.75992 9.10304 5.40014 9.46673 5.40014 10.0116V18.1843H2.70007C2.16005 18.1843 1.7996 17.8206 1.7996 17.2758V7.74092L9 2.11128L16.2004 7.74092V17.2758Z" fill={props.color}/>
</Svg>

  );
}