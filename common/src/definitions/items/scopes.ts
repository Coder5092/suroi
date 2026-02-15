import { DefinitionType, ObjectDefinitions, type ItemDefinition } from "../../utils/objectDefinitions";
import { PerkIds } from "./perks";

export interface ScopeDefinition extends ItemDefinition {
    readonly defType: DefinitionType.Scope

    readonly giveByDefault: boolean
    readonly zoomLevel: number

    readonly givenPerk?: PerkIds
}

export const Scopes = new ObjectDefinitions<ScopeDefinition>(([
    ["1x", 70, true],
    ["2x", 100, true],
    ["3x_thermal", 115, false, PerkIds.ThermalGoggles],
    ["4x", 130, false],
    ["4x_night_vision", 130, false, PerkIds.NightVision],
    ["5x_thermal", 145, false, PerkIds.ThermalGoggles],
    ["8x", 160, false],
    ["16x", 220, false]
    // Value 190 reserved for possible 12x scope
] satisfies readonly [string, number, boolean, PerkIds?][]).map(([magnification, zoomLevel, defaultScope, perk]) => ({
    idString: `${magnification}_scope`,
    name: `${magnification.replaceAll("_", " ")} Scope`,
    defType: DefinitionType.Scope,
    noDrop: defaultScope,
    giveByDefault: defaultScope,
    zoomLevel: zoomLevel,
    givenPerk: perk
})));

export const DEFAULT_SCOPE = Scopes.definitions[0];
