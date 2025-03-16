"use server";

import { authCookies, cookieOptions } from "@/constants/cookie";
import { SERVER_ROUTES } from "@/constants/routes";
import { actionClient } from "@/lib/safe-action";
import serverApi from "@/queries";
import { registerSchema } from "@/schema/auth/register-schema";
import type { RegisterResponse } from "@/types/authentication";
import { AxiosError } from "axios";
import httpStatus from "http-status";
import { returnValidationErrors } from "next-safe-action";
import { cookies } from "next/headers";

export const registerAction = actionClient
  .metadata({ actionName: "register" })
  .schema(registerSchema)
  .action(async ({ parsedInput }) => {
    const cookieStore = await cookies();

    try {
      const response = await serverApi.post<RegisterResponse>(
        `${SERVER_ROUTES.Authentication.Register}`,
        parsedInput,
      );

      const data = response.data;

      cookieStore.set(authCookies.accessToken, data.tokens.accessToken, {
        ...cookieOptions.accessToken,
      });

      cookieStore.set(authCookies.refreshToken, data.tokens.refreshToken, {
        ...cookieOptions.refreshToken,
      });

      return data;
    } catch (e) {
      if (e instanceof AxiosError) {
        console.log(
          "from register",
          e?.response?.status === httpStatus.CONFLICT,
        );
        if (e.response?.status === httpStatus.CONFLICT) {
          return returnValidationErrors(registerSchema, {
            email: { _errors: ["Email already exists"] },
          });
        }

        if (!e.response?.data || e.response.status !== httpStatus.CREATED) {
          throw new Error("Failed to register");
        }
      }

      throw e;
    }
  });
