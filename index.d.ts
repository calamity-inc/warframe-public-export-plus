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
export declare const ExportAnimals: Record<string, IAnimal>;
export declare const ExportAvionics: Record<string, IAvionic>;
export declare const ExportBoosterPacks: Record<string, IBoosterPack>;
export declare const ExportBoosters: Record<string, IBooster>;
export declare const ExportBounties: Record<string, IBounty>;
export declare const ExportBundles: Record<string, IBundle>;
export declare const ExportChallenges: Record<string, IChallenge>;
export declare const ExportCodex: IExportCodex;
export declare const ExportCreditBundles: Record<string, ICreditBundle>;
export declare const ExportCustoms: Record<string, ICustom>;
export declare const ExportDojoRecipes: IExportDojoRecipes;
export declare const ExportDrones: Record<string, IDrone>;
export declare const ExportEmailItems: Record<string, IEmailItem>;
export declare const ExportEnemies: IExportEnemies;
export declare const ExportFactions: Record<TFaction, IFaction>;
export declare const ExportFlavour: Record<string, IFlavourItem>;
export declare const ExportFocusUpgrades: Record<string, IFocusUpgrade>;
export declare const ExportFusionBundles: Record<string, IFusionBundle>;
export declare const ExportGear: Record<string, IGear>;
export declare const ExportImages: Record<string, IImage>;
export declare const ExportIntrinsics: Record<string, IIntrinsic>;
export declare const ExportKeys: Record<string, IKey>;
export declare const ExportMissionTypes: Record<TMissionType, IMissionType>;
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
export declare const ExportSystems: readonly ISystem[];
export declare const ExportTextIcons: Record<string, ITextIcon>;
export declare const ExportTilesets: Record<string, ITileset>;
export declare const ExportUpgrades: Record<string, IUpgrade>;
export declare const ExportVendors: Record<string, IVendor>;
export declare const ExportVirtuals: Record<string, IVirtual>;
export declare const ExportWarframes: Record<string, IPowersuit>;
export declare const ExportWeapons: Record<string, IWeapon>;

export declare const getScaledPowersuitValues: (uniqueName: string, rank: number) => Promise<IScaledPowersuitValues>;
export declare const riven_unrollables: Record<string, ("WeaponArmorPiercingDamageMod" | "WeaponSlashDamageMod" | "WeaponImpactDamageMod")[]>;

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
    name?: string;
    description?: string;
    icon: string;
    energyRequiredToActivate: number;
    energyConsumptionOverTime?: number;
}

export interface IAchievement {
    uniqueName: string;
    name?: string;
    description?: string;
    icon?: string;
    hidden?: true;
    requiredCount?: number;
    progressIndicatorFreq?: number;
    children?: readonly string[];
}

export interface IAnimal {
    name: string;
    description: string;
    icon: string;
    health: number;
    killXPReward: number;
    conservation: {
        itemReward: string;
        woundedAnimalReward?: string;
        standingReward: number;
    };
}

export interface IArcane {
    name: string;
    icon: string;
    codexSecret: boolean;
    excludeFromCodex?: true;
    rarity: TRarity;
    levelStats?: readonly {
        tag: string;
        sub: Record<string,
            { tag: string; sub: Record<string, string> }
            | string // note: substitute itself may be a loctag
        >;
    }[][];
    fusionLimit: number;
    distillPointValue?: number;
}

export interface IAvionic {
    name: string;
    icon: string;
    polarity: "AP_UNIVERSAL" | "AP_TACTIC" | "AP_DEFENSE" | "AP_ATTACK";
    rarity: TRarity;
    codexSecret: boolean;
    baseDrain: number;
    fusionLimit: number;
    excludeFromCodex?: true;
}

export interface IBoosterPack {
    name: string;
    description: string;
    icon?: string;
    components: readonly IBoosterPackComponent[];
    rarityWeightsPerRoll: readonly Record<TRarity, number>[];
    canGiveDuplicates: boolean;
    platinumCost?: number;
    excludeFromMarket?: true;
}

export interface IBoosterPackComponent {
    Item: string;
    Amount: number;
    Probability?: number;
    PityIncreaseRate?: number;
    Rarity: TRarity;
}

export interface IBooster {
    name: string;
    description: string;
    icon: string;
    typeName: string;
}

export interface IBounty {
    name: string;
    description: string;
    icon: string;
    stages: readonly string[][];
}

export type TPlatform =
    | "CP_WINDOWS"
    | "CP_XBONE"
    | "CP_PS4"
    | "CP_SWITCH"
    | "CP_PS5"
    | "CP_XSX"
    | "CP_IOS"
    | "CP_ANDROID"
    ;

export interface IBundle {
    name?: string;
    description?: string;
    icon?: string;
    excludeFromCodex?: true;
    components: readonly {
        typeName: string;
        purchaseQuantity: number;
        durabilityDays?: number; // for boosters
        giveMaxRank?: true;
    }[];
    giftingBonus?: string;
    packageDiscount?: number;
    creditsCost?: number;
    platinumCost?: number;
    excludeFromMarket?: true;
    oneTimePurchasable?: true;
    bundledPlatinum?: number;
    platinumBundlePair?: string;
    excludedPlatforms?: readonly TPlatform[];
}

export interface IChallenge {
    name?: string;
    description?: string;
    flavour?: string;
    hint?: string;
    icon?: string;
    requiredCount?: number;
    standing?: number;
    countedRewards?: readonly ICountedStoreItem[];
    message?: IInboxMessage;
}

export interface IExportCodex {
    objects: Record<string, ICodexEntry>;
    loreFragments: Record<string, ILoreFragment>;
    songs: Record<string, ISongFragment>;
    fighterFrames: Record<string, IFrameFighterFragment>;
}

export interface ICodexEntry {
    name: string;
    description?: string;
    icon: string;
    reqScans: number;
    secret: boolean;
}

export interface ILoreFragment {
    name: string;
    description?: string;
    image?: string;
    reqScans: number;
    secretTransmission?: {
        sound: string;
        text: string;
    };
}

export interface ISongFragment {
    name: string;
    song: string;
    reqScans: number;
}

export interface IFrameFighterFragment {
    name: string;
    suit: string;
    reqScans: number;
}

export interface ICreditBundle {
    name: string;
    description?: string;
    icon: string;
    credits: number;
    platinumCost?: number;
}

export interface ICustom {
    name: string;
    codexSecret: boolean;
    description?: string;
    icon?: string;
    excludeFromCodex?: true;
    productCategory: "WeaponSkins" | "CrewShipWeaponSkins";
    alwaysAvailable?: true;
    requirement?: string;
    additionalItems?: readonly string[];
    tradable: boolean;
    subroutines?: readonly string[];
    randomisedUpgrades?: readonly {
        tag: string;
        range: readonly number[];
    }[];
    excludedPlatforms?: readonly TPlatform[];
    platinumCost?: number;
    excludeFromMarket?: true;
}

export interface IExportDojoRecipes {
    research: Record<string, IDojoResearch>;
    fabrications: Record<string, {
        resultType: string;
        price: number;
        ingredients: readonly ICountedItem[];
    }>;
    rooms: Record<string, IDojoRoom>;
    decos: Record<string, IDojoDeco>;
    colours: Record<string, {
        name: string;
        colour: IColour;
    }>;
    backdrops: Record<string, {
        name: string;
        icon: string;
    }>;
}

export interface IDojoRecipe {
    price: number;
    time: number;
    skipTimePrice: number;
    ingredients: readonly ICountedItem[];
    guildXpValue?: number;
}

export interface IDojoResearch extends IDojoRecipe {
    resultType?: string;
    replicatePrice: number;
    techPrereq?: string;
}

export interface IDojoBuild extends IDojoRecipe {
    resultType: string;
    name: string;
    description: string;
    icon: string;
}

export interface IDojoRoom extends IDojoBuild {
    destructionTime: number;
    capacity: number;
    energy: number;
    decoCapacity: number;
    hidden?: true;
}

export interface IDojoDeco extends IDojoBuild {
    capacityCost?: number;
    requiredInVault?: boolean;
}

export interface IDrone {
    name: string;
    description: string;
    icon: string;
    binCount: number;
    binCapacity: number;
    fillRate: number;
    durability: number;
    repairRate: number;
    codexSecret: boolean;
    capacityMultipliers: Record<TRarity, number>;
    probabilities: Record<TRarity, number>;
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
    baseLevel: number;
    avatarTypes: {
        STANDARD?: string;
        EXIMUS?: string;
        RARE?: string;
    };
    items?: readonly {
        type: string;
    }[];
}

export interface IEnemyAvatar {
    name: string;
    icon?: string;
    description?: string;
    faction: string;
    health: number;
    damageController: string;
    killXPReward: number;
    factionResistanceKeyword?: string;
    droptable?: string;
    codexSecret?: boolean;
    codexScansRequired: number;
    excludeFromSimulacrum?: boolean;
    isFrivolous?: true;
}

export interface IDamageController {
    armor: number;
    shield: number;
    unhandledProcTypes: readonly TProcType[];
    hitProxies?: readonly {
        bone: string;
        type: string;
    }[];
}

export interface IHitProxy {
    damageAtten?: number;
    criticalChance?: number;
    criticalMultiplier?: number;
}

export interface IAiWeapon {
    name?: string;
    description?: string;
    icon?: string;
    behaviours?: readonly IWeaponBehaviour[];
}

export type TDroptable = readonly IRewardPool[];
export interface IRewardPool {
    type: "mod" | "blueprint" | "resource" | "sigil" | "additionalItem" | "relic";
    chance: number;
    items: readonly {
        type: string;
        probability: number;
    }[];
}

export type TFaction =
    | "FC_GRINEER"
    | "FC_CORPUS"
    | "FC_INFESTATION"
    | "FC_OROKIN"
    | "FC_RED_VEIL"
    | "FC_SENTIENT"
    | "FC_NARMER"
    | "FC_MITW"
    | "FC_SCALDRA"
    | "FC_TECHROT"
    | "FC_DUVIRI"
    | "FC_TENNO"
    ;

export interface IFaction {
    index: number;
    name?: string;
}

export interface IFlavourItem {
    name: string;
    description: string;
    icon: string;
    base: string;
    codexSecret?: boolean;
    excludeFromCodex?: true;
    alwaysAvailable?: true;
    platinumCost?: number;
    excludeFromMarket?: true;
    hexColours?: readonly IColour[];
    legacyColours?: readonly IColour[];
    titleTag?: string;
}

export interface IColour {
    value: string;
}

export type TFocusSchool = "AP_ATTACK" | "AP_DEFENSE" | "AP_POWER" | "AP_TACTIC" | "AP_WARD";

export interface IFocusUpgrade {
    name: string;
    icon: string;
    polarity: TFocusSchool;
    rarity: TRarity;
    codexSecret: boolean;
    baseDrain: number;
    fusionLimit: number;
    excludeFromCodex: true;
    levelStats: readonly Record<string, string>[];
    description: string;
    baseFocusPointCost: number;
}

export interface IFusionBundle {
    name: string;
    description: string;
    icon: string;
    fusionPoints: number;
}

export interface IGear {
    name: string;
    description: string;
    icon: string;
    codexSecret: boolean;
    parentName: string;
    purchaseQuantity?: number;
    creditsCost?: number;
    platinumCost?: number;
    excludeFromMarket?: true;
}

export interface IImage {
    contentHash?: string;
    forumName?: string;
}

export interface IIntrinsic {
    name: string;
    description: string;
    icon: string;
    ranks: readonly IIntrinsicRank[];
}

export interface IIntrinsicRank {
    name: string;
    description: string;
}

export interface IInboxMessage {
    sender: string;
    title: string;
    body: string;
    attachments: readonly string[];
    countedAttachments: readonly ICountedItem[];
    icon?: string;
    transmission?: string;
    highPriority?: boolean;
    customData?: string;
    cinematic?: string;
}

export interface IMissionReward {
    credits?: number;
    items?: readonly string[];
    countedItems?: readonly ICountedItem[];
    countedStoreItems?: readonly ICountedStoreItem[];
    droptable?: string;
}

export type TReward = {
    rewardType: "RT_STORE_ITEM";
    itemType: string;
} | {
    rewardType: "RT_RESOURCE" | "RT_RECIPE";
    itemType: string;
    amount: number;
} | {
    rewardType: "RT_CREDITS";
    amount: number;
};

export interface IKey {
    name?: string;
    description?: string;
    icon?: string;
    parentName: string;
    codexSecret: boolean;
    excludeFromCodex?: true;
    replayable?: boolean;
    chainStages?: readonly {
        key?: string;
        itemsToGiveWhenTriggered: readonly string[];
        messageToSendWhenTriggered?: IInboxMessage;
    }[];
    missionReward?: IMissionReward;
    rewards?: readonly TReward[];
    cacheRewardManifest?: string;
    mission?: {
        minEnemyLevel?: number;
        maxEnemyLevel?: number;
    };
}

export interface IHelminthSnack {
    type: "/Lotus/Types/Items/InfestedFoundry/HelminthBile" | "/Lotus/Types/Items/InfestedFoundry/HelminthBiotics" | "/Lotus/Types/Items/InfestedFoundry/HelminthPheromones" | "/Lotus/Types/Items/InfestedFoundry/HelminthSynthetics" | "/Lotus/Types/Items/InfestedFoundry/HelminthCalx" | "/Lotus/Types/Items/InfestedFoundry/HelminthOxides" | "/Lotus/Types/Items/InfestedFoundry/HelminthAppetiteCooldownReducer";
    count: number;
    gain: number;
}

export type TMissionType =
    | "MT_ASSASSINATION"
    | "MT_EXTERMINATION"
    | "MT_SURVIVAL"
    | "MT_RESCUE"
    | "MT_SABOTAGE"
    | "MT_CAPTURE"
    | "MT_COUNTER_INTEL"
    | "MT_INTEL"
    | "MT_DEFENSE"
    | "MT_MOBILE_DEFENSE"
    | "MT_PVP"
    | "MT_MASTERY"
    | "MT_RECOVERY"
    | "MT_TERRITORY"
    | "MT_RETRIEVAL"
    | "MT_HIVE"
    | "MT_SALVAGE"
    | "MT_EXCAVATE"
    | "MT_RAID"
    | "MT_PURGE"
    | "MT_GENERIC"
    | "MT_PURIFY"
    | "MT_ARENA"
    | "MT_JUNCTION"
    | "MT_PURSUIT"
    | "MT_RACE"
    | "MT_ASSAULT"
    | "MT_EVACUATION"
    | "MT_LANDSCAPE"
    | "MT_RESOURCE_THEFT"
    | "MT_ENDLESS_EXTERMINATION"
    | "MT_ENDLESS_DUVIRI"
    | "MT_RAILJACK"
    | "MT_ARTIFACT"
    | "MT_CORRUPTION"
    | "MT_VOID_CASCADE"
    | "MT_ARMAGEDDON"
    | "MT_VAULTS"
    | "MT_ALCHEMY"
    | "MT_ASCENSION"
    | "MT_ENDLESS_CAPTURE"
    | "MT_OFFERING"
    | "MT_PVPVE"
    | "MT_DESCENT"
    | "MT_TAU_WAR"
    | "MT_PAINT_FLOOD"
    ;

export interface IMissionType {
    index: number;
    name?: string;
}

export interface IModSet {
    description: string;
    icon: string;
    numUpgradesInSet: number;
    levelStats: readonly Record<string, string>[];
    buffSet?: boolean;
}

export interface IExportNightwave {
    affiliationTag: string;
    challenges: Record<string, {
        name: string;
        description: string;
        standing: number;
        required: number;
        icon: string;
        tip?: string;
        tipIcon?: string;
    }>;
    rewards: readonly {
        uniqueName: string;
        name?: string;
        description?: string;
        icon?: string;
        itemCount?: number;
    }[];
}

export interface IRailjackWeapon {
    name: string;
    parentName: string;
    icon: string;
    codexSecret: boolean;
    damagePerShot?: readonly number[];
    totalDamage?: number;
    description: string;
    criticalChance?: number;
    criticalMultiplier?: number;
    procChance?: number;
    fireRate?: number;
    masteryReq?: number;
    productCategory: "CrewShipWeapons";
    excludeFromCodex?: true;
    slot?: number;
    accuracy?: number;
    omegaAttenuation: number;
    noise?: "ALARMING";
    trigger?: "BURST" | "SEMI" | "AUTO" | "HELD";
    magazineSize?: number;
    reloadTime?: number;
    multishot?: number;
    compatibilityTags?: readonly string[];
    variantType: "VT_NORMAL";
    behaviours: readonly IWeaponBehaviour[];
    defaultUpgrades?: readonly IDefaultUpgrade[];
    creditsCost?: number;
    excludeFromMarket?: true;
}

export interface IRecipe {
    resultType: string;
    buildPrice: number;
    buildTime: number;
    skipBuildTimePrice: number;
    consumeOnUse: boolean;
    num: number;
    codexSecret: boolean;
    excludeFromCodex?: true;
    alwaysAvailable?: true;
    hidden?: true;
    primeSellingPrice?: number;
    ingredients: readonly ICountedItem[];
    secretIngredientAction?: "SIA_UNBRAND" | "SIA_SPECTRE_LOADOUT_COPY" | "SIA_GILD_WEAPON" | "SIA_CREATE_KUBROW" | "SIA_DISTILL_PRINT" | "SIA_WARFRAME_ABILITY";
    secretIngredients?: readonly {
        ItemType: string;
        ItemCount: number;
    }[];
    syndicateStandingChange?: {
        tag: string;
        value: number;
    };
    tradable: boolean;
    creditsCost?: number;
    platinumCost?: number;
    excludeFromMarket?: true;
    oneTimePurchasable?: true;
}

export interface IRegion {
    name: string;
    systemIndex: number;
    systemName: string; // may differ from ExportSystems[systemIndex].name for railjack
    nodeType: number;
    masteryReq: number;
    missionType: TMissionType;
    missionName: string; // may differ from ExportMissions[missionType].name for dual defense, conjunction survival, railjack
    faction?: TFaction;
    secondaryFaction?: TFaction;
    minEnemyLevel: number;
    maxEnemyLevel: number;
    masteryExp: number;
    tileset?: string;
    levelOverride?: string;
    enemySpec?: string;
    extraEnemySpec?: string;
    vipAgent?: string;
    customAdvancedSpawners?: readonly string[];
    missionReward?: IMissionReward;
    miscItemFee?: ICountedItem;
    founders?: readonly string[];
    challenges?: readonly string[];
    rewardManifests: readonly string[];
    cacheRewardManifest?: string;
    darkSectorData?: {
        resourceBonus: number;
        xpBonus: number;
        weaponXpBonusFor: "Rifles" | "Melee" | "Shotguns" | "Pistols";
        weaponXpBonusVal: number;
    };
    questReq?: string;
    nextNodes: readonly string[];
    hidden?: true;
}

export type TRelicQuality = "VPQ_BRONZE" | "VPQ_SILVER" | "VPQ_GOLD" | "VPQ_PLATINUM";

export interface IRelic {
    category: string;
    era: "Requiem" | "Axi" | "Neo" | "Meso" | "Lith" | "Vanguard";
    icon: string;
    codexSecret: boolean;
    description: string;
    quality: TRelicQuality;
    rewardManifest: string;
    introducedAt?: number;
    vaultedAt?: number;
}

export interface IResource {
    name: string;
    description: string;
    icon: string;
    codexSecret: boolean;
    parentName: string;
    productCategory: "ShipDecorations" | "MiscItems" | "CrewShips" | "FusionTreasures" | "SupplyDrop" | "Ships";
    excludeFromCodex?: true;
    showInInventory?: boolean;
    longDescription?: string;
    primeSellingPrice?: number;
    rarity?: TRarity;
    deco?: string; // for ShipDecorations & FusionTreasures
    capacityCost?: number; // for ShipDecorations & FusionTreasures
    dojoCapacityCost?: number; // for ShipDecorations & FusionTreasures
    sockets?: readonly string[]; // for FusionTreasures
    syndicateTag?: string; // for fish
    standingBonus?: number; // for fish
    dissectionParts?: readonly ICountedItem[]; // for fish
    platinumCost?: number;
    excludeFromMarket?: true;
    oneTimePurchasable?: true;
    purchaseQuantity?: number;
    pickupQuantity?: IRange;
    helminthSnack?: IHelminthSnack;
}

export type TMissionDeck = readonly TRewardTier[];
export type TRewardTier = readonly IReward[];
export interface IReward {
    type: string;
    itemCount: number;
    probability?: number;
    rarity?: TRarity;
}

export interface ISentinel {
    name: string;
    icon: string;
    health?: number;
    shield?: number;
    armor?: number;
    stamina?: number;
    power?: number;
    codexSecret: boolean;
    excludeFromCodex?: true;
    description: string;
    productCategory: "SpecialItems" | "KubrowPets" | "Sentinels" | "MoaPets";
    defaultWeapon?: string;
    exalted?: readonly string[];
    defaultUpgrades?: readonly IDefaultUpgrade[];
    platinumCost?: number;
    excludeFromMarket?: true;
}

export interface IDefaultUpgrade {
    ItemType: string;
    Slot: number;
}

export type TStandingLimitBin =
    | "STANDING_LIMIT_BIN_NONE"
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
    | "STANDING_LIMIT_BIN_HEX"
    ;

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
    dailyChallenges?: readonly string[];
    weeklyChallenges?: readonly string[];
    titles?: readonly {
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
    medallions?: readonly {
        itemType: string;
        standing: number;
    }[];
    medallionsCappedByDailyLimit?: boolean;
    favours: readonly {
        storeItem: string;
        standingCost: number;
        creditsCost: number;
        requiredLevel: number;
        rankUpReward: boolean;
    }[];
}

export interface ISyndicateSacrifice {
    items: readonly ICountedItem[];
    credits: number;
}

export interface ISystem {
    index: number;
    name: string;
    droneDamage: IRange;
    damageChance: number;
    resources: readonly IPickUpTypeRarity[];
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
    DIT_PS4?: string;
    DIT_XBONE?: string;
    DIT_STEAM?: string;
    DIT_AGNOSTIC?: string;
    DIT_SWITCH?: string;
    DIT_PC?: string;
    DIT_PS5?: string;
    DIT_IOS?: string;
    DIT_ANDROID?: string;
    DIT_AUTO?: string;
}

export interface ITileset {
    uniqueName: string;
    faction: TFaction;
    missions: Partial<Record<TMissionType, ITilesetMission>>; // Only contains mission types supported by the tileset.
}

export interface ITilesetMission {
    procLevel: string;
    enemySpecs?: readonly string[];
    extraEnemySpecs?: readonly string[];
    advancedSpawners?: readonly string[];
    vipAgent?: string;
}

export interface IUpgrade {
    name: string;
    icon?: string;
    polarity: "AP_POWER" | "AP_DEFENSE" | "AP_TACTIC" | "AP_ATTACK" | "AP_WARD" | "AP_UNIVERSAL" | "AP_UMBRA" | "AP_PRECEPT" | "AP_ANY";
    rarity: TRarity;
    codexSecret: boolean;
    baseDrain: number;
    fusionLimit: number;
    compat?: string;
    compatName?: string;
    compatibilityTags?: readonly string[];
    incompatibilityTags?: readonly string[];
    type?: string;
    description?: string;
    isUtility?: true;
    modSet?: string;
    modSetValues?: readonly number[];
    subtype?: string;
    excludeFromCodex?: true;
    isStarter?: true;
    isFrivolous?: true;
    tradable?: boolean;
    upgradeEntries?: readonly {
        tag: string;
        prefixTag: string;
        suffixTag: string;
        canBeBuff: boolean;
        canBeCurse: boolean;
        upgradeValues: readonly {
            value: number;
            locTag?: string;
            reverseValueSymbol?: boolean;
        }[];
    }[];
    availableChallenges?: readonly { // for rivens
        fullName: string;
        description: string;
        singleDescription?: string;
        countRange: readonly number[];
        complicationChance: number;
        complications: readonly {
            fullName: string;
            description: string;
            overrideTag?: string;
            countMultiplier: number;
            weight: number;
        }[];
    }[];
    compatibleItems?: readonly string[]; // for rivens
    levelStats?: readonly {
        stats: readonly string[];
    }[];
    introducedAt?: number;
}

export interface IVendor {
    isDynamic: boolean;
    isOneBinPerCycle?: boolean;
    requiredGoalTag?: string;
    items: readonly IVendorOffer[];
    randomItemPricesPerBin?: readonly {
        type: string;
        count: IRange;
    }[][];
    numItems?: IRange;
    numItemsPerBin?: readonly number[];
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
    itemPrices?: readonly ICountedItem[];
    numRandomItemPrices?: number;
    durationHours?: number | IRange;
    purchaseLimit?: number;
    syndicate?: {
        tag: string;
        minRank: number;
        standingCost: number;
        reductionPerPositiveRank: number;
        increasePerNegativeRank: number;
    };
    focusXpCost?: {
        polarity: TFocusSchool;
        cost: number;
    };
}

export interface IVirtual {
    parentName: string;
    name?: string;
}

export interface IPowersuit {
    name: string;
    parentName: string;
    description: string;
    icon: string;
    health: number;
    shield: number;
    armor: number;
    stamina: number;
    power: number;
    codexSecret: boolean;
    masteryReq: number;
    excludeFromCodex?: true;
    sprintSpeed: number;
    abilities: readonly ({ uniqueName: string } & IAbility)[];
    passiveDescription?: string;
    productCategory: "Suits" | "SpaceSuits" | "MechSuits" | "SpecialItems";
    exalted?: readonly string[];
    longDescription?: string;
    variantType: "VT_NORMAL" | "VT_PRIME" | "VT_VARIANT";
    additionalItems?: readonly string[];
    nemesisUpgradeTag?: "InnateElectricityDamage" | "InnateHeatDamage" | "InnateFreezeDamage" | "InnateToxinDamage" | "InnateMagDamage" | "InnateRadDamage" | "InnateImpactDamage";
    maxLevelCap?: number;
    platinumCost?: number;
    excludeFromMarket?: true;
    introducedAt?: number;
}

export interface IWeapon {
    name: string;
    parentName: string;
    icon: string;
    codexSecret: boolean;
    damagePerShot?: readonly number[];
    totalDamage?: number;
    description: string;
    criticalChance?: number;
    criticalMultiplier?: number;
    procChance?: number;
    fireRate?: number;
    masteryReq?: number;
    productCategory: "Pistols" | "Melee" | "LongGuns" | "SpaceGuns" | "SpaceMelee" | "OperatorAmps" | "SentinelWeapons" | "SpecialItems" | "DrifterMelee";
    holsterCategory?: "MELEE" | "RIFLE" | "ARM_MOUNTED" | "STAFF" | "FIST" | "TONFA" | "SHORT_MELEE" | "SHOTGUN" | "SMG" | "SNIPER" | "DUAL_SHORT_MELEE" | "LEFT_FOREARM_MOUNTED" | "HIP_MELEE" | "DUAL_MELEE" | "CLAWS" | "PUNCH_SLASH_KICK" | "WIDE_RIFLE" | "BOW" | "PISTOL" | "DUAL_HIP_MELEE";
    slot?: number;
    accuracy?: number;
    omegaAttenuation: number;
    noise?: "ALARMING" | "SILENT";
    trigger?: "SEMI" | "AUTO" | "BURST" | "ACTIVE" | "CHARGE" | "DUPLEX" | "HELD" | "Auto Burst";
    magazineSize?: number;
    reloadTime?: number;
    multishot?: number;
    compatibilityTags?: readonly string[];
    behaviours?: readonly IWeaponBehaviour[];
    blockingAngle?: number;
    comboDuration?: number;
    followThrough?: number;
    range?: number;
    slamAttack?: number;
    slamRadialDamage?: number;
    slamRadius?: number;
    slideAttack?: number;
    heavyAttackDamage?: number;
    heavySlamAttack?: number;
    heavySlamRadialDamage?: number;
    heavySlamRadius?: number;
    windUp?: number;
    maxLevelCap?: number;
    sentinel?: boolean;
    excludeFromCodex?: true;
    primeOmegaAttenuation?: number;
    creditsCost?: number;
    platinumCost?: number;
    excludeFromMarket?: true;
    oneTimePurchasable?: true;
    variantType: "VT_NORMAL" | "VT_STARTER" | "VT_VARIANT" | "VT_SYNDICATE" | "VT_PRIME" | "VT_KUVA";
    partType?: string;
    gunType?: "GT_RIFLE" | "GT_SHOTGUN" | "GT_BEAM";
    donationStandingBonus?: number;
    defaultUpgrades?: readonly IDefaultUpgrade[];
    additionalItems?: readonly string[];
    bayonetOtherWeaponType?: string;
    tradable: boolean;
    introducedAt?: number;
}

export interface IWeaponBehaviour {
    stateName?: string;
    fireIterations?: number;
    burst?: {
        count: number;
        delay: number;
    };
    projectile?: IProjectile;
    chargedProjectile?: IProjectile;
    impact?: IAttackData;
}

export interface IProjectile {
    attack?: IAttackData;
    explosiveAttack?: IAttackData;
    embedDeathAttack?: IAttackData;
}

export interface IAttackData {
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
    DT_HEALTH_DRAIN?: number;
    procChance?: number;
}

export type TProcType =
    | "PT_KNOCKBACK" // DT_IMPACT
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

export interface IScaledPowersuitValues {
    health: number;
    shield: number;
    power: number;
    armor: number;
    ability_strength: number;
    heal_rate: number;
}
