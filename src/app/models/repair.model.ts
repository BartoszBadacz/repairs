import {Vendors} from "./vendors.type";
import {RepairType} from "./repair.type";
import {CurrentRepairStep} from "./form/current-repair-step.type";
import {DiscountType} from "./dicount.type";
import {DecisionType} from "./form/decision.type";

export interface RepairModel {
  id?: number,
  serviceYear?: number;
  currentStep?: CurrentRepairStep,
  currentStepDesc?: string,
  customerName?:  string,
  invoiceValue?: number,
  dateOfEntry?: string,
  itemRef?: string,
  itemNumber?: string,
  customerAcc?: string,
  customerDocumentNumber?: string,
  vendor?: Vendors,
  entryComments?: string,
  repairType?: RepairType,
  damageDescription?: string
  dateOfPriceQuotation?: string,
  priceQuotationNumber?: string,
  priceQuotationValue?: number,
  dateOfDecision?: string,
  typeOfDecision?: DecisionType,
  customerDecisionNumber?: string,
  discount?: number,
  discountType?: DiscountType,
  customerApproval?: boolean, // TODO to be removed,
  dateOfSentToRepairCenter?: string,
  serviceRequestNumber?: string,
  dateOfReturnFromRepairCenter?: string,
  costOfRepair?: number,
  invoiceSystemOrderNumber?: number,
  invoiceNumber?: string,
  returnDocNumber?: string,
  dateOfClosureDate?: string,
}
