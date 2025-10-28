import { StringFormatOption } from "@sinclair/typebox";
import { boolean, number, string } from "zod/v4";

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
  address?: {
    address1?: string;
    address2?: string;
    city?: string;
    state?: string;
    zip_code?: string;
    country?: string;
  };
  notes?: string;
  cases?: {
    id?: number;
  }[];
  clients?: {
    id?: number;
  }[];
  custom_field_values?: {
    custom_field: {
      id: number;
    };
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
  address: {
    address1: string;
    address2: string;
    city: string;
    state: string;
    zip_code: string;
    country: string;
  };
  notes: string;
  cases: {
    id: number;
  }[];
  clients: {
    id: number;
  }[];
  custom_field_values: {
    custom_field: {
      id: number;
      field_type: string;
    };
    value: string;
    created_at: string;
    updated_at: string;
  }[];
  archived: boolean;
  created_at: string;
  updated_at: string;
}

// TODO: Conferir daqui para baixo 
export interface CreateCustomFieldParams extends AuthenticationParams {
  name: string;
  parent_type: string;
  field_type: string;
  list_options: {
    option_value: string;
  }[];
}

export interface CreateCustomFieldResponse {
  id: number,
  name: string,
  parent_type: string,
  field_type: string,
  list_options: {
      key: string,
      option: string,
      created_at: string,
      updated_at: string
    }[],
  created_at: string,
  updated_at: string
}

// TODO: documents
export interface CreateDocumentParams extends AuthenticationParams {}

export interface CreateDocumentResponse {}

export interface CreateEventParams extends AuthenticationParams {
  name: string,
  description?: string,
  start: string,
  end: string,
  all_day?: boolean,
  private?: boolean,
  location?: {   
    id: number
  }
  case?: {
    id: number
  }
  staff: {
    id: number
    required: boolean
  }
}

export interface CreateEventResponse {
  id: number,
  name: string,
  description: string,
  start: string,
  end: string,
  all_day: boolean,
  private: boolean,
  event_type: string,
  location: {
    id: number
  },
  case: {
    id: number
  },
  staff: 
    {
      id: number
    }[],
  created_at: string,
  updated_at: string
}

export interface CreateExpenseParams extends AuthenticationParams {
  activity_name: string;
  description?: string;
  billable: boolean;
  entry_date: string;
  cost: number;
  units: number;
  case: {
    id: number;
  }
  staff: {
    id: number;
  }
}

export interface CreateExpenseResponse {
  id: number,
  activity_name: string,
  description: string,
  billable: boolean
  entry_date: string,
  cost: string,
  units: string,
  case: {
    id: number
  },
  staff: {
    id: number
  },
  invoices: 
    {
      id: number
    }[],
  custom_field_values: 
    {
      custom_field: {
        id: number
        field_type: string
      },
      value: string,
      created_at: string,
      updated_at: string
    }[],
  created_at: string,
  updated_at: string
}

export interface CreateLeadParams extends AuthenticationParams {
  email?: string;
  first_name: string;
  middle_initial?: string,
  last_name: string;
  address?: {
    address1?: string;
    address2?: string;
    city?: string;
    state?: string;
    zip_code?: string;
    country?: string;
  }
  cell_phone_number?: string;
  work_phone_number?: string;
  home_phone_number?: string;
  lead_details?: string;
  birthdate?: string;
  drivers_license_number?: string;
  drivers_license_state?: string;
  referral_source_reference?: {
    id?: number;
  }
  custom_field_values?: {
    custom_field: {
      id?: number;
    }
    value: string | number | boolean;
    }[];
}

export interface CreateLeadResponse {
  id: number,
  email: string,
  first_name: string,
  middle_initial: string,
  last_name: string,
  address: {
    address1: string,
    address2: string,
    city: string,
    state: string,
    zip_code: string,
    country: string
  },
  cell_phone_number: string,
  work_phone_number: string,
  home_phone_number: string,
  lead_details: string,
  birthdate: string,
  drivers_license_number: string,
  drivers_license_state: string,
  status: string,
  approved: boolean,
  referral_source: string,
  referral_source_reference: {
    id: number
  },
  referred_by: {
    id: number
  },
  custom_field_values: 
    {
      custom_field: {
        id: number,
        field_type: string
      },
      value: string | number | boolean,
      created_at: string,
      updated_at: string
    }[],
  updated_at: string,
  created_at: string
}

export interface CreateLocationParams extends AuthenticationParams {
  name: string;
  address?: {
    address1?: string;
    address2?: string;
    city?: string;
    state?: string;
    zip_code?: string;
    country?: string;
  }
}

export interface CreateLocationResponse {
    id: number,
  name: string,
  address: {
    address1: string,
    address2: string,
    city: string,
    state: string,
    zip_code: string,
    country: string
  },
  created_at: string,
  updated_at: string
}

export interface CreateNoteParams extends AuthenticationParams {
  // Esse é complexo, pode deixar comigo
}

export interface CreateNoteResponse {}

export interface CreatePersonParams extends AuthenticationParams {
  email?: string,
  first_name: string,
  middle_name?: string,
  last_name: string,
  address?: {
    address1?: string,
    address2?: string,
    city?: string,
    state?: string, 
    zip_code?: string,
    country?: string
  }
  cell_phone_number?: string,
  work_phone_number?: string,
  home_phone_number?: string,
  fax_phone_number?: string,
  birthdate?: string,
  notes?: string,
  people_group?: {
    id?: number
  }
  cases?: {
    id?: number
  }
  custom_field:{
    id: number
  }
  value: string | number | boolean
}

export interface CreatePersonResponse {
    id: number,
  email: string,
  first_name: string,
  middle_initial: string,
  middle_name: string,
  last_name: string,
  address: {
    address1: string,
    address2: string,
    city: string,
    state: string,
    zip_code: string,
    country: string
  },
  cell_phone_number: string,
  work_phone_number: string,
  home_phone_number: string,
  fax_phone_number: string,
  people_group: {
    id: number
  },
  notes: string,
  birthdate: string,
  archived: boolean,
  cases: 
    {
      id: number
    }[],
  custom_field_values: 
    {
      custom_field: {
        id: number,
        field_type: string
      },
      value: string,
      created_at: string,
      updated_at: string
    }[],
  updated_at: string,
  created_at: string
}

export interface CreatePracticeAreaParams extends AuthenticationParams {
  name: string;
}

export interface CreatePracticeAreaResponse {
  id: number,
  name: string,
  created_at: string,
  updated_at:string
}

export interface CreateReferralSourceParams extends AuthenticationParams {
  name: string
}

export interface CreateReferralSourceResponse {
  id: number,
  name: string,
  created_at: string,
  updated_at: string
}

export interface CreateTaskParams extends AuthenticationParams {
  name: string,
  description?: string,
  priority: string,
  due_date: string,
  completed?: boolean,
  case?: {
    id?: number
  },
  staff: {
    id: number
  }
}

export interface CreateTaskResponse {
  id: number,
  name: string,
  description: string,
  priority: string,
  due_date: string,
  completed: boolean,
  case: {
    id: number
  },
  staff: {
    id: number
  },
  created_at: string,
  updated_at: string,
  completed_at: string
}

export interface CreateTimeEntryParams extends AuthenticationParams {
  activity_name: string,
  description?: string,
  billable?: boolean,
  entry_date: string,
  rate: number,
  hours: number,
  flat_fee?: boolean,
  case: {
    id: number
  },
  staff: {
    id: number
  }
}

export interface CreateTimeEntryResponse {
    id: number,
  activity_name: string,
  description: string,
  billable: boolean,
  entry_date: string,
  rate: string,
  hours: number,
  flat_fee: boolean,
  case: {
    id: number
  },
  staff: {
    id: number
  },
  invoices: [
    {
      id: number
    }
  ],
  custom_field_values: 
    {
      custom_field: {
        id: number,
        field_type: string
      },
      value: string,
      created_at: string,
      updated_at: string
    } [],
  created_at: string,
  updated_at: string
}

export interface CreateCallParams extends AuthenticationParams {
  called_at: string,
  caller_phone_number: string,
  call_for: {
    id: number
  },
  message: string 
  caller_name: string
  client: {
    id: number
  }
  lead: {
    id: number
  }
  call_type?: string
  resolved?: boolean
}

export interface CreateCallResponse {}

export interface UpdateCaseParams extends AuthenticationParams {
  id: string;
}

export interface UpdateCaseResponse {}

export interface UpdateCompanyParams extends AuthenticationParams {
  id: string;
}

export interface UpdateCompanyResponse {}

export interface UpdatePersonParams extends AuthenticationParams {
  id: string;
}

export interface UpdatePersonResponse {}

export interface ListCasesParams extends AuthenticationParams {}

export interface ListCasesResponse {}

export interface ListCallersParams extends AuthenticationParams {}

  // Pular por enquanto, ver qual é esse

export interface ListCallersResponse {}

  // Pular por enquanto, ver qual é esse

export interface ListCaseStagesParams extends AuthenticationParams {}

export interface ListCaseStagesResponse {}

export interface ListCompanyContactsParams extends AuthenticationParams {
  companyId: string;
}

  
export interface ListCompanyContactsResponse {}

export interface ListLocationsParams extends AuthenticationParams {}

export interface ListLocationsResponse {}

export interface ListPeopleGroupsParams extends AuthenticationParams {}

export interface ListPeopleGroupsResponse {}

export interface ListPersonContactsParams extends AuthenticationParams {}

export interface ListPersonContactsResponse {}

export interface ListPracticeAreasParams extends AuthenticationParams {}

export interface ListPracticeAreasResponse {}

export interface ListReferralSourcesParams extends AuthenticationParams {}

export interface ListReferralSourcesResponse {}

export interface ListStaffParams extends AuthenticationParams {}

export interface ListStaffResponse {}
