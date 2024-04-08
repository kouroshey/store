import { useMutation } from "@tanstack/react-query"

import { loginHandler } from "../supabase/api"

export const useLoginHandler = () => {
    return useMutation({
        mutationFn: () => loginHandler()
    })
}