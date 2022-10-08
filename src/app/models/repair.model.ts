import {Vendors} from "./vendors.type";
import {RepairType} from "./repair.type";
import {CurrentRepairStep} from "./form/current-repair-step.type";

export interface RepairModel {
  id?: number,
  serviceYear?: number;
  currentStep?: CurrentRepairStep,
  currentStepDesc?: string,
  vendor?: Vendors,
  initialNotes?: string,
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
  invoiceValue?: number,
  dateOfClosureDate?: string,
  returnDocNumber?: string,
  notes?: string
}
