import styled from 'styled-components';

const StyledPledgeListBox = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;

  #allGone {
    font-size: 20px;
    font-weight: bold;
    pointer-events: none;
    disabled: true;
  }
`;

const StyledPledgeBox = styled.div`
  z-index: 1;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-around;
  justify-content: center;

  margin-top: 3px;
  /* border: 1.5px solid rgba(211,211,211, 0.5); */
  border: ${props =>
    props.permanentBorder || !props.available
      ? '1.5px solid rgba(0, 0, 0, 0.5)'
      : '1.5px solid rgba(211, 211, 211, 0.5)'};
  height: auto;
  width: 350px;
  -webkit-background-clip: padding-box; /* for Safari */
  background-clip: padding-box; /* for IE9+, Firefox 4+, Opera, Chrome */

  :hover {
    border: 1.5px solid rgba(0, 0, 0, 0.5);
  }

  .headerFont {
    font-size: 18px;
  }

  .subHeaderFont {
    font-size: 14px;
    color: rgba(160, 160, 160, 1.5);
  }
`;

const StyledGreenPledgeBox = styled.div`
  visibility: 'hidden';
  position: relative;
  height: 100%;
  width: 100%;
  font-size: 16px;
  /* top: 50%; */
  /* transform: translateY(-50%);  */

  & + inFront {
    z-index: 5;
  }

  .inFront {
    z-index: 5;
  }

  padding-top: 10px;
  padding-bottom: 5px;
  left: -0.25px;

  .text {
    /* height: 100%; */
    visibility: hidden;
    /* font-size: 16px; */
    color: 'white';
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  :hover {
    visibility: ${props => (props.available ? 'visible' : 'hidden')};
    background-color: ${props =>
      props.customerInputBoxes ? 'none' : 'rgba(0, 158, 116, .8)'};
  }
  :hover .text {
    visibility: visible;
    line-height: 100%;
    text-align: center;
    vertical-align: middle;
    color: white;
  }
`;

const StyledLeftSpan = styled.span`
  justify-content: flex-start;
  align-content: flex-start;
  margin-left: 7.5%;
  margin-right: 7.5%;
`;

const BoxComponent = styled.div`
  height: auto;
  flex-basis: 100%;
  font-size: 14px;
  vertical-align: middle;
  margin-top: 15px;

  .left {
    margin-left: 7.5%;
    margin-right: 7.5%;
  }
`;

const BoxComponentText = styled(BoxComponent)`
  line-height: 20px;
  margin-top: 10px;
  margin-left: 7.5%;
  margin-right: 7.5%;
`;

const StyledUnorderedList = styled(BoxComponent)`
  line-height: auto;
  padding: 0px 0px 0px 0px;
  margin-left: 7.5%;
`;

const StyledListItem = styled.li`
  color: black;
  line-height: 20px;
  flex-basis: 50%;
  font-size: 16px;
  font-weight: 400;
  vertical-align: middle;
  position: relative;
  right: -10%;
  top: 1px;
`;

const StyledSelect = styled.select`
  height: 40px;
  font-size: 14px;
  flex-basis: 80%;
  vertical-align: middle;
  border-radius: 0px;
  border: 1.5px solid rgba(211, 211, 211, 0.5);
  margin-top: 5px;

  :focus {
    outline: none;
  }
`;

export {
  StyledPledgeListBox,
  StyledPledgeBox,
  StyledLeftSpan,
  BoxComponent,
  BoxComponentText,
  StyledUnorderedList,
  StyledListItem,
  StyledSelect,
  StyledGreenPledgeBox,
};
