
export type Money = {
    amount: number;
    currency: "BYN";
  };

export type FinishVariant = {
    name: string;
    description: string;
    imgPath: string; // door/[category]/[serial]/[model]/finish/[finish variant name].webp
    hash: string;
  };

export type GlassVariant = {
    name: string;
    description: string;
    imgPath: string; // door/[category]/[serial]/[model]/glass/[glass variant name].webp
    hash: string;
  };
export type ProfileVariant = {
    name: string;
    description: string;
    imgPath: string; // door/[category]/[serial]/[model]/profile/[profile variant name].webp
    hash: string;
}

export type OpeningSystemVariant = {
    name: string;
    description: string;
}
export type Molding = {
    name: string;
    description: string;
}

enum ShowroomLocations {
    orange = "Orange",
    premium = "Premium"
  }

enum DoorCategories {
    TSARGOVAYA = "TSARGOVAYA",
    KARKASNAYA = "KARKASNAYA",
    HIDDEN = "HIDDEN",
    ALUMINIUM = "ALUMINIUM",
    PARTITION = "PARTITION"
  }

type DoorCategory = {
    type: DoorCategories,
    description: string,
  }

export type DoorSeries = {
    shop: ShowroomLocations,
    doorCategory: DoorCategory,
    description: string,
    shortLabel: string | undefined;
    seriesName: string,
    molding?: Molding | null, // Погонаж
    openingSystems?: OpeningSystemVariant | null,
  }

export type DoorModel = {
    series: DoorSeries;
    description: string;
    doorMoldingsDescription: string;
    code: string; // P.O, PD.O, 0PE, AX.O, etc.
    price: Money | null;

    finishVariants?: FinishVariant[] | null;
    glassVariants?: GlassVariant[] | null;
    profileVariants?: ProfileVariant[] | null;

    imagePaths: string[]; // finishVariants hashes, glassVariants hashes, profileVariants hashes. Example door/[category]/[serial]/[model]/1-2-3.webp
  };