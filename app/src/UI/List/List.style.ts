import styled from "styled-components";
import CustomLink from "../Link/Link";

const ListContainer = styled(CustomLink)<{isFree?: boolean}>`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
  margin-top: 30px !important;
  width: 80% !important;
  background: #5A63B1;
  border-radius: 10px;
  flex-direction: row;
  height: 60px;
  flex-direction: row !important;
  min-height: 60px;
  border:  2px solid ${(props) => props.isFree ? '#D81E1E' : '#59D81E'};
`



export default ListContainer