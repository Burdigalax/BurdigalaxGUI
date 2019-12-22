import React from "react";
import { BuyButtons, Separtor } from "../../styles";
import { Wrapper, PaymentButton, Resume, TotalTTC, SubLine } from "./styles";
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
          <SubLine>
            <span>{wording.totalExcludingTax}</span>
            <span>
              {" "}
              {total} {wording.moneySymbol}
            </span>
          </SubLine>
        )}
        {hasTaxEnabled && (
          <SubLine>
            <span>{wording.taxName} </span>
            <span>
              {tax} {wording.moneySymbol}
            </span>
          </SubLine>
        )}
        <TotalTTC>
          <span>{hasTaxEnabled ? wording.totalAll : wording.total} </span>
          <span>
            {totalTTC} {wording.moneySymbol}
          </span>
        </TotalTTC>
      </Resume>
      <BuyButtons>
        <PaymentButton
          disabled={!hasMoneyAvailable || !hasPaymentAvailable}
          isFullWidth
          onClick={onCashPayment}
          iconLeftUrl={paymentCashIconUrl}
          iconLeftSize={40}
          color={greenColor}
        />
        <PaymentButton
          isLastButton
          isFullWidth
          disabled={!hasPaymentAvailable || hasCardBreakdown}
          onClick={onBankPayment}
          color={hasCardBreakdown ? redColor : greenColor}
          iconLeftUrl={getPaymentCardIconUrl()}
          iconLeftSize={40}
        />
      </BuyButtons>
    </Wrapper>
  );
};
