
    import { createPiece, PieceAuth } from "@activepieces/pieces-framework";
import { createCase } from "./lib/actions/create-case";
import { createCaseStage } from "./lib/actions/create-case-stage";
import { createCompany } from "./lib/actions/create-company";
import { createCustomField } from "./lib/actions/create-custom-field";
import { createDocument } from "./lib/actions/create-document";
import { createEvent } from "./lib/actions/create-event";
import { createExpense } from "./lib/actions/create-expense";
import { createLead } from "./lib/actions/create-lead";
import { createLocation } from "./lib/actions/create-location";
import { createNote } from "./lib/actions/create-note";
import { createPerson } from "./lib/actions/create-person";
import { createPracticeArea } from "./lib/actions/create-practice-area";
import { createReferralSource } from "./lib/actions/create-referral-source";
import { createTask } from "./lib/actions/create-task";
import { createTimeEntry } from "./lib/actions/create-time-entry";
import { createCall } from "./lib/actions/create-call";
import { updateCase } from "./lib/actions/update-case";
import { updateCompany } from "./lib/actions/update-company";
import { updatePerson } from "./lib/actions/update-person";
import { findCase } from "./lib/actions/find-case";
import { findCaller } from "./lib/actions/find-caller";
import { findCaseStage } from "./lib/actions/find-case-stage";
import { findCompanyContact } from "./lib/actions/find-company-contact";
import { findLocation } from "./lib/actions/find-location";
import { findPeopleGroup } from "./lib/actions/find-people-group";
import { findPersonContact } from "./lib/actions/find-person-contact";
import { findPracticeArea } from "./lib/actions/find-practice-area";
import { findReferralSource } from "./lib/actions/find-referral-source";
import { findStaff } from "./lib/actions/find-staff";
import { findOrCreateCase } from "./lib/actions/find-or-create-case";
import { findOrCreateCaseStage } from "./lib/actions/find-or-create-case-stage";
import { findOrCreateCompany } from "./lib/actions/find-or-create-company";
import { findOrCreateLocation } from "./lib/actions/find-or-create-location";
import { findOrCreatePerson } from "./lib/actions/find-or-create-person";
import { findOrCreatePracticeArea } from "./lib/actions/find-or-create-practice-area";
import { findOrCreateReferralSource } from "./lib/actions/find-or-create-referral-source";
import { caseAddedOrUpdated } from "./lib/triggers/case-added-or-updated";
import { eventAddedOrUpdated } from "./lib/triggers/event-added-or-updated";
import { personAddedOrUpdated } from "./lib/triggers/person-added-or-updated";
import { companyAddedOrUpdated } from "./lib/triggers/company-added-or-updated";
import { leadAddedOrUpdated } from "./lib/triggers/lead-added-or-updated";

    export const myCase = createPiece({
      displayName: "My-case",
      auth: PieceAuth.None(),
      minimumSupportedRelease: '0.36.1',
      logoUrl: "https://cdn.activepieces.com/pieces/my-case.png",
      authors: ["anamainart", "LuizDMM"],
      actions: [ 
        createCase, 
        createCaseStage,
        createCompany, 
        createCustomField, 
        createDocument, 
        createEvent, 
        createExpense, 
        createLead, 
        createLocation, 
        createNote, 
        createPerson,
        createPracticeArea,
        createReferralSource,
        createTask,
        createTimeEntry,
        createCall,
        updateCase,
        updateCompany,
        updatePerson,
        findCase,
        findCaller,
        findCaseStage,
        findCompanyContact,
        findLocation,
        findPeopleGroup,
        findPersonContact,
        findPracticeArea,
        findReferralSource,
        findStaff,
        findOrCreateCase,
        findOrCreateCaseStage,
        findOrCreateCompany,
        findOrCreateLocation,
        findOrCreatePerson,
        findOrCreatePracticeArea,
        findOrCreateReferralSource
      ],
      triggers: [
        caseAddedOrUpdated,
        eventAddedOrUpdated,
        personAddedOrUpdated,
        companyAddedOrUpdated,
        leadAddedOrUpdated
      ],
    });
    