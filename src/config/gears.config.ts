/**
 * @file gears.config.ts
 * @description Winston 06: Vectorial Modularization & Configuration Schema for Picsell Clockwork Gear Engine
 */

export type ServiceModuleKey = "marketing" | "automation" | "development" | "data";

export interface ToothGeometry {
    pathId: string;
    d: string;
}

export interface GearCoordinates {
    x: number;
    y: number;
}

export interface SatelliteGearConfig {
    id: ServiceModuleKey;
    spinId: string;
    groupId: string;
    name: string;
    center: GearCoordinates;
    radius: number;
    innerPitchRadius: number;
    guideRingRadius: number;
    teethCount: number;
    initialToothOffsetDeg: number;
    color: string;
    glowColor: string;
    accentHex: string;
    labels: {
        top?: string;
        main?: string;
        bottom?: string;
        icon?: string;
    };
    axisLine: {
        x1: number;
        y1: number;
        x2: number;
        y2: number;
    };
}

export interface CentralGearConfig {
    id: "ai";
    spinId: string;
    groupId: string;
    name: string;
    center: GearCoordinates;
    radius: number;
    coreRadius: number;
    guideRingRadius: number;
    teethCount: number;
    fillColor: string;
    strokeColor: string;
    labels: {
        main: string;
        subtitle: string;
    };
}

export interface ViewBoxPresets {
    standard: {
        desktop: string;
        mobile: string;
    };
    large: {
        desktop: string;
        mobile: string;
    };
    max: {
        desktop: string;
        mobile: string;
    };
}

export const TOOTH_DEFINITION: ToothGeometry = {
    pathId: "tooth-v23",
    d: "M-9,-12 L9,-12 L12,0 L-12,0 Z",
};

export const VIEWBOX_PRESETS: ViewBoxPresets = {
    standard: {
        desktop: "180 80 840 740",
        mobile: "200 100 800 700",
    },
    large: {
        desktop: "250 150 700 600",
        mobile: "280 180 640 540",
    },
    max: {
        desktop: "280 180 640 540",
        mobile: "300 200 600 500",
    },
};

export const CENTRAL_AI_GEAR: CentralGearConfig = {
    id: "ai",
    spinId: "spin_ai",
    groupId: "g_ai",
    name: "AI Core Engine",
    center: { x: 600, y: 450 },
    radius: 120,
    coreRadius: 80,
    guideRingRadius: 126,
    teethCount: 18,
    fillColor: "#1e212b",
    strokeColor: "#333846",
    labels: {
        main: "AI",
        subtitle: "ENGINE",
    },
};

export const SATELLITE_GEARS: Record<ServiceModuleKey, SatelliteGearConfig> = {
    marketing: {
        id: "marketing",
        spinId: "spin_marketing",
        groupId: "g_marketing",
        name: "Digital Marketing",
        center: { x: 438, y: 305 },
        radius: 85,
        innerPitchRadius: 60,
        guideRingRadius: 91,
        teethCount: 12,
        initialToothOffsetDeg: 15,
        color: "var(--pic-orange, #f37021)",
        glowColor: "rgba(243, 112, 33, 0.65)",
        accentHex: "#f37021",
        labels: {
            top: "DIGITAL",
            main: "MARKETING",
        },
        axisLine: {
            x1: 600,
            y1: 450,
            x2: 438,
            y2: 305,
        },
    },
    automation: {
        id: "automation",
        spinId: "spin_automation",
        groupId: "g_automation",
        name: "Process Automation",
        center: { x: 743, y: 307 },
        radius: 70,
        innerPitchRadius: 50,
        guideRingRadius: 76,
        teethCount: 10,
        initialToothOffsetDeg: 0,
        color: "var(--pic-turquoise, #3dbcc7)",
        glowColor: "rgba(61, 188, 199, 0.65)",
        accentHex: "#3dbcc7",
        labels: {
            main: "AUTOMATION",
        },
        axisLine: {
            x1: 600,
            y1: 450,
            x2: 743,
            y2: 307,
        },
    },
    development: {
        id: "development",
        spinId: "spin_dev",
        groupId: "g_dev",
        name: "Modern Engineering",
        center: { x: 428, y: 592 },
        radius: 90,
        innerPitchRadius: 65,
        guideRingRadius: 96,
        teethCount: 14,
        initialToothOffsetDeg: 0,
        color: "var(--pic-blue, #0089d0)",
        glowColor: "rgba(0, 137, 208, 0.65)",
        accentHex: "#0089d0",
        labels: {
            icon: "</>",
            main: "DEVELOPMENT",
        },
        axisLine: {
            x1: 600,
            y1: 450,
            x2: 428,
            y2: 592,
        },
    },
    data: {
        id: "data",
        spinId: "spin_data",
        groupId: "g_data",
        name: "Data Intelligence",
        center: { x: 786, y: 591 },
        radius: 100,
        innerPitchRadius: 75,
        guideRingRadius: 106,
        teethCount: 16,
        initialToothOffsetDeg: 11.25,
        color: "var(--pic-gold, #fdb913)",
        glowColor: "rgba(253, 185, 19, 0.65)",
        accentHex: "#fdb913",
        labels: {
            top: "DATA",
            main: "INTELLIGENCE",
        },
        axisLine: {
            x1: 600,
            y1: 450,
            x2: 786,
            y2: 591,
        },
    },
};

export const SATELLITE_GEAR_LIST: SatelliteGearConfig[] = [
    SATELLITE_GEARS.marketing,
    SATELLITE_GEARS.automation,
    SATELLITE_GEARS.development,
    SATELLITE_GEARS.data,
];

/**
 * Compute the precise kinematic gear ratio between AI core and satellite
 */
export function calculateGearRatio(satelliteTeeth: number): number {
    return CENTRAL_AI_GEAR.teethCount / satelliteTeeth;
}

/**
 * Compute the counter-rotation angle for a satellite gear
 */
export function calculateSatelliteRotation(satelliteTeeth: number, totalBaseDegrees: number): number {
    return -calculateGearRatio(satelliteTeeth) * totalBaseDegrees;
}

/**
 * Resolve ViewBox string based on active scale setting and device viewport
 */
export function resolveEngineViewBox(gearSize: "standard" | "large" | "max", isMobile: boolean): string {
    const preset = VIEWBOX_PRESETS[gearSize] || VIEWBOX_PRESETS.large;
    return isMobile ? preset.mobile : preset.desktop;
}
