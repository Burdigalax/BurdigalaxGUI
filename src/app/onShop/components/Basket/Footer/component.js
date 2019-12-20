import React from "react";
import { BuyButtons, Separtor } from "../../styles";
import { Wrapper, PaymentButton, Resume } from "./styles";
import BurdiButton from "../../../../common/components/BurdiButton";
import { BTN_COLOR } from "../../../../common/components/BurdiButton/constants";
import WeightControl from "./WeightControl";
import { red, green } from "../../../../common/colors";

export default ({
  total = 0,
  tax = 0,
  totalTTC = 0,
  hasMoneyAvailable = false,
  hasPaymentAvailable = false,
  hasCardBreakdown = false,
  hasContactLessAvailable = true,
  hasTaxEnabled = false,
  onCashPayment = Function.prototype,
  onBankPayment = Function.prototype,
  paymentCashIconUrl = "",
  paymentContactLessIconUrl = "",
  paymentCardIconUrl = "",
  paymentBreakdownIconUrl = "",
  wording,
  bgColor = "#2a6041",
  greenColor = green,
  redColor = red
}) => {
  const getPaymentCardIconUrl = () => {
    if (hasCardBreakdown) return paymentBreakdownIconUrl;
    if (hasContactLessAvailable) return paymentContactLessIconUrl;

    return paymentCardIconUrl;
  };

  return (
    <Wrapper>
      <WeightControl />
      <Separtor color={bgColor} />
      <Resume>
        {hasTaxEnabled && (
          <span>
            {wording.totalExcludingTax}: {total} {wording.moneySymbol}
          </span>
        )}
        {hasTaxEnabled && (
          <span>
            {wording.taxName}: {tax} {wording.moneySymbol}
          </span>
        )}
        <strong>
          {hasTaxEnabled ? wording.totalAll : wording.total}: {totalTTC}{" "}
          {wording.moneySymbol}
        </strong>
      </Resume>
      <Separtor color={bgColor} />
      <BuyButtons>
        <PaymentButton
          disabled={!hasMoneyAvailable || !hasPaymentAvailable}
          isFullWidth
          onClick={onCashPayment}
          iconLeftUrl={paymentCashIconUrl}
          iconLeftSize={40}
          color={greenColor}
        />
        <BurdiButton
          isFullWidth
          disabled={!hasPaymentAvailable || hasCardBreakdown}
          // label={hasCardBreakdown ? "En panne" : "Payer"}
          onClick={onBankPayment}
          color={hasCardBreakdown ? redColor : greenColor}
          iconLeftUrl={getPaymentCardIconUrl()}
          iconLeftSize={40}
        />
      </BuyButtons>
    </Wrapper>
  );
};
