export declare const dict_en: Record<string, string>;
export declare const dict_de: Record<string, string>;
export declare const dict_es: Record<string, string>;
export declare const dict_fr: Record<string, string>;
export declare const dict_it: Record<string, string>;
export declare const dict_ja: Record<string, string>;
export declare const dict_ko: Record<string, string>;
export declare const dict_pl: Record<string, string>;
export declare const dict_pt: Record<string, string>;
export declare const dict_ru: Record<string, string>;
export declare const dict_tc: Record<string, string>;
export declare const dict_th: Record<string, string>;
export declare const dict_tr: Record<string, string>;
export declare const dict_uk: Record<string, string>;
export declare const dict_zh: Record<string, string>;

export declare const ExportAbilities: Record<string, IAbility>;
export declare const ExportArcanes: Record<string, IArcane>;
export declare const ExportCustoms: Record<string, ICustom>;
export declare const ExportDojoRecipes: Record<string, IDojoRecipe>;
export declare const ExportDrones: Record<string, IDrone>;
export declare const ExportFlavour: Record<string, IFlavourItem>;
export declare const ExportFocusUpgrades: Record<string, IFocusUpgrade>;
export declare const ExportFusionBundles: Record<string, IFusionBundle>;
export declare const ExportGear: Record<string, IGear>;
export declare const ExportImages: Record<string, IImage>;
export declare const ExportIntrinsics: Record<string, IIntrinsic>;
export declare const ExportKeys: Record<string, IKey>;
export declare const ExportOther: Record<string, IOther>;
export declare const ExportRailjackWeapons: Record<string, IRailjackWeapon>;
export declare const ExportRecipes: Record<string, IRecipe>;
export declare const ExportRegions: Record<string, IRegion>;
export declare const ExportRelics: Record<string, IRelic>;
export declare const ExportResources: Record<string, IResource>;
export declare const ExportSentinels: Record<string, ISentinel>;
export declare const ExportSortieRewards: Record<string, ISortieReward>;
export declare const ExportUpgrades: Record<string, IUpgrade>;
export declare const ExportWarframes: Record<string, IPowersuit>;
export declare const ExportWeapons: Record<string, IWeapon>;

export interface IAbility {
    name:                       string;
    description:                string;
    icon:                       string;
    energyRequiredToActivate:   number;
    energyConsumptionOverTime?: number;
}

export interface IArcane {
    name:              string;
    icon:              string;
    codexSecret:       boolean;
    excludeFromCodex?: boolean;
    rarity?:           "UNCOMMON" | "RARE" | "LEGENDARY";
}

export interface ICustom {
    name:              string;
    codexSecret:       boolean;
    description?:      string;
    icon?:             string;
    excludeFromCodex?: boolean;
}

export interface IDojoRecipe {
    icon?:           string;
    price:           number;
    time:            number;
    skipTimePrice:   number;
    ingredients?:    { ItemType: string; ItemCount: number; }[];
    replicatePrice?: number;
    guildXpValue?:   number;
    techPrereq?:     string;
}

export interface IDrone {
    name:               string;
    description:        string;
    icon:               string;
    binCount:           number;
    binCapacity:        number;
    fillRate:           number;
    durability:         number;
    repairRate:         number;
    codexSecret:        boolean;
    capacityMultiplier: number[];
}

export interface IFlavourItem {
    name:              string;
    description:       string;
    icon:              string;
    codexSecret:       boolean;
    excludeFromCodex?: boolean;
    hexColours?:       { value: string }[];
}

export interface IFocusUpgrade {
    name:               string;
    icon:               string;
    polarity:           "AP_ATTACK" | "AP_DEFENSE" | "AP_POWER" | "AP_TACTIC" | "AP_WARD";
    rarity:             "UNCOMMON" | "RARE" | "COMMON";
    codexSecret:        boolean;
    baseDrain:          number;
    fusionLimit:        number;
    excludeFromCodex:   boolean;
    levelStats:         object[];
    description:        string;
    baseFocusPointCost: number;
}

export interface IFusionBundle {
    name:         string;
    description:  string;
    icon:         string;
    codexSecret:  boolean;
    fusionPoints: number;
}

export interface IGear {
    name:        string;
    description: string;
    icon:        string;
    codexSecret: boolean;
    parentName:  string;
}

export interface IImage {
    contentHash: string;
}

export interface IIntrinsic {
    name:        string;
    description: string;
    icon:        string;
    ranks:       IIntrinsicRank[];
}

export interface IIntrinsicRank {
    name:        string;
    description: string;
}

export interface IKey {
    name:              string;
    description:       string;
    icon:              string;
    parentName:        string;
    codexSecret:       boolean;
    excludeFromCodex?: boolean;
}

export interface IOther {
    name:              string;
    description:       string;
    icon:              string;
    excludeFromCodex?: boolean;
}

export interface IRailjackWeapon {
    name:               string;
    icon:               string;
    codexSecret:        boolean;
    damagePerShot:      number[];
    totalDamage:        number;
    description:        string;
    criticalChance:     number;
    criticalMultiplier: number;
    procChance:         number;
    fireRate:           number;
    masteryReq:         number;
    productCategory:    "CrewShipWeapons";
    excludeFromCodex:   boolean;
    slot:               number;
    accuracy:           number;
    omegaAttenuation:   number;
    noise:              "ALARMING";
    trigger:            "BURST" | "SEMI" | "AUTO" | "HELD";
    magazineSize:       number;
    reloadTime:         number;
    multishot:          number;
}

export interface IRecipe {
    resultType:         string;
    buildPrice:         number;
    buildTime:          number;
    skipBuildTimePrice: number;
    consumeOnUse:       boolean;
    num:                number;
    codexSecret:        boolean;
    ingredients:        {
        ItemType:        string;
        ItemCount:       number;
        ProductCategory: "Consumables" | "MiscItems" | "WeaponSkins" | "Pistols" | "Melee" | "LongGuns";
    }[];
    secretIngredients:  {
        ItemType:  "/Lotus/Types/Game/PowerSuits/PlayerPowerSuit" | "/Lotus/Weapons/Tenno/Pistol/LotusPistol" | "/Lotus/Weapons/Tenno/LotusLongGun" | "/Lotus/Types/Game/LotusMeleeWeapon";
        ItemCount: number;
    }[];
    excludeFromCodex?:  boolean;
    primeSellingPrice?: number;
    alwaysAvailable?:   boolean;
}

export interface IRegion {
    name:          string;
    systemIndex:   number;
    systemName:    string;
    nodeType:      number;
    masteryReq:    number;
    missionIndex:  number;
    missionName:   string;
    factionIndex:  number;
    minEnemyLevel: number;
    maxEnemyLevel: number;
}

export interface IRelic {
    category:     string;
    era:          "Requiem" | "Axi" | "Neo" | "Meso" | "Lith";
    icon:         string;
    codexSecret:  boolean;
    description:  "/Lotus/Language/Relics/ImmortalProjectionBaseDesc" | "/Lotus/Language/Items/ProjectionDescription";
    relicRewards: {
        rewardName: string;
        rarity:     "RARE" | "UNCOMMON" | "COMMON";
        tier:       number;
        itemCount:  number;
    }[];
}

export interface IResource {
    name:               string;
    description:        string;
    icon:               string;
    codexSecret:        boolean;
    parentName:         string;
    productCategory:    "ShipDecorations" | "MiscItems" | "CrewShips" | "KubrowPetEggs" | "FusionTreasures" | "SupplyDrop" | "Ships";
    excludeFromCodex?:  boolean;
    showInInventory?:   boolean;
    longDescription?:   string;
    primeSellingPrice?: number;
}

export interface ISentinel {
    name:              string;
    icon:              string;
    health:            number;
    shield:            number;
    armor:             number;
    stamina:           number;
    power:             number;
    codexSecret:       boolean;
    excludeFromCodex?: boolean;
    description:       string;
    productCategory:   "SpecialItems" | "KubrowPets" | "Sentinels";
}

export interface ISortieReward {
    rewardName:   string;
    typeName:     string;
    name:         string;
    icon:         string;
    tier:         number;
    itemCount:    number;
    probability:  number;
    description?: string;
}

export interface IUpgrade {
    name:                 string;
    icon:                 string;
    polarity:             "AP_POWER" | "AP_DEFENSE" | "AP_TACTIC" | "AP_ATTACK" | "AP_WARD" | "AP_UNIVERSAL" | "AP_UMBRA" | "AP_PRECEPT" | "AP_ANY";
    rarity:               "RARE" | "UNCOMMON" | "COMMON" | "LEGENDARY";
    codexSecret:          boolean;
    baseDrain:            number;
    fusionLimit:          number;
    compatName?:          string;
    type?:                "STANCE" | "WARFRAME" | "PARAZON" | "MELEE" | "---" | "PRIMARY" | "SECONDARY" | "KAVAT" | "SENTINEL" | "KUBROW" | "AURA" | "ARCH-GUN" | "ARCHWING" | "ARCH-MELEE" | "HELMINTH CHARGER";
    description?:         string;
    isUtility?:           boolean;
    modSet?:              string;
    modSetValues?:        number[];
    subtype?:             string;
    excludeFromCodex?:    boolean;
    isStarter?:           boolean;
    upgradeEntries?:      {
        tag:           string;
        prefixTag:     string;
        suffixTag:     string;
        upgradeValues: {
            value:               number;
            locTag?:             string;
            reverseValueSymbol?: boolean;
        }[];
    }[];
    availableChallenges?: {
        fullName:      string;
        description:   string;
        countRange:    number[];
        complications: {
            fullName:     string;
            description:  string;
            overrideTag?: string;
        }[];
    }[];
}

export interface IPowersuit {
    name:                string;
    parentName:          string;
    description:         string;
    icon:                string;
    health:              number;
    shield:              number;
    armor:               number;
    stamina:             number;
    power:               number;
    codexSecret:         boolean;
    masteryReq:          number;
    sprintSpeed:         number;
    abilities:           IAbility[];
    passiveDescription?: string;
    productCategory:     "Suits" | "SpaceSuits" | "MechSuits";
    exalted?:            string[];
    longDescription?:    string;
}

export interface IWeapon {
    name:                   string;
    icon:                   string;
    codexSecret:            boolean;
    damagePerShot:          number[];
    totalDamage:            number;
    description:            string;
    criticalChance:         number;
    criticalMultiplier:     number;
    procChance:             number;
    fireRate:               number;
    masteryReq:             number;
    productCategory:        "Pistols" | "Melee" | "LongGuns" | "SpaceGuns" | "SpaceMelee" | "OperatorAmps" | "SentinelWeapons" | "SpecialItems";
    slot?:                  number;
    accuracy?:              number;
    omegaAttenuation:       number;
    noise?:                 "ALARMING" | "SILENT";
    trigger?:               "SEMI" | "AUTO" | "BURST" | "ACTIVE" | "CHARGE" | "DUPLEX" | "HELD" | "Auto Burst";
    magazineSize?:          number;
    reloadTime?:            number;
    multishot?:             number;
    blockingAngle?:         number;
    comboDuration?:         number;
    followThrough?:         number;
    range?:                 number;
    slamAttack?:            number;
    slamRadialDamage?:      number;
    slamRadius?:            number;
    slideAttack?:           number;
    heavyAttackDamage?:     number;
    heavySlamAttack?:       number;
    heavySlamRadialDamage?: number;
    heavySlamRadius?:       number;
    windUp?:                number;
    maxLevelCap?:           number;
    sentinel?:              boolean;
    excludeFromCodex?:      boolean;
    primeOmegaAttenuation?: number;
}
