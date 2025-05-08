import { createContext, useState, ReactNode } from 'react';

// Define the context type
type UpdateCreditContextType = {
  upgradeCreditUsage: any; // Replace `any` with the actual type you want to use
  setUpgradeCreditUsage: React.Dispatch<React.SetStateAction<any>>;
};

// Initialize the context with a default value
export const UpdateCreditContext = createContext<UpdateCreditContextType>({
  upgradeCreditUsage: null,
  setUpgradeCreditUsage: () => {},
});

// Provider component
export const UpdateCreditProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [upgradeCreditUsage, setUpgradeCreditUsage] = useState<any>(null); // Replace `any` with the actual type

  return (
    <UpdateCreditContext.Provider
      value={{ upgradeCreditUsage, setUpgradeCreditUsage }}
    >
      {children}
    </UpdateCreditContext.Provider>
  );
};
