import {CurrentRepairStep, RepairType, Vendors} from "./dictionaries";

export interface RepairModel {
  id?: number,
  serviceYear?: number;
  currentStep?: CurrentRepairStep,
  currentStepDesc?: string,
  vendor?: Vendors,
  dateOfEntry?: string,
  entryComments?: string,
  itemRef?: string,
  itemNumber?: string,
  customerAcc?: string,
  customerName?:  string,
  customerDocumentNumber?: string,
  serviceRequestNumber?: string,
  repairType?: RepairType,
  dateOfPriceQuotation?: string,
  priceQuotationNumber?: string,
  priceQuotationValue?: number,
  discount?: number,
  customerApproval?: boolean,
  dateOfDecision?: string,
  customerDecisionNumber?: string,
  dateOfSentToRepairCenter?: string,
  dateOfReturnFromRepairCenter?: string,
  costOfRepair?: number,
  returnComments?: string,
  invoiceSystemOrderNumber?: number,
  invoiceNumber?: string,
  dateOfClosureDate?: string,
  returnDocNumber?: string,
  notes?: string
}
