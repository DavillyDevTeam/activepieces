// Common Types
export interface AuthenticationParams {
  access_token: string;
}

export interface Client {
  id: number;
  first_name: string;
  last_name: string;
  middle_name: string;
  email: string;
  cell_phone_number: string;
  work_phone_number: string;
  home_phone_number: string;
  fax_phone_number: string;
  contact_group: string;
  birthdate: string;
  created_at: string;
  updated_at: string;
}

export interface GenericIdObject {
  id: number;
}

interface Address {
  address1: string;
  address2?: string;
  city: string;
  state: string;
  zip_code: string;
  country: string;
}

type FieldType =
  | 'case'
  | 'client'
  | 'company'
  | 'expense'
  | 'time'
  | 'time_and_expense';

type ParentType =
  | 'case'
  | 'client'
  | 'company'
  | 'expense'
  | 'time'
  | 'time_and_expense';

// API Parameters and Response Types
export interface CreateCaseParams extends AuthenticationParams {
  name: string;
  case_number?: string;
  opened_date?: string;
  case_stage?: string;
  practice_area?: string;
  description?: string;
  sol_date?: string;
  status?: 'opened' | 'closed';
  outstanding_balance?: number;
  billing_contact?: GenericIdObject;
  clients?: GenericIdObject[];
  companies?: GenericIdObject[];
  staff?: { id: number; lead_lawyer: boolean; originating_lawyer: boolean }[];
  custom_field_values?: {
    custom_field: GenericIdObject;
    value: string | number;
  }[];
}

export interface CreateCaseResponse {
  id: number;
  name: string;
  case_number: string | null;
  description: string;
  opened_date: string | null;
  closed_date: string | null;
  sol_date: string | null;
  practice_area: string | null;
  case_stage: string | null;
  status: 'opened' | 'closed';
  outstanding_balance: number;
  billing_contact: GenericIdObject;
  billing_type: '' | 'hourly' | 'contingency' | 'flat' | 'mixed' | 'pro_bono';
  clients: Client[];
  companies: GenericIdObject[];
  staff: {
    id: number;
    lead_lawyer: boolean;
    originating_lawyer: boolean;
    case_rate: string | null;
  }[];
  custom_field_values: {
    custom_field: { id: number };
    value: string | number;
    created_at: string;
    updated_at: string;
  }[];
  office: {
    id: number;
    name: string;
    fax_phone: string;
    main_phone: string;
    address: Address;
    created_at: string;
    updated_at: string;
  };
  created_at: string;
  updated_at: string;
}

export interface CreateCaseStageParams extends AuthenticationParams {
  name: string;
}

export interface CreateCaseStageResponse {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface CreateCompanyParams extends AuthenticationParams {
  name: string;
  email?: string;
  website?: string;
  main_phone_number?: string;
  fax_phone_number?: string;
  address?: Address;
  notes?: string;
  cases?: GenericIdObject[];
  clients?: GenericIdObject[];
  custom_field_values?: {
    custom_field: GenericIdObject;
    value: string;
  }[];
}

export interface CreateCompanyResponse {
  id: number;
  name: string;
  email: string;
  website: string;
  main_phone_number: string;
  fax_phone_number: string;
  address: Address;
  notes: string;
  cases: GenericIdObject[];
  clients: GenericIdObject[];
  custom_field_values: {
    custom_field: {
      id: number;
      field_type: FieldType;
    };
    value: string;
    created_at: string;
    updated_at: string;
  }[];
  archived: boolean;
  created_at: string;
  updated_at: string;
}

export interface CreateCustomFieldParams extends AuthenticationParams {
  name: string;
  parent_type: ParentType;
  field_type: FieldType;
  list_options: {
    option_value: string;
  }[];
}

export interface CreateCustomFieldResponse {
  id: number;
  name: string;
  parent_type: ParentType;
  field_type: FieldType;
  list_options: {
    key: string;
    option: string;
    created_at: string;
    updated_at: string;
  }[];
  created_at: string;
  updated_at: string;
}

export interface CreateCaseDocumentParams extends AuthenticationParams {
  caseId: string;
  path: string;
  filename: string;
  description?: string;
  assigned_date?: string;
}

export interface CreateCaseDocumentResponse {
  id: number;
  name: string;
  filename: string;
  path: string;
  description: string;
  assigned_date: string;
  case: GenericIdObject;
  created_at: string;
  updated_at: string;
  self_url: string;
  folder: GenericIdObject;
  put_url: string;
  put_headers: Record<string, string>;
}

export interface CreateFirmDocumentParams extends AuthenticationParams {
  path: string;
  filename: string;
  description?: string;
  assigned_date?: string;
  staff?: GenericIdObject[];
}

export interface CreateFirmDocumentResponse {
  id: number;
  name: string;
  filename: string;
  path: string;
  description: string;
  assigned_date: string;
  case: GenericIdObject;
  created_at: string;
  updated_at: string;
  self_url: string;
  folder: GenericIdObject;
  put_url: string;
  put_headers: Record<string, string>;
}

export interface CreateEventParams extends AuthenticationParams {
  name: string;
  description?: string;
  start: string;
  end: string;
  all_day?: boolean;
  private?: boolean;
  location?: GenericIdObject;
  case?: GenericIdObject;
  staff: {
    id: number;
    required: boolean;
  };
}

export interface CreateEventResponse {
  id: number;
  name: string;
  description: string;
  start: string;
  end: string;
  all_day: boolean;
  private: boolean;
  event_type: string;
  location: GenericIdObject;
  case: GenericIdObject;
  staff: GenericIdObject[];
  created_at: string;
  updated_at: string;
}

export interface CreateExpenseParams extends AuthenticationParams {
  activity_name: string;
  description?: string;
  billable: boolean;
  entry_date: string;
  cost: number;
  units: number;
  case: GenericIdObject;
  staff: GenericIdObject;
}

export interface CreateExpenseResponse {
  id: number;
  activity_name: string;
  description: string;
  billable: boolean;
  entry_date: string;
  cost: string;
  units: string;
  case: GenericIdObject;
  staff: GenericIdObject;
  invoices: GenericIdObject[];
  custom_field_values: {
    custom_field: {
      id: number;
      field_type: string;
    };
    value: string;
    created_at: string;
    updated_at: string;
  }[];
  created_at: string;
  updated_at: string;
}

export interface CreateLeadParams extends AuthenticationParams {
  email?: string;
  first_name: string;
  middle_initial?: string;
  last_name: string;
  address?: Address;
  cell_phone_number?: string;
  work_phone_number?: string;
  home_phone_number?: string;
  lead_details?: string;
  birthdate?: string;
  drivers_license_number?: string;
  drivers_license_state?: string;
  referral_source_reference?: GenericIdObject;
  referred_by?: GenericIdObject;
  custom_field_values?: {
    custom_field: GenericIdObject;
    value: string | number | boolean;
  }[];
}

export interface CreateLeadResponse {
  id: number;
  email: string;
  first_name: string;
  middle_initial: string;
  last_name: string;
  address: Address;
  cell_phone_number: string;
  work_phone_number: string;
  home_phone_number: string;
  lead_details: string;
  birthdate: string;
  drivers_license_number: string;
  drivers_license_state: string;
  status: string;
  approved: boolean;
  referral_source_reference: GenericIdObject;
  referred_by: GenericIdObject;
  custom_field_values: {
    custom_field: {
      id: number;
      field_type: string;
    };
    value: string | number | boolean;
    created_at: string;
    updated_at: string;
  }[];
  updated_at: string;
  created_at: string;
}

export interface CreateLocationParams extends AuthenticationParams {
  name: string;
  address?: Address;
}

export interface CreateLocationResponse {
  id: number;
  name: string;
  address: Address;
  created_at: string;
  updated_at: string;
}

export interface CreateNoteParams extends AuthenticationParams {
  obj: 'case' | 'client' | 'company';
  objId: string;
  subject: string;
  note: string;
  date: string;
}

export interface CreateNoteResponse {
  id: number;
  subject: string;
  note: string;
  archived: boolean;
  date: string;
  client: GenericIdObject | null;
  company: GenericIdObject | null;
  case: GenericIdObject | null;
  created_by: GenericIdObject;
  updated_by: GenericIdObject;
  created_at: string;
  updated_at: string;
}

export interface CreatePersonParams extends AuthenticationParams {
  email?: string;
  first_name: string;
  middle_name?: string;
  last_name: string;
  address?: Address;
  cell_phone_number?: string;
  work_phone_number?: string;
  home_phone_number?: string;
  fax_phone_number?: string;
  birthdate?: string;
  notes?: string;
  people_group?: GenericIdObject;
  cases?: GenericIdObject[];
  custom_field_values?: {
    custom_field: GenericIdObject;
    value: string | number | boolean;
  }[];
}

export interface CreatePersonResponse {
  id: number;
  email: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  address: Address;
  cell_phone_number: string;
  work_phone_number: string;
  home_phone_number: string;
  fax_phone_number: string;
  people_group: GenericIdObject;
  notes: string;
  birthdate: string;
  archived: boolean;
  cases: GenericIdObject[];
  custom_field_values: {
    custom_field: {
      id: number;
      field_type: string;
    };
    value: string;
    created_at: string;
    updated_at: string;
  }[];
  updated_at: string;
  created_at: string;
}

export interface CreatePracticeAreaParams extends AuthenticationParams {
  name: string;
}

export interface CreatePracticeAreaResponse {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface CreateReferralSourceParams extends AuthenticationParams {
  name: string;
}

export interface CreateReferralSourceResponse {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface CreateTaskParams extends AuthenticationParams {
  name: string;
  description?: string;
  priority: string;
  due_date: string;
  completed?: boolean;
  case?: GenericIdObject;
  staff: GenericIdObject[];
}

export interface CreateTaskResponse {
  id: number;
  name: string;
  description: string;
  priority: string;
  due_date: string;
  completed: boolean;
  case: GenericIdObject;
  staff: GenericIdObject[];
  created_at: string;
  updated_at: string;
  completed_at: string;
}

export interface CreateTimeEntryParams extends AuthenticationParams {
  activity_name: string;
  description?: string;
  billable?: boolean;
  entry_date: string;
  rate: number;
  hours: number;
  flat_fee?: boolean;
  case: GenericIdObject;
  staff: GenericIdObject;
}

export interface CreateTimeEntryResponse {
  id: number;
  activity_name: string;
  description: string;
  billable: boolean;
  entry_date: string;
  rate: string;
  hours: number;
  flat_fee: boolean;
  case: GenericIdObject;
  staff: GenericIdObject;
  invoices: GenericIdObject[];
  custom_field_values: {
    custom_field: {
      id: number;
      field_type: string;
    };
    value: string;
    created_at: string;
    updated_at: string;
  }[];
  created_at: string;
  updated_at: string;
}

export interface CreateCallParams extends AuthenticationParams {
  called_at: string;
  caller_phone_number: string;
  call_for: GenericIdObject;
  message: string;
  caller_name: string;
  client: GenericIdObject;
  lead: GenericIdObject;
  call_type?: string;
  resolved?: boolean;
}

export interface UpdateCaseParams extends CreateCaseParams {
  id: string;
}

export interface UpdateCompanyParams extends CreateCompanyParams {
  id: string;
}

export interface UpdatePersonParams extends CreatePersonParams {
  id: string;
}

export type ListCasesParams = AuthenticationParams;

export type ListCasesResponse = CreateCaseResponse[];

export type ListCallersParams = AuthenticationParams;

export interface ListCaseStagesResponse {}

export interface ListCompanyContactsParams extends AuthenticationParams {
  companyId: string;
}

export interface ListCompanyContactsResponse {}

export type ListLocationsParams = AuthenticationParams;

export interface ListLocationsResponse {}

export type ListPeopleGroupsParams = AuthenticationParams;

export interface ListPeopleGroupsResponse {}

export type ListPersonContactsParams = AuthenticationParams;

export interface ListPersonContactsResponse {}

export type ListPracticeAreasParams = AuthenticationParams;

export interface ListPracticeAreasResponse {}

export type ListReferralSourcesParams = AuthenticationParams;

export interface ListReferralSourcesResponse {}

export type ListStaffParams = AuthenticationParams;

export interface ListStaffResponse {}
