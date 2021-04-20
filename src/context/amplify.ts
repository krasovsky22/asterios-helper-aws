import { Amplify } from "aws-amplify";
import { createContext } from "react";

type AmplifyContextType = {
  amplify?: typeof Amplify;
};
export const AmplifyContext = createContext<AmplifyContextType>({});
