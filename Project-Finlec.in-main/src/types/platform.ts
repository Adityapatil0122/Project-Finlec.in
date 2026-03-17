export type KycCaseStatus =
  | "NOT_STARTED"
  | "REGISTERED"
  | "VALIDATED"
  | "ON_HOLD"
  | "REJECTED";

export type OnboardingTaskStatus = "completed" | "pending" | "attention";
export type PaymentRail = "UPI_AUTOPAY" | "ENACH" | "NACH" | "NETBANKING" | "UPI";
export type BankAccountStatus = "PENDING" | "VERIFIED" | "FAILED";
export type BankMandateStatus = "PENDING" | "ACTIVE" | "PAUSED" | "REVOKED" | "FAILED";
export type OrderKind =
  | "LUMPSUM_PURCHASE"
  | "ADDITIONAL_PURCHASE"
  | "REDEMPTION"
  | "SWITCH"
  | "SIP_REGISTRATION"
  | "SIP_PAUSE"
  | "SIP_RESUME"
  | "SIP_CANCEL";
export type OrderStatus =
  | "DRAFT"
  | "PAYMENT_PENDING"
  | "SUBMITTED"
  | "ACCEPTED"
  | "REJECTED"
  | "ALLOTTED"
  | "SETTLED"
  | "FAILED"
  | "CANCELLED";
export type SipStatus = "ACTIVE" | "PAUSED" | "CANCELLED";
export type StatementType =
  | "ACCOUNT_STATEMENT"
  | "TRANSACTION_REPORT"
  | "CAPITAL_GAINS"
  | "CAS";
export type SupportTicketType =
  | "INVESTING"
  | "KYC"
  | "MANDATE"
  | "ORDER"
  | "SIP"
  | "REPORTING"
  | "COMPLAINT";
export type SupportTicketStatus =
  | "OPEN"
  | "IN_PROGRESS"
  | "RESOLVED"
  | "ESCALATED"
  | "CLOSED";

export type FundOption = {
  id: string;
  amcName: string;
  name: string;
  schemeCode: string;
  category: string;
  riskLevel: string;
  minimumInvestment: number;
  nav: number;
  navDate: string;
};

export type OverviewSnapshot = {
  investedValue: number;
  currentValue: number;
  unrealizedGain: number;
  xirr: number;
  pendingOrders: number;
  activeSips: number;
  nextSipDate: string | null;
  kycStatus: KycCaseStatus;
};

export type OnboardingTask = {
  id: string;
  label: string;
  description: string;
  href: string;
  status: OnboardingTaskStatus;
};

export type InvestorProfile = {
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  panMasked: string;
  kraReference: string;
  ckycReference: string;
  taxStatus: "INDIVIDUAL";
  residencyStatus: "RESIDENT_INDIAN";
  occupation: string;
  annualIncomeBand: string;
  riskProfile: "LOW" | "MODERATE" | "HIGH";
  kycStatus: KycCaseStatus;
  emailVerified: boolean;
  mobileVerified: boolean;
  fatcaAcceptedAt: string;
  lastUpdatedAt: string;
};

export type BankAccount = {
  id: string;
  bankName: string;
  accountHolderName: string;
  maskedAccountNumber: string;
  ifscCode: string;
  accountType: string;
  status: BankAccountStatus;
  isDefault: boolean;
};

export type BankMandate = {
  id: string;
  bankAccountId: string;
  provider: string;
  rail: PaymentRail;
  mandateReference: string;
  status: BankMandateStatus;
  maxAmount: number;
  validTill: string;
  authorizedAt: string | null;
};

export type Nomination = {
  id: string;
  nomineeName: string;
  relationship: string;
  allocationPct: number;
  status: "ACTIVE" | "PENDING";
};

export type Folio = {
  id: string;
  folioNumber: string;
  amcName: string;
  fundId: string;
  holderMode: "SINGLE";
  brokerCode: string;
  euin: string;
  rtaProvider: string;
};

export type Holding = {
  id: string;
  fundId: string;
  fundName: string;
  category: string;
  folioNumber: string;
  units: number;
  investedValue: number;
  currentValue: number;
  unrealizedGain: number;
  xirr: number;
  lastNav: number;
  navDate: string;
};

export type PlatformOrder = {
  id: string;
  fundId: string;
  fundName: string;
  kind: OrderKind;
  status: OrderStatus;
  amount: number;
  units: number | null;
  paymentRail: PaymentRail;
  partnerReference: string;
  initiatedAt: string;
  cutOffAt: string;
  rejectionReason?: string;
};

export type SipInstruction = {
  id: string;
  fundId: string;
  fundName: string;
  amount: number;
  frequency: "MONTHLY" | "QUARTERLY";
  nextRunDate: string;
  mandateReference: string;
  status: SipStatus;
};

export type StatementArtifact = {
  id: string;
  type: StatementType;
  label: string;
  generatedAt: string;
  periodLabel: string;
  source: string;
};

export type SupportTicket = {
  id: string;
  type: SupportTicketType;
  status: SupportTicketStatus;
  subject: string;
  description: string;
  createdAt: string;
  responseDueAt: string;
};

export type AuditEvent = {
  id: string;
  action: string;
  entityType: string;
  entityLabel: string;
  createdAt: string;
};

export type AdminOpsSnapshot = {
  openKycExceptions: number;
  mandateFailures: number;
  unsettledOrders: number;
  staleWebhooks: number;
  ticketsEscalated: number;
  reconciliationHealth: "HEALTHY" | "ATTENTION";
};

export type InvestorPlatformState = {
  funds: FundOption[];
  overview: OverviewSnapshot;
  onboarding: OnboardingTask[];
  profile: InvestorProfile;
  bankAccounts: BankAccount[];
  bankMandates: BankMandate[];
  nominations: Nomination[];
  folios: Folio[];
  holdings: Holding[];
  orders: PlatformOrder[];
  sips: SipInstruction[];
  statements: StatementArtifact[];
  supportTickets: SupportTicket[];
  auditTrail: AuditEvent[];
  adminOps: AdminOpsSnapshot;
};
