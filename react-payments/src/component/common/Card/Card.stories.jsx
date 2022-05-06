import Card from "./Card.component";
import { cardInfos, defaultCardInfo } from "../../../constants/index";

const COMPLETE_CARD_INFO = {
  cardNumber: ["1111", "2345", "3456", "4567"],
  userName: "SMING",
  month: "09",
  year: "99",
};

const INCOMPLETE_CARD_INFO = {
  cardNumber: ["1111", "2345", "345", ""],
  userName: "UYEON",
  month: "05",
  year: "00",
};

export default {
  title: "Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const DefaultCard = Template.bind({});
DefaultCard.args = {
  ...COMPLETE_CARD_INFO,
  cardTypeInfo: defaultCardInfo,
};

export const IncompleteCard = Template.bind({});
IncompleteCard.args = {
  ...INCOMPLETE_CARD_INFO,
  cardTypeInfo: defaultCardInfo,
};

export const PocoCard = Template.bind({});
PocoCard.args = {
  ...COMPLETE_CARD_INFO,
  cardTypeInfo: cardInfos[0],
};

export const JunCard = Template.bind({});
JunCard.args = {
  ...COMPLETE_CARD_INFO,
  cardTypeInfo: cardInfos[1],
};

export const GongwonCard = Template.bind({});
GongwonCard.args = {
  ...COMPLETE_CARD_INFO,
  cardTypeInfo: cardInfos[2],
};

export const BigPocoCard = Template.bind({});
BigPocoCard.args = {
  ...COMPLETE_CARD_INFO,
  cardTypeInfo: cardInfos[0],
  size: "big",
};
