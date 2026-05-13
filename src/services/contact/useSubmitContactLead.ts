import { useMutation } from "@tanstack/react-query";

import {
  type ContactLeadPayload,
  submitContactLead,
} from "./submitContactLead";

export function useSubmitContactLead() {
  return useMutation({ mutationFn: submitContactLead });
}
