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
export declare const ExportAvionics: Record<string, IAvionic>;
export declare const ExportBundles: Record<string, IBundle>;
export declare const ExportCustoms: Record<string, ICustom>;
export declare const ExportDojoRecipes: Record<string, IDojoRecipe>;
export declare const ExportDrones: Record<string, IDrone>;
export declare const ExportEnemies: IExportEnemies;
export declare const ExportFlavour: Record<string, IFlavourItem>;
export declare const ExportFocusUpgrades: Record<string, IFocusUpgrade>;
export declare const ExportFusionBundles: Record<string, IFusionBundle>;
export declare const ExportGear: Record<string, IGear>;
export declare const ExportImages: Record<string, IImage>;
export declare const ExportIntrinsics: Record<string, IIntrinsic>;
export declare const ExportKeys: Record<string, IKey>;
export declare const ExportModSet: Record<string, IModSet>;
export declare const ExportNightwave: IExportNightwave;
export declare const ExportOther: Record<string, IOther>;
export declare const ExportRailjack: IExportRailjack;
export declare const ExportRailjackWeapons: Record<string, IRailjackWeapon>;
export declare const ExportRecipes: Record<string, IRecipe>;
export declare const ExportRegions: Record<string, IRegion>;
export declare const ExportRelics: Record<string, IRelic>;
export declare const ExportResources: Record<string, IResource>;
export declare const ExportRewards: Record<string, TMissionDeck>;
export declare const ExportSentinels: Record<string, ISentinel>;
export declare const ExportUpgrades: Record<string, IUpgrade>;
export declare const ExportWarframes: Record<string, IPowersuit>;
export declare const ExportWeapons: Record<string, IWeapon>;

export type TRarity = "COMMON" | "UNCOMMON" | "RARE" | "LEGENDARY";

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
    rarity?:           TRarity;
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

export interface IBundle {
    name?:         string;
    description?:  string;
    icon?:         string;
    components:    {
        typeName:         string;
        purchaseQuantity: number;
        durability:       TRarity;
        giveMaxRank?:     boolean;
    }[];
    premiumPrice?: number;
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

export interface IExportEnemies {
    avatars:    Record<string, IEnemyAvatar>;
    droptables: Record<string, TDroptable>;
}

export interface IEnemyAvatar {
    name:         string;
    icon?:        string;
    faction:      "Stalker" | "None" | "Corpus" | "Grineer" | "Dummy" | "TENNO" | "Neutral" | "Narmer" | "Infestation" | "Orokin" | "Duviri" | "ENEMY" | "MITW" | "Prey" | "Sentient" | "NarmerVeil" | "Tenno" | "Red Veil";
    baseLevel:    number;
    health:       number;
    armor:        number;
    shield:       number;
    droptable?:   string;
    isFrivolous?: boolean;
}

export type TDroptable = IRewardPool[];
export interface IRewardPool {
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
    base:              "/EE/Types/Engine/UIBackground" | "/EE/Types/Engine/UICursor" | "/EE/Types/Engine/UISounds" | "/Lotus/Types/Game/UIStyle" | "/Lotus/Types/Game/ActionFigureDiorama" | "/Lotus/Types/Game/KubrowPet/Colors/KubrowPetColor" | "/Lotus/Types/Game/NotePack" | "/Lotus/Types/Game/PoseSet" | "/Lotus/Types/Game/QuartersWallTattoo" | "/EE/Types/Engine/UIFlavourItem" | "/Lotus/Types/Items/Emotes/Emote" | "/Lotus/Types/Items/VideoWallBackdropItem" | "/Lotus/Types/Items/VideoWallSoundscapeItem" | "/Lotus/Types/Items/AvatarImageItem" | "/Lotus/Types/Items/ColorPickerItem" | "/Lotus/Types/Items/ShipExteriorSkinItem" | "/Lotus/Types/Items/ShipAttachmentItem";
    codexSecret:       boolean;
    excludeFromCodex?: boolean;
    hexColours?:       { value: string }[];
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
    description?:      string;
    icon?:             string;
    parentName:        string;
    codexSecret:       boolean;
    excludeFromCodex?: boolean;
    chainStages?:      {
        key?:                     string;
        itemsToGiveWhenTriggered: string[];
    }[];
    rewards?:          ({
        rewardType: "RT_STORE_ITEM" | "RT_RECIPE" | "RT_RESOURCE";
        itemType:   string;
    } | {
        rewardType: "RT_CREDITS";
        amount:     number;
    })[];
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
        uniqueName:  string;
        name:        string;
        description: string;
        icon:        string;
        itemCount?:  number;
    }[];
}

export interface IOther {
    name:              string;
    description:       string;
    icon:              string;
    excludeFromCodex?: boolean;
}

export interface IExportRailjack {
    nodes: Record<string, IRailjackNode>;
}

export interface IRailjackNode {
    name: string;
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
    ingredients:             {
        ItemType:        string;
        ItemCount:       number;
    }[];
    secretIngredientAction?: "SIA_UNBRAND" | "SIA_SPECTRE_LOADOUT_COPY" | "SIA_WARFRAME_ABILITY";
    secretIngredients?:      {
        ItemType:  "/Lotus/Types/Game/PowerSuits/PlayerPowerSuit" | "/Lotus/Weapons/Tenno/Pistol/LotusPistol" | "/Lotus/Weapons/Tenno/LotusLongGun" | "/Lotus/Types/Game/LotusMeleeWeapon";
        ItemCount: number;
    }[];
}

export interface IRegion {
    name:                   string;
    systemIndex:            number;
    systemName:             string;
    nodeType:               number;
    masteryReq:             number;
    missionIndex:           number;
    missionName:            string;
    factionIndex:           number;
    factionName:            string;
    secondaryFactionIndex?: number;
    secondaryFactionName?:  string;
    minEnemyLevel:          number;
    maxEnemyLevel:          number;
    masteryExp:             number;
    rewardManifests:        string[];
    cacheRewardManifest?:   string;
    darkSectorData?:        {
        resourceBonus:    number;
        xpBonus:          number;
        weaponXpBonusFor: "Rifles" | "Melee" | "Shotguns" | "Pistols";
        weaponXpBonusVal: number;
    };
    questReq?:              string;
}

export interface IRelic {
    category:       string;
    era:            "Requiem" | "Axi" | "Neo" | "Meso" | "Lith";
    icon:           string;
    codexSecret:    boolean;
    description:    "/Lotus/Language/Relics/ImmortalProjectionBaseDesc" | "/Lotus/Language/Items/ProjectionDescription";
    quality:        "VPQ_BRONZE" | "VPQ_SILVER" | "VPQ_GOLD" | "VPQ_PLATINUM";
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
    health:            number;
    shield:            number;
    armor:             number;
    stamina:           number;
    power:             number;
    codexSecret:       boolean;
    excludeFromCodex?: boolean;
    description:       string;
    productCategory:   "SpecialItems" | "KubrowPets" | "Sentinels";
    defaultWeapon?:    string;
}

export interface IUpgrade {
    name:                 string;
    icon:                 string;
    polarity:             "AP_POWER" | "AP_DEFENSE" | "AP_TACTIC" | "AP_ATTACK" | "AP_WARD" | "AP_UNIVERSAL" | "AP_UMBRA" | "AP_PRECEPT" | "AP_ANY";
    rarity:               TRarity;
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
    isFrivolous?:         boolean;
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
    holsterCategory?:       "MELEE" | "RIFLE" | "ARM_MOUNTED" | "STAFF" | "FIST" | "TONFA" | "SHORT_MELEE" | "SHOTGUN" | "SMG" | "SNIPER" | "DUAL_SHORT_MELEE" | "LEFT_FOREARM_MOUNTED" | "HIP_MELEE" | "DUAL_MELEE" | "CLAWS" | "PUNCH_SLASH_KICK" | "WIDE_RIFLE" | "BOW" | "PISTOL" | "DUAL_HIP_MELEE";
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
