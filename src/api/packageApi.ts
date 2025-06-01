import { Dependency } from './types';

export const fetchPackageDependencies = async (packageId: string, version: string): Promise<Dependency[]> => {
  // TODO: Replace with actual API call
  return [
    {
      name: "proc-macro2",
      version: "1.0.91",
      description: "A substitute implementation of the compiler's `proc_macro` API to decouple token-based libraries from the procedural macro use case.",
      features: ["NO DEFAULT FEATURES"]
    },
    {
      name: "unicode-ident",
      version: "1.0",
      description: "Determine whether characters have the XID_Start or XID_Continue properties according to Unicode Standard Annex #31"
    },
    {
      name: "quote",
      version: "1.0.35",
      description: "Quasi-quoting macro quote!(...)",
      isOptional: true,
      features: ["OPTIONAL", "NO DEFAULT FEATURES"]
    }
  ];
};
