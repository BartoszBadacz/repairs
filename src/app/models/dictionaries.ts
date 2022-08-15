export type Vendors = 'conmed' | 'optilus' | 'net';

export type RepairType =
  'warranty-producer' |
  'warranty-distributor' |
  'warranty-repair-less-90-days' |
  'warranty-repair-more-90-days-less-180-days' |
  'paid' |
  'internal' |
  'not-repairable'

export type CurrentRepairStep =
  'to-quotation' |
  'to-send-to-repair' |
  'to-send-to-customer' |
  'waiting-for-approval' |
  'closed'
