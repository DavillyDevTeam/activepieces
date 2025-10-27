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
  billing_contact?: {
    id: number;
  };
  clients?: { id: number }[];
  companies?: { id: number }[];
  staff?: { id: number; lead_lawyer: boolean; originating_lawyer: boolean }[];
  custom_field_values?: {
    custom_field: { id: number };
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
  billing_contact: {
    id: number;
  };
  billing_type: '' | 'hourly' | 'contingency' | 'flat' | 'mixed' | 'pro_bono';
  clients: Client[];
  companies: { id: number }[];
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
    address: {
      address1: string;
      address2: string;
      city: string;
      state: string;
      zip_code: string;
      country: string;
    };
    created_at: string;
    updated_at: string;
  };
  created_at: string;
  updated_at: string;
}
