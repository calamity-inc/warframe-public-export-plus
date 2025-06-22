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
export declare const ExportAchievements: Record<string, IAchievement>;
export declare const ExportArcanes: Record<string, IArcane>;
export declare const ExportAvionics: Record<string, IAvionic>;
export declare const ExportBoosterPacks: Record<string, IBoosterPack>;
export declare const ExportBoosters: Record<string, IBooster>;
export declare const ExportBounties: Record<string, IBounty>;
export declare const ExportBundles: Record<string, IBundle>;
export declare const ExportChallenges: Record<string, IChallenge>;
export declare const ExportCodex: IExportCodex;
export declare const ExportCustoms: Record<string, ICustom>;
export declare const ExportDojoRecipes: IExportDojoRecipes;
export declare const ExportDrones: Record<string, IDrone>;
export declare const ExportEmailItems: Record<string, IEmailItem>;
export declare const ExportEnemies: IExportEnemies;
export declare const ExportFlavour: Record<string, IFlavourItem>;
export declare const ExportFocusUpgrades: Record<string, IFocusUpgrade>;
export declare const ExportFusionBundles: Record<string, IFusionBundle>;
export declare const ExportGear: Record<string, IGear>;
export declare const ExportImages: Record<string, IImage>;
export declare const ExportIntrinsics: Record<string, IIntrinsic>;
export declare const ExportKeys: Record<string, IKey>;
export declare const ExportMisc: IExportMisc;
export declare const ExportModSet: Record<string, IModSet>;
export declare const ExportNightwave: IExportNightwave;
export declare const ExportRailjackWeapons: Record<string, IRailjackWeapon>;
export declare const ExportRecipes: Record<string, IRecipe>;
export declare const ExportRegions: Record<string, IRegion>;
export declare const ExportRelics: Record<string, IRelic>;
export declare const ExportResources: Record<string, IResource>;
export declare const ExportRewards: Record<string, TMissionDeck>;
export declare const ExportSentinels: Record<string, ISentinel>;
export declare const ExportSyndicates: Record<string, ISyndicate>;
export declare const ExportSystems: ISystem[];
export declare const ExportTextIcons: Record<string, ITextIcon>;
export declare const ExportUpgrades: Record<string, IUpgrade>;
export declare const ExportVendors: Record<string, IVendor>;
export declare const ExportVirtuals: Record<string, IVirtual>;
export declare const ExportWarframes: Record<string, IPowersuit>;
export declare const ExportWeapons: Record<string, IWeapon>;

export declare const eFaction: IEnumerator[];
export declare const eMissionType: IEnumerator[];

export type TRarity = "COMMON" | "UNCOMMON" | "RARE" | "LEGENDARY";

export interface ICountedItem {
    ItemType: string;
    ItemCount: number;
}

export interface ICountedStoreItem {
    StoreItem: string;
    ItemCount: number;
}

export interface IAbility {
    name?:                      string;
    description?:               string;
    icon:                       string;
    energyRequiredToActivate:   number;
    energyConsumptionOverTime?: number;
}

export interface IAchievement {
    uniqueName:             string;
    name?:                  string;
    description?:           string;
    icon?:                  string;
    hidden?:                boolean;
    requiredCount?:         number;
    progressIndicatorFreq?: number;
    children?:              string[];
}

export interface IArcane {
    name:               string;
    icon:               string;
    codexSecret:        boolean;
    excludeFromCodex?:  boolean;
    rarity:             TRarity;
    fusionLimit:        number;
    distillPointValue?: number;
    isFrivolous?:       boolean; // deprecated: there's no longer any arcane that has this field
}

export interface IAvionic {
    name:              string;
    polarity:          "AP_UNIVERSAL" | "AP_TACTIC" | "AP_DEFENSE" | "AP_ATTACK";
    rarity:            TRarity;
    codexSecret:       boolean;
    baseDrain:         number;
    fusionLimit:       number;
    excludeFromCodex?: boolean;
}

export interface IBoosterPack {
    name:                 string;
    description:          string;
    icon?:                string;
    components:           {
        Item:   string;
        Rarity: TRarity;
    }[];
    rarityWeightsPerRoll: Record<TRarity, number>[];
    canGiveDuplicates:    boolean;
}

export interface IBooster {
    name:        string;
    description: string;
    icon:        string;
    typeName:    string;
}

export interface IBounty {
    name: string;
    description: string;
    icon: string;
    stages: string[][];
}

export interface IBundle {
    name?:             string;
    description?:      string;
    icon?:             string;
    excludeFromCodex?: boolean;
    components:        {
        typeName:         string;
        purchaseQuantity: number;
        durability:       TRarity;
        giveMaxRank?:     boolean;
    }[];
    giftingBonus?:     string;
    premiumPrice?:     number;
}

export interface IChallenge {
    name:          string;
    description?:  string;
    flavour?:      string;
    icon:          string;
    requiredCount: number;
    standing?:     number;
}

export interface IExportCodex {
    objects: Record<string, ICodexEntry>;
}

export interface ICodexEntry {
    name: string;
    description?: string;
    icon: string;
    reqScans: number;
    secret: boolean;
}

export interface ICustom {
    name:              string;
    codexSecret:       boolean;
    description?:      string;
    icon?:             string;
    excludeFromCodex?: boolean;
    productCategory:   "WeaponSkins" | "CrewShipWeaponSkins";
    additionalItems?:  string[];
    subroutines?:      string[];
    randomisedUpgrades?: {
        tag: string;
        range: number[];
    }[];
}

export interface IExportDojoRecipes {
    research: Record<string, IDojoResearch>;
    fabrications: Record<string, {
        resultType: string;
        price: number;
        ingredients: ICountedItem[];
    }>;
    rooms: Record<string, IDojoRoom>;
    decos: Record<string, IDojoDeco>;
}

export interface IDojoRecipe {
    price:         number;
    time:          number;
    skipTimePrice: number;
    ingredients:   ICountedItem[];
    guildXpValue?: number;
}

export interface IDojoResearch extends IDojoRecipe {
    resultType?:    string;
    replicatePrice: number;
    techPrereq?:    string;
}

export interface IDojoBuild extends IDojoRecipe {
    resultType:    string;
    icon:          string;
}

export interface IDojoRoom extends IDojoBuild {
    destructionTime: number;
    capacity:        number;
    energy:          number;
    decoCapacity:    number;
    hidden?:         boolean;
}

export interface IDojoDeco extends IDojoBuild {
    capacityCost?: number;
}

export interface IDrone {
    name:                 string;
    description:          string;
    icon:                 string;
    binCount:             number;
    binCapacity:          number;
    fillRate:             number;
    durability:           number;
    repairRate:           number;
    codexSecret:          boolean;
    capacityMultiplier:   number[]; // deprecated
    capacityMultipliers:  Record<TRarity, number>;
    probabilities:        Record<TRarity, number>;
}

export interface IEmailItem {
    sendOnlyOnce: boolean;
    message: IInboxMessage;
}

export interface IExportEnemies {
    agents: Record<string, IEnemyAgent>;
    avatars: Record<string, IEnemyAvatar>;
    damageControllers: Record<string, IDamageController>;
    droptables: Record<string, TDroptable>;
    hitProxies: Record<string, IHitProxy>;
    aiWeapons: Record<string, IAiWeapon>;
}

export interface IEnemyAgent {
    baseLevel:    number;
    avatarTypes: {
        STANDARD?: string;
        EXIMUS?:   string;
        RARE?:     string;
    };
    items?: {
        type: string;
    }[];
}

export interface IEnemyAvatar {
    name:                      string;
    icon?:                     string;
    description?:              string;
    faction:                   string;
    health:                    number;
    damageController:          string;
    killXPReward:              number;
    factionResistanceKeyword?: string;
    droptable?:                string;
    codexSecret?:              boolean;
    codexScansRequired:        number;
    excludeFromSimulacrum?:    boolean;
    isFrivolous?:              boolean;
}

export interface IDamageController {
    armor:              number;
    shield:             number;
    unhandledProcTypes: TProcType[];
    hitProxies?: {
        bone: string;
        type: string;
    }[];
}

export interface IHitProxy {
    damageAtten?:        number;
    criticalChance?:     number;
    criticalMultiplier?: number;
}

export interface IAiWeapon {
    name?:        string;
    description?: string;
    icon?:        string;
    behaviours?:  IWeaponBehaviour[];
}

export type TDroptable = IRewardPool[];
export interface IRewardPool {
    type: "mod" | "blueprint" | "sigil" | "additionalItem" | "relic";
    chance: number;
    items:  {
        type:        string;
        probability: number;
    }[];
}

export interface IFlavourItem {
    name:              string;
    description:       string;
    icon:              string;
    base:              string;
    codexSecret?:      boolean;
    excludeFromCodex?: boolean;
    hexColours?:       IColour[];
    legacyColours?:    IColour[];
}

export interface IColour {
    value: string;
}

export interface IFocusUpgrade {
    name:               string;
    icon:               string;
    polarity:           "AP_ATTACK" | "AP_DEFENSE" | "AP_POWER" | "AP_TACTIC" | "AP_WARD";
    rarity:             TRarity;
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
    name:              string;
    description:       string;
    icon:              string;
    codexSecret:       boolean;
    parentName:        string;
    purchaseQuantity?: number;
}

export interface IImage {
    contentHash?: string;
    forumName?: string;
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

export interface IInboxMessage {
    sender: string;
    title:  string;
    body:   string;
    attachments: string[];
    countedAttachments: ICountedItem[];
    icon?: string;
    transmission?: string;
    highPriority?: boolean;
    customData?: string;
}

export interface IMissionReward {
    credits?: number;
    items?: string[];
    countedItems?: ICountedItem[];
    countedStoreItems?: ICountedStoreItem[];
    droptable?: string;
}

export type TReward = {
    rewardType: "RT_STORE_ITEM";
    itemType:   string;
} | {
    rewardType: "RT_RESOURCE" | "RT_RECIPE";
    itemType:   string;
    amount:     number;
} | {
    rewardType: "RT_CREDITS";
    amount:     number;
};

export interface IKey {
    name?:             string;
    description?:      string;
    icon?:             string;
    parentName:        string;
    codexSecret:       boolean;
    excludeFromCodex?: boolean;
    replayable?:       boolean;
    chainStages?:      {
        key?:                     string;
        itemsToGiveWhenTriggered: string[];
        messageToSendWhenTriggered?: IInboxMessage;
    }[];
    missionReward?: IMissionReward;
    rewards?:       TReward[];
}

export interface IHelminthSnack {
    type: string;
    count: number;
    gain: number;
}

export interface IExportMisc {
    uniqueLevelCaps: Record<string, number>;
    boosterDurations: Record<TRarity, number>;
    npcKillRewardMultiplier: number;
    helminthSnacks: Record<string, IHelminthSnack>;
    creditBundles: Record<string, number>;
}

export interface IModSet {
    description:      string;
    icon:             string;
    numUpgradesInSet: number;
    levelStats:       object[];
    buffSet?:         boolean;
}

export interface IExportNightwave {
    affiliationTag: string;
    challenges:     Record<string, {
        name:        string;
        description: string;
        standing:    number;
        required:    number;
        icon:        string;
        tip?:        string;
        tipIcon?:    string;
    }>;
    rewards:        {
        uniqueName:   string;
        name?:        string;
        description?: string;
        icon?:        string;
        itemCount?:   number;
    }[];
}

export interface IRailjackWeapon {
    name:                string;
    parentName:          string;
    icon:                string;
    codexSecret:         boolean;
    damagePerShot?:      number[];
    totalDamage?:        number;
    description:         string;
    criticalChance?:     number;
    criticalMultiplier?: number;
    procChance?:         number;
    fireRate?:           number;
    masteryReq?:         number;
    productCategory:     "CrewShipWeapons";
    excludeFromCodex?:   boolean;
    slot?:               number;
    accuracy?:           number;
    omegaAttenuation:    number;
    noise?:              "ALARMING";
    trigger?:            "BURST" | "SEMI" | "AUTO" | "HELD";
    magazineSize?:       number;
    reloadTime?:         number;
    multishot?:          number;
    compatibilityTags?:  string[];
    variantType:         "VT_NORMAL";
    behaviours:          IWeaponBehaviour[];
    defaultUpgrades?:    IDefaultUpgrade[];
}

export interface IRecipe {
    resultType:              string;
    buildPrice:              number;
    buildTime:               number;
    skipBuildTimePrice:      number;
    consumeOnUse:            boolean;
    num:                     number;
    codexSecret:             boolean;
    excludeFromCodex?:       boolean;
    alwaysAvailable?:        boolean;
    hidden?:                 boolean;
    primeSellingPrice?:      number;
    ingredients:             ICountedItem[];
    secretIngredientAction?: "SIA_UNBRAND" | "SIA_SPECTRE_LOADOUT_COPY" | "SIA_GILD_WEAPON" | "SIA_CREATE_KUBROW" | "SIA_DISTILL_PRINT" | "SIA_WARFRAME_ABILITY";
    secretIngredients?:      {
        ItemType:  string;
        ItemCount: number;
    }[];
    syndicateStandingChange?: {
        tag: string;
        value: number;
    };
    excludeFromMarket?: boolean;
}

export interface IRegion {
    name:                   string;
    systemIndex:            number;
    systemName:             string;
    nodeType:               number;
    masteryReq:             number;
    missionIndex:           number;
    missionName:            string;
    factionIndex?:          number;
    factionName?:           string;
    secondaryFactionIndex?: number;
    secondaryFactionName?:  string;
    minEnemyLevel:          number;
    maxEnemyLevel:          number;
    masteryExp:             number;
    missionReward?:         IMissionReward;
    miscItemFee?:           ICountedItem;
    rewardManifests:        string[];
    cacheRewardManifest?:   string;
    darkSectorData?:        {
        resourceBonus:    number;
        xpBonus:          number;
        weaponXpBonusFor: "Rifles" | "Melee" | "Shotguns" | "Pistols";
        weaponXpBonusVal: number;
    };
    questReq?:              string;
    hidden?:                boolean;
}

export type TRelicQuality = "VPQ_BRONZE" | "VPQ_SILVER" | "VPQ_GOLD" | "VPQ_PLATINUM";

export interface IRelic {
    category:       string;
    era:            "Requiem" | "Axi" | "Neo" | "Meso" | "Lith";
    icon:           string;
    codexSecret:    boolean;
    description:    string;
    quality:        TRelicQuality;
    rewardManifest: string;
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
    deco?:              string; // for ShipDecorations & FusionTreasures
    sockets?:           string[]; // for FusionTreasures
    syndicateTag?:      string; // for fish
    standingBonus?:     number; // for fish
    dissectionParts?:   ICountedItem[]; // for fish
    purchaseQuantity?:  number;
    pickupQuantity?:    IRange;
}

export type TMissionDeck = TRewardTier[];
export type TRewardTier = IReward[];
export interface IReward {
    type:         string;
    itemCount:    number;
    probability?: number;
    rarity?:      TRarity;
}

export interface ISentinel {
    name:              string;
    icon:              string;
    health?:           number;
    shield?:           number;
    armor?:            number;
    stamina?:          number;
    power?:            number;
    codexSecret:       boolean;
    excludeFromCodex?: boolean;
    description:       string;
    productCategory:   "SpecialItems" | "KubrowPets" | "Sentinels" | "MoaPets";
    defaultWeapon?:    string;
    exalted?:          string[];
    defaultUpgrades?:  IDefaultUpgrade[];
}

export interface IDefaultUpgrade {
    ItemType: string;
    Slot:     number;    
}

export type TStandingLimitBin =
    "STANDING_LIMIT_BIN_NONE"
    | "STANDING_LIMIT_BIN_NORMAL"
    | "STANDING_LIMIT_BIN_PVP"
    | "STANDING_LIMIT_BIN_LIBRARY"
    | "STANDING_LIMIT_BIN_CETUS"
    | "STANDING_LIMIT_BIN_QUILLS"
    | "STANDING_LIMIT_BIN_SOLARIS"
    | "STANDING_LIMIT_BIN_VENTKIDS"
    | "STANDING_LIMIT_BIN_VOX"
    | "STANDING_LIMIT_BIN_ENTRATI"
    | "STANDING_LIMIT_BIN_NECRALOID"
    | "STANDING_LIMIT_BIN_ZARIMAN"
    | "STANDING_LIMIT_BIN_KAHL"
    | "STANDING_LIMIT_BIN_CAVIA"
    | "STANDING_LIMIT_BIN_HEX";

export interface ISyndicate {
    uniqueName: string;
    name: string;
    icon: string;
    description?: string;
    colour: IColour;
    backgroundColour: IColour;
    dailyLimitBin: TStandingLimitBin;
    initiationSacrifice?: ISyndicateSacrifice;
    initiationReward?: string;
    alignments?: Record<string, number>;
    dailyChallenges?: string[];
    weeklyChallenges?: string[];
    titles?: {
        level: number;
        name: string;
        icon?: string;
        description?: string;
        minStanding: number;
        maxStanding: number;
        sacrifice?: ISyndicateSacrifice;
        reward?: ICountedItem;
        storeItemReward?: string;
    }[];
    medallions?: {
        itemType: string;
        standing: number;
    }[];
    medallionsCappedByDailyLimit?: boolean;
    favours: {
        storeItem:     string;
        standingCost:  number;
        creditsCost:   number;
        requiredLevel: number;
        rankUpReward:  boolean;
    }[];
}

export interface ISyndicateSacrifice {
    items: ICountedItem[];
    credits: number;
}

export interface ISystem {
    name: string;
    droneDamage: IRange;
    damageChance: number;
    resources: IPickUpTypeRarity[];
}

export interface IRange {
    minValue: number;
    maxValue: number;
}

export interface IPickUpTypeRarity {
    StoreItem: string;
    ItemType: string;
    Rarity: TRarity;
}

export interface ITextIcon {
    DIT_PS4?:      string;
    DIT_XBONE?:    string;
    DIT_STEAM?:    string;
    DIT_AGNOSTIC?: string;
    DIT_SWITCH?:   string;
    DIT_PC?:       string;
    DIT_PS5?:      string;
    DIT_IOS?:      string;
    DIT_AUTO?:     string;
}

export interface IUpgrade {
    name:                 string;
    icon:                 string;
    polarity:             "AP_POWER" | "AP_DEFENSE" | "AP_TACTIC" | "AP_ATTACK" | "AP_WARD" | "AP_UNIVERSAL" | "AP_UMBRA" | "AP_PRECEPT" | "AP_ANY";
    rarity:               TRarity;
    codexSecret:          boolean;
    baseDrain:            number;
    fusionLimit:          number;
    compat?:              string;
    compatibilityTags?:   string[];
    compatName?:          string;
    type?:                string;
    description?:         string;
    isUtility?:           boolean;
    modSet?:              string;
    modSetValues?:        number[];
    subtype?:             string;
    excludeFromCodex?:    boolean;
    canBeTransmutation:   boolean;
    isStarter?:           boolean;
    isFrivolous?:         boolean;
    upgradeEntries?:      {
        tag:           string;
        prefixTag:     string;
        suffixTag:     string;
        canBeBuff:     boolean;
        canBeCurse:    boolean;
        upgradeValues: {
            value:               number;
            locTag?:             string;
            reverseValueSymbol?: boolean;
        }[];
    }[];
    availableChallenges?: { // for rivens
        fullName:      string;
        description:   string;
        singleDescription?: string;
        countRange:    number[];
        complicationChance: number;
        complications: {
            fullName:     string;
            description:  string;
            overrideTag?: string;
            countMultiplier: number;
            weight: number;
        }[];
    }[];
    compatibleItems?: string[]; // for rivens
}

export interface IVendor {
    isDynamic: boolean;
    isOneBinPerCycle?: boolean;
    items: IVendorOffer[];
    randomItemPricesPerBin?: {
        type: string;
        count: IRange;
    }[][];
    numItems?: IRange;
    numItemsPerBin?: number[];
    randomSeedType?: "VRST_FLAVOUR_TEXT" | "VRST_WEAPON";
}

export interface IVendorOffer {
    storeItem: string;
    quantity: number;
    alwaysOffered: boolean;
    bin: number;
    probability?: number;
    rotatedWeekly?: boolean;
    duplicates: number;
    credits?: number | {
        minValue: number;
        maxValue: number;
        step: number;
    };
    platinum?: number | IRange;
    itemPrices?: ICountedItem[];
    numRandomItemPrices?: number;
    durationHours?: number | IRange;
    purchaseLimit?: number;
    syndicate?: {
        tag: string;
        minRank: number;
        reductionPerPositiveRank: number;
        increasePerNegativeRank: number;
    }
}

export interface IVirtual {
    parentName: string;
    name?: string;
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
    abilities:           ({ uniqueName: string } & IAbility)[];
    passiveDescription?: string;
    productCategory:     "Suits" | "SpaceSuits" | "MechSuits";
    exalted?:            string[];
    longDescription?:    string;
    variantType:         "VT_NORMAL" | "VT_PRIME" | "VT_VARIANT";
    additionalItems?:    string[];
    nemesisUpgradeTag?:  "InnateElectricityDamage" | "InnateHeatDamage" | "InnateFreezeDamage" | "InnateToxinDamage" | "InnateMagDamage" | "InnateRadDamage" | "InnateImpactDamage";
}

export interface IWeapon {
    name:                   string;
    parentName:             string;
    icon:                   string;
    codexSecret:            boolean;
    damagePerShot?:         number[];
    totalDamage?:           number;
    description:            string;
    criticalChance?:        number;
    criticalMultiplier?:    number;
    procChance?:            number;
    fireRate?:              number;
    masteryReq?:            number;
    productCategory:        "Pistols" | "Melee" | "LongGuns" | "SpaceGuns" | "SpaceMelee" | "OperatorAmps" | "SentinelWeapons" | "SpecialItems" | "DrifterMelee";
    holsterCategory?:       "MELEE" | "RIFLE" | "ARM_MOUNTED" | "STAFF" | "FIST" | "TONFA" | "SHORT_MELEE" | "SHOTGUN" | "SMG" | "SNIPER" | "DUAL_SHORT_MELEE" | "LEFT_FOREARM_MOUNTED" | "HIP_MELEE" | "DUAL_MELEE" | "CLAWS" | "PUNCH_SLASH_KICK" | "WIDE_RIFLE" | "BOW" | "PISTOL" | "DUAL_HIP_MELEE";
    slot?:                  number;
    accuracy?:              number;
    omegaAttenuation:       number;
    noise?:                 "ALARMING" | "SILENT";
    trigger?:               "SEMI" | "AUTO" | "BURST" | "ACTIVE" | "CHARGE" | "DUPLEX" | "HELD" | "Auto Burst";
    magazineSize?:          number;
    reloadTime?:            number;
    multishot?:             number;
    compatibilityTags?:     string[];
    behaviours?:            IWeaponBehaviour[];
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
    premiumPrice?:          number;
    variantType:            "VT_NORMAL" | "VT_STARTER" | "VT_VARIANT" | "VT_SYNDICATE" | "VT_PRIME" | "VT_KUVA";
    partType?:              string;
    gunType?:               "GT_RIFLE" | "GT_SHOTGUN" | "GT_BEAM";
    donationStandingBonus?: number;
    defaultUpgrades?:       IDefaultUpgrade[];
    additionalItems?:       string[];
}

export interface IWeaponBehaviour {
    stateName?: string;
    projectile?: IProjectile;
    chargedProjectile?: IProjectile;
    impact?: IDamageTable;
}

export interface IProjectile {
    attack?: IDamageTable;
    explosiveAttack?: IDamageTable;
    embedDeathAttack?: IDamageTable;
}

export interface IDamageTable {
    DT_IMPACT?: number;
    DT_PUNCTURE?: number;
    DT_SLASH?: number;
    DT_FIRE?: number;
    DT_FREEZE?: number;
    DT_ELECTRICITY?: number;
    DT_POISON?: number;
    DT_EXPLOSION?: number;
    DT_RADIATION?: number;
    DT_GAS?: number;
    DT_MAGNETIC?: number;
    DT_VIRAL?: number;
    DT_CORROSIVE?: number;
    DT_RADIANT?: number;
    DT_SENTIENT?: number;
    DT_FINISHER?: number;
    DT_SHIELD_DRAIN?: number;
}

export type TProcType =
    "PT_KNOCKBACK" // DT_IMPACT
    | "PT_FRAILTY" // DT_PUNCTURE
    | "PT_BLEEDING" // DT_SLASH
    | "PT_IMMOLATION" // DT_FIRE
    | "PT_CHILLED" // DT_FREEZE
    | "PT_ELECTROCUTION" // DT_ELECTRICITY
    | "PT_POISONED" // DT_POISON
    | "PT_FLASHBANG" // DT_EXPLOSION
    | "PT_RAD_TOX" // DT_RADIATION
    | "PT_ASPHYXIATION" // DT_GAS
    | "PT_MAGNETIZED" // DT_MAGNETIC
    | "PT_INFECTED" // DT_VIRAL
    | "PT_CAUSTIC_BURN" // DT_CORROSIVE
    | "PT_RADIANT" // DT_RADIANT
    | "PT_STAGGERED"
    | "PT_BIG_STAGGER"
    | "PT_STUNNED"
    | "PT_KNOCKED_DOWN"
    | "PT_RAGDOLL"
    ;

export interface IEnumerator {
    id: number;
    tag: string;
    name?: string;
}
